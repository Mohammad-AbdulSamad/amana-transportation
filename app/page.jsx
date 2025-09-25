"use client";
import React, { useState, useEffect } from 'react';
import { Bus, Menu, Users } from 'lucide-react';
import MapComponent from '../app/components/MapComponent';

const AmanaTransportation = () => {
  const [busData, setBusData] = useState(null);
  const [selectedBus, setSelectedBus] = useState(null);
  const [selectedScheduleBus, setSelectedScheduleBus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // API URL - replace with your actual API endpoint
  const API_URL = 'https://api.amanatransportation.com/buses'; // Replace with actual API

  // Fetch data from API
  useEffect(() => {
    const fetchBusData = async () => {
      try {
        setLoading(true);
        
        // Replace this with your actual API call:
        // const response = await fetch(API_URL);
        // const data = await response.json();
        // setBusData(data);
        
        // Complete mock data matching your JSON structure
        const mockData = {
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
                },
                {
                  "id": 4,
                  "name": "KL Sentral",
                  "latitude": 3.1338,
                  "longitude": 101.6869,
                  "estimated_arrival": "14:50",
                  "is_next_stop": false
                },
                {
                  "id": 5,
                  "name": "Universiti Malaya",
                  "latitude": 3.1204,
                  "longitude": 101.6535,
                  "estimated_arrival": "15:05",
                  "is_next_stop": false
                },
                {
                  "id": 6,
                  "name": "Petaling Jaya SS2",
                  "latitude": 3.1147,
                  "longitude": 101.624,
                  "estimated_arrival": "15:18",
                  "is_next_stop": false
                },
                {
                  "id": 7,
                  "name": "1 Utama Shopping Centre",
                  "latitude": 3.1502,
                  "longitude": 101.6154,
                  "estimated_arrival": "15:35",
                  "is_next_stop": false
                }
              ],
              "incidents": [],
              "vehicle_info": {
                "license_plate": "WKL 2891",
                "model": "Scania K230UB",
                "year": 2019,
                "fuel_level": 75,
                "last_maintenance": "2024-12-01"
              },
              "route_info": {
                "total_distance": 28.5,
                "average_speed": 25,
                "estimated_completion": "16:00",
                "frequency_minutes": 20
              }
            },
            {
              "id": 2,
              "name": "Old Town - Mont Kiara Connector",
              "route_number": "B205",
              "current_location": {
                "latitude": 3.139,
                "longitude": 101.6869,
                "address": "KL Sentral Transportation Hub, Kuala Lumpur"
              },
              "status": "Active",
              "passengers": {
                "current": 28,
                "capacity": 40,
                "utilization_percentage": 70
              },
              "driver": {
                "name": "Siti Aminah",
                "id": "DRV002",
                "shift_start": "05:30",
                "shift_end": "17:30"
              },
              "bus_stops": [
                {
                  "id": 1,
                  "name": "KL Sentral",
                  "latitude": 3.1338,
                  "longitude": 101.6869,
                  "estimated_arrival": "14:15",
                  "is_next_stop": false
                },
                {
                  "id": 2,
                  "name": "Central Market",
                  "latitude": 3.1427,
                  "longitude": 101.6964,
                  "estimated_arrival": "14:25",
                  "is_next_stop": true
                },
                {
                  "id": 3,
                  "name": "Chinatown",
                  "latitude": 3.1436,
                  "longitude": 101.6958,
                  "estimated_arrival": "14:30",
                  "is_next_stop": false
                },
                {
                  "id": 4,
                  "name": "Titiwangsa LRT",
                  "latitude": 3.1729,
                  "longitude": 101.7016,
                  "estimated_arrival": "14:45",
                  "is_next_stop": false
                },
                {
                  "id": 5,
                  "name": "Mont Kiara",
                  "latitude": 3.1727,
                  "longitude": 101.6509,
                  "estimated_arrival": "15:00",
                  "is_next_stop": false
                },
                {
                  "id": 6,
                  "name": "Sri Hartamas",
                  "latitude": 3.1653,
                  "longitude": 101.6493,
                  "estimated_arrival": "15:10",
                  "is_next_stop": false
                }
              ],
              "incidents": [
                {
                  "id": 1,
                  "type": "Route",
                  "description": "Detour required",
                  "reported_by": "Driver-2A",
                  "reported_time": "7:48 PM",
                  "status": "Resolved",
                  "priority": "Low"
                },
                {
                  "id": 2,
                  "type": "Passenger",
                  "description": "Wheelchair accessibility request",
                  "reported_by": "Driver-2B",
                  "reported_time": "12:19 AM",
                  "status": "Canceled",
                  "priority": "Low"
                }
              ],
              "vehicle_info": {
                "license_plate": "WKL 1547",
                "model": "Mercedes-Benz Citaro",
                "year": 2020,
                "fuel_level": 60,
                "last_maintenance": "2024-11-28"
              },
              "route_info": {
                "total_distance": 22.3,
                "average_speed": 22,
                "estimated_completion": "15:30",
                "frequency_minutes": 25
              }
            },
            {
              "id": 3,
              "name": "Airport - City Circle",
              "route_number": "B350",
              "current_location": {
                "latitude": 2.7456,
                "longitude": 101.7072,
                "address": "KLIA Express Station, Sepang, Selangor"
              },
              "status": "Active",
              "passengers": {
                "current": 15,
                "capacity": 50,
                "utilization_percentage": 30
              },
              "driver": {
                "name": "Lim Wei Ming",
                "id": "DRV003",
                "shift_start": "04:00",
                "shift_end": "16:00"
              },
              "bus_stops": [
                {
                  "id": 1,
                  "name": "KLIA Terminal 1",
                  "latitude": 2.7456,
                  "longitude": 101.7072,
                  "estimated_arrival": "14:30",
                  "is_next_stop": false
                },
                {
                  "id": 2,
                  "name": "KLIA Terminal 2",
                  "latitude": 2.7389,
                  "longitude": 101.6997,
                  "estimated_arrival": "14:40",
                  "is_next_stop": false
                },
                {
                  "id": 3,
                  "name": "Putrajaya Central",
                  "latitude": 2.9264,
                  "longitude": 101.6964,
                  "estimated_arrival": "15:10",
                  "is_next_stop": true
                },
                {
                  "id": 4,
                  "name": "Cyberjaya",
                  "latitude": 2.9213,
                  "longitude": 101.6543,
                  "estimated_arrival": "15:25",
                  "is_next_stop": false
                },
                {
                  "id": 5,
                  "name": "Bandar Tun Razak",
                  "latitude": 3.0733,
                  "longitude": 101.7317,
                  "estimated_arrival": "15:55",
                  "is_next_stop": false
                },
                {
                  "id": 6,
                  "name": "KL City Centre",
                  "latitude": 3.1519,
                  "longitude": 101.7077,
                  "estimated_arrival": "16:20",
                  "is_next_stop": false
                },
                {
                  "id": 7,
                  "name": "Batu Caves",
                  "latitude": 3.2379,
                  "longitude": 101.684,
                  "estimated_arrival": "16:45",
                  "is_next_stop": false
                },
                {
                  "id": 8,
                  "name": "Gombak Terminal",
                  "latitude": 3.2642,
                  "longitude": 101.7003,
                  "estimated_arrival": "17:00",
                  "is_next_stop": false
                }
              ],
              "incidents": [
                {
                  "id": 1,
                  "type": "Passenger",
                  "description": "Unruly passenger",
                  "reported_by": "Driver-3A",
                  "reported_time": "4:37 AM",
                  "status": "Canceled",
                  "priority": "High"
                },
                {
                  "id": 2,
                  "type": "Weather",
                  "description": "Flood on route",
                  "reported_by": "Driver-3B",
                  "reported_time": "4:44 AM",
                  "status": "Canceled",
                  "priority": "Critical"
                }
              ],
              "vehicle_info": {
                "license_plate": "WKL 3429",
                "model": "Volvo B8RLE",
                "year": 2018,
                "fuel_level": 40,
                "last_maintenance": "2024-12-03"
              },
              "route_info": {
                "total_distance": 85.2,
                "average_speed": 35,
                "estimated_completion": "17:30",
                "frequency_minutes": 45
              }
            },
            {
              "id": 4,
              "name": "University Express",
              "route_number": "B410",
              "current_location": {
                "latitude": 3.1204,
                "longitude": 101.6535,
                "address": "Universiti Malaya Main Campus, Kuala Lumpur"
              },
              "status": "Maintenance",
              "passengers": {
                "current": 0,
                "capacity": 35,
                "utilization_percentage": 0
              },
              "driver": {
                "name": "Raj Kumar",
                "id": "DRV004",
                "shift_start": "06:30",
                "shift_end": "18:30"
              },
              "bus_stops": [
                {
                  "id": 1,
                  "name": "Universiti Malaya",
                  "latitude": 3.1204,
                  "longitude": 101.6535,
                  "estimated_arrival": "N/A",
                  "is_next_stop": false
                },
                {
                  "id": 2,
                  "name": "UCSI University",
                  "latitude": 3.0411,
                  "longitude": 101.7089,
                  "estimated_arrival": "N/A",
                  "is_next_stop": false
                },
                {
                  "id": 3,
                  "name": "Taylor's University",
                  "latitude": 3.0653,
                  "longitude": 101.6075,
                  "estimated_arrival": "N/A",
                  "is_next_stop": false
                },
                {
                  "id": 4,
                  "name": "Sunway University",
                  "latitude": 3.0653,
                  "longitude": 101.6037,
                  "estimated_arrival": "N/A",
                  "is_next_stop": false
                },
                {
                  "id": 5,
                  "name": "INTI International University",
                  "latitude": 3.0534,
                  "longitude": 101.5934,
                  "estimated_arrival": "N/A",
                  "is_next_stop": false
                },
                {
                  "id": 6,
                  "name": "Monash University Malaysia",
                  "latitude": 3.0653,
                  "longitude": 101.6016,
                  "estimated_arrival": "N/A",
                  "is_next_stop": false
                }
              ],
              "incidents": [
                {
                  "id": 1,
                  "type": "Traffic",
                  "description": "Road construction delay",
                  "reported_by": "Driver-4A",
                  "reported_time": "6:26 AM",
                  "status": "Canceled",
                  "priority": "Low"
                }
              ],
              "vehicle_info": {
                "license_plate": "WKL 7856",
                "model": "Isuzu NPR",
                "year": 2017,
                "fuel_level": 85,
                "last_maintenance": "2024-12-05"
              },
              "route_info": {
                "total_distance": 45.8,
                "average_speed": 20,
                "estimated_completion": "N/A",
                "frequency_minutes": 30
              }
            },
            {
              "id": 5,
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
                },
                {
                  "id": 3,
                  "name": "Times Square KL",
                  "latitude": 3.1427,
                  "longitude": 101.7105,
                  "estimated_arrival": "14:32",
                  "is_next_stop": false
                },
                {
                  "id": 4,
                  "name": "Suria KLCC",
                  "latitude": 3.158,
                  "longitude": 101.7123,
                  "estimated_arrival": "14:40",
                  "is_next_stop": false
                },
                {
                  "id": 5,
                  "name": "Avenue K",
                  "latitude": 3.1612,
                  "longitude": 101.7197,
                  "estimated_arrival": "14:48",
                  "is_next_stop": false
                },
                {
                  "id": 6,
                  "name": "Intermark Mall",
                  "latitude": 3.1606,
                  "longitude": 101.7209,
                  "estimated_arrival": "14:52",
                  "is_next_stop": false
                },
                {
                  "id": 7,
                  "name": "Ampang Park LRT",
                  "latitude": 3.1615,
                  "longitude": 101.713,
                  "estimated_arrival": "15:00",
                  "is_next_stop": false
                },
                {
                  "id": 8,
                  "name": "Low Yat Plaza",
                  "latitude": 3.1468,
                  "longitude": 101.7099,
                  "estimated_arrival": "15:08",
                  "is_next_stop": false
                },
                {
                  "id": 9,
                  "name": "Fahrenheit 88",
                  "latitude": 3.1472,
                  "longitude": 101.7097,
                  "estimated_arrival": "15:12",
                  "is_next_stop": false
                }
              ],
              "incidents": [
                {
                  "id": 1,
                  "type": "Traffic",
                  "description": "Accident blocking route",
                  "reported_by": "Driver-5A",
                  "reported_time": "9:52 PM",
                  "status": "Reported",
                  "priority": "High"
                }
              ],
              "vehicle_info": {
        "license_plate": "WKL 9123",
        "model": "BYD K9",
        "year": 2021,
        "fuel_level": 95,
        "last_maintenance": "2024-11-30"
      },
      "route_info": {
        "total_distance": 12.7,
        "average_speed": 15,
        "estimated_completion": "15:30",
        "frequency_minutes": 15
      }
    }
  ],
  "operational_summary": {
    "total_buses": 5,
    "active_buses": 4,
    "maintenance_buses": 1,
    "out_of_service_buses": 0,
    "total_capacity": 215,
    "current_passengers": 117,
    "average_utilization": 53
  },
  "filters": {
    "available_statuses": [
      "Active",
      "Maintenance",
      "Out of Service"
    ],
    "available_routes": [
      "B101",
      "B205",
      "B350",
      "B410",
      "B520"
    ],
    "applied": {
      "status": null,
      "busId": null,
      "routeNumber": null
    }
  }
}
        
        setBusData(mockData);
        // Set first active bus as default selected
        const firstActiveBus = mockData.bus_lines.find(bus => bus.status === 'Active');
        setSelectedBus(firstActiveBus);
        setSelectedScheduleBus(firstActiveBus);
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
    const activeBuses = busData.bus_lines.filter(bus => bus.status === 'Active');
    console.log(activeBuses);
    return activeBuses;
  };

  const getNextStop = (bus) => {
    return bus.bus_stops.find(stop => stop.is_next_stop);
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
            onClick={() => window.location.reload()} 
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          >
            Retry
          </button>
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