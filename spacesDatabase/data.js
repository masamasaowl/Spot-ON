const sampleSpaces = [
    {
        name: "Phoenix Market City",
        address: "Nagar Road, Viman Nagar",
        city: "Pune",
        state: "Maharashtra",
        pincode: "411014",
        location: {
            type: "Point",
            coordinates: [73.906, 18.5679]
        },
        totalParkingSpots: 500,
        phone: "+91-9876543210",
        operatingHours: "10:00 AM - 11:00 PM",
        createdAt: new Date()
    },
    {
        name: "Amanora Mall",
        address: "Hadapsar-Kharadi Bypass Road, Hadapsar",
        city: "Pune",
        state: "Maharashtra",
        pincode: "411028",
        location: {
            type: "Point",
            coordinates: [73.9346, 18.5196]
        },
        totalParkingSpots: 450,
        phone: "+91-8765432109",
        operatingHours: "11:00 AM - 10:00 PM",
        createdAt: new Date()
    },
    {
        name: "Seasons Mall",
        address: "Magarpatta City, Hadapsar",
        city: "Pune",
        state: "Maharashtra",
        pincode: "411013",
        location: {
            type: "Point",
            coordinates: [73.9272, 18.5182]
        },
        totalParkingSpots: 400,
        phone: "+91-7654321098",
        operatingHours: "10:00 AM - 10:00 PM",
        createdAt: new Date()
    },
    {
        name: "Phoenix Palladium",
        address: "Lower Parel, Mumbai",
        city: "Mumbai",
        state: "Maharashtra",
        pincode: "400013",
        location: {
            type: "Point",
            coordinates: [72.8258, 18.9934]
        },
        totalParkingSpots: 600,
        phone: "+91-7012345678",
        operatingHours: "10:00 AM - 11:00 PM",
        createdAt: new Date()
    },
    {
        name: "R City Mall",
        address: "Ghatkopar West, Mumbai",
        city: "Mumbai",
        state: "Maharashtra",
        pincode: "400086",
        location: {
            type: "Point",
            coordinates: [72.9243, 19.1044]
        },
        totalParkingSpots: 550,
        phone: "+91-8123456789",
        operatingHours: "10:00 AM - 10:30 PM",
        createdAt: new Date()
    },
    {
        name: "High Street Phoenix",
        address: "Worli, Mumbai",
        city: "Mumbai",
        state: "Maharashtra",
        pincode: "400018",
        location: {
            type: "Point",
            coordinates: [72.8235, 18.9935]
        },
        totalParkingSpots: 500,
        phone: "+91-9234567890",
        operatingHours: "10:00 AM - 10:00 PM",
        createdAt: new Date()
    },
    {
        name: "DLF Mall of India",
        address: "Sector 18, Noida",
        city: "Noida",
        state: "Uttar Pradesh",
        pincode: "201301",
        location: {
            type: "Point",
            coordinates: [77.3218, 28.5708]
        },
        totalParkingSpots: 700,
        phone: "+91-9345678901",
        operatingHours: "11:00 AM - 9:30 PM",
        createdAt: new Date()
    },
    {
        name: "Select Citywalk",
        address: "Saket, Delhi",
        city: "Delhi",
        state: "Delhi",
        pincode: "110017",
        location: {
            type: "Point",
            coordinates: [77.2197, 28.5273]
        },
        totalParkingSpots: 450,
        phone: "+91-9456789012",
        operatingHours: "10:30 AM - 9:30 PM",
        createdAt: new Date()
    },
    {
        name: "Ambience Mall",
        address: "DLF Phase 3, Gurgaon",
        city: "Gurgaon",
        state: "Haryana",
        pincode: "122002",
        location: {
            type: "Point",
            coordinates: [77.0933, 28.5045]
        },
        totalParkingSpots: 650,
        phone: "+91-9567890123",
        operatingHours: "10:00 AM - 10:00 PM",
        createdAt: new Date()
    },
    {
        name: "Pacific Mall",
        address: "Tagore Garden, Delhi",
        city: "Delhi",
        state: "Delhi",
        pincode: "110027",
        location: {
            type: "Point",
            coordinates: [77.1238, 28.6553]
        },
        totalParkingSpots: 400,
        phone: "+91-9678901234",
        operatingHours: "10:30 AM - 9:00 PM",
        createdAt: new Date()
    },
    {
        name: "Phoenix Market City",
        address: "Nagar Road, Viman Nagar",
        city: "Pune",
        state: "Maharashtra",
        pincode: "411014",
        location: {
            type: "Point",
            coordinates: [73.906, 18.5679]
        },
        totalParkingSpots: 500,
        phone: "+91-9876543210",
        operatingHours: "10:00 AM - 11:00 PM",
        createdAt: new Date()
    },
    {
        name: "Amanora Mall",
        address: "Hadapsar-Kharadi Bypass Road, Hadapsar",
        city: "Pune",
        state: "Maharashtra",
        pincode: "411028",
        location: {
            type: "Point",
            coordinates: [73.9346, 18.5196]
        },
        totalParkingSpots: 450,
        phone: "+91-8765432109",
        operatingHours: "11:00 AM - 10:00 PM",
        createdAt: new Date()
    },
    {
        name: "Seasons Mall",
        address: "Magarpatta City, Hadapsar",
        city: "Pune",
        state: "Maharashtra",
        pincode: "411013",
        location: {
            type: "Point",
            coordinates: [73.9272, 18.5182]
        },
        totalParkingSpots: 400,
        phone: "+91-7654321098",
        operatingHours: "10:00 AM - 10:00 PM",
        createdAt: new Date()
    },
    {
        name: "Phoenix Palladium",
        address: "Lower Parel, Mumbai",
        city: "Mumbai",
        state: "Maharashtra",
        pincode: "400013",
        location: {
            type: "Point",
            coordinates: [72.8258, 18.9934]
        },
        totalParkingSpots: 600,
        phone: "+91-7012345678",
        operatingHours: "10:00 AM - 11:00 PM",
        createdAt: new Date()
    },
    {
        name: "R City Mall",
        address: "Ghatkopar West, Mumbai",
        city: "Mumbai",
        state: "Maharashtra",
        pincode: "400086",
        location: {
            type: "Point",
            coordinates: [72.9243, 19.1044]
        },
        totalParkingSpots: 550,
        phone: "+91-8123456789",
        operatingHours: "10:00 AM - 10:30 PM",
        createdAt: new Date()
    },
    {
        name: "High Street Phoenix",
        address: "Worli, Mumbai",
        city: "Mumbai",
        state: "Maharashtra",
        pincode: "400018",
        location: {
            type: "Point",
            coordinates: [72.8235, 18.9935]
        },
        totalParkingSpots: 500,
        phone: "+91-9234567890",
        operatingHours: "10:00 AM - 10:00 PM",
        createdAt: new Date()
    },
    {
        name: "DLF Mall of India",
        address: "Sector 18, Noida",
        city: "Noida",
        state: "Uttar Pradesh",
        pincode: "201301",
        location: {
            type: "Point",
            coordinates: [77.3218, 28.5708]
        },
        totalParkingSpots: 700,
        phone: "+91-9345678901",
        operatingHours: "11:00 AM - 9:30 PM",
        createdAt: new Date()
    },
    {
        name: "Select Citywalk",
        address: "Saket, Delhi",
        city: "Delhi",
        state: "Delhi",
        pincode: "110017",
        location: {
            type: "Point",
            coordinates: [77.2197, 28.5273]
        },
        totalParkingSpots: 450,
        phone: "+91-9456789012",
        operatingHours: "10:30 AM - 9:30 PM",
        createdAt: new Date()
    },
    {
        name: "Ambience Mall",
        address: "DLF Phase 3, Gurgaon",
        city: "Gurgaon",
        state: "Haryana",
        pincode: "122002",
        location: {
            type: "Point",
            coordinates: [77.0933, 28.5045]
        },
        totalParkingSpots: 650,
        phone: "+91-9567890123",
        operatingHours: "10:00 AM - 10:00 PM",
        createdAt: new Date()
    },
    {
        name: "Pacific Mall",
        address: "Tagore Garden, Delhi",
        city: "Delhi",
        state: "Delhi",
        pincode: "110027",
        location: {
            type: "Point",
            coordinates: [77.1238, 28.6553]
        },
        totalParkingSpots: 400,
        phone: "+91-9678901234",
        operatingHours: "10:30 AM - 9:00 PM",
        createdAt: new Date()
    }
];


module.exports = { data: sampleSpaces };