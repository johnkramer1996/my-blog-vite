import { type SessionDto } from '../dtos/session.dtos'
import { type Session } from '../models/session.model'

export const sessionMapper = (dto: SessionDto): Session => ({
  accessToken: dto.accessToken,
  refreshToken: dto.refreshToken,
})
