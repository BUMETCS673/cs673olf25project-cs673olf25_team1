import { Test, TestingModule } from '@nestjs/testing';
import { AppSocketGateway } from './app-socket.gateway';
import { AppService } from '../app.service'
import { Socket } from 'socket.io';

interface MockClient {
  emit: jest.Mock;
}
describe('AppSocketGateway', () => {
  let gateway: AppSocketGateway;
  let appService: AppService;
  let client: MockClient;

  beforeEach(async () => {
    // Mock AppService
    appService = {
      getLlmAnswer: jest.fn(),
    } as unknown as AppService;

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

    // Adjust the client mock to match the expected Socket type
    await gateway.handleAskAi(data, client as unknown as Socket);

    expect(appService.getLlmAnswer).toHaveBeenCalledWith('Hello?');
    expect(client.emit).toHaveBeenCalledWith('ai_answer', { reply: 'AI reply' });
  });
});