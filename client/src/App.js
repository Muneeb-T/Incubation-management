// @ts-nocheck
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Users from "./pages/Users";
import ApplicationList from "./pages/ApplicationList";
import RecordTrack from "./pages/RecordTrack";
import BookingSlot from "./pages/BookingSlots";
import ViewDetails from "./pages/ViewDetails";
import EditUser from "./pages/EditUser";
import AddUser from "./pages/AddUser";
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='register' element={<Register />} />
          <Route path='signin' element={<Signin />} />
          <Route path='signup' element={<Signup />} />
        </Route>
        <Route path='/admin'>
          <Route index element={<ApplicationList />} />
          <Route path='record-track' element={<RecordTrack />} />
          <Route path='booking-slot' element={<BookingSlot />} />
          <Route path='users' element={<Users />} />
          <Route path='view/:id' element={<ViewDetails />} />
          <Route path='users/edit/:id' element={<EditUser />} />
          <Route path='users/add' element={<AddUser />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
