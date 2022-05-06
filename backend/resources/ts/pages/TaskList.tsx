import React from "react";
import styled from 'styled-components';
import Example from "../components/Example";
import {useQuery} from "react-query";
import axios from "axios";

type Task = {
    id: number,
    task_name: string,
    task_description: string,
    created_at: Date,
    updated_at: Date
}

function TaskList() {
    const { data:tasks, status } = useQuery('tasks', async () => {
        const { data } = await axios.get<Task[]>('api/task/list')

        return data
    })

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
