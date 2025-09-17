import React from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import { useForm } from '@inertiajs/react';
import { type SharedData } from '@/types';

interface Wedding {
    id: number;
    name1: string;
    name2: string;
    parent1?: string;
    parent2?: string;
    date: string;
    location: string;
    story?: string;
    gift_registry_url?: string;
}

interface Photo {
    id: number;
    filename: string;
    caption?: string;
}

interface Props {
    wedding?: Wedding;
    photos: Photo[];
    rsvpCount: number;
    [key: string]: unknown;
}

export default function Welcome({ wedding, photos, rsvpCount }: Props) {
    const { auth } = usePage<SharedData>().props;
    
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        attendance: 'attending',
        guest_count: 1,
        dietary_restrictions: '',
        message: '',
    });

    const handleRsvpSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('rsvp.store'), {
            preserveScroll: true,
        });
    };

    if (!wedding) {
        return (
            <>
                <Head title="Welcome">
                    <link rel="preconnect" href="https://fonts.bunny.net" />
                    <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
                </Head>
                <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
                    <header className="mb-6 w-full max-w-[335px] text-sm lg:max-w-4xl">
                        <nav className="flex items-center justify-end gap-4">
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </nav>
                    </header>
                    <div className="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow">
                        <main className="flex w-full max-w-[335px] flex-col-reverse lg:max-w-4xl lg:flex-row">
                            <div className="flex-1 rounded-br-lg rounded-bl-lg bg-white p-6 pb-12 text-center shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] lg:rounded-tl-lg lg:rounded-br-none lg:p-20 dark:bg-[#161615] dark:text-[#EDEDEC] dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]">
                                <h1 className="mb-4 text-2xl font-bold">💒 Wedding Landing Page</h1>
                                <p className="mb-8 text-lg text-[#706f6c] dark:text-[#A1A09A]">
                                    Create a beautiful wedding website with RSVP management, photo gallery, and more!
                                </p>
                                <div className="mb-8 grid gap-4 text-left">
                                    <div className="flex items-center gap-3">
                                        <span className="text-2xl">💑</span>
                                        <span>Customizable couple information</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-2xl">📅</span>
                                        <span>Wedding date and location details</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-2xl">✉️</span>
                                        <span>RSVP form with guest management</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-2xl">📸</span>
                                        <span>Photo gallery for memories</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-2xl">🎁</span>
                                        <span>Gift registry integration</span>
                                    </div>
                                </div>
                                {auth.user && (
                                    <Link
                                        href={route('wedding.create')}
                                        className="inline-block bg-rose-600 text-white px-6 py-3 rounded-lg hover:bg-rose-700 transition-colors"
                                    >
                                        Create Your Wedding Page
                                    </Link>
                                )}
                            </div>
                        </main>
                    </div>
                </div>
            </>
        );
    }

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <>
            <Head title={`${wedding.name1} & ${wedding.name2}'s Wedding`}>
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            
            <div className="min-h-screen bg-gradient-to-b from-rose-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
                {/* Header */}
                <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50 dark:bg-gray-900/80">
                    <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                        <div className="text-xl font-bold text-rose-600">
                            {wedding.name1} & {wedding.name2}
                        </div>
                        <nav className="flex items-center gap-4">
                            <a href="#story" className="text-gray-600 hover:text-rose-600 transition-colors">Story</a>
                            <a href="#photos" className="text-gray-600 hover:text-rose-600 transition-colors">Photos</a>
                            <a href="#rsvp" className="text-gray-600 hover:text-rose-600 transition-colors">RSVP</a>
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="bg-rose-600 text-white px-4 py-2 rounded-lg hover:bg-rose-700 transition-colors text-sm"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <Link
                                    href={route('login')}
                                    className="bg-rose-600 text-white px-4 py-2 rounded-lg hover:bg-rose-700 transition-colors text-sm"
                                >
                                    Login
                                </Link>
                            )}
                        </nav>
                    </div>
                </header>

                {/* Hero Section */}
                <section className="py-20 text-center">
                    <div className="max-w-4xl mx-auto px-4">
                        <h1 className="text-6xl font-bold text-gray-800 mb-4 dark:text-white">
                            {wedding.name1} & {wedding.name2}
                        </h1>
                        {(wedding.parent1 || wedding.parent2) && (
                            <p className="text-xl text-gray-600 mb-6 dark:text-gray-300">
                                {wedding.parent1 && wedding.parent2 
                                    ? `${wedding.parent1} and ${wedding.parent2} request the honor of your presence`
                                    : `${wedding.parent1 || wedding.parent2} requests the honor of your presence`
                                }
                            </p>
                        )}
                        <div className="text-2xl text-rose-600 mb-2 font-semibold">
                            {formatDate(wedding.date)}
                        </div>
                        <div className="text-xl text-gray-700 mb-8 dark:text-gray-300">
                            📍 {wedding.location}
                        </div>
                        <div className="text-lg text-gray-600 dark:text-gray-400">
                            🎉 {rsvpCount} guests confirmed
                        </div>
                    </div>
                </section>

                {/* Story Section */}
                {wedding.story && (
                    <section id="story" className="py-16 bg-white dark:bg-gray-800">
                        <div className="max-w-4xl mx-auto px-4 text-center">
                            <h2 className="text-3xl font-bold text-gray-800 mb-8 dark:text-white">
                                💕 Our Love Story
                            </h2>
                            <div className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto dark:text-gray-300">
                                {wedding.story}
                            </div>
                        </div>
                    </section>
                )}

                {/* Photos Section */}
                {photos.length > 0 && (
                    <section id="photos" className="py-16">
                        <div className="max-w-6xl mx-auto px-4">
                            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center dark:text-white">
                                📸 Our Memories
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {photos.map((photo) => (
                                    <div key={photo.id} className="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800">
                                        <div className="h-64 bg-gradient-to-br from-rose-100 to-pink-200 flex items-center justify-center dark:from-gray-700 dark:to-gray-600">
                                            <div className="text-center text-gray-600 dark:text-gray-400">
                                                <div className="text-4xl mb-2">📷</div>
                                                <div className="text-sm">{photo.filename}</div>
                                            </div>
                                        </div>
                                        {photo.caption && (
                                            <div className="p-4">
                                                <p className="text-gray-700 dark:text-gray-300">{photo.caption}</p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* RSVP Section */}
                <section id="rsvp" className="py-16 bg-white dark:bg-gray-800">
                    <div className="max-w-2xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center dark:text-white">
                            ✉️ RSVP
                        </h2>
                        <div className="bg-rose-50 rounded-lg p-8 dark:bg-gray-700">
                            <form onSubmit={handleRsvpSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
                                        Your Name *
                                    </label>
                                    <input
                                        type="text"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                                        required
                                    />
                                    {errors.name && <div className="text-red-500 text-sm mt-1">{errors.name}</div>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                                        required
                                    />
                                    {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
                                        Will you attend? *
                                    </label>
                                    <div className="space-y-2">
                                        <label className="flex items-center">
                                            <input
                                                type="radio"
                                                value="attending"
                                                checked={data.attendance === 'attending'}
                                                onChange={(e) => setData('attendance', e.target.value as 'attending' | 'not_attending')}
                                                className="mr-3 text-rose-600 focus:ring-rose-500"
                                            />
                                            <span className="text-gray-700 dark:text-gray-300">Yes, I'll be there! 🎉</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input
                                                type="radio"
                                                value="not_attending"
                                                checked={data.attendance === 'not_attending'}
                                                onChange={(e) => setData('attendance', e.target.value as 'attending' | 'not_attending')}
                                                className="mr-3 text-rose-600 focus:ring-rose-500"
                                            />
                                            <span className="text-gray-700 dark:text-gray-300">Sorry, can't make it 😢</span>
                                        </label>
                                    </div>
                                    {errors.attendance && <div className="text-red-500 text-sm mt-1">{errors.attendance}</div>}
                                </div>

                                {data.attendance === 'attending' && (
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
                                            Number of Guests *
                                        </label>
                                        <select
                                            value={data.guest_count}
                                            onChange={(e) => setData('guest_count', parseInt(e.target.value))}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                                        >
                                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                                                <option key={num} value={num}>{num} {num === 1 ? 'guest' : 'guests'}</option>
                                            ))}
                                        </select>
                                        {errors.guest_count && <div className="text-red-500 text-sm mt-1">{errors.guest_count}</div>}
                                    </div>
                                )}

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
                                        Dietary Restrictions
                                    </label>
                                    <input
                                        type="text"
                                        value={data.dietary_restrictions}
                                        onChange={(e) => setData('dietary_restrictions', e.target.value)}
                                        placeholder="Any allergies or dietary needs?"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                                    />
                                    {errors.dietary_restrictions && <div className="text-red-500 text-sm mt-1">{errors.dietary_restrictions}</div>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
                                        Message for the Couple
                                    </label>
                                    <textarea
                                        value={data.message}
                                        onChange={(e) => setData('message', e.target.value)}
                                        placeholder="Share your wishes and excitement!"
                                        rows={4}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                                    ></textarea>
                                    {errors.message && <div className="text-red-500 text-sm mt-1">{errors.message}</div>}
                                </div>

                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="w-full bg-rose-600 text-white py-3 px-6 rounded-lg hover:bg-rose-700 transition-colors disabled:opacity-50 font-semibold"
                                >
                                    {processing ? 'Sending RSVP...' : 'Send RSVP 💌'}
                                </button>
                            </form>
                        </div>
                    </div>
                </section>

                {/* Gift Registry Section */}
                {wedding.gift_registry_url && (
                    <section className="py-16">
                        <div className="max-w-4xl mx-auto px-4 text-center">
                            <h2 className="text-3xl font-bold text-gray-800 mb-8 dark:text-white">
                                🎁 Gift Registry
                            </h2>
                            <p className="text-lg text-gray-700 mb-8 dark:text-gray-300">
                                Your presence is the greatest gift, but if you'd like to celebrate with us, we've created a registry.
                            </p>
                            <a
                                href={wedding.gift_registry_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-rose-600 text-white px-8 py-3 rounded-lg hover:bg-rose-700 transition-colors font-semibold"
                            >
                                View Our Registry
                            </a>
                        </div>
                    </section>
                )}

                {/* Footer */}
                <footer className="bg-gray-800 text-white py-8">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <p className="text-lg mb-4">
                            We can't wait to celebrate with you! 💕
                        </p>
                        <p className="text-gray-400">
                            {wedding.name1} & {wedding.name2} • {formatDate(wedding.date)}
                        </p>
                    </div>
                </footer>
            </div>
        </>
    );
}