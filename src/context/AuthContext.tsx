import { createContext, useState, useEffect, ReactNode } from 'react'
import { User } from '@/types'
import { getUser } from '@/services/authService'

interface AuthContextType {
  user: User | null
  login: (accessToken: string, user: User) => void
  logout: () => void
  isAdmin: boolean
  loading: boolean
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetch = async () => {
      try {
        const { success, data } = await getUser()

        if (success) {
          setUser(data)
        }
      } catch (err) {
      } finally {
        setLoading(false)
      }
    }

    fetch()
  }, [])

  useEffect(() => {
    ;(window as any).fbAsyncInit = function () {
      ;(window as any).FB.init({
        appId: '1299738751125160', // Thay bằng App ID của bạn
        cookie: true,
        xfbml: true,
        version: 'v20.0',
      })
    }

    // Load Facebook SDK
    ;(function (d, s, id) {
      const fjs = d.getElementsByTagName(s)[0]
      if (d.getElementById(id)) return
      const js = d.createElement(s) as HTMLScriptElement
      js.id = id
      js.src = 'https://connect.facebook.net/en_US/sdk.js'
      fjs.parentNode?.insertBefore(js, fjs)
    })(document, 'script', 'facebook-jssdk')
  }, [])

  const login = (token: string, user: User) => {
    setUser(user)
    localStorage.setItem('accessToken', token)
    localStorage.setItem('user', JSON.stringify(user))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('accessToken')
    localStorage.removeItem('user')
  }

  const isAdmin = user?.roles.includes('admin') || false

  return <AuthContext.Provider value={{ user, login, logout, isAdmin, loading }}>{children}</AuthContext.Provider>
}
