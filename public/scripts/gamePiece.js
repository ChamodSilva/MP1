import
{
    LETTERS,
    NUMBERS,
    BLACK,
    WHITE,
    PATH_MARKER,
    TARGET,
    MOVESET,
	COLOR_PATH,
	PIECE_PATH,
} from "./constants.js";

class GamePiece
{
	constructor(game ,name, isWhite, position, visualize = true)
	{
		this.game = game;
		this.name = name;
		this.isWhite = isWhite;
		this.colour = isWhite ? WHITE : BLACK;
		this.alive = true;
		this.type = "KING";
		this.spritePath = (isWhite ? COLOR_PATH.WHITE : COLOR_PATH.BLACK) + PIECE_PATH[this.type];
		this.sprite = visualize ? this.renderSprite() : null;
		this.position = position;

		this.coords = this.convertToCoords(position);
		this.prePosition = null;
		this.preCoords = null;

		this.pieceStamina = 1;
		this.moveSet = MOVESET;
		this.possibleMoves = this.getPossibleMoves();
		this.moveMarkers = this.getMoveMarkers();
		this.markerElements = null;
		this.pathCoords = this.getPathCoords();
		this.possibleAttacks = null;
		this.attackMarkers = this.getAttackMarkers();
		this.attackCoords = this.getAttackCoords();
	}

	convertToCoords(rowCol)
	{
		let coords = `${LETTERS[rowCol.col]}${NUMBERS[rowCol.row]}`;
		return coords;
	}

	renderSprite()
	{
		const sprite = document.createElement("img");
		sprite.classList.add(this.colour, this.type);
		sprite.src = this.spritePath;
		sprite.innerText = this.name;
		console.log(`${this.name} has been rendered.`);
		return sprite;
	}

	getPossibleMoves()
	{
		let possibleMoves =[];
		let possibleAttacks = [];
		let possiblePosition = null;
		let inRangeCell = null;
		for(let step = 0; step < this.pieceStamina; step++)
		{
			for(let direction in this.moveSet)
			{
				possiblePosition = 
				{
					row: this.position.row + (this.moveSet[direction].row * (step + 1)),
					col: this.position.col + (this.moveSet[direction].col * (step + 1))
				};
				
				if(this.isMoveValid(possiblePosition))
				{
					inRangeCell = this.getInRangeCell(possiblePosition);
					if(!inRangeCell)
					{
						possibleMoves.push(possiblePosition);
					}
					else if(inRangeCell.isWhite !== this.isWhite)
					{
						possibleAttacks.push(possiblePosition);
					}
				}
			}
		}
		return possibleMoves;
	}

	getInRangeCell(move)
	{
		if(this.game.board)
		{
			console.log(this.game.board[move.row][move.col]);
		}
		return ;
	}

	getMoveMarkers()
	{
		let moveMarkers = [];
		for(let marker = 0; marker < this.possibleMoves.length; marker++)
		{
			const markerSprite = document.createElement("div");
			markerSprite.classList.add(PATH_MARKER);
			moveMarkers.push(markerSprite);
		}
		return moveMarkers;
	}

	getAttackMarkers()
	{
		let attackMarkers = [];
		if(this.possibleAttacks)
		{
			for(let marker = 0; marker < this.possibleAttacks.length; marker++)
			{
				const markerSprite = document.createElement("div");
				markerSprite.classList.add(PATH_MARKER);
				markerSprite.classList.add(TARGET)
				attackMarkers.push(markerSprite);
			}
		}
		return attackMarkers;
	}

	getPathCoords()
	{
		let pathCoords = [];
		for(let marker of this.possibleMoves)
		{
			let coords = `${LETTERS[marker.col]}${NUMBERS[marker.row]}`;
			pathCoords.push(coords);
		}
		console.log(pathCoords);
		return pathCoords;
	}

	getAttackCoords()
	{
		let attackCoords = [];
		if(this.possibleAttacks !== null)
		{
			for(let marker of this.possibleAttacks)
			{
				let coords = `${LETTERS[marker.col]}${NUMBERS[marker.row]}`;
				attackCoords.push(coords)
			}
		}
		else
		{
			attackCoords = null;
		}
		return attackCoords;		
	}

	isMoveValid(move)
	{
		let moveIsValid = false;
		if(move.row >= 0 && move.row < this.game.size)
		{
			if(move.col >= 0 && move.col < this.game.size)
			{
				moveIsValid = true;
			}
		}
		moveIsValid ? console.log(`The move: {row: ${move.row}, col: ${move.col} is a valid move.`) : console.log(`The move: {row: ${move.row}, col: ${move.col} is NOT a valid move.`)
		return moveIsValid;
	}

	movePiece(move)
	{
		if(moveValidation(move))
		{
			this.prePosition = this.position;
			this.preCoords = this.coords
			this.position = move;
		}
		else
		{
			console.log(`You cannot move ${this.name} to cell ${LETTERS[this.move.col]}${NUMBERS[this.move.row]}`)
		}
	}
}

export default GamePiece;