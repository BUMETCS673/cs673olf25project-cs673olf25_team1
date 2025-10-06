import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Reaction } from '../entities/reactions.entity';

@Injectable()
export class ReactionService {
  constructor(
    @InjectRepository(Reaction)
    private readonly reactionRepository: Repository<Reaction>,
  ) {}

  async findReactionsByMessageId(messageId: number) {
    return this.reactionRepository.find({
      where: { message_id: messageId },
    });
  }

  async findReactionsByMessageIds(messageIds: number[]) {
    return this.reactionRepository.find({
      where: { message_id: In(messageIds) },
    });
  }

  async insertReaction(
    reaction_owner: string,
    messageId: number,
    reaction_type: string,
  ) {
    const reaction = this.reactionRepository.create({
      reaction_owner: reaction_owner,
      message_id: messageId,
      reaction_type: reaction_type,
    });
    return this.reactionRepository.save(reaction);
  }

  async findReactionByUserAndMessage(username: string, messageId: number) {
    return this.reactionRepository.findOne({
      where: { reaction_owner: username, message_id: messageId },
    });
  }

  async updateReaction(username: string, messageId: number, reaction: string) {
    return this.reactionRepository.update(
      { reaction_owner: username, message_id: messageId },
      { reaction_type: reaction },
    );
  }
  async deleteReaction(reactionId: number) {
    return this.reactionRepository.delete(reactionId);
  }
}
