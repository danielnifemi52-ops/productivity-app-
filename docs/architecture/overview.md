# Productivity Control Architecture Overview

## Frontend (Flutter)
- Clean architecture by feature.
- Platform bridge folders reserved for Android services:
  - Accessibility/usage stats detection
  - Overlay rendering
  - Device admin and policy enforcement

## Backend (Node.js + Express + MongoDB)
- Modular domain structure under `src/modules`.
- Shared core middleware and config in `src/core` + `src/config`.
- Engine-specific routes exposed via `/api/app-block`, `/api/safe-block`, `/api/macro-automation`.
