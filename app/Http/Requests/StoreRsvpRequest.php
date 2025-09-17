<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreRsvpRequest extends FormRequest
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
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'attendance' => 'required|in:attending,not_attending',
            'guest_count' => 'required|integer|min:1|max:10',
            'dietary_restrictions' => 'nullable|string|max:500',
            'message' => 'nullable|string|max:1000',
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
            'name.required' => 'Your name is required.',
            'email.required' => 'Your email address is required.',
            'email.email' => 'Please provide a valid email address.',
            'attendance.required' => 'Please let us know if you can attend.',
            'guest_count.required' => 'Please specify the number of guests.',
            'guest_count.min' => 'At least 1 guest is required.',
            'guest_count.max' => 'Maximum 10 guests allowed.',
        ];
    }
}