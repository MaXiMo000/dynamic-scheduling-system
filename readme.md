Prerequisites
Node.js (v14 or later)
MongoDB (v4.4 or later)
Yarn or npm

Clone the Repository
git clone https://github.com/MaXiMo000/dynamic-scheduling-system.git
cd dynamic-scheduling-system


Frontend Setup
Navigate to the frontend directory:

cd client
Install the dependencies:

yarn install
# or
npm install

Start the development server:
yarn start
# or
npm start
Backend Setup
Navigate to the backend directory:

cd ../server

Install the dependencies:

yarn install
# or
npm install

Start the server:
yarn start
# or
npm start

Usage
Frontend: Access the application by navigating to http://localhost:5173 in your web browser.

Backend: Ensure the backend is running on http://localhost:5000.

User Accounts
Login: Basic email-based login is supported. (http://localhost:5000/api/login)
Availablity data : http://localhost:5000/api/availablity
session data : http://localhost:5000/api/sessions

System Architecture

Frontend
Framework: React
Components: Dynamic forms for availability input, calendar/grid view for availability, admin dashboard
Libraries: Axios for HTTP requests, React Router for navigation

Backend
Framework: Node.js with Express
API: RESTful API endpoints for user authentication, availability management, and session scheduling
Authentication: Basic email-based authentication
Libraries: Mongoose for MongoDB interaction, JWT for user sessions

Database
Database: MongoDB
Collections:
users: Stores user information and availability
sessions: Stores session details and participant information

Design Choices
UI/UX: Emphasis on clarity and ease of use. A calendar view is used for visualizing availability.
Flexibility: Users can specify availability in flexible intervals and admins can handle various session types.
Responsiveness: The application is designed to be responsive and accessible on various devices (desktop, tablet, smartphone).

Considerations
Scalability: Designed with scalability in mind to handle a growing number of users and sessions.
Conflict Handling: Automated conflict detection and prevention during scheduling.

Contributing
Contributions are welcome! Please ensure that you follow the coding standards and guidelines provided in the CONTRIBUTING.md. To submit changes:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Make your changes and commit them (git commit -am 'Add new feature').
Push to the branch (git push origin feature/your-feature).
Create a new Pull Request.