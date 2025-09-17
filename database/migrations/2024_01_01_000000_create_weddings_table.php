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
        Schema::create('weddings', function (Blueprint $table) {
            $table->id();
            $table->string('name1')->comment('First partner name');
            $table->string('name2')->comment('Second partner name');
            $table->string('parent1')->nullable()->comment('First partner parent name');
            $table->string('parent2')->nullable()->comment('Second partner parent name');
            $table->date('date')->comment('Wedding date');
            $table->string('location')->comment('Wedding location');
            $table->text('story')->nullable()->comment('Couple story');
            $table->string('gift_registry_url')->nullable()->comment('Gift registry URL');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('weddings');
    }
};