# Playwright Test Report Summary

**Generated:** 10/13/2025, 9:12:06 PM

| Status | Count |
|--------|-------|
| Passed | 86 |
| Failed | 29 |
| Skipped | 1 |

---

## ai-chat.spec.ts

**Summary:** Passed: 11 | Failed: 3 | Skipped: 1

### Failed Tests
**1. undefined**

```
Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoContainText[2m([22m[32mexpected[39m[2m)[22m failed

Locator: getByTestId('message-list')
Expected string: [32m"4"[39m
Received string: [31m"Hello! I’m your AI assistant. How can I help you today?What is 2 + 2?Sorry, there was an error contacting the AI service."[39m
Timeout: 5000ms

Call log:
[2m  - Expect "toContainText" with timeout 5000ms[22m
[2m  - waiting for getByTestId('message-list')[22m
[2m    2 × locator resolved to <div data-testid="message-list" class="MuiContainer-root MuiContainer-maxWidthMd css-1rl24un-MuiContainer-root">…</div>[22m
[2m      - unexpected value "Hello! I’m your AI assistant. How can I help you today?What is 2 + 2?"[22m
[2m    7 × locator resolved to <div data-testid="message-list" class="MuiContainer-root MuiContainer-maxWidthMd css-1rl24un-MuiContainer-root">…</div>[22m
[2m      - unexpected value "Hello! I’m your AI assistant. How can I help you today?What is 2 + 2?Sorry, there was an error contacting the AI service."[22m
```
**Attachments:**
- [screenshot](../../../test-results/ai-chat-AT-3-LLM-response-appears-after-sending-a-message-chromium/test-failed-1.png)
- [video](../../../test-results/ai-chat-AT-3-LLM-response-appears-after-sending-a-message-chromium/video.webm)
- [error-context](../../../test-results/ai-chat-AT-3-LLM-response-appears-after-sending-a-message-chromium/error-context.md)

**2. undefined**

```
Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoContainText[2m([22m[32mexpected[39m[2m)[22m failed

Locator: getByTestId('message-list')
Expected pattern: [32m/Mercury|Venus/i[39m
Received string:  [31m"Hello! I’m your AI assistant. How can I help you today?Start a long explanation about the solar system...Sorry, there was an error contacting the AI service.What’s the hottest planet?Sorry, there was an error contacting the AI service."[39m
Timeout: 7000ms

Call log:
[2m  - Expect "toContainText" with timeout 7000ms[22m
[2m  - waiting for getByTestId('message-list')[22m
[2m    2 × locator resolved to <div data-testid="message-list" class="MuiContainer-root MuiContainer-maxWidthMd css-1rl24un-MuiContainer-root">…</div>[22m
[2m      - unexpected value "Hello! I’m your AI assistant. How can I help you today?Start a long explanation about the solar system...Sorry, there was an error contacting the AI service.What’s the hottest planet?"[22m
[2m    9 × locator resolved to <div data-testid="message-list" class="MuiContainer-root MuiContainer-maxWidthMd css-1rl24un-MuiContainer-root">…</div>[22m
[2m      - unexpected value "Hello! I’m your AI assistant. How can I help you today?Start a long explanation about the solar system...Sorry, there was an error contacting the AI service.What’s the hottest planet?Sorry, there was an error contacting the AI service."[22m
```
**Attachments:**
- [screenshot](../../../test-results/ai-chat-AT-12-Sending-a-ne-58921-vious-LLM-response-finishes-chromium/test-failed-1.png)
- [video](../../../test-results/ai-chat-AT-12-Sending-a-ne-58921-vious-LLM-response-finishes-chromium/video.webm)
- [error-context](../../../test-results/ai-chat-AT-12-Sending-a-ne-58921-vious-LLM-response-finishes-chromium/error-context.md)

**3. undefined**

