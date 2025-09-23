import { AppService } from './app.service';
import { basePrompt } from './ai.prompt';

// Prepare a variable to hold the mock instance
var groqMockInstance: any;

// Mock groq-sdk
jest.mock('groq-sdk', () => {
    return jest.fn().mockImplementation(() => {
        groqMockInstance = {
            chat: {
                completions: {
                    create: jest.fn(),
                },
            },
        };
        return groqMockInstance;
    });
});

describe('AppService', () => {
    let appService: AppService;

    beforeEach(() => {
        appService = new AppService();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should return LLM answer when Groq responds', async () => {
        const mockContent = 'This is a test answer.';
        groqMockInstance.chat.completions.create.mockResolvedValue({
            choices: [{ message: { content: mockContent } }],
        });

        const result = await appService.getLlmAnswer('Test question?');
        expect(result).toBe(mockContent);
        expect(groqMockInstance.chat.completions.create).toHaveBeenCalledWith({
            model: 'groq/compound-mini',
            messages: [
                { role: 'system', content: basePrompt },
                { role: 'user', content: 'Test question?' },
            ],
        });
    });

    it('should return fallback message on Groq error', async () => {
        groqMockInstance.chat.completions.create.mockRejectedValue(new Error('fail'));
        const result = await appService.getLlmAnswer('Test question?');
        expect(result).toMatch(/error/i);
    });

    it('should return fallback message if no content', async () => {
        groqMockInstance.chat.completions.create.mockResolvedValue({
            choices: [{ message: { content: undefined } }],
        });
        const result = await appService.getLlmAnswer('Test question?');
        expect(result).toBe('No response from AI.');
    });
});