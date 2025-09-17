
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-900 mb-2 dark:text-white">
                        💒 Wedding Dashboard
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        Manage your wedding landing page and track RSVPs.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Link
                        href={route('home')}
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow dark:bg-gray-800"
                    >
                        <div className="flex items-center mb-4">
                            <div className="text-3xl mr-3">💕</div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                View Wedding Page
                            </h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">
                            See how your wedding landing page looks to guests.
                        </p>
                    </Link>

                    <Link
                        href={route('wedding.create')}
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow dark:bg-gray-800"
                    >
                        <div className="flex items-center mb-4">
                            <div className="text-3xl mr-3">✏️</div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Manage Wedding Details
                            </h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">
                            Create or update couple information, date, location, and story.
                        </p>
                    </Link>

                    <Link
                        href={route('rsvps.index')}
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow dark:bg-gray-800"
                    >
                        <div className="flex items-center mb-4">
                            <div className="text-3xl mr-3">✉️</div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Manage RSVPs
                            </h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">
                            Track guest responses and attendance counts.
                        </p>
                    </Link>
                </div>

                <div className="mt-8 bg-white rounded-lg shadow-md p-6 dark:bg-gray-800">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4 dark:text-white">
                        Quick Start Guide
                    </h2>
                    <div className="space-y-4">
                        <div className="flex items-start">
                            <div className="flex-shrink-0 w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center text-rose-600 font-semibold text-sm mr-3">
                                1
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-900 dark:text-white">Set up your wedding details</h4>
                                <p className="text-gray-600 text-sm dark:text-gray-400">Add names, date, location, and your love story</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="flex-shrink-0 w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center text-rose-600 font-semibold text-sm mr-3">
                                2
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-900 dark:text-white">Share your wedding page</h4>
                                <p className="text-gray-600 text-sm dark:text-gray-400">Send the link to friends and family for RSVPs</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="flex-shrink-0 w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center text-rose-600 font-semibold text-sm mr-3">
                                3
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-900 dark:text-white">Track responses</h4>
                                <p className="text-gray-600 text-sm dark:text-gray-400">Monitor RSVPs and manage guest attendance</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
