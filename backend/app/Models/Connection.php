<?php

namespace App\Models;

use Illuminate\Support\Facades\DB;
use PDO;

trait Connection
{
    protected PDO $pdo;

    public function connection()
    {
        $this->pdo = DB::connection()->getPdo();
    }
}
