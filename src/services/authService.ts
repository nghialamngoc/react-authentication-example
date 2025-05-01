import axios, { RequestConfig } from '@/lib/axios'
import { AuthResponse, LoginInput, Response, User } from '@/types'

export const login = async (input: LoginInput): Promise<AuthResponse> => {
  return await axios.post(`/auth/login`, input)
}

export const googleLogin = async (accessToken: string): Promise<AuthResponse> => {
  return await axios.post(`/auth/google-login`, { accessToken })
}

export const facebookLogin = async (accessToken: string): Promise<AuthResponse> => {
  return await axios.post(`/auth/facebook-login`, { accessToken })
}

export const refreshToken = async (): Promise<AuthResponse> => {
  return await axios.post(`/auth/refresh-token`)
}

export const getUser = async (config?: RequestConfig): Promise<Response<User>> => {
  return await axios.get('/auth/user', {
    ...config,
  })
}
