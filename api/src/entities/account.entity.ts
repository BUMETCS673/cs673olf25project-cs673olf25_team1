// entities/account.entity.ts

// AI-generated-code: 50% (AI chat link: https://chatgpt.com/c/68e1e0fc-6d10-8325-a14e-87eec02664a2). 
// Added user customizable displayName, avatar, and themeColor fields.
// Human code: 50%

import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'accounts' })
export class Account {

    @PrimaryColumn({ name: 'username' })
	username: string;

	@Column({ name: 'password' })
	password: string;

	@Column({ name: 'fullname' })
	fullname: string;

	@Column({ nullable: true })
	displayName?: string;

	@Column({ nullable: true })
	avatar: string;

    @Column({ nullable: true })
    themeColor?: string;
}
