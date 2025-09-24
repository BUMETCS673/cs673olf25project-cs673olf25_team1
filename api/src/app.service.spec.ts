import { basePrompt } from './ai.prompt';
// Type-only import to avoid hoisting the module at runtime
import type { AppService } from './app.service';

// Declare groqMockInstance in the correct scope
let groqMockInstance: {
    chat: {
        completions: {
            create: jest.Mock;
        };
    };
} = {
    chat: {
        completions: {
            create: jest.fn(),
        },
    },
};

// Mock groq-sdk
// Use doMock (non-hoisted) so the mock factory runs after our instance is initialized
jest.doMock('groq-sdk', () => {
    return jest.fn().mockImplementation(() => groqMockInstance);
});

describe('AppService', () => {
    let appService: AppService;

    beforeEach(() => {
        // Require AppService after mocking 'groq-sdk' to ensure the mock is used
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { AppService: AppServiceRuntime } = require('./app.service');
    // Create runtime instance but keep the test variable typed as AppService
    appService = new AppServiceRuntime() as AppService;
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