```
Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoContainText[2m([22m[32mexpected[39m[2m)[22m failed

Locator: getByTestId('message-list')
Expected string: [32m"{"[39m
Received string: [31m"Hello! I’m your AI assistant. How can I help you today?Show me a JavaScript function that reverses a stringSorry, there was an error contacting the AI service."[39m
Timeout: 5000ms

Call log:
[2m  - Expect "toContainText" with timeout 5000ms[22m
[2m  - waiting for getByTestId('message-list')[22m
[2m    2 × locator resolved to <div data-testid="message-list" class="MuiContainer-root MuiContainer-maxWidthMd css-1rl24un-MuiContainer-root">…</div>[22m
[2m      - unexpected value "Hello! I’m your AI assistant. How can I help you today?Show me a JavaScript function that reverses a string"[22m
[2m    7 × locator resolved to <div data-testid="message-list" class="MuiContainer-root MuiContainer-maxWidthMd css-1rl24un-MuiContainer-root">…</div>[22m
[2m      - unexpected value "Hello! I’m your AI assistant. How can I help you today?Show me a JavaScript function that reverses a stringSorry, there was an error contacting the AI service."[22m
```
**Attachments:**
- [screenshot](../../../test-results/ai-chat-AT-13-LLM-can-return-formatted-code-responses-chromium/test-failed-1.png)
- [video](../../../test-results/ai-chat-AT-13-LLM-can-return-formatted-code-responses-chromium/video.webm)
- [error-context](../../../test-results/ai-chat-AT-13-LLM-can-return-formatted-code-responses-chromium/error-context.md)

---

## auth-login.spec.ts

**Summary:** Passed: 4 | Failed: 6 | Skipped: 0

### Failed Tests
**1. undefined**

```
Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveURL[2m([22m[32mexpected[39m[2m)[22m failed

Expected pattern: [32m/\/community|\/dashboard/i[39m
Received string:  [31m"http://localhost:8000/login"[39m
Timeout: 5000ms

Call log:
[2m  - Expect "toHaveURL" with timeout 5000ms[22m
[2m    9 × unexpected value "http://localhost:8000/login"[22m
```
**Attachments:**
- [screenshot](../../../test-results/auth-login-AT-5-Login-with-3bc0d-ials-redirects-to-community-chromium/test-failed-1.png)
- [video](../../../test-results/auth-login-AT-5-Login-with-3bc0d-ials-redirects-to-community-chromium/video.webm)
- [error-context](../../../test-results/auth-login-AT-5-Login-with-3bc0d-ials-redirects-to-community-chromium/error-context.md)

---

## autoscroll.spec.ts

**Summary:** Passed: 2 | Failed: 2 | Skipped: 0

### Failed Tests
**1. undefined**

```
Error: [2mexpect([22m[31mreceived[39m[2m).[22mtoBeFalsy[2m()[22m

Received: [31mtrue[39m
```
**Attachments:**
- [screenshot](../../../test-results/autoscroll-AT-02-No-jump-when-viewer-scrolled-up-chromium/test-failed-2.png)
- [screenshot](../../../test-results/autoscroll-AT-02-No-jump-when-viewer-scrolled-up-chromium/test-failed-1.png)
- [error-context](../../../test-results/autoscroll-AT-02-No-jump-when-viewer-scrolled-up-chromium/error-context.md)

**2. undefined**

