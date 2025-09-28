/*
AI-generated-code: 95% (tool: Automate GitHub defects, AI chat link: https://chatgpt.com/share/68d89fef-79bc-8013-8e7f-b0053226ebdb)
Human code: 5% (tool: gh CLI, Debugged the creating and conducted local testing of automating issue creation)
Framework generated code: 0%
*/
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const reportPath = 'tests/playwright-report/results.json'; 

if (!fs.existsSync(reportPath)) {
  console.error('Playwright JSON report not found.');
  process.exit(1);
}

const data = JSON.parse(fs.readFileSync(reportPath, 'utf8'));

// Fetch existing open issues with the label to prevent duplicates
let existingTitles = [];
try {
  const existingRaw = execSync('gh issue list --label "automated-defect" --state open --json title', { encoding: 'utf8' });
  existingTitles = JSON.parse(existingRaw).map(issue => issue.title);
} catch (err) {
  console.error('Failed to fetch existing issues:', err.message);
}

// Try to create the label (safe even if it already exists)
try {
  execSync('gh label create "automated-defect" --description "Created automatically from test failures" --color "FF0000"', { stdio: 'ignore' });
} catch (err) {
  // Label likely already exists — ignore
}

data.suites.forEach((suite) => {
  suite.specs.forEach((spec) => {
    spec.tests.forEach((test) => {
      const failed = test.results.some(r => r.status === 'failed');
      if (!failed) return;

      const title = `Test Failed: ${spec.title}`;
      if (existingTitles.includes(title)) {
        console.log(`Issue already exists: ${title}`);
        return;
      }
      const path = require('path');
      const runId = process.argv[2];
      const repo = process.env.GITHUB_REPOSITORY;
      const artifactsLink = `https://github.com/${repo}/actions/runs/${runId}#artifacts`;
      const screenshotNote = 'Screenshot attached in GitHub Actions artifacts (if available)';
      const htmlReportLink = `${artifactsLink}`;
      
      const body = `
      Test Name: ${spec.title}
      File: ${spec.file}

      Screenshot:
      ${screenshotNote}

      Playwright Report:
      ${htmlReportLink}

      Details:
      \`\`\`json
      ${JSON.stringify(test.results, null, 2)}
      \`\`\`
      `.trim();

      console.log(`Creating issue: ${title}`);
      try {
        execSync(`gh issue create --title "${title}" --label "automated-defect" -F -`, {
          input: body,
          stdio: ['pipe', 'inherit', 'inherit']
        });
        console.log(`Would create issue:\n\nTitle: ${title}\n\nBody:\n${body}`);
      } catch (err) {
        console.error(`Failed to create issue for: ${title}`);
        console.error(err.message);
      }
    });
  });
});