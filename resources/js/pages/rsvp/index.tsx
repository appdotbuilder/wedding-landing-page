import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';

interface Rsvp {
    id: number;
    name: string;
    email: string;
    attendance: 'attending' | 'not_attending';
    guest_count: number;
    dietary_restrictions?: string;
    message?: string;
    created_at: string;
}

interface RsvpStats {
    total_rsvps: number;
    attending: number;
    not_attending: number;
    total_guests: number;
}

interface PaginatedRsvps {
    data: Rsvp[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
}

interface Props {
    rsvps: PaginatedRsvps;
    stats: RsvpStats;
    [key: string]: unknown;
}

export default function RsvpIndex({ rsvps, stats }: Props) {
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <AppLayout>
            <Head title="RSVP Management" />
            
            <div className="py-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-8">
                        <Link 
                            href={route('home')}
                            className="text-rose-600 hover:text-rose-700 font-medium"
                        >
                            ← Back to Wedding Page
                        </Link>
                        <h1 className="text-3xl font-bold text-gray-900 mt-4 dark:text-white">
                            ✉️ RSVP Management
                        </h1>
                        <p className="text-gray-600 mt-2 dark:text-gray-400">
                            Track guest responses and manage your wedding attendance.
                        </p>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                        <div className="bg-white rounded-lg shadow-md p-6 dark:bg-gray-800">
                            <div className="flex items-center">
                                <div className="text-2xl mr-3">📊</div>
                                <div>
                                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                                        {stats.total_rsvps}
                                    </div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">
                                        Total RSVPs
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6 dark:bg-gray-800">
                            <div className="flex items-center">
                                <div className="text-2xl mr-3">✅</div>
                                <div>
                                    <div className="text-2xl font-bold text-green-600">
                                        {stats.attending}
                                    </div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">
                                        Attending
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6 dark:bg-gray-800">
                            <div className="flex items-center">
                                <div className="text-2xl mr-3">❌</div>
                                <div>
                                    <div className="text-2xl font-bold text-red-600">
                                        {stats.not_attending}
                                    </div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">
                                        Not Attending
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6 dark:bg-gray-800">
                            <div className="flex items-center">
                                <div className="text-2xl mr-3">👥</div>
                                <div>
                                    <div className="text-2xl font-bold text-rose-600">
                                        {stats.total_guests}
                                    </div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">
                                        Total Guests
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RSVP List */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800">
                        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Recent RSVPs
                            </h2>
                        </div>
                        
                        {rsvps.data.length > 0 ? (
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-gray-50 dark:bg-gray-700">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                                                Guest
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                                                Status
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                                                Guests
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                                                Dietary Restrictions
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                                                Message
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                                                Received
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                        {rsvps.data.map((rsvp) => (
                                            <tr key={rsvp.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div>
                                                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                                                            {rsvp.name}
                                                        </div>
                                                        <div className="text-sm text-gray-500 dark:text-gray-400">
                                                            {rsvp.email}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                                        rsvp.attendance === 'attending' 
                                                            ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100'
                                                            : 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100'
                                                    }`}>
                                                        {rsvp.attendance === 'attending' ? '✅ Attending' : '❌ Not Attending'}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                                                    {rsvp.attendance === 'attending' ? rsvp.guest_count : '—'}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-900 dark:text-white max-w-xs truncate">
                                                    {rsvp.dietary_restrictions || '—'}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-900 dark:text-white max-w-xs truncate">
                                                    {rsvp.message || '—'}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                                    {formatDate(rsvp.created_at)}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <div className="px-6 py-12 text-center">
                                <div className="text-gray-400 mb-4 text-4xl">📭</div>
                                <h3 className="text-lg font-medium text-gray-900 mb-2 dark:text-white">
                                    No RSVPs yet
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Share your wedding page with guests to start receiving RSVPs!
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Pagination */}
                    {rsvps.last_page > 1 && (
                        <div className="mt-6 flex justify-center">
                            <nav className="flex space-x-2">
                                {Array.from({ length: rsvps.last_page }, (_, i) => i + 1).map((page) => (
                                    <Link
                                        key={page}
                                        href={route('rsvps.index', { page })}
                                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                                            page === rsvps.current_page
                                                ? 'bg-rose-600 text-white'
                                                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700'
                                        }`}
                                    >
                                        {page}
                                    </Link>
                                ))}
                            </nav>
                        </div>
                    )}
                </div>
            </div>
        </AppLayout>
    );
}