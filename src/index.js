import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { useLocalStore } from 'mobx-react';
import { BrowserRouter as Router } from 'react-router-dom'
import { dateFormat } from './utils/dateFormatter';

export const StoreContext = React.createContext();

const StoreProvider = ({ children }) => {
    const store = useLocalStore(() => ({
        reminders: [
            {
                title:"Buy Groceries",
                dateCreated: new Date(),
                expirationDate: dateFormat(new Date(),"date month time")
            }
        ],
        addReminder: reminder => {
            store.reminders.push(reminder);
        },
        get reminderCount() {
            return store.reminders.length
        },
        editReminder : (id) => {
            store.reminders[id].title = prompt("type to edit")
        },
    }));
    return <StoreContext.Provider value={store}> {children} </StoreContext.Provider>
}

ReactDOM.render(
    <Router>
        <StoreProvider>
            <App />
        </StoreProvider>
    </Router>
    ,
    document.querySelector("#root")
);