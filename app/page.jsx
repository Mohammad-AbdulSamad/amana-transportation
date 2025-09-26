"use client";
import React, { useState, useEffect } from 'react';
import { Bus, Menu, Users } from 'lucide-react';
import dynamic from "next/dynamic";

// Load MapComponent only on client side to avoid SSR issues
const MapComponent = dynamic(() => import("./components/MapComponent"), {
  ssr: false,
  loading: () => (
    <div className="h-80 w-full bg-gray-100 rounded-lg flex items-center justify-center">
      <p className="text-gray-600">Loading map...</p>
    </div>
  ),
});

const AmanaTransportation = () => {
  const [busData, setBusData] = useState(null);
  const [selectedBus, setSelectedBus] = useState(null);
  const [selectedScheduleBus, setSelectedScheduleBus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from API
  useEffect(() => {
    const fetchBusData = async () => {
      try {
        setLoading(true);
        
        // Try API first, fall back to mock data if CORS fails
        let data;
        try {
          const response = await fetch('/api/bus-data', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          
          data = await response.json();
        } catch (apiError) {
          console.warn('API fetch failed, using mock data:', apiError);
          
          // Fallback to mock data
          data = {
            "message": "Amana Transportation bus data retrieved successfully",
            "company_info": {
              "name": "Amana Transportation",
              "founded": "2019",
              "headquarters": "Kuala Lumpur, Malaysia",
              "industry": "Public Transportation",
              "description": "Modern public bus service connecting key areas in Kuala Lumpur and surrounding regions, focused on reliability and passenger comfort."
            },
            "bus_lines": [
              {
                "id": 1,
                "name": "KLCC - Petaling Jaya Express",
                "route_number": "B101",
                "current_location": {
                  "latitude": 3.158,
                  "longitude": 101.711,
                  "address": "Jalan Ampang, near KLCC Twin Towers, Kuala Lumpur"
                },
                "status": "Active",
                "passengers": {
                  "current": 32,
                  "capacity": 45,
                  "utilization_percentage": 71
                },
                "driver": {
                  "name": "Ahmad Rahman",
                  "id": "DRV001",
                  "shift_start": "06:00",
                  "shift_end": "18:00"
                },
                "bus_stops": [
                  {
                    "id": 1,
                    "name": "KLCC Station",
                    "latitude": 3.1578,
                    "longitude": 101.7114,
                    "estimated_arrival": "14:20",
                    "is_next_stop": true
                  },
                  {
                    "id": 2,
                    "name": "Pavilion KL",
                    "latitude": 3.149,
                    "longitude": 101.7101,
                    "estimated_arrival": "14:28",
                    "is_next_stop": false
                  },
                  {
                    "id": 3,
                    "name": "Mid Valley Megamall",
                    "latitude": 3.1177,
                    "longitude": 101.6774,
                    "estimated_arrival": "14:42",
                    "is_next_stop": false
                  }
                ]
              },
              {
                "id": 2,
                "name": "Shopping District Shuttle",
                "route_number": "B520",
                "current_location": {
                  "latitude": 3.149,
                  "longitude": 101.7101,
                  "address": "Pavilion Kuala Lumpur, Bukit Bintang"
                },
                "status": "Active",
                "passengers": {
                  "current": 42,
                  "capacity": 45,
                  "utilization_percentage": 93
                },
                "driver": {
                  "name": "Fatimah Zahra",
                  "id": "DRV005",
                  "shift_start": "07:00",
                  "shift_end": "19:00"
                },
                "bus_stops": [
                  {
                    "id": 1,
                    "name": "Pavilion KL",
                    "latitude": 3.149,
                    "longitude": 101.7101,
                    "estimated_arrival": "14:22",
                    "is_next_stop": false
                  },
                  {
                    "id": 2,
                    "name": "Lot 10 Shopping Centre",
                    "latitude": 3.1479,
                    "longitude": 101.71,
                    "estimated_arrival": "14:25",
                    "is_next_stop": true
                  }
                ]
              }
            ]
          };
        }
        
        setBusData(data);
        
        // Set first active bus as default selected
        const firstActiveBus = data.bus_lines.find(bus => bus.status === 'Active');
        if (firstActiveBus) {
          setSelectedBus(firstActiveBus);
          setSelectedScheduleBus(firstActiveBus);
        }
      } catch (err) {
        setError('Failed to fetch bus data');
        console.error('Error fetching bus data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBusData();
  }, []);

  const getActiveBuses = () => {
    if (!busData) return [];
    return busData.bus_lines.filter(bus => bus.status === 'Active');
  };

  const getNextStop = (bus) => {
    return bus.bus_stops.find(stop => stop.is_next_stop);
  };

  // Safe reload function for Vercel
  const handleReload = () => {
    if (typeof window !== "undefined") {
      window.location.reload();
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Bus className="w-12 h-12 text-green-500 mx-auto mb-4 animate-pulse" />
          <p className="text-gray-600">Loading bus data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={handleReload}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!busData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">No bus data available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gray-800 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <Bus className="w-8 h-8 text-green-400" />
              <span className="text-xl font-bold">Amana Transportation</span>
            </div>
            <Menu className="w-6 h-6 cursor-pointer hover:text-green-400" />
          </div>
        </div>
      </header>

      {/* Title Section */}
      <div className="bg-green-400 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Amana Transportation</h1>
          <p className="text-green-100">Real-time Bus Tracking • Fast & Reliable Service</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Active Bus Map Section */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Active Bus Map</h2>
          
          {/* Bus Route Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {getActiveBuses().map((bus) => (
              <button
                key={bus.id}
                onClick={() => setSelectedBus(bus)}
                className={`p-3 rounded-lg font-medium transition-colors ${
                  selectedBus?.id === bus.id
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {bus.route_number}
              </button>
            ))}
          </div>

          {/* Map */}
          {selectedBus && (
            <div className="w-full">
              <MapComponent 
                busData={{ bus_lines: [selectedBus] }}
                selectedBusId={selectedBus.id}
              />
            </div>
          )}
        </div>

        {/* Bus Schedule Section */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Bus Schedule</h2>
          
          {/* Bus Selection Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {busData.bus_lines.map((bus) => (
              <button
                key={bus.id}
                onClick={() => setSelectedScheduleBus(bus)}
                className={`p-3 rounded-lg font-medium transition-colors ${
                  selectedScheduleBus?.id === bus.id
                    ? 'bg-green-500 text-white'
                    : bus.status === 'Maintenance'
                    ? 'bg-red-200 text-red-700 cursor-not-allowed'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                disabled={bus.status === 'Maintenance'}
              >
                {bus.route_number}
              </button>
            ))}
          </div>

          {/* Schedule Table */}
          {selectedScheduleBus && (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-yellow-200">
                    <th className="text-left p-3 font-semibold">Bus Stop</th>
                    <th className="text-left p-3 font-semibold">Next Time of Arrival</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedScheduleBus.bus_stops.length > 0 ? (
                    selectedScheduleBus.bus_stops.map((stop) => (
                      <tr
                        key={stop.id}
                        className={`border-b ${
                          stop.is_next_stop 
                            ? 'bg-orange-100 border-orange-200' 
                            : 'hover:bg-gray-50'
                        }`}
                      >
                        <td className={`p-3 ${stop.is_next_stop ? 'font-semibold text-orange-800' : ''}`}>
                          {stop.name}
                        </td>
                        <td className={`p-3 ${stop.is_next_stop ? 'font-semibold text-orange-800' : ''}`}>
                          {stop.estimated_arrival || 'N/A'}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="2" className="p-3 text-center text-gray-500">
                        {selectedScheduleBus.status === 'Maintenance' 
                          ? 'Bus is currently under maintenance' 
                          : 'No stops available'}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Amana Transportation. All rights reserved.</p>
          <p className="text-gray-400 mt-2">Modern public bus service for Kuala Lumpur and surrounding regions</p>
        </div>
      </footer>
    </div>
  );
};

export default AmanaTransportation;
     