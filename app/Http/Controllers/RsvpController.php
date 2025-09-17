<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreRsvpRequest;
use App\Models\Rsvp;
use Inertia\Inertia;

class RsvpController extends Controller
{
    /**
     * Display a listing of RSVPs.
     */
    public function index()
    {
        $rsvps = Rsvp::latest()->paginate(10);
        $stats = [
            'total_rsvps' => Rsvp::count(),
            'attending' => Rsvp::where('attendance', 'attending')->count(),
            'not_attending' => Rsvp::where('attendance', 'not_attending')->count(),
            'total_guests' => Rsvp::where('attendance', 'attending')->sum('guest_count'),
        ];

        return Inertia::render('rsvp/index', [
            'rsvps' => $rsvps,
            'stats' => $stats,
        ]);
    }

    /**
     * Store a newly created RSVP.
     */
    public function store(StoreRsvpRequest $request)
    {
        // Check if email already exists
        $existingRsvp = Rsvp::where('email', $request->email)->first();
        
        if ($existingRsvp) {
            return back()->withErrors([
                'email' => 'An RSVP with this email already exists.',
            ]);
        }

        Rsvp::create($request->validated());

        return back()->with('success', 'Thank you for your RSVP! We look forward to celebrating with you.');
    }

    /**
     * Display the specified RSVP.
     */
    public function show(Rsvp $rsvp)
    {
        return Inertia::render('rsvp/show', [
            'rsvp' => $rsvp,
        ]);
    }

    /**
     * Remove the specified RSVP.
     */
    public function destroy(Rsvp $rsvp)
    {
        $rsvp->delete();

        return redirect()->route('rsvps.index')
            ->with('success', 'RSVP deleted successfully.');
    }
}