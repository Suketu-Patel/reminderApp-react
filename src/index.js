import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { useLocalStore } from 'mobx-react';
import { BrowserRouter as Router } from 'react-router-dom'
import { dateFormat } from './utils/dateFormatter';

export const StoreContext = React.createContext();
Notification.requestPermission(function (status) {
    console.log('Notification permission status:', status);
});

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('sw.js')
        .then(function (registration) {
            //do whatever you want with this..
     })
       .catch(function (err) {
         console.log("Service Worker Failed to Register", err);
      }) 
}

const displayNotification = () => {
    if (Notification.permission === 'granted') {
        navigator.serviceWorker.getRegistration().then((reg) => {
            
            reg.showNotification('Hello world!');
        });
    }
}


const StoreProvider = ({ children }) => {
    const store = useLocalStore(() => ({
        reminders: [
            {
                title: "Buy Groceries",
                dateCreated: new Date(),
                expirationDate: dateFormat(new Date(), "date month time")
            }
        ],
        addReminder: reminder => {
            store.reminders.push(reminder);
        },
        get reminderCount() {
            return store.reminders.length
        },
        editReminder: (id) => {
            store.reminders[id].title = prompt("type to edit")
        },
    }));
    return <StoreContext.Provider value={store}> {children} </StoreContext.Provider>
}

ReactDOM.render(
    <Router basename={`${process.env.PUBLIC_URL}/`}>
        <StoreProvider>
            <App />
            <button onClick={displayNotification} className="btn btn-primary">Show Notification</button>
        </StoreProvider>
    </Router>
    ,
    document.querySelector("#root")
);