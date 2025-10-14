# GitHub Issues Export

## User logs out during message sending
**Labels:** bug, Priority: 1 (high)

Expected Output:
Logout succeeds without error, message not sent

Actual Output:
Logout does not work – user remains on the current page with no redirection or confirmation

Steps to Reproduce:
	1.	Type and send a message
	2.	While the message is sending, click the Logout button
	3.	Observe that the user is not redirected and remains logged in

---

## Rapid switching between community and AI chat
**Labels:** bug, Priority: 2 (medium)

Expected Output:
Messages are retained, no crashes or message loss

Actual Output:
Chat history is not saved for the AI page

Steps to Reproduce:
	1.	Send messages in both chat types
	2.	Rapidly switch between Community and AI tabs
	3.	Observe AI chat resets

---

## Send Message with Lost Connection
**Labels:** bug, Priority: 1 (high)

Expected Output:
Error banner displayed with retry option

Actual Output:
node:internal/process/promises:391 error shown in console, app does not handle disconnection gracefully

Steps to Reproduce:
	1.	Open dev tools
	2.	Go offline
	3.	Try sending a message in Community Chat
	4.	Observe lack of graceful handling

---

## Register with existing username
**Labels:** bug, Priority: 2 (medium)

Expected Output:
Username already registered error

Actual Output:
User was able to continue to the community screen

Steps to Reproduce:
	1.	Attempt to register with an email address that is already in use
	2.	Observe behavior after form submission

Notes:
Ensure backend catches duplicate registrations.

---

## Test Failed: AT-2: Indicator disappears after stop typing or sending
**Labels:** automated-defect

Test Name: AT-2: Indicator disappears after stop typing or sending
      File: typing-indicator.spec.ts

      Screenshot:
      Screenshot attached in GitHub Actions artifacts (if available)

      Playwright Report:
      https://github.com/BUMETCS673/cs673olf25project-cs673olf25_team1/actions/runs/18478059837#artifacts

      Details:
      ```json
      [
  {
    "workerIndex": 28,
    "parallelIndex": 1,
    "status": "failed",
    "duration": 13442,
    "error": {
      "message": "Error: \^[[2mexpect(\^[[22m\^[[31mreceived\^[[39m\^[[2m).\^[[22mtoBeFalsy\^[[2m()\^[[22m\n\nReceived: \^[[31mtrue\^[[39m\n\nCall Log:\n- Timeout 8000ms exceeded while waiting on the predicate",
      "stack": "Error: \^[[2mexpect(\^[[22m\^[[31mreceived\^[[39m\^[[2m).\^[[22mtoBeFalsy\^[[2m()\^[[22m\n\nReceived: \^[[31mtrue\^[[39m\n\nCall Log:\n- Timeout 8000ms exceeded while waiting on the predicate\n    at /home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/typing-indicator.spec.ts:61:3",
      "location": {
        "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/typing-indicator.spec.ts",
        "column": 3,
        "line": 61
      },
      "snippet": "\^[[0m \^[[90m 59 |\^[[39m\n \^[[90m 60 |\^[[39m   \^[[36mawait\^[[39m selectors\^[[33m.\^[[39msend(a)\^[[33m.\^[[39mclick()\^[[33m;\^[[39m\n\^[[31m\^[[1m>\^[[22m\^[[39m\^[[90m 61 |\^[[39m   \^[[36mawait\^[[39m expect\^[[33m.\^[[39mpoll(() \^[[33m=>\^[[39m indicatorIsVisible(b)\^[[33m,\^[[39m { timeout\^[[33m:\^[[39m \^[[35m8000\^[[39m })\^[[33m.\^[[39mtoBeFalsy()\^[[33m;\^[[39m\n \^[[90m    |\^[[39m   \^[[31m\^[[1m^\^[[22m\^[[39m\n \^[[90m 62 |\^[[39m\n \^[[90m 63 |\^[[39m   \^[[36mawait\^[[39m ctxA\^[[33m.\^[[39mclose()\^[[33m;\^[[39m\n \^[[90m 64 |\^[[39m   \^[[36mawait\^[[39m ctxB\^[[33m.\^[[39mclose()\^[[33m;\^[[39m\^[[0m"
    },
    "errors": [
      {
        "location": {
          "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/typing-indicator.spec.ts",
          "column": 3,
          "line": 61
        },
        "message": "Error: \^[[2mexpect(\^[[22m\^[[31mreceived\^[[39m\^[[2m).\^[[22mtoBeFalsy\^[[2m()\^[[22m\n\nReceived: \^[[31mtrue\^[[39m\n\nCall Log:\n- Timeout 8000ms exceeded while waiting on the predicate\n\n  59 |\n  60 |   await selectors.send(a).click();\n> 61 |   await expect.poll(() => indicatorIsVisible(b), { timeout: 8000 }).toBeFalsy();\n     |   ^\n  62 |\n  63 |   await ctxA.close();\n  64 |   await ctxB.close();\n    at /home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/typing-indicator.spec.ts:61:3"
      }
    ],
    "stdout": [],
    "stderr": [],
    "retry": 0,
    "steps": [
      {
        "title": "Expect \"poll toBeTruthy\"",
        "duration": 7
      },
      {
        "title": "Expect \"poll toBeFalsy\"",
        "duration": 7924,
        "error": {
          "message": "Error: \^[[2mexpect(\^[[22m\^[[31mreceived\^[[39m\^[[2m).\^[[22mtoBeFalsy\^[[2m()\^[[22m\n\nReceived: \^[[31mtrue\^[[39m\n\nCall Log:\n- Timeout 8000ms exceeded while waiting on the predicate",
          "stack": "Error: \^[[2mexpect(\^[[22m\^[[31mreceived\^[[39m\^[[2m).\^[[22mtoBeFalsy\^[[2m()\^[[22m\n\nReceived: \^[[31mtrue\^[[39m\n\nCall Log:\n- Timeout 8000ms exceeded while waiting on the predicate\n    at /home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/typing-indicator.spec.ts:61:3",
          "location": {
            "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/typing-indicator.spec.ts",
            "column": 3,
            "line": 61
          },
          "snippet": "\^[[0m \^[[90m 59 |\^[[39m\n \^[[90m 60 |\^[[39m   \^[[36mawait\^[[39m selectors\^[[33m.\^[[39msend(a)\^[[33m.\^[[39mclick()\^[[33m;\^[[39m\n\^[[31m\^[[1m>\^[[22m\^[[39m\^[[90m 61 |\^[[39m   \^[[36mawait\^[[39m expect\^[[33m.\^[[39mpoll(() \^[[33m=>\^[[39m indicatorIsVisible(b)\^[[33m,\^[[39m { timeout\^[[33m:\^[[39m \^[[35m8000\^[[39m })\^[[33m.\^[[39mtoBeFalsy()\^[[33m;\^[[39m\n \^[[90m    |\^[[39m   \^[[31m\^[[1m^\^[[22m\^[[39m\n \^[[90m 62 |\^[[39m\n \^[[90m 63 |\^[[39m   \^[[36mawait\^[[39m ctxA\^[[33m.\^[[39mclose()\^[[33m;\^[[39m\n \^[[90m 64 |\^[[39m   \^[[36mawait\^[[39m ctxB\^[[33m.\^[[39mclose()\^[[33m;\^[[39m\^[[0m"
        }
      }
    ],
    "startTime": "2025-10-13T21:11:45.816Z",
    "annotations": [],
    "attachments": [
      {
        "name": "screenshot",
        "contentType": "image/png",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/typing-indicator-AT-2-Indi-0947d-fter-stop-typing-or-sending-chromium/test-failed-2.png"
      },
      {
        "name": "screenshot",
        "contentType": "image/png",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/typing-indicator-AT-2-Indi-0947d-fter-stop-typing-or-sending-chromium/test-failed-1.png"
      },
      {
        "name": "error-context",
        "contentType": "text/markdown",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/typing-indicator-AT-2-Indi-0947d-fter-stop-typing-or-sending-chromium/error-context.md"
      }
    ],
    "errorLocation": {
      "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/typing-indicator.spec.ts",
      "column": 3,
      "line": 61
    }
  }
]
      ```

---

## Test Failed: AT-7: Click Logout logs out and redirects to Login
**Labels:** automated-defect

Test Name: AT-7: Click Logout logs out and redirects to Login
      File: sidebar.spec.ts

      Screenshot:
      Screenshot attached in GitHub Actions artifacts (if available)

      Playwright Report:
      https://github.com/BUMETCS673/cs673olf25project-cs673olf25_team1/actions/runs/18478059837#artifacts

      Details:
      ```json
      [
  {
    "workerIndex": 27,
    "parallelIndex": 0,
    "status": "failed",
    "duration": 8103,
    "error": {
      "message": "Error: \^[[2mexpect(\^[[22m\^[[31mpage\^[[39m\^[[2m).\^[[22mtoHaveURL\^[[2m(\^[[22m\^[[32mexpected\^[[39m\^[[2m)\^[[22m failed\n\nExpected pattern: \^[[32m/\\/login(?:$|[?#])/\^[[39m\nReceived string:  \^[[31m\"http://localhost:8000/community\"\^[[39m\nTimeout: 5000ms\n\nCall log:\n\^[[2m  - Expect \"toHaveURL\" with timeout 5000ms\^[[22m\n\^[[2m    2 × unexpected value \"http://localhost:8000/logout\"\^[[22m\n\^[[2m    7 × unexpected value \"http://localhost:8000/community\"\^[[22m\n",
      "stack": "Error: \^[[2mexpect(\^[[22m\^[[31mpage\^[[39m\^[[2m).\^[[22mtoHaveURL\^[[2m(\^[[22m\^[[32mexpected\^[[39m\^[[2m)\^[[22m failed\n\nExpected pattern: \^[[32m/\\/login(?:$|[?#])/\^[[39m\nReceived string:  \^[[31m\"http://localhost:8000/community\"\^[[39m\nTimeout: 5000ms\n\nCall log:\n\^[[2m  - Expect \"toHaveURL\" with timeout 5000ms\^[[22m\n\^[[2m    2 × unexpected value \"http://localhost:8000/logout\"\^[[22m\n\^[[2m    7 × unexpected value \"http://localhost:8000/community\"\^[[22m\n\n    at /home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/sidebar.spec.ts:81:24",
      "location": {
        "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/sidebar.spec.ts",
        "column": 24,
        "line": 81
      },
      "snippet": "\^[[0m \^[[90m 79 |\^[[39m     \^[[36mawait\^[[39m login(page)\^[[33m;\^[[39m\n \^[[90m 80 |\^[[39m     \^[[36mawait\^[[39m page\^[[33m.\^[[39mgetByRole(\^[[32m'link'\^[[39m\^[[33m,\^[[39m { name\^[[33m:\^[[39m \^[[32m'Logout'\^[[39m })\^[[33m.\^[[39mclick()\^[[33m;\^[[39m\n\^[[31m\^[[1m>\^[[22m\^[[39m\^[[90m 81 |\^[[39m     \^[[36mawait\^[[39m expect(page)\^[[33m.\^[[39mtoHaveURL(\^[[35m/\\/login(?:$|[?#])/\^[[39m)\^[[33m;\^[[39m\n \^[[90m    |\^[[39m                        \^[[31m\^[[1m^\^[[22m\^[[39m\n \^[[90m 82 |\^[[39m     \^[[36mawait\^[[39m expect(page\^[[33m.\^[[39mgetByRole(\^[[32m'heading'\^[[39m\^[[33m,\^[[39m { name\^[[33m:\^[[39m \^[[35m/login/i\^[[39m }))\^[[33m.\^[[39mtoBeVisible()\^[[33m;\^[[39m\n \^[[90m 83 |\^[[39m })\^[[33m;\^[[39m\^[[0m"
    },
    "errors": [
      {
        "location": {
          "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/sidebar.spec.ts",
          "column": 24,
          "line": 81
        },
        "message": "Error: \^[[2mexpect(\^[[22m\^[[31mpage\^[[39m\^[[2m).\^[[22mtoHaveURL\^[[2m(\^[[22m\^[[32mexpected\^[[39m\^[[2m)\^[[22m failed\n\nExpected pattern: \^[[32m/\\/login(?:$|[?#])/\^[[39m\nReceived string:  \^[[31m\"http://localhost:8000/community\"\^[[39m\nTimeout: 5000ms\n\nCall log:\n\^[[2m  - Expect \"toHaveURL\" with timeout 5000ms\^[[22m\n\^[[2m    2 × unexpected value \"http://localhost:8000/logout\"\^[[22m\n\^[[2m    7 × unexpected value \"http://localhost:8000/community\"\^[[22m\n\n\n  79 |     await login(page);\n  80 |     await page.getByRole('link', { name: 'Logout' }).click();\n> 81 |     await expect(page).toHaveURL(/\\/login(?:$|[?#])/);\n     |                        ^\n  82 |     await expect(page.getByRole('heading', { name: /login/i })).toBeVisible();\n  83 | });\n    at /home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/sidebar.spec.ts:81:24"
      }
    ],
    "stdout": [],
    "stderr": [],
    "retry": 0,
    "startTime": "2025-10-13T21:11:38.173Z",
    "annotations": [],
    "attachments": [
      {
        "name": "screenshot",
        "contentType": "image/png",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/sidebar-AT-7-Click-Logout-logs-out-and-redirects-to-Login-chromium/test-failed-1.png"
      },
      {
        "name": "video",
        "contentType": "video/webm",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/sidebar-AT-7-Click-Logout-logs-out-and-redirects-to-Login-chromium/video.webm"
      },
      {
        "name": "error-context",
        "contentType": "text/markdown",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/sidebar-AT-7-Click-Logout-logs-out-and-redirects-to-Login-chromium/error-context.md"
      }
    ],
    "errorLocation": {
      "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/sidebar.spec.ts",
      "column": 24,
      "line": 81
    }
  }
]
      ```

---

## Test Failed: AT-5: Unauthorized user cannot access profile page
**Labels:** automated-defect

Test Name: AT-5: Unauthorized user cannot access profile page
      File: profile.spec.ts

      Screenshot:
      Screenshot attached in GitHub Actions artifacts (if available)

      Playwright Report:
      https://github.com/BUMETCS673/cs673olf25project-cs673olf25_team1/actions/runs/18478059837#artifacts

      Details:
      ```json
      [
  {
    "workerIndex": 26,
    "parallelIndex": 0,
    "status": "failed",
    "duration": 7570,
    "error": {
      "message": "Error: \^[[2mexpect(\^[[22m\^[[31mlocator\^[[39m\^[[2m).\^[[22mtoBeVisible\^[[2m()\^[[22m failed\n\nLocator:  locator('text=Not authorized')\nExpected: visible\nReceived: <element(s) not found>\nTimeout:  5000ms\n\nCall log:\n\^[[2m  - Expect \"toBeVisible\" with timeout 5000ms\^[[22m\n\^[[2m  - waiting for locator('text=Not authorized')\^[[22m\n",
      "stack": "Error: \^[[2mexpect(\^[[22m\^[[31mlocator\^[[39m\^[[2m).\^[[22mtoBeVisible\^[[2m()\^[[22m failed\n\nLocator:  locator('text=Not authorized')\nExpected: visible\nReceived: <element(s) not found>\nTimeout:  5000ms\n\nCall log:\n\^[[2m  - Expect \"toBeVisible\" with timeout 5000ms\^[[22m\n\^[[2m  - waiting for locator('text=Not authorized')\^[[22m\n\n    at /home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/profile.spec.ts:57:55",
      "location": {
        "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/profile.spec.ts",
        "column": 55,
        "line": 57
      },
      "snippet": "\^[[0m \^[[90m 55 |\^[[39m test(\^[[32m'AT-5: Unauthorized user cannot access profile page'\^[[39m\^[[33m,\^[[39m \^[[36masync\^[[39m ({ page }) \^[[33m=>\^[[39m {\n \^[[90m 56 |\^[[39m     \^[[36mawait\^[[39m page\^[[33m.\^[[39mgoto(\^[[32m'http://localhost:8000/profile'\^[[39m)\^[[33m;\^[[39m\n\^[[31m\^[[1m>\^[[22m\^[[39m\^[[90m 57 |\^[[39m     \^[[36mawait\^[[39m expect(page\^[[33m.\^[[39mlocator(\^[[32m'text=Not authorized'\^[[39m))\^[[33m.\^[[39mtoBeVisible()\^[[33m;\^[[39m\n \^[[90m    |\^[[39m                                                       \^[[31m\^[[1m^\^[[22m\^[[39m\n \^[[90m 58 |\^[[39m })\^[[33m;\^[[39m\n \^[[90m 59 |\^[[39m\n \^[[90m 60 |\^[[39m\^[[0m"
    },
    "errors": [
      {
        "location": {
          "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/profile.spec.ts",
          "column": 55,
          "line": 57
        },
        "message": "Error: \^[[2mexpect(\^[[22m\^[[31mlocator\^[[39m\^[[2m).\^[[22mtoBeVisible\^[[2m()\^[[22m failed\n\nLocator:  locator('text=Not authorized')\nExpected: visible\nReceived: <element(s) not found>\nTimeout:  5000ms\n\nCall log:\n\^[[2m  - Expect \"toBeVisible\" with timeout 5000ms\^[[22m\n\^[[2m  - waiting for locator('text=Not authorized')\^[[22m\n\n\n  55 | test('AT-5: Unauthorized user cannot access profile page', async ({ page }) => {\n  56 |     await page.goto('http://localhost:8000/profile');\n> 57 |     await expect(page.locator('text=Not authorized')).toBeVisible();\n     |                                                       ^\n  58 | });\n  59 |\n  60 |\n    at /home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/profile.spec.ts:57:55"
      }
    ],
    "stdout": [],
    "stderr": [],
    "retry": 0,
    "startTime": "2025-10-13T21:11:18.480Z",
    "annotations": [],
    "attachments": [
      {
        "name": "screenshot",
        "contentType": "image/png",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/profile-AT-5-Unauthorized-user-cannot-access-profile-page-chromium/test-failed-1.png"
      },
      {
        "name": "video",
        "contentType": "video/webm",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/profile-AT-5-Unauthorized-user-cannot-access-profile-page-chromium/video.webm"
      },
      {
        "name": "error-context",
        "contentType": "text/markdown",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/profile-AT-5-Unauthorized-user-cannot-access-profile-page-chromium/error-context.md"
      }
    ],
    "errorLocation": {
      "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/profile.spec.ts",
      "column": 55,
      "line": 57
    }
  }
]
      ```

---

## Test Failed: AT-4: Profile settings persist after reload
**Labels:** automated-defect

Test Name: AT-4: Profile settings persist after reload
      File: profile.spec.ts

      Screenshot:
      Screenshot attached in GitHub Actions artifacts (if available)

      Playwright Report:
      https://github.com/BUMETCS673/cs673olf25project-cs673olf25_team1/actions/runs/18478059837#artifacts

      Details:
      ```json
      [
  {
    "workerIndex": 25,
    "parallelIndex": 1,
    "status": "failed",
    "duration": 10219,
    "error": {
      "message": "Error: \^[[2mexpect(\^[[22m\^[[31mlocator\^[[39m\^[[2m).\^[[22mtoHaveAttribute\^[[2m(\^[[22m\^[[32mexpected\^[[39m\^[[2m)\^[[22m failed\n\nLocator: locator('[aria-label=\"Click to select\"]').nth(1)\nExpected string: \^[[32m\"true\"\^[[39m\nReceived string: \^[[31m\"\"\^[[39m\nTimeout: 5000ms\n\nCall log:\n\^[[2m  - Expect \"toHaveAttribute\" with timeout 5000ms\^[[22m\n\^[[2m  - waiting for locator('[aria-label=\"Click to select\"]').nth(1)\^[[22m\n\^[[2m    7 × locator resolved to <div aria-label=\"Click to select\" data-mui-internal-clone-element=\"true\" class=\"MuiAvatar-root MuiAvatar-circular css-r4mjgc-MuiAvatar-root\">…</div>\^[[22m\n\^[[2m      - unexpected value \"null\"\^[[22m\n",
      "stack": "Error: \^[[2mexpect(\^[[22m\^[[31mlocator\^[[39m\^[[2m).\^[[22mtoHaveAttribute\^[[2m(\^[[22m\^[[32mexpected\^[[39m\^[[2m)\^[[22m failed\n\nLocator: locator('[aria-label=\"Click to select\"]').nth(1)\nExpected string: \^[[32m\"true\"\^[[39m\nReceived string: \^[[31m\"\"\^[[39m\nTimeout: 5000ms\n\nCall log:\n\^[[2m  - Expect \"toHaveAttribute\" with timeout 5000ms\^[[22m\n\^[[2m  - waiting for locator('[aria-label=\"Click to select\"]').nth(1)\^[[22m\n\^[[2m    7 × locator resolved to <div aria-label=\"Click to select\" data-mui-internal-clone-element=\"true\" class=\"MuiAvatar-root MuiAvatar-circular css-r4mjgc-MuiAvatar-root\">…</div>\^[[22m\n\^[[2m      - unexpected value \"null\"\^[[22m\n\n    at /home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/profile.spec.ts:52:34",
      "location": {
        "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/profile.spec.ts",
        "column": 34,
        "line": 52
      },
      "snippet": "\^[[0m \^[[90m 50 |\^[[39m\n \^[[90m 51 |\^[[39m     \^[[36mawait\^[[39m page\^[[33m.\^[[39mreload()\^[[33m;\^[[39m\n\^[[31m\^[[1m>\^[[22m\^[[39m\^[[90m 52 |\^[[39m     \^[[36mawait\^[[39m expect(avatars\^[[33m.\^[[39mnth(\^[[35m1\^[[39m))\^[[33m.\^[[39mtoHaveAttribute(\^[[32m'aria-selected'\^[[39m\^[[33m,\^[[39m \^[[32m'true'\^[[39m)\^[[33m;\^[[39m\n \^[[90m    |\^[[39m                                  \^[[31m\^[[1m^\^[[22m\^[[39m\n \^[[90m 53 |\^[[39m })\^[[33m;\^[[39m\n \^[[90m 54 |\^[[39m\n \^[[90m 55 |\^[[39m test(\^[[32m'AT-5: Unauthorized user cannot access profile page'\^[[39m\^[[33m,\^[[39m \^[[36masync\^[[39m ({ page }) \^[[33m=>\^[[39m {\^[[0m"
    },
    "errors": [
      {
        "location": {
          "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/profile.spec.ts",
          "column": 34,
          "line": 52
        },
        "message": "Error: \^[[2mexpect(\^[[22m\^[[31mlocator\^[[39m\^[[2m).\^[[22mtoHaveAttribute\^[[2m(\^[[22m\^[[32mexpected\^[[39m\^[[2m)\^[[22m failed\n\nLocator: locator('[aria-label=\"Click to select\"]').nth(1)\nExpected string: \^[[32m\"true\"\^[[39m\nReceived string: \^[[31m\"\"\^[[39m\nTimeout: 5000ms\n\nCall log:\n\^[[2m  - Expect \"toHaveAttribute\" with timeout 5000ms\^[[22m\n\^[[2m  - waiting for locator('[aria-label=\"Click to select\"]').nth(1)\^[[22m\n\^[[2m    7 × locator resolved to <div aria-label=\"Click to select\" data-mui-internal-clone-element=\"true\" class=\"MuiAvatar-root MuiAvatar-circular css-r4mjgc-MuiAvatar-root\">…</div>\^[[22m\n\^[[2m      - unexpected value \"null\"\^[[22m\n\n\n  50 |\n  51 |     await page.reload();\n> 52 |     await expect(avatars.nth(1)).toHaveAttribute('aria-selected', 'true');\n     |                                  ^\n  53 | });\n  54 |\n  55 | test('AT-5: Unauthorized user cannot access profile page', async ({ page }) => {\n    at /home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/profile.spec.ts:52:34"
      }
    ],
    "stdout": [],
    "stderr": [],
    "retry": 0,
    "startTime": "2025-10-13T21:11:17.870Z",
    "annotations": [],
    "attachments": [
      {
        "name": "screenshot",
        "contentType": "image/png",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/profile-AT-4-Profile-settings-persist-after-reload-chromium/test-failed-1.png"
      },
      {
        "name": "video",
        "contentType": "video/webm",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/profile-AT-4-Profile-settings-persist-after-reload-chromium/video.webm"
      },
      {
        "name": "error-context",
        "contentType": "text/markdown",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/profile-AT-4-Profile-settings-persist-after-reload-chromium/error-context.md"
      }
    ],
    "errorLocation": {
      "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/profile.spec.ts",
      "column": 34,
      "line": 52
    }
  }
]
      ```

---

## Test Failed: AT-3: Selecting theme color and saving updates profile
**Labels:** automated-defect

Test Name: AT-3: Selecting theme color and saving updates profile
      File: profile.spec.ts

      Screenshot:
      Screenshot attached in GitHub Actions artifacts (if available)

      Playwright Report:
      https://github.com/BUMETCS673/cs673olf25project-cs673olf25_team1/actions/runs/18478059837#artifacts

      Details:
      ```json
      [
  {
    "workerIndex": 23,
    "parallelIndex": 0,
    "status": "failed",
    "duration": 8689,
    "error": {
      "message": "Error: \^[[2mexpect(\^[[22m\^[[31mlocator\^[[39m\^[[2m).\^[[22mtoBeVisible\^[[2m()\^[[22m failed\n\nLocator:  locator('text=Profile updated successfully')\nExpected: visible\nReceived: <element(s) not found>\nTimeout:  5000ms\n\nCall log:\n\^[[2m  - Expect \"toBeVisible\" with timeout 5000ms\^[[22m\n\^[[2m  - waiting for locator('text=Profile updated successfully')\^[[22m\n",
      "stack": "Error: \^[[2mexpect(\^[[22m\^[[31mlocator\^[[39m\^[[2m).\^[[22mtoBeVisible\^[[2m()\^[[22m failed\n\nLocator:  locator('text=Profile updated successfully')\nExpected: visible\nReceived: <element(s) not found>\nTimeout:  5000ms\n\nCall log:\n\^[[2m  - Expect \"toBeVisible\" with timeout 5000ms\^[[22m\n\^[[2m  - waiting for locator('text=Profile updated successfully')\^[[22m\n\n    at /home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/profile.spec.ts:38:69",
      "location": {
        "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/profile.spec.ts",
        "column": 69,
        "line": 38
      },
      "snippet": "\^[[0m \^[[90m 36 |\^[[39m\n \^[[90m 37 |\^[[39m     \^[[90m// TODO: Assert on visible change or success message\^[[39m\n\^[[31m\^[[1m>\^[[22m\^[[39m\^[[90m 38 |\^[[39m     \^[[36mawait\^[[39m expect(page\^[[33m.\^[[39mlocator(\^[[32m'text=Profile updated successfully'\^[[39m))\^[[33m.\^[[39mtoBeVisible()\^[[33m;\^[[39m\n \^[[90m    |\^[[39m                                                                     \^[[31m\^[[1m^\^[[22m\^[[39m\n \^[[90m 39 |\^[[39m })\^[[33m;\^[[39m\n \^[[90m 40 |\^[[39m\n \^[[90m 41 |\^[[39m test(\^[[32m'AT-4: Profile settings persist after reload'\^[[39m\^[[33m,\^[[39m \^[[36masync\^[[39m ({ page }) \^[[33m=>\^[[39m {\^[[0m"
    },
    "errors": [
      {
        "location": {
          "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/profile.spec.ts",
          "column": 69,
          "line": 38
        },
        "message": "Error: \^[[2mexpect(\^[[22m\^[[31mlocator\^[[39m\^[[2m).\^[[22mtoBeVisible\^[[2m()\^[[22m failed\n\nLocator:  locator('text=Profile updated successfully')\nExpected: visible\nReceived: <element(s) not found>\nTimeout:  5000ms\n\nCall log:\n\^[[2m  - Expect \"toBeVisible\" with timeout 5000ms\^[[22m\n\^[[2m  - waiting for locator('text=Profile updated successfully')\^[[22m\n\n\n  36 |\n  37 |     // TODO: Assert on visible change or success message\n> 38 |     await expect(page.locator('text=Profile updated successfully')).toBeVisible();\n     |                                                                     ^\n  39 | });\n  40 |\n  41 | test('AT-4: Profile settings persist after reload', async ({ page }) => {\n    at /home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/profile.spec.ts:38:69"
      }
    ],
    "stdout": [],
    "stderr": [],
    "retry": 0,
    "startTime": "2025-10-13T21:11:09.007Z",
    "annotations": [],
    "attachments": [
      {
        "name": "screenshot",
        "contentType": "image/png",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/profile-AT-3-Selecting-the-4a89d--and-saving-updates-profile-chromium/test-failed-1.png"
      },
      {
        "name": "video",
        "contentType": "video/webm",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/profile-AT-3-Selecting-the-4a89d--and-saving-updates-profile-chromium/video.webm"
      },
      {
        "name": "error-context",
        "contentType": "text/markdown",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/profile-AT-3-Selecting-the-4a89d--and-saving-updates-profile-chromium/error-context.md"
      }
    ],
    "errorLocation": {
      "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/profile.spec.ts",
      "column": 69,
      "line": 38
    }
  }
]
      ```

