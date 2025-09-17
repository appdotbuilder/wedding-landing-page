<?php

use App\Http\Controllers\WeddingController;
use App\Http\Controllers\RsvpController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/health-check', function () {
    return response()->json([
        'status' => 'ok',
        'timestamp' => now()->toISOString(),
    ]);
})->name('health-check');

// Wedding landing page (public)
Route::get('/', [WeddingController::class, 'index'])->name('home');

// RSVP routes (public)
Route::post('/rsvp', [RsvpController::class, 'store'])->name('rsvp.store');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
    
    // Protected wedding management routes
    Route::get('/wedding/create', [WeddingController::class, 'create'])->name('wedding.create');
    Route::post('/wedding', [WeddingController::class, 'store'])->name('wedding.store');
    Route::get('/wedding/{wedding}/edit', [WeddingController::class, 'edit'])->name('wedding.edit');
    Route::patch('/wedding/{wedding}', [WeddingController::class, 'update'])->name('wedding.update');
    Route::delete('/wedding/{wedding}', [WeddingController::class, 'destroy'])->name('wedding.destroy');
    
    Route::get('/rsvps', [RsvpController::class, 'index'])->name('rsvps.index');
    Route::get('/rsvp/{rsvp}', [RsvpController::class, 'show'])->name('rsvp.show');
    Route::delete('/rsvp/{rsvp}', [RsvpController::class, 'destroy'])->name('rsvp.destroy');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