```
Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoContainText[2m([22m[32mexpected[39m[2m)[22m failed

Locator: locator('[data-testid="message-list"]')
Expected string: [32m"seed 0"[39m
Received string: [31m"testuser: seed 1testuser: seed 2testuser: seed 3testuser: seed 4testuser: seed 5testuser: seed 6testuser: seed 7testuser: seed 8testuser: seed 9testuser: seed 10testuser: seed 11testuser: seed 12testuser: seed 13testuser: seed 14testuser: seed 15testuser: seed 16testuser: seed 17👍❤️😂😮🎉testuser: seed 18testuser: seed 19"[39m
Timeout: 10000ms

Call log:
[2m  - Expect "toContainText" with timeout 10000ms[22m
[2m  - waiting for locator('[data-testid="message-list"]')[22m
[2m    3 × locator resolved to <div data-testid="message-list" class="MuiContainer-root MuiContainer-maxWidthMd css-1rl24un-MuiContainer-root">…</div>[22m
[2m      - unexpected value "testuser: seed 1testuser: seed 2testuser: seed 3testuser: seed 4testuser: seed 5testuser: seed 6testuser: seed 7testuser: seed 8testuser: seed 9testuser: seed 10testuser: seed 11testuser: seed 12testuser: seed 13testuser: seed 14testuser: seed 15testuser: seed 16👍❤️😂😮🎉testuser: seed 17testuser: seed 18testuser: seed 19User is typing..."[22m
[2m    5 × locator resolved to <div data-testid="message-list" class="MuiContainer-root MuiContainer-maxWidthMd css-1rl24un-MuiContainer-root">…</div>[22m
[2m      - unexpected value "testuser: seed 1testuser: seed 2testuser: seed 3testuser: seed 4testuser: seed 5testuser: seed 6testuser: seed 7testuser: seed 8testuser: seed 9testuser: seed 10testuser: seed 11testuser: seed 12testuser: seed 13testuser: seed 14testuser: seed 15testuser: seed 16testuser: seed 17testuser: seed 18👍❤️😂😮🎉testuser: seed 19User is typing..."[22m
[2m    - locator resolved to <div data-testid="message-list" class="MuiContainer-root MuiContainer-maxWidthMd css-1rl24un-MuiContainer-root">…</div>[22m
[2m    - unexpected value "testuser: seed 1testuser: seed 2testuser: seed 3testuser: seed 4testuser: seed 5testuser: seed 6testuser: seed 7testuser: seed 8testuser: seed 9testuser: seed 10testuser: seed 11testuser: seed 12testuser: seed 13testuser: seed 14testuser: seed 15testuser: seed 16testuser: seed 17testuser: seed 18👍❤️😂😮🎉testuser: seed 19"[22m
[2m    5 × locator resolved to <div data-testid="message-list" class="MuiContainer-root MuiContainer-maxWidthMd css-1rl24un-MuiContainer-root">…</div>[22m
[2m      - unexpected value "testuser: seed 1testuser: seed 2testuser: seed 3testuser: seed 4testuser: seed 5testuser: seed 6testuser: seed 7testuser: seed 8testuser: seed 9testuser: seed 10testuser: seed 11testuser: seed 12testuser: seed 13testuser: seed 14testuser: seed 15testuser: seed 16testuser: seed 17👍❤️😂😮🎉testuser: seed 18testuser: seed 19"[22m
```
**Attachments:**
- [screenshot](../../../test-results/autoscroll-AT-03-Auto-scro-126c7-er-viewer-returns-to-bottom-chromium/test-failed-1.png)
- [screenshot](../../../test-results/autoscroll-AT-03-Auto-scro-126c7-er-viewer-returns-to-bottom-chromium/test-failed-2.png)
- [error-context](../../../test-results/autoscroll-AT-03-Auto-scro-126c7-er-viewer-returns-to-bottom-chromium/error-context.md)

---

## chat-guest.spec.ts

**Summary:** Passed: 10 | Failed: 0 | Skipped: 0

---

## chat-history.spec.ts

**Summary:** Passed: 13 | Failed: 7 | Skipped: 0

### Failed Tests
**1. undefined**

```
Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoContainText[2m([22m[32mexpected[39m[2m)[22m failed

Locator: getByTestId('message-list')
Expected string: [32m"Multi-tab 1760389711447"[39m
Received string: [31m""[39m
Timeout: 5000ms

Call log:
[2m  - Expect "toContainText" with timeout 5000ms[22m
[2m  - waiting for getByTestId('message-list')[22m
[2m    7 × locator resolved to <div data-testid="message-list" class="MuiContainer-root MuiContainer-maxWidthMd css-1rl24un-MuiContainer-root">…</div>[22m
[2m      - unexpected value ""[22m
```
**Attachments:**
- [screenshot](../../../test-results/chat-history-AT-9-multiple-tabs-should-show-same-history-chromium/test-failed-2.png)
- [screenshot](../../../test-results/chat-history-AT-9-multiple-tabs-should-show-same-history-chromium/test-failed-1.png)
- [video](../../../test-results/chat-history-AT-9-multiple-tabs-should-show-same-history-chromium/video.webm)
- [video](../../../test-results/chat-history-AT-9-multiple-tabs-should-show-same-history-chromium/video-1.webm)
- [error-context](../../../test-results/chat-history-AT-9-multiple-tabs-should-show-same-history-chromium/error-context.md)

