# DHTML Chess Project

This project is a DHTML (Dynamic HTML) chess application with the following features:

* **Play a Game:** A web-based chess game that allows users to play against each other or a computer. [Currently WIP]
* **Spectate Games:** Users can view recorded games by entering a Lichess Game ID.
* **Contact Us:** A contact form for users to submit messages or feedback.

## Getting Started

To run this project locally, follow these steps:

1.  **Clone the Repository:**

    ```bash
    git clone [YOUR_REPOSITORY_URL]
    cd [YOUR_REPOSITORY_NAME]
    ```

2.  **Install Dependencies:**

    If you are using node.js, install the dependencies.

    ```bash
    npm install
    ```

3.  **Start the Server:**

    You can start the server in one of two ways:

    * **Using `npm start`:**

        ```bash
        npm start
        ```

    * **Using `node server.js`:**

        ```bash
        node server.js
        ```

4.  **Open in Browser:** 
    You can open website in your browser by using one of the following methods:

    * Follow the terminal instruction and clicking on the link presented.

    * Alternatively: Open your desired web browser and navigate to `http://localhost:3000/index.html`.

## Project Structure

* `index.html`: The main page for playing the chess game.
* `view_game.html`: Page for spectating games by entering a Lichess Game ID.
* `contact_us.html`: Page with a contact form for users to submit messages.
* `public/styles/`: Contains CSS files for styling the application.
* `public/scripts/`: Contains JavaScript files for the application's logic.
* `public/images/`: Contains image assets.
* `public/sounds/`: Contains sound assets.
* `server.js`: Node.js server to handle API requests and form submissions.
* `contact_submissions.json`: File containing contact form submissions.

## Features

* **Play a Game:** Users can play a game of chess. [WIP]
* **Spectate Games:**
    * Users can enter a Lichess Game ID to view the moves of a game.
    * The game is displayed on a chessboard. [WIP]
* **Contact Us:**
    * Users can submit a contact form with their name, email, and message.
    * Form submissions are saved to a `contact_submissions.json` file.

## Dependencies

* Express.js
* Uses Lichess.org Public API found here: https://lichess.org/api

## Contributing

Feel free to fork the project and expand on it. It is public domain!!
If you would like to join the project please get in contact with me :D.

## Design

**Figma Design**
https://www.figma.com/proto/SPeTM746HEjyCqdz3Msacb/MP1-Chess?node-id=3-2&starting-point-node-id=3%3A2&t=vtzfxNrzDsAjOmGk-1

**Design Document**
Can be found under root folder under the name: `Mini-Project_OnlineChess.pdf`

## License

GNU General Public License v3.0