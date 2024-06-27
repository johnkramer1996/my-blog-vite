import { VoteEntity, updateVote } from './update-vote'
import { Vote } from './vote'

export const findAndUpdateVote = <T extends VoteEntity>(entities: T[], vote: Vote, find: (el: T) => boolean) => {
  const entity = entities.find(find)
  if (!entity) return

  updateVote(entity, vote)
}
