import { Test, TestingModule } from '@nestjs/testing';
import { AppSocketGateway } from './app-socket.gateway';
import { Message } from '../entities/message.entity';
import { AccountService } from '../services/account.service';
import { MessageService } from '../services/message.service';
import { UserMessagesReceivedService } from '../services/user_messages_recieved.service';
import { ReactionService } from '../services/reaction.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Account } from '../entities/account.entity';
import { UserMessagesReceived } from '../entities/user_messages_recieved.entity';
import { Reaction } from '../entities/reactions.entity';

describe('AppSocketGateway', () => {
  let gateway: AppSocketGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AppSocketGateway,
        AccountService,
        MessageService,
        ReactionService,
        UserMessagesReceivedService,
        {
          provide: getRepositoryToken(Account),
          useValue: {
            create: jest.fn(),
            save: jest.fn(),
          },
        },
        {
          provide: getRepositoryToken(Message),
          useValue: {
            find: jest.fn(),
            create: jest.fn(),
            save: jest.fn(),
          },
        },
        {
          provide: getRepositoryToken(Reaction),
          useValue: {
            find: jest.fn(),
            create: jest.fn(),
            save: jest.fn(),
          },
        },
        {
          provide: getRepositoryToken(UserMessagesReceived),
          useValue: {
            find: jest.fn(),
            create: jest.fn(),
            save: jest.fn(),
          },
        }
      ],
    }).compile();

    gateway = module.get<AppSocketGateway>(AppSocketGateway);
    gateway.server = { emit: jest.fn() } as any;
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });

  it('handleGetExistingMessages: should emit existing messages', async () => {
    const mockSocket = { id: 'socket123', emit: jest.fn() } as any;
    const mockMessages: Message[] = [
      {
        id: 1,
        message_owner: 'admin',
        message_content: 'Hello',
        created_at: new Date(),
      },
      {
        id: 2,
        message_owner: 'admin',
        message_content: 'World',
        created_at: new Date(),
      },
    ];

    jest
      .spyOn(gateway['userMessagesReceivedService'], 'findUserMessagesReceived')
      .mockResolvedValue([{ message_id: 1 }, { message_id: 2 }] as any);
    jest
      .spyOn(gateway['messageService'], 'findMessagesByOwner')
      .mockResolvedValue(mockMessages);
    await gateway.handleGetExistingMessages(mockSocket);

    expect(mockSocket.emit).toHaveBeenCalledWith('recieve-existing-messages', {
      allMessages: expect.any(Array),
    });
  });

  it('handleCreateAccount: should insert message and emit to all clients', async () => {
    const mockSocket = { id: 'socket123', emit: jest.fn() } as any;
    const mockAccount = {
      username: 'admin',
      password: 'password',
      fullname: 'Admin User',
    };

    jest
      .spyOn(gateway['accountService'], 'insertAccount')
      .mockResolvedValue(mockAccount);
    await gateway.handleCreateAccount(mockSocket, mockAccount);
    expect(gateway['server'].emit).toHaveBeenCalledWith('account-created', {
      data: [mockAccount],
    });
  });
});
