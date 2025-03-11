### TicTacToe Minigame

The TicTacToe minigame is a React-based implementation that allows two players to compete in a classic TicTacToe game. The game includes features such as score tracking, player name customization, and the ability to reset the board and scores. 

#### Functionality:

- **Player Setup:** Players can enter their names before starting the game. If no names are provided, default names "Player 1" and "Player 2" are used.
- **Game Start:** The game begins when the "Play" button is pressed. The game board is displayed, and players take turns marking their symbols (X or O) on the board.
- **Winner Determination:** The game detects when a player has won and displays the winner's name. The score for the winning player is updated.
- **Reset Functions:** Players can reset the game board or reset the scores using the provided buttons.

#### Key Components:

- **App.js:** The main component that manages the game's state, including players' names, scores, and the active section (home or gameStarted).
- **Board.js:** The component responsible for rendering the game board and handling the logic for player moves and determining the winner.
- **Info.js:** The component that displays the current scores and player names.

### Technologies Used

- **React:** The primary library used for building the user interface.
- **React Scripts:** Provides a set of scripts to run, build, and test the application.
- **Testing Libraries:** Includes libraries such as @testing-library/react for testing the application's components.
- **CSS:** Custom styles for the application are defined in CSS files.
