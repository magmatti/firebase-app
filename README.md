# Simple Mobile App with Firebase Integration

Live Demo: https://unique-crumble-87905d.netlify.app/
*If you are playing with live demo, please delete all database entries that you created while testing.

This repository contains a simple mobile app built using vanilla HTML, CSS and JavaScript. It's main purpose is to test the capabilities of Firebase, a popular platform for mobile and web applications.

# Overview
This project is a basic app designed to showcase how Firebase can be integrated into mobile apps or websites. Its main feature is to demonstrate how Firebase can be used to share data across multiple devices. The app uses HTML, CSS, and JavaScript for the front end and Firebase Real-Time Database for storing data. The app is designed for both functionality testing and educational purposes.

# Installation
To run this app locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Run the app using Live Server VS Code extension

# Firebase Configuration
Before running the app, you need to configure Firebase. Follow these steps:

1. Create a Firebase project using Firebase Console.
2. Set up Real-Time Database.
3. Copy the Firebase configuration object and replace the placeholders in index.js file with your actual configuration.

```javascript
const appSettings = {
    databaseURL: "YOUR_REALTIME_DATABASE_URL"
}
```
