import ChessBoard from "./chessboard.js";

//API Fetch call from server.js
async function getChessGameJson(gameId)
{
    try
    {
        const response = await fetch('/lichess-api',
        {
            method: 'POST',
            headers:
            {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ gameId }),
        });

        if (!response.ok)
        {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    }
    catch (error)
    {
        console.error('Error fetching game data:', error);
        return null;
    }
}

function parsePGNMoves(pgnMoves)
{
    // Regex to extract moves (doesn't handle variations or annotations) -Refrenced from npm chess.
    const moveRegex = /(\d+\.)?\s*([a-h][1-8][a-h][1-8][QRBNkq]?|[a-h]x?[a-h][1-8][QRBNkq]?|[O0]-[O0](-[O0])?|[QRBNkq]x?[a-h][1-8]|[QRBNkq][a-h]x?[a-h][1-8]|[QRBNkq][a-h][1-8]|[a-h][1-8]=[QRBNkq])/g;
    const moves = [];
    let match;
    while((match = moveRegex.exec(pgnMoves)) !== null)
    {
        moves.push(match[2]); // Extract the move part
    }
    return moves;
}

function processMove(board, move)
{
    const pieceType = move.charAt(0).toUpperCase();
    const isCapture = move.includes("x");
    const isPromotion = move.includes("=");
    const isCastling = move.includes("O-O");
  
    let sourceSquare;
    let destinationSquare;
    let promotionPiece;
  
    if(isCastling)
    {
      // Handle castling

    }
    else if(isPromotion)
    {
      // Handle pawn promotion

    }
    else
    {
        // Identify the piece
        const piece = findPiece(board, pieceType, sourceSquare, destinationSquare);
    
        // Validate the move
        const isValidMove = piece.isValidMove(board, destinationSquare);
  
        if(isValidMove)
        {
            // Update the board
            updateBoard(board, piece, destinationSquare, isCapture);
        }
        else
        {
            console.log(`Invalid move: ${move}`);
        }
    }
}

function createMoveButtons(moves)
{
    const moveContainer = document.getElementById("moves");

    for (const move of moves)
    {
        const button = document.createElement("button");
        button.textContent = move;
        moveContainer.appendChild(button);
    }
}

function searchBtn()
{
    document.getElementById('search').addEventListener('click', () =>
    {
        console.log("Search clicked");
        const gameIdToFetch = document.getElementById('gameIdInput').value;
        if(gameIdToFetch)
        {
            getChessGameJson(gameIdToFetch).then((gameData) =>
            {
                if(gameData)
                {
                    console.log('Game data:', gameData);
                    let moves = parsePGNMoves(gameData.moves);
                    createMoveButtons(moves);
                }
                else
                {
                    console.log('Failed to retrieve game data.');
                }
            });
        }
        else
        {
            console.log('Please enter a Game ID');
        }
        return moves;
    });
}

document.addEventListener("DOMContentLoaded", () =>
{
    const game1 = new ChessBoard("Game");
    game1.newGame();
    searchBtn();
});