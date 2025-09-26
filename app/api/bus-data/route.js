import { NextResponse } from 'next/server';

// External API URL
const EXTERNAL_API_URL = 'https://www.amanabootcamp.org/api/fs-classwork-data/amana-transportation';

export async function GET() {
  try {
    console.log('Fetching data from external API...');
    
    const response = await fetch(EXTERNAL_API_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add any required headers for the external API
        'User-Agent': 'Amana-Transportation-App/1.0',
      },
      // Add cache control if needed
      cache: 'no-store', // Disable caching for real-time data
    });

    if (!response.ok) {
      console.error(`External API returned status: ${response.status}`);
      throw new Error(`External API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    
    console.log('Data fetched successfully from external API');
    
    // Return the data with proper CORS headers
    return NextResponse.json(data, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
    });

  } catch (error) {
    console.error('Error fetching bus data:', error);
    
    // Return fallback mock data if external API fails
    const fallbackData = {
      "message": "Amana Transportation bus data retrieved successfully (fallback)",
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
            }
          ],
          "incidents": [],
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
        }
      ],
      "operational_summary": {
        "total_buses": 4,
        "active_buses": 3,
        "maintenance_buses": 1,
        "out_of_service_buses": 0,
        "total_capacity": 165,
        "current_passengers": 102,
        "average_utilization": 62
      }
    };

    console.log('Using fallback data due to API error');
    
    return NextResponse.json(fallbackData, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
  }
}

// Handle OPTIONS request for CORS preflight
export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}