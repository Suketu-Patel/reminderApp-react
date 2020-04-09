import React, { useContext, useEffect } from 'react';
import { StoreContext } from '..';
import { useObserver } from 'mobx-react'
import { Link } from 'react-router-dom';
import {dateFormat} from "../utils/dateFormatter"
import fire from  "../config/fire"
const RemidnerList = () => {
    const store = useContext(StoreContext)
    store.user = localStorage.getItem("user")
    const user = JSON.parse(store.user);
    let reminderArray = []
    
    useEffect(()=>{
        fire.firestore().collection("users").doc(user.uid).collection("reminders").get().then((querySnapshot)=>{
            querySnapshot.forEach((docs)=>{
                let reminder = docs.data();
                console.log(reminder)
                reminderArray.push({ title: reminder.title, dateCreated: reminder.dateCreated.toDate(), expirationDate: reminder.dateCreated.toDate()})
            })
        }).then(()=>{
            if(reminderArray.length>0){
                store.reminders = [...store.reminders,...reminderArray]
            }   
        }).catch(error=>console.log(error))
        //eslint-disable-next-line
    },[])
    

    const reminderList = useObserver(() =>
        store.reminders.map((reminder, id) => {
            console.log(reminder.title,reminder.dateCreated,reminder.expirationDate)
            return (
                <div key={id} className="list-group">
                    <Link to={`/edit/${id}`} 
                        className="list-group-item list-group-item-action flex-column align-items-start">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">{reminder.title}</h5>
                            <small>{dateFormat(reminder.dateCreated,"day date")}</small>
                            <small>Expiration-{dateFormat(reminder.expirationDate,"date month time")}</small>
                            
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
