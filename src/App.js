import { Fragment } from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Dashboard from "./Components/OutletComponents/Dashboard/Dashboard";
import Discover from "./Components/OutletComponents/Discover/Discover";
import User from "./Components/OutletComponents/User/User"
import Documents from "./Components/OutletComponents/Documents/Documents";
import Applications from "./Components/OutletComponents/Applications/Applications";
import Pages from "./Components/OutletComponents/Pages/Pages";
import SupportCenter from "./Components/OutletComponents/Support Center/SupportCenter";
import Inbox from "./Components/OutletComponents/Inbox/Inbox";
import FileManager from "./Components/OutletComponents/File Manager/FileManager";
import DataList from "./Components/OutletComponents/Data List/DataList";
import ROUTES from "./Constants/routes"

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />}>
            <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
            <Route path={ROUTES.DISCOVER} element={<Discover />} />
            <Route path={ROUTES.USER} element={<User />} />
            <Route path={ROUTES.DOCUMENTS} element={<Documents />} />
            <Route path={ROUTES.APPLICATIONS} element={<Applications />} />
            <Route path={ROUTES.PAGES} element={<Pages />} />
            <Route path={ROUTES.SUPPORT_CENTER} element={<SupportCenter />} />
            <Route path={ROUTES.INBOX} element={<Inbox />} />
            <Route path={ROUTES.FILE_MANAGER} element={<FileManager />} />
            <Route path={ROUTES.DATA_LIST} element={<DataList />} />
          </Route>
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
