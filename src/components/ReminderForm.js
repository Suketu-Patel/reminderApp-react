import React, { useContext } from 'react';
import { Link } from "react-router-dom"
import { StoreContext } from '../index'
import { dateFormat } from "../utils/dateFormatter"
// import Axios from 'axios';
import api from '../utils/api'
import { setPushServerSubscriptionId } from '../utils/pushNotificaiton';
import TimeBased from './TimeBased';
import { useObserver } from 'mobx-react';

const ReminderForm = () => {
    const store = useContext(StoreContext);

    const addReminder = async e => {
        e.preventDefault();
        store.addReminder(
            { title: store.reminder, dateCreated: new Date(), expirationDate: store.date }
        )
        await api.post("/setTimer",
            {
                expirationDate: dateFormat(store.date, "minute hour date month day"),
                title: store.reminder,
                id: setPushServerSubscriptionId()
            }
        )

        store.reminder = ""
        store.locationName = ""
    }

    const toggleHandler = () => {
        return store.timeToggle = !store.timeToggle
    }

    const changeHandler = e => {
        store.reminder = e.target.value
    }
    return (
        <div>
            <form onSubmit={addReminder}>
                {
                    useObserver(() => {
                        return (
                            <input type="text"
                                value={store.reminder}
                                className="form-control mb-2 mt-3"
                                onChange={changeHandler}
                                required
                                placeholder="Press 'Enter' To add Reminder"
                            />
                        )
                    })
                }
                <label>Location Reminder</label>
                {
                    useObserver(() => {
                        return (<div style={{ display: "inline", marginLeft: "10px" }}>
                            <input type="checkbox" id="switch" onChange={() => { console.log("fired location"); store.locationToggle = !store.locationToggle }} checked={store.locationToggle} /><label id="switchLabel" htmlFor="switch">Toggle</label>
                        </div>)
                    })
                }
                {
                    useObserver(() => {
                        console.log(store.timeToggle, store.locationToggle)
                        if (!store.locationToggle) {
                            return <TimeBased />
                        }
                        else if (store.timeToggle) {
                            return (
                                <div>
                                    <Link to="/setlocation" className="form-control btn btn-danger mb-2">Set Location</Link>
                                    <span>Time Reminder</span>
                                    <div style={{ display: "inline", marginLeft: "10px" }}>
                                        <input type="checkbox" id="switch2" onChange={toggleHandler} checked={store.timeToggle} /><label id="switchLabel" htmlFor="switch2">Toggle</label>
                                    </div>
                                    <TimeBased />
                                </div>
                            )
                        }
                        else {
                            return (
                                <div>
                                    <Link to="/setlocation" className="form-control btn btn-danger mb-2">Set Location</Link>
                                    <span>Time Reminder</span>
                                    <div style={{ display: "inline", marginLeft: "10px" }}>
                                        <input type="checkbox" id="switch2" onChange={toggleHandler} checked={store.timeToggle} /><label id="switchLabel" htmlFor="switch2">Toggle</label>
                                    </div>
                                </div>)
                        }
                    })
                }
                {
                    useObserver(()=>{
                        return((store.locationToggle) && (<div>
                        <label className="mr-2">Location: </label>
                        <input className="form-control" type="text" value={store.locationName} readOnly />
                    </div>))
                    })
                }
                <input
                    className="mt-3 mb-5 btn btn-primary form-control"
                    type="submit"
                />
            </form>
            <Link to="/homepage"
                className="mt-3 mb-5 btn btn-primary form-control"
            >Done</Link>
        </div>
    )
}
export default ReminderForm;