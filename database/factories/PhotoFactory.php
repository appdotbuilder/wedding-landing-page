<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Photo>
 */
class PhotoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'filename' => fake()->uuid() . '.jpg',
            'original_name' => fake()->word() . '.jpg',
            'caption' => fake()->optional()->sentence(),
            'order' => fake()->numberBetween(1, 20),
        ];
    }
}