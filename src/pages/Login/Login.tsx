import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GoogleLogin } from '@react-oauth/google'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { login, googleLogin } from '@/services/authService'
import { useAuth } from '@/hooks/useAuth'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

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

  // Xử lý đăng nhập Google
  const handleGoogleSuccess = async (credentialResponse: any) => {
    const idToken = credentialResponse.credential

    try {
      const response = await googleLogin(idToken)
      if (response.success) {
        authLogin(response.data.accessToken, response.data.user)
        navigate('/dashboard')
      } else {
        setError(response.message || 'Google login failed')
      }
    } catch (err) {
      setError('Failed to login with Google')
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
                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? 'Logging in...' : 'Login'}
                </Button>
              </Form>
            )}
          </Formik>
          <div className="mt-4 flex justify-center">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={() => setError('Google login failed')}
              text="signin_with"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
