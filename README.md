# LinkedIn Job Search Automation Agent

A browser-only React + TypeScript assistant for organizing LinkedIn job searches. It helps you track roles, open LinkedIn job pages, draft application messages, copy those drafts, and mark each role as saved, ready, or applied.

> This project intentionally keeps the final application action manual. It does not take control of another browser tab, scrape LinkedIn, or submit applications on your behalf.

## Features

- Browser-only Vite React app
- Job pipeline with saved, ready-to-apply, and applied states
- Editable job details and LinkedIn posting URL
- Cover-letter style draft generation from role and company fields
- Clipboard copy action for pasting into LinkedIn application forms
- Responsive dashboard layout

## Getting started

```bash
npm install
npm run dev
```

Open the local Vite URL in your browser, then use **Open LinkedIn Jobs** to launch LinkedIn in another tab.

## Build

```bash
npm run build
```

## Test

```bash
npm test
npm run test:e2e
```
