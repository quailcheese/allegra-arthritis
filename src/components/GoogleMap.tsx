import React, { useRef, useEffect } from 'react';

// Extend the Window interface to include google
declare global {
  interface Window {
    google: typeof google;
  }
}

interface Location {
  name: string;
  address: string;
  phone: string;
  lat: number;
  lng: number;
}

interface GoogleMapProps {
  locations: Location[];
  apiKey: string;
}

// Global flag to track if Google Maps is loading
let isGoogleMapsLoading = false;
let googleMapsLoadPromise: Promise<void> | null = null;

const loadGoogleMapsScript = (apiKey: string): Promise<void> => {
  // If already loaded, resolve immediately
  if (window.google && window.google.maps) {
    return Promise.resolve();
  }

  // If already loading, return the existing promise
  if (isGoogleMapsLoading && googleMapsLoadPromise) {
    return googleMapsLoadPromise;
  }

  // Check if script already exists in DOM
  const existingScript = document.querySelector(`script[src*="maps.googleapis.com"]`);
  if (existingScript) {
    return new Promise((resolve) => {
      if (window.google && window.google.maps) {
        resolve();
      } else {
        existingScript.addEventListener('load', () => resolve());
      }
    });
  }

  // Create new loading promise
  isGoogleMapsLoading = true;
  googleMapsLoadPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=marker`;
    script.async = true;
    script.defer = true;
    
    script.onload = () => {
      isGoogleMapsLoading = false;
      resolve();
    };
    
    script.onerror = () => {
      isGoogleMapsLoading = false;
      reject(new Error('Failed to load Google Maps script'));
    };
    
    document.head.appendChild(script);
  });

  return googleMapsLoadPromise;
};

const GoogleMap: React.FC<GoogleMapProps> = ({ locations, apiKey }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);

  useEffect(() => {
    const initMap = () => {
      if (!mapRef.current) return;

      // Center the map on Central New Jersey (between all locations)
      const center = {
        lat: 40.35,
        lng: -74.1
      };

      // Create the map
      const map = new google.maps.Map(mapRef.current, {
        zoom: 11,
        center: center,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [
          {
            featureType: 'poi',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }]
          }
        ]
      });

      mapInstanceRef.current = map;

      // Create markers for each location
      locations.forEach((location, index) => {
        const marker = new google.maps.Marker({
          position: { lat: location.lat, lng: location.lng },
          map: map,
          title: location.name,
          animation: google.maps.Animation.DROP,
        });

        // Create info window content
        const infoWindowContent = `
          <div style="padding: 10px; max-width: 250px;">
            <h3 style="margin: 0 0 8px 0; color: #2c3e50; font-size: 16px;">${location.name}</h3>
            <p style="margin: 0 0 8px 0; color: #555; font-size: 14px;">${location.address}</p>
            <p style="margin: 0 0 8px 0; color: #3498db; font-size: 14px;">
              <a href="tel:${location.phone}" style="color: #3498db; text-decoration: none;">${location.phone}</a>
            </p>
            <button 
              onclick="window.open('https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(location.address)}', '_blank')"
              style="background: #3498db; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; font-size: 14px;"
            >
              Get Directions
            </button>
          </div>
        `;

        const infoWindow = new google.maps.InfoWindow({
          content: infoWindowContent
        });

        // Add click listener to marker
        marker.addListener('click', () => {
          // Close any open info windows
          infoWindow.open(map, marker);
        });
      });

      // Fit map to show all markers
      const bounds = new google.maps.LatLngBounds();
      locations.forEach(location => {
        bounds.extend({ lat: location.lat, lng: location.lng });
      });
      map.fitBounds(bounds);
      
      // Set a minimum zoom level
      const listener = google.maps.event.addListener(map, "idle", function() {
        const currentZoom = map.getZoom();
        if (currentZoom && currentZoom > 12) map.setZoom(12);
        google.maps.event.removeListener(listener);
      });
    };

    // Load Google Maps script and then initialize map
    loadGoogleMapsScript(apiKey)
      .then(() => {
        initMap();
      })
      .catch((error) => {
        console.error('Error loading Google Maps:', error);
      });

    // Cleanup function
    return () => {
      mapInstanceRef.current = null;
    };
  }, [locations, apiKey]);

  return (
    <div 
      ref={mapRef} 
      style={{ 
        width: '100%', 
        height: '450px', 
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }} 
    />
  );
};

export default GoogleMap; 