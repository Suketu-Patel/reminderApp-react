import React, { useContext, useEffect } from "react"
import { StoreContext } from "../..";
import { Link } from "react-router-dom"
import fire from "../../config/fire";
import { useObserver } from "mobx-react";


const Groups = () => {
    const store = useContext(StoreContext);
    let groupList = [];
    let id = JSON.parse(localStorage.getItem("user")).uid

    useEffect(() => {
        fire.firestore().collection("users").doc(id).collection("groups").get().then((qsn) => {
            if (qsn.empty) {
                return;
            }
            qsn.forEach((doc) => {
                fire.firestore().collection("groups").doc(doc.data().gid).get().then((qsn) => {
                    if (qsn.empty) {
                        return;
                    }
                    let data = qsn.data()
                    data.groupId = qsn.id;
                    groupList = [...groupList, data]
                    store.groups = groupList;
                })
            })
        })

    }, [])
    return (
        <div>
            {
                useObserver(() => {
                    if (store.groups.length > 0) {
                        return store.groups.map(group => {
                            return <Link to= {`group/${group.groupId}`} key={group.groupId} style={{ borderRadius: "10px" }} className="form-control groupBtn border mb-1"><i className="fas fa-users text-info"></i>{group.title}<span className="taskNumber">{group.members.length}members</span></Link>
                        })
                    } else {
                        return <div>You are in no group</div>
                    }
                })
            }
        </div>
    )
}
export default Groups