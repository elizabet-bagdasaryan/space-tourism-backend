# Space Tourism Application API

## Introduction

This application serves as the backend API for the Space Tourism application, handling requests for space travel information to be displayed on the frontend. The main functionality of this application is to respond to GET requests made to the endpoints and provide a specific amount of travel information based on the requested size and page number.

## API Endpoint

The API endpoint for retrieving space travel information is as follows:

GET /crew/:name
GET /destination/:name
GET /technology/:name


`:name`: Represents the topic we want to view information about on the specific page



## How it Works

When a GET request is made to the specified endpoint with the appropriate parameters, the backend application will process the request and respond with a specific space travel information in JSON format.

For example, a request like `/technology/spaceport` will return the space travel information for the spaceport on the technologies page.

## Getting Started

To run the backend application locally or deploy it to a server, follow these steps:

1. Ensure you have Node.js and npm (Node Package Manager) installed on your machine.
2. Clone this repository to your local system.
3. Install the required dependencies by running the command: `npm install`
4. Make sure you have MongoDB installed and running on your machine or provide the appropriate MongoDB connection URI in the application configuration.
5. Start the backend application by running the command: `npm start`

The server should now be up and running, ready to handle incoming requests.

## Dependencies

The backend application has the following dependencies:

- Node.js: A JavaScript runtime that allows executing server-side JavaScript.
- Express: A web framework for Node.js that handles HTTP requests and responses.
- MongoDB: A NoSQL database used to store space travel information.

Make sure to install these dependencies before running the application.

## Contributions

Contributions to the Space Tourism Application API are welcome! If you have any suggestions, bug reports, or feature requests, please feel free to open an issue or submit a pull request. Make sure to follow the existing coding style and guidelines.

## Contact

If you have any questions or need further assistance, please contact [elizabet.bagdasaryan1@gmail.com]
