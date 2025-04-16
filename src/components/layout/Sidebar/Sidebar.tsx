import { Link } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'

export const Sidebar = () => {
  const { isAdmin } = useAuth()

  return (
    <aside className="w-64 bg-gray-100 h-screen p-4">
      <nav className="space-y-2">
        <Link to="/dashboard" className="block p-2 hover:bg-gray-200 rounded">
          Dashboard
        </Link>
        {isAdmin && (
          <Link to="/detail-user" className="block p-2 hover:bg-gray-200 rounded">
            Detail User
          </Link>
        )}
      </nav>
    </aside>
  )
}