---

## Test Failed: AT-2: Selecting avatar and saving updates profile
**Labels:** automated-defect

Test Name: AT-2: Selecting avatar and saving updates profile
      File: profile.spec.ts

      Screenshot:
      Screenshot attached in GitHub Actions artifacts (if available)

      Playwright Report:
      https://github.com/BUMETCS673/cs673olf25project-cs673olf25_team1/actions/runs/18478059837#artifacts

      Details:
      ```json
      [
  {
    "workerIndex": 24,
    "parallelIndex": 1,
    "status": "failed",
    "duration": 8938,
    "error": {
      "message": "Error: \^[[2mexpect(\^[[22m\^[[31mlocator\^[[39m\^[[2m).\^[[22mtoBeVisible\^[[2m()\^[[22m failed\n\nLocator:  locator('text=Profile updated successfully')\nExpected: visible\nReceived: <element(s) not found>\nTimeout:  5000ms\n\nCall log:\n\^[[2m  - Expect \"toBeVisible\" with timeout 5000ms\^[[22m\n\^[[2m  - waiting for locator('text=Profile updated successfully')\^[[22m\n",
      "stack": "Error: \^[[2mexpect(\^[[22m\^[[31mlocator\^[[39m\^[[2m).\^[[22mtoBeVisible\^[[2m()\^[[22m failed\n\nLocator:  locator('text=Profile updated successfully')\nExpected: visible\nReceived: <element(s) not found>\nTimeout:  5000ms\n\nCall log:\n\^[[2m  - Expect \"toBeVisible\" with timeout 5000ms\^[[22m\n\^[[2m  - waiting for locator('text=Profile updated successfully')\^[[22m\n\n    at /home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/profile.spec.ts:24:69",
      "location": {
        "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/profile.spec.ts",
        "column": 69,
        "line": 24
      },
      "snippet": "\^[[0m \^[[90m 22 |\^[[39m\n \^[[90m 23 |\^[[39m     \^[[90m// TODO: Replace with success toast or dialog once implemented\^[[39m\n\^[[31m\^[[1m>\^[[22m\^[[39m\^[[90m 24 |\^[[39m     \^[[36mawait\^[[39m expect(page\^[[33m.\^[[39mlocator(\^[[32m'text=Profile updated successfully'\^[[39m))\^[[33m.\^[[39mtoBeVisible()\^[[33m;\^[[39m\n \^[[90m    |\^[[39m                                                                     \^[[31m\^[[1m^\^[[22m\^[[39m\n \^[[90m 25 |\^[[39m })\^[[33m;\^[[39m\n \^[[90m 26 |\^[[39m\n \^[[90m 27 |\^[[39m test(\^[[32m'AT-3: Selecting theme color and saving updates profile'\^[[39m\^[[33m,\^[[39m \^[[36masync\^[[39m ({ page }) \^[[33m=>\^[[39m {\^[[0m"
    },
    "errors": [
      {
        "location": {
          "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/profile.spec.ts",
          "column": 69,
          "line": 24
        },
        "message": "Error: \^[[2mexpect(\^[[22m\^[[31mlocator\^[[39m\^[[2m).\^[[22mtoBeVisible\^[[2m()\^[[22m failed\n\nLocator:  locator('text=Profile updated successfully')\nExpected: visible\nReceived: <element(s) not found>\nTimeout:  5000ms\n\nCall log:\n\^[[2m  - Expect \"toBeVisible\" with timeout 5000ms\^[[22m\n\^[[2m  - waiting for locator('text=Profile updated successfully')\^[[22m\n\n\n  22 |\n  23 |     // TODO: Replace with success toast or dialog once implemented\n> 24 |     await expect(page.locator('text=Profile updated successfully')).toBeVisible();\n     |                                                                     ^\n  25 | });\n  26 |\n  27 | test('AT-3: Selecting theme color and saving updates profile', async ({ page }) => {\n    at /home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/profile.spec.ts:24:69"
      }
    ],
    "stdout": [],
    "stderr": [],
    "retry": 0,
    "startTime": "2025-10-13T21:11:08.094Z",
    "annotations": [],
    "attachments": [
      {
        "name": "screenshot",
        "contentType": "image/png",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/profile-AT-2-Selecting-avatar-and-saving-updates-profile-chromium/test-failed-1.png"
      },
      {
        "name": "video",
        "contentType": "video/webm",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/profile-AT-2-Selecting-avatar-and-saving-updates-profile-chromium/video.webm"
      },
      {
        "name": "error-context",
        "contentType": "text/markdown",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/profile-AT-2-Selecting-avatar-and-saving-updates-profile-chromium/error-context.md"
      }
    ],
    "errorLocation": {
      "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/profile.spec.ts",
      "column": 69,
      "line": 24
    }
  }
]
      ```

---

## Test Failed: AT-9: Dialog is usable on mobile viewport
**Labels:** automated-defect

Test Name: AT-9: Dialog is usable on mobile viewport
      File: help-community.spec.ts

      Screenshot:
      Screenshot attached in GitHub Actions artifacts (if available)

      Playwright Report:
      https://github.com/BUMETCS673/cs673olf25project-cs673olf25_team1/actions/runs/18478059837#artifacts

      Details:
      ```json
      [
  {
    "workerIndex": 18,
    "parallelIndex": 1,
    "status": "failed",
    "duration": 2607,
    "error": {
      "message": "Error: Help button not found on page.",
      "stack": "Error: Help button not found on page.\n    at openHelp (/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/help-community.spec.ts:30:21)\n    at /home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/help-community.spec.ts:137:3",
      "location": {
        "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/help-community.spec.ts",
        "column": 21,
        "line": 30
      },
      "snippet": "\^[[0m \^[[90m 28 |\^[[39m   }\n \^[[90m 29 |\^[[39m\n\^[[31m\^[[1m>\^[[22m\^[[39m\^[[90m 30 |\^[[39m   \^[[36mif\^[[39m (\^[[33m!\^[[39mfound) \^[[36mthrow\^[[39m \^[[36mnew\^[[39m \^[[33mError\^[[39m(\^[[32m'Help button not found on page.'\^[[39m)\^[[33m;\^[[39m\n \^[[90m    |\^[[39m                     \^[[31m\^[[1m^\^[[22m\^[[39m\n \^[[90m 31 |\^[[39m\n \^[[90m 32 |\^[[39m   \^[[90m// Scroll to ensure visibility\^[[39m\n \^[[90m 33 |\^[[39m   \^[[36mtry\^[[39m {\^[[0m"
    },
    "errors": [
      {
        "location": {
          "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/help-community.spec.ts",
          "column": 21,
          "line": 30
        },
        "message": "Error: Help button not found on page.\n\n  28 |   }\n  29 |\n> 30 |   if (!found) throw new Error('Help button not found on page.');\n     |                     ^\n  31 |\n  32 |   // Scroll to ensure visibility\n  33 |   try {\n    at openHelp (/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/help-community.spec.ts:30:21)\n    at /home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/help-community.spec.ts:137:3"
      }
    ],
    "stdout": [],
    "stderr": [],
    "retry": 0,
    "startTime": "2025-10-13T21:11:04.819Z",
    "annotations": [],
    "attachments": [
      {
        "name": "screenshot",
        "contentType": "image/png",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/help-community-AT-9-Dialog-is-usable-on-mobile-viewport-chromium/test-failed-1.png"
      },
      {
        "name": "video",
        "contentType": "video/webm",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/help-community-AT-9-Dialog-is-usable-on-mobile-viewport-chromium/video.webm"
      },
      {
        "name": "error-context",
        "contentType": "text/markdown",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/help-community-AT-9-Dialog-is-usable-on-mobile-viewport-chromium/error-context.md"
      }
    ],
    "errorLocation": {
      "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/help-community.spec.ts",
      "column": 21,
      "line": 30
    }
  }
]
      ```

---

## Test Failed: AT-9: Dialog is usable on mobile viewport
**Labels:** automated-defect

Test Name: AT-9: Dialog is usable on mobile viewport
      File: help-ai.spec.ts

      Screenshot:
      Screenshot attached in GitHub Actions artifacts (if available)

      Playwright Report:
      https://github.com/BUMETCS673/cs673olf25project-cs673olf25_team1/actions/runs/18478059837#artifacts

      Details:
      ```json
      [
  {
    "workerIndex": 22,
    "parallelIndex": 0,
    "status": "failed",
    "duration": 5009,
    "error": {
      "message": "Error: locator.elementHandle: Error: strict mode violation: locator('text=Help') resolved to 2 elements:\n    1) <p class=\"MuiTypography-root MuiTypography-body2 css-tf6nos-MuiTypography-root\">Hello! I’m your AI assistant. How can I help you …</p> aka getByText('Hello! I’m your AI assistant')\n    2) <button tabindex=\"0\" type=\"button\" data-testid=\"help-button\" class=\"MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary css-zoli0u-MuiButtonBase-root-MuiButton-root\">…</button> aka getByTestId('help-button')\n\nCall log:\n\^[[2m  - waiting for locator('text=Help')\^[[22m\n",
      "stack": "Error: locator.elementHandle: Error: strict mode violation: locator('text=Help') resolved to 2 elements:\n    1) <p class=\"MuiTypography-root MuiTypography-body2 css-tf6nos-MuiTypography-root\">Hello! I’m your AI assistant. How can I help you …</p> aka getByText('Hello! I’m your AI assistant')\n    2) <button tabindex=\"0\" type=\"button\" data-testid=\"help-button\" class=\"MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary css-zoli0u-MuiButtonBase-root-MuiButton-root\">…</button> aka getByTestId('help-button')\n\nCall log:\n\^[[2m  - waiting for locator('text=Help')\^[[22m\n\n    at openHelp (/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/help-ai.spec.ts:43:37)\n    at /home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/help-ai.spec.ts:149:5",
      "location": {
        "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/help-ai.spec.ts",
        "column": 37,
        "line": 43
      },
      "snippet": "\^[[0m \^[[90m 41 |\^[[39m         \^[[36mawait\^[[39m helpButton\^[[33m.\^[[39mclick({ timeout\^[[33m:\^[[39m \^[[35m5000\^[[39m })\^[[33m;\^[[39m\n \^[[90m 42 |\^[[39m     } \^[[36mcatch\^[[39m {\n\^[[31m\^[[1m>\^[[22m\^[[39m\^[[90m 43 |\^[[39m         \^[[36mconst\^[[39m el \^[[33m=\^[[39m \^[[36mawait\^[[39m helpButton\^[[33m.\^[[39melementHandle()\^[[33m;\^[[39m\n \^[[90m    |\^[[39m                                     \^[[31m\^[[1m^\^[[22m\^[[39m\n \^[[90m 44 |\^[[39m         \^[[36mif\^[[39m (el) \^[[36mawait\^[[39m page\^[[33m.\^[[39mevaluate((e) \^[[33m=>\^[[39m (e \^[[36mas\^[[39m \^[[33mHTMLElement\^[[39m)\^[[33m.\^[[39mclick()\^[[33m,\^[[39m el)\^[[33m;\^[[39m\n \^[[90m 45 |\^[[39m         \^[[36melse\^[[39m \^[[36mthrow\^[[39m \^[[36mnew\^[[39m \^[[33mError\^[[39m(\^[[32m'Help button click failed — element handle missing.'\^[[39m)\^[[33m;\^[[39m\n \^[[90m 46 |\^[[39m     }\^[[0m"
    },
    "errors": [
      {
        "location": {
          "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/help-ai.spec.ts",
          "column": 37,
          "line": 43
        },
        "message": "Error: locator.elementHandle: Error: strict mode violation: locator('text=Help') resolved to 2 elements:\n    1) <p class=\"MuiTypography-root MuiTypography-body2 css-tf6nos-MuiTypography-root\">Hello! I’m your AI assistant. How can I help you …</p> aka getByText('Hello! I’m your AI assistant')\n    2) <button tabindex=\"0\" type=\"button\" data-testid=\"help-button\" class=\"MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary css-zoli0u-MuiButtonBase-root-MuiButton-root\">…</button> aka getByTestId('help-button')\n\nCall log:\n\^[[2m  - waiting for locator('text=Help')\^[[22m\n\n\n  41 |         await helpButton.click({ timeout: 5000 });\n  42 |     } catch {\n> 43 |         const el = await helpButton.elementHandle();\n     |                                     ^\n  44 |         if (el) await page.evaluate((e) => (e as HTMLElement).click(), el);\n  45 |         else throw new Error('Help button click failed — element handle missing.');\n  46 |     }\n    at openHelp (/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/help-ai.spec.ts:43:37)\n    at /home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/help-ai.spec.ts:149:5"
      }
    ],
    "stdout": [],
    "stderr": [],
    "retry": 0,
    "startTime": "2025-10-13T21:10:34.289Z",
    "annotations": [],
    "attachments": [
      {
        "name": "screenshot",
        "contentType": "image/png",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/help-ai-AT-9-Dialog-is-usable-on-mobile-viewport-chromium/test-failed-1.png"
      },
      {
        "name": "video",
        "contentType": "video/webm",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/help-ai-AT-9-Dialog-is-usable-on-mobile-viewport-chromium/video.webm"
      },
      {
        "name": "error-context",
        "contentType": "text/markdown",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/help-ai-AT-9-Dialog-is-usable-on-mobile-viewport-chromium/error-context.md"
      }
    ],
    "errorLocation": {
      "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/help-ai.spec.ts",
      "column": 37,
      "line": 43
    }
  }
]
      ```

---

## Test Failed: AT-7: Re-open works after closing
**Labels:** automated-defect

Test Name: AT-7: Re-open works after closing
      File: help-ai.spec.ts

      Screenshot:
      Screenshot attached in GitHub Actions artifacts (if available)

      Playwright Report:
      https://github.com/BUMETCS673/cs673olf25project-cs673olf25_team1/actions/runs/18478059837#artifacts

      Details:
      ```json
      [
  {
    "workerIndex": 21,
    "parallelIndex": 0,
    "status": "failed",
    "duration": 4930,
    "error": {
      "message": "Error: locator.elementHandle: Error: strict mode violation: locator('text=Help') resolved to 2 elements:\n    1) <p class=\"MuiTypography-root MuiTypography-body2 css-tf6nos-MuiTypography-root\">Hello! I’m your AI assistant. How can I help you …</p> aka getByText('Hello! I’m your AI assistant')\n    2) <button tabindex=\"0\" type=\"button\" data-testid=\"help-button\" class=\"MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary css-zoli0u-MuiButtonBase-root-MuiButton-root\">…</button> aka getByTestId('help-button')\n\nCall log:\n\^[[2m  - waiting for locator('text=Help')\^[[22m\n",
      "stack": "Error: locator.elementHandle: Error: strict mode violation: locator('text=Help') resolved to 2 elements:\n    1) <p class=\"MuiTypography-root MuiTypography-body2 css-tf6nos-MuiTypography-root\">Hello! I’m your AI assistant. How can I help you …</p> aka getByText('Hello! I’m your AI assistant')\n    2) <button tabindex=\"0\" type=\"button\" data-testid=\"help-button\" class=\"MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary css-zoli0u-MuiButtonBase-root-MuiButton-root\">…</button> aka getByTestId('help-button')\n\nCall log:\n\^[[2m  - waiting for locator('text=Help')\^[[22m\n\n    at openHelp (/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/help-ai.spec.ts:43:37)\n    at /home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/help-ai.spec.ts:125:5",
      "location": {
        "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/help-ai.spec.ts",
        "column": 37,
        "line": 43
      },
      "snippet": "\^[[0m \^[[90m 41 |\^[[39m         \^[[36mawait\^[[39m helpButton\^[[33m.\^[[39mclick({ timeout\^[[33m:\^[[39m \^[[35m5000\^[[39m })\^[[33m;\^[[39m\n \^[[90m 42 |\^[[39m     } \^[[36mcatch\^[[39m {\n\^[[31m\^[[1m>\^[[22m\^[[39m\^[[90m 43 |\^[[39m         \^[[36mconst\^[[39m el \^[[33m=\^[[39m \^[[36mawait\^[[39m helpButton\^[[33m.\^[[39melementHandle()\^[[33m;\^[[39m\n \^[[90m    |\^[[39m                                     \^[[31m\^[[1m^\^[[22m\^[[39m\n \^[[90m 44 |\^[[39m         \^[[36mif\^[[39m (el) \^[[36mawait\^[[39m page\^[[33m.\^[[39mevaluate((e) \^[[33m=>\^[[39m (e \^[[36mas\^[[39m \^[[33mHTMLElement\^[[39m)\^[[33m.\^[[39mclick()\^[[33m,\^[[39m el)\^[[33m;\^[[39m\n \^[[90m 45 |\^[[39m         \^[[36melse\^[[39m \^[[36mthrow\^[[39m \^[[36mnew\^[[39m \^[[33mError\^[[39m(\^[[32m'Help button click failed — element handle missing.'\^[[39m)\^[[33m;\^[[39m\n \^[[90m 46 |\^[[39m     }\^[[0m"
    },
    "errors": [
      {
        "location": {
          "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/help-ai.spec.ts",
          "column": 37,
          "line": 43
        },
        "message": "Error: locator.elementHandle: Error: strict mode violation: locator('text=Help') resolved to 2 elements:\n    1) <p class=\"MuiTypography-root MuiTypography-body2 css-tf6nos-MuiTypography-root\">Hello! I’m your AI assistant. How can I help you …</p> aka getByText('Hello! I’m your AI assistant')\n    2) <button tabindex=\"0\" type=\"button\" data-testid=\"help-button\" class=\"MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary css-zoli0u-MuiButtonBase-root-MuiButton-root\">…</button> aka getByTestId('help-button')\n\nCall log:\n\^[[2m  - waiting for locator('text=Help')\^[[22m\n\n\n  41 |         await helpButton.click({ timeout: 5000 });\n  42 |     } catch {\n> 43 |         const el = await helpButton.elementHandle();\n     |                                     ^\n  44 |         if (el) await page.evaluate((e) => (e as HTMLElement).click(), el);\n  45 |         else throw new Error('Help button click failed — element handle missing.');\n  46 |     }\n    at openHelp (/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/help-ai.spec.ts:43:37)\n    at /home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/help-ai.spec.ts:125:5"
      }
    ],
    "stdout": [],
    "stderr": [],
    "retry": 0,
    "startTime": "2025-10-13T21:10:28.753Z",
    "annotations": [],
    "attachments": [
      {
        "name": "screenshot",
        "contentType": "image/png",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/help-ai-AT-7-Re-open-works-after-closing-chromium/test-failed-1.png"
      },
      {
        "name": "video",
        "contentType": "video/webm",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/help-ai-AT-7-Re-open-works-after-closing-chromium/video.webm"
      },
      {
        "name": "error-context",
        "contentType": "text/markdown",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/help-ai-AT-7-Re-open-works-after-closing-chromium/error-context.md"
      }
    ],
    "errorLocation": {
      "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/help-ai.spec.ts",
      "column": 37,
      "line": 43
    }
  }
]
      ```

---

## Test Failed: AT-18: should not duplicate message on rapid Enter presses
**Labels:** automated-defect

