import React, { useContext, useState } from 'react';
import { StoreContext } from '../index'
import DateTimePicker from 'react-datetime-picker';
import {dateFormat} from "../utils/dateFormatter"
import Axios from 'axios';

const ReminderForm = () => {
    const store = useContext(StoreContext);
    const [reminder,setReminder] = useState("")
    const [date,setDate] = useState(new Date())

    const addReminder = async e =>{
        e.preventDefault();
        store.addReminder(
            {title:reminder,dateCreated:new Date(),expirationDate:date}
        )
        await Axios.post("http://localhost:8000/setTimer",
            { 
                expirationDate:dateFormat(date,"minute hour date month day"),
                title: reminder
            }
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
                className = "form-control mb-3 mt-3"
                onChange={changeHandler}
                required
                placeholder="Press 'Enter' To add Reminder"
            />
            <label className="mr-3">Reminder Time:</label>
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