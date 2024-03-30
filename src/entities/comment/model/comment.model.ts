import { Member } from 'entities/member'

export type CommentId = string

export type Comment = {
  id: CommentId
  createdAt: string
  updatedAt: string | null
  parentId: string | null
  text: string
  points: number
  countChild: number
  wasUpvotedByMe: boolean
  wasDownvotedByMe: boolean
  member: Member
}

// TODO: CHANGE TO MEMBER ID AND
