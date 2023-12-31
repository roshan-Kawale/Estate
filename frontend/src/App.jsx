import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SignInPage from "./Pages/SignInPage";
import SignUpPage from "./Pages/SignUpPage";
import AboutPage from "./Pages/AboutPage";
import ProfilePage from "./Pages/ProfilePage";
import PrivateRoute from "./Feature/PrivateRoute";
import CreateListingPage from "./Pages/CreateListingPage";
import UpdateListingPage from "./Pages/UpdateListingPage";
import LIstingPage from "./Pages/LIstingPage";
import SearchPage from "./Pages/SearchPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Sign-in" element={<SignInPage />} />
        <Route path="/Sign-up" element={<SignUpPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/listing/:listingId" element={<LIstingPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/create-listing" element={<CreateListingPage />} />
          <Route
            path="/update-listing/:listingId"
            element={<UpdateListingPage />}
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
