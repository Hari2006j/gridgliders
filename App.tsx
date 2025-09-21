
import React, { useState, useEffect } from 'react';
import { Splash } from './components/Splash';
import { Login } from './components/Login';
import { Dashboard } from './components/Dashboard';
import { AppState } from './types';

function App() {
  const [appState, setAppState] = useState<AppState>(AppState.SPLASH);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAppState(AppState.LOGIN);
    }, 3000); // Splash screen duration

    return () => clearTimeout(timer);
  }, []);

  const handleLoginSuccess = () => {
    setAppState(AppState.DASHBOARD);
  };

  const renderContent = () => {
    switch (appState) {
      case AppState.SPLASH:
        return <Splash />;
      case AppState.LOGIN:
        return <Login onLoginSuccess={handleLoginSuccess} />;
      case AppState.DASHBOARD:
        return <Dashboard />;
      default:
        return <Login onLoginSuccess={handleLoginSuccess} />;
    }
  };

  return <div className="App">{renderContent()}</div>;
}

export default App;
