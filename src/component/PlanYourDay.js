import React, { useState, useEffect } from 'react';

function PlanYourDay() {

    const [tasks,setTasks] = useState([]);

    const onSaveTask = (e) => {
        // TODO
    }

    const onDeleteTask = (task,isDone) => {
        //TODO
    } 

    return (
        <div className='planyourday_container'>
            <div className='right'>
                <form method="POST" onSubmit={onSaveTask}>
                    <div className='form_rows'>
                        <label htmlFor='task'>What's in your brain?</label>
                        <input type="text" name="task" autoComplete='off'/>
                    </div>
                    <button type="submit">Save</button>
                </form>
            </div>
            <div className='row left'>
            {
                    tasks.length !== 0 ? tasks.map((task, index) => {
                        
                            return <div className='box' key={index}>
                                {task}
                                <span>
                                    <i className="fas fa-times-circle red" onClick={onDeleteTask(task,false)}></i>
                                    <i className="fas fa-check-circle green" onClick={onDeleteTask(task,true)}></i>
                                </span>
                            </div>
                        
                    }) :  <div className="no_task" >
                            No tasks to do.
                    </div>
                }
            </div>

        </div>
    )
}

export default PlanYourDay;
