import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserMessagesReceived } from '../entities/user_messages_recieved.entity';

@Injectable()
export class UserMessagesReceivedService {
    constructor(
        @InjectRepository(UserMessagesReceived)
        private readonly userMessagesReceivedRepository: Repository<UserMessagesReceived>,
    ) { }

    async findUserMessagesReceived(username: string) {
        return this.userMessagesReceivedRepository.find({
            where: { username: username },
        });
    }

    async insertUserMessagesReceived(username: string, messageId: number) {
        const userMessage = this.userMessagesReceivedRepository.create({
            username: username,
            message_id: messageId,
        });
        return this.userMessagesReceivedRepository.save(userMessage);
    }
}