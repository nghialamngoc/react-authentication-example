import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGoogleLogin } from '@react-oauth/google'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { login, googleLogin, facebookLogin } from '@/services/authService'
import { useAuth } from '@/hooks/useAuth'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import IconGoogle from '@/components/icons/IconGoogle'
import IconFB from '@/components/icons/IconFB'

// Validation schema với Yup
const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
})

export const Login = () => {
  const [error, setError] = useState('')
  const { user, login: authLogin } = useAuth()
  const navigate = useNavigate()

  // Nếu đã đăng nhập, chuyển hướng về Dashboard
  useEffect(() => {
    if (user) {
      navigate('/dashboard')
    }
  }, [user, navigate])

  // Xử lý đăng nhập email/password
  const handleLogin = async (values: { email: string; password: string }, { setSubmitting }: any) => {
    try {
      const { success, data, message } = await login(values)
      if (success) {
        authLogin(data.accessToken, data.user)
        navigate('/dashboard')
      } else {
        setError(message || 'Login failed')
      }
    } catch (err) {
      setError('Failed to login')
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
        const response = await googleLogin(accessToken)
        if (response.success) {
          authLogin(response.data.accessToken, response.data.user)
          navigate('/dashboard')
        } else {
          setError(response.message || 'Google login failed')
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

      console.log('accessToken', accessToken)

      const response = await facebookLogin(accessToken)
      if (response.success) {
        authLogin(response.data.accessToken, response.data.user)
        navigate('/dashboard')
      } else {
        setError(response.message || 'Facebook login failed')
      }
    } catch (err) {
      console.error('Facebook login error:', err)
      setError('Failed to login with Facebook')
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
          {error && <p className="text-red-500 mb-4">{error}</p>}
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
        </CardContent>
      </Card>
    </div>
  )
}
