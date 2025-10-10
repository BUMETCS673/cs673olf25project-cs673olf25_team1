#!/bin/bash

#AI-generated-code: 100% (tool: QA Metrics, Used AI to generate script to count functions in code base
#AI chat link: https://chatgpt.com/share/68d8a0d5-09a4-8013-a871-052c83584c2a)
#Human code: 0% 
#Framework generated code: 0%

set -e  # Exit on any error

echo "Running LOC count"

echo "Frontend LOC"
cloc chit-chat-ui/src --quiet

echo "Backend LOC"
cloc api/src --quiet

echo "Test LOC"
TEST_DIRS=(
  tests/e2e
)

for dir in "${TEST_DIRS[@]}"; do
  if [ -d "$dir" ]; then
    echo "From $dir:"
    cloc "$dir" --quiet
    echo
  fi
done

echo "All scattered *.spec/test.* files:"
cloc . --include-ext=ts,tsx,js,jsx --match-f='.*(spec|test)\.(ts|js|tsx|jsx)$' --quiet

echo