**2. undefined**

```
Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoContainText[2m([22m[32mexpected[39m[2m)[22m failed

Locator: getByTestId('message-list')
Expected string: [32m"First 1760389724028"[39m
Received string: [31m"Hello! I’m your AI assistant. How can I help you today?"[39m
Timeout: 5000ms

Call log:
[2m  - Expect "toContainText" with timeout 5000ms[22m
[2m  - waiting for getByTestId('message-list')[22m
[2m    8 × locator resolved to <div data-testid="message-list" class="MuiContainer-root MuiContainer-maxWidthMd css-1rl24un-MuiContainer-root">…</div>[22m
[2m      - unexpected value "Hello! I’m your AI assistant. How can I help you today?"[22m
```
**Attachments:**
- [screenshot](../../../test-results/chat-history-AT-12-should--32389-ple-messages-and-keep-order-chromium/test-failed-1.png)
- [video](../../../test-results/chat-history-AT-12-should--32389-ple-messages-and-keep-order-chromium/video.webm)
- [error-context](../../../test-results/chat-history-AT-12-should--32389-ple-messages-and-keep-order-chromium/error-context.md)

**3. undefined**

```
Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoContainText[2m([22m[32mexpected[39m[2m)[22m failed

Locator: getByTestId('message-list')
Expected string: [32m"Message 0 - 1760389725428"[39m
Received string: [31m"Hello! I’m your AI assistant. How can I help you today?"[39m
Timeout: 5000ms

Call log:
[2m  - Expect "toContainText" with timeout 5000ms[22m
[2m  - waiting for getByTestId('message-list')[22m
[2m    9 × locator resolved to <div data-testid="message-list" class="MuiContainer-root MuiContainer-maxWidthMd css-1rl24un-MuiContainer-root">…</div>[22m
[2m      - unexpected value "Hello! I’m your AI assistant. How can I help you today?"[22m
```
**Attachments:**
- [screenshot](../../../test-results/chat-history-AT-13-should-persist-a-long-history-of-messages-chromium/test-failed-1.png)
- [video](../../../test-results/chat-history-AT-13-should-persist-a-long-history-of-messages-chromium/video.webm)
- [error-context](../../../test-results/chat-history-AT-13-should-persist-a-long-history-of-messages-chromium/error-context.md)

**4. undefined**

```
Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoContainText[2m([22m[32mexpected[39m[2m)[22m failed

Locator: getByTestId('message-list')
Expected string: [32m"First cycle 1760389736684"[39m
Received string: [31m"Hello! I’m your AI assistant. How can I help you today?"[39m
Timeout: 5000ms

Call log:
[2m  - Expect "toContainText" with timeout 5000ms[22m
[2m  - waiting for getByTestId('message-list')[22m
[2m    8 × locator resolved to <div data-testid="message-list" class="MuiContainer-root MuiContainer-maxWidthMd css-1rl24un-MuiContainer-root">…</div>[22m
[2m      - unexpected value "Hello! I’m your AI assistant. How can I help you today?"[22m
```
**Attachments:**
- [screenshot](../../../test-results/chat-history-AT-14-should--3c8b6-ultiple-send-refresh-cycles-chromium/test-failed-1.png)
- [video](../../../test-results/chat-history-AT-14-should--3c8b6-ultiple-send-refresh-cycles-chromium/video.webm)
- [error-context](../../../test-results/chat-history-AT-14-should--3c8b6-ultiple-send-refresh-cycles-chromium/error-context.md)

**5. undefined**

```
Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m()[22m failed

Locator:  getByTestId('message-list').locator('div:has-text("Duplicate check 1760389741474")').last()
Expected: visible
Received: <element(s) not found>
Timeout:  5000ms

Call log:
[2m  - Expect "toBeVisible" with timeout 5000ms[22m
[2m  - waiting for getByTestId('message-list').locator('div:has-text("Duplicate check 1760389741474")').last()[22m
```
**Attachments:**
- [screenshot](../../../test-results/chat-history-AT-15-should--0f65d-cate-messages-after-refresh-chromium/test-failed-1.png)
- [video](../../../test-results/chat-history-AT-15-should--0f65d-cate-messages-after-refresh-chromium/video.webm)
- [error-context](../../../test-results/chat-history-AT-15-should--0f65d-cate-messages-after-refresh-chromium/error-context.md)

