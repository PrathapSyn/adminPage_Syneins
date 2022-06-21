import React from "react";
import './App.css';
import Router from './Router';
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return ( 
    // <BrowserRouter>
    // <Routes>
    //              <Route exact path="/" element={<Demo/>}/>
    //              <Route path="/SignIn" element={<SignIn/>}/>
    //             <Route path="Component/DashBoard" element={<Components/>}/>
    // </Routes>
    // </BrowserRouter><>
    <>
    <ProtectedRoute></ProtectedRoute>
    <Router ></Router>
    </>
  );
}

export default App;
