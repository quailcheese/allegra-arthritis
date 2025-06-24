import React from 'react';
import './LocationMap.css';

const LocationMap: React.FC = () => {
  const locations = [
    {
      name: "Red Bank Office",
      address: "123 Broad St, Red Bank, NJ 07701",
      phone: "(732) 555-0101",
      hours: "Mon-Fri: 8:00 AM - 5:00 PM"
    },
    {
      name: "Keyport Office", 
      address: "456 Main St, Keyport, NJ 07735",
      phone: "(732) 555-0102",
      hours: "Mon-Fri: 9:00 AM - 4:00 PM"
    },
    {
      name: "Hazlet Office",
      address: "789 Route 35, Hazlet, NJ 07730",
      phone: "(732) 555-0103", 
      hours: "Tue, Thu: 9:00 AM - 3:00 PM"
    },
    {
      name: "Howell Office",
      address: "321 Route 9, Howell, NJ 07731",
      phone: "(732) 555-0104",
      hours: "Mon, Wed, Fri: 10:00 AM - 4:00 PM"
    }
  ];

  return (
    <div className="location-map-container">
      {/* Location Cards */}
      <div className="locations-grid">
        {locations.map((location, index) => (
          <div key={index} className="location-card">
            <div className="location-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
              </svg>
            </div>
            <div className="location-info">
              <h3>{location.name}</h3>
              <p className="address">{location.address}</p>
              <p className="phone">{location.phone}</p>
              <p className="hours">{location.hours}</p>
            </div>
            <button className="directions-btn">
              Get Directions
            </button>
          </div>
        ))}
      </div>

      {/* Map Container */}
      <div className="map-container">
        <div className="map-header">
          <h3>Find Our Locations</h3>
          <p>Convenient locations throughout Central New Jersey</p>
        </div>
        
        {/* Embedded Google Map */}
        <div className="map-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196281.1471761852!2d-74.24764842968748!3d40.366474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c22c5c5a5a5a5a%3A0x5a5a5a5a5a5a5a5a!2sRed%20Bank%2C%20NJ!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Allegra Arthritis Associates Locations"
          ></iframe>
        </div>
        
        <div className="map-footer">
          <p>
            <strong>Need help finding us?</strong> Call any of our offices and our staff will be happy to provide detailed directions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LocationMap; 