<?php

namespace Tests\Feature;

use App\Models\User;
use App\Models\Wedding;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia;
use Tests\TestCase;

class WeddingTest extends TestCase
{
    use RefreshDatabase;

    public function test_wedding_landing_page_displays_when_no_wedding_exists(): void
    {
        $response = $this->get('/');

        $response->assertStatus(200);
        $response->assertInertia(fn ($page) => $page
            ->component('welcome')
            ->where('wedding', null)
            ->has('photos')
            ->has('rsvpCount')
        );
    }

    public function test_wedding_landing_page_displays_wedding_details(): void
    {
        $wedding = Wedding::factory()->create([
            'name1' => 'Sarah',
            'name2' => 'Michael',
            'date' => now()->addYear()->format('Y-m-d'),
            'location' => 'The Grand Ballroom',
        ]);

        $response = $this->get('/');

        $response->assertStatus(200);
        $response->assertInertia(fn ($page) => $page
            ->component('welcome')
            ->has('wedding', fn ($weddingData) => $weddingData
                ->where('name1', 'Sarah')
                ->where('name2', 'Michael')
                ->where('location', 'The Grand Ballroom')
                ->etc()
            )
        );
    }

    public function test_authenticated_user_can_create_wedding(): void
    {
        $user = User::factory()->create();

        $weddingData = [
            'name1' => 'Alice',
            'name2' => 'Bob',
            'date' => now()->addYear()->format('Y-m-d'),
            'location' => 'Beach Resort',
            'story' => 'We met at a coffee shop...',
            'parent1' => '',
            'parent2' => '',
            'gift_registry_url' => '',
        ];

        $response = $this->actingAs($user)
            ->post('/wedding', $weddingData);

        $response->assertRedirect();
        $this->assertDatabaseHas('weddings', [
            'name1' => 'Alice',
            'name2' => 'Bob',
            'location' => 'Beach Resort',
        ]);
    }

    public function test_authenticated_user_can_update_wedding(): void
    {
        $user = User::factory()->create();
        $wedding = Wedding::factory()->create(['name1' => 'Original']);

        $response = $this->actingAs($user)
            ->patch("/wedding/{$wedding->id}", [
                'name1' => 'Updated',
                'name2' => $wedding->name2,
                'date' => $wedding->date,
                'location' => $wedding->location,
            ]);

        $response->assertRedirect();
        $this->assertDatabaseHas('weddings', [
            'id' => $wedding->id,
            'name1' => 'Updated',
        ]);
    }

    public function test_guest_cannot_access_wedding_management_pages(): void
    {
        $wedding = Wedding::factory()->create();

        $this->get('/wedding/create')
            ->assertRedirect('/login');

        $this->get("/wedding/{$wedding->id}/edit")
            ->assertRedirect('/login');
    }
}