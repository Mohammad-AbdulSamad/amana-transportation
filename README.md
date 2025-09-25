# Amana Transportation

A modern, real-time bus tracking web application for Kuala Lumpur and surrounding regions. Built with React and Leaflet, providing users with live bus locations, schedules, and route information.

## Features

### Real-Time Bus Tracking
- Live bus locations on interactive map
- Real-time passenger capacity monitoring
- Current bus status (Active, Maintenance, Out of Service)
- Next stop highlighting with estimated arrival times

### Interactive Map
- Clean, minimalist grey map design
- Custom bus and bus stop markers
- Route visualization with dashed lines
- Click on bus markers to view detailed information
- Click on bus stop markers to see arrival times
- Orange highlighting for next stops

### Bus Schedule Management
- Complete bus schedule table
- Multiple route support (B101, B205, B350, B410, B520)
- Next stop highlighting in schedule
- Maintenance status indicators

### Route Information
- Multiple bus lines covering key areas:
  - **B101**: KLCC - Petaling Jaya Express
  - **B205**: Old Town - Mont Kiara Connector
  - **B350**: Airport - City Circle
  - **B410**: University Express
  - **B520**: Shopping District Shuttle

## Tech Stack

- **Frontend**: React 18
- **Map**: Leaflet & React-Leaflet
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **API**: RESTful API integration ready

## Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup
1. Clone the repository:
```bash
git clone https://github.com/your-username/amana-transportation.git
cd amana-transportation
```

2. Install dependencies:
```bash
npm install
```

3. Install required packages:
```bash
npm install leaflet react-leaflet lucide-react
```

4. Import Leaflet CSS in your main CSS file:
```css
@import url('https://unpkg.com/leaflet@1.9.4/dist/leaflet.css');
```

5. Start the development server:
```bash
npm start
```

## API Integration

The application is designed to work with a RESTful API. Update the API endpoint in `App.jsx`:

```javascript
const API_URL = 'https://your-api-endpoint.com/buses';
```

### Expected API Response Format
```json
{
  "message": "Amana Transportation bus data retrieved successfully",
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
      "bus_stops": [
        {
          "id": 1,
          "name": "KLCC Station",
          "latitude": 3.1578,
          "longitude": 101.7114,
          "estimated_arrival": "14:20",
          "is_next_stop": true
        }
      ]
    }
  ]
}
```

## File Structure

```
src/
├── App.jsx                 # Main application component
├── MapComponent.jsx        # Leaflet map component
├── index.css              # Global styles (includes Leaflet CSS)
└── index.js               # Application entry point
```

## Components

### App.jsx
Main application component handling:
- API data fetching
- State management
- Bus selection logic
- Schedule display
- Loading and error states

### MapComponent.jsx
Interactive map component featuring:
- Real-time bus location display
- Bus stop markers with arrival information
- Route visualization
- Click interactions and popups
- Responsive design

## Key Features in Detail

### Bus Information Popup
When clicking on a bus marker, users see:
- Bus route number and name
- Current status with visual indicator
- Passenger capacity percentage
- Next stop information
- Current passenger count

### Bus Stop Information
When clicking on bus stop markers, users see:
- Stop name
- Next bus arrival time
- Special highlighting for next stops

### Schedule Table
- Complete list of all bus stops
- Estimated arrival times
- Orange highlighting for the next stop
- Maintenance status handling

## Customization

### Map Styling
The application uses a light grey map theme. To change the map style, update the TileLayer URL in `MapComponent.jsx`:

```javascript
// Current: Light grey theme
url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"

// Alternative: Minimal light theme
url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
```

### Icons
Bus and bus stop icons can be customized by updating the icon URLs in `MapComponent.jsx`:

```javascript
const busIcon = new L.Icon({
  iconUrl: "https://your-custom-bus-icon.png",
  iconSize: [40, 40],
});
```

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For questions or support, please contact:
- Email: support@amanatransportation.com
- GitHub: [@your-username](https://github.com/your-username)

## Acknowledgments

- OpenStreetMap contributors for map data
- Stadia Maps for tile services
- Leaflet community for the mapping library
- React community for the framework

---

**Note**: This application is designed for the Kuala Lumpur metropolitan area and surrounding regions. GPS coordinates are specific to Malaysian locations.
