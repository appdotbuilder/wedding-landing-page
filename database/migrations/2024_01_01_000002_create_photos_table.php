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
        Schema::create('photos', function (Blueprint $table) {
            $table->id();
            $table->string('filename')->comment('Photo filename');
            $table->string('original_name')->comment('Original uploaded filename');
            $table->string('caption')->nullable()->comment('Photo caption');
            $table->integer('order')->default(0)->comment('Display order');
            $table->timestamps();
            
            $table->index('order');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('photos');
    }
};