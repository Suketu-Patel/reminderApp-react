import React from 'react';
import ReminderForm from './ReminderForm';
import ReminderFooter from './ReminderFooter';
import RemidnerList from './ReminderList';
import { Switch, Route } from 'react-router-dom';
import ReminderEdit from './ReminderEdit';
import ReminderHeader from './ReminderHeader';

const App = () => {
    return (
        <div style={{height:100+"%"}} >
            <Switch>
                <Route path="/" exact>
                    <ReminderHeader />
                    <div className="h-100 container">
                        <ReminderForm />
                        <RemidnerList />
                        <ReminderFooter />
                    </div>

                </Route>
                <Route path="/edit/:reminderId">
                    <ReminderHeader />
                    <ReminderEdit />
                    <ReminderFooter />
                </Route>
            </Switch>

        </div>
    );
}

export default App;