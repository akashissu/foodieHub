export type UserRole = 'customer' | 'admin' | 'owner';

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  popular?: boolean;
  isVeg: boolean;
  spiceLevel: 'Mild' | 'Medium' | 'Hot';
};

export type Restaurant = {
  id: string;
  name: string;
  cuisines: string[];
  rating: number;
  reviews: number;
  deliveryTime: string;
  priceForTwo: number;
  image: string;
  coverImage: string;
  description: string;
  tags: string[];
  address: string;
  featured: boolean;
  ownerId: string;
  menu: MenuItem[];
};

export type UserProfile = {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: UserRole;
  avatar: string;
  loyaltyPoints: number;
  address: string;
  password: string;
};

export type CartItem = {
  itemId: string;
  restaurantId: string;
  quantity: number;
  specialRequest?: string;
};

export type OrderStatus = 'Placed' | 'Preparing' | 'Out for delivery' | 'Delivered';

export type Order = {
  id: string;
  userId: string;
  restaurantId: string;
  items: CartItem[];
  status: OrderStatus;
  eta: string;
  total: number;
  placedAt: string;
  paymentMethod: string;
  rider: string;
};

export type Coupon = {
  code: string;
  description: string;
  discountType: 'flat' | 'percentage';
  value: number;
  minOrderValue: number;
};

export const cuisines = [
  'All',
  'Indian',
  'Italian',
  'Asian',
  'Healthy',
  'Desserts',
  'Burgers'
];

export const restaurants: Restaurant[] = [
  {
    id: 'firefly-bistro',
    name: 'Firefly Bistro',
    cuisines: ['Italian', 'Desserts'],
    rating: 4.8,
    reviews: 1824,
    deliveryTime: '25-30 min',
    priceForTwo: 28,
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
    coverImage: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1400&q=80',
    description: 'Wood-fired pizzas, creamy pastas, and luxe desserts built for date night cravings.',
    tags: ['Best Seller', 'Free delivery over $35'],
    address: '12 Marina Walk, Downtown',
    featured: true,
    ownerId: 'owner-1',
    menu: [
      {
        id: 'ff-1',
        name: 'Truffle Burrata Pizza',
        description: 'Charred crust, burrata cloud, baby basil, truffle honey finish.',
        price: 18,
        category: 'Pizza',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80',
        popular: true,
        isVeg: true,
        spiceLevel: 'Mild'
      },
      {
        id: 'ff-2',
        name: 'Roasted Garlic Alfredo',
        description: 'Fresh fettuccine, confit garlic cream, parmesan snow.',
        price: 16,
        category: 'Pasta',
        image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=900&q=80',
        popular: true,
        isVeg: true,
        spiceLevel: 'Mild'
      },
      {
        id: 'ff-3',
        name: 'Molten Tiramisu Jar',
        description: 'Coffee-soaked sponge with mascarpone mousse.',
        price: 9,
        category: 'Desserts',
        image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=900&q=80',
        isVeg: true,
        spiceLevel: 'Mild'
      }
    ]
  },
  {
    id: 'bombay-bloom',
    name: 'Bombay Bloom',
    cuisines: ['Indian', 'Healthy'],
    rating: 4.7,
    reviews: 2410,
    deliveryTime: '20-25 min',
    priceForTwo: 22,
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=80',
    coverImage: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1400&q=80',
    description: 'Modern Indian bowls, smoky grills, and comfort curries with clean ingredients.',
    tags: ['Top Rated', 'Healthy picks'],
    address: '44 Orchard Avenue, Midtown',
    featured: true,
    ownerId: 'owner-2',
    menu: [
      {
        id: 'bb-1',
        name: 'Butter Chicken Bowl',
        description: 'Smoky tandoori chicken, makhani sauce, saffron rice.',
        price: 15,
        category: 'Bowls',
        image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=80',
        popular: true,
        isVeg: false,
        spiceLevel: 'Medium'
      },
      {
        id: 'bb-2',
        name: 'Avocado Chaat Salad',
        description: 'Crunchy greens, avocado, tamarind drizzle, masala seeds.',
        price: 12,
        category: 'Salads',
        image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=900&q=80',
        isVeg: true,
        spiceLevel: 'Mild'
      },
      {
        id: 'bb-3',
        name: 'Paneer Volcano Wrap',
        description: 'Charred paneer, mint slaw, chili crunch roti wrap.',
        price: 11,
        category: 'Wraps',
        image: 'https://images.unsplash.com/photo-1662116765994-1e4200c43589?auto=format&fit=crop&w=900&q=80',
        popular: true,
        isVeg: true,
        spiceLevel: 'Hot'
      }
    ]
  },
  {
    id: 'sakura-fastlane',
    name: 'Sakura Fastlane',
    cuisines: ['Asian', 'Healthy'],
    rating: 4.6,
    reviews: 1588,
    deliveryTime: '30-35 min',
    priceForTwo: 26,
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=900&q=80',
    coverImage: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1400&q=80',
    description: 'Speedy sushi boxes, ramen, and teriyaki comfort for late-night cravings.',
    tags: ['Late night', 'Protein rich'],
    address: '8 Skyline Plaza, Riverside',
    featured: false,
    ownerId: 'owner-3',
    menu: [
      {
        id: 'sf-1',
        name: 'Tokyo Crunch Roll',
        description: 'Tempura shrimp, avocado, spicy mayo, sesame crisp.',
        price: 14,
        category: 'Sushi',
        image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=900&q=80',
        popular: true,
        isVeg: false,
        spiceLevel: 'Medium'
      },
      {
        id: 'sf-2',
        name: 'Miso Umami Ramen',
        description: 'Slow broth, soy egg, mushrooms, spring onion.',
        price: 17,
        category: 'Ramen',
        image: 'https://images.unsplash.com/photo-1618841557871-b4664fbf0cb3?auto=format&fit=crop&w=900&q=80',
        popular: true,
        isVeg: false,
        spiceLevel: 'Medium'
      },
      {
        id: 'sf-3',
        name: 'Matcha Cheesecake',
        description: 'Silky matcha cream cheesecake with sable crumbs.',
        price: 8,
        category: 'Desserts',
        image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=80',
        isVeg: true,
        spiceLevel: 'Mild'
      }
    ]
  },
  {
    id: 'grill-society',
    name: 'Grill Society',
    cuisines: ['Burgers', 'American'],
    rating: 4.5,
    reviews: 1111,
    deliveryTime: '18-22 min',
    priceForTwo: 24,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80',
    coverImage: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1400&q=80',
    description: 'Smash burgers, loaded fries, and shakes that arrive still gloriously messy.',
    tags: ['Fastest delivery', 'Combo deals'],
    address: '91 Cedar Lane, Uptown',
    featured: false,
    ownerId: 'owner-4',
    menu: [
      {
        id: 'gs-1',
        name: 'Double Smash Supreme',
        description: 'Aged cheddar, pickles, charred onions, society sauce.',
        price: 14,
        category: 'Burgers',
        image: 'https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&w=900&q=80',
        popular: true,
        isVeg: false,
        spiceLevel: 'Medium'
      },
      {
        id: 'gs-2',
        name: 'Peri Peri Fries',
        description: 'Crisp fries dusted in smoky peri peri and aioli.',
        price: 6,
        category: 'Sides',
        image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=900&q=80',
        isVeg: true,
        spiceLevel: 'Hot'
      },
      {
        id: 'gs-3',
        name: 'Vanilla Bean Shake',
        description: 'Thick shake with vanilla bean cream and brittle.',
        price: 7,
        category: 'Drinks',
        image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=80',
        isVeg: true,
        spiceLevel: 'Mild'
      }
    ]
  }
];

