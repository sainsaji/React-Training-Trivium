import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Login/Login";
import Dashboard from "../Dashboard/Dashboard";
import ClientScreen from "../ClientScreen/ClientScreen";
import ClientDetails from "../ClientScreen/ClientDetails";
import AddClient from "../ClientScreen/AddClient";
import UserScreen from "../UserScreen/UserScreen";
import UserDetails from "../UserScreen/UserDetails";
import AddUser from "../UserScreen/AddUser";
import Pagenotfound from "../NotFound/Pagenotfound";
import UseEffectDemo from "../UseEffectDemo/UseEffectDemo";

const RoutingComp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login></Login>}></Route>
        <Route path="dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route
          path="useffect"
          element={<UseEffectDemo></UseEffectDemo>}
        ></Route>
        <Route
          path="dashboard/client"
          element={<ClientScreen></ClientScreen>}
        ></Route>
        <Route
          path="clientdetails/:clientID/:clientName/:clientGender/:clientDOB"
          element={<ClientDetails></ClientDetails>}
        ></Route>
        <Route path="addclient" element={<AddClient></AddClient>}></Route>
        <Route
          path="dashboard/user"
          element={<UserScreen></UserScreen>}
        ></Route>
        <Route path="userdetails" element={<UserDetails></UserDetails>}></Route>
        <Route path="adduser" element={<AddUser></AddUser>}></Route>
        <Route path="*" element={<Pagenotfound></Pagenotfound>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutingComp;