**6. undefined**

```
Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m()[22m failed

Locator:  getByTestId('message-list').locator('div:has-text("One 1760389751133")').last()
Expected: visible
Received: <element(s) not found>
Timeout:  5000ms

Call log:
[2m  - Expect "toBeVisible" with timeout 5000ms[22m
[2m  - waiting for getByTestId('message-list').locator('div:has-text("One 1760389751133")').last()[22m
```
**Attachments:**
- [screenshot](../../../test-results/chat-history-AT-16-should--6a09f-er-after-multiple-refreshes-chromium/test-failed-1.png)
- [video](../../../test-results/chat-history-AT-16-should--6a09f-er-after-multiple-refreshes-chromium/video.webm)
- [error-context](../../../test-results/chat-history-AT-16-should--6a09f-er-after-multiple-refreshes-chromium/error-context.md)

**7. undefined**

```
Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoContainText[2m([22m[32mexpected[39m[2m)[22m failed

Locator: getByTestId('message-list')
Expected string: [32m"Multi-tab 1760389764568"[39m
Received string: [31m"testuser: Test 1760389772015User is typing..."[39m
Timeout: 5000ms

Call log:
[2m  - Expect "toContainText" with timeout 5000ms[22m
[2m  - waiting for getByTestId('message-list')[22m
[2m    6 × locator resolved to <div data-testid="message-list" class="MuiContainer-root MuiContainer-maxWidthMd css-1rl24un-MuiContainer-root">…</div>[22m
[2m      - unexpected value ""[22m
[2m    - locator resolved to <div data-testid="message-list" class="MuiContainer-root MuiContainer-maxWidthMd css-1rl24un-MuiContainer-root">…</div>[22m
[2m    - unexpected value "testuser: Test 1760389772015User is typing..."[22m
```
**Attachments:**
- [screenshot](../../../test-results/chat-history-AT-19-multiple-tabs-should-show-same-history-chromium/test-failed-2.png)
- [screenshot](../../../test-results/chat-history-AT-19-multiple-tabs-should-show-same-history-chromium/test-failed-1.png)
- [video](../../../test-results/chat-history-AT-19-multiple-tabs-should-show-same-history-chromium/video-1.webm)
- [video](../../../test-results/chat-history-AT-19-multiple-tabs-should-show-same-history-chromium/video.webm)
- [error-context](../../../test-results/chat-history-AT-19-multiple-tabs-should-show-same-history-chromium/error-context.md)

---

## enter-key.spec.ts

**Summary:** Passed: 18 | Failed: 2 | Skipped: 0

### Failed Tests
**1. undefined**

```
Error: [2mexpect([22m[31mreceived[39m[2m).[22mtoBe[2m([22m[32mexpected[39m[2m) // Object.is equality[22m

Expected: [32m1[39m
Received: [31m2[39m
```
**Attachments:**
- [screenshot](../../../test-results/enter-key-AT-8-should-not--febdd-sage-on-rapid-Enter-presses-chromium/test-failed-1.png)
- [video](../../../test-results/enter-key-AT-8-should-not--febdd-sage-on-rapid-Enter-presses-chromium/video.webm)
- [error-context](../../../test-results/enter-key-AT-8-should-not--febdd-sage-on-rapid-Enter-presses-chromium/error-context.md)

**2. undefined**

```
Error: [2mexpect([22m[31mreceived[39m[2m).[22mtoBe[2m([22m[32mexpected[39m[2m) // Object.is equality[22m

Expected: [32m1[39m
Received: [31m2[39m
```
**Attachments:**
- [screenshot](../../../test-results/enter-key-AT-18-should-not-9a8d2-sage-on-rapid-Enter-presses-chromium/test-failed-1.png)
- [video](../../../test-results/enter-key-AT-18-should-not-9a8d2-sage-on-rapid-Enter-presses-chromium/video.webm)
- [error-context](../../../test-results/enter-key-AT-18-should-not-9a8d2-sage-on-rapid-Enter-presses-chromium/error-context.md)

---

## hello.spec.ts

