<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreWeddingRequest;
use App\Http\Requests\UpdateWeddingRequest;
use App\Models\Wedding;
use App\Models\Photo;
use App\Models\Rsvp;
use Inertia\Inertia;

class WeddingController extends Controller
{
    /**
     * Display the wedding landing page.
     */
    public function index()
    {
        $wedding = Wedding::first();
        $photos = Photo::orderBy('order')->get();
        $rsvpCount = Rsvp::where('attendance', 'attending')->sum('guest_count');

        return Inertia::render('welcome', [
            'wedding' => $wedding,
            'photos' => $photos,
            'rsvpCount' => $rsvpCount,
        ]);
    }

    /**
     * Show the form for creating a new wedding.
     */
    public function create()
    {
        return Inertia::render('wedding/create');
    }

    /**
     * Store a newly created wedding.
     */
    public function store(StoreWeddingRequest $request)
    {
        // Only allow one wedding record
        Wedding::truncate();
        
        $wedding = Wedding::create($request->validated());

        return redirect()->route('wedding.edit', $wedding)
            ->with('success', 'Wedding details created successfully.');
    }

    /**
     * Display the specified wedding.
     */
    public function show(Wedding $wedding)
    {
        $photos = Photo::orderBy('order')->get();
        $rsvps = Rsvp::latest()->paginate(10);

        return Inertia::render('wedding/show', [
            'wedding' => $wedding,
            'photos' => $photos,
            'rsvps' => $rsvps,
        ]);
    }

    /**
     * Show the form for editing the wedding.
     */
    public function edit(Wedding $wedding)
    {
        return Inertia::render('wedding/edit', [
            'wedding' => $wedding,
        ]);
    }

    /**
     * Update the wedding details.
     */
    public function update(UpdateWeddingRequest $request, Wedding $wedding)
    {
        $wedding->update($request->validated());

        return redirect()->route('wedding.edit', $wedding)
            ->with('success', 'Wedding details updated successfully.');
    }

    /**
     * Remove the wedding.
     */
    public function destroy(Wedding $wedding)
    {
        $wedding->delete();

        return redirect()->route('wedding.index')
            ->with('success', 'Wedding deleted successfully.');
    }
}