ht sides, with an option to disable this feature when both sides are selected.
Days and Frequency Selection: Configure session days and frequency, allowing flexibility in patient exercise schedules.
Therapist Notes: Add custom notes for each exercise program.
Save as Combo: Save configured exercise sets as 'combos' for repeated use.
Clear All: Option to clear all selected exercises.
Drag and Drop: Rearrange exercise sequences within a program through drag-and-drop functionality.
Project Structure
Frontend: Developed with React, with components for assigning exercises, dropdown menus for selecting body parts, and a responsive user interface.
Backend: Built with Node.js, using Express to handle API routes and a data.json file to simulate database storage for exercises and saved programs.
Technologies Used
Frontend: React, HTML, CSS
Backend: Node.js, Express.js
Database: JSON file simulation
Prerequisites
Ensure you have the following installed:

Node.js: Download here.
Git: For cloning the repository from GitHub.
Installation
Clone the Repository:
bash
Copy code
git clone https://github.com/dbpr0415/physio-exercise-app.git
cd physio-exercise-app
Install Frontend Dependencies:
bash
Copy code
cd frontend
npm install
Install Backend Dependencies:
bash
Copy code
cd ../backend
npm install
Run the Backend:
bash
Copy code
node server.js
The backend server should start on http://localhost:5001.
Run the Frontend:
bash
Copy code
cd ../frontend
npm start
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

