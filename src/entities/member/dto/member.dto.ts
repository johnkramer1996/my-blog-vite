import { MemberRole } from 'shared/model'

export type MemberDto = {
  id: string
  roles: MemberRole[]
  reputation: number
  avatar: string | null
  email: string
  login: string
  isOnline: boolean
  isBanned: boolean
}
