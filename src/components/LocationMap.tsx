import React, { useEffect } from 'react';
import './LocationMap.css';

const LocationMap: React.FC = () => {
  // Restore scroll position when component mounts (user returns from maps)
  useEffect(() => {
    const savedScrollPosition = sessionStorage.getItem('scrollPosition');
    if (savedScrollPosition) {
      // Small delay to ensure page is fully loaded
      setTimeout(() => {
        window.scrollTo(0, parseInt(savedScrollPosition, 10));
        sessionStorage.removeItem('scrollPosition'); // Clean up
      }, 100);
    }
  }, []);

  const locations = [
    {
      name: "Red Bank Office",
      address: "282 Broad Street, Red Bank, NJ 07701",
      phone: "732-842-3600",
      lat: 40.3476,
      lng: -74.0676,
      hours: [
        "Monday: 8:30am - 4:30pm",
        "Tuesday: 8:30am - 4:30pm", 
        "Wednesday: 8:30am - 4:30pm",
        "Thursday: 8:30am - 4:30pm"
      ]
    },
    {
      name: "Keyport Office", 
      address: "250 Maple Place, Keyport, NJ 07735",
      phone: "732-351-7000",
      lat: 40.4431,
      lng: -74.1999,
      hours: [
        "Monday: 8:30am - 4:30pm",
        "Tuesday: 8:30am - 4:30pm",
        "Wednesday: 8:30am - 3:30pm", 
        "Thursday: 8:30am - 4:30pm",
        "Friday: 8:30am - 3:30pm"
      ]
    },
    {
      name: "Hazlet Office",
      address: "115 Clark Street, Hazlet, NJ 07730",
      phone: "732-739-1400", 
      lat: 40.4239,
      lng: -74.1487,
      hours: [
        "Tuesday: 8:30am - 3:00pm",
        "Friday: 8:30am - 3:00pm"
      ]
    },
    {
      name: "Howell Office",
      address: "3469 Route 9 North, Howell, NJ 07731",
      phone: "732-233-1480",
      lat: 40.1451,
      lng: -74.2436,
      hours: [
        "Wednesday: 9:00am - 2:45pm",
        "Friday: 9:00am - 12:45pm"
      ]
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
              <a href={`tel:${location.phone}`} className="phone">{location.phone}</a>
              <div className="hours">
                <strong>Office Hours:</strong>
                {location.hours.map((hour, hourIndex) => (
                  <p key={hourIndex} className="hour-line">{hour}</p>
                ))}
              </div>
            </div>
            <button 
              className="directions-btn"
              onClick={(e) => {
                e.preventDefault();
                
                // Save current scroll position
                const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
                sessionStorage.setItem('scrollPosition', scrollPosition.toString());
                
                const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`;
                
                // Use a more reliable method for opening maps
                const link = document.createElement('a');
                link.href = mapsUrl;
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
                
                // Temporarily add to DOM and click
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
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
        
        {/* Temporary static map of Central New Jersey focused on Red Bank area */}
        <div className="map-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48594.32794181639!2d-74.12345678952!3d40.347618479907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c226f4c3fc1c77%3A0x12d4a41c7b63f8d2!2sRed%20Bank%2C%20NJ!5e0!3m2!1sen!2sus!4v1635000000000!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Central New Jersey - Red Bank Area Map"
          ></iframe>
        </div>
        
        <div className="map-footer">
          <p>
            <strong>Need help finding us?</strong> Call any of our offices and our staff will be happy to provide detailed directions.
          </p>
          <p className="api-note">
            <em>Interactive map with office markers will be available once API configuration is complete.</em>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LocationMap; 