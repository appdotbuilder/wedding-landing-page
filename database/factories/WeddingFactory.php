<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Wedding>
 */
class WeddingFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name1' => fake()->firstName(),
            'name2' => fake()->firstName(),
            'parent1' => fake()->name(),
            'parent2' => fake()->name(),
            'date' => now()->addMonths(6)->format('Y-m-d'),
            'location' => fake()->city() . ', NY',
            'story' => fake()->paragraph(3),
            'gift_registry_url' => fake()->url(),
        ];
    }
}