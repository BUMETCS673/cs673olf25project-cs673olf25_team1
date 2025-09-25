import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'accounts' })
export class Account {

    @PrimaryColumn({ name: 'username' })
	username: string;

	@Column({ name: 'password' })
	password: string;

	@Column({ name: 'fullname' })
	fullname: string;
}
