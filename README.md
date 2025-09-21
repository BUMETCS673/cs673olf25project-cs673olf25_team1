## Chit Chat Project

Welcome to Chit Chat! This is a real-time chat application built with a React/Vite UI and a NestJS API using Socket.IO for live messaging.

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