# Monkey Casino Experience
---

<div>
<img src="./src/assets/images/screenshots/loginPage.png" alt="Project Logo" width="600" height="300">
</div>

## Description

**Monkey Casino Experience** is a React-based application designed to deliver an engaging casino interface. The project focuses on implementing a two-step registration form and a dynamic games section (lobby) while adhering to the client's requirements for a "monkey-themed" casino. The design uses vibrant colors and humorous imagery to reflect the client's preferences.


--- 
## Features


### Registration Form

- **Two-step form** with fields such as First Name, Last Name, Email, Username, Password, Confirm Password, and Terms & Conditions.
- **Dynamic field rendering** based on JSON configuration.
- **Field validation** using React Hook Form.
- **Step validation**: Prevent navigation to the next step until all fields in the current step are valid.
- **Redirection**: On successful registration, users are redirected to the games section.

### Games Section (Lobby)

- **Game Categories Navigation**:
    - Displays categories, subcategories, tags dynamically based on available data.
- **Games Grid**:
    - Shows game thumbnails.
    - Displays titles and provider names on hover.
- **Search Functionality**:
    - Enables search by game name or provider.
- **Infinite Loading**:
    - Implements seamless loading of additional games.
- **Advanced Filters**:
    - Includes a modal with detailed search and filtering options.

---
## Technologies Used

- **Framework**: React with Vite.
- **Styling**: Bootstrap and custom CSS.
- **Form Handling**: React Hook Form.
- **State Management**: Redux.
- **Dynamic Field Rendering**: JSON-based configuration.

---
## Folder Structure

src/
📁 API
│   📁 services // API services
│   │   
│   📄 config.ts // API configuration
│   📄 apiCall.ts // dynamic API call function 
📁 ASSETS // Images, Fonts, etc.
│   
📁 COMPONENTS 
│   📁 layouts // Layout components
│   📁 ui // UI components
📁 CONFIG 
│   📄 sampleData.json // Sample data for dynamic field rendering
📁 HOOKS
│   📄 useFetchData.ts // Custom hook for fetching data from API
📁 PAGES
│   📁 HomePage // Home page
│   │   📁 hooks // Custom hooks
│   │   📁 components // Components
│   │   📄 HomePage.tsx // Page component
│   📁 LoginPage // Login page
│       📁 components // Components
│       📄 LoginPage.tsx // Page component
📁 ROUTES
│   📄 Approutes.ts // Application routes
📁 SCHEMAS
│   📄 validationSchemas.ts // Validation schemas
📁 STORE
│   📁 Reducers
│   │   📁 formReducer // Form reducer
│   │   │   📄 formReducer.ts 
│   │   📁 gamesReducer // Games reducer
│   │   │   📄 gamesReducer.ts
│   📁 Selectors
│   │   📄 baseSelectors.ts // Base selectors
│   │   📄 categorySelectors.ts // Category selectors
│   │   📄 filterSelectors.ts // Filter selectors
│   │   📄 gamesSelectors.ts // Games selectors
│   📄 root-Reducer.ts // Root reducer
│   📄 store.ts // Store configuration
📁 STYLE
│   📁 abstracts
│   📁 base  
│   📁 components 
│   📁 layouts
│   📁 pages
│   📄 index.css
📁 UTILS
│   📄 cookieManager.ts // Functions for managing cookies
│   📄 general.ts // General utility functions
│   📄 toastService.ts // Functions for displaying toasts


---
## How to Run the Project

1. **Clone the repository**:

<b>git clone <IGP-form></b>

2. **Navigate to the project directory:**

<b>cd IGP-form</b>

3. **Install dependencies:**

<b>npm install or npm install --legacy-peer-deps </bold>

4. **Start the development server:**

<b>npm run dev</b>
