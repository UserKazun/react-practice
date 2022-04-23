<?php

namespace App\Models;

use PDO;

trait Connection
{
    protected PDO $pdo;

    public function connection()
    {
        $this->pdo = new PDO(
            'mysql:host=localhost;dbname=laravel_local;charset=utf8',
            'phper',
            'secret'
        );
    }
}
