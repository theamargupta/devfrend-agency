#!/usr/bin/env bash
set -euo pipefail
input="$(cat)"
file="$(printf '%s' "$input" | sed -n 's/.*"file_path"[[:space:]]*:[[:space:]]*"\([^"]*\)".*/\1/p')"
case "$file" in
  *.ts|*.tsx)
    if [ -f "$file" ]; then
      (cd "$(dirname "$0")/../.." && npx --no-install eslint "$file" 2>&1) || true
    fi
    ;;
esac
exit 0
