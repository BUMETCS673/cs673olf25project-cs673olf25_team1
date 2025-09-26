import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reaction } from '../entities/reactions.entity';

@Injectable()
export class ReactionService {
    constructor(
        @InjectRepository(Reaction)
        private readonly reactionRepository: Repository<Reaction>,
    ) { }

    async findReactionsByMessageId(messageId: number) {
        return this.reactionRepository.find({
            where: { message_id: messageId },
        });
    }

    async insertReaction(reaction_owner: string, messageId: number, reaction_type: string) {
        const reaction = this.reactionRepository.create({
            reaction_owner: reaction_owner,
            message_id: messageId,
            reaction_type: reaction_type,
        });
        return this.reactionRepository.save(reaction);
    }
}