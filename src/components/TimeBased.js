import React, { useContext } from "react"
import { StoreContext } from '../index'

import DateTimePicker from 'react-datetime-picker';
import { useObserver } from "mobx-react";
const TimeBased = () => {
    const store = useContext(StoreContext);
    const changeDate = (newDate) => {
        store.date = newDate
    }
    return (
        <div>
            <label className="mr-3">Reminder Time:</label>
            {
                useObserver(() => {
                    return (
                        <DateTimePicker
                            onChange={changeDate}
                            value={store.date}
                        />
                    )
                })
            }
            <br />
        </div>
    )
}
export default TimeBased