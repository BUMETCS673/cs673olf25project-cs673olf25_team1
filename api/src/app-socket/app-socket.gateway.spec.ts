import { Test, TestingModule } from '@nestjs/testing';
import { AppSocketGateway } from './app-socket.gateway';
import { AppService } from '../app.service'

describe('AppSocketGateway', () => {
  let gateway: AppSocketGateway;
  let appService: AppService;
  let client: any;

  beforeEach(async () => {
    // Mock AppService
    appService = {
      getLlmAnswer: jest.fn(),
    } as any;

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AppSocketGateway,
        { provide: AppService, useValue: appService },
      ],
    }).compile();

    gateway = module.get<AppSocketGateway>(AppSocketGateway);

    // Mock client socket
    client = { emit: jest.fn() };
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });

  it('should call getLlmAnswer and emit ai_answer', async () => {
    (appService.getLlmAnswer as jest.Mock).mockResolvedValue('AI reply');
    const data = { message: 'Hello?' };

    await gateway.handleAskAi(data, client);

    expect(appService.getLlmAnswer).toHaveBeenCalledWith('Hello?');
    expect(client.emit).toHaveBeenCalledWith('ai_answer', { reply: 'AI reply' });
  });
});