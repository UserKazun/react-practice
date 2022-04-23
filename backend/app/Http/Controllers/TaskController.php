<?php

namespace App\Http\Controllers;

use App\Services\TaskService;
use \Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;

class TaskController
{
    public function list(TaskService $service): JsonResponse
    {
        $result = $service->execute();

        return response()->json($result, Response::HTTP_OK);
    }
}
