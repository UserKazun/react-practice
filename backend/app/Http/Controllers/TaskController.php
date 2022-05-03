<?php

namespace App\Http\Controllers;

use App\Services\TaskService;
use Illuminate\Contracts\View\View;
use \Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;

class TaskController
{
    public function list(TaskService $service)
    {
        $result = $service->execute();

        //return view('task.list', $result);
    }
}
