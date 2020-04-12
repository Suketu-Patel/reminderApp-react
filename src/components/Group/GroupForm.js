import React, { useState } from "react";
import fire from "../../config/fire";
import { withRouter } from "react-router-dom";

const GroupForm = (props) => {
    const [buttonStatus, setbuttonStatus] = useState(false);
    const [email, setEmail] = useState("");
    const [title, setTitle] = useState("");
    const [members, setMembers] = useState([]);
    let memberList
    const searchDatabaseAndAddMember = () => {
        console.log("hmm")
        setbuttonStatus(true)
        fire.firestore().collection("users").where("emailid", "==", email).get().then((querySnapshot) => {
            if(querySnapshot.empty){
                setbuttonStatus(false)
                return;
            }
            querySnapshot.forEach((doc) => {
                let [id,data] = [doc.id,doc.data()]
                setMembers([...members,{id,"name":data.username}])
                setbuttonStatus(false)
            })
        }).catch((error) => { 
            console.log(error); 
            setbuttonStatus(false); 
        })
    }
    
    if(members.length>0){
        memberList = members.map(member=>{
           return <div style={{display:"inline-block", background:"#c3ebfa",borderRadius:"50px",padding:"5px",width:"fit-content",margin:"10px"}}  key={member.id} >{member.name}</div>
       })
   }

    return (
        <div className="container mt-3 p-5">
            <form onSubmit={(e)=>{
                e.preventDefault()
                fire.firestore().collection("groups").add({
                    "title": title,
                    "members":members
                }).then((doc)=>{
                    members.forEach(member=>{
                        fire.firestore().collection("users").doc(member.id).collection("groups").add({
                        "gid":doc.id
                    })
                    })
                }).catch(error=>console.log(error))
                props.history.push("/homepage")
            }}>
                <h2>Create a group</h2>
                <input className="form-control" placeholder="Group Title" value={title} onChange={(e)=>{setTitle(e.target.value)}} required></input>
                <div>
                    <input className="form-control mt-2 mb-2" placeholder="add members email, seperated by comma" value={email} onChange={(e) => { setEmail(e.target.value) }} required></input>
                    <button className="btn btn-primary form-control" type="button" onClick={() => searchDatabaseAndAddMember()} disabled={buttonStatus}>
                        {
                            (buttonStatus) ?
                                <span>
                                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                        adding...
                                </span>
                                :
                                <span>
                                    Add
                                </span>
                        }
                    </button>
                </div>
                <div className="container border p-2 mt-2 mb-2" >
                    <h5>Members:</h5>
                    {(members.length>0)&&memberList}
                </div>
                <input type="submit" className="mt-2 btn btn-success form-control" value="Create"></input>
            </form>
        </div>
    )
}
export default withRouter(GroupForm);