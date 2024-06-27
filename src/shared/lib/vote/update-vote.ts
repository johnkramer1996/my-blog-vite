import { Vote } from './vote'

export type VoteEntity = { points: number; wasUpvotedByMe: boolean; wasDownvotedByMe: boolean }

export const updateVote = <T extends VoteEntity>(entity: T, vote: Vote) => {
  const currentVote = entity.wasUpvotedByMe ? 'upvote' : entity.wasDownvotedByMe ? 'downvote' : null

  const isUpvote = vote === 'upvote'
  const isDownvote = vote === 'downvote'

  if (!currentVote) {
    entity.points += isUpvote ? 1 : -1
    entity.wasUpvotedByMe = isUpvote
    entity.wasDownvotedByMe = isDownvote
    return
  }
  if ((isUpvote && currentVote === 'downvote') || (isDownvote && currentVote === 'upvote')) {
    entity.points += isUpvote ? 1 : -1
    entity.wasUpvotedByMe = false
    entity.wasDownvotedByMe = false
    return
  }
}
