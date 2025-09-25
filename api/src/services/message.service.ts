import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { Message } from '../entities/message.entity';

@Injectable()
export class MessageService {
    constructor(
        @InjectRepository(Message)
        private readonly messageRepository: Repository<Message>,
    ) { }

    async findMessagesByIds(ids: number[]) {
        return this.messageRepository.find({
            where: { id: In(ids) },
        });
    }

    async findMessagesByOwner(message_owner: string) {
        return this.messageRepository.find({
            where: { message_owner: message_owner },
        });
    }

    async insertMessage(message_owner: string, message_content: string) {
        const message = this.messageRepository.create({
            message_owner: message_owner,
            message_content: message_content,
            created_at: new Date(),
        });
        return this.messageRepository.save(message);
    }
}