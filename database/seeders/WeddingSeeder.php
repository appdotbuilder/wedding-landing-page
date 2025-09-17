<?php

namespace Database\Seeders;

use App\Models\Wedding;
use App\Models\Photo;
use App\Models\Rsvp;
use Illuminate\Database\Seeder;

class WeddingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create a sample wedding
        Wedding::factory()->create([
            'name1' => 'Sarah',
            'name2' => 'Michael',
            'parent1' => 'Mr. & Mrs. Johnson',
            'parent2' => 'Mr. & Mrs. Thompson',
            'date' => '2024-09-15',
            'location' => 'The Grand Ballroom, Downtown',
            'story' => 'Sarah and Michael met during their college years at the university library. What started as study sessions turned into coffee dates, and before they knew it, they had fallen deeply in love. After five wonderful years together, Michael proposed during a sunset hike at their favorite mountain trail. Their love story continues as they prepare to say "I do" surrounded by family and friends.',
            'gift_registry_url' => 'https://registry.example.com/sarah-and-michael',
        ]);

        // Create sample photos (placeholder data since we don't have actual image uploads)
        Photo::factory()->create([
            'filename' => 'engagement-1.jpg',
            'original_name' => 'engagement-photo-1.jpg',
            'caption' => 'Our engagement photo at the mountain trail',
            'order' => 1,
        ]);

        Photo::factory()->create([
            'filename' => 'couple-2.jpg',
            'original_name' => 'couple-photo-2.jpg',
            'caption' => 'Date night at our favorite restaurant',
            'order' => 2,
        ]);

        Photo::factory()->create([
            'filename' => 'proposal-3.jpg',
            'original_name' => 'proposal-moment.jpg',
            'caption' => 'The moment he proposed!',
            'order' => 3,
        ]);

        // Create sample RSVPs
        Rsvp::factory()->attending()->count(15)->create();
        Rsvp::factory()->notAttending()->count(3)->create();
    }
}