# URL Shortener

## Overview
A web application that allows users to shorten long URLs into compact, easy-to-share links. Built with Node.js, Express.js, MongoDB, and NanoID, this application ensures efficient and reliable URL shortening with robust validation and storage. 🌐✨🔗

---

## Features
- **Shorten Long URLs**: Quickly generate a unique, shortened URL.
- **Custom Shortcodes**: Option to use custom aliases for URLs.
- **Database Integration**: Stores original and shortened URLs in MongoDB.
- **Validation**: Validates user-provided URLs to ensure they are properly formatted.
- **Error Handling**: Provides meaningful error messages for invalid inputs.
- **Environment Configurations**: Securely handles sensitive information using `.env`. 🚀📦✅

---

## Tech Stack

### Backend:
- **Node.js**: Runtime environment for JavaScript.
- **Express.js**: Web application framework.
- **MongoDB**: NoSQL database for storing URL mappings.
- **NanoID**: For generating unique and compact URL codes. 🛠️💾🔑

### Utilities:
- **dotenv**: For managing environment variables.
- **validateUrl**: Custom utility to validate URLs. 📜🔍🧰

---

## Installation

1. Clone the repository: 🌱
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd url-shortener
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add the following: 🔑
   ```env
   PORT=3000
   BASE_URL=http://localhost:3000
   MONGO_URI=<your-mongodb-connection-string>
   ```

5. Start the development server:
   ```bash
   npm start
   ```

6. Open your browser and navigate to:
   ```
   http://localhost:3000
   ``` 🌟

---

## API Endpoints

### 1. **POST /short**
- **Description**: Create a shortened URL. ✂️🔗✨
- **Request Body**:
  ```json
  {
      "origUrl": "https://example.com/some/long/path"
  }
  ```
- **Response**:
  ```json
  {
      "origUrl": "https://example.com/some/long/path",
      "shortUrl": "http://localhost:3000/abc123",
      "urlCode": "abc123",
      "date": "2024-12-17T00:00:00.000Z"
  }
  ```

### 2. **GET /:urlCode**
- **Description**: Redirect to the original URL associated with the given `urlCode`. 🔄🌍🚀
- **Response**: HTTP 302 Redirect.

---

## Folder Structure
```
url-shortener/
├── controllers/
│   └── urlGen.js        # Handles URL-related logic
├── models/
│   └── url.js           # MongoDB schema for URLs
├── routes/
│   └── urlRoutes.js     # API routes
├── utils/
│   └── url.js           # Utility for URL validation
├── .env                 # Environment variables
├── .gitignore           # Ignored files and directories
├── app.js               # Main application entry point
├── package.json         # Node.js metadata and dependencies
└── README.md            # Project documentation
``` 📁📂🗂️

---

## Future Improvements
- **Analytics**: Track the number of clicks for each shortened URL.
- **Custom Expiry**: Allow users to set expiration dates for shortened URLs.
- **Authentication**: User accounts to manage and view shortened URLs.
- **Frontend**: Build a user-friendly interface with React. 📈🎯💡

---

## Contributions
Contributions are welcome! Please follow these steps: 🌟🤝💻
1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a Pull Request.

---

## License
This project is licensed under the MIT License. See the `LICENSE` file for details. 📜⚖️📂

