# MultiSynth

Welcome to MultiSynth! A multiplayer synth application similar to multiplayer piano.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![React-DOM](https://img.shields.io/badge/React--DOM-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![Tone.js](https://img.shields.io/badge/Tone.js-009688?style=for-the-badge&logo=tone&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socketdotio&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)

## Features

- Feature 1: Chatbox
- Feature 2: Tweak Synthesizer Settings
- Feature 3: Import/Export Synth Configurations
- Feature 4: Create both public and private rooms to collaborate with other players

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Xylloz/MultiSynth.git
   cd MultiSynth
   ```

2. **Install Dependencies:**
   ```
   cd client
   npm install
   ```
   **and**
   ```
   cd server
   npm install
   ```
3. **Create .env from .env.example** <br>
   Will need to provide own Pastebin API Key

4. **Build dist and run server**
   In root directory
   ```
   cd client
   npm run build
   ```
   **and**
   ```
   cd server
   npm run start
   ```
