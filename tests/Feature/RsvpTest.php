<?php

namespace Tests\Feature;

use App\Models\User;
use App\Models\Rsvp;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia;
use Tests\TestCase;

class RsvpTest extends TestCase
{
    use RefreshDatabase;

    public function test_guest_can_submit_rsvp(): void
    {
        $response = $this->post('/rsvp', [
            'name' => 'John Doe',
            'email' => 'john@example.com',
            'attendance' => 'attending',
            'guest_count' => 2,
            'dietary_restrictions' => 'Vegetarian',
            'message' => 'Congratulations!',
        ]);

        $response->assertRedirect();
        $this->assertDatabaseHas('rsvps', [
            'name' => 'John Doe',
            'email' => 'john@example.com',
            'attendance' => 'attending',
            'guest_count' => 2,
        ]);
    }

    public function test_duplicate_email_rsvp_is_rejected(): void
    {
        Rsvp::factory()->create(['email' => 'existing@example.com']);

        $response = $this->post('/rsvp', [
            'name' => 'Jane Doe',
            'email' => 'existing@example.com',
            'attendance' => 'attending',
            'guest_count' => 1,
        ]);

        $response->assertSessionHasErrors(['email']);
    }

    public function test_authenticated_user_can_view_rsvps(): void
    {
        $user = User::factory()->create();
        Rsvp::factory()->count(3)->create();

        $response = $this->actingAs($user)->get('/rsvps');

        $response->assertStatus(200);
        $response->assertInertia(fn ($page) => $page
            ->component('rsvp/index')
            ->has('rsvps')
            ->has('stats')
        );
    }

    public function test_guest_cannot_view_rsvps(): void
    {
        $this->get('/rsvps')
            ->assertRedirect('/login');
    }

    public function test_rsvp_validation_requires_required_fields(): void
    {
        $response = $this->post('/rsvp', []);

        $response->assertSessionHasErrors(['name', 'email', 'attendance']);
    }

    public function test_rsvp_with_invalid_email_is_rejected(): void
    {
        $response = $this->post('/rsvp', [
            'name' => 'John Doe',
            'email' => 'invalid-email',
            'attendance' => 'attending',
            'guest_count' => 1,
        ]);

        $response->assertSessionHasErrors(['email']);
    }
}