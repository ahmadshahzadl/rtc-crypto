import React from 'react';
import { Homepage } from './pages';
import { useSmoothScrolling } from './hooks/useSmoothScrolling';
import { ThemeProvider } from './contexts/ThemeContext';

const App: React.FC = () => {
  // Initialize smooth scrolling
  useSmoothScrolling();

  return (
    <ThemeProvider>
      <div>
        <Homepage />
      </div>
    </ThemeProvider>
  );
};

export default App;