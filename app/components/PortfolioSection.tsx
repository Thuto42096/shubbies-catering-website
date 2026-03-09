'use client';

import Image from 'next/image';
import { useState } from 'react';

const portfolioItems = [
  { id: 1, image: '/images/portfolio1.jpeg', title: 'Elegant Wedding Reception', category: 'Weddings' },
  { id: 2, image: '/images/portfolio2.jpeg', title: 'Corporate Gala Dinner', category: 'Corporate' },
  { id: 3, image: '/images/portfolio3.jpeg', title: 'Birthday Celebration', category: 'Birthdays' },
  { id: 4, image: '/images/portfolio4.jpeg', title: 'Garden Party Setup', category: 'Parties' },
  { id: 5, image: '/images/portfolio5.jpeg', title: 'Traditional Ceremony', category: 'Traditional' },
  { id: 6, image: '/images/portfolio6.jpeg', title: 'Luxury Banquet', category: 'Corporate' },
  { id: 7, image: '/images/portfolio7.jpeg', title: 'Bridal Table Decor', category: 'Weddings' },
  { id: 8, image: '/images/portfolio8.jpeg', title: 'Year-End Function', category: 'Corporate' },
  { id: 9, image: '/images/portfolio9.jpeg', title: 'Kids Birthday Party', category: 'Birthdays' },
  { id: 10, image: '/images/portfolio10.jpeg', title: 'Cocktail Evening', category: 'Parties' },
  { id: 11, image: '/images/portfolio11.jpeg', title: 'Lobola Ceremony', category: 'Traditional' },
  { id: 12, image: '/images/portfolio12.jpeg', title: 'Awards Dinner', category: 'Corporate' },
  { id: 13, image: '/images/portfolio13.jpeg', title: 'Wedding Canopy Setup', category: 'Weddings' },
  { id: 14, image: '/images/portfolio14.jpeg', title: 'Product Launch Event', category: 'Corporate' },
  { id: 15, image: '/images/portfolio15.jpeg', title: 'Sweet 16 Celebration', category: 'Birthdays' },
  { id: 16, image: '/images/portfolio16.jpeg', title: 'Rooftop Party', category: 'Parties' },
  { id: 17, image: '/images/portfolio17.jpeg', title: 'Umembeso Ceremony', category: 'Traditional' },
  { id: 18, image: '/images/portfolio18.jpeg', title: 'Conference Catering', category: 'Corporate' },
  { id: 19, image: '/images/portfolio19.jpeg', title: 'Outdoor Wedding Setup', category: 'Weddings' },
  { id: 20, image: '/images/portfolio20.jpeg', title: 'Milestone Birthday', category: 'Birthdays' },
  { id: 21, image: '/images/portfolio21.jpeg', title: 'Pool Party Catering', category: 'Parties' },
  { id: 22, image: '/images/portfolio22.jpeg', title: 'Heritage Day Feast', category: 'Traditional' },
  { id: 23, image: '/images/portfolio23.jpeg', title: 'Wedding Buffet Spread', category: 'Weddings' },
  { id: 24, image: '/images/portfolio24.jpeg', title: 'Staff Appreciation Dinner', category: 'Corporate' },
  { id: 25, image: '/images/portfolio25.jpeg', title: 'Surprise Birthday Party', category: 'Birthdays' },
  { id: 26, image: '/images/portfolio26.jpeg', title: 'Garden Cocktail Party', category: 'Parties' },
  { id: 27, image: '/images/portfolio27.jpeg', title: 'Makoti Welcome Ceremony', category: 'Traditional' },
  { id: 28, image: '/images/portfolio28.jpeg', title: 'Wedding Reception Decor', category: 'Weddings' },
  { id: 29, image: '/images/portfolio29.jpeg', title: 'Executive Boardroom Lunch', category: 'Corporate' },
  { id: 30, image: '/images/portfolio30.jpeg', title: 'Graduation Celebration', category: 'Birthdays' },
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

