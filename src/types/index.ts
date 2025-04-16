export interface User {
  id: string
  email: string
  name: string
  roles: string[]
}

export type AuthResponse = Response<{
  accessToken: string
  user: User
}>

export interface LoginInput {
  email: string
  password: string
}

export interface Response<T> {
  success: boolean
  error?: any
  data: T
  message?: string
}
