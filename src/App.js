import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import EventHanding from "./components/EventHanding";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import ProductList from "./components/ProductList";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import Login from "./components/Login";
import Flexbox from "./components/Flexbox";
import Signup from "./components/Signup";
import Chat from "./components/Chat";
import UsingMaterial from "./components/UsingMaterial";
import MemeCreator from "./components/MemeCreator";
import ManageUsers from "./components/ManageUsers";
import { Toaster } from "react-hot-toast";
import { UserProvider } from "./UserContext";
import CartDetails from "./components/CartDetails";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  const theme1 = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#61dafb",
      },
      error: {
        main: "#fd7e14",
      },
    },
  });

  const theme2 = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const cart = JSON.parse(sessionStorage.getItem("cart"));

  return (
    <UserProvider initCart={cart ? cart : []}>
      <ThemeProvider theme={darkTheme ? theme2 : theme1}>
        <BrowserRouter>
          <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
          <Toaster position="top-right" />
          {/* Passing the props */}
          <Routes>
            <Route element={<Home></Home>} path="home" />
            <Route element={<Login />} path="login" />
            <Route element={<NotFound />} path="notfound" />
            <Route element={<EventHanding />} path="event" />
            <Route element={<Gallery />} path="gallery" />
            <Route element={<ProductList />} path="productlist" />
            <Route element={<Flexbox />} path="flex" />
            <Route element={<Signup />} path="signup" />
            <Route element={<Chat />} path="chat" />
            <Route element={<UsingMaterial />} path="usingmaterial" />
            <Route element={<MemeCreator />} path="meme" />
            <Route element={<ManageUsers />} path="manageusers" />
            <Route element={<CartDetails />} path="cart" />

            <Route element={<Navigate to="/home" />} path="/" />
            <Route element={<Navigate to="/notfound" />} path="*" />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </UserProvider>
  );
}

export default App;
