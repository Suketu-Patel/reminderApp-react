import React, { useContext,useState } from 'react';
import { useParams, withRouter } from 'react-router-dom';
import { StoreContext } from '..';
import { useObserver } from 'mobx-react';
import DateTimePicker from 'react-datetime-picker';
import Axios from 'axios';
import { dateFormat } from '../utils/dateFormatter';

const ReminderEdit = (props) => {
    let { reminderId } = useParams();
    const store = useContext(StoreContext)
    const [date,setDate] = useState(store.reminders[reminderId].expirationDate)

    const onEditChange = (e) => {
        store.reminders[reminderId].title = e.target.value;
    }

    const changeDate = (newDate) => {
        setDate(newDate)
    }

    const deleteReminder = async () => {
        props.history.push("/")
        await Axios.post('http://localhost:8000/destroyTask', 
        {
            title: store.reminders[reminderId].title,
            expirationDate:dateFormat(date,"minute hour date month day"),
        })
        store.reminders.splice(reminderId, 1)
    }

    const handleDateScheduling = () =>{
        store.reminders[reminderId].expirationDate = date;

    }

    return (
        <div>
            {
                useObserver(() => {
                    return (
                        <div className="container">
                            <form onSubmit={(e) => {
                                e.preventDefault();
                                handleDateScheduling();
                                return props.history.push("/")
                            }
                            }>
                                <div className="form-group mt-3">
                                    <h3>Edit reminder</h3>
                                    <label>Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={store.reminders[reminderId].title}
                                        onChange={onEditChange}
                                        required
                                    />
                                    <label>Reminder Time: </label>
                                    <DateTimePicker
                                        onChange={changeDate}
                                        value={date}
                                    />
                                    <input
                                        className="mt-2 btn btn-primary form-control"
                                        type="submit"
                                        value="Done"
                                    />
                                </div>
                            </form>
                            <button
                                className="btn btn-danger form-control"
                                onClick={deleteReminder}
                            >
                                Delete
                            </button>
                        </div>
                    )
                })
            }

        </div>
    )
}
export default withRouter(ReminderEdit);