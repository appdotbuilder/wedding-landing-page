import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { useForm } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';

export default function CreateWedding() {
    const { data, setData, post, processing, errors } = useForm({
        name1: '',
        name2: '',
        parent1: '',
        parent2: '',
        date: '',
        location: '',
        story: '',
        gift_registry_url: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('wedding.store'));
    };

    return (
        <AppLayout>
            <Head title="Create Wedding" />
            
            <div className="py-8">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-8">
                        <Link 
                            href={route('home')}
                            className="text-rose-600 hover:text-rose-700 font-medium"
                        >
                            ← Back to Home
                        </Link>
                        <h1 className="text-3xl font-bold text-gray-900 mt-4 dark:text-white">
                            💒 Create Your Wedding Page
                        </h1>
                        <p className="text-gray-600 mt-2 dark:text-gray-400">
                            Set up your beautiful wedding landing page with all the details your guests need.
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-8 dark:bg-gray-800">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
                                        First Partner Name *
                                    </label>
                                    <input
                                        type="text"
                                        value={data.name1}
                                        onChange={(e) => setData('name1', e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                        required
                                    />
                                    {errors.name1 && <div className="text-red-500 text-sm mt-1">{errors.name1}</div>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
                                        Second Partner Name *
                                    </label>
                                    <input
                                        type="text"
                                        value={data.name2}
                                        onChange={(e) => setData('name2', e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                        required
                                    />
                                    {errors.name2 && <div className="text-red-500 text-sm mt-1">{errors.name2}</div>}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
                                        First Partner's Parents
                                    </label>
                                    <input
                                        type="text"
                                        value={data.parent1}
                                        onChange={(e) => setData('parent1', e.target.value)}
                                        placeholder="e.g., Mr. & Mrs. Smith"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                    />
                                    {errors.parent1 && <div className="text-red-500 text-sm mt-1">{errors.parent1}</div>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
                                        Second Partner's Parents
                                    </label>
                                    <input
                                        type="text"
                                        value={data.parent2}
                                        onChange={(e) => setData('parent2', e.target.value)}
                                        placeholder="e.g., Mr. & Mrs. Johnson"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                    />
                                    {errors.parent2 && <div className="text-red-500 text-sm mt-1">{errors.parent2}</div>}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
                                        Wedding Date *
                                    </label>
                                    <input
                                        type="date"
                                        value={data.date}
                                        onChange={(e) => setData('date', e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                        required
                                    />
                                    {errors.date && <div className="text-red-500 text-sm mt-1">{errors.date}</div>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
                                        Wedding Location *
                                    </label>
                                    <input
                                        type="text"
                                        value={data.location}
                                        onChange={(e) => setData('location', e.target.value)}
                                        placeholder="e.g., The Grand Ballroom, Downtown"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                        required
                                    />
                                    {errors.location && <div className="text-red-500 text-sm mt-1">{errors.location}</div>}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
                                    Your Love Story
                                </label>
                                <textarea
                                    value={data.story}
                                    onChange={(e) => setData('story', e.target.value)}
                                    placeholder="Tell your guests how you met and fell in love..."
                                    rows={6}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                ></textarea>
                                {errors.story && <div className="text-red-500 text-sm mt-1">{errors.story}</div>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
                                    Gift Registry URL
                                </label>
                                <input
                                    type="url"
                                    value={data.gift_registry_url}
                                    onChange={(e) => setData('gift_registry_url', e.target.value)}
                                    placeholder="https://registry.example.com/your-registry"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                />
                                {errors.gift_registry_url && <div className="text-red-500 text-sm mt-1">{errors.gift_registry_url}</div>}
                            </div>

                            <div className="flex justify-end space-x-4 pt-6">
                                <Link
                                    href={route('home')}
                                    className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                                >
                                    Cancel
                                </Link>
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="px-6 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors disabled:opacity-50 font-medium"
                                >
                                    {processing ? 'Creating...' : 'Create Wedding Page'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}