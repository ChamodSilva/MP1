//#region [Constants]
import
{
	LETTERS,
	NUMBERS,
	BLACK,
	WHITE,
	PATH_MARKER,
	TARGET,
	MOVESET,
    PIECE_NAME,
    PIECE_NAME_MINOR,
    PIECE_NAME_MAJOR,
    START_POSITION_PAWNS,
    START_POSITION_MINOR,
    START_POSITION_MAJOR,
    BOARD_FILE,
    BOARD_RANK,
} from "./constants.js"

import Piece from "./piece.js";
//#endregion 

//#region [ChessBoard Class]
class ChessBoard
{
	constructor(containerID, visualize = true)
	{
		this.size = 8;
		this.board = this.buildBoard();
		this.boardUI = visualize ? this.renderBoard(containerID) : null;
	}

    buildBoard()
	{
		let board = [];

		for(let i = 0; i < this.size; i++)
		{
			let row = [];
			for(let j = 0; j < this.size; j++)
			{
				row.push(null);
			}
			board.push(row);
		}
		console.log(`Created a ${this.size} x ${this.size} chess board.`);
		return board;
	}

    renderBoard(containerID)
	{
		const boardUI = document.createElement("div");
		boardUI.id = containerID;
		for(let row = 0; row < this.size; row++)
		{
			const rowDiv = document.createElement("div");
			rowDiv.classList.add("row", "no-gutters");

			for(let col = 0; col < this.size; col++)
			{
				const cell = document.createElement("div");
				cell.classList.add("col", "cell");

				if((row + col) % 2 === 0)
				{
					cell.classList.add("light");
				}
				else
				{
					cell.classList.add("dark");
				}
			    cell.id = `${LETTERS[col]}${NUMBERS[(NUMBERS.length - 1) - row]}`;
				rowDiv.appendChild(cell);
			}
			boardUI.appendChild(rowDiv);
		}
		document.getElementById("gameview").appendChild(boardUI);
		console.log(`${containerID} board has been rendered.`);
		return boardUI;
	}

    updateBoard(target)
	{
		document.getElementById(target.coords).appendChild(target.sprite);
		
		// if(target.prePosition)
		// {
		// 	document.getElementById(target.preCoords).getElementsByClassName(target.colour).remove();
		// 	console.log(`${target.name} has moved from cell ${target.preCoords} to ${target.coords}.`);
		// }
		// else
		// {
		// 	console.log(`${target.name} has been set.`)
		// }
	}

    setPieces(pieces)
	{
		for(let piece of pieces)
		{
			this.board[piece.position.row][piece.position.col] = piece;
			console.log(`${piece.name} has been set at ${piece.coords}`);
			this.updateBoard(piece);
		}
	}

    createPawns(isWhite)
    {
        let pawns = []
        const piece = PIECE_NAME.PAWN;
        let position;
        if(isWhite)
        {
            position = START_POSITION_PAWNS[WHITE];
        }
        else
        {
            position = START_POSITION_PAWNS[BLACK];
        }
        
        for(let i = 0; i < 8; i++)
        {

            position.col = i;
            pawns.push(new Piece(isWhite, piece, position));
        }
        return pawns;
    }

    createMinor(isWhite)
    {
        let pieces = []
        const sides = ["_A", "_H"]
        let position;
        for(let name of Object.keys(PIECE_NAME_MINOR))
        {
            for (let side of sides)
            {
                const pieceAndSide = name + side;
                if(isWhite)
                {
                    position = START_POSITION_MINOR[[pieceAndSide]];
                }
                else
                {
                    position = START_POSITION_MINOR[pieceAndSide];
                    position.row = 7;
                }
                pieces.push(new Piece(isWhite, name, position));
            }
        }
        console.log(pieces);
        return pieces;
    }

    createMajor(isWhite)
    {
        let pieces = []
        let position;
        for(let name of Object.keys(PIECE_NAME_MAJOR))
        {
            if(isWhite)
            {
                position = START_POSITION_MAJOR[name];
            }
            else
            {
                position = START_POSITION_MAJOR[name];
                position.row = 7;
            }
            pieces.push(new Piece(isWhite, name, position));
        }
        return pieces;
    }

    newGame()
    {
        let defaultPieces = [];
        const colorArray = [true, false]; //true = white, false = black
        for(const color of colorArray)
        {
            let pawns = this.createPawns(color);
            for (const pawn of pawns)
            {
                defaultPieces.push(pawn);
            }
            let minorPieces = this.createMinor(color)
            for(const piece of minorPieces)
            {
                defaultPieces.push(piece);
            }
            let majorPieces = this.createMajor(color)
            for(const piece of majorPieces)
            {
                defaultPieces.push(piece);
            }
        }
        this.setPieces(defaultPieces);
    }
}
//#endregion 

export default ChessBoard;