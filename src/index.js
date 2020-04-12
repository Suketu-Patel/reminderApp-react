import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { useLocalStore } from 'mobx-react';
import { BrowserRouter as Router } from 'react-router-dom'

export const StoreContext = React.createContext()

const StoreProvider = ({ children }) => {
    
    const store = useLocalStore(() => ({
        user: null,
        reminder:"",
        reminders: [
            {
                title: "Buy Groceries",
                dateCreated: new Date(),
                expirationDate: new Date()
            }
        ],
        loading: false,
        addReminder: reminder => {
            store.reminders.push(reminder);
        },
        get reminderCount() {
            return store.reminders.length
        },
        editReminder: (id) => {
            store.reminders[id].title = prompt("type to edit")
        },
        date: new Date(),
        locationToggle: false,
        timeToggle: false,
        searchText: "",
        mapState: {
            lng: 73.18130097069718,
            lat: 22.326737087756456,
            zoom: 12
        },
        suggestions:false,
        locationName: "",
        groups:[]
    }));
    return <StoreContext.Provider value={store}> {children} </StoreContext.Provider>
}

ReactDOM.render(
    <Router basename={`${process.env.PUBLIC_URL}/`}>
        <StoreProvider>
            <App />
        </StoreProvider>
    </Router>
    ,
    document.querySelector("#root")
);