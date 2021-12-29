import React, { useState, useEffect } from 'react';
import Notifications, { notify } from 'react-notify-toast';

function PlanYourDay() {

    const [tasks, setTasks] = useState([]);

    const onSaveTask = (e) => {
        e.preventDefault();

        const newTask = e.target.task.value;

        let task = JSON.parse(localStorage.getItem("Tasks"));
        if (task === null) task = [];

        task.push(newTask);

        localStorage.setItem("Tasks", JSON.stringify(task));
        setTasks(JSON.parse(localStorage.getItem("Tasks")));

        e.target.task.value = "";
    }

    const onDeleteTask = (isDone, index) => {
        if (isDone) {
            notify.show(
                "✅ Successfully Completed!",
                "custom",
                3000,
                { background: '#55f50b', text: "#FFFFFF" });
        } else {
            notify.show(
                "Deleted Successfully!",
                "custom",
                3000,
                { background: '#ff0000', text: "#FFFFFF" });
        }

        let task = JSON.parse(localStorage.getItem("Tasks"));
        task.splice(index, 1);

        localStorage.setItem("Tasks", JSON.stringify(task));
        setTasks(JSON.parse(localStorage.getItem("Tasks")));
    }

    function getTasks() {
        setTasks(JSON.parse(localStorage.getItem("Tasks")));
    }

    useEffect(() => {
        getTasks();
    }, []);

    return (
        <div className='planyourday_container'>
            <div className='left'>
                <form method="POST" onSubmit={onSaveTask}>
                    <div className='form_rows'>
                        <label htmlFor='task'>What's in your brain?</label>
                        <input type="text" name="task" autoComplete='off' required />
                    </div>
                    <button type="submit">Save</button>
                </form>
                <Notifications />
            </div>
            <div className='right'>
                {
                    tasks !== null && tasks.length !== 0 ? tasks.map((task, index) => {

                        return <div className='box' key={index}>
                            {task}
                            <span>
                                <i className="fa fa-times-circle red" onClick={() => onDeleteTask(false, index)}></i>
                                <i className="fa fa-check-circle green" onClick={() => onDeleteTask(true, index)}></i>
                            </span>
                        </div>

                    }) : <div className="no_task" >
                        No tasks to do.
                    </div>
                }
            </div>

        </div>
    )
}

export default PlanYourDay;