Test Name: AT-18: should not duplicate message on rapid Enter presses
      File: enter-key.spec.ts

      Screenshot:
      Screenshot attached in GitHub Actions artifacts (if available)

      Playwright Report:
      https://github.com/BUMETCS673/cs673olf25project-cs673olf25_team1/actions/runs/18478059837#artifacts

      Details:
      ```json
      [
  {
    "workerIndex": 20,
    "parallelIndex": 0,
    "status": "failed",
    "duration": 4956,
    "error": {
      "message": "Error: \^[[2mexpect(\^[[22m\^[[31mreceived\^[[39m\^[[2m).\^[[22mtoBe\^[[2m(\^[[22m\^[[32mexpected\^[[39m\^[[2m) // Object.is equality\^[[22m\n\nExpected: \^[[32m1\^[[39m\nReceived: \^[[31m2\^[[39m",
      "stack": "Error: \^[[2mexpect(\^[[22m\^[[31mreceived\^[[39m\^[[2m).\^[[22mtoBe\^[[2m(\^[[22m\^[[32mexpected\^[[39m\^[[2m) // Object.is equality\^[[22m\n\nExpected: \^[[32m1\^[[39m\nReceived: \^[[31m2\^[[39m\n    at /home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/enter-key.spec.ts:186:25",
      "location": {
        "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/enter-key.spec.ts",
        "column": 25,
        "line": 186
      },
      "snippet": "\^[[0m \^[[90m 184 |\^[[39m     \^[[36mawait\^[[39m page\^[[33m.\^[[39mkeyboard\^[[33m.\^[[39mpress(\^[[32m'Enter'\^[[39m)\^[[33m;\^[[39m\n \^[[90m 185 |\^[[39m     \^[[36mconst\^[[39m occurrences \^[[33m=\^[[39m \^[[36mawait\^[[39m selectors\^[[33m.\^[[39mlist(page)\^[[33m.\^[[39mlocator(\^[[32m`div:has-text(\"${msg}\")`\^[[39m)\^[[33m.\^[[39mcount()\^[[33m;\^[[39m\n\^[[31m\^[[1m>\^[[22m\^[[39m\^[[90m 186 |\^[[39m     expect(occurrences)\^[[33m.\^[[39mtoBe(\^[[35m1\^[[39m)\^[[33m;\^[[39m\n \^[[90m     |\^[[39m                         \^[[31m\^[[1m^\^[[22m\^[[39m\n \^[[90m 187 |\^[[39m })\^[[33m;\^[[39m\n \^[[90m 188 |\^[[39m\n \^[[90m 189 |\^[[39m \^[[90m// AT-19: Shift+Enter creates newline (not send)\^[[39m\^[[0m"
    },
    "errors": [
      {
        "location": {
          "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/enter-key.spec.ts",
          "column": 25,
          "line": 186
        },
        "message": "Error: \^[[2mexpect(\^[[22m\^[[31mreceived\^[[39m\^[[2m).\^[[22mtoBe\^[[2m(\^[[22m\^[[32mexpected\^[[39m\^[[2m) // Object.is equality\^[[22m\n\nExpected: \^[[32m1\^[[39m\nReceived: \^[[31m2\^[[39m\n\n  184 |     await page.keyboard.press('Enter');\n  185 |     const occurrences = await selectors.list(page).locator(`div:has-text(\"${msg}\")`).count();\n> 186 |     expect(occurrences).toBe(1);\n      |                         ^\n  187 | });\n  188 |\n  189 | // AT-19: Shift+Enter creates newline (not send)\n    at /home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/enter-key.spec.ts:186:25"
      }
    ],
    "stdout": [],
    "stderr": [],
    "retry": 0,
    "startTime": "2025-10-13T21:10:01.968Z",
    "annotations": [],
    "attachments": [
      {
        "name": "screenshot",
        "contentType": "image/png",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/enter-key-AT-18-should-not-9a8d2-sage-on-rapid-Enter-presses-chromium/test-failed-1.png"
      },
      {
        "name": "video",
        "contentType": "video/webm",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/enter-key-AT-18-should-not-9a8d2-sage-on-rapid-Enter-presses-chromium/video.webm"
      },
      {
        "name": "error-context",
        "contentType": "text/markdown",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/enter-key-AT-18-should-not-9a8d2-sage-on-rapid-Enter-presses-chromium/error-context.md"
      }
    ],
    "errorLocation": {
      "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/enter-key.spec.ts",
      "column": 25,
      "line": 186
    }
  }
]
      ```

---

## Test Failed: AT-8: should not duplicate message on rapid Enter presses
**Labels:** automated-defect

Test Name: AT-8: should not duplicate message on rapid Enter presses
      File: enter-key.spec.ts

      Screenshot:
      Screenshot attached in GitHub Actions artifacts (if available)

      Playwright Report:
      https://github.com/BUMETCS673/cs673olf25project-cs673olf25_team1/actions/runs/18478059837#artifacts

      Details:
      ```json
      [
  {
    "workerIndex": 19,
    "parallelIndex": 0,
    "status": "failed",
    "duration": 3072,
    "error": {
      "message": "Error: \^[[2mexpect(\^[[22m\^[[31mreceived\^[[39m\^[[2m).\^[[22mtoBe\^[[2m(\^[[22m\^[[32mexpected\^[[39m\^[[2m) // Object.is equality\^[[22m\n\nExpected: \^[[32m1\^[[39m\nReceived: \^[[31m2\^[[39m",
      "stack": "Error: \^[[2mexpect(\^[[22m\^[[31mreceived\^[[39m\^[[2m).\^[[22mtoBe\^[[2m(\^[[22m\^[[32mexpected\^[[39m\^[[2m) // Object.is equality\^[[22m\n\nExpected: \^[[32m1\^[[39m\nReceived: \^[[31m2\^[[39m\n    at /home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/enter-key.spec.ts:77:25",
      "location": {
        "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/enter-key.spec.ts",
        "column": 25,
        "line": 77
      },
      "snippet": "\^[[0m \^[[90m 75 |\^[[39m     \^[[36mawait\^[[39m page\^[[33m.\^[[39mkeyboard\^[[33m.\^[[39mpress(\^[[32m'Enter'\^[[39m)\^[[33m;\^[[39m\n \^[[90m 76 |\^[[39m     \^[[36mconst\^[[39m occurrences \^[[33m=\^[[39m \^[[36mawait\^[[39m selectors\^[[33m.\^[[39mlist(page)\^[[33m.\^[[39mlocator(\^[[32m`div:has-text(\"${msg}\")`\^[[39m)\^[[33m.\^[[39mcount()\^[[33m;\^[[39m\n\^[[31m\^[[1m>\^[[22m\^[[39m\^[[90m 77 |\^[[39m     expect(occurrences)\^[[33m.\^[[39mtoBe(\^[[35m1\^[[39m)\^[[33m;\^[[39m\n \^[[90m    |\^[[39m                         \^[[31m\^[[1m^\^[[22m\^[[39m\n \^[[90m 78 |\^[[39m })\^[[33m;\^[[39m\n \^[[90m 79 |\^[[39m\n \^[[90m 80 |\^[[39m \^[[90m// AT-9: Shift+Enter creates newline (not send)\^[[39m\^[[0m"
    },
    "errors": [
      {
        "location": {
          "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/enter-key.spec.ts",
          "column": 25,
          "line": 77
        },
        "message": "Error: \^[[2mexpect(\^[[22m\^[[31mreceived\^[[39m\^[[2m).\^[[22mtoBe\^[[2m(\^[[22m\^[[32mexpected\^[[39m\^[[2m) // Object.is equality\^[[22m\n\nExpected: \^[[32m1\^[[39m\nReceived: \^[[31m2\^[[39m\n\n  75 |     await page.keyboard.press('Enter');\n  76 |     const occurrences = await selectors.list(page).locator(`div:has-text(\"${msg}\")`).count();\n> 77 |     expect(occurrences).toBe(1);\n     |                         ^\n  78 | });\n  79 |\n  80 | // AT-9: Shift+Enter creates newline (not send)\n    at /home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/enter-key.spec.ts:77:25"
      }
    ],
    "stdout": [],
    "stderr": [],
    "retry": 0,
    "startTime": "2025-10-13T21:09:40.059Z",
    "annotations": [],
    "attachments": [
      {
        "name": "screenshot",
        "contentType": "image/png",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/enter-key-AT-8-should-not--febdd-sage-on-rapid-Enter-presses-chromium/test-failed-1.png"
      },
      {
        "name": "video",
        "contentType": "video/webm",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/enter-key-AT-8-should-not--febdd-sage-on-rapid-Enter-presses-chromium/video.webm"
      },
      {
        "name": "error-context",
        "contentType": "text/markdown",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/enter-key-AT-8-should-not--febdd-sage-on-rapid-Enter-presses-chromium/error-context.md"
      }
    ],
    "errorLocation": {
      "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/enter-key.spec.ts",
      "column": 25,
      "line": 77
    }
  }
]
      ```

---

## Test Failed: AT-19: multiple tabs should show same history
**Labels:** automated-defect

Test Name: AT-19: multiple tabs should show same history
      File: chat-history.spec.ts

      Screenshot:
      Screenshot attached in GitHub Actions artifacts (if available)

      Playwright Report:
      https://github.com/BUMETCS673/cs673olf25project-cs673olf25_team1/actions/runs/18478059837#artifacts

      Details:
      ```json
      [
  {
    "workerIndex": 17,
    "parallelIndex": 0,
    "status": "failed",
    "duration": 12803,
    "error": {
      "message": "Error: \^[[2mexpect(\^[[22m\^[[31mlocator\^[[39m\^[[2m).\^[[22mtoContainText\^[[2m(\^[[22m\^[[32mexpected\^[[39m\^[[2m)\^[[22m failed\n\nLocator: getByTestId('message-list')\nExpected string: \^[[32m\"Multi-tab 1760389764568\"\^[[39m\nReceived string: \^[[31m\"testuser: Test 1760389772015User is typing...\"\^[[39m\nTimeout: 5000ms\n\nCall log:\n\^[[2m  - Expect \"toContainText\" with timeout 5000ms\^[[22m\n\^[[2m  - waiting for getByTestId('message-list')\^[[22m\n\^[[2m    6 × locator resolved to <div data-testid=\"message-list\" class=\"MuiContainer-root MuiContainer-maxWidthMd css-1rl24un-MuiContainer-root\">…</div>\^[[22m\n\^[[2m      - unexpected value \"\"\^[[22m\n\^[[2m    - locator resolved to <div data-testid=\"message-list\" class=\"MuiContainer-root MuiContainer-maxWidthMd css-1rl24un-MuiContainer-root\">…</div>\^[[22m\n\^[[2m    - unexpected value \"testuser: Test 1760389772015User is typing...\"\^[[22m\n",
      "stack": "Error: \^[[2mexpect(\^[[22m\^[[31mlocator\^[[39m\^[[2m).\^[[22mtoContainText\^[[2m(\^[[22m\^[[32mexpected\^[[39m\^[[2m)\^[[22m failed\n\nLocator: getByTestId('message-list')\nExpected string: \^[[32m\"Multi-tab 1760389764568\"\^[[39m\nReceived string: \^[[31m\"testuser: Test 1760389772015User is typing...\"\^[[39m\nTimeout: 5000ms\n\nCall log:\n\^[[2m  - Expect \"toContainText\" with timeout 5000ms\^[[22m\n\^[[2m  - waiting for getByTestId('message-list')\^[[22m\n\^[[2m    6 × locator resolved to <div data-testid=\"message-list\" class=\"MuiContainer-root MuiContainer-maxWidthMd css-1rl24un-MuiContainer-root\">…</div>\^[[22m\n\^[[2m      - unexpected value \"\"\^[[22m\n\^[[2m    - locator resolved to <div data-testid=\"message-list\" class=\"MuiContainer-root MuiContainer-maxWidthMd css-1rl24un-MuiContainer-root\">…</div>\^[[22m\n\^[[2m    - unexpected value \"testuser: Test 1760389772015User is typing...\"\^[[22m\n\n    at /home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/chat-history.spec.ts:330:41",
      "location": {
        "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/chat-history.spec.ts",
        "column": 41,
        "line": 330
      },
      "snippet": "\^[[0m \^[[90m 328 |\^[[39m     \^[[36mconst\^[[39m page2 \^[[33m=\^[[39m \^[[36mawait\^[[39m context\^[[33m.\^[[39mnewPage()\^[[33m;\^[[39m\n \^[[90m 329 |\^[[39m     \^[[36mawait\^[[39m login(page2)\^[[33m;\^[[39m\n\^[[31m\^[[1m>\^[[22m\^[[39m\^[[90m 330 |\^[[39m     \^[[36mawait\^[[39m expect(selectors\^[[33m.\^[[39mlist(page2))\^[[33m.\^[[39mtoContainText(msg)\^[[33m;\^[[39m\n \^[[90m     |\^[[39m                                         \^[[31m\^[[1m^\^[[22m\^[[39m\n \^[[90m 331 |\^[[39m })\^[[33m;\^[[39m\n \^[[90m 332 |\^[[39m\n \^[[90m 333 |\^[[39m \^[[90m// AT-20: Empty history stays empty after refresh\^[[39m\^[[0m"
    },
    "errors": [
      {
        "location": {
          "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/chat-history.spec.ts",
          "column": 41,
          "line": 330
        },
        "message": "Error: \^[[2mexpect(\^[[22m\^[[31mlocator\^[[39m\^[[2m).\^[[22mtoContainText\^[[2m(\^[[22m\^[[32mexpected\^[[39m\^[[2m)\^[[22m failed\n\nLocator: getByTestId('message-list')\nExpected string: \^[[32m\"Multi-tab 1760389764568\"\^[[39m\nReceived string: \^[[31m\"testuser: Test 1760389772015User is typing...\"\^[[39m\nTimeout: 5000ms\n\nCall log:\n\^[[2m  - Expect \"toContainText\" with timeout 5000ms\^[[22m\n\^[[2m  - waiting for getByTestId('message-list')\^[[22m\n\^[[2m    6 × locator resolved to <div data-testid=\"message-list\" class=\"MuiContainer-root MuiContainer-maxWidthMd css-1rl24un-MuiContainer-root\">…</div>\^[[22m\n\^[[2m      - unexpected value \"\"\^[[22m\n\^[[2m    - locator resolved to <div data-testid=\"message-list\" class=\"MuiContainer-root MuiContainer-maxWidthMd css-1rl24un-MuiContainer-root\">…</div>\^[[22m\n\^[[2m    - unexpected value \"testuser: Test 1760389772015User is typing...\"\^[[22m\n\n\n  328 |     const page2 = await context.newPage();\n  329 |     await login(page2);\n> 330 |     await expect(selectors.list(page2)).toContainText(msg);\n      |                                         ^\n  331 | });\n  332 |\n  333 | // AT-20: Empty history stays empty after refresh\n    at /home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/chat-history.spec.ts:330:41"
      }
    ],
    "stdout": [],
    "stderr": [],
    "retry": 0,
    "startTime": "2025-10-13T21:09:20.307Z",
    "annotations": [],
    "attachments": [
      {
        "name": "screenshot",
        "contentType": "image/png",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/chat-history-AT-19-multiple-tabs-should-show-same-history-chromium/test-failed-2.png"
      },
      {
        "name": "screenshot",
        "contentType": "image/png",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/chat-history-AT-19-multiple-tabs-should-show-same-history-chromium/test-failed-1.png"
      },
      {
        "name": "video",
        "contentType": "video/webm",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/chat-history-AT-19-multiple-tabs-should-show-same-history-chromium/video-1.webm"
      },
      {
        "name": "video",
        "contentType": "video/webm",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/chat-history-AT-19-multiple-tabs-should-show-same-history-chromium/video.webm"
      },
      {
        "name": "error-context",
        "contentType": "text/markdown",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/chat-history-AT-19-multiple-tabs-should-show-same-history-chromium/error-context.md"
      }
    ],
    "errorLocation": {
      "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/chat-history.spec.ts",
      "column": 41,
      "line": 330
    }
  }
]
      ```

---

## Test Failed: AT-16: should keep order after multiple refreshes
**Labels:** automated-defect

Test Name: AT-16: should keep order after multiple refreshes
      File: chat-history.spec.ts

      Screenshot:
      Screenshot attached in GitHub Actions artifacts (if available)

      Playwright Report:
      https://github.com/BUMETCS673/cs673olf25project-cs673olf25_team1/actions/runs/18478059837#artifacts

      Details:
      ```json
      [
  {
    "workerIndex": 16,
    "parallelIndex": 1,
    "status": "failed",
    "duration": 15632,
    "error": {
      "message": "Error: \^[[2mexpect(\^[[22m\^[[31mlocator\^[[39m\^[[2m).\^[[22mtoBeVisible\^[[2m()\^[[22m failed\n\nLocator:  getByTestId('message-list').locator('div:has-text(\"One 1760389751133\")').last()\nExpected: visible\nReceived: <element(s) not found>\nTimeout:  5000ms\n\nCall log:\n\^[[2m  - Expect \"toBeVisible\" with timeout 5000ms\^[[22m\n\^[[2m  - waiting for getByTestId('message-list').locator('div:has-text(\"One 1760389751133\")').last()\^[[22m\n",
      "stack": "Error: \^[[2mexpect(\^[[22m\^[[31mlocator\^[[39m\^[[2m).\^[[22mtoBeVisible\^[[2m()\^[[22m failed\n\nLocator:  getByTestId('message-list').locator('div:has-text(\"One 1760389751133\")').last()\nExpected: visible\nReceived: <element(s) not found>\nTimeout:  5000ms\n\nCall log:\n\^[[2m  - Expect \"toBeVisible\" with timeout 5000ms\^[[22m\n\^[[2m  - waiting for getByTestId('message-list').locator('div:has-text(\"One 1760389751133\")').last()\^[[22m\n\n    at /home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/chat-history.spec.ts:281:32",
      "location": {
        "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/chat-history.spec.ts",
        "column": 32,
        "line": 281
      },
      "snippet": "\^[[0m \^[[90m 279 |\^[[39m     \^[[36mconst\^[[39m firstMessage \^[[33m=\^[[39m selectors\^[[33m.\^[[39mlist(page)\^[[33m.\^[[39mlocator(\^[[32m`div:has-text(\"${msgs[0]}\")`\^[[39m)\^[[33m.\^[[39mlast()\^[[33m;\^[[39m\n \^[[90m 280 |\^[[39m     \^[[36mconst\^[[39m secondMessage \^[[33m=\^[[39m selectors\^[[33m.\^[[39mlist(page)\^[[33m.\^[[39mlocator(\^[[32m`div:has-text(\"${msgs[1]}\")`\^[[39m)\^[[33m.\^[[39mlast()\^[[33m;\^[[39m\n\^[[31m\^[[1m>\^[[22m\^[[39m\^[[90m 281 |\^[[39m     \^[[36mawait\^[[39m expect(firstMessage)\^[[33m.\^[[39mtoBeVisible({ timeout\^[[33m:\^[[39m \^[[35m5000\^[[39m })\^[[33m;\^[[39m\n \^[[90m     |\^[[39m                                \^[[31m\^[[1m^\^[[22m\^[[39m\n \^[[90m 282 |\^[[39m     \^[[36mawait\^[[39m expect(secondMessage)\^[[33m.\^[[39mtoBeVisible({ timeout\^[[33m:\^[[39m \^[[35m5000\^[[39m })\^[[33m;\^[[39m\n \^[[90m 283 |\^[[39m\n \^[[90m 284 |\^[[39m     \^[[90m// Grab full list content to compare index\^[[39m\^[[0m"
    },
    "errors": [
      {
        "location": {
          "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/chat-history.spec.ts",
          "column": 32,
          "line": 281
        },
        "message": "Error: \^[[2mexpect(\^[[22m\^[[31mlocator\^[[39m\^[[2m).\^[[22mtoBeVisible\^[[2m()\^[[22m failed\n\nLocator:  getByTestId('message-list').locator('div:has-text(\"One 1760389751133\")').last()\nExpected: visible\nReceived: <element(s) not found>\nTimeout:  5000ms\n\nCall log:\n\^[[2m  - Expect \"toBeVisible\" with timeout 5000ms\^[[22m\n\^[[2m  - waiting for getByTestId('message-list').locator('div:has-text(\"One 1760389751133\")').last()\^[[22m\n\n\n  279 |     const firstMessage = selectors.list(page).locator(`div:has-text(\"${msgs[0]}\")`).last();\n  280 |     const secondMessage = selectors.list(page).locator(`div:has-text(\"${msgs[1]}\")`).last();\n> 281 |     await expect(firstMessage).toBeVisible({ timeout: 5000 });\n      |                                ^\n  282 |     await expect(secondMessage).toBeVisible({ timeout: 5000 });\n  283 |\n  284 |     // Grab full list content to compare index\n    at /home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/chat-history.spec.ts:281:32"
      }
    ],
    "stdout": [],
    "stderr": [],
    "retry": 0,
    "startTime": "2025-10-13T21:09:06.687Z",
    "annotations": [],
    "attachments": [
      {
        "name": "screenshot",
        "contentType": "image/png",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/chat-history-AT-16-should--6a09f-er-after-multiple-refreshes-chromium/test-failed-1.png"
      },
      {
        "name": "video",
        "contentType": "video/webm",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/chat-history-AT-16-should--6a09f-er-after-multiple-refreshes-chromium/video.webm"
      },
      {
        "name": "error-context",
        "contentType": "text/markdown",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/chat-history-AT-16-should--6a09f-er-after-multiple-refreshes-chromium/error-context.md"
      }
    ],
    "errorLocation": {
      "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/chat-history.spec.ts",
      "column": 32,
      "line": 281
    }
  }
]
      ```

---

## Test Failed: AT-15: should not duplicate messages after refresh
**Labels:** automated-defect

Test Name: AT-15: should not duplicate messages after refresh
      File: chat-history.spec.ts

      Screenshot:
      Screenshot attached in GitHub Actions artifacts (if available)

      Playwright Report:
      https://github.com/BUMETCS673/cs673olf25project-cs673olf25_team1/actions/runs/18478059837#artifacts

      Details:
      ```json
      [
  {
    "workerIndex": 15,
    "parallelIndex": 0,
    "status": "failed",
    "duration": 11540,
    "error": {
      "message": "Error: \^[[2mexpect(\^[[22m\^[[31mlocator\^[[39m\^[[2m).\^[[22mtoBeVisible\^[[2m()\^[[22m failed\n\nLocator:  getByTestId('message-list').locator('div:has-text(\"Duplicate check 1760389741474\")').last()\nExpected: visible\nReceived: <element(s) not found>\nTimeout:  5000ms\n\nCall log:\n\^[[2m  - Expect \"toBeVisible\" with timeout 5000ms\^[[22m\n\^[[2m  - waiting for getByTestId('message-list').locator('div:has-text(\"Duplicate check 1760389741474\")').last()\^[[22m\n",
      "stack": "Error: \^[[2mexpect(\^[[22m\^[[31mlocator\^[[39m\^[[2m).\^[[22mtoBeVisible\^[[2m()\^[[22m failed\n\nLocator:  getByTestId('message-list').locator('div:has-text(\"Duplicate check 1760389741474\")').last()\nExpected: visible\nReceived: <element(s) not found>\nTimeout:  5000ms\n\nCall log:\n\^[[2m  - Expect \"toBeVisible\" with timeout 5000ms\^[[22m\n\^[[2m  - waiting for getByTestId('message-list').locator('div:has-text(\"Duplicate check 1760389741474\")').last()\^[[22m\n\n    at /home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/chat-history.spec.ts:258:28",
      "location": {
        "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/chat-history.spec.ts",
        "column": 28,
        "line": 258
      },
      "snippet": "\^[[0m \^[[90m 256 |\^[[39m     \^[[36mawait\^[[39m page\^[[33m.\^[[39mreload()\^[[33m;\^[[39m\n \^[[90m 257 |\^[[39m     \^[[36mconst\^[[39m matching \^[[33m=\^[[39m selectors\^[[33m.\^[[39mlist(page)\^[[33m.\^[[39mlocator(\^[[32m`div:has-text(\"${msg}\")`\^[[39m)\^[[33m.\^[[39mlast()\^[[33m;\^[[39m\n\^[[31m\^[[1m>\^[[22m\^[[39m\^[[90m 258 |\^[[39m     \^[[36mawait\^[[39m expect(matching)\^[[33m.\^[[39mtoBeVisible({ timeout\^[[33m:\^[[39m \^[[35m5000\^[[39m })\^[[33m;\^[[39m\n \^[[90m     |\^[[39m                            \^[[31m\^[[1m^\^[[22m\^[[39m\n \^[[90m 259 |\^[[39m })\^[[33m;\^[[39m\n \^[[90m 260 |\^[[39m\n \^[[90m 261 |\^[[39m \^[[90m// AT-16: Messages stay in order after multiple refreshes\^[[39m\^[[0m"
    },
    "errors": [
      {
        "location": {
          "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/chat-history.spec.ts",
          "column": 28,
          "line": 258
        },
        "message": "Error: \^[[2mexpect(\^[[22m\^[[31mlocator\^[[39m\^[[2m).\^[[22mtoBeVisible\^[[2m()\^[[22m failed\n\nLocator:  getByTestId('message-list').locator('div:has-text(\"Duplicate check 1760389741474\")').last()\nExpected: visible\nReceived: <element(s) not found>\nTimeout:  5000ms\n\nCall log:\n\^[[2m  - Expect \"toBeVisible\" with timeout 5000ms\^[[22m\n\^[[2m  - waiting for getByTestId('message-list').locator('div:has-text(\"Duplicate check 1760389741474\")').last()\^[[22m\n\n\n  256 |     await page.reload();\n  257 |     const matching = selectors.list(page).locator(`div:has-text(\"${msg}\")`).last();\n> 258 |     await expect(matching).toBeVisible({ timeout: 5000 });\n      |                            ^\n  259 | });\n  260 |\n  261 | // AT-16: Messages stay in order after multiple refreshes\n    at /home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/chat-history.spec.ts:258:28"
      }
    ],
    "stdout": [],
    "stderr": [],
    "retry": 0,
    "startTime": "2025-10-13T21:08:56.980Z",
    "annotations": [],
    "attachments": [
      {
        "name": "screenshot",
        "contentType": "image/png",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/chat-history-AT-15-should--0f65d-cate-messages-after-refresh-chromium/test-failed-1.png"
      },
      {
        "name": "video",
        "contentType": "video/webm",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/chat-history-AT-15-should--0f65d-cate-messages-after-refresh-chromium/video.webm"
      },
      {
        "name": "error-context",
        "contentType": "text/markdown",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/chat-history-AT-15-should--0f65d-cate-messages-after-refresh-chromium/error-context.md"
      }
    ],
    "errorLocation": {
      "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/chat-history.spec.ts",
      "column": 28,
      "line": 258
    }
  }
]
      ```

---

## Test Failed: AT-14: should keep messages across multiple send/refresh cycles
**Labels:** automated-defect

Test Name: AT-14: should keep messages across multiple send/refresh cycles
      File: chat-history.spec.ts

      Screenshot:
      Screenshot attached in GitHub Actions artifacts (if available)

      Playwright Report:
      https://github.com/BUMETCS673/cs673olf25project-cs673olf25_team1/actions/runs/18478059837#artifacts

      Details:
      ```json
      [
  {
    "workerIndex": 14,
    "parallelIndex": 1,
    "status": "failed",
    "duration": 13521,
    "error": {
      "message": "Error: \^[[2mexpect(\^[[22m\^[[31mlocator\^[[39m\^[[2m).\^[[22mtoContainText\^[[2m(\^[[22m\^[[32mexpected\^[[39m\^[[2m)\^[[22m failed\n\nLocator: getByTestId('message-list')\nExpected string: \^[[32m\"First cycle 1760389736684\"\^[[39m\nReceived string: \^[[31m\"Hello! I’m your AI assistant. How can I help you today?\"\^[[39m\nTimeout: 5000ms\n\nCall log:\n\^[[2m  - Expect \"toContainText\" with timeout 5000ms\^[[22m\n\^[[2m  - waiting for getByTestId('message-list')\^[[22m\n\^[[2m    8 × locator resolved to <div data-testid=\"message-list\" class=\"MuiContainer-root MuiContainer-maxWidthMd css-1rl24un-MuiContainer-root\">…</div>\^[[22m\n\^[[2m      - unexpected value \"Hello! I’m your AI assistant. How can I help you today?\"\^[[22m\n",
      "stack": "Error: \^[[2mexpect(\^[[22m\^[[31mlocator\^[[39m\^[[2m).\^[[22mtoContainText\^[[2m(\^[[22m\^[[32mexpected\^[[39m\^[[2m)\^[[22m failed\n\nLocator: getByTestId('message-list')\nExpected string: \^[[32m\"First cycle 1760389736684\"\^[[39m\nReceived string: \^[[31m\"Hello! I’m your AI assistant. How can I help you today?\"\^[[39m\nTimeout: 5000ms\n\nCall log:\n\^[[2m  - Expect \"toContainText\" with timeout 5000ms\^[[22m\n\^[[2m  - waiting for getByTestId('message-list')\^[[22m\n\^[[2m    8 × locator resolved to <div data-testid=\"message-list\" class=\"MuiContainer-root MuiContainer-maxWidthMd css-1rl24un-MuiContainer-root\">…</div>\^[[22m\n\^[[2m      - unexpected value \"Hello! I’m your AI assistant. How can I help you today?\"\^[[22m\n\n    at /home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/chat-history.spec.ts:241:40",
      "location": {
        "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/chat-history.spec.ts",
        "column": 40,
        "line": 241
      },
      "snippet": "\^[[0m \^[[90m 239 |\^[[39m     \^[[36mawait\^[[39m page\^[[33m.\^[[39mreload()\^[[33m;\^[[39m\n \^[[90m 240 |\^[[39m\n\^[[31m\^[[1m>\^[[22m\^[[39m\^[[90m 241 |\^[[39m     \^[[36mawait\^[[39m expect(selectors\^[[33m.\^[[39mlist(page))\^[[33m.\^[[39mtoContainText(first)\^[[33m;\^[[39m\n \^[[90m     |\^[[39m                                        \^[[31m\^[[1m^\^[[22m\^[[39m\n \^[[90m 242 |\^[[39m     \^[[36mawait\^[[39m expect(selectors\^[[33m.\^[[39mlist(page))\^[[33m.\^[[39mtoContainText(second)\^[[33m;\^[[39m\n \^[[90m 243 |\^[[39m })\^[[33m;\^[[39m\n \^[[90m 244 |\^[[39m\^[[0m"
    },
    "errors": [
      {
        "location": {
          "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/chat-history.spec.ts",
          "column": 40,
          "line": 241
        },
        "message": "Error: \^[[2mexpect(\^[[22m\^[[31mlocator\^[[39m\^[[2m).\^[[22mtoContainText\^[[2m(\^[[22m\^[[32mexpected\^[[39m\^[[2m)\^[[22m failed\n\nLocator: getByTestId('message-list')\nExpected string: \^[[32m\"First cycle 1760389736684\"\^[[39m\nReceived string: \^[[31m\"Hello! I’m your AI assistant. How can I help you today?\"\^[[39m\nTimeout: 5000ms\n\nCall log:\n\^[[2m  - Expect \"toContainText\" with timeout 5000ms\^[[22m\n\^[[2m  - waiting for getByTestId('message-list')\^[[22m\n\^[[2m    8 × locator resolved to <div data-testid=\"message-list\" class=\"MuiContainer-root MuiContainer-maxWidthMd css-1rl24un-MuiContainer-root\">…</div>\^[[22m\n\^[[2m      - unexpected value \"Hello! I’m your AI assistant. How can I help you today?\"\^[[22m\n\n\n  239 |     await page.reload();\n  240 |\n> 241 |     await expect(selectors.list(page)).toContainText(first);\n      |                                        ^\n  242 |     await expect(selectors.list(page)).toContainText(second);\n  243 | });\n  244 |\n    at /home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/chat-history.spec.ts:241:40"
      }
    ],
    "stdout": [],
    "stderr": [],
    "retry": 0,
    "startTime": "2025-10-13T21:08:52.518Z",
    "annotations": [],
    "attachments": [
      {
        "name": "screenshot",
        "contentType": "image/png",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/chat-history-AT-14-should--3c8b6-ultiple-send-refresh-cycles-chromium/test-failed-1.png"
      },
      {
        "name": "video",
        "contentType": "video/webm",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/chat-history-AT-14-should--3c8b6-ultiple-send-refresh-cycles-chromium/video.webm"
      },
      {
        "name": "error-context",
        "contentType": "text/markdown",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/chat-history-AT-14-should--3c8b6-ultiple-send-refresh-cycles-chromium/error-context.md"
      }
    ],
    "errorLocation": {
      "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/chat-history.spec.ts",
      "column": 40,
      "line": 241
    }
  }
]
      ```

---

## Test Failed: AT-13: should persist a long history of messages
**Labels:** automated-defect

Test Name: AT-13: should persist a long history of messages
      File: chat-history.spec.ts

      Screenshot:
      Screenshot attached in GitHub Actions artifacts (if available)

      Playwright Report:
      https://github.com/BUMETCS673/cs673olf25project-cs673olf25_team1/actions/runs/18478059837#artifacts

      Details:
      ```json
      [
  {
    "workerIndex": 13,
    "parallelIndex": 0,
    "status": "failed",
    "duration": 15414,
    "error": {
      "message": "Error: \^[[2mexpect(\^[[22m\^[[31mlocator\^[[39m\^[[2m).\^[[22mtoContainText\^[[2m(\^[[22m\^[[32mexpected\^[[39m\^[[2m)\^[[22m failed\n\nLocator: getByTestId('message-list')\nExpected string: \^[[32m\"Message 0 - 1760389725428\"\^[[39m\nReceived string: \^[[31m\"Hello! I’m your AI assistant. How can I help you today?\"\^[[39m\nTimeout: 5000ms\n\nCall log:\n\^[[2m  - Expect \"toContainText\" with timeout 5000ms\^[[22m\n\^[[2m  - waiting for getByTestId('message-list')\^[[22m\n\^[[2m    9 × locator resolved to <div data-testid=\"message-list\" class=\"MuiContainer-root MuiContainer-maxWidthMd css-1rl24un-MuiContainer-root\">…</div>\^[[22m\n\^[[2m      - unexpected value \"Hello! I’m your AI assistant. How can I help you today?\"\^[[22m\n",
      "stack": "Error: \^[[2mexpect(\^[[22m\^[[31mlocator\^[[39m\^[[2m).\^[[22mtoContainText\^[[2m(\^[[22m\^[[32mexpected\^[[39m\^[[2m)\^[[22m failed\n\nLocator: getByTestId('message-list')\nExpected string: \^[[32m\"Message 0 - 1760389725428\"\^[[39m\nReceived string: \^[[31m\"Hello! I’m your AI assistant. How can I help you today?\"\^[[39m\nTimeout: 5000ms\n\nCall log:\n\^[[2m  - Expect \"toContainText\" with timeout 5000ms\^[[22m\n\^[[2m  - waiting for getByTestId('message-list')\^[[22m\n\^[[2m    9 × locator resolved to <div data-testid=\"message-list\" class=\"MuiContainer-root MuiContainer-maxWidthMd css-1rl24un-MuiContainer-root\">…</div>\^[[22m\n\^[[2m      - unexpected value \"Hello! I’m your AI assistant. How can I help you today?\"\^[[22m\n\n    at /home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/chat-history.spec.ts:222:44",
      "location": {
        "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/chat-history.spec.ts",
        "column": 44,
        "line": 222
      },
      "snippet": "\^[[0m \^[[90m 220 |\^[[39m     \^[[36mawait\^[[39m page\^[[33m.\^[[39mreload()\^[[33m;\^[[39m\n \^[[90m 221 |\^[[39m     \^[[36mfor\^[[39m (\^[[36mconst\^[[39m m \^[[36mof\^[[39m msgs) {\n\^[[31m\^[[1m>\^[[22m\^[[39m\^[[90m 222 |\^[[39m         \^[[36mawait\^[[39m expect(selectors\^[[33m.\^[[39mlist(page))\^[[33m.\^[[39mtoContainText(m)\^[[33m;\^[[39m\n \^[[90m     |\^[[39m                                            \^[[31m\^[[1m^\^[[22m\^[[39m\n \^[[90m 223 |\^[[39m     }\n \^[[90m 224 |\^[[39m })\^[[33m;\^[[39m\n \^[[90m 225 |\^[[39m\^[[0m"
    },
    "errors": [
      {
        "location": {
          "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/chat-history.spec.ts",
          "column": 44,
          "line": 222
        },
        "message": "Error: \^[[2mexpect(\^[[22m\^[[31mlocator\^[[39m\^[[2m).\^[[22mtoContainText\^[[2m(\^[[22m\^[[32mexpected\^[[39m\^[[2m)\^[[22m failed\n\nLocator: getByTestId('message-list')\nExpected string: \^[[32m\"Message 0 - 1760389725428\"\^[[39m\nReceived string: \^[[31m\"Hello! I’m your AI assistant. How can I help you today?\"\^[[39m\nTimeout: 5000ms\n\nCall log:\n\^[[2m  - Expect \"toContainText\" with timeout 5000ms\^[[22m\n\^[[2m  - waiting for getByTestId('message-list')\^[[22m\n\^[[2m    9 × locator resolved to <div data-testid=\"message-list\" class=\"MuiContainer-root MuiContainer-maxWidthMd css-1rl24un-MuiContainer-root\">…</div>\^[[22m\n\^[[2m      - unexpected value \"Hello! I’m your AI assistant. How can I help you today?\"\^[[22m\n\n\n  220 |     await page.reload();\n  221 |     for (const m of msgs) {\n> 222 |         await expect(selectors.list(page)).toContainText(m);\n      |                                            ^\n  223 |     }\n  224 | });\n  225 |\n    at /home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/chat-history.spec.ts:222:44"
      }
    ],
    "stdout": [],
    "stderr": [],
    "retry": 0,
    "startTime": "2025-10-13T21:08:40.764Z",
    "annotations": [],
    "attachments": [
      {
        "name": "screenshot",
        "contentType": "image/png",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/chat-history-AT-13-should-persist-a-long-history-of-messages-chromium/test-failed-1.png"
      },
      {
        "name": "video",
        "contentType": "video/webm",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/chat-history-AT-13-should-persist-a-long-history-of-messages-chromium/video.webm"
      },
      {
        "name": "error-context",
        "contentType": "text/markdown",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/chat-history-AT-13-should-persist-a-long-history-of-messages-chromium/error-context.md"
      }
    ],
    "errorLocation": {
      "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/chat-history.spec.ts",
      "column": 44,
      "line": 222
    }
  }
]
      ```

---

## Test Failed: AT-12: should persist multiple messages and keep order
**Labels:** automated-defect

Test Name: AT-12: should persist multiple messages and keep order
      File: chat-history.spec.ts

      Screenshot:
      Screenshot attached in GitHub Actions artifacts (if available)

      Playwright Report:
      https://github.com/BUMETCS673/cs673olf25project-cs673olf25_team1/actions/runs/18478059837#artifacts

      Details:
      ```json
      [
  {
    "workerIndex": 12,
    "parallelIndex": 1,
    "status": "failed",
    "duration": 12615,
    "error": {
      "message": "Error: \^[[2mexpect(\^[[22m\^[[31mlocator\^[[39m\^[[2m).\^[[22mtoContainText\^[[2m(\^[[22m\^[[32mexpected\^[[39m\^[[2m)\^[[22m failed\n\nLocator: getByTestId('message-list')\nExpected string: \^[[32m\"First 1760389724028\"\^[[39m\nReceived string: \^[[31m\"Hello! I’m your AI assistant. How can I help you today?\"\^[[39m\nTimeout: 5000ms\n\nCall log:\n\^[[2m  - Expect \"toContainText\" with timeout 5000ms\^[[22m\n\^[[2m  - waiting for getByTestId('message-list')\^[[22m\n\^[[2m    8 × locator resolved to <div data-testid=\"message-list\" class=\"MuiContainer-root MuiContainer-maxWidthMd css-1rl24un-MuiContainer-root\">…</div>\^[[22m\n\^[[2m      - unexpected value \"Hello! I’m your AI assistant. How can I help you today?\"\^[[22m\n",
      "stack": "Error: \^[[2mexpect(\^[[22m\^[[31mlocator\^[[39m\^[[2m).\^[[22mtoContainText\^[[2m(\^[[22m\^[[32mexpected\^[[39m\^[[2m)\^[[22m failed\n\nLocator: getByTestId('message-list')\nExpected string: \^[[32m\"First 1760389724028\"\^[[39m\nReceived string: \^[[31m\"Hello! I’m your AI assistant. How can I help you today?\"\^[[39m\nTimeout: 5000ms\n\nCall log:\n\^[[2m  - Expect \"toContainText\" with timeout 5000ms\^[[22m\n\^[[2m  - waiting for getByTestId('message-list')\^[[22m\n\^[[2m    8 × locator resolved to <div data-testid=\"message-list\" class=\"MuiContainer-root MuiContainer-maxWidthMd css-1rl24un-MuiContainer-root\">…</div>\^[[22m\n\^[[2m      - unexpected value \"Hello! I’m your AI assistant. How can I help you today?\"\^[[22m\n\n    at /home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/chat-history.spec.ts:197:44",
      "location": {
        "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/chat-history.spec.ts",
        "column": 44,
        "line": 197
      },
      "snippet": "\^[[0m \^[[90m 195 |\^[[39m     \^[[36mawait\^[[39m page\^[[33m.\^[[39mreload()\^[[33m;\^[[39m\n \^[[90m 196 |\^[[39m     \^[[36mfor\^[[39m (\^[[36mconst\^[[39m m \^[[36mof\^[[39m msgs) {\n\^[[31m\^[[1m>\^[[22m\^[[39m\^[[90m 197 |\^[[39m         \^[[36mawait\^[[39m expect(selectors\^[[33m.\^[[39mlist(page))\^[[33m.\^[[39mtoContainText(m)\^[[33m;\^[[39m\n \^[[90m     |\^[[39m                                            \^[[31m\^[[1m^\^[[22m\^[[39m\n \^[[90m 198 |\^[[39m     }\n \^[[90m 199 |\^[[39m\n \^[[90m 200 |\^[[39m     \^[[36mconst\^[[39m allText \^[[33m=\^[[39m \^[[36mawait\^[[39m selectors\^[[33m.\^[[39mlist(page)\^[[33m.\^[[39minnerText()\^[[33m;\^[[39m\^[[0m"
    },
    "errors": [
      {
        "location": {
          "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/chat-history.spec.ts",
          "column": 44,
          "line": 197
        },
        "message": "Error: \^[[2mexpect(\^[[22m\^[[31mlocator\^[[39m\^[[2m).\^[[22mtoContainText\^[[2m(\^[[22m\^[[32mexpected\^[[39m\^[[2m)\^[[22m failed\n\nLocator: getByTestId('message-list')\nExpected string: \^[[32m\"First 1760389724028\"\^[[39m\nReceived string: \^[[31m\"Hello! I’m your AI assistant. How can I help you today?\"\^[[39m\nTimeout: 5000ms\n\nCall log:\n\^[[2m  - Expect \"toContainText\" with timeout 5000ms\^[[22m\n\^[[2m  - waiting for getByTestId('message-list')\^[[22m\n\^[[2m    8 × locator resolved to <div data-testid=\"message-list\" class=\"MuiContainer-root MuiContainer-maxWidthMd css-1rl24un-MuiContainer-root\">…</div>\^[[22m\n\^[[2m      - unexpected value \"Hello! I’m your AI assistant. How can I help you today?\"\^[[22m\n\n\n  195 |     await page.reload();\n  196 |     for (const m of msgs) {\n> 197 |         await expect(selectors.list(page)).toContainText(m);\n      |                                            ^\n  198 |     }\n  199 |\n  200 |     const allText = await selectors.list(page).innerText();\n    at /home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/chat-history.spec.ts:197:44"
      }
    ],
    "stdout": [],
    "stderr": [],
    "retry": 0,
    "startTime": "2025-10-13T21:08:39.311Z",
    "annotations": [],
    "attachments": [
      {
        "name": "screenshot",
        "contentType": "image/png",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/chat-history-AT-12-should--32389-ple-messages-and-keep-order-chromium/test-failed-1.png"
      },
      {
        "name": "video",
        "contentType": "video/webm",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/chat-history-AT-12-should--32389-ple-messages-and-keep-order-chromium/video.webm"
      },
      {
        "name": "error-context",
        "contentType": "text/markdown",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/chat-history-AT-12-should--32389-ple-messages-and-keep-order-chromium/error-context.md"
      }
    ],
    "errorLocation": {
      "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/chat-history.spec.ts",
      "column": 44,
      "line": 197
    }
  }
]
      ```

---

## Test Failed: AT-9: multiple tabs should show same history
**Labels:** automated-defect

Test Name: AT-9: multiple tabs should show same history
      File: chat-history.spec.ts

      Screenshot:
      Screenshot attached in GitHub Actions artifacts (if available)

      Playwright Report:
      https://github.com/BUMETCS673/cs673olf25project-cs673olf25_team1/actions/runs/18478059837#artifacts

      Details:
      ```json
      [
  {
    "workerIndex": 11,
    "parallelIndex": 0,
    "status": "failed",
    "duration": 11440,
    "error": {
      "message": "Error: \^[[2mexpect(\^[[22m\^[[31mlocator\^[[39m\^[[2m).\^[[22mtoContainText\^[[2m(\^[[22m\^[[32mexpected\^[[39m\^[[2m)\^[[22m failed\n\nLocator: getByTestId('message-list')\nExpected string: \^[[32m\"Multi-tab 1760389711447\"\^[[39m\nReceived string: \^[[31m\"\"\^[[39m\nTimeout: 5000ms\n\nCall log:\n\^[[2m  - Expect \"toContainText\" with timeout 5000ms\^[[22m\n\^[[2m  - waiting for getByTestId('message-list')\^[[22m\n\^[[2m    7 × locator resolved to <div data-testid=\"message-list\" class=\"MuiContainer-root MuiContainer-maxWidthMd css-1rl24un-MuiContainer-root\">…</div>\^[[22m\n\^[[2m      - unexpected value \"\"\^[[22m\n",
      "stack": "Error: \^[[2mexpect(\^[[22m\^[[31mlocator\^[[39m\^[[2m).\^[[22mtoContainText\^[[2m(\^[[22m\^[[32mexpected\^[[39m\^[[2m)\^[[22m failed\n\nLocator: getByTestId('message-list')\nExpected string: \^[[32m\"Multi-tab 1760389711447\"\^[[39m\nReceived string: \^[[31m\"\"\^[[39m\nTimeout: 5000ms\n\nCall log:\n\^[[2m  - Expect \"toContainText\" with timeout 5000ms\^[[22m\n\^[[2m  - waiting for getByTestId('message-list')\^[[22m\n\^[[2m    7 × locator resolved to <div data-testid=\"message-list\" class=\"MuiContainer-root MuiContainer-maxWidthMd css-1rl24un-MuiContainer-root\">…</div>\^[[22m\n\^[[2m      - unexpected value \"\"\^[[22m\n\n    at /home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/chat-history.spec.ts:157:41",
      "location": {
        "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/chat-history.spec.ts",
        "column": 41,
        "line": 157
      },
      "snippet": "\^[[0m \^[[90m 155 |\^[[39m     \^[[36mconst\^[[39m page2 \^[[33m=\^[[39m \^[[36mawait\^[[39m context\^[[33m.\^[[39mnewPage()\^[[33m;\^[[39m\n \^[[90m 156 |\^[[39m     \^[[36mawait\^[[39m login(page2)\^[[33m;\^[[39m\n\^[[31m\^[[1m>\^[[22m\^[[39m\^[[90m 157 |\^[[39m     \^[[36mawait\^[[39m expect(selectors\^[[33m.\^[[39mlist(page2))\^[[33m.\^[[39mtoContainText(msg)\^[[33m;\^[[39m\n \^[[90m     |\^[[39m                                         \^[[31m\^[[1m^\^[[22m\^[[39m\n \^[[90m 158 |\^[[39m })\^[[33m;\^[[39m\n \^[[90m 159 |\^[[39m\n \^[[90m 160 |\^[[39m \^[[90m// AT-10: Empty history stays empty after refresh\^[[39m\^[[0m"
    },
    "errors": [
      {
        "location": {
          "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/chat-history.spec.ts",
          "column": 41,
          "line": 157
        },
        "message": "Error: \^[[2mexpect(\^[[22m\^[[31mlocator\^[[39m\^[[2m).\^[[22mtoContainText\^[[2m(\^[[22m\^[[32mexpected\^[[39m\^[[2m)\^[[22m failed\n\nLocator: getByTestId('message-list')\nExpected string: \^[[32m\"Multi-tab 1760389711447\"\^[[39m\nReceived string: \^[[31m\"\"\^[[39m\nTimeout: 5000ms\n\nCall log:\n\^[[2m  - Expect \"toContainText\" with timeout 5000ms\^[[22m\n\^[[2m  - waiting for getByTestId('message-list')\^[[22m\n\^[[2m    7 × locator resolved to <div data-testid=\"message-list\" class=\"MuiContainer-root MuiContainer-maxWidthMd css-1rl24un-MuiContainer-root\">…</div>\^[[22m\n\^[[2m      - unexpected value \"\"\^[[22m\n\n\n  155 |     const page2 = await context.newPage();\n  156 |     await login(page2);\n> 157 |     await expect(selectors.list(page2)).toContainText(msg);\n      |                                         ^\n  158 | });\n  159 |\n  160 | // AT-10: Empty history stays empty after refresh\n    at /home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/chat-history.spec.ts:157:41"
      }
    ],
    "stdout": [],
    "stderr": [],
    "retry": 0,
    "startTime": "2025-10-13T21:08:28.710Z",
    "annotations": [],
    "attachments": [
      {
        "name": "screenshot",
        "contentType": "image/png",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/chat-history-AT-9-multiple-tabs-should-show-same-history-chromium/test-failed-2.png"
      },
      {
        "name": "screenshot",
        "contentType": "image/png",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/chat-history-AT-9-multiple-tabs-should-show-same-history-chromium/test-failed-1.png"
      },
      {
        "name": "video",
        "contentType": "video/webm",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/chat-history-AT-9-multiple-tabs-should-show-same-history-chromium/video.webm"
      },
      {
        "name": "video",
        "contentType": "video/webm",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/chat-history-AT-9-multiple-tabs-should-show-same-history-chromium/video-1.webm"
      },
      {
        "name": "error-context",
        "contentType": "text/markdown",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/chat-history-AT-9-multiple-tabs-should-show-same-history-chromium/error-context.md"
      }
    ],
    "errorLocation": {
      "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/chat-history.spec.ts",
      "column": 41,
      "line": 157
    }
  }
]
      ```

---

## Test Failed: AT-03: Auto-scroll resumes after viewer returns to bottom
**Labels:** automated-defect

Test Name: AT-03: Auto-scroll resumes after viewer returns to bottom
      File: autoscroll.spec.ts

      Screenshot:
      Screenshot attached in GitHub Actions artifacts (if available)

      Playwright Report:
      https://github.com/BUMETCS673/cs673olf25project-cs673olf25_team1/actions/runs/18478059837#artifacts

      Details:
      ```json
      [
  {
    "workerIndex": 10,
    "parallelIndex": 0,
    "status": "failed",
    "duration": 17791,
    "error": {
      "message": "Error: \^[[2mexpect(\^[[22m\^[[31mlocator\^[[39m\^[[2m).\^[[22mtoContainText\^[[2m(\^[[22m\^[[32mexpected\^[[39m\^[[2m)\^[[22m failed\n\nLocator: locator('[data-testid=\"message-list\"]')\nExpected string: \^[[32m\"seed 0\"\^[[39m\nReceived string: \^[[31m\"testuser: seed 1testuser: seed 2testuser: seed 3testuser: seed 4testuser: seed 5testuser: seed 6testuser: seed 7testuser: seed 8testuser: seed 9testuser: seed 10testuser: seed 11testuser: seed 12testuser: seed 13testuser: seed 14testuser: seed 15testuser: seed 16testuser: seed 17👍❤️😂😮🎉testuser: seed 18testuser: seed 19\"\^[[39m\nTimeout: 10000ms\n\nCall log:\n\^[[2m  - Expect \"toContainText\" with timeout 10000ms\^[[22m\n\^[[2m  - waiting for locator('[data-testid=\"message-list\"]')\^[[22m\n\^[[2m    3 × locator resolved to <div data-testid=\"message-list\" class=\"MuiContainer-root MuiContainer-maxWidthMd css-1rl24un-MuiContainer-root\">…</div>\^[[22m\n\^[[2m      - unexpected value \"testuser: seed 1testuser: seed 2testuser: seed 3testuser: seed 4testuser: seed 5testuser: seed 6testuser: seed 7testuser: seed 8testuser: seed 9testuser: seed 10testuser: seed 11testuser: seed 12testuser: seed 13testuser: seed 14testuser: seed 15testuser: seed 16👍❤️😂😮🎉testuser: seed 17testuser: seed 18testuser: seed 19User is typing...\"\^[[22m\n\^[[2m    5 × locator resolved to <div data-testid=\"message-list\" class=\"MuiContainer-root MuiContainer-maxWidthMd css-1rl24un-MuiContainer-root\">…</div>\^[[22m\n\^[[2m      - unexpected value \"testuser: seed 1testuser: seed 2testuser: seed 3testuser: seed 4testuser: seed 5testuser: seed 6testuser: seed 7testuser: seed 8testuser: seed 9testuser: seed 10testuser: seed 11testuser: seed 12testuser: seed 13testuser: seed 14testuser: seed 15testuser: seed 16testuser: seed 17testuser: seed 18👍❤️😂😮🎉testuser: seed 19User is typing...\"\^[[22m\n\^[[2m    - locator resolved to <div data-testid=\"message-list\" class=\"MuiContainer-root MuiContainer-maxWidthMd css-1rl24un-MuiContainer-root\">…</div>\^[[22m\n\^[[2m    - unexpected value \"testuser: seed 1testuser: seed 2testuser: seed 3testuser: seed 4testuser: seed 5testuser: seed 6testuser: seed 7testuser: seed 8testuser: seed 9testuser: seed 10testuser: seed 11testuser: seed 12testuser: seed 13testuser: seed 14testuser: seed 15testuser: seed 16testuser: seed 17testuser: seed 18👍❤️😂😮🎉testuser: seed 19\"\^[[22m\n\^[[2m    5 × locator resolved to <div data-testid=\"message-list\" class=\"MuiContainer-root MuiContainer-maxWidthMd css-1rl24un-MuiContainer-root\">…</div>\^[[22m\n\^[[2m      - unexpected value \"testuser: seed 1testuser: seed 2testuser: seed 3testuser: seed 4testuser: seed 5testuser: seed 6testuser: seed 7testuser: seed 8testuser: seed 9testuser: seed 10testuser: seed 11testuser: seed 12testuser: seed 13testuser: seed 14testuser: seed 15testuser: seed 16testuser: seed 17👍❤️😂😮🎉testuser: seed 18testuser: seed 19\"\^[[22m\n",
      "stack": "Error: \^[[2mexpect(\^[[22m\^[[31mlocator\^[[39m\^[[2m).\^[[22mtoContainText\^[[2m(\^[[22m\^[[32mexpected\^[[39m\^[[2m)\^[[22m failed\n\nLocator: locator('[data-testid=\"message-list\"]')\nExpected string: \^[[32m\"seed 0\"\^[[39m\nReceived string: \^[[31m\"testuser: seed 1testuser: seed 2testuser: seed 3testuser: seed 4testuser: seed 5testuser: seed 6testuser: seed 7testuser: seed 8testuser: seed 9testuser: seed 10testuser: seed 11testuser: seed 12testuser: seed 13testuser: seed 14testuser: seed 15testuser: seed 16testuser: seed 17👍❤️😂😮🎉testuser: seed 18testuser: seed 19\"\^[[39m\nTimeout: 10000ms\n\nCall log:\n\^[[2m  - Expect \"toContainText\" with timeout 10000ms\^[[22m\n\^[[2m  - waiting for locator('[data-testid=\"message-list\"]')\^[[22m\n\^[[2m    3 × locator resolved to <div data-testid=\"message-list\" class=\"MuiContainer-root MuiContainer-maxWidthMd css-1rl24un-MuiContainer-root\">…</div>\^[[22m\n\^[[2m      - unexpected value \"testuser: seed 1testuser: seed 2testuser: seed 3testuser: seed 4testuser: seed 5testuser: seed 6testuser: seed 7testuser: seed 8testuser: seed 9testuser: seed 10testuser: seed 11testuser: seed 12testuser: seed 13testuser: seed 14testuser: seed 15testuser: seed 16👍❤️😂😮🎉testuser: seed 17testuser: seed 18testuser: seed 19User is typing...\"\^[[22m\n\^[[2m    5 × locator resolved to <div data-testid=\"message-list\" class=\"MuiContainer-root MuiContainer-maxWidthMd css-1rl24un-MuiContainer-root\">…</div>\^[[22m\n\^[[2m      - unexpected value \"testuser: seed 1testuser: seed 2testuser: seed 3testuser: seed 4testuser: seed 5testuser: seed 6testuser: seed 7testuser: seed 8testuser: seed 9testuser: seed 10testuser: seed 11testuser: seed 12testuser: seed 13testuser: seed 14testuser: seed 15testuser: seed 16testuser: seed 17testuser: seed 18👍❤️😂😮🎉testuser: seed 19User is typing...\"\^[[22m\n\^[[2m    - locator resolved to <div data-testid=\"message-list\" class=\"MuiContainer-root MuiContainer-maxWidthMd css-1rl24un-MuiContainer-root\">…</div>\^[[22m\n\^[[2m    - unexpected value \"testuser: seed 1testuser: seed 2testuser: seed 3testuser: seed 4testuser: seed 5testuser: seed 6testuser: seed 7testuser: seed 8testuser: seed 9testuser: seed 10testuser: seed 11testuser: seed 12testuser: seed 13testuser: seed 14testuser: seed 15testuser: seed 16testuser: seed 17testuser: seed 18👍❤️😂😮🎉testuser: seed 19\"\^[[22m\n\^[[2m    5 × locator resolved to <div data-testid=\"message-list\" class=\"MuiContainer-root MuiContainer-maxWidthMd css-1rl24un-MuiContainer-root\">…</div>\^[[22m\n\^[[2m      - unexpected value \"testuser: seed 1testuser: seed 2testuser: seed 3testuser: seed 4testuser: seed 5testuser: seed 6testuser: seed 7testuser: seed 8testuser: seed 9testuser: seed 10testuser: seed 11testuser: seed 12testuser: seed 13testuser: seed 14testuser: seed 15testuser: seed 16testuser: seed 17👍❤️😂😮🎉testuser: seed 18testuser: seed 19\"\^[[22m\n\n    at /home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/autoscroll.spec.ts:153:23",
      "location": {
        "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/autoscroll.spec.ts",
        "column": 23,
        "line": 153
      },
      "snippet": "\^[[0m \^[[90m 151 |\^[[39m   }\n \^[[90m 152 |\^[[39m\n\^[[31m\^[[1m>\^[[22m\^[[39m\^[[90m 153 |\^[[39m   \^[[36mawait\^[[39m expect(listB)\^[[33m.\^[[39mtoContainText(\^[[32m'seed 0'\^[[39m\^[[33m,\^[[39m { timeout\^[[33m:\^[[39m \^[[35m10\^[[39m_000 })\^[[33m;\^[[39m\n \^[[90m     |\^[[39m                       \^[[31m\^[[1m^\^[[22m\^[[39m\n \^[[90m 154 |\^[[39m\n \^[[90m 155 |\^[[39m   \^[[90m// Simulate user scrolling up\^[[39m\n \^[[90m 156 |\^[[39m   \^[[36mawait\^[[39m listB\^[[33m.\^[[39mevaluate(el \^[[33m=>\^[[39m el\^[[33m.\^[[39mscrollTop \^[[33m=\^[[39m \^[[35m0\^[[39m)\^[[33m;\^[[39m\^[[0m"
    },
    "errors": [
      {
        "location": {
          "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/autoscroll.spec.ts",
          "column": 23,
          "line": 153
        },
        "message": "Error: \^[[2mexpect(\^[[22m\^[[31mlocator\^[[39m\^[[2m).\^[[22mtoContainText\^[[2m(\^[[22m\^[[32mexpected\^[[39m\^[[2m)\^[[22m failed\n\nLocator: locator('[data-testid=\"message-list\"]')\nExpected string: \^[[32m\"seed 0\"\^[[39m\nReceived string: \^[[31m\"testuser: seed 1testuser: seed 2testuser: seed 3testuser: seed 4testuser: seed 5testuser: seed 6testuser: seed 7testuser: seed 8testuser: seed 9testuser: seed 10testuser: seed 11testuser: seed 12testuser: seed 13testuser: seed 14testuser: seed 15testuser: seed 16testuser: seed 17👍❤️😂😮🎉testuser: seed 18testuser: seed 19\"\^[[39m\nTimeout: 10000ms\n\nCall log:\n\^[[2m  - Expect \"toContainText\" with timeout 10000ms\^[[22m\n\^[[2m  - waiting for locator('[data-testid=\"message-list\"]')\^[[22m\n\^[[2m    3 × locator resolved to <div data-testid=\"message-list\" class=\"MuiContainer-root MuiContainer-maxWidthMd css-1rl24un-MuiContainer-root\">…</div>\^[[22m\n\^[[2m      - unexpected value \"testuser: seed 1testuser: seed 2testuser: seed 3testuser: seed 4testuser: seed 5testuser: seed 6testuser: seed 7testuser: seed 8testuser: seed 9testuser: seed 10testuser: seed 11testuser: seed 12testuser: seed 13testuser: seed 14testuser: seed 15testuser: seed 16👍❤️😂😮🎉testuser: seed 17testuser: seed 18testuser: seed 19User is typing...\"\^[[22m\n\^[[2m    5 × locator resolved to <div data-testid=\"message-list\" class=\"MuiContainer-root MuiContainer-maxWidthMd css-1rl24un-MuiContainer-root\">…</div>\^[[22m\n\^[[2m      - unexpected value \"testuser: seed 1testuser: seed 2testuser: seed 3testuser: seed 4testuser: seed 5testuser: seed 6testuser: seed 7testuser: seed 8testuser: seed 9testuser: seed 10testuser: seed 11testuser: seed 12testuser: seed 13testuser: seed 14testuser: seed 15testuser: seed 16testuser: seed 17testuser: seed 18👍❤️😂😮🎉testuser: seed 19User is typing...\"\^[[22m\n\^[[2m    - locator resolved to <div data-testid=\"message-list\" class=\"MuiContainer-root MuiContainer-maxWidthMd css-1rl24un-MuiContainer-root\">…</div>\^[[22m\n\^[[2m    - unexpected value \"testuser: seed 1testuser: seed 2testuser: seed 3testuser: seed 4testuser: seed 5testuser: seed 6testuser: seed 7testuser: seed 8testuser: seed 9testuser: seed 10testuser: seed 11testuser: seed 12testuser: seed 13testuser: seed 14testuser: seed 15testuser: seed 16testuser: seed 17testuser: seed 18👍❤️😂😮🎉testuser: seed 19\"\^[[22m\n\^[[2m    5 × locator resolved to <div data-testid=\"message-list\" class=\"MuiContainer-root MuiContainer-maxWidthMd css-1rl24un-MuiContainer-root\">…</div>\^[[22m\n\^[[2m      - unexpected value \"testuser: seed 1testuser: seed 2testuser: seed 3testuser: seed 4testuser: seed 5testuser: seed 6testuser: seed 7testuser: seed 8testuser: seed 9testuser: seed 10testuser: seed 11testuser: seed 12testuser: seed 13testuser: seed 14testuser: seed 15testuser: seed 16testuser: seed 17👍❤️😂😮🎉testuser: seed 18testuser: seed 19\"\^[[22m\n\n\n  151 |   }\n  152 |\n> 153 |   await expect(listB).toContainText('seed 0', { timeout: 10_000 });\n      |                       ^\n  154 |\n  155 |   // Simulate user scrolling up\n  156 |   await listB.evaluate(el => el.scrollTop = 0);\n    at /home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/autoscroll.spec.ts:153:23"
      }
    ],
    "stdout": [],
    "stderr": [],
    "retry": 0,
    "startTime": "2025-10-13T21:06:49.107Z",
    "annotations": [],
    "attachments": [
      {
        "name": "screenshot",
        "contentType": "image/png",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/autoscroll-AT-03-Auto-scro-126c7-er-viewer-returns-to-bottom-chromium/test-failed-1.png"
      },
      {
        "name": "screenshot",
        "contentType": "image/png",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/autoscroll-AT-03-Auto-scro-126c7-er-viewer-returns-to-bottom-chromium/test-failed-2.png"
      },
      {
        "name": "error-context",
        "contentType": "text/markdown",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/autoscroll-AT-03-Auto-scro-126c7-er-viewer-returns-to-bottom-chromium/error-context.md"
      }
    ],
    "errorLocation": {
      "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/autoscroll.spec.ts",
      "column": 23,
      "line": 153
    }
  }
]
      ```

---

## Test Failed: AT-02: No jump when viewer scrolled up
**Labels:** automated-defect

Test Name: AT-02: No jump when viewer scrolled up
      File: autoscroll.spec.ts

      Screenshot:
      Screenshot attached in GitHub Actions artifacts (if available)

      Playwright Report:
      https://github.com/BUMETCS673/cs673olf25project-cs673olf25_team1/actions/runs/18478059837#artifacts

      Details:
      ```json
      [
  {
    "workerIndex": 9,
    "parallelIndex": 0,
    "status": "failed",
    "duration": 8488,
    "error": {
      "message": "Error: \^[[2mexpect(\^[[22m\^[[31mreceived\^[[39m\^[[2m).\^[[22mtoBeFalsy\^[[2m()\^[[22m\n\nReceived: \^[[31mtrue\^[[39m",
      "stack": "Error: \^[[2mexpect(\^[[22m\^[[31mreceived\^[[39m\^[[2m).\^[[22mtoBeFalsy\^[[2m()\^[[22m\n\nReceived: \^[[31mtrue\^[[39m\n    at /home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/autoscroll.spec.ts:110:29",
      "location": {
        "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/autoscroll.spec.ts",
        "column": 29,
        "line": 110
      },
      "snippet": "\^[[0m \^[[90m 108 |\^[[39m   }))\^[[33m;\^[[39m\n \^[[90m 109 |\^[[39m   console\^[[33m.\^[[39mlog(\^[[32m'Before sending:'\^[[39m\^[[33m,\^[[39m before)\^[[33m;\^[[39m\n\^[[31m\^[[1m>\^[[22m\^[[39m\^[[90m 110 |\^[[39m   expect(before\^[[33m.\^[[39misAtBottom)\^[[33m.\^[[39mtoBeFalsy()\^[[33m;\^[[39m \^[[90m// must NOT be at bottom\^[[39m\n \^[[90m     |\^[[39m                             \^[[31m\^[[1m^\^[[22m\^[[39m\n \^[[90m 111 |\^[[39m\n \^[[90m 112 |\^[[39m   \^[[90m// Now send another message from A\^[[39m\n \^[[90m 113 |\^[[39m   \^[[36mconst\^[[39m newMsg \^[[33m=\^[[39m uniq(\^[[32m'no-jump'\^[[39m)\^[[33m;\^[[39m\^[[0m"
    },
    "errors": [
      {
        "location": {
          "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/autoscroll.spec.ts",
          "column": 29,
          "line": 110
        },
        "message": "Error: \^[[2mexpect(\^[[22m\^[[31mreceived\^[[39m\^[[2m).\^[[22mtoBeFalsy\^[[2m()\^[[22m\n\nReceived: \^[[31mtrue\^[[39m\n\n  108 |   }));\n  109 |   console.log('Before sending:', before);\n> 110 |   expect(before.isAtBottom).toBeFalsy(); // must NOT be at bottom\n      |                             ^\n  111 |\n  112 |   // Now send another message from A\n  113 |   const newMsg = uniq('no-jump');\n    at /home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/autoscroll.spec.ts:110:29"
      }
    ],
    "stdout": [
      {
        "text": "Before sending: {\n  scrollTop: \^[[33m0\^[[39m,\n  scrollHeight: \^[[33m648\^[[39m,\n  clientHeight: \^[[33m648\^[[39m,\n  isAtBottom: \^[[33mtrue\^[[39m\n}\n"
      }
    ],
    "stderr": [],
    "retry": 0,
    "startTime": "2025-10-13T21:06:39.923Z",
    "annotations": [],
    "attachments": [
      {
        "name": "screenshot",
        "contentType": "image/png",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/autoscroll-AT-02-No-jump-when-viewer-scrolled-up-chromium/test-failed-2.png"
      },
      {
        "name": "screenshot",
        "contentType": "image/png",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/autoscroll-AT-02-No-jump-when-viewer-scrolled-up-chromium/test-failed-1.png"
      },
      {
        "name": "error-context",
        "contentType": "text/markdown",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/autoscroll-AT-02-No-jump-when-viewer-scrolled-up-chromium/error-context.md"
      }
    ],
    "errorLocation": {
      "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/autoscroll.spec.ts",
      "column": 29,
      "line": 110
    }
  }
]
      ```

---

## Test Failed: AT-5: Login with valid credentials redirects to community
**Labels:** automated-defect

Test Name: AT-5: Login with valid credentials redirects to community
      File: auth-login.spec.ts

      Screenshot:
      Screenshot attached in GitHub Actions artifacts (if available)

      Playwright Report:
      https://github.com/BUMETCS673/cs673olf25project-cs673olf25_team1/actions/runs/18478059837#artifacts

      Details:
      ```json
      [
  {
    "workerIndex": 7,
    "parallelIndex": 0,
    "status": "failed",
    "duration": 8059,
    "error": {
      "message": "Error: \^[[2mexpect(\^[[22m\^[[31mpage\^[[39m\^[[2m).\^[[22mtoHaveURL\^[[2m(\^[[22m\^[[32mexpected\^[[39m\^[[2m)\^[[22m failed\n\nExpected pattern: \^[[32m/\\/community|\\/dashboard/i\^[[39m\nReceived string:  \^[[31m\"http://localhost:8000/login\"\^[[39m\nTimeout: 5000ms\n\nCall log:\n\^[[2m  - Expect \"toHaveURL\" with timeout 5000ms\^[[22m\n\^[[2m    9 × unexpected value \"http://localhost:8000/login\"\^[[22m\n",
      "stack": "Error: \^[[2mexpect(\^[[22m\^[[31mpage\^[[39m\^[[2m).\^[[22mtoHaveURL\^[[2m(\^[[22m\^[[32mexpected\^[[39m\^[[2m)\^[[22m failed\n\nExpected pattern: \^[[32m/\\/community|\\/dashboard/i\^[[39m\nReceived string:  \^[[31m\"http://localhost:8000/login\"\^[[39m\nTimeout: 5000ms\n\nCall log:\n\^[[2m  - Expect \"toHaveURL\" with timeout 5000ms\^[[22m\n\^[[2m    9 × unexpected value \"http://localhost:8000/login\"\^[[22m\n\n    at /home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/auth-login.spec.ts:97:22",
      "location": {
        "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/auth-login.spec.ts",
        "column": 22,
        "line": 97
      },
      "snippet": "\^[[0m \^[[90m  95 |\^[[39m   \^[[36mawait\^[[39m page\^[[33m.\^[[39mgetByTestId(\^[[32m'login-button'\^[[39m)\^[[33m.\^[[39mclick()\^[[33m;\^[[39m\n \^[[90m  96 |\^[[39m\n\^[[31m\^[[1m>\^[[22m\^[[39m\^[[90m  97 |\^[[39m   \^[[36mawait\^[[39m expect(page)\^[[33m.\^[[39mtoHaveURL(\^[[35m/\\/community|\\/dashboard/i\^[[39m)\^[[33m;\^[[39m\n \^[[90m     |\^[[39m                      \^[[31m\^[[1m^\^[[22m\^[[39m\n \^[[90m  98 |\^[[39m   \^[[36mawait\^[[39m expect(page\^[[33m.\^[[39mlocator(\^[[32m'text=Talk to the Community'\^[[39m))\^[[33m.\^[[39mtoBeVisible({ timeout\^[[33m:\^[[39m \^[[35m10000\^[[39m })\^[[33m;\^[[39m\n \^[[90m  99 |\^[[39m })\^[[33m;\^[[39m\n \^[[90m 100 |\^[[39m\^[[0m"
    },
    "errors": [
      {
        "location": {
          "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/auth-login.spec.ts",
          "column": 22,
          "line": 97
        },
        "message": "Error: \^[[2mexpect(\^[[22m\^[[31mpage\^[[39m\^[[2m).\^[[22mtoHaveURL\^[[2m(\^[[22m\^[[32mexpected\^[[39m\^[[2m)\^[[22m failed\n\nExpected pattern: \^[[32m/\\/community|\\/dashboard/i\^[[39m\nReceived string:  \^[[31m\"http://localhost:8000/login\"\^[[39m\nTimeout: 5000ms\n\nCall log:\n\^[[2m  - Expect \"toHaveURL\" with timeout 5000ms\^[[22m\n\^[[2m    9 × unexpected value \"http://localhost:8000/login\"\^[[22m\n\n\n   95 |   await page.getByTestId('login-button').click();\n   96 |\n>  97 |   await expect(page).toHaveURL(/\\/community|\\/dashboard/i);\n      |                      ^\n   98 |   await expect(page.locator('text=Talk to the Community')).toBeVisible({ timeout: 10000 });\n   99 | });\n  100 |\n    at /home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/auth-login.spec.ts:97:22"
      }
    ],
    "stdout": [],
    "stderr": [],
    "retry": 0,
    "startTime": "2025-10-13T21:06:21.810Z",
    "annotations": [],
    "attachments": [
      {
        "name": "screenshot",
        "contentType": "image/png",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/auth-login-AT-5-Login-with-3bc0d-ials-redirects-to-community-chromium/test-failed-1.png"
      },
      {
        "name": "video",
        "contentType": "video/webm",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/auth-login-AT-5-Login-with-3bc0d-ials-redirects-to-community-chromium/video.webm"
      },
      {
        "name": "error-context",
        "contentType": "text/markdown",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/auth-login-AT-5-Login-with-3bc0d-ials-redirects-to-community-chromium/error-context.md"
      }
    ],
    "errorLocation": {
      "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/auth-login.spec.ts",
      "column": 22,
      "line": 97
    }
  }
]
      ```

---

## Test Failed: AT-13: LLM can return formatted/code responses
**Labels:** automated-defect

Test Name: AT-13: LLM can return formatted/code responses
      File: ai-chat.spec.ts

      Screenshot:
      Screenshot attached in GitHub Actions artifacts (if available)

      Playwright Report:
      https://github.com/BUMETCS673/cs673olf25project-cs673olf25_team1/actions/runs/18478059837#artifacts

      Details:
      ```json
      [
  {
    "workerIndex": 1,
    "parallelIndex": 1,
    "status": "failed",
    "duration": 9921,
    "error": {
      "message": "Error: \^[[2mexpect(\^[[22m\^[[31mlocator\^[[39m\^[[2m).\^[[22mtoContainText\^[[2m(\^[[22m\^[[32mexpected\^[[39m\^[[2m)\^[[22m failed\n\nLocator: getByTestId('message-list')\nExpected string: \^[[32m\"{\"\^[[39m\nReceived string: \^[[31m\"Hello! I’m your AI assistant. How can I help you today?Show me a JavaScript function that reverses a stringSorry, there was an error contacting the AI service.\"\^[[39m\nTimeout: 5000ms\n\nCall log:\n\^[[2m  - Expect \"toContainText\" with timeout 5000ms\^[[22m\n\^[[2m  - waiting for getByTestId('message-list')\^[[22m\n\^[[2m    2 × locator resolved to <div data-testid=\"message-list\" class=\"MuiContainer-root MuiContainer-maxWidthMd css-1rl24un-MuiContainer-root\">…</div>\^[[22m\n\^[[2m      - unexpected value \"Hello! I’m your AI assistant. How can I help you today?Show me a JavaScript function that reverses a string\"\^[[22m\n\^[[2m    7 × locator resolved to <div data-testid=\"message-list\" class=\"MuiContainer-root MuiContainer-maxWidthMd css-1rl24un-MuiContainer-root\">…</div>\^[[22m\n\^[[2m      - unexpected value \"Hello! I’m your AI assistant. How can I help you today?Show me a JavaScript function that reverses a stringSorry, there was an error contacting the AI service.\"\^[[22m\n",
      "stack": "Error: \^[[2mexpect(\^[[22m\^[[31mlocator\^[[39m\^[[2m).\^[[22mtoContainText\^[[2m(\^[[22m\^[[32mexpected\^[[39m\^[[2m)\^[[22m failed\n\nLocator: getByTestId('message-list')\nExpected string: \^[[32m\"{\"\^[[39m\nReceived string: \^[[31m\"Hello! I’m your AI assistant. How can I help you today?Show me a JavaScript function that reverses a stringSorry, there was an error contacting the AI service.\"\^[[39m\nTimeout: 5000ms\n\nCall log:\n\^[[2m  - Expect \"toContainText\" with timeout 5000ms\^[[22m\n\^[[2m  - waiting for getByTestId('message-list')\^[[22m\n\^[[2m    2 × locator resolved to <div data-testid=\"message-list\" class=\"MuiContainer-root MuiContainer-maxWidthMd css-1rl24un-MuiContainer-root\">…</div>\^[[22m\n\^[[2m      - unexpected value \"Hello! I’m your AI assistant. How can I help you today?Show me a JavaScript function that reverses a string\"\^[[22m\n\^[[2m    7 × locator resolved to <div data-testid=\"message-list\" class=\"MuiContainer-root MuiContainer-maxWidthMd css-1rl24un-MuiContainer-root\">…</div>\^[[22m\n\^[[2m      - unexpected value \"Hello! I’m your AI assistant. How can I help you today?Show me a JavaScript function that reverses a stringSorry, there was an error contacting the AI service.\"\^[[22m\n\n    at /home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/ai-chat.spec.ts:173:40",
      "location": {
        "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/ai-chat.spec.ts",
        "column": 40,
        "line": 173
      },
      "snippet": "\^[[0m \^[[90m 171 |\^[[39m     \^[[36mawait\^[[39m expect(selectors\^[[33m.\^[[39mlist(page))\^[[33m.\^[[39mtoContainText(\^[[32m'function'\^[[39m)\^[[33m;\^[[39m\n \^[[90m 172 |\^[[39m     \^[[36mawait\^[[39m expect(selectors\^[[33m.\^[[39mlist(page))\^[[33m.\^[[39mtoContainText(\^[[32m'reverse'\^[[39m)\^[[33m;\^[[39m\n\^[[31m\^[[1m>\^[[22m\^[[39m\^[[90m 173 |\^[[39m     \^[[36mawait\^[[39m expect(selectors\^[[33m.\^[[39mlist(page))\^[[33m.\^[[39mtoContainText(\^[[32m'{'\^[[39m\^[[33m,\^[[39m { timeout\^[[33m:\^[[39m \^[[35m5000\^[[39m })\^[[33m;\^[[39m \n \^[[90m     |\^[[39m                                        \^[[31m\^[[1m^\^[[22m\^[[39m\n \^[[90m 174 |\^[[39m })\^[[33m;\^[[39m\n \^[[90m 175 |\^[[39m\n \^[[90m 176 |\^[[39m \^[[90m// AT-14: Shows fallback when backend/LLM fails (simulated by aborting socket route)\^[[39m\^[[0m"
    },
    "errors": [
      {
        "location": {
          "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/ai-chat.spec.ts",
          "column": 40,
          "line": 173
        },
        "message": "Error: \^[[2mexpect(\^[[22m\^[[31mlocator\^[[39m\^[[2m).\^[[22mtoContainText\^[[2m(\^[[22m\^[[32mexpected\^[[39m\^[[2m)\^[[22m failed\n\nLocator: getByTestId('message-list')\nExpected string: \^[[32m\"{\"\^[[39m\nReceived string: \^[[31m\"Hello! I’m your AI assistant. How can I help you today?Show me a JavaScript function that reverses a stringSorry, there was an error contacting the AI service.\"\^[[39m\nTimeout: 5000ms\n\nCall log:\n\^[[2m  - Expect \"toContainText\" with timeout 5000ms\^[[22m\n\^[[2m  - waiting for getByTestId('message-list')\^[[22m\n\^[[2m    2 × locator resolved to <div data-testid=\"message-list\" class=\"MuiContainer-root MuiContainer-maxWidthMd css-1rl24un-MuiContainer-root\">…</div>\^[[22m\n\^[[2m      - unexpected value \"Hello! I’m your AI assistant. How can I help you today?Show me a JavaScript function that reverses a string\"\^[[22m\n\^[[2m    7 × locator resolved to <div data-testid=\"message-list\" class=\"MuiContainer-root MuiContainer-maxWidthMd css-1rl24un-MuiContainer-root\">…</div>\^[[22m\n\^[[2m      - unexpected value \"Hello! I’m your AI assistant. How can I help you today?Show me a JavaScript function that reverses a stringSorry, there was an error contacting the AI service.\"\^[[22m\n\n\n  171 |     await expect(selectors.list(page)).toContainText('function');\n  172 |     await expect(selectors.list(page)).toContainText('reverse');\n> 173 |     await expect(selectors.list(page)).toContainText('{', { timeout: 5000 }); \n      |                                        ^\n  174 | });\n  175 |\n  176 | // AT-14: Shows fallback when backend/LLM fails (simulated by aborting socket route)\n    at /home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/ai-chat.spec.ts:173:40"
      }
    ],
    "stdout": [],
    "stderr": [],
    "retry": 0,
    "startTime": "2025-10-13T21:04:00.920Z",
    "annotations": [],
    "attachments": [
      {
        "name": "screenshot",
        "contentType": "image/png",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/ai-chat-AT-13-LLM-can-return-formatted-code-responses-chromium/test-failed-1.png"
      },
      {
        "name": "video",
        "contentType": "video/webm",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/ai-chat-AT-13-LLM-can-return-formatted-code-responses-chromium/video.webm"
      },
      {
        "name": "error-context",
        "contentType": "text/markdown",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/ai-chat-AT-13-LLM-can-return-formatted-code-responses-chromium/error-context.md"
      }
    ],
    "errorLocation": {
      "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/ai-chat.spec.ts",
      "column": 40,
      "line": 173
    }
  }
]
      ```

---

## Test Failed: AT-12: Sending a new message before previous LLM response finishes
**Labels:** automated-defect

Test Name: AT-12: Sending a new message before previous LLM response finishes
      File: ai-chat.spec.ts

      Screenshot:
      Screenshot attached in GitHub Actions artifacts (if available)

      Playwright Report:
      https://github.com/BUMETCS673/cs673olf25project-cs673olf25_team1/actions/runs/18478059837#artifacts

      Details:
      ```json
      [
  {
    "workerIndex": 2,
    "parallelIndex": 0,
    "status": "failed",
    "duration": 12660,
    "error": {
      "message": "Error: \^[[2mexpect(\^[[22m\^[[31mlocator\^[[39m\^[[2m).\^[[22mtoContainText\^[[2m(\^[[22m\^[[32mexpected\^[[39m\^[[2m)\^[[22m failed\n\nLocator: getByTestId('message-list')\nExpected pattern: \^[[32m/Mercury|Venus/i\^[[39m\nReceived string:  \^[[31m\"Hello! I’m your AI assistant. How can I help you today?Start a long explanation about the solar system...Sorry, there was an error contacting the AI service.What’s the hottest planet?Sorry, there was an error contacting the AI service.\"\^[[39m\nTimeout: 7000ms\n\nCall log:\n\^[[2m  - Expect \"toContainText\" with timeout 7000ms\^[[22m\n\^[[2m  - waiting for getByTestId('message-list')\^[[22m\n\^[[2m    2 × locator resolved to <div data-testid=\"message-list\" class=\"MuiContainer-root MuiContainer-maxWidthMd css-1rl24un-MuiContainer-root\">…</div>\^[[22m\n\^[[2m      - unexpected value \"Hello! I’m your AI assistant. How can I help you today?Start a long explanation about the solar system...Sorry, there was an error contacting the AI service.What’s the hottest planet?\"\^[[22m\n\^[[2m    9 × locator resolved to <div data-testid=\"message-list\" class=\"MuiContainer-root MuiContainer-maxWidthMd css-1rl24un-MuiContainer-root\">…</div>\^[[22m\n\^[[2m      - unexpected value \"Hello! I’m your AI assistant. How can I help you today?Start a long explanation about the solar system...Sorry, there was an error contacting the AI service.What’s the hottest planet?Sorry, there was an error contacting the AI service.\"\^[[22m\n",
      "stack": "Error: \^[[2mexpect(\^[[22m\^[[31mlocator\^[[39m\^[[2m).\^[[22mtoContainText\^[[2m(\^[[22m\^[[32mexpected\^[[39m\^[[2m)\^[[22m failed\n\nLocator: getByTestId('message-list')\nExpected pattern: \^[[32m/Mercury|Venus/i\^[[39m\nReceived string:  \^[[31m\"Hello! I’m your AI assistant. How can I help you today?Start a long explanation about the solar system...Sorry, there was an error contacting the AI service.What’s the hottest planet?Sorry, there was an error contacting the AI service.\"\^[[39m\nTimeout: 7000ms\n\nCall log:\n\^[[2m  - Expect \"toContainText\" with timeout 7000ms\^[[22m\n\^[[2m  - waiting for getByTestId('message-list')\^[[22m\n\^[[2m    2 × locator resolved to <div data-testid=\"message-list\" class=\"MuiContainer-root MuiContainer-maxWidthMd css-1rl24un-MuiContainer-root\">…</div>\^[[22m\n\^[[2m      - unexpected value \"Hello! I’m your AI assistant. How can I help you today?Start a long explanation about the solar system...Sorry, there was an error contacting the AI service.What’s the hottest planet?\"\^[[22m\n\^[[2m    9 × locator resolved to <div data-testid=\"message-list\" class=\"MuiContainer-root MuiContainer-maxWidthMd css-1rl24un-MuiContainer-root\">…</div>\^[[22m\n\^[[2m      - unexpected value \"Hello! I’m your AI assistant. How can I help you today?Start a long explanation about the solar system...Sorry, there was an error contacting the AI service.What’s the hottest planet?Sorry, there was an error contacting the AI service.\"\^[[22m\n\n    at /home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/ai-chat.spec.ts:160:40",
      "location": {
        "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/ai-chat.spec.ts",
        "column": 40,
        "line": 160
      },
      "snippet": "\^[[0m \^[[90m 158 |\^[[39m     \^[[36mawait\^[[39m expect(selectors\^[[33m.\^[[39mlist(page))\^[[33m.\^[[39mtoContainText(\^[[32m'solar system'\^[[39m)\^[[33m;\^[[39m\n \^[[90m 159 |\^[[39m     \^[[36mawait\^[[39m expect(selectors\^[[33m.\^[[39mlist(page))\^[[33m.\^[[39mtoContainText(\^[[32m'hottest planet'\^[[39m)\^[[33m;\^[[39m\n\^[[31m\^[[1m>\^[[22m\^[[39m\^[[90m 160 |\^[[39m     \^[[36mawait\^[[39m expect(selectors\^[[33m.\^[[39mlist(page))\^[[33m.\^[[39mtoContainText(\^[[35m/Mercury|Venus/i\^[[39m\^[[33m,\^[[39m { timeout\^[[33m:\^[[39m \^[[35m7000\^[[39m })\^[[33m;\^[[39m\n \^[[90m     |\^[[39m                                        \^[[31m\^[[1m^\^[[22m\^[[39m\n \^[[90m 161 |\^[[39m })\^[[33m;\^[[39m\n \^[[90m 162 |\^[[39m\n \^[[90m 163 |\^[[39m \^[[90m// AT-13: LLM can return formatted/code responses\^[[39m\^[[0m"
    },
    "errors": [
      {
        "location": {
          "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/ai-chat.spec.ts",
          "column": 40,
          "line": 160
        },
        "message": "Error: \^[[2mexpect(\^[[22m\^[[31mlocator\^[[39m\^[[2m).\^[[22mtoContainText\^[[2m(\^[[22m\^[[32mexpected\^[[39m\^[[2m)\^[[22m failed\n\nLocator: getByTestId('message-list')\nExpected pattern: \^[[32m/Mercury|Venus/i\^[[39m\nReceived string:  \^[[31m\"Hello! I’m your AI assistant. How can I help you today?Start a long explanation about the solar system...Sorry, there was an error contacting the AI service.What’s the hottest planet?Sorry, there was an error contacting the AI service.\"\^[[39m\nTimeout: 7000ms\n\nCall log:\n\^[[2m  - Expect \"toContainText\" with timeout 7000ms\^[[22m\n\^[[2m  - waiting for getByTestId('message-list')\^[[22m\n\^[[2m    2 × locator resolved to <div data-testid=\"message-list\" class=\"MuiContainer-root MuiContainer-maxWidthMd css-1rl24un-MuiContainer-root\">…</div>\^[[22m\n\^[[2m      - unexpected value \"Hello! I’m your AI assistant. How can I help you today?Start a long explanation about the solar system...Sorry, there was an error contacting the AI service.What’s the hottest planet?\"\^[[22m\n\^[[2m    9 × locator resolved to <div data-testid=\"message-list\" class=\"MuiContainer-root MuiContainer-maxWidthMd css-1rl24un-MuiContainer-root\">…</div>\^[[22m\n\^[[2m      - unexpected value \"Hello! I’m your AI assistant. How can I help you today?Start a long explanation about the solar system...Sorry, there was an error contacting the AI service.What’s the hottest planet?Sorry, there was an error contacting the AI service.\"\^[[22m\n\n\n  158 |     await expect(selectors.list(page)).toContainText('solar system');\n  159 |     await expect(selectors.list(page)).toContainText('hottest planet');\n> 160 |     await expect(selectors.list(page)).toContainText(/Mercury|Venus/i, { timeout: 7000 });\n      |                                        ^\n  161 | });\n  162 |\n  163 | // AT-13: LLM can return formatted/code responses\n    at /home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/ai-chat.spec.ts:160:40"
      }
    ],
    "stdout": [],
    "stderr": [],
    "retry": 0,
    "startTime": "2025-10-13T21:03:57.603Z",
    "annotations": [],
    "attachments": [
      {
        "name": "screenshot",
        "contentType": "image/png",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/ai-chat-AT-12-Sending-a-ne-58921-vious-LLM-response-finishes-chromium/test-failed-1.png"
      },
      {
        "name": "video",
        "contentType": "video/webm",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/ai-chat-AT-12-Sending-a-ne-58921-vious-LLM-response-finishes-chromium/video.webm"
      },
      {
        "name": "error-context",
        "contentType": "text/markdown",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/ai-chat-AT-12-Sending-a-ne-58921-vious-LLM-response-finishes-chromium/error-context.md"
      }
    ],
    "errorLocation": {
      "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/ai-chat.spec.ts",
      "column": 40,
      "line": 160
    }
  }
]
      ```

---

## Test Failed: AT-3: LLM response appears after sending a message
**Labels:** automated-defect

Test Name: AT-3: LLM response appears after sending a message
      File: ai-chat.spec.ts

      Screenshot:
      Screenshot attached in GitHub Actions artifacts (if available)

      Playwright Report:
      https://github.com/BUMETCS673/cs673olf25project-cs673olf25_team1/actions/runs/18478059837#artifacts

      Details:
      ```json
      [
  {
    "workerIndex": 0,
    "parallelIndex": 0,
    "status": "failed",
    "duration": 10555,
    "error": {
      "message": "Error: \^[[2mexpect(\^[[22m\^[[31mlocator\^[[39m\^[[2m).\^[[22mtoContainText\^[[2m(\^[[22m\^[[32mexpected\^[[39m\^[[2m)\^[[22m failed\n\nLocator: getByTestId('message-list')\nExpected string: \^[[32m\"4\"\^[[39m\nReceived string: \^[[31m\"Hello! I’m your AI assistant. How can I help you today?What is 2 + 2?Sorry, there was an error contacting the AI service.\"\^[[39m\nTimeout: 5000ms\n\nCall log:\n\^[[2m  - Expect \"toContainText\" with timeout 5000ms\^[[22m\n\^[[2m  - waiting for getByTestId('message-list')\^[[22m\n\^[[2m    2 × locator resolved to <div data-testid=\"message-list\" class=\"MuiContainer-root MuiContainer-maxWidthMd css-1rl24un-MuiContainer-root\">…</div>\^[[22m\n\^[[2m      - unexpected value \"Hello! I’m your AI assistant. How can I help you today?What is 2 + 2?\"\^[[22m\n\^[[2m    7 × locator resolved to <div data-testid=\"message-list\" class=\"MuiContainer-root MuiContainer-maxWidthMd css-1rl24un-MuiContainer-root\">…</div>\^[[22m\n\^[[2m      - unexpected value \"Hello! I’m your AI assistant. How can I help you today?What is 2 + 2?Sorry, there was an error contacting the AI service.\"\^[[22m\n",
      "stack": "Error: \^[[2mexpect(\^[[22m\^[[31mlocator\^[[39m\^[[2m).\^[[22mtoContainText\^[[2m(\^[[22m\^[[32mexpected\^[[39m\^[[2m)\^[[22m failed\n\nLocator: getByTestId('message-list')\nExpected string: \^[[32m\"4\"\^[[39m\nReceived string: \^[[31m\"Hello! I’m your AI assistant. How can I help you today?What is 2 + 2?Sorry, there was an error contacting the AI service.\"\^[[39m\nTimeout: 5000ms\n\nCall log:\n\^[[2m  - Expect \"toContainText\" with timeout 5000ms\^[[22m\n\^[[2m  - waiting for getByTestId('message-list')\^[[22m\n\^[[2m    2 × locator resolved to <div data-testid=\"message-list\" class=\"MuiContainer-root MuiContainer-maxWidthMd css-1rl24un-MuiContainer-root\">…</div>\^[[22m\n\^[[2m      - unexpected value \"Hello! I’m your AI assistant. How can I help you today?What is 2 + 2?\"\^[[22m\n\^[[2m    7 × locator resolved to <div data-testid=\"message-list\" class=\"MuiContainer-root MuiContainer-maxWidthMd css-1rl24un-MuiContainer-root\">…</div>\^[[22m\n\^[[2m      - unexpected value \"Hello! I’m your AI assistant. How can I help you today?What is 2 + 2?Sorry, there was an error contacting the AI service.\"\^[[22m\n\n    at /home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/ai-chat.spec.ts:41:40",
      "location": {
        "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/ai-chat.spec.ts",
        "column": 40,
        "line": 41
      },
      "snippet": "\^[[0m \^[[90m 39 |\^[[39m     \^[[90m// Wait for response from the LLM\^[[39m\n \^[[90m 40 |\^[[39m     \^[[36mawait\^[[39m expect(selectors\^[[33m.\^[[39mlist(page))\^[[33m.\^[[39mtoContainText(\^[[32m'2 + 2'\^[[39m)\^[[33m;\^[[39m\n\^[[31m\^[[1m>\^[[22m\^[[39m\^[[90m 41 |\^[[39m     \^[[36mawait\^[[39m expect(selectors\^[[33m.\^[[39mlist(page))\^[[33m.\^[[39mtoContainText(\^[[32m'4'\^[[39m)\^[[33m;\^[[39m \n \^[[90m    |\^[[39m                                        \^[[31m\^[[1m^\^[[22m\^[[39m\n \^[[90m 42 |\^[[39m })\^[[33m;\^[[39m\n \^[[90m 43 |\^[[39m\n \^[[90m 44 |\^[[39m \^[[90m// AT-4: Socket emits LLM response without reload\^[[39m\^[[0m"
    },
    "errors": [
      {
        "location": {
          "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/ai-chat.spec.ts",
          "column": 40,
          "line": 41
        },
        "message": "Error: \^[[2mexpect(\^[[22m\^[[31mlocator\^[[39m\^[[2m).\^[[22mtoContainText\^[[2m(\^[[22m\^[[32mexpected\^[[39m\^[[2m)\^[[22m failed\n\nLocator: getByTestId('message-list')\nExpected string: \^[[32m\"4\"\^[[39m\nReceived string: \^[[31m\"Hello! I’m your AI assistant. How can I help you today?What is 2 + 2?Sorry, there was an error contacting the AI service.\"\^[[39m\nTimeout: 5000ms\n\nCall log:\n\^[[2m  - Expect \"toContainText\" with timeout 5000ms\^[[22m\n\^[[2m  - waiting for getByTestId('message-list')\^[[22m\n\^[[2m    2 × locator resolved to <div data-testid=\"message-list\" class=\"MuiContainer-root MuiContainer-maxWidthMd css-1rl24un-MuiContainer-root\">…</div>\^[[22m\n\^[[2m      - unexpected value \"Hello! I’m your AI assistant. How can I help you today?What is 2 + 2?\"\^[[22m\n\^[[2m    7 × locator resolved to <div data-testid=\"message-list\" class=\"MuiContainer-root MuiContainer-maxWidthMd css-1rl24un-MuiContainer-root\">…</div>\^[[22m\n\^[[2m      - unexpected value \"Hello! I’m your AI assistant. How can I help you today?What is 2 + 2?Sorry, there was an error contacting the AI service.\"\^[[22m\n\n\n  39 |     // Wait for response from the LLM\n  40 |     await expect(selectors.list(page)).toContainText('2 + 2');\n> 41 |     await expect(selectors.list(page)).toContainText('4'); \n     |                                        ^\n  42 | });\n  43 |\n  44 | // AT-4: Socket emits LLM response without reload\n    at /home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/ai-chat.spec.ts:41:40"
      }
    ],
    "stdout": [],
    "stderr": [],
    "retry": 0,
    "startTime": "2025-10-13T21:03:33.722Z",
    "annotations": [],
    "attachments": [
      {
        "name": "screenshot",
        "contentType": "image/png",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/ai-chat-AT-3-LLM-response-appears-after-sending-a-message-chromium/test-failed-1.png"
      },
      {
        "name": "video",
        "contentType": "video/webm",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/ai-chat-AT-3-LLM-response-appears-after-sending-a-message-chromium/video.webm"
      },
      {
        "name": "error-context",
        "contentType": "text/markdown",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/ai-chat-AT-3-LLM-response-appears-after-sending-a-message-chromium/error-context.md"
      }
    ],
    "errorLocation": {
      "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/ai-chat.spec.ts",
      "column": 40,
      "line": 41
    }
  }
]
      ```

---

## Refactor Playwright Tests to Match Updated UI Selectors
**Labels:** bug, Priority: 1 (high)

After the initial UI redesign, all Playwright tests began failing due to major layout and selector changes — several components were renamed, removed, or converted to dynamic elements.

To address this, the frontend branch now includes updates that introduce static data-testid selectors to stabilize automated testing. However, that branch currently has merge conflicts, so the fixes haven’t reached main.

As a result, the current main branch is still running outdated tests that no longer match the UI.

Next Steps
	1.	Resolve and merge the frontend branch containing the new static selectors into main.
	2.	Refactor the following Playwright tests to use the new stable data-testid attributes:

    	auth-login.spec.ts
    	chat-guest.spec.ts
    	chat-history.spec.ts
    	enter-key.spec.ts
    	help-community.spec.ts
    	sidebar.spec.ts
    	typing-indicator.spec.ts

	3.	Run tests locally to confirm coverage.
	4.	Verify CI passes after merging.
	5.	Document the selector naming convention to prevent future test breakage.

---

## CI Pipeline Hangs Waiting for Backend Server to Start
**Labels:** bug, Priority: 1 (high)

During automated test runs in the CI pipeline, the process hangs indefinitely at the "Waiting for backend" step. The backend container appears to start, but the pipeline is unable to reach it through the expected port (localhost:3000). This issue blocks the pipeline and prevents subsequent Playwright tests and reporting steps from executing. 

Run until curl -s http://localhost:3000; do echo "Waiting for backend..."; sleep 2; done
  until curl -s http://localhost:3000; do echo "Waiting for backend..."; sleep 2; done
  shell: /usr/bin/bash -e {0}
  env:
    BASE_URL: http://localhost:8000
    API_URL: http://localhost:3000

Steps to reproduce: 
1. Run CI pipeline (CI: Metrics and Tests) on any branch containing the latest backend updates.
2. Observe the step curl -s http://localhost:3000; do echo "Waiting for backend..."; sleep 2; done
3. The command never exits, even though Docker indicates the backend container is running.

Expected Behavior: 
The pipeline should detect when the backend is healthy and proceed to run tests.

Actual Behavior: 
The backend container starts but appears unreachable from within the CI environment. The job loops indefinitely on the "Waiting for backend" step. No further steps are executed.

<img width="830" height="647" alt="Image" src="https://github.com/user-attachments/assets/ecd3fb35-3edf-4f69-9557-eb84218eb5e8" />

---

## No minimum password length or complexity requirements during registration
**Labels:** Priority: 1 (high), Improvement: Functionality

Description

Currently, the registration process allows users to create accounts with very weak passwords (e.g., "123"). This poses a security risk and does not meet basic password strength standards.

Steps to Reproduce
	1.	Go to the Register page.
	2.	Enter a short or simple password (e.g., "123").
	3.	Submit the form.

Expected Behavior

The system should enforce a minimum password length (e.g., 8 characters) and ideally require a mix of letters, numbers, and/or special characters.

Actual Behavior

Users can successfully register with passwords that are too short or simple, making accounts vulnerable to brute-force attacks.

---

## Shift + Enter sends message instead of creating newline
**Labels:** enhancement, Priority: 2 (medium)

Description

When composing a chat message in the app, pressing Shift + Enter sends the message rather than inserting a new line. This prevents users from formatting multi-line messages.

Steps to Reproduce
	1.	Go to the chat page.
	2.	Type a message in the input box.
	3.	Press Shift + Enter.

Expected Behavior

Shift + Enter should insert a newline in the message box without sending the message.

Actual Behavior

Shift + Enter triggers the send action, submitting the message prematurely.

---

## Duplicate username during registration returns “Internal Server Error” instead of proper validation message
**Labels:** Priority: 2 (medium), Improvement: Functionality

Description

When a user attempts to register using a username that already exists, the backend throws a raw error — Error: Username already exists — which propagates to the UI as a server error.

Steps to Reproduce
	1.	Go to /login (Register page currently shares the same route).
	2.	Attempt to create a new account using a username that already exists in the database.
	3.	Submit the form.

Actual Behavior
	•	API throws the following error:

Error: Username already exists
    at AccountService.register (/api/src/services/account.service.ts:30:13)
    at AuthController.register (/api/src/authentication/controller.ts:17:20)

	•	The frontend displays a generic “Internal Server Error” message.

---

## Page reload redirects to login screen instead of keeping session
**Labels:** bug, Priority: 2 (medium), Improvement: Functionality

Description

Two authentication issues were found:
	1.	Refreshing any page after login redirects the user back to the /login page, even with a valid session/token.
	2.	The Register page uses the same URL path as /login, preventing proper navigation and causing confusion in routing.

Steps to Reproduce
	1.	Log in successfully and navigate to another page (e.g., /community).
	2.	Refresh the browser → user is redirected to login.
	3.	Click “Register” → URL does not change (still /login).

Expected Behavior
	•	Refreshing should maintain the logged-in session.
	•	Register page should have a unique route (e.g., /register).

Actual Behavior
	•	Refresh forces logout.
	•	Register shares /login route.

---

## UI Refactor Broke Playwright Tests — Missing Stable Selectors
**Labels:** bug, Priority: 0 (critical)

After the latest UI redesign, multiple Playwright tests are failing due to unstable or missing element selectors. The new Material-UI components (e.g., <Drawer>, <Box>, etc.) now rely on dynamically generated class names (MuiDrawer-root, css-xxxxxx) instead of stable identifiers.

- ~65 Playwright tests currently failing.

- Dynamic classnames (css-hashes) change per build, breaking selectors.

- Hidden elements remain in the DOM (aria-hidden="true", transform: translateX(-260px)), causing visibility assertions to fail.

- Automation regression is blocking CI pipeline reliability and slowing QA work.

Every interactive or state-dependent UI element (buttons, modals, drawers, form fields, etc.) must expose consistent test selectors via data-testid or a stable role + label.

---

## Test Failed: AT-5: Indicator does not persist after reload
**Labels:** automated-defect

Test Name: AT-5: Indicator does not persist after reload
      File: typing-indicator.spec.ts

      Screenshot:
      Screenshot attached in GitHub Actions artifacts (if available)

      Playwright Report:
      https://github.com/BUMETCS673/cs673olf25project-cs673olf25_team1/actions/runs/18212333242#artifacts

      Details:
      ```json
      [
  {
    "workerIndex": 23,
    "parallelIndex": 1,
    "status": "failed",
    "duration": 23775,
    "error": {
      "message": "TimeoutError: page.waitForSelector: Timeout 20000ms exceeded.\nCall log:\n\^[[2m  - waiting for locator('.messages-container') to be visible\^[[22m\n",
      "stack": "TimeoutError: page.waitForSelector: Timeout 20000ms exceeded.\nCall log:\n\^[[2m  - waiting for locator('.messages-container') to be visible\^[[22m\n\n    at /home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/typing-indicator.spec.ts:21:14",
      "location": {
        "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/typing-indicator.spec.ts",
        "column": 14,
        "line": 21
      },
      "snippet": "\^[[0m \^[[90m 19 |\^[[39m   \^[[36mawait\^[[39m page\^[[33m.\^[[39mgoto(\^[[33mBASE_URL\^[[39m \^[[33m+\^[[39m \^[[32m'/'\^[[39m)\^[[33m;\^[[39m\n \^[[90m 20 |\^[[39m   \^[[36mawait\^[[39m page\^[[33m.\^[[39mwaitForLoadState(\^[[32m'networkidle'\^[[39m)\^[[33m;\^[[39m\n\^[[31m\^[[1m>\^[[22m\^[[39m\^[[90m 21 |\^[[39m   \^[[36mawait\^[[39m page\^[[33m.\^[[39mwaitForSelector(\^[[32m'.messages-container'\^[[39m\^[[33m,\^[[39m { timeout\^[[33m:\^[[39m \^[[35m20000\^[[39m })\^[[33m;\^[[39m\n \^[[90m    |\^[[39m              \^[[31m\^[[1m^\^[[22m\^[[39m\n \^[[90m 22 |\^[[39m })\^[[33m;\^[[39m\n \^[[90m 23 |\^[[39m\n \^[[90m 24 |\^[[39m \^[[36masync\^[[39m \^[[36mfunction\^[[39m startTyping(page\^[[33m:\^[[39m any\^[[33m,\^[[39m text \^[[33m=\^[[39m \^[[32m'hello'\^[[39m) {\^[[0m"
    },
    "errors": [
      {
        "location": {
          "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/typing-indicator.spec.ts",
          "column": 14,
          "line": 21
        },
        "message": "TimeoutError: page.waitForSelector: Timeout 20000ms exceeded.\nCall log:\n\^[[2m  - waiting for locator('.messages-container') to be visible\^[[22m\n\n\n  19 |   await page.goto(BASE_URL + '/');\n  20 |   await page.waitForLoadState('networkidle');\n> 21 |   await page.waitForSelector('.messages-container', { timeout: 20000 });\n     |              ^\n  22 | });\n  23 |\n  24 | async function startTyping(page: any, text = 'hello') {\n    at /home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/typing-indicator.spec.ts:21:14"
      }
    ],
    "stdout": [],
    "stderr": [],
    "retry": 0,
    "startTime": "2025-10-03T04:02:16.183Z",
    "annotations": [],
    "attachments": [
      {
        "name": "screenshot",
        "contentType": "image/png",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/typing-indicator-AT-5-Indi-f22c2-es-not-persist-after-reload-chromium/test-failed-1.png"
      },
      {
        "name": "video",
        "contentType": "video/webm",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/typing-indicator-AT-5-Indi-f22c2-es-not-persist-after-reload-chromium/video.webm"
      },
      {
        "name": "error-context",
        "contentType": "text/markdown",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/typing-indicator-AT-5-Indi-f22c2-es-not-persist-after-reload-chromium/error-context.md"
      }
    ],
    "errorLocation": {
      "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/typing-indicator.spec.ts",
      "column": 14,
      "line": 21
    }
  }
]
      ```

---

## Test Failed: AT-3: Shows "X users are typing" when two users type
**Labels:** automated-defect

Test Name: AT-3: Shows "X users are typing" when two users type
      File: typing-indicator.spec.ts

      Screenshot:
      Screenshot attached in GitHub Actions artifacts (if available)

      Playwright Report:
      https://github.com/BUMETCS673/cs673olf25project-cs673olf25_team1/actions/runs/18212333242#artifacts

      Details:
      ```json
      [
  {
    "workerIndex": 21,
    "parallelIndex": 1,
    "status": "failed",
    "duration": 23891,
    "error": {
      "message": "TimeoutError: page.waitForSelector: Timeout 20000ms exceeded.\nCall log:\n\^[[2m  - waiting for locator('.messages-container') to be visible\^[[22m\n",
      "stack": "TimeoutError: page.waitForSelector: Timeout 20000ms exceeded.\nCall log:\n\^[[2m  - waiting for locator('.messages-container') to be visible\^[[22m\n\n    at /home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/typing-indicator.spec.ts:21:14",
      "location": {
        "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/typing-indicator.spec.ts",
        "column": 14,
        "line": 21
      },
      "snippet": "\^[[0m \^[[90m 19 |\^[[39m   \^[[36mawait\^[[39m page\^[[33m.\^[[39mgoto(\^[[33mBASE_URL\^[[39m \^[[33m+\^[[39m \^[[32m'/'\^[[39m)\^[[33m;\^[[39m\n \^[[90m 20 |\^[[39m   \^[[36mawait\^[[39m page\^[[33m.\^[[39mwaitForLoadState(\^[[32m'networkidle'\^[[39m)\^[[33m;\^[[39m\n\^[[31m\^[[1m>\^[[22m\^[[39m\^[[90m 21 |\^[[39m   \^[[36mawait\^[[39m page\^[[33m.\^[[39mwaitForSelector(\^[[32m'.messages-container'\^[[39m\^[[33m,\^[[39m { timeout\^[[33m:\^[[39m \^[[35m20000\^[[39m })\^[[33m;\^[[39m\n \^[[90m    |\^[[39m              \^[[31m\^[[1m^\^[[22m\^[[39m\n \^[[90m 22 |\^[[39m })\^[[33m;\^[[39m\n \^[[90m 23 |\^[[39m\n \^[[90m 24 |\^[[39m \^[[36masync\^[[39m \^[[36mfunction\^[[39m startTyping(page\^[[33m:\^[[39m any\^[[33m,\^[[39m text \^[[33m=\^[[39m \^[[32m'hello'\^[[39m) {\^[[0m"
    },
    "errors": [
      {
        "location": {
          "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/typing-indicator.spec.ts",
          "column": 14,
          "line": 21
        },
        "message": "TimeoutError: page.waitForSelector: Timeout 20000ms exceeded.\nCall log:\n\^[[2m  - waiting for locator('.messages-container') to be visible\^[[22m\n\n\n  19 |   await page.goto(BASE_URL + '/');\n  20 |   await page.waitForLoadState('networkidle');\n> 21 |   await page.waitForSelector('.messages-container', { timeout: 20000 });\n     |              ^\n  22 | });\n  23 |\n  24 | async function startTyping(page: any, text = 'hello') {\n    at /home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/typing-indicator.spec.ts:21:14"
      }
    ],
    "stdout": [],
    "stderr": [],
    "retry": 0,
    "startTime": "2025-10-03T04:01:51.647Z",
    "annotations": [],
    "attachments": [
      {
        "name": "screenshot",
        "contentType": "image/png",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/typing-indicator-AT-3-Show-17173--typing-when-two-users-type-chromium/test-failed-1.png"
      },
      {
        "name": "video",
        "contentType": "video/webm",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/typing-indicator-AT-3-Show-17173--typing-when-two-users-type-chromium/video.webm"
      },
      {
        "name": "error-context",
        "contentType": "text/markdown",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/typing-indicator-AT-3-Show-17173--typing-when-two-users-type-chromium/error-context.md"
      }
    ],
    "errorLocation": {
      "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/typing-indicator.spec.ts",
      "column": 14,
      "line": 21
    }
  }
]
      ```

---

## Test Failed: AT-2: Indicator disappears after stop typing or sending
**Labels:** automated-defect

Test Name: AT-2: Indicator disappears after stop typing or sending
      File: typing-indicator.spec.ts

      Screenshot:
      Screenshot attached in GitHub Actions artifacts (if available)

      Playwright Report:
      https://github.com/BUMETCS673/cs673olf25project-cs673olf25_team1/actions/runs/18212333242#artifacts

      Details:
      ```json
      [
  {
    "workerIndex": 20,
    "parallelIndex": 0,
    "status": "failed",
    "duration": 23978,
    "error": {
      "message": "TimeoutError: page.waitForSelector: Timeout 20000ms exceeded.\nCall log:\n\^[[2m  - waiting for locator('.messages-container') to be visible\^[[22m\n",
      "stack": "TimeoutError: page.waitForSelector: Timeout 20000ms exceeded.\nCall log:\n\^[[2m  - waiting for locator('.messages-container') to be visible\^[[22m\n\n    at /home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/typing-indicator.spec.ts:21:14",
      "location": {
        "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/typing-indicator.spec.ts",
        "column": 14,
        "line": 21
      },
      "snippet": "\^[[0m \^[[90m 19 |\^[[39m   \^[[36mawait\^[[39m page\^[[33m.\^[[39mgoto(\^[[33mBASE_URL\^[[39m \^[[33m+\^[[39m \^[[32m'/'\^[[39m)\^[[33m;\^[[39m\n \^[[90m 20 |\^[[39m   \^[[36mawait\^[[39m page\^[[33m.\^[[39mwaitForLoadState(\^[[32m'networkidle'\^[[39m)\^[[33m;\^[[39m\n\^[[31m\^[[1m>\^[[22m\^[[39m\^[[90m 21 |\^[[39m   \^[[36mawait\^[[39m page\^[[33m.\^[[39mwaitForSelector(\^[[32m'.messages-container'\^[[39m\^[[33m,\^[[39m { timeout\^[[33m:\^[[39m \^[[35m20000\^[[39m })\^[[33m;\^[[39m\n \^[[90m    |\^[[39m              \^[[31m\^[[1m^\^[[22m\^[[39m\n \^[[90m 22 |\^[[39m })\^[[33m;\^[[39m\n \^[[90m 23 |\^[[39m\n \^[[90m 24 |\^[[39m \^[[36masync\^[[39m \^[[36mfunction\^[[39m startTyping(page\^[[33m:\^[[39m any\^[[33m,\^[[39m text \^[[33m=\^[[39m \^[[32m'hello'\^[[39m) {\^[[0m"
    },
    "errors": [
      {
        "location": {
          "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/typing-indicator.spec.ts",
          "column": 14,
          "line": 21
        },
        "message": "TimeoutError: page.waitForSelector: Timeout 20000ms exceeded.\nCall log:\n\^[[2m  - waiting for locator('.messages-container') to be visible\^[[22m\n\n\n  19 |   await page.goto(BASE_URL + '/');\n  20 |   await page.waitForLoadState('networkidle');\n> 21 |   await page.waitForSelector('.messages-container', { timeout: 20000 });\n     |              ^\n  22 | });\n  23 |\n  24 | async function startTyping(page: any, text = 'hello') {\n    at /home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/typing-indicator.spec.ts:21:14"
      }
    ],
    "stdout": [],
    "stderr": [],
    "retry": 0,
    "startTime": "2025-10-03T04:01:48.262Z",
    "annotations": [],
    "attachments": [
      {
        "name": "screenshot",
        "contentType": "image/png",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/typing-indicator-AT-2-Indi-0947d-fter-stop-typing-or-sending-chromium/test-failed-1.png"
      },
      {
        "name": "video",
        "contentType": "video/webm",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/typing-indicator-AT-2-Indi-0947d-fter-stop-typing-or-sending-chromium/video.webm"
      },
      {
        "name": "error-context",
        "contentType": "text/markdown",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/typing-indicator-AT-2-Indi-0947d-fter-stop-typing-or-sending-chromium/error-context.md"
      }
    ],
    "errorLocation": {
      "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/typing-indicator.spec.ts",
      "column": 14,
      "line": 21
    }
  }
]
      ```

---

## Test Failed: AT-1: hows typing indicator to other users when someone starts typing
**Labels:** automated-defect

Test Name: AT-1: hows typing indicator to other users when someone starts typing
      File: typing-indicator.spec.ts

      Screenshot:
      Screenshot attached in GitHub Actions artifacts (if available)

      Playwright Report:
      https://github.com/BUMETCS673/cs673olf25project-cs673olf25_team1/actions/runs/18212333242#artifacts

      Details:
      ```json
      [
  {
    "workerIndex": 19,
    "parallelIndex": 1,
    "status": "failed",
    "duration": 23958,
    "error": {
      "message": "TimeoutError: page.waitForSelector: Timeout 20000ms exceeded.\nCall log:\n\^[[2m  - waiting for locator('.messages-container') to be visible\^[[22m\n",
      "stack": "TimeoutError: page.waitForSelector: Timeout 20000ms exceeded.\nCall log:\n\^[[2m  - waiting for locator('.messages-container') to be visible\^[[22m\n\n    at /home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/typing-indicator.spec.ts:21:14",
      "location": {
        "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/typing-indicator.spec.ts",
        "column": 14,
        "line": 21
      },
      "snippet": "\^[[0m \^[[90m 19 |\^[[39m   \^[[36mawait\^[[39m page\^[[33m.\^[[39mgoto(\^[[33mBASE_URL\^[[39m \^[[33m+\^[[39m \^[[32m'/'\^[[39m)\^[[33m;\^[[39m\n \^[[90m 20 |\^[[39m   \^[[36mawait\^[[39m page\^[[33m.\^[[39mwaitForLoadState(\^[[32m'networkidle'\^[[39m)\^[[33m;\^[[39m\n\^[[31m\^[[1m>\^[[22m\^[[39m\^[[90m 21 |\^[[39m   \^[[36mawait\^[[39m page\^[[33m.\^[[39mwaitForSelector(\^[[32m'.messages-container'\^[[39m\^[[33m,\^[[39m { timeout\^[[33m:\^[[39m \^[[35m20000\^[[39m })\^[[33m;\^[[39m\n \^[[90m    |\^[[39m              \^[[31m\^[[1m^\^[[22m\^[[39m\n \^[[90m 22 |\^[[39m })\^[[33m;\^[[39m\n \^[[90m 23 |\^[[39m\n \^[[90m 24 |\^[[39m \^[[36masync\^[[39m \^[[36mfunction\^[[39m startTyping(page\^[[33m:\^[[39m any\^[[33m,\^[[39m text \^[[33m=\^[[39m \^[[32m'hello'\^[[39m) {\^[[0m"
    },
    "errors": [
      {
        "location": {
          "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/typing-indicator.spec.ts",
          "column": 14,
          "line": 21
        },
        "message": "TimeoutError: page.waitForSelector: Timeout 20000ms exceeded.\nCall log:\n\^[[2m  - waiting for locator('.messages-container') to be visible\^[[22m\n\n\n  19 |   await page.goto(BASE_URL + '/');\n  20 |   await page.waitForLoadState('networkidle');\n> 21 |   await page.waitForSelector('.messages-container', { timeout: 20000 });\n     |              ^\n  22 | });\n  23 |\n  24 | async function startTyping(page: any, text = 'hello') {\n    at /home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/typing-indicator.spec.ts:21:14"
      }
    ],
    "stdout": [],
    "stderr": [],
    "retry": 0,
    "startTime": "2025-10-03T04:01:27.064Z",
    "annotations": [],
    "attachments": [
      {
        "name": "screenshot",
        "contentType": "image/png",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/typing-indicator-AT-1-hows-9f170--when-someone-starts-typing-chromium/test-failed-1.png"
      },
      {
        "name": "video",
        "contentType": "video/webm",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/typing-indicator-AT-1-hows-9f170--when-someone-starts-typing-chromium/video.webm"
      },
      {
        "name": "error-context",
        "contentType": "text/markdown",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/typing-indicator-AT-1-hows-9f170--when-someone-starts-typing-chromium/error-context.md"
      }
    ],
    "errorLocation": {
      "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/typing-indicator.spec.ts",
      "column": 14,
      "line": 21
    }
  }
]
      ```

---

## Test Failed: AT-5: Direct root shows Community content
**Labels:** automated-defect

Test Name: AT-5: Direct root shows Community content
      File: sidebar.spec.ts

      Screenshot:
      Screenshot attached in GitHub Actions artifacts (if available)

      Playwright Report:
      https://github.com/BUMETCS673/cs673olf25project-cs673olf25_team1/actions/runs/18212333242#artifacts

      Details:
      ```json
      [
  {
    "workerIndex": 18,
    "parallelIndex": 1,
    "status": "failed",
    "duration": 7293,
    "error": {
      "message": "Error: \^[[2mexpect(\^[[22m\^[[31mpage\^[[39m\^[[2m).\^[[22mtoHaveURL\^[[2m(\^[[22m\^[[32mexpected\^[[39m\^[[2m)\^[[22m failed\n\nExpected pattern: \^[[32m/(?:\\/community|\\/$)/\^[[39m\nReceived string:  \^[[31m\"http://localhost:8000/login\"\^[[39m\nTimeout: 5000ms\n\nCall log:\n\^[[2m  - Expect \"toHaveURL\" with timeout 5000ms\^[[22m\n\^[[2m    9 × unexpected value \"http://localhost:8000/login\"\^[[22m\n",
      "stack": "Error: \^[[2mexpect(\^[[22m\^[[31mpage\^[[39m\^[[2m).\^[[22mtoHaveURL\^[[2m(\^[[22m\^[[32mexpected\^[[39m\^[[2m)\^[[22m failed\n\nExpected pattern: \^[[32m/(?:\\/community|\\/$)/\^[[39m\nReceived string:  \^[[31m\"http://localhost:8000/login\"\^[[39m\nTimeout: 5000ms\n\nCall log:\n\^[[2m  - Expect \"toHaveURL\" with timeout 5000ms\^[[22m\n\^[[2m    9 × unexpected value \"http://localhost:8000/login\"\^[[22m\n\n    at /home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/sidebar.spec.ts:63:22",
      "location": {
        "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/sidebar.spec.ts",
        "column": 22,
        "line": 63
      },
      "snippet": "\^[[0m \^[[90m 61 |\^[[39m test(\^[[32m'AT-5: Direct root shows Community content'\^[[39m\^[[33m,\^[[39m \^[[36masync\^[[39m ({ page }) \^[[33m=>\^[[39m {\n \^[[90m 62 |\^[[39m   \^[[36mawait\^[[39m page\^[[33m.\^[[39mgoto(\^[[33mBASE_URL\^[[39m \^[[33m+\^[[39m \^[[32m'/'\^[[39m)\^[[33m;\^[[39m\n\^[[31m\^[[1m>\^[[22m\^[[39m\^[[90m 63 |\^[[39m   \^[[36mawait\^[[39m expect(page)\^[[33m.\^[[39mtoHaveURL(\^[[35m/(?:\\/community|\\/$)/\^[[39m)\^[[33m;\^[[39m\n \^[[90m    |\^[[39m                      \^[[31m\^[[1m^\^[[22m\^[[39m\n \^[[90m 64 |\^[[39m })\^[[33m;\^[[39m\^[[0m"
    },
    "errors": [
      {
        "location": {
          "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/sidebar.spec.ts",
          "column": 22,
          "line": 63
        },
        "message": "Error: \^[[2mexpect(\^[[22m\^[[31mpage\^[[39m\^[[2m).\^[[22mtoHaveURL\^[[2m(\^[[22m\^[[32mexpected\^[[39m\^[[2m)\^[[22m failed\n\nExpected pattern: \^[[32m/(?:\\/community|\\/$)/\^[[39m\nReceived string:  \^[[31m\"http://localhost:8000/login\"\^[[39m\nTimeout: 5000ms\n\nCall log:\n\^[[2m  - Expect \"toHaveURL\" with timeout 5000ms\^[[22m\n\^[[2m    9 × unexpected value \"http://localhost:8000/login\"\^[[22m\n\n\n  61 | test('AT-5: Direct root shows Community content', async ({ page }) => {\n  62 |   await page.goto(BASE_URL + '/');\n> 63 |   await expect(page).toHaveURL(/(?:\\/community|\\/$)/);\n     |                      ^\n  64 | });\n    at /home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/sidebar.spec.ts:63:22"
      }
    ],
    "stdout": [],
    "stderr": [],
    "retry": 0,
    "startTime": "2025-10-03T04:01:19.106Z",
    "annotations": [],
    "attachments": [
      {
        "name": "screenshot",
        "contentType": "image/png",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/sidebar-AT-5-Direct-root-shows-Community-content-chromium/test-failed-1.png"
      },
      {
        "name": "video",
        "contentType": "video/webm",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/sidebar-AT-5-Direct-root-shows-Community-content-chromium/video.webm"
      },
      {
        "name": "error-context",
        "contentType": "text/markdown",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/sidebar-AT-5-Direct-root-shows-Community-content-chromium/error-context.md"
      }
    ],
    "errorLocation": {
      "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/sidebar.spec.ts",
      "column": 22,
      "line": 63
    }
  }
]
      ```

---

## Test Failed: AT-4: Direct /ai shows AI content
**Labels:** automated-defect

Test Name: AT-4: Direct /ai shows AI content
      File: sidebar.spec.ts

      Screenshot:
      Screenshot attached in GitHub Actions artifacts (if available)

      Playwright Report:
      https://github.com/BUMETCS673/cs673olf25project-cs673olf25_team1/actions/runs/18212333242#artifacts

      Details:
      ```json
      [
  {
    "workerIndex": 17,
    "parallelIndex": 1,
    "status": "failed",
    "duration": 7268,
    "error": {
      "message": "Error: \^[[2mexpect(\^[[22m\^[[31mpage\^[[39m\^[[2m).\^[[22mtoHaveURL\^[[2m(\^[[22m\^[[32mexpected\^[[39m\^[[2m)\^[[22m failed\n\nExpected pattern: \^[[32m/\\/ai(?:$|[?#])/\^[[39m\nReceived string:  \^[[31m\"http://localhost:8000/login\"\^[[39m\nTimeout: 5000ms\n\nCall log:\n\^[[2m  - Expect \"toHaveURL\" with timeout 5000ms\^[[22m\n\^[[2m    9 × unexpected value \"http://localhost:8000/login\"\^[[22m\n",
      "stack": "Error: \^[[2mexpect(\^[[22m\^[[31mpage\^[[39m\^[[2m).\^[[22mtoHaveURL\^[[2m(\^[[22m\^[[32mexpected\^[[39m\^[[2m)\^[[22m failed\n\nExpected pattern: \^[[32m/\\/ai(?:$|[?#])/\^[[39m\nReceived string:  \^[[31m\"http://localhost:8000/login\"\^[[39m\nTimeout: 5000ms\n\nCall log:\n\^[[2m  - Expect \"toHaveURL\" with timeout 5000ms\^[[22m\n\^[[2m    9 × unexpected value \"http://localhost:8000/login\"\^[[22m\n\n    at /home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/sidebar.spec.ts:57:22",
      "location": {
        "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/sidebar.spec.ts",
        "column": 22,
        "line": 57
      },
      "snippet": "\^[[0m \^[[90m 55 |\^[[39m test(\^[[32m'AT-4: Direct /ai shows AI content'\^[[39m\^[[33m,\^[[39m \^[[36masync\^[[39m ({ page }) \^[[33m=>\^[[39m {\n \^[[90m 56 |\^[[39m   \^[[36mawait\^[[39m page\^[[33m.\^[[39mgoto(\^[[33mBASE_URL\^[[39m \^[[33m+\^[[39m \^[[32m'/ai'\^[[39m)\^[[33m.\^[[39m\^[[36mcatch\^[[39m(\^[[36masync\^[[39m () \^[[33m=>\^[[39m { \^[[36mawait\^[[39m page\^[[33m.\^[[39mgoto(\^[[33mBASE_URL\^[[39m \^[[33m+\^[[39m \^[[32m'/'\^[[39m)\^[[33m;\^[[39m })\^[[33m;\^[[39m\n\^[[31m\^[[1m>\^[[22m\^[[39m\^[[90m 57 |\^[[39m   \^[[36mawait\^[[39m expect(page)\^[[33m.\^[[39mtoHaveURL(\^[[35m/\\/ai(?:$|[?#])/\^[[39m)\^[[33m;\^[[39m\n \^[[90m    |\^[[39m                      \^[[31m\^[[1m^\^[[22m\^[[39m\n \^[[90m 58 |\^[[39m })\^[[33m;\^[[39m\n \^[[90m 59 |\^[[39m\n \^[[90m 60 |\^[[39m \^[[90m// AT-5: Directly go to /community\^[[39m\^[[0m"
    },
    "errors": [
      {
        "location": {
          "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/sidebar.spec.ts",
          "column": 22,
          "line": 57
        },
        "message": "Error: \^[[2mexpect(\^[[22m\^[[31mpage\^[[39m\^[[2m).\^[[22mtoHaveURL\^[[2m(\^[[22m\^[[32mexpected\^[[39m\^[[2m)\^[[22m failed\n\nExpected pattern: \^[[32m/\\/ai(?:$|[?#])/\^[[39m\nReceived string:  \^[[31m\"http://localhost:8000/login\"\^[[39m\nTimeout: 5000ms\n\nCall log:\n\^[[2m  - Expect \"toHaveURL\" with timeout 5000ms\^[[22m\n\^[[2m    9 × unexpected value \"http://localhost:8000/login\"\^[[22m\n\n\n  55 | test('AT-4: Direct /ai shows AI content', async ({ page }) => {\n  56 |   await page.goto(BASE_URL + '/ai').catch(async () => { await page.goto(BASE_URL + '/'); });\n> 57 |   await expect(page).toHaveURL(/\\/ai(?:$|[?#])/);\n     |                      ^\n  58 | });\n  59 |\n  60 | // AT-5: Directly go to /community\n    at /home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/sidebar.spec.ts:57:22"
      }
    ],
    "stdout": [],
    "stderr": [],
    "retry": 0,
    "startTime": "2025-10-03T04:01:11.216Z",
    "annotations": [],
    "attachments": [
      {
        "name": "screenshot",
        "contentType": "image/png",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/sidebar-AT-4-Direct-ai-shows-AI-content-chromium/test-failed-1.png"
      },
      {
        "name": "video",
        "contentType": "video/webm",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/sidebar-AT-4-Direct-ai-shows-AI-content-chromium/video.webm"
      },
      {
        "name": "error-context",
        "contentType": "text/markdown",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/sidebar-AT-4-Direct-ai-shows-AI-content-chromium/error-context.md"
      }
    ],
    "errorLocation": {
      "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/sidebar.spec.ts",
      "column": 22,
      "line": 57
    }
  }
]
      ```

---

## Test Failed: AT-3: Click Community goes back to Community page
**Labels:** automated-defect

Test Name: AT-3: Click Community goes back to Community page
      File: sidebar.spec.ts

      Screenshot:
      Screenshot attached in GitHub Actions artifacts (if available)

      Playwright Report:
      https://github.com/BUMETCS673/cs673olf25project-cs673olf25_team1/actions/runs/18212333242#artifacts

      Details:
      ```json
      [
  {
    "workerIndex": 16,
    "parallelIndex": 1,
    "status": "failed",
    "duration": 7142,
    "error": {
      "message": "TimeoutError: locator.waitFor: Timeout 5000ms exceeded.\nCall log:\n\^[[2m  - waiting for locator('nav:visible, [role=\"navigation\"]:visible') to be visible\^[[22m\n",
      "stack": "TimeoutError: locator.waitFor: Timeout 5000ms exceeded.\nCall log:\n\^[[2m  - waiting for locator('nav:visible, [role=\"navigation\"]:visible') to be visible\^[[22m\n\n    at openSidebar (/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/sidebar.spec.ts:14:68)\n    at /home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/sidebar.spec.ts:48:3",
      "location": {
        "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/sidebar.spec.ts",
        "column": 68,
        "line": 14
      },
      "snippet": "\^[[0m \^[[90m 12 |\^[[39m   \^[[36mif\^[[39m (\^[[33m!\^[[39mnavVisible) {\n \^[[90m 13 |\^[[39m     \^[[36mawait\^[[39m page\^[[33m.\^[[39mlocator(\^[[32m'button'\^[[39m)\^[[33m.\^[[39mfirst()\^[[33m.\^[[39mclick()\^[[33m.\^[[39m\^[[36mcatch\^[[39m(() \^[[33m=>\^[[39m {})\^[[33m;\^[[39m\n\^[[31m\^[[1m>\^[[22m\^[[39m\^[[90m 14 |\^[[39m     \^[[36mawait\^[[39m page\^[[33m.\^[[39mlocator(\^[[32m'nav:visible, [role=\"navigation\"]:visible'\^[[39m)\^[[33m.\^[[39mwaitFor({ state\^[[33m:\^[[39m \^[[32m'visible'\^[[39m\^[[33m,\^[[39m timeout\^[[33m:\^[[39m \^[[35m5000\^[[39m })\^[[33m;\^[[39m\n \^[[90m    |\^[[39m                                                                    \^[[31m\^[[1m^\^[[22m\^[[39m\n \^[[90m 15 |\^[[39m   }\n \^[[90m 16 |\^[[39m }\n \^[[90m 17 |\^[[39m\^[[0m"
    },
    "errors": [
      {
        "location": {
          "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/sidebar.spec.ts",
          "column": 68,
          "line": 14
        },
        "message": "TimeoutError: locator.waitFor: Timeout 5000ms exceeded.\nCall log:\n\^[[2m  - waiting for locator('nav:visible, [role=\"navigation\"]:visible') to be visible\^[[22m\n\n\n  12 |   if (!navVisible) {\n  13 |     await page.locator('button').first().click().catch(() => {});\n> 14 |     await page.locator('nav:visible, [role=\"navigation\"]:visible').waitFor({ state: 'visible', timeout: 5000 });\n     |                                                                    ^\n  15 |   }\n  16 | }\n  17 |\n    at openSidebar (/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/sidebar.spec.ts:14:68)\n    at /home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/sidebar.spec.ts:48:3"
      }
    ],
    "stdout": [],
    "stderr": [],
    "retry": 0,
    "startTime": "2025-10-03T04:01:03.440Z",
    "annotations": [],
    "attachments": [
      {
        "name": "screenshot",
        "contentType": "image/png",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/sidebar-AT-3-Click-Community-goes-back-to-Community-page-chromium/test-failed-1.png"
      },
      {
        "name": "video",
        "contentType": "video/webm",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/sidebar-AT-3-Click-Community-goes-back-to-Community-page-chromium/video.webm"
      },
      {
        "name": "error-context",
        "contentType": "text/markdown",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/sidebar-AT-3-Click-Community-goes-back-to-Community-page-chromium/error-context.md"
      }
    ],
    "errorLocation": {
      "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/sidebar.spec.ts",
      "column": 68,
      "line": 14
    }
  }
]
      ```

---

## Test Failed: AT-2: Click AI goes to AI page
**Labels:** automated-defect

Test Name: AT-2: Click AI goes to AI page
      File: sidebar.spec.ts

      Screenshot:
      Screenshot attached in GitHub Actions artifacts (if available)

      Playwright Report:
      https://github.com/BUMETCS673/cs673olf25project-cs673olf25_team1/actions/runs/18212333242#artifacts

      Details:
      ```json
      [
  {
    "workerIndex": 15,
    "parallelIndex": 1,
    "status": "failed",
    "duration": 7124,
    "error": {
      "message": "TimeoutError: locator.waitFor: Timeout 5000ms exceeded.\nCall log:\n\^[[2m  - waiting for locator('nav:visible, [role=\"navigation\"]:visible') to be visible\^[[22m\n",
      "stack": "TimeoutError: locator.waitFor: Timeout 5000ms exceeded.\nCall log:\n\^[[2m  - waiting for locator('nav:visible, [role=\"navigation\"]:visible') to be visible\^[[22m\n\n    at openSidebar (/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/sidebar.spec.ts:14:68)\n    at /home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/sidebar.spec.ts:39:3",
      "location": {
        "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/sidebar.spec.ts",
        "column": 68,
        "line": 14
      },
      "snippet": "\^[[0m \^[[90m 12 |\^[[39m   \^[[36mif\^[[39m (\^[[33m!\^[[39mnavVisible) {\n \^[[90m 13 |\^[[39m     \^[[36mawait\^[[39m page\^[[33m.\^[[39mlocator(\^[[32m'button'\^[[39m)\^[[33m.\^[[39mfirst()\^[[33m.\^[[39mclick()\^[[33m.\^[[39m\^[[36mcatch\^[[39m(() \^[[33m=>\^[[39m {})\^[[33m;\^[[39m\n\^[[31m\^[[1m>\^[[22m\^[[39m\^[[90m 14 |\^[[39m     \^[[36mawait\^[[39m page\^[[33m.\^[[39mlocator(\^[[32m'nav:visible, [role=\"navigation\"]:visible'\^[[39m)\^[[33m.\^[[39mwaitFor({ state\^[[33m:\^[[39m \^[[32m'visible'\^[[39m\^[[33m,\^[[39m timeout\^[[33m:\^[[39m \^[[35m5000\^[[39m })\^[[33m;\^[[39m\n \^[[90m    |\^[[39m                                                                    \^[[31m\^[[1m^\^[[22m\^[[39m\n \^[[90m 15 |\^[[39m   }\n \^[[90m 16 |\^[[39m }\n \^[[90m 17 |\^[[39m\^[[0m"
    },
    "errors": [
      {
        "location": {
          "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/sidebar.spec.ts",
          "column": 68,
          "line": 14
        },
        "message": "TimeoutError: locator.waitFor: Timeout 5000ms exceeded.\nCall log:\n\^[[2m  - waiting for locator('nav:visible, [role=\"navigation\"]:visible') to be visible\^[[22m\n\n\n  12 |   if (!navVisible) {\n  13 |     await page.locator('button').first().click().catch(() => {});\n> 14 |     await page.locator('nav:visible, [role=\"navigation\"]:visible').waitFor({ state: 'visible', timeout: 5000 });\n     |                                                                    ^\n  15 |   }\n  16 | }\n  17 |\n    at openSidebar (/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/sidebar.spec.ts:14:68)\n    at /home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/sidebar.spec.ts:39:3"
      }
    ],
    "stdout": [],
    "stderr": [],
    "retry": 0,
    "startTime": "2025-10-03T04:00:55.675Z",
    "annotations": [],
    "attachments": [
      {
        "name": "screenshot",
        "contentType": "image/png",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/sidebar-AT-2-Click-AI-goes-to-AI-page-chromium/test-failed-1.png"
      },
      {
        "name": "video",
        "contentType": "video/webm",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/sidebar-AT-2-Click-AI-goes-to-AI-page-chromium/video.webm"
      },
      {
        "name": "error-context",
        "contentType": "text/markdown",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/sidebar-AT-2-Click-AI-goes-to-AI-page-chromium/error-context.md"
      }
    ],
    "errorLocation": {
      "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/sidebar.spec.ts",
      "column": 68,
      "line": 14
    }
  }
]
      ```

---

## Test Failed: AT-1: Sidebar shows Community and AI
**Labels:** automated-defect

Test Name: AT-1: Sidebar shows Community and AI
      File: sidebar.spec.ts

      Screenshot:
      Screenshot attached in GitHub Actions artifacts (if available)

      Playwright Report:
      https://github.com/BUMETCS673/cs673olf25project-cs673olf25_team1/actions/runs/18212333242#artifacts

      Details:
      ```json
      [
  {
    "workerIndex": 14,
    "parallelIndex": 1,
    "status": "failed",
    "duration": 7120,
    "error": {
      "message": "TimeoutError: locator.waitFor: Timeout 5000ms exceeded.\nCall log:\n\^[[2m  - waiting for locator('nav:visible, [role=\"navigation\"]:visible') to be visible\^[[22m\n",
      "stack": "TimeoutError: locator.waitFor: Timeout 5000ms exceeded.\nCall log:\n\^[[2m  - waiting for locator('nav:visible, [role=\"navigation\"]:visible') to be visible\^[[22m\n\n    at openSidebar (/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/sidebar.spec.ts:14:68)\n    at /home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/sidebar.spec.ts:30:3",
      "location": {
        "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/sidebar.spec.ts",
        "column": 68,
        "line": 14
      },
      "snippet": "\^[[0m \^[[90m 12 |\^[[39m   \^[[36mif\^[[39m (\^[[33m!\^[[39mnavVisible) {\n \^[[90m 13 |\^[[39m     \^[[36mawait\^[[39m page\^[[33m.\^[[39mlocator(\^[[32m'button'\^[[39m)\^[[33m.\^[[39mfirst()\^[[33m.\^[[39mclick()\^[[33m.\^[[39m\^[[36mcatch\^[[39m(() \^[[33m=>\^[[39m {})\^[[33m;\^[[39m\n\^[[31m\^[[1m>\^[[22m\^[[39m\^[[90m 14 |\^[[39m     \^[[36mawait\^[[39m page\^[[33m.\^[[39mlocator(\^[[32m'nav:visible, [role=\"navigation\"]:visible'\^[[39m)\^[[33m.\^[[39mwaitFor({ state\^[[33m:\^[[39m \^[[32m'visible'\^[[39m\^[[33m,\^[[39m timeout\^[[33m:\^[[39m \^[[35m5000\^[[39m })\^[[33m;\^[[39m\n \^[[90m    |\^[[39m                                                                    \^[[31m\^[[1m^\^[[22m\^[[39m\n \^[[90m 15 |\^[[39m   }\n \^[[90m 16 |\^[[39m }\n \^[[90m 17 |\^[[39m\^[[0m"
    },
    "errors": [
      {
        "location": {
          "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/sidebar.spec.ts",
          "column": 68,
          "line": 14
        },
        "message": "TimeoutError: locator.waitFor: Timeout 5000ms exceeded.\nCall log:\n\^[[2m  - waiting for locator('nav:visible, [role=\"navigation\"]:visible') to be visible\^[[22m\n\n\n  12 |   if (!navVisible) {\n  13 |     await page.locator('button').first().click().catch(() => {});\n> 14 |     await page.locator('nav:visible, [role=\"navigation\"]:visible').waitFor({ state: 'visible', timeout: 5000 });\n     |                                                                    ^\n  15 |   }\n  16 | }\n  17 |\n    at openSidebar (/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/sidebar.spec.ts:14:68)\n    at /home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/sidebar.spec.ts:30:3"
      }
    ],
    "stdout": [],
    "stderr": [],
    "retry": 0,
    "startTime": "2025-10-03T04:00:47.991Z",
    "annotations": [],
    "attachments": [
      {
        "name": "screenshot",
        "contentType": "image/png",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/sidebar-AT-1-Sidebar-shows-Community-and-AI-chromium/test-failed-1.png"
      },
      {
        "name": "video",
        "contentType": "video/webm",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/sidebar-AT-1-Sidebar-shows-Community-and-AI-chromium/video.webm"
      },
      {
        "name": "error-context",
        "contentType": "text/markdown",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/sidebar-AT-1-Sidebar-shows-Community-and-AI-chromium/error-context.md"
      }
    ],
    "errorLocation": {
      "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/sidebar.spec.ts",
      "column": 68,
      "line": 14
    }
  }
]
      ```

---

## Test Failed: AT-1: Guest sends a message
**Labels:** automated-defect

Test Name: AT-1: Guest sends a message
      File: chat-guest.spec.ts

      Screenshot:
      Screenshot attached in GitHub Actions artifacts (if available)

      Playwright Report:
      https://github.com/BUMETCS673/cs673olf25project-cs673olf25_team1/actions/runs/18212333242#artifacts

      Details:
      ```json
      [
  {
    "workerIndex": 4,
    "parallelIndex": 1,
    "status": "failed",
    "duration": 5694,
    "error": {
      "message": "Error: \^[[2mexpect(\^[[22m\^[[31mlocator\^[[39m\^[[2m).\^[[22mtoContainText\^[[2m(\^[[22m\^[[32mexpected\^[[39m\^[[2m)\^[[22m failed\n\nLocator: locator('.messages-container')\nExpected string: \^[[32m\"hello world 2025-10-03T03:56:20.916Z\"\^[[39m\nReceived: <element(s) not found>\nTimeout: 3000ms\n\nCall log:\n\^[[2m  - Expect \"toContainText\" with timeout 3000ms\^[[22m\n\^[[2m  - waiting for locator('.messages-container')\^[[22m\n",
      "stack": "Error: \^[[2mexpect(\^[[22m\^[[31mlocator\^[[39m\^[[2m).\^[[22mtoContainText\^[[2m(\^[[22m\^[[32mexpected\^[[39m\^[[2m)\^[[22m failed\n\nLocator: locator('.messages-container')\nExpected string: \^[[32m\"hello world 2025-10-03T03:56:20.916Z\"\^[[39m\nReceived: <element(s) not found>\nTimeout: 3000ms\n\nCall log:\n\^[[2m  - Expect \"toContainText\" with timeout 3000ms\^[[22m\n\^[[2m  - waiting for locator('.messages-container')\^[[22m\n\n    at /home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/chat-guest.spec.ts:31:26",
      "location": {
        "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/chat-guest.spec.ts",
        "column": 26,
        "line": 31
      },
      "snippet": "\^[[0m \^[[90m 29 |\^[[39m   \^[[36mawait\^[[39m send\^[[33m.\^[[39mclick()\^[[33m;\^[[39m\n \^[[90m 30 |\^[[39m\n\^[[31m\^[[1m>\^[[22m\^[[39m\^[[90m 31 |\^[[39m   \^[[36mawait\^[[39m expect(messages)\^[[33m.\^[[39mtoContainText(msg\^[[33m,\^[[39m { timeout\^[[33m:\^[[39m \^[[35m3000\^[[39m })\^[[33m;\^[[39m\n \^[[90m    |\^[[39m                          \^[[31m\^[[1m^\^[[22m\^[[39m\n \^[[90m 32 |\^[[39m })\^[[33m;\^[[39m\n \^[[90m 33 |\^[[39m\n \^[[90m 34 |\^[[39m \^[[90m// AT-2: Message received by another user \^[[39m\^[[0m"
    },
    "errors": [
      {
        "location": {
          "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/chat-guest.spec.ts",
          "column": 26,
          "line": 31
        },
        "message": "Error: \^[[2mexpect(\^[[22m\^[[31mlocator\^[[39m\^[[2m).\^[[22mtoContainText\^[[2m(\^[[22m\^[[32mexpected\^[[39m\^[[2m)\^[[22m failed\n\nLocator: locator('.messages-container')\nExpected string: \^[[32m\"hello world 2025-10-03T03:56:20.916Z\"\^[[39m\nReceived: <element(s) not found>\nTimeout: 3000ms\n\nCall log:\n\^[[2m  - Expect \"toContainText\" with timeout 3000ms\^[[22m\n\^[[2m  - waiting for locator('.messages-container')\^[[22m\n\n\n  29 |   await send.click();\n  30 |\n> 31 |   await expect(messages).toContainText(msg, { timeout: 3000 });\n     |                          ^\n  32 | });\n  33 |\n  34 | // AT-2: Message received by another user \n    at /home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/chat-guest.spec.ts:31:26"
      }
    ],
    "stdout": [],
    "stderr": [],
    "retry": 0,
    "startTime": "2025-10-03T03:56:18.536Z",
    "annotations": [],
    "attachments": [
      {
        "name": "screenshot",
        "contentType": "image/png",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/chat-guest-AT-1-Guest-sends-a-message-chromium/test-failed-1.png"
      },
      {
        "name": "video",
        "contentType": "video/webm",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/chat-guest-AT-1-Guest-sends-a-message-chromium/video.webm"
      },
      {
        "name": "error-context",
        "contentType": "text/markdown",
        "path": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/test-results/chat-guest-AT-1-Guest-sends-a-message-chromium/error-context.md"
      }
    ],
    "errorLocation": {
      "file": "/home/runner/work/cs673olf25project-cs673olf25_team1/cs673olf25project-cs673olf25_team1/tests/e2e/chat-guest.spec.ts",
      "column": 26,
      "line": 31
    }
  }
]
      ```

---

## Test Failed: AT-4: Typist does not see their own indicator
**Labels:** automated-defect

Test Name: AT-4: Typist does not see their own indicator
      File: typing-indicator.spec.ts

      Screenshot:
      Screenshot attached in GitHub Actions artifacts (if available)

      Playwright Report:
      https://github.com/undefined/actions/runs/undefined#artifacts

      Details:
      ```json
      [
  {
    "workerIndex": 3,
    "parallelIndex": 3,
    "status": "failed",
    "duration": 5400,
    "error": {
      "message": "Error: \^[[2mexpect(\^[[22m\^[[31mreceived\^[[39m\^[[2m).\^[[22mtoBeFalsy\^[[2m()\^[[22m\n\nReceived: \^[[31mtrue\^[[39m\n\nCall Log:\n- Timeout 3000ms exceeded while waiting on the predicate",
      "stack": "Error: \^[[2mexpect(\^[[22m\^[[31mreceived\^[[39m\^[[2m).\^[[22mtoBeFalsy\^[[2m()\^[[22m\n\nReceived: \^[[31mtrue\^[[39m\n\nCall Log:\n- Timeout 3000ms exceeded while waiting on the predicate\n    at /Users/deasialittle/Documents/GitHub/cs673olf25project-cs673olf25_team1/tests/e2e/typing-indicator.spec.ts:75:3",
      "location": {
        "file": "/Users/deasialittle/Documents/GitHub/cs673olf25project-cs673olf25_team1/tests/e2e/typing-indicator.spec.ts",
        "column": 3,
        "line": 75
      },
      "snippet": "\^[[0m \^[[90m 73 |\^[[39m\n \^[[90m 74 |\^[[39m   \^[[90m// Indicator should not be shown to the typist\^[[39m\n\^[[31m\^[[1m>\^[[22m\^[[39m\^[[90m 75 |\^[[39m   \^[[36mawait\^[[39m expect\^[[33m.\^[[39mpoll(() \^[[33m=>\^[[39m indicatorIsVisible(page)\^[[33m,\^[[39m { timeout\^[[33m:\^[[39m \^[[35m3000\^[[39m })\^[[33m.\^[[39mtoBeFalsy()\^[[33m;\^[[39m\n \^[[90m    |\^[[39m   \^[[31m\^[[1m^\^[[22m\^[[39m\n \^[[90m 76 |\^[[39m })\^[[33m;\^[[39m\n \^[[90m 77 |\^[[39m\n \^[[90m 78 |\^[[39m \^[[90m// AT-5: Indicator resets after reload\^[[39m\^[[0m"
    },
    "errors": [
      {
        "location": {
          "file": "/Users/deasialittle/Documents/GitHub/cs673olf25project-cs673olf25_team1/tests/e2e/typing-indicator.spec.ts",
          "column": 3,
          "line": 75
        },
        "message": "Error: \^[[2mexpect(\^[[22m\^[[31mreceived\^[[39m\^[[2m).\^[[22mtoBeFalsy\^[[2m()\^[[22m\n\nReceived: \^[[31mtrue\^[[39m\n\nCall Log:\n- Timeout 3000ms exceeded while waiting on the predicate\n\n\^[[0m \^[[90m 73 |\^[[39m\n \^[[90m 74 |\^[[39m   \^[[90m// Indicator should not be shown to the typist\^[[39m\n\^[[31m\^[[1m>\^[[22m\^[[39m\^[[90m 75 |\^[[39m   \^[[36mawait\^[[39m expect\^[[33m.\^[[39mpoll(() \^[[33m=>\^[[39m indicatorIsVisible(page)\^[[33m,\^[[39m { timeout\^[[33m:\^[[39m \^[[35m3000\^[[39m })\^[[33m.\^[[39mtoBeFalsy()\^[[33m;\^[[39m\n \^[[90m    |\^[[39m   \^[[31m\^[[1m^\^[[22m\^[[39m\n \^[[90m 76 |\^[[39m })\^[[33m;\^[[39m\n \^[[90m 77 |\^[[39m\n \^[[90m 78 |\^[[39m \^[[90m// AT-5: Indicator resets after reload\^[[39m\^[[0m\n\^[[2m    at /Users/deasialittle/Documents/GitHub/cs673olf25project-cs673olf25_team1/tests/e2e/typing-indicator.spec.ts:75:3\^[[22m"
      }
    ],
    "stdout": [],
    "stderr": [],
    "retry": 0,
    "steps": [
      {
        "title": "Expect \"poll toBeFalsy\"",
        "duration": 2884,
        "error": {
          "message": "Error: \^[[2mexpect(\^[[22m\^[[31mreceived\^[[39m\^[[2m).\^[[22mtoBeFalsy\^[[2m()\^[[22m\n\nReceived: \^[[31mtrue\^[[39m\n\nCall Log:\n- Timeout 3000ms exceeded while waiting on the predicate",
          "stack": "Error: \^[[2mexpect(\^[[22m\^[[31mreceived\^[[39m\^[[2m).\^[[22mtoBeFalsy\^[[2m()\^[[22m\n\nReceived: \^[[31mtrue\^[[39m\n\nCall Log:\n- Timeout 3000ms exceeded while waiting on the predicate\n    at /Users/deasialittle/Documents/GitHub/cs673olf25project-cs673olf25_team1/tests/e2e/typing-indicator.spec.ts:75:3",
          "location": {
            "file": "/Users/deasialittle/Documents/GitHub/cs673olf25project-cs673olf25_team1/tests/e2e/typing-indicator.spec.ts",
            "column": 3,
            "line": 75
          },
          "snippet": "\^[[0m \^[[90m 73 |\^[[39m\n \^[[90m 74 |\^[[39m   \^[[90m// Indicator should not be shown to the typist\^[[39m\n\^[[31m\^[[1m>\^[[22m\^[[39m\^[[90m 75 |\^[[39m   \^[[36mawait\^[[39m expect\^[[33m.\^[[39mpoll(() \^[[33m=>\^[[39m indicatorIsVisible(page)\^[[33m,\^[[39m { timeout\^[[33m:\^[[39m \^[[35m3000\^[[39m })\^[[33m.\^[[39mtoBeFalsy()\^[[33m;\^[[39m\n \^[[90m    |\^[[39m   \^[[31m\^[[1m^\^[[22m\^[[39m\n \^[[90m 76 |\^[[39m })\^[[33m;\^[[39m\n \^[[90m 77 |\^[[39m\n \^[[90m 78 |\^[[39m \^[[90m// AT-5: Indicator resets after reload\^[[39m\^[[0m"
        }
      }
    ],
    "startTime": "2025-09-28T01:33:39.103Z",
    "annotations": [],
    "attachments": [
      {
        "name": "screenshot",
        "contentType": "image/png",
        "path": "/Users/deasialittle/Documents/GitHub/cs673olf25project-cs673olf25_team1/test-results/typing-indicator-AT-4-Typi-a44c6-not-see-their-own-indicator-chromium/test-failed-1.png"
      },
      {
        "name": "video",
        "contentType": "video/webm",
        "path": "/Users/deasialittle/Documents/GitHub/cs673olf25project-cs673olf25_team1/test-results/typing-indicator-AT-4-Typi-a44c6-not-see-their-own-indicator-chromium/video.webm"
      },
      {
        "name": "error-context",
        "contentType": "text/markdown",
        "path": "/Users/deasialittle/Documents/GitHub/cs673olf25project-cs673olf25_team1/test-results/typing-indicator-AT-4-Typi-a44c6-not-see-their-own-indicator-chromium/error-context.md"
      }
    ],
    "errorLocation": {
      "file": "/Users/deasialittle/Documents/GitHub/cs673olf25project-cs673olf25_team1/tests/e2e/typing-indicator.spec.ts",
      "column": 3,
      "line": 75
    }
  }
]
      ```

---

## Test Failed: AT-4: Typist does not see their own indicator
**Labels:** automated-defect

Test Name: AT-4: Typist does not see their own indicator
File: typing-indicator.spec.ts

Screenshot:
`No screenshot found`

Playwright Report:
`tests/playwright-report/index.html`

Details:
```json
[
  {
    "workerIndex": 3,
    "parallelIndex": 3,
    "status": "failed",
    "duration": 5400,
    "error": {
      "message": "Error: \^[[2mexpect(\^[[22m\^[[31mreceived\^[[39m\^[[2m).\^[[22mtoBeFalsy\^[[2m()\^[[22m\n\nReceived: \^[[31mtrue\^[[39m\n\nCall Log:\n- Timeout 3000ms exceeded while waiting on the predicate",
      "stack": "Error: \^[[2mexpect(\^[[22m\^[[31mreceived\^[[39m\^[[2m).\^[[22mtoBeFalsy\^[[2m()\^[[22m\n\nReceived: \^[[31mtrue\^[[39m\n\nCall Log:\n- Timeout 3000ms exceeded while waiting on the predicate\n    at /Users/deasialittle/Documents/GitHub/cs673olf25project-cs673olf25_team1/tests/e2e/typing-indicator.spec.ts:75:3",
      "location": {
        "file": "/Users/deasialittle/Documents/GitHub/cs673olf25project-cs673olf25_team1/tests/e2e/typing-indicator.spec.ts",
        "column": 3,
        "line": 75
      },
      "snippet": "\^[[0m \^[[90m 73 |\^[[39m\n \^[[90m 74 |\^[[39m   \^[[90m// Indicator should not be shown to the typist\^[[39m\n\^[[31m\^[[1m>\^[[22m\^[[39m\^[[90m 75 |\^[[39m   \^[[36mawait\^[[39m expect\^[[33m.\^[[39mpoll(() \^[[33m=>\^[[39m indicatorIsVisible(page)\^[[33m,\^[[39m { timeout\^[[33m:\^[[39m \^[[35m3000\^[[39m })\^[[33m.\^[[39mtoBeFalsy()\^[[33m;\^[[39m\n \^[[90m    |\^[[39m   \^[[31m\^[[1m^\^[[22m\^[[39m\n \^[[90m 76 |\^[[39m })\^[[33m;\^[[39m\n \^[[90m 77 |\^[[39m\n \^[[90m 78 |\^[[39m \^[[90m// AT-5: Indicator resets after reload\^[[39m\^[[0m"
    },
    "errors": [
      {
        "location": {
          "file": "/Users/deasialittle/Documents/GitHub/cs673olf25project-cs673olf25_team1/tests/e2e/typing-indicator.spec.ts",
          "column": 3,
          "line": 75
        },
        "message": "Error: \^[[2mexpect(\^[[22m\^[[31mreceived\^[[39m\^[[2m).\^[[22mtoBeFalsy\^[[2m()\^[[22m\n\nReceived: \^[[31mtrue\^[[39m\n\nCall Log:\n- Timeout 3000ms exceeded while waiting on the predicate\n\n\^[[0m \^[[90m 73 |\^[[39m\n \^[[90m 74 |\^[[39m   \^[[90m// Indicator should not be shown to the typist\^[[39m\n\^[[31m\^[[1m>\^[[22m\^[[39m\^[[90m 75 |\^[[39m   \^[[36mawait\^[[39m expect\^[[33m.\^[[39mpoll(() \^[[33m=>\^[[39m indicatorIsVisible(page)\^[[33m,\^[[39m { timeout\^[[33m:\^[[39m \^[[35m3000\^[[39m })\^[[33m.\^[[39mtoBeFalsy()\^[[33m;\^[[39m\n \^[[90m    |\^[[39m   \^[[31m\^[[1m^\^[[22m\^[[39m\n \^[[90m 76 |\^[[39m })\^[[33m;\^[[39m\n \^[[90m 77 |\^[[39m\n \^[[90m 78 |\^[[39m \^[[90m// AT-5: Indicator resets after reload\^[[39m\^[[0m\n\^[[2m    at /Users/deasialittle/Documents/GitHub/cs673olf25project-cs673olf25_team1/tests/e2e/typing-indicator.spec.ts:75:3\^[[22m"
      }
    ],
    "stdout": [],
    "stderr": [],
    "retry": 0,
    "steps": [
      {
        "title": "Expect \"poll toBeFalsy\"",
        "duration": 2884,
        "error": {
          "message": "Error: \^[[2mexpect(\^[[22m\^[[31mreceived\^[[39m\^[[2m).\^[[22mtoBeFalsy\^[[2m()\^[[22m\n\nReceived: \^[[31mtrue\^[[39m\n\nCall Log:\n- Timeout 3000ms exceeded while waiting on the predicate",
          "stack": "Error: \^[[2mexpect(\^[[22m\^[[31mreceived\^[[39m\^[[2m).\^[[22mtoBeFalsy\^[[2m()\^[[22m\n\nReceived: \^[[31mtrue\^[[39m\n\nCall Log:\n- Timeout 3000ms exceeded while waiting on the predicate\n    at /Users/deasialittle/Documents/GitHub/cs673olf25project-cs673olf25_team1/tests/e2e/typing-indicator.spec.ts:75:3",
          "location": {
            "file": "/Users/deasialittle/Documents/GitHub/cs673olf25project-cs673olf25_team1/tests/e2e/typing-indicator.spec.ts",
            "column": 3,
            "line": 75
          },
          "snippet": "\^[[0m \^[[90m 73 |\^[[39m\n \^[[90m 74 |\^[[39m   \^[[90m// Indicator should not be shown to the typist\^[[39m\n\^[[31m\^[[1m>\^[[22m\^[[39m\^[[90m 75 |\^[[39m   \^[[36mawait\^[[39m expect\^[[33m.\^[[39mpoll(() \^[[33m=>\^[[39m indicatorIsVisible(page)\^[[33m,\^[[39m { timeout\^[[33m:\^[[39m \^[[35m3000\^[[39m })\^[[33m.\^[[39mtoBeFalsy()\^[[33m;\^[[39m\n \^[[90m    |\^[[39m   \^[[31m\^[[1m^\^[[22m\^[[39m\n \^[[90m 76 |\^[[39m })\^[[33m;\^[[39m\n \^[[90m 77 |\^[[39m\n \^[[90m 78 |\^[[39m \^[[90m// AT-5: Indicator resets after reload\^[[39m\^[[0m"
        }
      }
    ],
    "startTime": "2025-09-28T01:33:39.103Z",
    "annotations": [],
    "attachments": [
      {
        "name": "screenshot",
        "contentType": "image/png",
        "path": "/Users/deasialittle/Documents/GitHub/cs673olf25project-cs673olf25_team1/test-results/typing-indicator-AT-4-Typi-a44c6-not-see-their-own-indicator-chromium/test-failed-1.png"
      },
      {
        "name": "video",
        "contentType": "video/webm",
        "path": "/Users/deasialittle/Documents/GitHub/cs673olf25project-cs673olf25_team1/test-results/typing-indicator-AT-4-Typi-a44c6-not-see-their-own-indicator-chromium/video.webm"
      },
      {
        "name": "error-context",
        "contentType": "text/markdown",
        "path": "/Users/deasialittle/Documents/GitHub/cs673olf25project-cs673olf25_team1/test-results/typing-indicator-AT-4-Typi-a44c6-not-see-their-own-indicator-chromium/error-context.md"
      }
    ],
    "errorLocation": {
      "file": "/Users/deasialittle/Documents/GitHub/cs673olf25project-cs673olf25_team1/tests/e2e/typing-indicator.spec.ts",
      "column": 3,
      "line": 75
    }
  }
]
```

---

## Test Failed: AT-4: Typist does not see their own indicator
**Labels:** automated-defect

**Test Name:** AT-4: Typist does not see their own indicator
**File:** typing-indicator.spec.ts

Details:
```json
[
  {
    "workerIndex": 3,
    "parallelIndex": 3,
    "status": "failed",
    "duration": 5400,
    "error": {
      "message": "Error: \^[[2mexpect(\^[[22m\^[[31mreceived\^[[39m\^[[2m).\^[[22mtoBeFalsy\^[[2m()\^[[22m\n\nReceived: \^[[31mtrue\^[[39m\n\nCall Log:\n- Timeout 3000ms exceeded while waiting on the predicate",
      "stack": "Error: \^[[2mexpect(\^[[22m\^[[31mreceived\^[[39m\^[[2m).\^[[22mtoBeFalsy\^[[2m()\^[[22m\n\nReceived: \^[[31mtrue\^[[39m\n\nCall Log:\n- Timeout 3000ms exceeded while waiting on the predicate\n    at /Users/deasialittle/Documents/GitHub/cs673olf25project-cs673olf25_team1/tests/e2e/typing-indicator.spec.ts:75:3",
      "location": {
        "file": "/Users/deasialittle/Documents/GitHub/cs673olf25project-cs673olf25_team1/tests/e2e/typing-indicator.spec.ts",
        "column": 3,
        "line": 75
      },
      "snippet": "\^[[0m \^[[90m 73 |\^[[39m\n \^[[90m 74 |\^[[39m   \^[[90m// Indicator should not be shown to the typist\^[[39m\n\^[[31m\^[[1m>\^[[22m\^[[39m\^[[90m 75 |\^[[39m   \^[[36mawait\^[[39m expect\^[[33m.\^[[39mpoll(() \^[[33m=>\^[[39m indicatorIsVisible(page)\^[[33m,\^[[39m { timeout\^[[33m:\^[[39m \^[[35m3000\^[[39m })\^[[33m.\^[[39mtoBeFalsy()\^[[33m;\^[[39m\n \^[[90m    |\^[[39m   \^[[31m\^[[1m^\^[[22m\^[[39m\n \^[[90m 76 |\^[[39m })\^[[33m;\^[[39m\n \^[[90m 77 |\^[[39m\n \^[[90m 78 |\^[[39m \^[[90m// AT-5: Indicator resets after reload\^[[39m\^[[0m"
    },
    "errors": [
      {
        "location": {
          "file": "/Users/deasialittle/Documents/GitHub/cs673olf25project-cs673olf25_team1/tests/e2e/typing-indicator.spec.ts",
          "column": 3,
          "line": 75
        },
        "message": "Error: \^[[2mexpect(\^[[22m\^[[31mreceived\^[[39m\^[[2m).\^[[22mtoBeFalsy\^[[2m()\^[[22m\n\nReceived: \^[[31mtrue\^[[39m\n\nCall Log:\n- Timeout 3000ms exceeded while waiting on the predicate\n\n\^[[0m \^[[90m 73 |\^[[39m\n \^[[90m 74 |\^[[39m   \^[[90m// Indicator should not be shown to the typist\^[[39m\n\^[[31m\^[[1m>\^[[22m\^[[39m\^[[90m 75 |\^[[39m   \^[[36mawait\^[[39m expect\^[[33m.\^[[39mpoll(() \^[[33m=>\^[[39m indicatorIsVisible(page)\^[[33m,\^[[39m { timeout\^[[33m:\^[[39m \^[[35m3000\^[[39m })\^[[33m.\^[[39mtoBeFalsy()\^[[33m;\^[[39m\n \^[[90m    |\^[[39m   \^[[31m\^[[1m^\^[[22m\^[[39m\n \^[[90m 76 |\^[[39m })\^[[33m;\^[[39m\n \^[[90m 77 |\^[[39m\n \^[[90m 78 |\^[[39m \^[[90m// AT-5: Indicator resets after reload\^[[39m\^[[0m\n\^[[2m    at /Users/deasialittle/Documents/GitHub/cs673olf25project-cs673olf25_team1/tests/e2e/typing-indicator.spec.ts:75:3\^[[22m"
      }
    ],
    "stdout": [],
    "stderr": [],
    "retry": 0,
    "steps": [
      {
        "title": "Expect \"poll toBeFalsy\"",
        "duration": 2884,
        "error": {
          "message": "Error: \^[[2mexpect(\^[[22m\^[[31mreceived\^[[39m\^[[2m).\^[[22mtoBeFalsy\^[[2m()\^[[22m\n\nReceived: \^[[31mtrue\^[[39m\n\nCall Log:\n- Timeout 3000ms exceeded while waiting on the predicate",
          "stack": "Error: \^[[2mexpect(\^[[22m\^[[31mreceived\^[[39m\^[[2m).\^[[22mtoBeFalsy\^[[2m()\^[[22m\n\nReceived: \^[[31mtrue\^[[39m\n\nCall Log:\n- Timeout 3000ms exceeded while waiting on the predicate\n    at /Users/deasialittle/Documents/GitHub/cs673olf25project-cs673olf25_team1/tests/e2e/typing-indicator.spec.ts:75:3",
          "location": {
            "file": "/Users/deasialittle/Documents/GitHub/cs673olf25project-cs673olf25_team1/tests/e2e/typing-indicator.spec.ts",
            "column": 3,
            "line": 75
          },
          "snippet": "\^[[0m \^[[90m 73 |\^[[39m\n \^[[90m 74 |\^[[39m   \^[[90m// Indicator should not be shown to the typist\^[[39m\n\^[[31m\^[[1m>\^[[22m\^[[39m\^[[90m 75 |\^[[39m   \^[[36mawait\^[[39m expect\^[[33m.\^[[39mpoll(() \^[[33m=>\^[[39m indicatorIsVisible(page)\^[[33m,\^[[39m { timeout\^[[33m:\^[[39m \^[[35m3000\^[[39m })\^[[33m.\^[[39mtoBeFalsy()\^[[33m;\^[[39m\n \^[[90m    |\^[[39m   \^[[31m\^[[1m^\^[[22m\^[[39m\n \^[[90m 76 |\^[[39m })\^[[33m;\^[[39m\n \^[[90m 77 |\^[[39m\n \^[[90m 78 |\^[[39m \^[[90m// AT-5: Indicator resets after reload\^[[39m\^[[0m"
        }
      }
    ],
    "startTime": "2025-09-28T01:33:39.103Z",
    "annotations": [],
    "attachments": [
      {
        "name": "screenshot",
        "contentType": "image/png",
        "path": "/Users/deasialittle/Documents/GitHub/cs673olf25project-cs673olf25_team1/test-results/typing-indicator-AT-4-Typi-a44c6-not-see-their-own-indicator-chromium/test-failed-1.png"
      },
      {
        "name": "video",
        "contentType": "video/webm",
        "path": "/Users/deasialittle/Documents/GitHub/cs673olf25project-cs673olf25_team1/test-results/typing-indicator-AT-4-Typi-a44c6-not-see-their-own-indicator-chromium/video.webm"
      },
      {
        "name": "error-context",
        "contentType": "text/markdown",
        "path": "/Users/deasialittle/Documents/GitHub/cs673olf25project-cs673olf25_team1/test-results/typing-indicator-AT-4-Typi-a44c6-not-see-their-own-indicator-chromium/error-context.md"
      }
    ],
    "errorLocation": {
      "file": "/Users/deasialittle/Documents/GitHub/cs673olf25project-cs673olf25_team1/tests/e2e/typing-indicator.spec.ts",
      "column": 3,
      "line": 75
    }
  }
]
```

---
