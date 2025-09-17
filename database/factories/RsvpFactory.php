<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Rsvp>
 */
class RsvpFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'email' => fake()->unique()->safeEmail(),
            'attendance' => fake()->randomElement(['attending', 'not_attending']),
            'guest_count' => fake()->numberBetween(1, 4),
            'dietary_restrictions' => fake()->optional()->sentence(),
            'message' => fake()->optional()->paragraph(),
        ];
    }

    /**
     * Indicate that the guest is attending.
     */
    public function attending(): static
    {
        return $this->state(fn (array $attributes) => [
            'attendance' => 'attending',
        ]);
    }

    /**
     * Indicate that the guest is not attending.
     */
    public function notAttending(): static
    {
        return $this->state(fn (array $attributes) => [
            'attendance' => 'not_attending',
            'guest_count' => 0,
        ]);
    }
}