'use client';

import Image from 'next/image';
import { useState } from 'react';

const portfolioItems = [
  { id: 1, image: '/images/portfolio1.jpg', title: 'Elegant Wedding Reception', category: 'Weddings' },
  { id: 2, image: '/images/portfolio2.jpg', title: 'Corporate Gala Dinner', category: 'Corporate' },
  { id: 3, image: '/images/portfolio3.jpg', title: 'Birthday Celebration', category: 'Birthdays' },
  { id: 4, image: '/images/portfolio4.jpg', title: 'Garden Party Setup', category: 'Parties' },
  { id: 5, image: '/images/portfolio5.jpg', title: 'Traditional Ceremony', category: 'Traditional' },
  { id: 6, image: '/images/portfolio6.jpg', title: 'Luxury Banquet', category: 'Corporate' },
];

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Weddings', 'Corporate', 'Birthdays', 'Parties', 'Traditional'];

  const filteredItems = selectedCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section className="py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our Portfolio
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Explore our collection of beautifully executed events
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gold text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative h-80 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-sm font-semibold text-gold mb-2">{item.category}</p>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

