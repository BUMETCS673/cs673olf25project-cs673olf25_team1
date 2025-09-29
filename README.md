## Chit Chat Project

Welcome to Chit Chat! This is a real-time chat application built with a React/Vite UI and a NestJS API using Socket.IO for live messaging.

---

## AI Usage vs Human Written Code for this iteration
- AI Use for this iteration is approximately 50% on average (tools used: Copilot, Gemini, ChatGPT). Detailed breakdown of the exact portions generated with AI tools is not available for this iteration, as the requirement was announced after the submission deadline and team members were not informed in advance to track usage or retain chat links.

- Masih: ~90% – primarily for frontend UI development (The help dialog) and setting up the tests.
links to the chat history with ChatGPT: 
https://chatgpt.com/share/68d9f4f9-3ebc-800a-8adc-585f790aa352
https://chatgpt.com/share/68d9f50a-7090-800a-b281-0a95246b84d3

- Deasia: ~100% for Playwright configuration, ~25% for automated test implementation.
- Robin: ~40% – mainly for generating return statements within components.
- Ardit: No AI usage. Project skeleton was generated using standard CLI tools (vite init and nest new).
         25% ~ Used Copilot to set up the first entity and the first service file so I could reference it for the other typeorm entities. 25% of the entities+services was done by AI.
- Jordyn: ~50% – primarily for docker and github action tests. 

---

## System Requirements

- **Node.js**: v22.x or higher
- **npm**: v9.x or higher

---

## Getting Started


### 1. Install Dependencies

#### Install Node.js

If you don't have Node.js installed, download it from the official website:

- [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

After installation, verify it in your terminal:
```bash
node -v
npm -v
```

#### Install Project Dependencies

Navigate to each folder and run:
```bash
npm install   # For UI and API folders
npx playwright install # For Tests folder
```

### 2. Run the Servers

- **API**: In the `api` folder, run:
    ```bash
    npm run start
    ```
- **UI**: In the `chit-chat-ui` folder, run:
    ```bash
    npm run dev
    ```

### 3. Access the App

- Open your browser and go to:
    - [http://localhost:8000/](http://localhost:8000/) (or your configured port)


### 4. Run the tests
From the project root:

- **UI mode** (opens Playwright Test UI):

  ```bash
  npm run test:ui
  ```

- **Headless mode** (runs Playwright tests without opening a browser window):

  ```bash
  npm run test:headless
  ```