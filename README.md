# Food Delivery Platform - MERN Full-Stack Project

A full-featured food delivery web application built with modern technologies to provide seamless ordering experience with secure payment processing.

## Features

- � **User Authentication** - Signup/Login with JWT authentication
- 🍔 **Restaurant Browsing** - Filter restaurants by cuisine, ratings, and location
- 🛒 **Shopping Cart** - Add/remove items, adjust quantities
- 💳 **Stripe Payment Integration** - Secure payment processing
- 📊 **Order Tracking** - Real-time order status updates
- ⭐ **Rating System** - Rate restaurants and delivery experience
- 📱 **Responsive Design** - Works on mobile, tablet and desktop

## Tech Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| React.js | Frontend framework |
| Vite | Build tool & development server |
| HTML5 | Structure |
| CSS3 | Styling |
| React Router | Navigation |
| Context API | State management |
| Axios | HTTP requests |

### Backend
| Technology | Purpose |
|------------|---------|
| Node.js | Runtime environment |
| Express.js | Web framework |
| MongoDB | Database |
| Mongoose | ODM for MongoDB |
| JSON Web Tokens | Authentication |
| Stripe API | Payment processing |

### Tools
- Thunder Client (VS Code extension for API testing)
- Postman (Alternative API testing)
- MongoDB Atlas (Cloud database)
- Git & GitHub (Version control)

## Getting Started

### Prerequisites
- Node.js (v14+)
- MongoDB Atlas account or local MongoDB installation
- Stripe account for payment processing

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/your-username/food-delivery-app.git
cd food-delivery-app
```

2. **Install dependencies**
```bash
# Frontend
cd frontend
npm install

# Backend
cd ../backend
npm install
```

3. **Environment Setup**
Create `.env` file in backend directory:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
PORT=5000
```

4. **Run the application**
```bash
# Start backend server
cd backend
npm run dev

# Start frontend
cd ../frontend
npm run dev
```

## Payment Integration (Stripe)

The application uses Stripe for secure payment processing. To test payments:

1. Use test card: `4242 4242 4242 4242`
2. Any future expiration date
3. Any 3-digit CVC
4. Use any valid ZIP code

## API Documentation

### Main Endpoints
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/auth/register` | POST | User registration |
| `/api/auth/login` | POST | User login |
| `/api/restaurants` | GET | Get all restaurants |
| `/api/restaurants/:id` | GET | Get single restaurant |
| `/api/orders` | POST | Create new order |
| `/api/orders/:id` | GET | Get order details |
| `/api/payment/create-payment-intent` | POST | Create Stripe payment |

### Testing with Thunder Client
1. Import the `FoodDeliveryAPI.json` collection (included in repo)
2. Set environment variables in Thunder Client:
   - `authToken` (from login response)
   - `restaurantId` (from GET restaurants response)
3. Execute requests in sequence

## Project Structure

```
food-delivery-app/
├── backend/
│   ├── controllers/       # Route controllers
│   ├── models/            # MongoDB models
│   ├── routes/            # Express routes
│   ├── utils/             # Helper functions
│   ├── .env               # Environment variables
│   └── server.js          # Main server file
│
├── frontend/
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── context/       # Context providers
│   │   ├── pages/         # Application pages
│   │   ├── services/      # API services
│   │   ├── styles/        # CSS modules
│   │   ├── App.jsx        # Main component
│   │   └── main.jsx       # Entry point
│   ├── .env.development   # Frontend environment
│   └── vite.config.js     # Vite configuration
│
├── screenshots/           # Application screenshots
├── .gitignore             # Git ignore rules
└── README.md              # This file
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter) - youremail@example.com

Project Link: [https://github.com/your-username/food-delivery-app](https://github.com/your-username/food-delivery-app)