**Summary:** Passed: 1 | Failed: 0 | Skipped: 0

---

## help-ai.spec.ts

**Summary:** Passed: 7 | Failed: 2 | Skipped: 0

### Failed Tests
**1. undefined**

```
Error: locator.elementHandle: Error: strict mode violation: locator('text=Help') resolved to 2 elements:
    1) <p class="MuiTypography-root MuiTypography-body2 css-tf6nos-MuiTypography-root">Hello! I’m your AI assistant. How can I help you …</p> aka getByText('Hello! I’m your AI assistant')
    2) <button tabindex="0" type="button" data-testid="help-button" class="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary css-zoli0u-MuiButtonBase-root-MuiButton-root">…</button> aka getByTestId('help-button')

Call log:
[2m  - waiting for locator('text=Help')[22m
```
**Attachments:**
- [screenshot](../../../test-results/help-ai-AT-7-Re-open-works-after-closing-chromium/test-failed-1.png)
- [video](../../../test-results/help-ai-AT-7-Re-open-works-after-closing-chromium/video.webm)
- [error-context](../../../test-results/help-ai-AT-7-Re-open-works-after-closing-chromium/error-context.md)

**2. undefined**

```
Error: locator.elementHandle: Error: strict mode violation: locator('text=Help') resolved to 2 elements:
    1) <p class="MuiTypography-root MuiTypography-body2 css-tf6nos-MuiTypography-root">Hello! I’m your AI assistant. How can I help you …</p> aka getByText('Hello! I’m your AI assistant')
    2) <button tabindex="0" type="button" data-testid="help-button" class="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary css-zoli0u-MuiButtonBase-root-MuiButton-root">…</button> aka getByTestId('help-button')

Call log:
[2m  - waiting for locator('text=Help')[22m
```
**Attachments:**
- [screenshot](../../../test-results/help-ai-AT-9-Dialog-is-usable-on-mobile-viewport-chromium/test-failed-1.png)
- [video](../../../test-results/help-ai-AT-9-Dialog-is-usable-on-mobile-viewport-chromium/video.webm)
- [error-context](../../../test-results/help-ai-AT-9-Dialog-is-usable-on-mobile-viewport-chromium/error-context.md)

---

## help-community.spec.ts

**Summary:** Passed: 8 | Failed: 1 | Skipped: 0

### Failed Tests
**1. undefined**

```
Error: Help button not found on page.
```
**Attachments:**
- [screenshot](../../../test-results/help-community-AT-9-Dialog-is-usable-on-mobile-viewport-chromium/test-failed-1.png)
- [video](../../../test-results/help-community-AT-9-Dialog-is-usable-on-mobile-viewport-chromium/video.webm)
- [error-context](../../../test-results/help-community-AT-9-Dialog-is-usable-on-mobile-viewport-chromium/error-context.md)

---

## profile.spec.ts

**Summary:** Passed: 1 | Failed: 4 | Skipped: 0

### Failed Tests
**1. undefined**

```
Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m()[22m failed

Locator:  locator('text=Profile updated successfully')
Expected: visible
Received: <element(s) not found>
Timeout:  5000ms

Call log:
[2m  - Expect "toBeVisible" with timeout 5000ms[22m
[2m  - waiting for locator('text=Profile updated successfully')[22m
```
**Attachments:**
- [screenshot](../../../test-results/profile-AT-2-Selecting-avatar-and-saving-updates-profile-chromium/test-failed-1.png)
- [video](../../../test-results/profile-AT-2-Selecting-avatar-and-saving-updates-profile-chromium/video.webm)
- [error-context](../../../test-results/profile-AT-2-Selecting-avatar-and-saving-updates-profile-chromium/error-context.md)

**2. undefined**

```
Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m()[22m failed

Locator:  locator('text=Profile updated successfully')
Expected: visible
Received: <element(s) not found>
Timeout:  5000ms

Call log:
[2m  - Expect "toBeVisible" with timeout 5000ms[22m
[2m  - waiting for locator('text=Profile updated successfully')[22m
```
**Attachments:**
- [screenshot](../../../test-results/profile-AT-3-Selecting-the-4a89d--and-saving-updates-profile-chromium/test-failed-1.png)
- [video](../../../test-results/profile-AT-3-Selecting-the-4a89d--and-saving-updates-profile-chromium/video.webm)
- [error-context](../../../test-results/profile-AT-3-Selecting-the-4a89d--and-saving-updates-profile-chromium/error-context.md)

