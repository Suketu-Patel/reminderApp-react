import React, { useContext } from 'react';
import { StoreContext } from '..';
import { useObserver } from 'mobx-react'
import { Link } from 'react-router-dom';
import {dateFormat} from "../utils/dateFormatter"
const RemidnerList = () => {

    const store = useContext(StoreContext)
    const reminderList = useObserver(() =>
        store.reminders.map((reminder, id) => {
            return (
                <div key={id} className="list-group">
                    <Link to={`/edit/${id}`} 
                        className="list-group-item list-group-item-action flex-column align-items-start">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">{reminder.title}</h5>
                            <small>{dateFormat(reminder.dateCreated,"day date")}</small>
                            <small>Expiration-{reminder.expirationDate}</small>
                        </div>
                    </Link>
                </div>
            )
        })
    )
    return (
        <div>
            {reminderList}
        </div>
    )
}

export default RemidnerList;
