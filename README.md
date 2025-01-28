# Server 2 - Non-Sensitive Data Service

## Overview

Server 2 is a service responsible for managing non-sensitive profile data, such as user bios and interests. It works in conjunction with Server 1 to ensure a modular system design and handles inter-service communication securely.

> **Note:** [Server 1](https://github.com/sm-noushan/space-zee-jt-backend-1) is required for a successful trial of Server 2, as it receives the necessary non-sensitive data for profile creation.

---

## Features

### Profile Management

1. **Create Profile**:

   - Accepts non-sensitive data (bio, interests).
   - Saves the data to the database.

2. **Retrieve Profile**:
   - Fetches non-sensitive profile data for a specific user.

### Security

- Validates incoming requests from Server 1 using a shared secret.

---

## Error Handling

All errors follow a unified response structure for consistency and better debugging:

```json
{
  "success": false,
  "message": "Error message",
  "statusCode": 400
}
```

---

## Environment Variables

All necessary environment variable names are provided in the `.env.example` file. Ensure you create a `.env` file in your project root and populate it with the correct values.

Example variables include:

- `DB_URL`: Connection string for Server 2 MongoDB.
- `PORT`: Port number for the server.

For a complete list of environment variables, refer to the `.env.example` file.

---

## API Details

Server 2 exposes the following API endpoints:

1. **`POST /user-details`**: Accepts non-sensitive user profile data for creation.
2. **`GET /user-details/:email`**: Retrieves non-sensitive user profile data using the email address.

Ensure that Server 1 is properly set up and running for successful interactions with Server 2.

---

## Project Setup

### Prerequisites

- Node.js (v16+)
- MongoDB (running instance)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sm-noushan/space-zee-jt-backend-2
   cd space-zee-jt-backend-2
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create an `.env` file from `.env.example`:

   ```bash
   cp .env.example .env
   ```

   Populate it with the necessary values.

4. Start the server:

   ```bash
   npm run start
   ```

5. Access the API at `http://localhost:<PORT>`.

---

## Contribution

Contributions are welcome. Follow these steps:

1. Fork the repository.
2. Clone the forked repository.
3. Create a feature branch and implement changes.
4. Submit a pull request.