export const users: UserProfile[] = [
  {
    id: 'user-1',
    name: 'Maya Chen',
    email: 'maya@foodiehub.app',
    phone: '+1 555 0182',
    role: 'customer',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80',
    loyaltyPoints: 1280,
    address: '220 Harbor Residences, Downtown',
    password: 'demo1234'
  },
  {
    id: 'admin-1',
    name: 'Aarav Singh',
    email: 'admin@foodiehub.app',
    phone: '+1 555 0100',
    role: 'admin',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80',
    loyaltyPoints: 0,
    address: 'Ops Center, City HQ',
    password: 'admin1234'
  },
  {
    id: 'owner-2',
    name: 'Nisha Kapoor',
    email: 'owner@foodiehub.app',
    phone: '+1 555 0144',
    role: 'owner',
    avatar: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=500&q=80',
    loyaltyPoints: 0,
    address: 'Bombay Bloom Kitchen, Midtown',
    password: 'owner1234'
  }
];

export const currentUser = users[0];

export const cart: CartItem[] = [
  { itemId: 'bb-1', restaurantId: 'bombay-bloom', quantity: 2, specialRequest: 'Extra mint dip' },
  { itemId: 'bb-3', restaurantId: 'bombay-bloom', quantity: 1 }
];

export const coupons: Coupon[] = [
  {
    code: 'WELCOME20',
    description: '20% off on your first premium order',
    discountType: 'percentage',
    value: 20,
    minOrderValue: 30
  },
  {
    code: 'FREEBITE',
    description: '$8 off on orders above $40',
    discountType: 'flat',
    value: 8,
    minOrderValue: 40
  }
];

export const orders: Order[] = [
  {
    id: 'ORD-1048',
    userId: 'user-1',
    restaurantId: 'bombay-bloom',
    items: cart,
    status: 'Out for delivery',
    eta: '12 mins',
    total: 41.6,
    placedAt: '2026-06-26T05:25:00.000Z',
    paymentMethod: 'Visa •••• 4242',
    rider: 'Kieran P.'
  },
  {
    id: 'ORD-1021',
    userId: 'user-1',
    restaurantId: 'firefly-bistro',
    items: [{ itemId: 'ff-1', restaurantId: 'firefly-bistro', quantity: 1 }],
    status: 'Delivered',
    eta: 'Delivered in 28 mins',
    total: 21,
    placedAt: '2026-06-21T19:10:00.000Z',
    paymentMethod: 'Apple Pay',
    rider: 'Sofia R.'
  }
];

export const metrics = {
  totalRestaurants: restaurants.length,
  activeUsers: 12894,
  liveOrders: 248,
  avgDelivery: 27,
  monthlyRevenue: 142800
};

export const getRestaurantById = (id: string) => restaurants.find((restaurant) => restaurant.id === id);

export const getMenuItemById = (itemId: string) => {
  for (const restaurant of restaurants) {
    const item = restaurant.menu.find((menuItem) => menuItem.id === itemId);
    if (item) {
      return { item, restaurant };
    }
  }

  return null;
};

export const featuredRestaurants = restaurants.filter((restaurant) => restaurant.featured);
export const popularDishes = restaurants.flatMap((restaurant) =>
  restaurant.menu.filter((item) => item.popular).map((item) => ({ ...item, restaurantName: restaurant.name, restaurantId: restaurant.id }))
);
