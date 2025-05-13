# Community Portal Project

## Overview

The Dynamic Community Portal Website is a full-stack web application developed using Node.js, Express, and EJS templating, designed to serve as an engaging, informative platform for a local community or organization. It features dynamic content rendering, modular routing, and responsive styling.

### Core Features

- **Home Page:** Welcoming message and upcoming events (dynamically loaded).
- **About Page:** Team member profiles dynamically rendered from a backend array.
- **Events Page:** Lists community events with image, title, date, and location.
- **Contact Page:** A functional form for users to submit inquiries (stored in memory).
- **Thank You Page:** Confirmation view after form submission.
- **Modular Routing:** Cleanly separated controller and route files.
- **Dynamic Templates:** Use of EJS partials for shared layout components (header, footer).
- **Enhanced UI:** Styled with responsive layout, animations, and hover effects using CSS.

## Technologies used

- Node.js
- Express.js
- EJS
- CSS
- Nodemon
- Git & GitHub (for version control and collaboration)

## Team Members and Roles

- Renaldo Jardim - Team Lead
- Rudi Botha - Backend Dev
- Nicole Grace Ruvarashe Dube - Frontend Dev

## Setup Instructions

1. Run `npm install` to install dependencies.
2. Use `npm run dev` to start the development server with nodemon.

## Screenshots
### Home page
![image](https://github.com/user-attachments/assets/60423363-4d7f-4e2d-8821-9c440231132d)
### About page
![image](https://github.com/user-attachments/assets/be83dd31-1470-41c8-b58c-88b30e229725)
### Events page
![image](https://github.com/user-attachments/assets/df20562d-1984-458a-b4b2-15e85b892112)
### Contact page
![image](https://github.com/user-attachments/assets/f0ce1319-0caf-468f-ad94-07fb044e66cf)
### Thankyou page
![image](https://github.com/user-attachments/assets/7fddc301-dc7d-4d38-aa4b-9863995ee5f6)

## Reflection

This project provided a strong opportunity to apply full-stack JavaScript skills in a structured, real-world scenario. Key takeaways include:
- Team Collaboration: We practiced modular development and separation of concerns by organizing controllers, routes, views, and styles into distinct components. Each team member took ownership of different parts of the stack, from UI development to backend logic.
- Dynamic Rendering: We used EJS to effectively inject data from the server into HTML views, enabling reusable templates and a scalable codebase.
- User Experience Focus: Particular attention was paid to clean, responsive design. CSS enhancements such as animations, hover effects, and layout adjustments were crucial for making the site visually appealing.
- Challenge Handling: Early issues with styling scope and form data submission were identified and fixed by debugging req.body parsing and ensuring routes/controllers communicated properly.
- Next Steps: If extended, this app could connect to a database like MongoDB, implement authentication, and provide a full admin interface for managing events and messages.
Overall, this project served as a practical foundation in building and deploying modular, maintainable web applications with Express and EJS.
