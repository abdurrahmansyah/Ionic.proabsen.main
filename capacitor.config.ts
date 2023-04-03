import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ridhtech.proabsen.main',
  appName: 'Pro Absen',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    GoogleAuth: {
      scopes: ['profile', 'email'],
      serverClientId: '1026249500132-gds95ddmuqbeff2o9airg6q1gfs4n36j.apps.googleusercontent.com',
      forceCodeForRefreshToken: true,
    },
  }
};

export default config;
