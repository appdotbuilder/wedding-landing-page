<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Rsvp
 *
 * @property int $id
 * @property string $name
 * @property string $email
 * @property string $attendance
 * @property int $guest_count
 * @property string|null $dietary_restrictions
 * @property string|null $message
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|Rsvp newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Rsvp newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Rsvp query()
 * @method static \Illuminate\Database\Eloquent\Builder|Rsvp whereAttendance($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Rsvp whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Rsvp whereDietaryRestrictions($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Rsvp whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Rsvp whereGuestCount($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Rsvp whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Rsvp whereMessage($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Rsvp whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Rsvp whereUpdatedAt($value)
 * @method static \Database\Factories\RsvpFactory factory($count = null, $state = [])
 * 
 * @mixin \Eloquent
 */
class Rsvp extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'attendance',
        'guest_count',
        'dietary_restrictions',
        'message',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'guest_count' => 'integer',
    ];
}