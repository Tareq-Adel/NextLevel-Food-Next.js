# NextLevel Foodies

NextLevel Foodies is a modern food ordering and review platform built with Next.js and SQLite. This application provides seamless routing, form validation, and error handling to enhance the user experience.

## Features

- **Next.js Framework**: Fast, server-rendered, and optimized web application.
- **Vanilla CSS**: Lightweight and minimal styling for performance.
- **SQLite Database**: Simple and efficient local database management.
- **Routing**: Dynamic and static routing handled by Next.js.
- **Form Validation**: Ensures valid user input.
- **Error Handling**: Provides meaningful error messages and proper exception handling.
- **Image Uploading**: Allows users to upload images and receive them as files.

## Getting Started

Follow these steps to clone and run the project locally:

### Prerequisites

- Ensure you have **Node.js** and **npm** or **yarn** installed on your system.

### Installation

1. **Clone the repository**

   ```sh
   git clone https://github.com/your-username/nextlevel-foodies.git
   ```

2. **Navigate to the project directory**

   ```sh
   cd nextlevel-foodies
   ```

3. **Install dependencies**

   ```sh
   npm install
   ```

   or

   ```sh
   yarn install
   ```

4. **Initialize the database**

   ```sh
   node initdb.js
   ```

5. **Run the development server**

   ```sh
   npm run dev
   ```

   or

   ```sh
   yarn dev
   ```

6. **Open your browser and visit**

   ```
   http://localhost:3000
   ```

## Project Structure

```
nextlevel-foodies/
├── app/            # Application logic and components
├── assets/         # Static assets like images and fonts
├── components/     # Reusable UI components
├── lib/            # Library functions and utilities
├── public/         # Public static files
├── .eslintrc.json  # ESLint configuration
├── .gitignore      # Git ignore file
├── initdb.js       # Database initialization script
├── jsconfig.json   # JavaScript configuration
├── meals.db        # SQLite database file
├── next.config.js  # Next.js configuration
├── package-lock.json
├── package.json    # Project dependencies and scripts
└── README.md       # Project documentation

```

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

## License

This project is licensed under the MIT License.

