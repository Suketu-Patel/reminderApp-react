import React from 'react';
import ReminderForm from './ReminderForm';
import ReminderFooter from './ReminderFooter';
import RemidnerList from './ReminderList';
import { Switch, Route } from 'react-router-dom';
import ReminderEdit from './ReminderEdit';
import ReminderHeader from './ReminderHeader';
import Signup from './Signup'
import Login from './Login'
// import { StoreContext } from '..';
import HomePage from "./HomePage"

// eslint-disable-next-line
import { requestPermission, registerServiceWorker, displayNotification } from "../utils/pushNotificaiton"
import LandingPage from './LandingPage';
// import Loader from './Loader';


const App = () => {

    requestPermission();
    registerServiceWorker();

    // const store = useContext(StoreContext);

    return (
        <div style={{ height: 100 + "%"}} >
            <Switch>
            <Route path="/" exact>
                <LandingPage/>
            </Route>
                <Route path="/addReminder">
                    
                    <div className="h-100 container">
                        <ReminderForm />
                        {/* <RemidnerList /> */}
                    </div>
                    
                    {/* {(!store.loading) ?
                        <div>
                            <div className="h-100 container">
                                <ReminderForm />
                                <RemidnerList />
                                <button onClick={displayNotification} className="btn btn-primary">Show Notification</button>
                            </div>
                        </div>
                        : 
                        <Loader/>
                    } */}
                    <ReminderFooter />

                </Route>
                <Route path="/homepage">
                    <HomePage/>
                </Route>
                <Route path="/signup">
                    <ReminderHeader/>
                    <Signup/>
                </Route>
                <Route path="/login">
                    <ReminderHeader/>
                    <Login/>
                </Route>
                <Route path="/tasks">
                    <RemidnerList/>
                    <ReminderFooter/>
                </Route>
                <Route path="/edit/:reminderId">
                    <ReminderEdit />
                </Route>
            </Switch>

        </div>
    );
}

export default App;