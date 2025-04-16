import axios, { RequestConfig } from '@/lib/axios'
import { Response, User } from '@/types'

export const getUserById = async (id: string, config?: RequestConfig): Promise<Response<User>> => {
  const response = await axios.get(`/users/${id}`, {
    ...config,
  })
  return response.data.data
}

export const getUsers = async (
  config?: RequestConfig,
): Promise<Response<{ users: User[]; total: number; page: number; limit: number }>> => {
  return await axios.get(`/users`, {
    ...config,
  })
}
