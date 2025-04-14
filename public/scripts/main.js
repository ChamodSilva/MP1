import GameChessBoard from "./gameChessboard.js";
import GamePiece from "./gamePiece.js";


document.addEventListener("DOMContentLoaded", () =>
{
    // Initializing Game Board
    const game1 = new GameChessBoard("Game", 8);

    // Initializing Game Pieces in an pieces array.
    const pieces =
    [
        new GamePiece(game1, "Test1", true, { row: 0, col: 4 }),
        new GamePiece(game1, "Test2", false, { row: 7, col: 4 }),
        new GamePiece(game1, "Test3", true, { row: 5, col: 7 }),
        new GamePiece(game1, "Test4", false, { row: 0, col: 3 }),
        new GamePiece(game1, "Test5", true, { row: 4, col: 2 }),
        new GamePiece(game1, "Test6", false, { row: 7, col: 0 }),
    ];

    // Setting Game Pieces apart of array.
    game1.setPieces(pieces);
});