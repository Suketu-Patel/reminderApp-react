import React from 'react';
import ReminderForm from './ReminderForm';
import ReminderFooter from './ReminderFooter';
import RemidnerList from './ReminderList';
import { Switch,Route } from 'react-router-dom';
import ReminderEdit from './ReminderEdit';

const App = () => {
    return (
        <div className="container">
            <Switch>
                <Route path="/" exact>
                    <ReminderForm />
                    <RemidnerList />
                    <ReminderFooter />
                </Route>
                <Route path="/edit/:reminderId">
                    <ReminderEdit/>
                </Route>
            </Switch>

        </div>
    );
}

export default App;