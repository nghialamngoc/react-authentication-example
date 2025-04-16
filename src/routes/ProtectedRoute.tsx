import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { ReactNode } from 'react'

interface ProtectedRouteProps {
  children: ReactNode
  adminOnly?: boolean
}

export const ProtectedRoute = ({ children, adminOnly = false }: ProtectedRouteProps) => {
  const { user, isAdmin, loading } = useAuth()

  if (loading) {
    return <div>...Loading</div>
  }

  if (!user) {
    return <Navigate to="/login" />
  }

  if (adminOnly && !isAdmin) {
    return <Navigate to="/dashboard" />
  }

  return <>{children}</>
}
