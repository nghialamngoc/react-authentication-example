import { Button } from '@/components/ui/button'
import { useAuth } from '@/hooks/useAuth'
import { useNavigate } from 'react-router-dom'

export const Header = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <h1 className="text-xl font-bold">My App</h1>
      {user && (
        <div className="flex items-center space-x-4">
          <span>Welcome, {user.name}</span>
          <Button
            variant="outline"
            onClick={() => {
              logout()
              navigate('/login')
            }}
          >
            Logout
          </Button>
        </div>
      )}
    </header>
  )
}