**3. undefined**

```
Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoHaveAttribute[2m([22m[32mexpected[39m[2m)[22m failed

Locator: locator('[aria-label="Click to select"]').nth(1)
Expected string: [32m"true"[39m
Received string: [31m""[39m
Timeout: 5000ms

Call log:
[2m  - Expect "toHaveAttribute" with timeout 5000ms[22m
[2m  - waiting for locator('[aria-label="Click to select"]').nth(1)[22m
[2m    7 × locator resolved to <div aria-label="Click to select" data-mui-internal-clone-element="true" class="MuiAvatar-root MuiAvatar-circular css-r4mjgc-MuiAvatar-root">…</div>[22m
[2m      - unexpected value "null"[22m
```
**Attachments:**
- [screenshot](../../../test-results/profile-AT-4-Profile-settings-persist-after-reload-chromium/test-failed-1.png)
- [video](../../../test-results/profile-AT-4-Profile-settings-persist-after-reload-chromium/video.webm)
- [error-context](../../../test-results/profile-AT-4-Profile-settings-persist-after-reload-chromium/error-context.md)

**4. undefined**

```
Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoBeVisible[2m()[22m failed

Locator:  locator('text=Not authorized')
Expected: visible
Received: <element(s) not found>
Timeout:  5000ms

Call log:
[2m  - Expect "toBeVisible" with timeout 5000ms[22m
[2m  - waiting for locator('text=Not authorized')[22m
```
**Attachments:**
- [screenshot](../../../test-results/profile-AT-5-Unauthorized-user-cannot-access-profile-page-chromium/test-failed-1.png)
- [video](../../../test-results/profile-AT-5-Unauthorized-user-cannot-access-profile-page-chromium/video.webm)
- [error-context](../../../test-results/profile-AT-5-Unauthorized-user-cannot-access-profile-page-chromium/error-context.md)

---

## sidebar.spec.ts

**Summary:** Passed: 6 | Failed: 1 | Skipped: 0

### Failed Tests
**1. undefined**

```
Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveURL[2m([22m[32mexpected[39m[2m)[22m failed

Expected pattern: [32m/\/login(?:$|[?#])/[39m
Received string:  [31m"http://localhost:8000/community"[39m
Timeout: 5000ms

Call log:
[2m  - Expect "toHaveURL" with timeout 5000ms[22m
[2m    2 × unexpected value "http://localhost:8000/logout"[22m
[2m    7 × unexpected value "http://localhost:8000/community"[22m
```
**Attachments:**
- [screenshot](../../../test-results/sidebar-AT-7-Click-Logout-logs-out-and-redirects-to-Login-chromium/test-failed-1.png)
- [video](../../../test-results/sidebar-AT-7-Click-Logout-logs-out-and-redirects-to-Login-chromium/video.webm)
- [error-context](../../../test-results/sidebar-AT-7-Click-Logout-logs-out-and-redirects-to-Login-chromium/error-context.md)

---

## smoke.spec.ts

**Summary:** Passed: 1 | Failed: 0 | Skipped: 0

---

## typing-indicator.spec.ts

**Summary:** Passed: 4 | Failed: 1 | Skipped: 0

### Failed Tests
**1. undefined**

```
Error: [2mexpect([22m[31mreceived[39m[2m).[22mtoBeFalsy[2m()[22m

Received: [31mtrue[39m

Call Log:
- Timeout 8000ms exceeded while waiting on the predicate
```
**Attachments:**
- [screenshot](../../../test-results/typing-indicator-AT-2-Indi-0947d-fter-stop-typing-or-sending-chromium/test-failed-2.png)
- [screenshot](../../../test-results/typing-indicator-AT-2-Indi-0947d-fter-stop-typing-or-sending-chromium/test-failed-1.png)
- [error-context](../../../test-results/typing-indicator-AT-2-Indi-0947d-fter-stop-typing-or-sending-chromium/error-context.md)

---

