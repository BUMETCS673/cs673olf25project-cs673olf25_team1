import { Injectable } from '@nestjs/common';
import { basePrompt } from './ai.prompt';
import Groq from 'groq-sdk';
import 'dotenv/config';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async getLlmAnswer(userMessage: string): Promise<string> {
    try {
      const completion = await groq.chat.completions.create({
        model: 'groq/compound-mini',
        messages: [
          { role: 'system', content: basePrompt },
          { role: 'user', content: userMessage }
        ],
      });
      return completion.choices?.[0]?.message?.content ?? 'No response from AI.';
    } catch (error) {
      console.error('Groq API error:', error);
      return 'Sorry, there was an error contacting the AI service.';
    }
  }
}