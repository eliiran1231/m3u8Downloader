M3U8 Downloader (Angular)
M3U8 Downloader is a web-based application built with Angular that allows users to download video streams from .m3u8 playlists. This tool provides a user-friendly interface for parsing .m3u8 files, downloading video segments, and combining them into a single video file.

Features
User-Friendly Interface: A clean and intuitive Angular-based UI for seamless interaction.

M3U8 Playlist Parsing: Parses .m3u8 files to extract video segment URLs.

Download Management: Allows users to download video segments and monitor progress.

Cross-Platform: Works in any modern web browser.

Customizable: Easily extendable and customizable for specific use cases.

Prerequisites
Before running the project, ensure you have the following installed:

Node.js: Download and install from nodejs.org.

Angular CLI: Install globally using npm:

bash
Copy
npm install -g @angular/cli
Installation
Clone the repository:

bash
Copy
git clone https://github.com/eliiran1231/m3u8Downloader.git
cd m3u8Downloader
Install dependencies:

bash
Copy
npm install
Start the development server:

bash
Copy
ng serve
Open your browser and navigate to http://localhost:4200/.

Usage
Enter M3U8 URL: Input the URL of the .m3u8 playlist in the provided field.

Download Video: Click the "Download" button to start downloading and combining the video segments.

Monitor Progress: Track the download progress and view the final output file.

Project Structure
The project is structured as follows:

Copy
src/
├── app/
│   ├── components/         # Angular components
│   ├── services/           # Services for handling M3U8 parsing and downloads
│   ├── models/             # Data models
│   ├── app.module.ts       # Main module
│   └── app.component.ts    # Root component
├── assets/                 # Static assets (e.g., images, styles)
├── environments/           # Environment configurations
└── styles.css              # Global styles
Contributing
Contributions are welcome! If you'd like to improve this project, please follow these steps:

Fork the repository.

Create a new branch for your feature or bugfix.

Commit your changes and push to your fork.

Submit a pull request with a detailed description of your changes.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Support
If you encounter any issues or have questions, feel free to open an issue on the GitHub Issues page.
