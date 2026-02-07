'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface BookingData {
  // Personal Information
  fullName: string;
  email: string;
  phone: string;
  
  // Event Details
  eventType: string;
  eventDate: string;
  eventTime: string;
  venue: string;
  numberOfGuests: number;
  
  // Services
  cateringService: boolean;
  decorService: boolean;
  fullPlanningService: boolean;
  
  // Additional Details
  dietaryRequirements: string;
  specialRequests: string;
  budget: string;
}

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState<BookingData>({
    fullName: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    eventTime: '',
    venue: '',
    numberOfGuests: 0,
    cateringService: false,
    decorService: false,
    fullPlanningService: false,
    dietaryRequirements: '',
    specialRequests: '',
    budget: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setBookingData(prev => ({ ...prev, [name]: checked }));
    } else {
      setBookingData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleNext = () => {
    setStep(prev => Math.min(prev + 1, 4));
  };

  const handlePrevious = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Log booking data for now
    console.log('Booking submitted:', bookingData);

    // Show success message
    alert('Thank you for your booking request! We will contact you shortly to confirm your event details and discuss payment options.');

    // Reset form
    setBookingData({
      fullName: '',
      email: '',
      phone: '',
      eventType: '',
      eventDate: '',
      eventTime: '',
      venue: '',
      numberOfGuests: 0,
      cateringService: false,
      decorService: false,
      fullPlanningService: false,
      dietaryRequirements: '',
      specialRequests: '',
      budget: '',
    });

    // Go back to step 1
    setStep(1);
  };

  const calculateEstimate = () => {
    let total = 0;
    const guestCount = bookingData.numberOfGuests || 0;
    
    if (bookingData.cateringService) total += guestCount * 250; // R250 per guest
    if (bookingData.decorService) total += 5000; // Base decor fee
    if (bookingData.fullPlanningService) total += 10000; // Planning fee
    
    return total;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Your Event</h1>
            <p className="text-lg text-gray-600">
              Complete the form below to reserve our services for your special day
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex justify-between items-center">
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="flex items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                      step >= num ? 'bg-gold text-white' : 'bg-gray-300 text-gray-600'
                    }`}
                  >
                    {num}
                  </div>
                  {num < 4 && (
                    <div
                      className={`flex-1 h-1 mx-2 ${
                        step > num ? 'bg-gold' : 'bg-gray-300'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-sm text-gray-600">
              <span>Personal Info</span>
              <span>Event Details</span>
              <span>Services</span>
              <span>Review</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
            {/* Step 1: Personal Information */}
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
                
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={bookingData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={bookingData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={bookingData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Event Details */}
            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6">Event Details</h2>

                <div>
                  <label htmlFor="eventType" className="block text-sm font-semibold mb-2">
                    Event Type *
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={bookingData.eventType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none"
                  >
                    <option value="">Select event type</option>
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="traditional">Traditional Ceremony</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="eventDate" className="block text-sm font-semibold mb-2">
                      Event Date *
                    </label>
                    <input
                      type="date"
                      id="eventDate"
                      name="eventDate"
                      value={bookingData.eventDate}
                      onChange={handleInputChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="eventTime" className="block text-sm font-semibold mb-2">
                      Event Time *
                    </label>
                    <input
                      type="time"
                      id="eventTime"
                      name="eventTime"
                      value={bookingData.eventTime}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="venue" className="block text-sm font-semibold mb-2">
                    Venue/Location *
                  </label>
                  <input
                    type="text"
                    id="venue"
                    name="venue"
                    value={bookingData.venue}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter venue name or address"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="numberOfGuests" className="block text-sm font-semibold mb-2">
                    Number of Guests *
                  </label>
                  <input
                    type="number"
                    id="numberOfGuests"
                    name="numberOfGuests"
                    value={bookingData.numberOfGuests || ''}
                    onChange={handleInputChange}
                    required
                    min="1"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none"
                  />
                </div>
              </div>
            )}

            {/* Step 3: Services */}
            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6">Select Services</h2>

                <div className="space-y-4">
                  <label className="flex items-start gap-4 p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-gold transition-colors">
                    <input
                      type="checkbox"
                      name="cateringService"
                      checked={bookingData.cateringService}
                      onChange={handleInputChange}
                      className="mt-1 w-5 h-5 text-gold focus:ring-gold"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-1">Premium Catering</h3>
                      <p className="text-gray-600 mb-2">
                        Exquisite menus with the finest ingredients, tailored to your preferences
                      </p>
                      <p className="text-gold font-semibold">From R250 per guest</p>
                    </div>
                  </label>

                  <label className="flex items-start gap-4 p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-gold transition-colors">
                    <input
                      type="checkbox"
                      name="decorService"
                      checked={bookingData.decorService}
                      onChange={handleInputChange}
                      className="mt-1 w-5 h-5 text-gold focus:ring-gold"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-1">Event Decor</h3>
                      <p className="text-gray-600 mb-2">
                        Transform your venue with elegant, cohesive designs
                      </p>
                      <p className="text-gold font-semibold">From R5,000</p>
                    </div>
                  </label>

                  <label className="flex items-start gap-4 p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-gold transition-colors">
                    <input
                      type="checkbox"
                      name="fullPlanningService"
                      checked={bookingData.fullPlanningService}
                      onChange={handleInputChange}
                      className="mt-1 w-5 h-5 text-gold focus:ring-gold"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-1">Full Event Planning</h3>
                      <p className="text-gray-600 mb-2">
                        Comprehensive planning from concept to execution
                      </p>
                      <p className="text-gold font-semibold">From R10,000</p>
                    </div>
                  </label>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-semibold mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={bookingData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none"
                  >
                    <option value="">Select budget range</option>
                    <option value="10000-25000">R10,000 - R25,000</option>
                    <option value="25000-50000">R25,000 - R50,000</option>
                    <option value="50000-100000">R50,000 - R100,000</option>
                    <option value="100000+">R100,000+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="dietaryRequirements" className="block text-sm font-semibold mb-2">
                    Dietary Requirements
                  </label>
                  <textarea
                    id="dietaryRequirements"
                    name="dietaryRequirements"
                    value={bookingData.dietaryRequirements}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="Any allergies, vegetarian, vegan, halal requirements, etc."
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none resize-none"
                  />
                </div>

                <div>
                  <label htmlFor="specialRequests" className="block text-sm font-semibold mb-2">
                    Special Requests
                  </label>
                  <textarea
                    id="specialRequests"
                    name="specialRequests"
                    value={bookingData.specialRequests}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="Any special requests or additional information..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none resize-none"
                  />
                </div>
              </div>
            )}

            {/* Step 4: Review & Submit */}
            {step === 4 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6">Review Your Booking</h2>

                <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                  <div>
                    <h3 className="font-bold text-lg mb-2">Personal Information</h3>
                    <p className="text-gray-700">Name: {bookingData.fullName}</p>
                    <p className="text-gray-700">Email: {bookingData.email}</p>
                    <p className="text-gray-700">Phone: {bookingData.phone}</p>
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="font-bold text-lg mb-2">Event Details</h3>
                    <p className="text-gray-700">Type: {bookingData.eventType}</p>
                    <p className="text-gray-700">Date: {bookingData.eventDate}</p>
                    <p className="text-gray-700">Time: {bookingData.eventTime}</p>
                    <p className="text-gray-700">Venue: {bookingData.venue}</p>
                    <p className="text-gray-700">Guests: {bookingData.numberOfGuests}</p>
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="font-bold text-lg mb-2">Selected Services</h3>
                    {bookingData.cateringService && (
                      <p className="text-gray-700">✓ Premium Catering</p>
                    )}
                    {bookingData.decorService && (
                      <p className="text-gray-700">✓ Event Decor</p>
                    )}
                    {bookingData.fullPlanningService && (
                      <p className="text-gray-700">✓ Full Event Planning</p>
                    )}
                    {!bookingData.cateringService && !bookingData.decorService && !bookingData.fullPlanningService && (
                      <p className="text-gray-500 italic">No services selected</p>
                    )}
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="font-bold text-lg mb-2">Estimated Total</h3>
                    <p className="text-3xl font-bold text-gold">
                      R {calculateEstimate().toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      * This is an estimate. Final quote will be provided after consultation.
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Note:</strong> This is a booking request. We will contact you within 24 hours
                    to confirm availability and discuss payment arrangements.
                  </p>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t">
              {step > 1 && (
                <button
                  type="button"
                  onClick={handlePrevious}
                  className="px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Previous
                </button>
              )}

              {step < 4 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="ml-auto px-6 py-3 bg-gold hover:bg-gold-dark text-white rounded-lg font-semibold transition-colors"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="ml-auto px-8 py-3 bg-gold hover:bg-gold-dark text-white rounded-lg font-bold transition-colors"
                >
                  Submit Booking Request
                </button>
              )}
            </div>
          </form>

          {/* Back to Home Link */}
          <div className="text-center mt-8">
            <Link href="/" className="text-gold hover:text-gold-dark font-semibold">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

