import React from 'react';
import SideBar from '../../Components/SideBar/SideBar';
import Header from "../../Components/Header/Header"
import { Outlet } from "react-router-dom";
import Grid from "@mui/material/Grid";
import "./Home.scss"

function Home() {
  return (
    <Grid container className="home-admin__container" justifyContent="space-between">
      <div className="sidebar__container">
        <SideBar />
      </div>
      <div className="main__container">
        <Header />
        <Outlet />
      </div>
    </Grid>
  )
}

export default Home