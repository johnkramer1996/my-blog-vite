export type MemberRole = 'admin' | 'editor' | 'author' | 'contributor' | 'subscriber'

export const MEMBER_ROLES = {
  admin: 'admin',
  editor: 'editor',
  author: 'author',
  contributor: 'contributor',
  subscriber: 'subscriber',
} as const satisfies Record<MemberRole, MemberRole>
