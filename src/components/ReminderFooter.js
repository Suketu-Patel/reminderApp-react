import React, { useContext } from "react"
import { StoreContext } from '../index'
import { useObserver } from "mobx-react";

const ReminderFooter = () => {
    const store = useContext(StoreContext);
    const count = useObserver(()=>store.reminderCount)
    return(
        <div>
            <h4>Number of reminders: {count}</h4>
        </div>
    )
}
export default ReminderFooter;