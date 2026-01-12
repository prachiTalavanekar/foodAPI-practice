# Food Recipe App

A React-based food recipe application built to demonstrate and understand **API data fetching** concepts. This project serves as a practical learning tool for working with external APIs, handling asynchronous operations, and managing API responses in React applications.

## 🎯 Main Learning Goal

**Understanding API Data Fetching using Axios**

This project focuses on:
- Making HTTP requests to external APIs
- Handling asynchronous operations with async/await
- Managing API response data in React state
- Error handling and loading states
- Working with RESTful API endpoints

## 🚀 Features

- **Recipe Search**: Search for recipes by dish name
- **Recipe Details**: View detailed cooking instructions and ingredients
- **Responsive Design**: Clean and user-friendly interface
- **Routing**: Navigate between search results and recipe details
- **Real-time Search**: Dynamic recipe fetching based on user input

## 🛠️ Technologies Used

- **React 19.1.0** - Frontend framework
- **Vite** - Build tool and development server
- **React Router DOM** - Client-side routing
- **TheMealDB API** - External recipe data source
- **Fetch API** - HTTP requests (can be upgraded to Axios)

## 📁 Project Structure

```
food-recipe/
├── src/
│   ├── Component/
│   │   ├── Mainpage.jsx      # Main search page with API calls
│   │   ├── Mealcards.jsx     # Recipe cards display component
│   │   └── Mealinfo.jsx      # Detailed recipe view with API call
│   ├── App.jsx               # Main app with routing
│   ├── main.jsx              # App entry point
│   └── index.css             # Styling
├── public/
├── package.json
└── README.md
```

## 🔌 API Integration

The app integrates with **TheMealDB API** to fetch recipe data:

### API Endpoints Used:
1. **Search Recipes**: `https://www.themealdb.com/api/json/v1/1/search.php?s={dishName}`
2. **Recipe Details**: `https://www.themealdb.com/api/json/v1/1/lookup.php?i={mealId}`

### Current Implementation:
- Uses native `fetch()` API for HTTP requests
- Implements async/await pattern for handling promises
- Manages loading states and error handling

### Upgrade Path to Axios:
This project can be enhanced by replacing fetch with Axios to demonstrate:
- Simplified request/response handling
- Better error handling
- Request/response interceptors
- Automatic JSON parsing

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd food-recipe
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

## 📚 Learning Concepts Demonstrated

### 1. API Data Fetching
- Making HTTP GET requests to external APIs
- Handling JSON responses
- Managing asynchronous operations

### 2. State Management
- Using `useState` for API response data
- Managing search input state
- Handling loading and error states

### 3. Component Communication
- Passing API data between parent and child components
- Props drilling for data sharing

### 4. Routing with Data
- Dynamic routing based on API response IDs
- Fetching data based on URL parameters

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌟 Future Enhancements

- [ ] Replace fetch with Axios for better HTTP handling
- [ ] Add loading spinners and error boundaries
- [ ] Implement caching for API responses
- [ ] Add favorites functionality with local storage
- [ ] Include unit tests for API functions
- [ ] Add TypeScript for better type safety

## 📖 API Documentation

**TheMealDB API**: Free recipe database API
- Base URL: `https://www.themealdb.com/api/json/v1/1/`
- No authentication required
- Returns JSON formatted recipe data
- Includes meal images, instructions, and ingredients

This project serves as a hands-on learning experience for understanding how to work with APIs in React applications, making it perfect for developers looking to strengthen their API integration skills.
