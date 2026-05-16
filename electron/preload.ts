import { contextBridge } from 'electron';

contextBridge.exposeInMainWorld('smartMirror', {
  version: '0.1.0'
});
