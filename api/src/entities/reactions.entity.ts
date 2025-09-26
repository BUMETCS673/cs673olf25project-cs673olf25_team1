import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'reactions' })
export class Reaction {
	@PrimaryColumn({name: 'id'})
	id: number;

	@Column({name: 'message_id'})
	message_id: number;

	@Column({name: 'reaction_owner'})
	reaction_owner: string;

	@Column({name: 'reaction_type'})
	reaction_type: string;
}
