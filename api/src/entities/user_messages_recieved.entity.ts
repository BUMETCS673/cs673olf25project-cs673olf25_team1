import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'user_messages_recieved' })
export class UserMessagesReceived {
    @PrimaryColumn({name: 'id'})
    id: number;

    @Column({name: 'username'})
    username: string;

    @Column({name: 'message_id'})
    message_id: number;
}
