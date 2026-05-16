# AI Smart Hair & Beard Mirror (Phase 1 MVP)

Electron + React + TypeScript desktop MVP for realtime virtual hairstyle/beard try-on.

## Implemented in this milestone

- Electron desktop shell with secure preload bridge
- React renderer with mirrored webcam preview
- Selectable hairstyle and beard overlays (3 each)
- Zustand-based style state management
- Modular folder structure for future MediaPipe/Three.js expansion

## Getting started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Test

```bash
npm test
npm run test:e2e
```

## Next steps

1. Integrate MediaPipe Face Landmarker and bind overlays to landmarks.
2. Replace static overlay coordinates with landmark-driven transforms.
3. Add screenshot save via Electron IPC.
4. Add swipe/search UI and style categories.
5. Add FPS/latency instrumentation and optimization pass.
