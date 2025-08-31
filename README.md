# Know Your Roads (KYR) 🗺️

A Next.js application that allows users to explore and contribute to a map of roads, enhancing navigation and road information. This project aims to provide a platform where users can view existing road data, and get directions. It leverages Mapbox GL JS for interactive maps and a backend API for data management.

## 🚀 Key Features

- **Interactive Map:** Displays roads on an interactive map using Mapbox GL JS. 🗺️
- **User Location:** Detects and displays the user's current location on the map. 📍
- **Road Data Visualization:** Fetches and displays road markers from a backend API. 🚦
- **Routing and Navigation:** Provides routing and navigation functionality using the Mapbox Directions plugin. 🧭
- **Geolocation Support:** Re-centers the map on the user's location with a single click. 🎯
- **Theme Management:** Supports light and dark themes for a better user experience. 🌙☀️
- **SEO Optimized:** Includes metadata for improved search engine visibility. 🔍
- **Analytics:** Integrated with Vercel Analytics for tracking user behavior. 📊

## 🛠️ Tech Stack

- **Frontend:**
    - React
    - Next.js
    - Tailwind CSS
    - Mapbox GL JS
    - @mapbox/mapbox-gl-directions
    - framer-motion
    - react-loader-spinner
    - tailwind-merge
    - clsx
- **Backend:**
    - (Assumed - API Endpoints exist, but the backend tech is not explicitly defined)
- **Utilities:**
    - axios
    - mini-svg-data-uri
- **Other:**
    - ESLint
    - PostCSS
    - Vercel Analytics

## 📦 Getting Started / Setup Instructions

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Mapbox Access Token (You'll need to create a Mapbox account and get an access token)
- Vercel Account (optional, for deploying to Vercel)

### Installation

1.  Clone the repository:

    ```bash
    git clone <repository_url>
    cd <project_directory>
    ```

2.  Install dependencies:

    ```bash
    npm install  # or yarn install
    ```

3.  Set up environment variables:

    Create a `.env.local` file in the root directory and add the following:

    ```
    NEXT_PUBLIC_ACCESS_TOKEN=<your_mapbox_access_token>
    NEXT_PUBLIC_SERVER=<your_backend_api_url> # e.g., http://localhost:8000
    ```

    Replace `<your_mapbox_access_token>` with your actual Mapbox access token and `<your_backend_api_url>` with the URL of your backend API.

### Running Locally

1.  Start the development server:

    ```bash
    npm run dev  # or yarn dev
    ```

2.  Open your browser and navigate to `http://localhost:3000`.

## 📂 Project Structure

```
kyr/
├── app/
│   ├── layout.js
│   └── page.js
├── components/
│   ├── AddMap.jsx
│   ├── AddRoad.jsx
│   ├── Map.jsx
│   └── ...
├── public/
│   ├── favicon.ico
│   └── ...
├── styles/
│   └── globals.css
├── tailwind.config.js
├── next.config.mjs
├── package.json
├── tools/
│   ├── addRoad.js
│   └── getRoads.js
└── README.md
```

## 💻 Usage

1.  **Explore the Map:** View the interactive map and explore existing road data.
2.  **Find Your Location:** Click the "Get Location" button to center the map on your current location.
3.  **Get Directions:** Use the Mapbox Directions plugin to find routes between different points.
4.  **Add New Roads:** Navigate to the "Add Road" page to add new road data to the map. Fill in the required details and submit the form.

## 📸 Screenshots

(Screenshots will be added here)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with clear, concise messages.
4.  Submit a pull request.

## 📝 License

This project is licensed under the [MIT License](LICENSE).

## 📬 Contact

If you have any questions or suggestions, feel free to contact me at [shreyashks02@gmail.com](mailto:shreyashks02@gmail.com).

## 💖 Thanks

Thank you for checking out Know Your Roads! Your contributions and feedback are greatly appreciated.

This README is written by [readme.ai](https://readme-generator-phi.vercel.app/). "- Actually a pretty cool product !"
