import axios, { RequestConfig } from '@/lib/axios'
import { AuthResponse, LoginInput, Response, User } from '@/types'

export const login = async (input: LoginInput): Promise<AuthResponse> => {
  return await axios.post(`/auth/login`, input)
}

export const googleLogin = async (idToken: string): Promise<AuthResponse> => {
  return await axios.post(`/auth/google-login`, { idToken })
}

export const refreshToken = async (): Promise<AuthResponse> => {
  const response = await axios.post(`/auth/refresh-token`)
  return response.data
}

export const getUser = async (config?: RequestConfig): Promise<Response<User>> => {
  return await axios.get('/auth/user', {
    ...config,
  })
}
