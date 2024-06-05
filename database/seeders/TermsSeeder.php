<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TermsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('terms')->insert([
            [
                'name' => 'First Trimester'
            ],
            [
                'name' => 'Second Trimester'
            ],
            [
                'name' => 'Third Trimester'
            ],
        ]);
    }
}
