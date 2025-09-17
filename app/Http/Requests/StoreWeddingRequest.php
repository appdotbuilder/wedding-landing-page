<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreWeddingRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name1' => 'required|string|max:255',
            'name2' => 'required|string|max:255',
            'parent1' => 'nullable|string|max:255',
            'parent2' => 'nullable|string|max:255',
            'date' => 'required|date|after:today',
            'location' => 'required|string|max:255',
            'story' => 'nullable|string',
            'gift_registry_url' => 'nullable|url',
        ];
    }

    /**
     * Get custom error messages for validator errors.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'name1.required' => 'First partner name is required.',
            'name2.required' => 'Second partner name is required.',
            'date.required' => 'Wedding date is required.',
            'date.after' => 'Wedding date must be in the future.',
            'location.required' => 'Wedding location is required.',
            'gift_registry_url.url' => 'Gift registry must be a valid URL.',
        ];
    }
}