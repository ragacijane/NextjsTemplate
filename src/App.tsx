
import { Route, Routes } from "react-router-dom";
import { Topbar } from "./scenes/global/Topbar";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import React, { useState } from 'react'
import { Dashboard } from "./scenes/dashboard/Dashboard";
import { MainSidebar } from "./scenes/global/Sidebar";


function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);


  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='app' >
          <MainSidebar />
          <main className="content">
            <Topbar/>
            <Routes>
              <Route path='/' element={<Dashboard/>} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
