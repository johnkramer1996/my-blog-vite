import { MEMBER_ROLES, MemberRole } from 'shared/model'
import { config } from './config'

type PATH_PAGE = {
  root: string | ((...args: string[]) => string)
  [page: string]: string | ((...args: string[]) => string) | PATH_PAGE
}

export const PATH_PAGE = {
  root: '/',
  signUp: '/sign-up',
  signIn: '/sign-in',
  posts: {
    root: '/',
    slug: (slug: string) => `/posts/${slug}`,
  },
  members: {
    root: `/members`,
    member: {
      root: (login: string) => `/members/${login}`,
      posts: (login: string) => `/members/${login}/posts`,
    },
  },
  cabinet: {
    root: '/cabinet',
    settings: '/cabinet/settings',
    posts: {
      root: `/cabinet/posts`,
      createPost: `/cabinet/posts/create`,
      updatePost: (slug: string) => `/cabinet/posts/${slug}/update`,
    },
    members: {
      root: `/cabinet/members`,
      member: (login: string) => `/cabinet/members/${login}`,
    },
    messages: {
      root: `/cabinet/messages`,
      member: (login: string) => `/cabinet/messages/${login}`,
    },
  },
  404: '/404',
  error: '/error',
} as const satisfies PATH_PAGE

type PATH_PAGE_PERMISSION = {
  [key: string]: MemberRole[] | PATH_PAGE_PERMISSION
}

export const PATH_PAGE_PERMISSION = {
  cabinet: {
    root: [],
    settings: [],
    posts: {
      root: [],
      createPost: [MEMBER_ROLES.admin, MEMBER_ROLES.editor, MEMBER_ROLES.author],
      updatePost: [MEMBER_ROLES.admin, MEMBER_ROLES.editor, MEMBER_ROLES.author],
    },
    members: {
      root: [],
      member: [],
    },
    messages: {
      root: [],
      member: [],
    },
  },
} as const satisfies PATH_PAGE_PERMISSION

export const PATH_IMAGE = (image: string) => `${config.SITE_ENDPOINT}/${image}`

type PATH_CABINET_MENU = { to: string; name: string; roles: MemberRole[] }

export const PATH_CABINET_MENU = [
  { to: PATH_PAGE.cabinet.root, name: 'Dashboard', roles: [MEMBER_ROLES.admin, MEMBER_ROLES.editor, MEMBER_ROLES.author] },
  { to: PATH_PAGE.cabinet.posts.root, name: 'Posts', roles: PATH_PAGE_PERMISSION.cabinet.posts.root },
  { to: PATH_PAGE.cabinet.members.root, name: 'Members', roles: PATH_PAGE_PERMISSION.cabinet.members.root },
  { to: PATH_PAGE.cabinet.settings, name: 'Settings', roles: PATH_PAGE_PERMISSION.cabinet.settings },
  { to: PATH_PAGE.cabinet.messages.root, name: 'Messages', roles: PATH_PAGE_PERMISSION.cabinet.messages.root },
] as const satisfies PATH_CABINET_MENU[]
