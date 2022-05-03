<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Task
{
    use Connection;

    public function __construct()
    {
        $this->connection();
    }

    public function getTasks(): array
    {
        return $this->pdo->query('SELECT * FROM tasks')->fetchAll();
    }
}
