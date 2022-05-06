<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use PDO;

class Task
{
    use Connection;

    public function __construct()
    {
        $this->connection();
    }

    public function getTasks()
    {
        return $this->pdo->query('SELECT * FROM tasks')->fetchAll(PDO::FETCH_ASSOC);
    }
}
