import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import GlobalStyles from "./assets/styles/GlobalStyles.styles";
import theme from "./theme/";
import MarketPlace from "./pages/MarketPlace";
import Tables from "./pages/Tables";
import Kanban from "./pages/Kanban";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<MarketPlace />} />
        <Route path="/tables" element={<Tables />} />
        <Route path="/kanban" element={<Kanban />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
