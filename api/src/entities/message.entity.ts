import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'messages' })
export class Message {
	@PrimaryColumn()
	id: number;

	@Column({ name: 'message_owner' })
	message_owner: string;

	@Column({ name: 'message_content' })
	message_content: string;

	@Column({ name: 'created_at' })
	created_at: Date;
}
