<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('rsvps', function (Blueprint $table) {
            $table->id();
            $table->string('name')->comment('Guest name');
            $table->string('email')->comment('Guest email');
            $table->enum('attendance', ['attending', 'not_attending'])->comment('Attendance status');
            $table->integer('guest_count')->default(1)->comment('Number of guests');
            $table->text('dietary_restrictions')->nullable()->comment('Dietary restrictions');
            $table->text('message')->nullable()->comment('Message for the couple');
            $table->timestamps();
            
            $table->index('attendance');
            $table->index('created_at');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rsvps');
    }
};