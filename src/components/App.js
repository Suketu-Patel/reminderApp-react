import React, { useContext, useEffect } from 'react';
import ReminderForm from './ReminderForm';
import ReminderFooter from './ReminderFooter';
import RemidnerList from './ReminderList';
import { Switch, Route, Link } from 'react-router-dom';
import ReminderEdit from './ReminderEdit';
import ReminderHeader from './ReminderHeader';
import Signup from './Signup'
import Login from './Login'
import HomePage from "./HomePage"
import Group from "./Group/Group"

// eslint-disable-next-line
import { requestPermission, registerServiceWorker, displayNotification } from "../utils/pushNotificaiton"
import LandingPage from './LandingPage';
import LocationBased from './LocationBased';
import fire from '../config/fire';
import { StoreContext } from '..';
import ProtectedRoute from './ProtectedRoute';
import HomePageHeader from './HomePageHeader';
import AssignedTaskList from './AssignedTaskList';
import GroupForm from './Group/GroupForm';

const App = () => {
    const store = useContext(StoreContext);

    requestPermission();
    registerServiceWorker();
    useEffect(()=>{
        fire.auth().onAuthStateChanged((user)=>{
            if(user){
                store.user = user;
            } else {
                store.user = null;
            }
        });
    })

    return (
        <div style={{ height: 100 + "%" }} >
            <Switch>
                <Route path="/" exact>
                    <LandingPage />
                </Route>

                <Route path="/signup">
                    <ReminderHeader />
                    <Signup />
                </Route>

                <Route path="/login">
                    <ReminderHeader />
                    <Login />
                </Route>

                <ProtectedRoute path="/homepage">
                    <HomePageHeader/>
                    <HomePage />
                </ProtectedRoute>
                
                <ProtectedRoute path="/addReminder">
                    <div className="h-100 container">
                        <ReminderForm />
                    </div>
                    <ReminderFooter />
                </ProtectedRoute>

                <ProtectedRoute path="/addGroup">
                    <GroupForm/>
                </ProtectedRoute>

                <ProtectedRoute path="/tasks">
                    <RemidnerList />
                    <ReminderFooter />
                </ProtectedRoute>

                <ProtectedRoute path="/assignedtask">
                    <AssignedTaskList/>
                </ProtectedRoute>

                <ProtectedRoute path="/edit/:reminderId">
                    <ReminderEdit />
                </ProtectedRoute>

                <ProtectedRoute path="/group/:groupId">
                    <Group />
                </ProtectedRoute>

                <ProtectedRoute path="/setlocation">
                    <LocationBased/>
                </ProtectedRoute>

                <Route path="*">
                    <h1>404 PAGE NOT FOUND</h1>
                    <Link to="/homepage">go home</Link>
                </Route>

            </Switch>

        </div>
    );
}

export default App;