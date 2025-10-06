const fs = require("fs");
const path = require("path");

const reportDir = path.join("tests", "e2e", "playwright-report");
const jsonPath = path.join(reportDir, "results.json");
const mdPath = path.join(reportDir, "summary.md");
const htmlPath = path.join(reportDir, "summary.html");

if (!fs.existsSync(jsonPath)) {
  console.error(`Cannot find ${jsonPath}. Did the tests run?`);
  process.exit(1);
}

const data = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
const esc = (s) => (s || "").toString().trim();

let totalPassed = 0,
  totalFailed = 0,
  totalSkipped = 0;

for (const suite of data.suites || []) {
  for (const spec of suite.specs || []) {
    for (const test of spec.tests || []) {
      const r0 = test.results?.[0];
      if (!r0) continue;
      if (r0.status === "passed") totalPassed++;
      else if (r0.status === "skipped") totalSkipped++;
      else totalFailed++;
    }
  }
}

// === BUILD MARKDOWN ===
let md = `# Playwright Test Report Summary\n\n`;
md += `**Generated:** ${new Date().toLocaleString()}\n\n`;
md += `| Status | Count |\n|--------|-------|\n`;
md += `| Passed | ${totalPassed} |\n`;
md += `| Failed | ${totalFailed} |\n`;
md += `| Skipped | ${totalSkipped} |\n\n`;
md += `---\n\n`;

for (const suite of data.suites || []) {
  md += `## ${suite.title || "Unnamed Suite"}\n\n`;
  let passed = 0,
    failed = 0,
    skipped = 0;

  for (const spec of suite.specs || []) {
    for (const test of spec.tests || []) {
      const r0 = test.results?.[0];
      if (!r0) continue;
      if (r0.status === "passed") passed++;
      else if (r0.status === "skipped") skipped++;
      else failed++;
    }
  }

  md += `**Summary:** Passed: ${passed} | Failed: ${failed} | Skipped: ${skipped}\n\n`;

  const failedTests = [];
  for (const spec of suite.specs || []) {
    for (const test of spec.tests || []) {
      const fr = test.results?.find((r) => r.status === "failed");
      if (fr) failedTests.push({ title: test.title, result: fr });
    }
  }

  if (failedTests.length) {
    md += `### Failed Tests\n`;
    for (const [i, ft] of failedTests.entries()) {
      const msg = esc(ft.result.error?.message || "No error message");
      md += `**${i + 1}. ${ft.title}**\n\n`;
      md += `\`\`\`\n${msg}\n\`\`\`\n`;
      const attachments = (ft.result.attachments || [])
        .filter((a) => a.path)
        .map(
          (a) =>
            `- [${a.name || path.basename(a.path)}](${path.relative(
              reportDir,
              a.path
            )})`
        )
        .join("\n");
      if (attachments) md += `**Attachments:**\n${attachments}\n\n`;
    }
  }

  md += `---\n\n`;
}

// === BUILD HTML ===
let html = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>Playwright Test Summary</title>
<style>
  body { font-family: Arial, sans-serif; background: #fafafa; color: #222; margin: 40px; }
  h1, h2, h3 { color: #333; }
  table { border-collapse: collapse; width: 50%; margin-bottom: 20px; }
  th, td { border: 1px solid #ccc; padding: 6px 12px; text-align: left; }
  tr:nth-child(even) { background: #f2f2f2; }
  details { margin-bottom: 12px; background: #fff; border: 1px solid #ddd; padding: 10px; border-radius: 6px; }
  summary { font-weight: bold; cursor: pointer; }
  code { background: #eee; padding: 2px 6px; border-radius: 4px; display: block; white-space: pre-wrap; margin-top: 4px; }
  .passed { color: green; }
  .failed { color: red; }
  .skipped { color: orange; }
</style>
</head>
<body>
<h1>Playwright Test Report Summary</h1>
<p><strong>Generated:</strong> ${new Date().toLocaleString()}</p>
<table>
  <tr><th>Status</th><th>Count</th></tr>
  <tr><td class="passed">Passed</td><td>${totalPassed}</td></tr>
  <tr><td class="failed">Failed</td><td>${totalFailed}</td></tr>
  <tr><td class="skipped">Skipped</td><td>${totalSkipped}</td></tr>
</table>
`;

for (const suite of data.suites || []) {
  let passed = 0,
    failed = 0,
    skipped = 0;
  for (const spec of suite.specs || []) {
    for (const test of spec.tests || []) {
      const r0 = test.results?.[0];
      if (!r0) continue;
      if (r0.status === "passed") passed++;
      else if (r0.status === "skipped") skipped++;
      else failed++;
    }
  }

  html += `<h2>${suite.title || "Unnamed Suite"}</h2>`;
  html += `<p><strong>Summary:</strong> <span class="passed">Passed: ${passed}</span> | <span class="failed">Failed: ${failed}</span> | <span class="skipped">Skipped: ${skipped}</span></p>`;

  const failedTests = [];
  for (const spec of suite.specs || []) {
    for (const test of spec.tests || []) {
      const fr = test.results?.find((r) => r.status === "failed");
      if (fr) failedTests.push({ title: test.title, result: fr });
    }
  }

  if (failedTests.length) {
    html += `<h3>Failed Tests</h3>`;
    failedTests.forEach((ft, i) => {
      html += `<details><summary>${i + 1}. ${ft.title}</summary>`;
      html += `<code>${esc(ft.result.error?.message || "No error message")}</code>`;
      const attachments = (ft.result.attachments || [])
        .filter((a) => a.path)
        .map(
          (a) =>
            `<li><a href="${path.relative(
              reportDir,
              a.path
            )}" target="_blank">${a.name || path.basename(a.path)}</a></li>`
        )
        .join("");
      if (attachments) html += `<ul>${attachments}</ul>`;
      html += `</details>`;
    });
  }
}

html += `
</body>
</html>
`;

// === Write outputs ===
fs.writeFileSync(mdPath, md, "utf8");
fs.writeFileSync(htmlPath, html, "utf8");

// === also embed summaries into JSON ===
const merged = { ...data, markdownSummary: md, htmlSummary: html };
fs.writeFileSync(jsonPath, JSON.stringify(merged, null, 2));

console.log(`Readable summaries written to:
- ${mdPath}
- ${htmlPath}
And embedded in: ${jsonPath}`);