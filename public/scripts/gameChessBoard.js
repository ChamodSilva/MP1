import
{
    LETTERS,
    NUMBERS,
    PATH_MARKER,
} from "./constants.js";

import GamePiece from "./gamePiece.js";

class GameChessBoard
{
	constructor(containerID, size, visualize = true)
	{
		this.size = size;
		this.board = this.buildBoard();
		this.boardUI = visualize ? this.renderBoard(containerID) : null;
		this.cellUI = this.makeClickable();
		this.selected = null;
		this.prevSelected = null;
		this.selectedPieceOptions = null;
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
		console.log(`Created a ${this.size} x ${this.size} board.`);
		return board;
	}

	select(target)
	{
		const targetFile = target[0];
		const targetRank = target[1];
		let row = null;
		let col = null;
		for(let letter in LETTERS)
		{
			if(targetFile === LETTERS[letter])
			{
				col = letter;
			}
			for(let number in NUMBERS)
			{
				if(targetFile === LETTERS[letter] && targetRank === NUMBERS[number])
				{
					col = letter;
					row = number;
				}
			}
		}
		let selection = this.board[row][col];
		if(selection != this.selected)
		{
			this.prevSelected = this.selected;
			this.removeMarkers();
		}
		this.selected = selection;
		this.selectPiece(target);
	}

	makeClickable()
	{
		for(let letter of LETTERS)
		{
			for(let number of NUMBERS)
			{
				let cell = this.boardUI.querySelector(`#${letter}${number}`);
				cell.addEventListener("click", (event) =>
				{
					console.log(`Clicked on: ${cell.id}`);
					this.select(cell.id);
				});
			}
		}
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
		
		if(target.prePosition)
		{
			document.getElementById(target.preCoords).getElementsByClassName(target.colour).remove();
			console.log(`${target.name} has moved from cell ${target.preCoords} to ${target.coords}.`);
		}
		else
		{
			console.log(`${target.name} has been set.`)
		}
	}

	displayBoardASCII()
	{
		for(let row of this.board)
		{
			console.log(row);
		}
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

	setPiece(target)
	{
		this.board[target.position.row][target.position.col] = target;
		console.log(`${target.name} has been set at row: ${target.position.row + 1}, column: ${target.position.col + 1}`);
		this.updateBoard(target);
	}

	removeMarkers()
	{
		const markers = this.boardUI.querySelectorAll(`.${PATH_MARKER}`);
		for(let marker of markers)
		{
			marker.remove();
		}
		console.log("Cleared markers")
	}

	selectPiece(target)
	{
		if(this.selected)
		{
			let selectedPieceOptions = [];
			for(let marker = 0; marker < this.selected.possibleMoves.length; marker++)
			{
				selectedPieceOptions.push(this.selected.pathCoords[marker]);
				document.getElementById(this.selected.pathCoords[marker]).appendChild(this.selected.moveMarkers[marker]);
				this.selectedPieceOptions = selectedPieceOptions;
				console.log(selectedPieceOptions);
			}
			if(this.possibleAttacks)
			{
				for(let marker = 0; marker < this.selected.possibleAttacks.length; marker++)
				{
					selectedPieceOptions.push(this.selected.attackCoords[marker]);
					document.getElementById(this.selected.attackCoords[marker]).appendChild(this.selected.attackMarkers[marker]);
				}
			}
		}
		else
		{
			console.log(`At ${target}, there is no piece to select.`);
		}
	}
}

export default GameChessBoard;