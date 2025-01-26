const locations = [
    // Spaces (Malls and Workspaces)
    {
        name: "Phoenix Market City",
        address: "Viman Nagar, Pune",
        city: "Pune",
        state: "Maharashtra",
        pincode: "411014",
        location: { type: "Point", coordinates: [73.916948658, 18.563262720] },
        totalParkingSpots: 500,
        type: "mall",
        description: "A grand mall with top brands, eateries, and a multiplex.",
        imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?fit=max&w=1080",
        createdAt: new Date()
    },
    {
        name: "Infosys Campus",
        address: "Electronic City, Bangalore",
        city: "Bangalore",
        state: "Karnataka",
        pincode: "560100",
        location: { type: "Point", coordinates: [77.683759543, 12.849838645] },
        totalParkingSpots: 800,
        type: "workspace",
        description: "A sprawling IT workspace with state-of-the-art facilities.",
        imageUrl: "https://images.unsplash.com/photo-1573496529574-be85d6a60704?fit=max&w=1080",
        createdAt: new Date()
    },
    {
        name: "Amanora Mall",
        address: "Hadapsar-Kharadi Bypass Road, Pune",
        city: "Pune",
        state: "Maharashtra",
        pincode: "411028",
        location: { type: "Point", coordinates: [73.934622534, 18.519611478] },
        totalParkingSpots: 450,
        type: "mall",
        description: "A modern mall with shopping, dining, and entertainment under one roof.",
        imageUrl: "https://images.unsplash.com/photo-1578926373983-5dbddf51b33c?fit=max&w=1080",
        createdAt: new Date()
    },
    {
        name: "DLF CyberHub",
        address: "DLF Phase 2, Gurugram",
        city: "Gurugram",
        state: "Haryana",
        pincode: "122002",
        location: { type: "Point", coordinates: [77.081394872, 28.495028345] },
        totalParkingSpots: 600,
        type: "workspace",
        description: "A premium business hub with global companies and cafes.",
        imageUrl: "https://images.unsplash.com/photo-1597062424614-1a3311d4e4ec?fit=max&w=1080",
        createdAt: new Date()
    },
    {
        name: "Mantri Square Mall",
        address: "Malleshwaram, Bangalore",
        city: "Bangalore",
        state: "Karnataka",
        pincode: "560003",
        location: { type: "Point", coordinates: [77.571315492, 12.992388934] },
        totalParkingSpots: 700,
        type: "mall",
        description: "A bustling mall with shopping, dining, and multiplex options.",
        imageUrl: "https://images.unsplash.com/photo-1518655140604-7850c4a78cf9?fit=max&w=1080",
        createdAt: new Date()
    },
    {
        name: "Embassy Tech Village",
        address: "Bellandur, Bangalore",
        city: "Bangalore",
        state: "Karnataka",
        pincode: "560103",
        location: { type: "Point", coordinates: [77.677883482, 12.928214563] },
        totalParkingSpots: 1000,
        type: "workspace",
        description: "An IT park with multinational companies and eco-friendly architecture.",
        imageUrl: "https://images.unsplash.com/photo-1515444744556-3be4f8a16f54?fit=max&w=1080",
        createdAt: new Date()
    },
    {
        name: "Select Citywalk",
        address: "Saket, New Delhi",
        city: "New Delhi",
        state: "Delhi",
        pincode: "110017",
        location: { type: "Point", coordinates: [77.222133748, 28.527645983] },
        totalParkingSpots: 400,
        type: "mall",
        description: "A fashionable mall with premium brands and a vibrant food court.",
        imageUrl: "https://images.unsplash.com/photo-1542831371-d531d36971e6?fit=max&w=1080",
        createdAt: new Date()
    },
    {
        name: "DLF Mall of India",
        address: "Sector 18, Noida",
        city: "Noida",
        state: "Uttar Pradesh",
        pincode: "201301",
        location: { type: "Point", coordinates: [77.324456781, 28.567239845] },
        totalParkingSpots: 1200,
        type: "mall",
        description: "India's largest mall with a mix of shopping, dining, and entertainment.",
        imageUrl: "https://images.unsplash.com/photo-1501426026826-31c667bdf23d?fit=max&w=1080",
        createdAt: new Date()
    },
    {
        name: "Cyber Towers",
        address: "Hitech City, Hyderabad",
        city: "Hyderabad",
        state: "Telangana",
        pincode: "500081",
        location: { type: "Point", coordinates: [78.382467341, 17.450323954] },
        totalParkingSpots: 800,
        type: "workspace",
        description: "An iconic IT workspace hosting tech giants and startups.",
        imageUrl: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?fit=max&w=1080",
        createdAt: new Date()
    },
    {
        name: "Ambience Mall",
        address: "DLF Phase 3, Gurugram",
        city: "Gurugram",
        state: "Haryana",
        pincode: "122002",
        location: { type: "Point", coordinates: [77.088659342, 28.503682761] },
        totalParkingSpots: 900,
        type: "mall",
        description: "A luxurious mall with a mix of global brands and gourmet dining.",
        imageUrl: "https://images.unsplash.com/photo-1579876513944-0bbf125b31f3?fit=max&w=1080",
        createdAt: new Date()
    },
    {
        name: "Orion Mall",
        address: "Rajajinagar, Bangalore",
        city: "Bangalore",
        state: "Karnataka",
        pincode: "560055",
        location: { type: "Point", coordinates: [77.5555, 13.0104] },
        totalParkingSpots: 750,
        type: "mall",
        description: "A scenic mall located near a lake, offering premium shopping and dining options.",
        imageUrl: "https://images.unsplash.com/photo-1533106418989-88406c7d027e?fit=max&w=1080",
        createdAt: new Date()
    },
    {
        name: "Mindspace IT Park",
        address: "Madhapur, Hyderabad",
        city: "Hyderabad",
        state: "Telangana",
        pincode: "500081",
        location: { type: "Point", coordinates: [78.3915, 17.4401] },
        totalParkingSpots: 850,
        type: "workspace",
        description: "A vibrant IT park hosting several multinational corporations.",
        imageUrl: "https://images.unsplash.com/photo-1581091012184-9e4b5d12d4e5?fit=max&w=1080",
        createdAt: new Date()
    },
    {
        name: "Lulu Mall",
        address: "Edappally, Kochi",
        city: "Kochi",
        state: "Kerala",
        pincode: "682024",
        location: { type: "Point", coordinates: [76.3074, 10.0259] },
        totalParkingSpots: 1200,
        type: "mall",
        description: "One of India's largest malls, offering a wide range of shopping and dining experiences.",
        imageUrl: "https://images.unsplash.com/photo-1570872628283-f9e0c8d8a9ee?fit=max&w=1080",
        createdAt: new Date()
    },
    {
        name: "RMZ Infinity",
        address: "Old Madras Road, Bangalore",
        city: "Bangalore",
        state: "Karnataka",
        pincode: "560016",
        location: { type: "Point", coordinates: [77.6575, 12.9922] },
        totalParkingSpots: 1100,
        type: "workspace",
        description: "A premium office space with modern amenities and excellent connectivity.",
        imageUrl: "https://images.unsplash.com/photo-1561460312-18609834d622?fit=max&w=1080",
        createdAt: new Date()
    },
    {
        name: "Elante Mall",
        address: "Industrial Area Phase I, Chandigarh",
        city: "Chandigarh",
        state: "Chandigarh",
        pincode: "160002",
        location: { type: "Point", coordinates: [76.8019, 30.7057] },
        totalParkingSpots: 1000,
        type: "mall",
        description: "A modern mall with a mix of high-street fashion, retail, and food outlets.",
        imageUrl: "https://images.unsplash.com/photo-1541233349642-6e425fe6190e?fit=max&w=1080",
        createdAt: new Date()
    },
    {
        name: "Brigade Tech Park",
        address: "Whitefield, Bangalore",
        city: "Bangalore",
        state: "Karnataka",
        pincode: "560066",
        location: { type: "Point", coordinates: [77.7286, 12.9906] },
        totalParkingSpots: 1300,
        type: "workspace",
        description: "An expansive IT park known for its cutting-edge facilities.",
        imageUrl: "https://images.unsplash.com/photo-1542838687-0a4e3e49b4e6?fit=max&w=1080",
        createdAt: new Date()
    },
    {
        name: "Wankhede Stadium",
        address: "Marine Lines, Mumbai",
        city: "Mumbai",
        state: "Maharashtra",
        pincode: "400020",
        location: { type: "Point", coordinates: [72.8258, 18.9388] },
        totalParkingSpots: 2000,
        type: "stadium",
        description: "Iconic cricket stadium hosting international and IPL matches.",
        imageUrl: "https://images.unsplash.com/photo-1568584717213-8086d096b3f7?fit=max&w=1080",
        createdAt: new Date()
    },
    {
        name: "PVR Icon Cinema",
        address: "Andheri West, Mumbai",
        city: "Mumbai",
        state: "Maharashtra",
        pincode: "400053",
        location: { type: "Point", coordinates: [72.8347, 19.1197] },
        totalParkingSpots: 150,
        type: "movieTheatre",
        description: "A luxury multiplex offering premium movie experiences.",
        imageUrl: "https://images.unsplash.com/photo-1523206489230-c0124e89e485?fit=max&w=1080",
        createdAt: new Date()
    },
    {
        name: "Eden Gardens",
        address: "BBD Bagh, Kolkata",
        city: "Kolkata",
        state: "West Bengal",
        pincode: "700021",
        location: { type: "Point", coordinates: [88.3492, 22.5646] },
        totalParkingSpots: 2500,
        type: "stadium",
        description: "One of the oldest and most iconic cricket stadiums in India.",
        imageUrl: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?fit=max&w=1080",
        createdAt: new Date()
    },
    {
        name: "INOX Leisure",
        address: "South City Mall, Kolkata",
        city: "Kolkata",
        state: "West Bengal",
        pincode: "700068",
        location: { type: "Point", coordinates: [88.3681, 22.5019] },
        totalParkingSpots: 120,
        type: "movieTheatre",
        description: "A premium movie theatre located in South City Mall.",
        imageUrl: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?fit=max&w=1080",
        createdAt: new Date()
    },
    {
        name: "M. Chinnaswamy Stadium",
        address: "Cubbon Park, Bangalore",
        city: "Bangalore",
        state: "Karnataka",
        pincode: "560001",
        location: { type: "Point", coordinates: [77.5946, 12.9784] },
        totalParkingSpots: 1800,
        type: "stadium",
        description: "Famous cricket stadium, home ground of RCB in IPL.",
        imageUrl: "https://images.unsplash.com/photo-1577701117578-8793eefa2c2c?fit=max&w=1080",
        createdAt: new Date()
    },
    {
        name: "Prasads IMAX",
        address: "Necklace Road, Hyderabad",
        city: "Hyderabad",
        state: "Telangana",
        pincode: "500082",
        location: { type: "Point", coordinates: [78.4678, 17.4156] },
        totalParkingSpots: 100,
        type: "movieTheatre",
        description: "One of India's first IMAX theatres, offering an immersive experience.",
        imageUrl: "https://images.unsplash.com/photo-1508896694512-f6b208df7aa9?fit=max&w=1080",
        createdAt: new Date()
    },
    {
        name: "Jawaharlal Nehru Stadium",
        address: "Pragati Vihar, Delhi",
        city: "New Delhi",
        state: "Delhi",
        pincode: "110003",
        location: { type: "Point", coordinates: [77.2432, 28.5828] },
        totalParkingSpots: 2200,
        type: "stadium",
        description: "A multi-purpose stadium hosting football and athletics events.",
        imageUrl: "https://images.unsplash.com/photo-1598949082820-1e37cfc08c2a?fit=max&w=1080",
        createdAt: new Date()
    },
    {
        name: "Carnival Cinemas",
        address: "MG Road, Kochi",
        city: "Kochi",
        state: "Kerala",
        pincode: "682035",
        location: { type: "Point", coordinates: [76.2861, 9.9312] },
        totalParkingSpots: 80,
        type: "movieTheatre",
        description: "A popular cinema chain known for its affordable ticket pricing.",
        imageUrl: "https://images.unsplash.com/photo-1567605977979-9f39b8c1b263?fit=max&w=1080",
        createdAt: new Date()
    },
    {
        name: "MA Chidambaram Stadium",
        address: "Chepauk, Chennai",
        city: "Chennai",
        state: "Tamil Nadu",
        pincode: "600005",
        location: { type: "Point", coordinates: [80.2776, 13.0638] },
        totalParkingSpots: 2000,
        type: "stadium",
        description: "A historic stadium hosting cricket matches and IPL games.",
        imageUrl: "https://images.unsplash.com/photo-1549151274-15f378f2c4e3?fit=max&w=1080",
        createdAt: new Date()
    },
    {
        name: "PVR Lulu Mall",
        address: "Edappally, Kochi",
        city: "Kochi",
        state: "Kerala",
        pincode: "682024",
        location: { type: "Point", coordinates: [76.3074, 10.0259] },
        totalParkingSpots: 100,
        type: "movieTheatre",
        description: "A cinema located in one of the largest malls in India.",
        imageUrl: "https://images.unsplash.com/photo-1508739773435-c26b3d09e071?fit=max&w=1080",
        createdAt: new Date()
    },
    {
        name: "Chhatrapati Shivaji Maharaj International Airport",
        address: "Sahar, Andheri East",
        city: "Mumbai",
        state: "Maharashtra",
        pincode: "400099",
        location: { type: "Point", coordinates: [72.8679, 19.0969] },
        totalParkingSpots: 5000,
        type: "airport",
        description: "One of India's busiest airports, connecting Mumbai to the world.",
        imageUrl: "https://images.unsplash.com/photo-1520440229-0416b14d9f60?fit=max&w=1080",
        createdAt: new Date()
    },
    {
        name: "Indira Gandhi International Airport",
        address: "Palam, Delhi",
        city: "New Delhi",
        state: "Delhi",
        pincode: "110037",
        location: { type: "Point", coordinates: [77.1025, 28.5562] },
        totalParkingSpots: 7000,
        type: "airport",
        description: "The primary international airport serving the capital city, Delhi.",
        imageUrl: "https://images.unsplash.com/photo-1576090488806-210f26e74a3d?fit=max&w=1080",
        createdAt: new Date()
    },
    {
        name: "Rajiv Gandhi International Airport",
        address: "Shamshabad",
        city: "Hyderabad",
        state: "Telangana",
        pincode: "500409",
        location: { type: "Point", coordinates: [78.4304, 17.2403] },
        totalParkingSpots: 4500,
        type: "airport",
        description: "A modern airport offering world-class facilities in Hyderabad.",
        imageUrl: "https://images.unsplash.com/photo-1601713161162-7649db8d1536?fit=max&w=1080",
        createdAt: new Date()
    },
    {
        name: "Howrah Railway Station",
        address: "Howrah, Kolkata",
        city: "Kolkata",
        state: "West Bengal",
        pincode: "711101",
        location: { type: "Point", coordinates: [88.3428, 22.5855] },
        totalParkingSpots: 2000,
        type: "railwayStation",
        description: "One of the oldest and busiest railway stations in India.",
        imageUrl: "https://images.unsplash.com/photo-1587750081266-85473b3323a5?fit=max&w=1080",
        createdAt: new Date()
    },
    {
        name: "Chennai Central Railway Station",
        address: "Park Town, Chennai",
        city: "Chennai",
        state: "Tamil Nadu",
        pincode: "600003",
        location: { type: "Point", coordinates: [80.2756, 13.0820] },
        totalParkingSpots: 2500,
        type: "railwayStation",
        description: "A landmark railway station in Chennai with a rich heritage.",
        imageUrl: "https://images.unsplash.com/photo-1599196538350-8824c94d9979?fit=max&w=1080",
        createdAt: new Date()
    },
    {
        name: "Kempegowda International Airport",
        address: "Devanahalli",
        city: "Bangalore",
        state: "Karnataka",
        pincode: "560300",
        location: { type: "Point", coordinates: [77.7041, 13.1986] },
        totalParkingSpots: 6000,
        type: "airport",
        description: "A major international airport located in Bangalore.",
        imageUrl: "https://images.unsplash.com/photo-1512641406448-3333d563028d?fit=max&w=1080",
        createdAt: new Date()
    },
    {
        name: "Ernakulam South Railway Station",
        address: "Ernakulam Junction, Kochi",
        city: "Kochi",
        state: "Kerala",
        pincode: "682016",
        location: { type: "Point", coordinates: [76.2773, 9.9816] },
        totalParkingSpots: 1200,
        type: "railwayStation",
        description: "A busy railway station connecting Kochi to major cities.",
        imageUrl: "https://images.unsplash.com/photo-1568979992654-ffdc47e38d88?fit=max&w=1080",
        createdAt: new Date()
    },
    {
        name: "Netaji Subhas Chandra Bose International Airport",
        address: "Dum Dum",
        city: "Kolkata",
        state: "West Bengal",
        pincode: "700052",
        location: { type: "Point", coordinates: [88.4457, 22.6457] },
        totalParkingSpots: 4000,
        type: "airport",
        description: "The key airport for eastern India, serving Kolkata and beyond.",
        imageUrl: "https://images.unsplash.com/photo-1527596429696-611b49c3b6a3?fit=max&w=1080",
        createdAt: new Date()
    },
    {
        name: "Secunderabad Railway Station",
        address: "Secunderabad",
        city: "Hyderabad",
        state: "Telangana",
        pincode: "500003",
        location: { type: "Point", coordinates: [78.4983, 17.4396] },
        totalParkingSpots: 1800,
        type: "railwayStation",
        description: "A bustling railway station in the twin city of Hyderabad.",
        imageUrl: "https://images.unsplash.com/photo-1536410078432-35d0b0f7c482?fit=max&w=1080",
        createdAt: new Date()
    },
    {
        name: "Pune Junction Railway Station",
        address: "Station Road, Pune",
        city: "Pune",
        state: "Maharashtra",
        pincode: "411001",
        location: { type: "Point", coordinates: [73.8777, 18.5289] },
        totalParkingSpots: 1500,
        type: "railwayStation",
        description: "A well-connected railway station at the heart of Pune.",
        imageUrl: "https://images.unsplash.com/photo-1558980664-10d53bd2dcfe?fit=max&w=1080",
        createdAt: new Date()
    },
    {
        name: "Taj Mahal Palace",
        address: "Apollo Bandar, Colaba",
        city: "Mumbai",
        state: "Maharashtra",
        pincode: "400001",
        location: { type: "Point", coordinates: [72.8333, 18.9220] },
        totalParkingSpots: 200,
        type: "stay",
        description: "An iconic luxury hotel in Mumbai overlooking the Gateway of India.",
        imageUrl: "https://images.unsplash.com/photo-1561299946-c2210ca41d5c?fit=max&w=1080",
        createdAt: new Date()
    },
    {
        name: "The Oberoi Udaivilas",
        address: "Haridasji Ki Magri",
        city: "Udaipur",
        state: "Rajasthan",
        pincode: "313001",
        location: { type: "Point", coordinates: [73.6827, 24.5765] },
        totalParkingSpots: 150,
        type: "stay",
        description: "A luxury resort on the banks of Lake Pichola in Udaipur.",
        imageUrl: "https://images.unsplash.com/photo-1582719478174-72daca2355a3?fit=max&w=1080",
        createdAt: new Date()
    },
    {
        name: "ITC Grand Chola",
        address: "Guindy",
        city: "Chennai",
        state: "Tamil Nadu",
        pincode: "600032",
        location: { type: "Point", coordinates: [80.2206, 13.0108] },
        totalParkingSpots: 300,
        type: "stay",
        description: "A premium luxury hotel inspired by the grandeur of the Chola dynasty.",
        imageUrl: "https://images.unsplash.com/photo-1602094121779-3b124e406c81?fit=max&w=1080",
        createdAt: new Date()
    },
    {
        name: "Leela Palace",
        address: "Diplomatic Enclave, Chanakyapuri",
        city: "New Delhi",
        state: "Delhi",
        pincode: "110023",
        location: { type: "Point", coordinates: [77.1734, 28.5854] },
        totalParkingSpots: 250,
        type: "stay",
        description: "A luxurious hotel known for its exquisite architecture and service.",
        imageUrl: "https://images.unsplash.com/photo-1625040880323-4db2c09b3b86?fit=max&w=1080",
        createdAt: new Date()
    },
    {
        name: "Radisson Blu",
        address: "Dwarka Sector 13",
        city: "New Delhi",
        state: "Delhi",
        pincode: "110078",
        location: { type: "Point", coordinates: [77.0500, 28.5921] },
        totalParkingSpots: 200,
        type: "stay",
        description: "A contemporary hotel offering premium amenities in the heart of Dwarka.",
        imageUrl: "https://images.unsplash.com/photo-1592194996304-fd17e657edac?fit=max&w=1080",
        createdAt: new Date()
    },
    {
        name: "The Lalit Grand Palace",
        address: "Gupkar Road",
        city: "Srinagar",
        state: "Jammu & Kashmir",
        pincode: "190001",
        location: { type: "Point", coordinates: [74.8456, 34.0837] },
        totalParkingSpots: 120,
        type: "stay",
        description: "A heritage property offering stunning views of Dal Lake in Srinagar.",
        imageUrl: "https://images.unsplash.com/photo-1616189167394-7d1e65e5c1b6?fit=max&w=1080",
        createdAt: new Date()
    },
    {
        name: "JW Marriott Hotel",
        address: "Senapati Bapat Road",
        city: "Pune",
        state: "Maharashtra",
        pincode: "411053",
        location: { type: "Point", coordinates: [73.8245, 18.5204] },
        totalParkingSpots: 180,
        type: "stay",
        description: "A luxury hotel in Pune offering world-class amenities and services.",
        imageUrl: "https://images.unsplash.com/photo-1560751138-f7df1533b3f5?fit=max&w=1080",
        createdAt: new Date()
    },
    {
        name: "The Fern Gir Forest Resort",
        address: "Sasan Gir",
        city: "Junagadh",
        state: "Gujarat",
        pincode: "362135",
        location: { type: "Point", coordinates: [70.7794, 21.1240] },
        totalParkingSpots: 100,
        type: "stay",
        description: "A tranquil eco-resort located near the Gir National Park.",
        imageUrl: "https://images.unsplash.com/photo-1591590852161-8b37d85f088d?fit=max&w=1080",
        createdAt: new Date()
    },
    {
        name: "The Park",
        address: "Park Street",
        city: "Kolkata",
        state: "West Bengal",
        pincode: "700016",
        location: { type: "Point", coordinates: [88.3639, 22.5567] },
        totalParkingSpots: 160,
        type: "stay",
        description: "A modern hotel offering exceptional service in the heart of Kolkata.",
        imageUrl: "https://images.unsplash.com/photo-1599583124510-58492cb65d1b?fit=max&w=1080",
        createdAt: new Date()
    },
    {
        name: "Hyatt Regency",
        address: "Salt Lake City",
        city: "Kolkata",
        state: "West Bengal",
        pincode: "700098",
        location: { type: "Point", coordinates: [88.4200, 22.5868] },
        totalParkingSpots: 200,
        type: "stay",
        description: "A luxury business hotel in Kolkata with world-class facilities.",
        imageUrl: "https://images.unsplash.com/photo-1592194142007-5ab847a91701?fit=max&w=1080",
        createdAt: new Date()
    },
    {
        name: "Indian Institute of Technology Bombay (IIT Bombay)",
        address: "Powai",
        city: "Mumbai",
        state: "Maharashtra",
        pincode: "400076",
        location: { type: "Point", coordinates: [72.9141, 19.1334] },
        totalParkingSpots: 500,
        type: "institution",
        description: "A premier engineering institute known for excellence in research and education.",
        imageUrl: "https://images.unsplash.com/photo-1586075125735-4f259c40183f?fit=max&w=1080",
        createdAt: new Date()
    },
    {
        name: "Indian Institute of Technology Delhi (IIT Delhi)",
        address: "Hauz Khas",
        city: "New Delhi",
        state: "Delhi",
        pincode: "110016",
        location: { type: "Point", coordinates: [77.1926, 28.5448] },
        totalParkingSpots: 450,
        type: "institution",
        description: "A top-ranking institute offering engineering, management, and research programs.",
        imageUrl: "https://images.unsplash.com/photo-1573497526175-23f95c8f3f31?fit=max&w=1080",
        createdAt: new Date()
    },
    {
        name: "Indian Institute of Science (IISc)",
        address: "CV Raman Road",
        city: "Bangalore",
        state: "Karnataka",
        pincode: "560012",
        location: { type: "Point", coordinates: [77.5705, 13.0211] },
        totalParkingSpots: 400,
        type: "institution",
        description: "A leading institute for advanced scientific research and higher education.",
        imageUrl: "https://images.unsplash.com/photo-1586880244404-56cb687335bb?fit=max&w=1080",
        createdAt: new Date()
    },
    {
        name: "Jawaharlal Nehru University (JNU)",
        address: "New Mehrauli Road",
        city: "New Delhi",
        state: "Delhi",
        pincode: "110067",
        location: { type: "Point", coordinates: [77.1703, 28.5400] },
        totalParkingSpots: 300,
        type: "institution",
        description: "A renowned university for arts, sciences, and social sciences.",
        imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?fit=max&w=1080",
        createdAt: new Date()
    },
    {
        name: "Banaras Hindu University (BHU)",
        address: "Varanasi",
        city: "Varanasi",
        state: "Uttar Pradesh",
        pincode: "221005",
        location: { type: "Point", coordinates: [82.9966, 25.2677] },
        totalParkingSpots: 500,
        type: "institution",
        description: "One of the largest residential universities in Asia, offering diverse programs.",
        imageUrl: "https://images.unsplash.com/photo-1554536329-76b6a53cbe44?fit=max&w=1080",
        createdAt: new Date()
    },
    {
        name: "Indian Institute of Management Ahmedabad (IIM Ahmedabad)",
        address: "Vastrapur",
        city: "Ahmedabad",
        state: "Gujarat",
        pincode: "380015",
        location: { type: "Point", coordinates: [72.5293, 23.0305] },
        totalParkingSpots: 350,
        type: "institution",
        description: "A world-renowned management institute fostering future leaders.",
        imageUrl: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?fit=max&w=1080",
        createdAt: new Date()
    },
    {
        name: "University of Hyderabad (UoH)",
        address: "Gachibowli",
        city: "Hyderabad",
        state: "Telangana",
        pincode: "500046",
        location: { type: "Point", coordinates: [78.3489, 17.4450] },
        totalParkingSpots: 400,
        type: "institution",
        description: "A central university known for its sprawling campus and academic rigor.",
        imageUrl: "https://images.unsplash.com/photo-1508198578677-4c646dbb8b49?fit=max&w=1080",
        createdAt: new Date()
    },
    {
        name: "Christ University",
        address: "Hosur Road",
        city: "Bangalore",
        state: "Karnataka",
        pincode: "560029",
        location: { type: "Point", coordinates: [77.6015, 12.9352] },
        totalParkingSpots: 350,
        type: "institution",
        description: "A multidisciplinary university focusing on holistic education.",
        imageUrl: "https://images.unsplash.com/photo-1571260899280-3860a0c7886a?fit=max&w=1080",
        createdAt: new Date()
    },
    {
        name: "Amity University",
        address: "Sector 125",
        city: "Noida",
        state: "Uttar Pradesh",
        pincode: "201313",
        location: { type: "Point", coordinates: [77.3314, 28.5450] },
        totalParkingSpots: 300,
        type: "institution",
        description: "A private university offering innovative programs and research opportunities.",
        imageUrl: "https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?fit=max&w=1080",
        createdAt: new Date()
    },
    {
        name: "Manipal Academy of Higher Education (MAHE)",
        address: "Madhav Nagar",
        city: "Manipal",
        state: "Karnataka",
        pincode: "576104",
        location: { type: "Point", coordinates: [74.7928, 13.3470] },
        totalParkingSpots: 400,
        type: "institution",
        description: "A globally recognized institution offering diverse programs and research opportunities.",
        imageUrl: "https://images.unsplash.com/photo-1593642632559-0c7e7f6a1a73?fit=max&w=1080",
        createdAt: new Date()
    },
    {
        name: "All India Institute of Medical Sciences (AIIMS)",
        address: "Ansari Nagar",
        city: "New Delhi",
        state: "Delhi",
        pincode: "110029",
        location: { type: "Point", coordinates: [77.2100, 28.5672] },
        totalParkingSpots: 600,
        type: "care",
        description: "One of India's leading hospitals offering advanced medical care and research facilities.",
        imageUrl: "https://images.unsplash.com/photo-1586772002454-1a6339fb4356?fit=max&w=1080",
        createdAt: new Date()
    },
    {
        name: "Tata Memorial Hospital",
        address: "Parel",
        city: "Mumbai",
        state: "Maharashtra",
        pincode: "400012",
        location: { type: "Point", coordinates: [72.8413, 19.0074] },
        totalParkingSpots: 500,
        type: "care",
        description: "A specialist cancer treatment and research center in Mumbai.",
        imageUrl: "https://images.unsplash.com/photo-1581091215367-d4f43b6c97ff?fit=max&w=1080",
        createdAt: new Date()
    },
    {
        name: "Christian Medical College (CMC)",
        address: "Ida Scudder Road",
        city: "Vellore",
        state: "Tamil Nadu",
        pincode: "632004",
        location: { type: "Point", coordinates: [79.1316, 12.9352] },
        totalParkingSpots: 400,
        type: "care",
        description: "A renowned hospital and medical college offering comprehensive healthcare.",
        imageUrl: "https://images.unsplash.com/photo-1599837487525-b1e6d0e4a7d7?fit=max&w=1080",
        createdAt: new Date()
    },
    {
        name: "Apollo Hospital",
        address: "Jubilee Hills",
        city: "Hyderabad",
        state: "Telangana",
        pincode: "500033",
        location: { type: "Point", coordinates: [78.4167, 17.4239] },
        totalParkingSpots: 450,
        type: "care",
        description: "A multi-specialty hospital providing world-class treatment and facilities.",
        imageUrl: "https://images.unsplash.com/photo-1586773860418-9601dcd6b5f9?fit=max&w=1080",
        createdAt: new Date()
    },
    {
        name: "Fortis Escorts Heart Institute",
        address: "Okhla Road",
        city: "New Delhi",
        state: "Delhi",
        pincode: "110025",
        location: { type: "Point", coordinates: [77.2756, 28.5607] },
        totalParkingSpots: 300,
        type: "care",
        description: "A leading cardiac care hospital in India with advanced facilities.",
        imageUrl: "https://images.unsplash.com/photo-1585436005482-1eea545424b4?fit=max&w=1080",
        createdAt: new Date()
    },
    {
        name: "Narayana Health City",
        address: "Bommasandra",
        city: "Bangalore",
        state: "Karnataka",
        pincode: "560099",
        location: { type: "Point", coordinates: [77.6974, 12.8346] },
        totalParkingSpots: 400,
        type: "care",
        description: "A state-of-the-art medical facility specializing in multi-specialty care.",
        imageUrl: "https://images.unsplash.com/photo-1605236457154-1b9e7d18b8e2?fit=max&w=1080",
        createdAt: new Date()
    },
    {
        name: "Manipal Hospital",
        address: "HAL Airport Road",
        city: "Bangalore",
        state: "Karnataka",
        pincode: "560017",
        location: { type: "Point", coordinates: [77.6512, 12.9608] },
        totalParkingSpots: 350,
        type: "care",
        description: "A well-established multi-specialty hospital with world-class services.",
        imageUrl: "https://images.unsplash.com/photo-1576765607927-e5f4b3a8b8bb?fit=max&w=1080",
        createdAt: new Date()
    },
    {
        name: "Kokilaben Dhirubhai Ambani Hospital",
        address: "Four Bunglows, Andheri West",
        city: "Mumbai",
        state: "Maharashtra",
        pincode: "400053",
        location: { type: "Point", coordinates: [72.8352, 19.1177] },
        totalParkingSpots: 500,
        type: "care",
        description: "A premier healthcare institution offering cutting-edge treatment options.",
        imageUrl: "https://images.unsplash.com/photo-1506880018602-d7aa7d41b388?fit=max&w=1080",
        createdAt: new Date()
    },
    {
        name: "Amrita Institute of Medical Sciences (AIMS)",
        address: "Ponekkara",
        city: "Kochi",
        state: "Kerala",
        pincode: "682041",
        location: { type: "Point", coordinates: [76.3056, 10.0265] },
        totalParkingSpots: 450,
        type: "care",
        description: "A leading super-specialty hospital in Kochi known for its compassionate care.",
        imageUrl: "https://images.unsplash.com/photo-1612102544817-3a2e21082d05?fit=max&w=1080",
        createdAt: new Date()
    },
    {
        name: "PGIMER Chandigarh",
        address: "Sector 12",
        city: "Chandigarh",
        state: "Chandigarh",
        pincode: "160012",
        location: { type: "Point", coordinates: [76.7794, 30.7599] },
        totalParkingSpots: 550,
        type: "care",
        description: "A premier medical and research institute in North India.",
        imageUrl: "https://images.unsplash.com/photo-1605687706394-e4e1d49c8e6d?fit=max&w=1080",
        createdAt: new Date()
    },
];



module.exports = { data: locations };