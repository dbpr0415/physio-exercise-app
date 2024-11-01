Overview

The Physio Exercise App is designed to assist physiotherapists in assigning, tracking, and customizing exercise programs for patients. It provides tools to select body parts, set exercise parameters, and save programs for future use. The application is built using a React frontend and a Node.js backend, ensuring a seamless user experience.

Features

Exercise Assignment: Assign exercises to specific body parts (upper, middle, lower) with customizable parameters, including sets, reps, and hold times.
Side Duplication: Duplicate exercises for left or right sides, with the option to disable this feature when both sides are selected.
Days and Frequency Selection: Configure session days and frequency for flexibility in patient exercise schedules.
Therapist Notes: Add custom notes for each exercise program.
Save as Combo: Save configured exercise sets as 'combos' for repeated use.
Clear All: Option to clear all selected exercises.
Drag and Drop: Rearrange exercise sequences within a program through drag-and-drop functionality.
Project Structure

Frontend: Developed with React, featuring components for assigning exercises and dropdown menus for selecting body parts, alongside a responsive user interface.
Backend: Built with Node.js, utilizing Express to handle API routes and a data.json file to simulate database storage for exercises and saved programs.
Technologies Used

Frontend: React, HTML, CSS
Backend: Node.js, Express.js
Database: JSON file simulation
Prerequisites

Ensure you have the following installed:

Node.js: Download here
Git: For cloning the repository from GitHub.
Installation

Clone the Repository:
git clone https://github.com/dbpr0415/physio-exercise-app.git
cd physio-exercise-app
Install Frontend Dependencies:
cd frontend
npm install
Run the Backend:
node server.js
The frontend application should start on http://localhost:3000.
Usage

Open the app in your browser at http://localhost:3000.
Use the dropdown to select a body part and customize the exercises with parameters like sets, reps, and hold times.
Add notes, save combos, and clear selections as needed.
Rearrange exercises using drag-and-drop to customize the sequence within a program.
Access saved exercise programs and combos by interacting with the backend endpoints.
API Endpoints (Backend)

Fetch Exercises: GET /api/exercises
Save Exercise Program: POST /api/saveProgram
Fetch Saved Programs: GET /api/programs
Future Enhancements

Add user authentication for therapist logins.
Expand JSON-based storage to a database for more robust data handling.
Include progress tracking and analytics features for each patient.
License

This project is open-source and available under the MIT License.







