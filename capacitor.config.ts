import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.gridgliders.app',   // unique ID
  appName: 'GridGliders',
  webDir: 'dist',                 // this points to your Vite build output
  bundledWebRuntime: false
};

export default config;

