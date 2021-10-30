import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import Home from './components/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import Login from './components/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import AddPackage from './components/AddPackage/AddPackage';
import ManageAllOrders from './components/ManageAllOrders/ManageAllOrders';
import UpdateBooking from './components/UpdateBooking/UpdateBooking';
import MyOrders from './components/MyOrders/MyOrders';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>

          <Switch>

            {/* Route for homepage  */}
            <Route exact path="/">
              <Home></Home>
            </Route>


            {/* Route for homepage  */}
            <Route path="/home">
              <Home></Home>
            </Route>


            {/* privateroute for add new tour package  */}
            <PrivateRoute path="/addPackages">
              <AddPackage></AddPackage>
            </PrivateRoute>


            {/* privateroute for manage all orders  */}
            <PrivateRoute path="/manageAllOrders">
              <ManageAllOrders></ManageAllOrders>

            </PrivateRoute>



            {/* privateroute for update booking status  */}
            <PrivateRoute exact path="/update/:orderId">
              <UpdateBooking></UpdateBooking>
            </PrivateRoute>


            {/* privateroute for myorders  */}
            <PrivateRoute exact path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>


            {/* Route for login  */}
            <Route path="/login">
              <Login></Login>
            </Route>


            {/* Route for register  */}
            <Route path="/register">
              <Register></Register>
            </Route>


            {/* PrivateRoute for showing service details  */}

            <PrivateRoute path="/serviceDetails/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>


            {/* Route for 404  */}
            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>

        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
