import { GlobalStyle, ThemeProvider } from '@react95/core';
import Taskbar from './components/taskbar/Taskbar';
import DataContext from './contexts/dataContext';
import { createGlobalStyle } from 'styled-components';
import '@react95/icons/icons.css';
import Desktop from './components/desktop/Desktop';


const BodyFontSizeOverride = createGlobalStyle`
  body{
    font-size: 15px
  }
`;

function App() {

  return (
    <DataContext.Provider >
      <div className="custom-bg" > {/* Custom Background Image Div */}
        <ThemeProvider>
          <GlobalStyle />
          <BodyFontSizeOverride />
          <Desktop />
          <Taskbar />
        </ThemeProvider>
      </div>
    </DataContext.Provider>
  )
}

export default App
