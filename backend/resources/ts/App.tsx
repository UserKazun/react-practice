import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Router from "./router/Router";
import axios from "axios";
import {QueryClient, QueryClientProvider} from "react-query";
import TaskList from "./pages/TaskList";

const App: React.FC = () => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                retry: false,
            },
            mutations: {
                retry: false
            }
        }
    })

    // const [tasks, setTasks] = useState<Task[]>([])
    // const getTasks = async () => {
    //     const { data } = await axios.get<Task[]>('api/task/list')
    //     setTasks(data)
    // }

    // useEffect(() => {
    //     getTasks()
    // })

    return (
    <div>
        <QueryClientProvider client={queryClient}>
        <Router />
        <TaskList />
        </QueryClientProvider>
    </div>
    )
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
