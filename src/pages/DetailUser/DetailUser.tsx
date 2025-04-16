import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { getUserById } from '@/services/userService'
import { User } from '@/types'

export const DetailUser = () => {
  const { id } = useParams<{ id: string }>()
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const fetchUser = async () => {
      if (id) {
        const { success, data } = await getUserById(id)
        if (success) {
          setUser(data)
        }
      }
    }
    fetchUser()
  }, [id])

  if (!user) return <div>Loading...</div>

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">User Details</h2>
      <Card>
        <CardHeader>
          <CardTitle>{user.name}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src={`https://ui-avatars.com/api/?name=${user.name}`} />
              <AvatarFallback>{user.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Roles:</strong> {user.roles.join(', ')}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
