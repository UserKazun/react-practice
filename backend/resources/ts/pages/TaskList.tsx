import React from "react";
import styled from 'styled-components';
import { useTasks } from "../queries/TaskQuery";

function TaskList() {
    const { data:tasks, status } = useTasks()

    console.log(tasks)

    if (tasks === undefined) {
        const tasks = []
    }

    if (status === 'loading') {
        // TODO: ここに何かしらの処理
    } else if (status === 'error') {
        // TODO: ここに何かしらの処理
    }

    return (
        <div>
            { tasks?.map(task => (
            <li key={task.id}>
                <div>
                    <span>{ task.task_name }</span>
                    <span>{ task.task_description }</span>
                </div>
            </li>
        )) }
        </div>
    )
}

export default TaskList
