import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGoogleLogin } from '@react-oauth/google'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { login, googleLogin, facebookLogin, enable2FA } from '@/services/authService'
import { useAuth } from '@/hooks/useAuth'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import IconGoogle from '@/components/icons/IconGoogle'
import IconFB from '@/components/icons/IconFB'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { QRCodeCanvas } from 'qrcode.react'

// Validation schema với Yup
const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
})

const OTPSchema = Yup.object().shape({
  otp: Yup.string().length(6, 'OTP must be 6 digits').required('OTP is required'),
})

export const Login = () => {
  const { user, login: authLogin } = useAuth()
  const navigate = useNavigate()

  const [error, setError] = useState('')
  const [showQRCode, setShowQRCode] = useState(false)
  const [showOTPForm, setShowOTPForm] = useState(false)
  const [qrCodeUrl, setQRCodeUrl] = useState('')
  const [tempSecret, setTempSecret] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (user) {
      navigate('/')
    }
  }, [user, navigate])

  // Xử lý đăng nhập email/password
  const handleLogin = async (values: { email: string; password: string }, { setSubmitting }: any) => {
    try {
      const { success, data, message } = await login(values)

      if (success && data.requires2FA) {
        setEmail(values.email)
        if (data.qrCodeUrl) {
          // Hiển thị mã QR để kích hoạt 2FA
          setQRCodeUrl(data.qrCodeUrl)
          setTempSecret(data.tempSecret!)
          setShowQRCode(true)
        } else {
          // Hiển thị form OTP để xác minh 2FA
          setShowOTPForm(true)
        }
      } else if (success && data.accessToken) {
        authLogin(data.accessToken, data.user)
        navigate('/')
      } else {
        setError(message || 'Login failed')
      }
    } catch (err) {
      setError('Failed to login')
    } finally {
      setSubmitting(false)
    }
  }

  // Xử lý kích hoạt 2FA
  const handleEnable2FA = async (values: { otp: string }, { setSubmitting }: any) => {
    try {
      const { success, data } = await enable2FA({ email, otp: values.otp, tempSecret })
      if (success && data.accessToken && data.recoveryCodes) {
        authLogin(data.accessToken, data.user)
        alert('Please save these recovery codes: ' + data.recoveryCodes.join(', '))
        setShowQRCode(false)
        navigate('/')
      } else {
        setError('Invalid OTP')
      }
    } catch (err) {
      setError('Failed to enable 2FA')
    } finally {
      setSubmitting(false)
    }
  }

  const googleLoginHook = useGoogleLogin({
    onSuccess: async credentialResponse => {
      const accessToken = credentialResponse.access_token // Lấy access_token

      if (!accessToken) {
        setError('No access token returned from Google')
        return
      }

      try {
        const { success, data, message } = await googleLogin(accessToken)
        if (success && data.accessToken) {
          authLogin(data.accessToken, data.user)
          navigate('/')
        } else {
          setError(message || 'Google login failed')
        }
      } catch (err) {
        console.error('Google login error:', err)
        setError('Failed to login with Google')
      }
    },
    onError: error => {
      console.error('Google login error:', error)
      setError('Google login failed')
    },
    flow: 'implicit', // Sử dụng implicit flow để lấy access_token
    scope: 'email profile', // Quyền cần thiết để lấy thông tin người dùng
  })

  const handleFacebookLogin = async () => {
    try {
      const fbResponse = await new Promise<any>((resolve, reject) => {
        ;(window as any).FB.login(
          (response: any) => {
            if (response.authResponse) {
              resolve(response)
            } else {
              reject(new Error('Facebook login failed'))
            }
          },
          { scope: 'public_profile,email' },
        )
      })

      const accessToken = fbResponse.authResponse.accessToken

      const { success, data, message } = await facebookLogin(accessToken)
      if (success && data.accessToken) {
        authLogin(data.accessToken, data.user)
        navigate('/')
      } else {
        setError(message || 'Facebook login failed')
      }
    } catch (err) {
      setError('Failed to login with Facebook')
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>{showQRCode ? 'Setup 2FA' : showOTPForm ? 'Enter OTP' : 'Login'}</CardTitle>
        </CardHeader>
        <CardContent>
          {error && <p className="text-red-500 mb-4">{error}</p>}

          {showQRCode && (
            <div className="space-y-4">
              <p>Scan this QR code with Google Authenticator or Authy:</p>
              <img src={qrCodeUrl} width={200} />
              <Formik initialValues={{ otp: '' }} validationSchema={OTPSchema} onSubmit={handleEnable2FA}>
                {({ isSubmitting }) => (
                  <Form className="space-y-4">
                    <div>
                      <Field as={Input} type="text" name="otp" placeholder="Enter OTP" className="w-full" />
                      <ErrorMessage name="otp" component="p" className="text-red-500 text-sm mt-1" />
                    </div>
                    <Button type="submit" disabled={isSubmitting} className="w-full cursor-pointer">
                      {isSubmitting ? 'Verifying...' : 'Enable 2FA'}
                    </Button>
                  </Form>
                )}
              </Formik>
            </div>
          )}

          {!showQRCode && !showOTPForm && (
            <>
              <Formik initialValues={{ email: '', password: '' }} validationSchema={LoginSchema} onSubmit={handleLogin}>
                {({ isSubmitting }) => (
                  <Form className="space-y-4">
                    <div>
                      <Field as={Input} type="email" name="email" placeholder="Email" className="w-full" />
                      <ErrorMessage name="email" component="p" className="text-red-500 text-sm mt-1" />
                    </div>
                    <div>
                      <Field as={Input} type="password" name="password" placeholder="Password" className="w-full" />
                      <ErrorMessage name="password" component="p" className="text-red-500 text-sm mt-1" />
                    </div>
                    <Button type="submit" disabled={isSubmitting} className="w-full cursor-pointer">
                      {isSubmitting ? 'Logging in...' : 'Login'}
                    </Button>
                  </Form>
                )}
              </Formik>

              <div className="mt-4 flex justify-center gap-8">
                {/* Google Login với biểu tượng */}
                <div className="cursor-pointer" onClick={() => googleLoginHook()}>
                  <IconGoogle />
                </div>

                <div className="cursor-pointer" onClick={() => handleFacebookLogin()}>
                  <IconFB />
                </div>
              </div>
            </>
          )}
        </CardContent>
      </Card>

      <Tabs defaultValue="email" className="w-full mt-24">
        <h3 className="text-2xl">Sequence Diagram</h3>
        <TabsList>
          <TabsTrigger value="email">Login Email + Password + 2FA</TabsTrigger>
          <TabsTrigger value="google">Login Google</TabsTrigger>
          <TabsTrigger value="facebook">Login Facebook</TabsTrigger>
        </TabsList>
        <TabsContent value="email">
          <img src="https://www.plantuml.com/plantuml/png/dLHBJzjC5DtxLrnb1VhWGs8PAHNXGH_b4S2exNBY3B6BFUFQOr24M5GikkYcLHTTT8MYgke3gPMwSXPT6FL_-9_qpWGF4vFWW5Vnv9mxvnwVUvTYGIAH1Bv57C4Zs8zfP8Luv3bUI9Y0zOWpGLa7I0orNOeeQ8PXRGIpJ9p30hB5E_J_bp4qMuz7GQj4a3Q9gK9jSjRbgykZYDf3phi-XMOYNChmcA2Y1VdMgo5BdUFTbjLemEMxopFM1URcwKK8xJpzXMzh0V5y-0zQ98wFUTI1HiEI3S7y0zr77RQ672h1Sn1UOQq2W63LaCAsjlTiMF1vrsDmKcASMWgc6BgxEjZPZm0IlBLGfMYMRd_Uh6z7UTg7etpmUaYPATq1BedTEH37V5rzdpL6sZxj62Txr8cecDLQpEhFitC70e-vrrqINrpRu-Q3VWX-FdXZ0JxolyNr9bo-p_fI_8MmuEhHrKUSV95zIy39qoy914ZPjbkAGFsOgaAE-_SdcLJ9T25Fppcqimi891Pih5HnjM7SoQje1KEt7w5lWWRXq97Jee0cgGeo3dLuvEM3CmO23NYhfE_iQlXLO8gqrM4doRwAIjH6ddxkAPGfVcBwoi1RqaVLDvzVF20wWbo4utkzDGN5fTAsJvx1rtIPWCqXg1GE_OpD_8hgIGsZk17MXeWIUYEn8qNBms48LqKPECODcYg3flKUkjblrgsGNKhHHZxuw46jL0Bpdx9kpU1NXyYNbJG3WT9Bo_ojnEhH6wEsIgKzf0YFeK9p-vLbJosta8OBTKnAPbYU_abA6s5MxjG9Yw9w9ghdeM8MZcZa7VJAip3C_nssiS9NRkHoOkyyO6N-v0chtevFdjaWE9xSOJ4Inw5nR4lMd39Xp5BK-LXnavvA22vjbAy2XG5WiD0XiTlc9EfOKm_T_GTk-lIQmsKc-Icg5eZCKWVy91zyO5qposZDTu9NoYxxZf7gQRo_b-Vtyte96KdW_mC0" />
        </TabsContent>
        <TabsContent value="google">Google</TabsContent>
        <TabsContent value="facebook">Facebook</TabsContent>
      </Tabs>

      <div></div>
    </div>
  )
}
