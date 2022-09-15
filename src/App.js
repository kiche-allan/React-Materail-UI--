import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar"
import Navbar from "./components/Navbar";

import Add from "./components/Add"
import { useState } from "react";
import { createTheme, ThemeProvider, Stack, Box } from "@mui/material";

function App() {const [mode, setMode] = useState ("light")

//darkTheme
const darkTheme = createTheme ({
  palette:{
    mode: mode,
  }
})
  return (
    
    <ThemeProvider  theme ={darkTheme} >
  <Box bgcolor ={"background.default"} color ={"text.primary"}>
    <Navbar/>   
    <Stack direction="row" justifyContent="space-between" spacing={2}>
      <Sidebar setMode = {setMode} mode ={mode}/>
      <Feed/>
      <Rightbar/>
      </Stack>
      <Add/>
  </Box>
  </ThemeProvider>
  );
}

export default App;
