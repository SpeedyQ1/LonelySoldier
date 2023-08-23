import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import LoginPage from "./components/LoginPage";
import { VolunteerLayout } from "./components/VolunteerLayout";
import { Volunteerpage } from "./components/Volunteerpage";
import { SoldierLayout } from "./components/SoldierLayout";
import { Homepage } from "./components/Homepage";
import { SweetHome } from "./components/SweetHome";
import { WalkingWith } from "./components/WalkingWith";
import { WarmShoulder } from "./components/WarmShoulder";
import SignUp from "./components/SignUp";
import LoneSoldier from "./json/LoneSoldier.json";
import sweetHome from "./json/SweetHome.json";
import users from "./json/users.json";
import walkingWithYou from "./json/walkingWithYou.json";
import warmShoulder from "./json/warmShoulder.json";
import FormHouse from "./components/FormHouse";
import React, { useEffect, useState } from "react";

function App() {
  if (!localStorage.getItem("loneSoldierArr")) {
    localStorage.setItem(
      "loneSoldierArr",
      JSON.stringify(LoneSoldier.LoneSoldier)
    );
  }
  if (!localStorage.getItem("usersArr")) {
    localStorage.setItem("usersArr", JSON.stringify(users.users));
  }
  if (!localStorage.getItem("walkingArr")) {
    localStorage.setItem(
      "walkingArr",
      JSON.stringify(walkingWithYou.walkingWithYou)
    );
  }
  if (!localStorage.getItem("warmShoulderArr")) {
    localStorage.setItem(
      "warmShoulderArr",
      JSON.stringify(warmShoulder.warmShoulder)
    );
  }

  if (!localStorage.getItem("sweetHomeArr")) {
    localStorage.setItem("sweetHomeArr", JSON.stringify(sweetHome.sweetHome));
  }
  const [isLogIn, setIsLogIn] = useState(localStorage.getItem('loginData'));
  return (
    <>
      <div className="body">
        <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Volunteer" element={<VolunteerLayout  />}>
            <Route path="/Volunteer" element={<Volunteerpage />} />
          </Route>
          <Route path="/Soldier" element={<SoldierLayout />} >
            <Route path="/Soldier" element={<Homepage />} />
            <Route path="/Soldier/SweetHome" element={<SweetHome />} />
            <Route path="/Soldier/WalkingWith" element={<WalkingWith />} />
            <Route path="/Soldier/WarmShoulder" element={<WarmShoulder />}/>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
