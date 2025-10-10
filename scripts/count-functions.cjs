/*
AI-generated-code: 100% (tool: QA Metrics, Used AI to generate script to count functions in code base
AI chat link: https://chatgpt.com/share/68d8a0d5-09a4-8013-a871-052c83584c2a)
Human code: 0% 
Framework generated code: 0%
*/

const { Project, SyntaxKind } = require("ts-morph");

const project = new Project({
  tsConfigFilePath: "tsconfig.scripts.json", // Use your scripts-specific config
});

const fileGlobs = [
  "api/src/**/*.{ts,tsx,js,jsx}",
  "chit-chat-ui/src/**/*.{ts,tsx,js,jsx}",
  "tests/e2e/**/*.{ts,tsx,js,jsx}",
];

let totalCount = 0;

console.log("Function count by file:\n");

for (const filePath of fileGlobs) {
  const sourceFiles = project.addSourceFilesAtPaths(filePath);

  for (const sourceFile of sourceFiles) {
    const functionDeclarations = sourceFile.getFunctions().length;
    const arrowFunctions = sourceFile.getDescendantsOfKind(SyntaxKind.ArrowFunction).length;
    const functionExpressions = sourceFile.getDescendantsOfKind(SyntaxKind.FunctionExpression).length;
    const methods = sourceFile.getDescendantsOfKind(SyntaxKind.MethodDeclaration).length;

    const count =
      functionDeclarations + arrowFunctions + functionExpressions + methods;

    if (count > 0) {
      console.log(`${sourceFile.getFilePath()}: ${count} function(s)`);
      totalCount += count;
    }
  }
}

console.log(`\nTotal number of functions: ${totalCount}`);