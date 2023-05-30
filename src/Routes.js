import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Profile from "./Pages/Profile";
import Digitalization from "./Pages/Digitalization";
import Analysis from "./Pages/Analysis";
import LoadPeak from "./Pages/LoadPeak";
import Live from "./Pages/Live";
import live2 from "./Pages/live2";
import EnergyProduction from "./Pages/EnergyProduction";
import Emobility from "./Pages/Emobility";

import PrivateRoutes from "./PrivateRoutes";
const Routes = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoutes path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <PrivateRoutes path="/settings" exact component={Profile} />
        <PrivateRoutes
          path="/digitalization"
          exact
          component={Digitalization}
        />
        <PrivateRoutes path="/analysis" exact component={Analysis} />
        <PrivateRoutes path="/load-peak" exact component={LoadPeak} />
        <PrivateRoutes path="/live" exact component={Live} />
        <PrivateRoutes
          path="/energy-production"
          exact
          component={EnergyProduction}
        />
        <PrivateRoutes path="/emobility" exact component={Emobility} />
      </Switch>
    </Router>
  );
};
export default Routes;
