﻿# Personal Finance Tracker

This is a software made for GitHub's Fastest Coder First Hackathon.
The demo video can be accessed at - ```https://drive.google.com/drive/folders/1i5zFWkpEZ9X4qrKf9hjNTwdK9wv3kV77?usp=sharing```
The website is live at ```https://fin-tracker-p3q7.onrender.com```

## Role of GitHub Copilot

GitHub Copilot played an important role in our project to help us as developers speeden up things. The Frontend team used it to get suggestions on inclining the div boxes, getting the logic in the script tag, filling out missing tags etc.
The Backend team made the most use of it. The tool suggested what modules to import and how to go about creating routes and controllers for the server-side of the webapp.
In summary, the developers had made use of this exciting fun activity of coding out the project from scratch using GitHub Copilot!

## Architectural Flow of the Project

1. The user accesses the Personal Finance Tracker application through a web browser.
2. The client-side components (HTML, CSS, and EJS templates) are loaded by the browser.
3. The user interacts with the user interface, such as entering transaction details or viewing transaction history.
4. When the user submits a form or triggers an action, an HTTP request is sent to the server.
5. The server receives the request and routes it to the appropriate route handler.
6. The route handler performs the necessary logic, such as saving a new transaction or retrieving transaction history from the database.
7. The server generates an appropriate response, which may include rendering an EJS template with the requested data.
8. The response is sent back to the client, and the updated content is displayed on the user interface.
9. The user can continue interacting with the application, repeating steps 3-8 as needed.

## Tech Stack

1. MongoDB
2. ExpressJS
3. HTML/CSS
4. NodeJS

## Installation

To setup a local environment and install the dependencies, run the following commands:

```
npm init -y
```

```
npm install bcrypt body-parser connect-mongodb-session dotenv ejs express express-session mongoose
```

## Usage

1. Clone the repository

    ```
    git clone https://github.com/ashishlal2003/personal-finance-tracker
    ```

2. Navigate to the repository folder

    ```
    cd personal-finance-tracker
    ```

3. Create a ```.env``` file and add the following environment variables:
    ```
    SECRET_KEY=<your-secret-key>
    MONGO_URI=<your-mongodb-uri>
    ```

4. Start the application

    ```
    npm start
    ```

Finally, open your browser and run ```localhost:3000``` to access the website.

## Contributors

1. Nancy Yadav
2. Ashish Lal
