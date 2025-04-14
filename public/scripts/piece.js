//#region [Constants]
import {
	LETTERS,
	NUMBERS,
	BLACK,
	WHITE,
	PATH_MARKER,
	TARGET,
	MOVESET,
    PIECE_NOTATION,
    COLOR_PATH,
    PIECE_PATH,
    PIECE_NAME
} from "./constants.js"
//#endregion 

class Piece
{
    constructor(isWhite, pieceType, position, visualize = true)
    {
        this.isWhite = isWhite;
        this.name = pieceType;
        this.notation = PIECE_NOTATION[pieceType];
        this.color = isWhite ? WHITE : BLACK;
        this.spritePath = (isWhite ? COLOR_PATH.WHITE : COLOR_PATH.BLACK) + PIECE_PATH[pieceType];
        this.position = position;
        this.sprite = visualize ? this.renderSprite() : null;
        this.isAlive = true;
        this.coords = this.convertToCoords(position);

    
        //this.prePosition = null;
    }

    convertToCoords(position)
	{
		let coords = `${LETTERS[position.col]}${NUMBERS[position.row]}`;
		return coords;
	}

    renderSprite()
    {
        const sprite = document.createElement("img");
        sprite.classList.add(this.color);
        sprite.src = this.spritePath;
        console.log(`${this.name} has been rendered.`);
        return sprite;
    }
}

export default Piece;