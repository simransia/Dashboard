import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./SideBar.scss";
import Grid from '@mui/material/Grid';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import AvTimerOutlinedIcon from '@mui/icons-material/AvTimerOutlined';
import PortraitOutlinedIcon from '@mui/icons-material/PortraitOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import FolderCopyOutlinedIcon from '@mui/icons-material/FolderCopyOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import logo from "../../assets/logo.png"
import ROUTES from "../../Constants/routes"
import Divider from "@mui/material/Divider";

function SideBar() {
    const location = useLocation();
    let navigate = useNavigate();
    const [expanded, setExpanded] = useState(false);

    const handleAccordionChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const handleClick = (x) => {
        navigate(x);
        console.log("clicked")
    }

    return (
        <Grid container className="sidenav__container" direction="column" justifyContent="flex-start" alignItems="center">
            <Grid container item direction="row" justifyContent="flex-start" alignItems="center" className="section">
                <img src={logo} width={40} height={40} /><h3>Artemis</h3>
            </Grid>
            <Divider />
            <Grid container item direction="row" justifyContent="flex-start" alignItems="center" className="section">
                Main
            </Grid>

            <Accordion disableGutters elevation={0} defaultExpanded={true} expanded={expanded === 'dashboard'} id="dashboard"
                onChange={handleAccordionChange('dashboard')}
                onClick={() => handleClick(ROUTES.DASHBOARD)}
                className={location.pathname === ROUTES.DASHBOARD ? "active" : ""}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                    <AvTimerOutlinedIcon className="sidebar-icon" />
                    <span>Dashboard</span>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid item container direction="column" className="panel-items" justifyContent="flex-start" alignItems="flex-start">
                        <Link to={ROUTES.DASHBOARD + "/"} >Item 1</Link>
                        <Link to={ROUTES.DASHBOARD + "/"} >Item 2</Link>
                        <Link to={ROUTES.DASHBOARD + "/"} >Item 3</Link>
                    </Grid>
                </AccordionDetails>
            </Accordion>

            <Grid container item direction="row" justifyContent="space-between" alignItems="center" id="discover"
                className={`panel ${location.pathname === "/" + ROUTES.DISCOVER && "active"}`}
                onClick={() => handleClick(ROUTES.DISCOVER)}>
                <span className="discover"><LanguageOutlinedIcon className="sidebar-icon" />
                    <span>Discover</span>
                </span>
                <span className="discover-notification">4</span>
            </Grid>

            <Accordion disableGutters elevation={0} expanded={expanded === 'user'}
                onChange={handleAccordionChange('user')}
                onClick={() => handleClick(ROUTES.USER)}
                className={location.pathname === "/" + ROUTES.USER ? "active" : ""}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                    <PortraitOutlinedIcon className="sidebar-icon" />
                    <span >User</span>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid item container direction="column" className="panel-items" justifyContent="flex-start" alignItems="flex-start">
                        <Link to={ROUTES.USER + "/"} >Item 1</Link>
                        <Link to={ROUTES.USER + "/"} >Item 2</Link>
                        <Link to={ROUTES.USER + "/"} >Item 3</Link>
                    </Grid>
                </AccordionDetails>
            </Accordion>

            <Accordion disableGutters elevation={0} expanded={expanded === 'docs'}
                onChange={handleAccordionChange('docs')}
                onClick={() => handleClick(ROUTES.DOCUMENTS)}
                className={location.pathname === "/" + ROUTES.DOCUMENTS ? "active" : ""}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                    <AutoStoriesOutlinedIcon className="sidebar-icon" />
                    <span >Documents</span>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid item container direction="column" className="panel-items" justifyContent="flex-start" alignItems="flex-start">
                        <Link to={ROUTES.DOCUMENTS + "/"} >Item 1</Link>
                        <Link to={ROUTES.DOCUMENTS + "/"} >Item 2</Link>
                        <Link to={ROUTES.DOCUMENTS + "/"} >Item 3</Link>
                    </Grid>
                </AccordionDetails>
            </Accordion>

            <Accordion disableGutters elevation={0} expanded={expanded === 'applications'}
                onChange={handleAccordionChange('applications')}
                onClick={() => handleClick(ROUTES.APPLICATIONS)}
                className={location.pathname === "/" + ROUTES.APPLICATIONS ? "active" : ""}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                    <GridViewOutlinedIcon className="sidebar-icon" />
                    <span >Applications</span>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid item container direction="column" className="panel-items" justifyContent="flex-start" alignItems="flex-start">
                        <Link to={ROUTES.APPLICATIONS + "/"} >Item 1</Link>
                        <Link to={ROUTES.APPLICATIONS + "/"} >Item 2</Link>
                        <Link to={ROUTES.APPLICATIONS + "/"} >Item 3</Link>
                    </Grid>
                </AccordionDetails>
            </Accordion>

            <Accordion disableGutters elevation={0} expanded={expanded === 'pages'}
                onChange={handleAccordionChange('pages')}
                className={location.pathname === "/" + ROUTES.PAGES ? "active" : ""}
                onClick={() => handleClick(ROUTES.PAGES)}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                    <DescriptionOutlinedIcon className="sidebar-icon" />
                    <span >Pages</span>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid item container direction="column" className="panel-items" justifyContent="flex-start" alignItems="flex-start">
                        <Link to={ROUTES.PAGES + "/"} >Item 1</Link>
                        <Link to={ROUTES.PAGES + "/"} >Item 2</Link>
                        <Link to={ROUTES.PAGES + "/"} >Item 3</Link>
                    </Grid>
                </AccordionDetails>
            </Accordion>

            <Grid container item direction="row" justifyContent="flex-start" alignItems="center" className="section">
                Secondary
            </Grid>
            <Grid container item direction="row" justifyContent="flex-start" alignItems="center"
                className={`panel ${location.pathname === "/" + ROUTES.SUPPORT_CENTER && "active"}`}
                onClick={() => handleClick(ROUTES.SUPPORT_CENTER)}>
                < HelpOutlineOutlinedIcon className="sidebar-icon" /> <span >Support Center</span>
            </Grid>
            <Grid container item direction="row" justifyContent="flex-start" alignItems="center"
                className={`panel ${location.pathname === "/" + ROUTES.INBOX && "active"}`}
                onClick={() => handleClick(ROUTES.INBOX)}
            >
                <InboxOutlinedIcon className="sidebar-icon" />  <span >Inbox</span>
            </Grid>
            <Grid container item direction="row" justifyContent="flex-start" alignItems="center"
                className={`panel ${location.pathname === "/" + ROUTES.FILE_MANAGER && "active"}`}
                onClick={() => handleClick(ROUTES.FILE_MANAGER)}
            >
                <FolderCopyOutlinedIcon className="sidebar-icon" />  <span >File Manager</span>
            </Grid>
            <Grid container item direction="row" justifyContent="flex-start" alignItems="center"
                className={`panel ${location.pathname === "/" + ROUTES.DATA_LIST && "active"}`}
                onClick={() => handleClick(ROUTES.DATA_LIST)}>
                <FormatListBulletedOutlinedIcon className="sidebar-icon" />  <span >Data List</span>
            </Grid>

            <Grid container item direction="row" justifyContent="flex-start" alignItems="center" className="panel">
                <SettingsOutlinedIcon className="sidebar-icon" /><span> Settings</span>
            </Grid>
            <Grid container item direction="row" justifyContent="flex-start" alignItems="center" className="panel">
                <ExitToAppOutlinedIcon className="sidebar-icon" /><span>  Log Out</span>
            </Grid>
        </Grid>
    )
}

export default SideBar
