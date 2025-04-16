import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { getUsers } from '@/services/userService'
import { useAuth } from '@/hooks/useAuth'
import { User } from '@/types'

let controller: AbortController

export const Dashboard = () => {
  const [data, setData] = useState<{ users: User[]; total: number; page: number; limit: number }>()
  const { isAdmin } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        controller?.abort()
        controller = new AbortController()

        const data = await getUsers({
          signal: controller.signal,
        })

        if (data.success) {
          setData(data.data)
        }
      } catch (err) {
        console.log('err', err)
      }
    }
    fetchUsers()
  }, [])

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Avatar</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Roles</TableHead>
            {isAdmin && <TableHead>Actions</TableHead>}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.users?.map(user => (
            <TableRow key={user.id}>
              <TableCell>
                <Avatar>
                  <AvatarImage src={`https://ui-avatars.com/api/?name=${user.name}`} />
                  <AvatarFallback>{user?.name?.[0]}</AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.roles.join(', ')}</TableCell>
              {isAdmin && (
                <TableCell>
                  <button onClick={() => navigate(`/detail-user/${user.id}`)} className="text-blue-500 hover:underline">
                    View Details
                  </button>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
