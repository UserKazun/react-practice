<?php

namespace App\Services;

use App\Models\Task;

class TaskService
{
    protected Task $task;

    public function __construct(Task $task)
    {
        $this->task = $task;
    }

    public function execute(): array
    {
        return $this->task->getTasks();
    }
}
