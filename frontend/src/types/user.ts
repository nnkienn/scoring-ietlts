export type Role = 'student' | 'teacher'

export interface User {
  id: string
  username: string
  email: string
  role: Role
  avatarUrl?: string
  dateOfBirth?: string
  token?: string
  createdAt?: string
}
