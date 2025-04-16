import { envConfig } from '@/config/envConfig'
import { useAuth } from '@/hooks/useAuth'
import { googleLogin } from '@/services/authService'
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router'

export const OneTapLogin = () => {
  const { login: authLogin } = useAuth()
  const navigate = useNavigate()

  const buttonRef = useRef<HTMLDivElement>(null)

  const [_, setError] = useState('')

  useEffect(() => {
    const init = () => {
      const w = window as any

      w?.google?.accounts?.id?.initialize?.({
        client_id: envConfig.googleClientId,
        callback: handleCredentialResponse,
        auto_select: true,
        cancel_on_tap_outside: true,
      })

      // w?.google?.accounts?.id?.renderButton?.(buttonRef.current, {
      //   theme: 'outline',
      //   size: 'large',
      //   text: 'continue_with', // Hiển thị "Continue as [Tên]"
      //   shape: 'rectangular',
      //   width: 300,
      // })

      if (!localStorage.getItem('accessToken')) {
        w?.google?.accounts?.id?.prompt()
      }
    }
    init()
  }, [])

  const handleCredentialResponse = async (credentialResponse: any) => {
    const idToken = credentialResponse.credential

    if (!idToken) {
      return
    }

    try {
      const response = await googleLogin(idToken)
      if (response.success) {
        authLogin(response.data.accessToken, response.data.user)
        navigate('/dashboard')
      } else {
        setError(response.message || 'Google login failed')
      }
    } catch (err) {
      console.log('error', err)
      setError('Failed to login with Google')
    }
  }

  return <div ref={buttonRef}></div>
}
