<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Wedding
 *
 * @property int $id
 * @property string $name1
 * @property string $name2
 * @property string|null $parent1
 * @property string|null $parent2
 * @property \Illuminate\Support\Carbon $date
 * @property string $location
 * @property string|null $story
 * @property string|null $gift_registry_url
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|Wedding newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Wedding newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Wedding query()
 * @method static \Illuminate\Database\Eloquent\Builder|Wedding whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Wedding whereDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Wedding whereGiftRegistryUrl($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Wedding whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Wedding whereLocation($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Wedding whereName1($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Wedding whereName2($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Wedding whereParent1($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Wedding whereParent2($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Wedding whereStory($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Wedding whereUpdatedAt($value)
 * @method static \Database\Factories\WeddingFactory factory($count = null, $state = [])
 * 
 * @mixin \Eloquent
 */
class Wedding extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name1',
        'name2',
        'parent1',
        'parent2',
        'date',
        'location',
        'story',
        'gift_registry_url',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'date' => 'datetime:Y-m-d',
    ];
}