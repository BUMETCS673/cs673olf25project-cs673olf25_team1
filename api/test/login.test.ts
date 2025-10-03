import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountService } from '../src/services/account.service';
import { Account } from '../src/entities/account.entity';

describe('AccountService', () => {
  let service: AccountService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
        type: 'postgres',
        // host: 'chit-chat-db.cvw8iaemureu.us-east-2.rds.amazonaws.com',
        host: process.env.POSTGRES_HOST || 'localhost',
        port: Number(process.env.POSTGRES_PORT) || 5432,
        username: process.env.POSTGRES_USER || 'postgres',
        password: process.env.POSTGRES_PASSWORD || '.]zP>X7jM?>-kw8OV(X?$#SkTm2d',
        database: process.env.POSTGRES_DB || 'chit-chat_test',
        synchronize: true,
        dropSchema: true,
        // ssl: { rejectUnauthorized: false },
        ssl: false,
        entities: [Account],
        }),
        TypeOrmModule.forFeature([Account]),
      ],
      providers: [AccountService],
    }).compile();

    service = module.get<AccountService>(AccountService);
  });

  it('should register a new account successfully', async () => {
    const account = await service.register('testuser', 'password123', 'Test User');
    expect(account.username).toBe('testuser');
    expect(account.fullname).toBe('Test User');
  });

  it('should throw an error if username already exists', async () => {
    await expect(service.register('testuser', 'anotherpassword', 'Duplicate User')).rejects.toThrow(
      'Username already exists'
    );
  });

  it('should find account by username', async () => {
    const account = await service.findByUsername('testuser');
    expect(account).not.toBeNull();
    expect(account?.username).toBe('testuser');
  });
});