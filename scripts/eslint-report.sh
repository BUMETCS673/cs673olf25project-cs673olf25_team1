#!/bin/bash

#AI-generated-code: 100% (tool: QA Metrics, Used AI to generate script to count functions in code base
#AI chat link: https://chatgpt.com/share/68d8a0d5-09a4-8013-a871-052c83584c2a)
#Human code: 0% 
#Framework generated code: 0%
cd "$(dirname "$0")/.."
set -e

echo "Running ESLint..."

# Output file
OUTPUT_FILE="eslint-report.txt"

# Clear previous report
rm -f $OUTPUT_FILE

# Run ESLint on all relevant folders and save output
npx eslint api/src --ext .ts --format stylish --max-warnings=0 | tee -a $OUTPUT_FILE
npx eslint chit-chat-ui/src --ext .ts,.tsx --format stylish --max-warnings=0 | tee -a $OUTPUT_FILE
npx eslint tests/e2e --ext .ts,.tsx --format stylish --max-warnings=0 | tee -a $OUTPUT_FILE

echo ""
echo "ESLint complete. Report saved to: $OUTPUT_FILE"