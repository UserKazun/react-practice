<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use Connection;

    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);

        $this->connection();
    }

    public function getTasks(): array
    {
        return $this->pdo->query(`SELECT * FROM tasks`)->fetchAll();
    }
}
