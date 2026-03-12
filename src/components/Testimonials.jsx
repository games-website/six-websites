import React from 'react';

import user1 from '../assets/images/user-1.jpg';
import user2 from '../assets/images/user-2.jpg';
import user3 from '../assets/images/user-3.jpg';

const reviews = [
    {
        name: "Rahul Sharma",
        text: "Review: \"Best platform for cricket betting. Withdrawals are super fast!\"",
        rating: 5,
        image: user1
    },
    {
        name: "Priya Patel",
        text: "Review: \"I love the casino games here. Very trustworthy site.\"",
        rating: 5,
        image: user2
    },
    {
        name: "Vikram Singh",
        text: "Review: \"Customer service is excellent. They helped me get my ID in 2 minutes.\"",
        rating: 5,
        image: user3
    }
];

export default function Testimonials() {
    return (
        <section className="py-20 bg-zinc-900 text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-yellow-500">
                    What Our Community Says
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div key={index} className="bg-black p-8 rounded-xl border border-zinc-800 relative">
                            <div className="flex text-yellow-500 mb-4">
                                {[...Array(review.rating)].map((_, i) => (
                                    <span key={i}>★</span>
                                ))}
                            </div>
                            <p className="text-gray-300 mb-6 italic">{review.text}</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center font-bold text-black">
                                    {review.name[0]}
                                </div>
                                <div>
                                    <p className="font-bold text-white">{review.name}</p>
                                    <p className="text-xs text-gray-500">Verified User</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
