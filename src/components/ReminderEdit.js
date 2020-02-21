import React, { useContext } from 'react';
import { useParams, withRouter } from 'react-router-dom';
import { StoreContext } from '..';
import { useObserver } from 'mobx-react';

const ReminderEdit = (props) => {
    let { reminderId } = useParams();
    const store = useContext(StoreContext)

    const onEditChange = (e) => {
        store.reminders[reminderId].title = e.target.value;
    }

    const deleteReminder = () => {
        store.reminders.splice(reminderId, 1)
        props.history.push("/")
    }

    return (
        <div>
            {
                useObserver(() => {
                    return (
                        <div className="container">
                            <form onSubmit={(e) => {
                                e.preventDefault();
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