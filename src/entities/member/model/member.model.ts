import { MemberRole } from 'shared/model'

export type Member = {
  id: string
  roles: MemberRole[]
  reputation: number
  avatar: string | null
  email: string
  login: string
  status: 'online' | 'offline'
  isBanned: boolean
  editPermission: boolean
  deletePermission: boolean
}
