export const products = [
  {
    id: 1,
    title: "iPhone 14 Pro",
    brand: "Apple",
    category: "Electronics",
    subcategory: "Smartphones",
    price: 999.99,
    originalPrice: 1099.99,
    image: "https://images.pexels.com/photos/5741605/pexels-photo-5741605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    colors: ["#A7C7E7", "#FFD700", "#000000"],
    discount: 9,
    rating: 4.8,
    reviews: 2345,
    description: "The latest iPhone with pro-level cameras and 5G capability.",
    featured: true
  },
  {
    id: 2,
    title: "Samsung Galaxy S23 Ultra",
    brand: "Samsung",
    category: "Electronics",
    subcategory: "Smartphones",
    price: 1199.99,
    originalPrice: 1299.99,
    image: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    colors: ["#000000", "#C0C0C0", "#4B0082"],
    discount: 8,
    rating: 4.7,
    reviews: 1987,
    description: "Experience the power of Galaxy with the S23 Ultra.",
    featured: true
  },
  {
    id: 3,
    title: "MacBook Air M2",
    brand: "Apple",
    category: "Electronics",
    subcategory: "Laptops",
    price: 1199.99,
    originalPrice: 1299.99,
    image: "https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    colors: ["#C0C0C0", "#FFD700"],
    discount: 8,
    rating: 4.9,
    reviews: 3210,
    description: "Supercharged by M2 chip. The most powerful MacBook Air ever.",
    featured: true
  },
  {
    id: 4,
    title: "Dell XPS 13",
    brand: "Dell",
    category: "Electronics",
    subcategory: "Laptops",
    price: 999.99,
    originalPrice: 1199.99,
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&auto=format&fit=crop",
    colors: ["#C0C0C0", "#000000"],
    discount: 17,
    rating: 4.6,
    reviews: 1876,
    description: "Premium ultrabook with InfinityEdge display.",
    featured: true
  },
  {
    id: 5,
    title: "Sony WH-1000XM4",
    brand: "Sony",
    category: "Electronics",
    subcategory: "Audio",
    price: 349.99,
    originalPrice: 399.99,
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=800&auto=format&fit=crop",
    colors: ["#000000", "#C0C0C0"],
    discount: 13,
    rating: 4.8,
    reviews: 2543,
    description: "Industry-leading noise canceling headphones.",
    featured: true
  },
  {
    id: 6,
    title: "Apple Watch Series 8",
    brand: "Apple",
    category: "Electronics",
    subcategory: "Wearables",
    price: 399.99,
    originalPrice: 429.99,
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=800&auto=format&fit=crop",
    colors: ["#000000", "#C0C0C0", "#FFD700"],
    discount: 7,
    rating: 4.7,
    reviews: 1965,
    description: "Advanced health features and powerful fitness tracking.",
    featured: true
  },
  {
    id: 7,
    title: "LG C2 OLED TV",
    brand: "LG",
    category: "Electronics",
    subcategory: "TVs",
    price: 1499.99,
    originalPrice: 1799.99,
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&auto=format&fit=crop",
    colors: ["#000000"],
    discount: 17,
    rating: 4.9,
    reviews: 876,
    description: "Best-in-class OLED TV with stunning picture quality.",
    featured: true
  },
  {
    id: 8,
    title: "Google Nest Hub",
    brand: "Google",
    category: "Electronics",
    subcategory: "Smart Home",
    price: 99.99,
    originalPrice: 129.99,
    image: "https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=800&auto=format&fit=crop",
    colors: ["#C0C0C0", "#000000"],
    discount: 23,
    rating: 4.5,
    reviews: 1234,
    description: "Smart display with Google Assistant built-in.",
    featured: true
  },
  {
    id: 9,
    title: "Floral Summer Dress",
    brand: "Zara",
    category: "Clothing",
    subcategory: "Women's Wear",
    price: 49.99,
    originalPrice: 69.99,
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&auto=format&fit=crop",
    colors: ["#FF69B4", "#00FFFF", "#FFFFFF"],
    sizes: ["XS", "S", "M", "L", "XL"],
    discount: 28,
    rating: 4.5,
    reviews: 178,
    description: "A beautiful floral summer dress perfect for warm days.",
    featured: false
  },
  {
    id: 10,
    title: "Men's Slim Fit Suit",
    brand: "Hugo Boss",
    category: "Clothing",
    subcategory: "Men's Wear",
    price: 299.99,
    originalPrice: 399.99,
    image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=800&auto=format&fit=crop",
    colors: ["#000000", "#808080", "#4169E1"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    discount: 25,
    rating: 4.8,
    reviews: 256,
    description: "A stylish slim fit suit for the modern gentleman.",
    featured: false
  },
  {
    id: 11,
    title: "Minimalist Table Lamp",
    brand: "IKEA",
    category: "Home",
    subcategory: "Lighting",
    price: 39.99,
    originalPrice: 49.99,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&auto=format&fit=crop",
    colors: ["#FFFFFF", "#000000", "#CD853F"],
    discount: 20,
    rating: 4.3,
    reviews: 89,
    description: "A sleek and modern table lamp to brighten up any room.",
    featured: false
  },
  {
    id: 12,
    title: "Cozy Throw Blanket",
    brand: "Pottery Barn",
    category: "Home",
    subcategory: "Bedding",
    price: 59.99,
    originalPrice: 79.99,
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&auto=format&fit=crop",
    colors: ["#DEB887", "#808080", "#FFFFFF"],
    discount: 25,
    rating: 4.7,
    reviews: 134,
    description: "A soft and cozy throw blanket perfect for chilly evenings.",
    featured: false
  },
  {
    id: 13,
    title: "Luxury Skincare Set",
    brand: "La Mer",
    category: "Beauty",
    subcategory: "Skincare",
    price: 299.99,
    originalPrice: 399.99,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&auto=format&fit=crop",
    colors: [],
    discount: 25,
    rating: 4.9,
    reviews: 67,
    description: "A complete luxury skincare set for radiant and youthful skin.",
    featured: true
  },
  {
    id: 14,
    title: "Professional Makeup Brush Set",
    brand: "MAC",
    category: "Beauty",
    subcategory: "Makeup",
    price: 129.99,
    originalPrice: 159.99,
    image: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=800&auto=format&fit=crop",
    colors: [],
    discount: 19,
    rating: 4.6,
    reviews: 203,
    description: "A comprehensive set of professional makeup brushes for flawless application.",
    featured: false
  },
  {
    id: 15,
    title: "Wireless Earbuds",
    brand: "Apple",
    category: "Electronics",
    subcategory: "Audio",
    price: 199.99,
    originalPrice: 249.99,
    image: "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=800&auto=format&fit=crop",
    colors: ["#FFFFFF", "#000000"],
    discount: 20,
    rating: 4.8,
    reviews: 1543,
    description: "True wireless earbuds with active noise cancellation and superior sound quality.",
    featured: false
  },
  {
    id: 16,
    title: "Smart Thermostat",
    brand: "Nest",
    category: "Electronics",
    subcategory: "Smart Home",
    price: 249.99,
    originalPrice: 299.99,
    image: "https://images.unsplash.com/photo-1567318085060-4a3a4b8afa22?w=800&auto=format&fit=crop",
    colors: ["#C0C0C0"],
    discount: 17,
    rating: 4.6,
    reviews: 892,
    description: "Energy-saving smart thermostat with learning capabilities and mobile app control.",
    featured: false
  },
  {
    id: 17,
    title: "Men's Running Shoes",
    brand: "Nike",
    category: "Clothing",
    subcategory: "Men's Wear",
    price: 129.99,
    originalPrice: 159.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop",
    colors: ["#FF0000", "#000000", "#0000FF"],
    sizes: ["7", "8", "9", "10", "11", "12"],
    discount: 19,
    rating: 4.7,
    reviews: 1203,
    description: "Lightweight and comfortable running shoes with responsive cushioning.",
    featured: false
  },
  {
    id: 18,
    title: "Women's Yoga Pants",
    brand: "Lululemon",
    category: "Clothing",
    subcategory: "Women's Wear",
    price: 98.99,
    originalPrice: 128.99,
    image: "https://images.unsplash.com/photo-1556304653-cba65c59b3c5?w=800&auto=format&fit=crop",
    colors: ["#000000", "#808080", "#000080"],
    sizes: ["XS", "S", "M", "L", "XL"],
    discount: 23,
    rating: 4.9,
    reviews: 2105,
    description: "High-waisted yoga pants with moisture-wicking fabric and four-way stretch.",
    featured: false
  },
  {
    id: 19,
    title: "Kids' Dinosaur T-Shirt",
    brand: "Carter's",
    category: "Clothing",
    subcategory: "Kids' Wear",
    price: 14.99,
    originalPrice: 19.99,
    image: "https://images.unsplash.com/photo-1519278409-1f56fdda7fe5?w=800&auto=format&fit=crop",
    colors: ["#00FF00", "#0000FF", "#FF0000"],
    sizes: ["2T", "3T", "4T", "5T"],
    discount: 25,
    rating: 4.5,
    reviews: 387,
    description: "Fun and comfortable t-shirt with colorful dinosaur print for kids.",
    featured: false
  },
  {
    id: 20,
    title: "Leather Wallet",
    brand: "Fossil",
    category: "Clothing",
    subcategory: "Accessories",
    price: 39.99,
    originalPrice: 59.99,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&auto=format&fit=crop",
    colors: ["#8B4513", "#000000"],
    discount: 33,
    rating: 4.6,
    reviews: 729,
    description: "Genuine leather wallet with multiple card slots and RFID blocking technology.",
    featured: false
  },
  {
    id: 21,
    title: "Scented Candle Set",
    brand: "Yankee Candle",
    category: "Home",
    subcategory: "Decor",
    price: 29.99,
    originalPrice: 39.99,
    image: "https://images.pexels.com/photos/3270223/pexels-photo-3270223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    colors: [],
    discount: 25,
    rating: 4.7,
    reviews: 512,
    description: "Set of 3 scented candles with long-lasting fragrances for a cozy home atmosphere.",
    featured: false
  },
  {
    id: 22,
    title: "Non-Stick Cookware Set",
    brand: "T-fal",
    category: "Home",
    subcategory: "Kitchenware",
    price: 149.99,
    originalPrice: 199.99,
    image: "https://images.pexels.com/photos/6996085/pexels-photo-6996085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    colors: ["#000000"],
    discount: 25,
    rating: 4.8,
    reviews: 1876,
    description: "10-piece non-stick cookware set with even heat distribution and durable construction.",
    featured: false
  },
  {
    id: 23,
    title: "Moisturizing Face Cream",
    brand: "Cetaphil",
    category: "Beauty",
    subcategory: "Skincare",
    price: 16.99,
    originalPrice: 21.99,
    image: "https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    colors: [],
    discount: 23,
    rating: 4.7,
    reviews: 3201,
    description: "Gentle, non-comedogenic face cream for all skin types, providing 24-hour hydration.",
    featured: false
  },
  {
    id: 24,
    title: "Hair Styling Kit",
    brand: "Remington",
    category: "Beauty",
    subcategory: "Haircare",
    price: 79.99,
    originalPrice: 99.99,
    image: "https://images.unsplash.com/photo-1522338140262-f46f5913618a?w=800&auto=format&fit=crop",
    colors: ["#000000", "#FF69B4"],
    discount: 20,
    rating: 4.5,
    reviews: 687,
    description: "Complete hair styling kit with hairdryer, straightener, and curling iron for versatile styling options.",
    featured: false
  },
  {
    id: 25,
    title: "Smart Door Lock",
    brand: "August",
    category: "Electronics",
    subcategory: "Smart Home",
    price: 199.99,
    originalPrice: 249.99,
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&auto=format&fit=crop",
    colors: ["#C0C0C0"],
    discount: 20,
    rating: 4.4,
    reviews: 723,
    description: "Keyless entry smart lock with smartphone control and automatic locking features.",
    featured: false
  },
  {
    id: 26,
    title: "Kids' Bunk Bed",
    brand: "IKEA",
    category: "Home",
    subcategory: "Furniture",
    price: 299.99,
    originalPrice: 349.99,
    image: "https://images.unsplash.com/photo-1617325247661-675ab4b64ae4?w=800&auto=format&fit=crop",
    colors: ["#FFFFFF", "#8B4513"],
    discount: 14,
    rating: 4.6,
    reviews: 512,
    description: "Space-saving bunk bed with sturdy construction and built-in ladder for kids' rooms.",
    featured: false
  },
  {
    id: 27,
    title: "Stainless Steel Mixing Bowls",
    brand: "OXO",
    category: "Home",
    subcategory: "Kitchenware",
    price: 39.99,
    originalPrice: 49.99,
    image: "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=800&auto=format&fit=crop",
    colors: ["#C0C0C0"],
    discount: 20,
    rating: 4.8,
    reviews: 1023,
    description: "Set of 3 durable stainless steel mixing bowls with non-slip bottoms and measurement markings.",
    featured: false
  },
  {
    id: 28,
    title: "Luxury Perfume",
    brand: "Chanel",
    category: "Beauty",
    subcategory: "Fragrances",
    price: 129.99,
    originalPrice: 149.99,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&auto=format&fit=crop",
    colors: [],
    discount: 13,
    rating: 4.9,
    reviews: 876,
    description: "Elegant and long-lasting luxury perfume with notes of jasmine, rose, and sandalwood.",
    featured: false
  },
  {
    id: 29,
    title: "Ergonomic Office Chair",
    brand: "Herman Miller",
    category: "Home",
    subcategory: "Furniture",
    price: 999.99,
    originalPrice: 1299.99,
    image: "https://images.unsplash.com/photo-1592781959508-c4e1080a06ab?w=800&auto=format&fit=crop",
    colors: ["#000000", "#808080", "#8B4513"],
    discount: 23,
    rating: 4.9,
    reviews: 1543,
    description: "Premium ergonomic office chair with advanced lumbar support and adjustable features for maximum comfort during long work hours.",
    featured: true
  },
  {
    id: 30,
    title: "Smart Robot Vacuum",
    brand: "iRobot",
    category: "Home",
    subcategory: "Appliances",
    price: 399.99,
    originalPrice: 499.99,
    image: "https://images.unsplash.com/photo-1618339220157-a0dfe0a0b4da?w=800&auto=format&fit=crop",
    colors: ["#FFFFFF", "#000000"],
    discount: 20,
    rating: 4.7,
    reviews: 2876,
    description: "Intelligent robot vacuum with mapping technology, WiFi connectivity, and voice control compatibility for effortless home cleaning.",
    featured: false
  },
  {
    id: 31,
    title: "Portable Bluetooth Speaker",
    brand: "JBL",
    category: "Electronics",
    subcategory: "Audio",
    price: 129.99,
    originalPrice: 159.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&auto=format&fit=crop",
    colors: ["#000000", "#FF0000", "#0000FF"],
    discount: 19,
    rating: 4.6,
    reviews: 3210,
    description: "Waterproof portable Bluetooth speaker with powerful sound, long battery life, and the ability to connect multiple speakers for surround sound.",
    featured: false
  },
  {
    id: 32,
    title: "Fitness Tracker Watch",
    brand: "Fitbit",
    category: "Electronics",
    subcategory: "Wearables",
    price: 149.99,
    originalPrice: 179.99,
    image: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?w=800&auto=format&fit=crop",
    colors: ["#000000", "#4169E1", "#FF69B4"],
    discount: 17,
    rating: 4.5,
    reviews: 5432,
    description: "Advanced fitness tracker with heart rate monitoring, sleep tracking, and smartphone notifications to help you achieve your health goals.",
    featured: true
  },
  {
    id: 33,
    title: "Gourmet Coffee Maker",
    brand: "Breville",
    category: "Home",
    subcategory: "Kitchenware",
    price: 299.99,
    originalPrice: 349.99,
    image: "https://images.pexels.com/photos/6207297/pexels-photo-6207297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    colors: ["#C0C0C0", "#000000"],
    discount: 14,
    rating: 4.8,
    reviews: 1876,
    description: "Professional-grade coffee maker with precision temperature control, multiple brew settings, and built-in grinder for the perfect cup every time.",
    featured: false
  },
  {
    id: 34,
    title: "Wireless Gaming Mouse",
    brand: "Logitech",
    category: "Electronics",
    subcategory: "Computer Accessories",
    price: 79.99,
    originalPrice: 99.99,
    image: "https://images.unsplash.com/photo-1618499890638-3a0dd4b0b89c?w=800&auto=format&fit=crop",
    colors: ["#000000", "#FFFFFF"],
    discount: 20,
    rating: 4.7,
    reviews: 3654,
    description: "High-precision wireless gaming mouse with customizable RGB lighting, programmable buttons, and ultra-fast response time for competitive gaming.",
    featured: false
  },
  {
    id: 35,
    title: "Stylish Sunglasses",
    brand: "Ray-Ban",
    category: "Clothing",
    subcategory: "Accessories",
    price: 149.99,
    originalPrice: 189.99,
    image: "https://images.unsplash.com/photo-1577803645773-f96470509666?w=800&auto=format&fit=crop",
    colors: ["#000000", "#8B4513", "#1E90FF"],
    discount: 21,
    rating: 4.6,
    reviews: 2187,
    description: "Classic and stylish sunglasses with UV protection, durable frame, and polarized lenses for reduced glare and enhanced visual clarity.",
    featured: false
  },
  {
    id: 36,
    title: "Electric Toothbrush",
    brand: "Philips Sonicare",
    category: "Beauty",
    subcategory: "Oral Care",
    price: 89.99,
    originalPrice: 119.99,
    image: "https://images.unsplash.com/photo-1559591952-08d0c7a60ef5?w=800&auto=format&fit=crop",
    colors: ["#FFFFFF", "#4169E1"],
    discount: 25,
    rating: 4.8,
    reviews: 4321,
    description: "Advanced electric toothbrush with multiple cleaning modes, pressure sensor, and timer for optimal oral hygiene and a brighter smile.",
    featured: false
  },
  {
    id: 37,
    title: "Portable Power Bank",
    brand: "Anker",
    category: "Electronics",
    subcategory: "Accessories",
    price: 49.99,
    originalPrice: 59.99,
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=800&auto=format&fit=crop",
    colors: ["#000000", "#C0C0C0"],
    discount: 17,
    rating: 4.7,
    reviews: 6543,
    description: "High-capacity portable power bank with fast charging capability, multiple ports, and compact design for on-the-go device charging.",
    featured: true
  },
  {
    id: 38,
    title: "Yoga Mat",
    brand: "Lululemon",
    category: "Clothing",
    subcategory: "Fitness Accessories",
    price: 78.99,
    originalPrice: 98.99,
    image: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=800&auto=format&fit=crop",
    colors: ["#4B0082", "#00CED1", "#FF69B4"],
    discount: 20,
    rating: 4.9,
    reviews: 3210,
    description: "Premium non-slip yoga mat with excellent cushioning, eco-friendly materials, and perfect thickness for various yoga styles and fitness routines.",
    featured: false
  },
  {
    id: 39,
    title: "Smart Light Bulbs Set",
    brand: "Philips Hue",
    category: "Electronics",
    subcategory: "Smart Home",
    price: 99.99,
    originalPrice: 129.99,
    image: "https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    colors: ["#FFFFFF", "#FF69B4", "#00CED1"],
    discount: 23,
    rating: 4.7,
    reviews: 3254,
    description: "Set of 4 smart LED bulbs with millions of colors, app control, and voice assistant compatibility for creating the perfect ambiance.",
    featured: true
  },
  {
    id: 40,
    title: "Smart Security Camera",
    brand: "Arlo",
    category: "Electronics",
    subcategory: "Smart Home",
    price: 179.99,
    originalPrice: 199.99,
    image: "https://images.pexels.com/photos/3205735/pexels-photo-3205735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    colors: ["#FFFFFF"],
    discount: 10,
    rating: 4.6,
    reviews: 2187,
    description: "Wireless outdoor security camera with 2K HDR video, night vision, and two-way audio for home protection and peace of mind.",
    featured: false
  },
  {
    id: 41,
    title: "Smart Doorbell",
    brand: "Ring",
    category: "Electronics",
    subcategory: "Smart Home",
    price: 169.99,
    originalPrice: 199.99,
    image: "https://images.pexels.com/photos/11095834/pexels-photo-11095834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    colors: ["#C0C0C0", "#8B4513"],
    discount: 15,
    rating: 4.5,
    reviews: 4321,
    description: "Video doorbell with 1080p HD video, two-way talk, advanced motion detection, and easy installation for enhanced home security.",
    featured: false
  },
{
    id: 42,
    title: "Smart Thermostat",
    brand: "Ecobee",
    category: "Electronics",
    subcategory: "Smart Home",
    price: 249.99,
    originalPrice: 279.99,
    image: "https://images.pexels.com/photos/3689941/pexels-photo-3689941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    colors: ["#000000", "#FFFFFF"],
    discount: 11,
    rating: 4.8,
    reviews: 1876,
    description: "Smart thermostat with room sensors, energy-saving features, and voice control compatibility for optimal home climate control.",
    featured: true
  }
];

