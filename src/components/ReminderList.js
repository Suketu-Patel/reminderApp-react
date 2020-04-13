import React, { useContext, useEffect } from 'react';
import { StoreContext } from '..';
import { useObserver } from 'mobx-react'
import { Link,NavLink } from 'react-router-dom';
import { dateFormat } from "../utils/dateFormatter"
import Loader from "./Loader"
import {db} from "../config/fire"
const RemidnerList = () => {
    const store = useContext(StoreContext)
    store.user = localStorage.getItem("user")
    const user = JSON.parse(store.user);
    let reminderArray = []

    useEffect(() => {
        store.loading = true;
        db.collection("users").doc(user.uid).collection("reminders").get().then((querySnapshot) => {
            querySnapshot.forEach((docs) => {
                let reminder = docs.data();
                console.log(reminder)
                reminderArray.push({ title: reminder.title, dateCreated: reminder.dateCreated.toDate(), expirationDate: reminder.dateCreated.toDate() })
            })
        }).then(() => {
            if (reminderArray.length > 0) {
                store.reminders = [...reminderArray]
                store.loading = false;
            }
        }).catch(error => console.log(error))
        //eslint-disable-next-line
    }, [])


    const reminderList = useObserver(() =>
        store.reminders.map((reminder, id) => {
            return (
                <div key={id} className="list-group">
                    <Link to={`/edit/${id}`}
                        className="list-group-item list-group-item-action flex-column align-items-start">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">{reminder.title}</h5>
                            <small>{dateFormat(reminder.dateCreated, "day date")}</small>
                            <small>Expiration-{dateFormat(reminder.expirationDate, "date month time")}</small>

                        </div>
                    </Link>
                </div>
            )
        })
    )
    return (
        <div>
            <nav className="navbar navbar-dark bg-primary">
                <NavLink to={"/homepage"} className="navbar-brand"><i class="fas fa-arrow-left"></i></NavLink>
                <div className="form-inline" style={{margin:"0 auto"}}>
                    <h4 className="navbar-item navbar-center" style={{color:"white"}}>Tasks</h4>
                </div>
            </nav>
            {/* {reminderList} */}
            {
                useObserver(()=>{
                    return (
                        (store.loading)?
                             <Loader/>:
                         reminderList
                    )
                })
                
            }
        </div>
    )
}

export default RemidnerList;
