import React, { useContext, useState } from 'react';
import { StoreContext } from '../index'
import DateTimePicker from 'react-datetime-picker';

const ReminderForm = () => {
    const store = useContext(StoreContext);
    const [reminder,setReminder] = useState("")
    const [date,setDate] = useState(new Date())
    const addReminder = e =>{
        e.preventDefault();
        store.addReminder(
            {title:reminder,dateCreated:new Date(),expirationDate:date}
        )
        setReminder("")
    }

    const changeHandler = e =>{
        setReminder(e.target.value);
    }

    const changeDate = (newDate) => {
        setDate(newDate)
    }
    
    return(
        <form onSubmit={addReminder}>
            <input type="text" 
            value={reminder} 
            className = "form-control mb-3 mt-2"
            onChange={changeHandler}
            required
            placeholder="Press 'Enter' To add Reminder"
            />
            <DateTimePicker
                onChange={changeDate}
                value={date}
            />
            <br/>
            <input 
                className="mt-3 mb-5 btn btn-primary form-control"
                type="submit"
            />
        </form>
    )
}
export default ReminderForm;