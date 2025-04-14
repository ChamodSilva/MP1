export const LETTERS = ["A", "B", "C", "D", "E", "F", "G", "H"];
export const NUMBERS = ["1", "2", "3", "4", "5", "6", "7", "8"];
export const BLACK = "BLACK";
export const WHITE = "WHITE";
export const PATH_MARKER = "path-marker";
export const TARGET = "target";
export const DEFAULT =
{
    BOARD_SIZE: 8,
}

export const PIECE_NAME =
{
    PAWN: "PAWN",
    ROOK: "ROOK",
    KNIGHT: "KNIGHT",
    BISHOP: "BISHOP",
    QUEEN: "QUEEN",
    KING: "KING"
}

export const PIECE_NAME_MINOR =
{
    ROOK: "ROOK",
    KNIGHT: "KNIGHT",
    BISHOP: "BISHOP",
}

export const PIECE_NAME_MAJOR =
{
    QUEEN: "QUEEN",
    KING: "KING"
}

export const BOARD_RANK = 
{
    ONE: 0,
    TWO: 1,
    THREE: 2,
    FOUR: 3,
    FIVE: 4,
    SIX: 5,
    SEVEN: 6,
    NINE: 7
}

export const BOARD_FILE = 
{
    A: 0,
    B: 1,
    C: 2,
    D: 3,
    E: 4,
    F: 5,
    G: 6,
    H: 7
}

export const PIECE_NOTATION = 
{
    PAWN: "",
    ROOK: "R",
    KNIGHT: "N",
    BISHOP: "B",
    QUEEN: "Q",
    KING: "K"
}

export const COLOR_PATH =
{
    WHITE: "/sprites/white_",
    BLACK: "/sprites/black_",
}

export const PIECE_PATH =
{
    PAWN: "pawn.png",
    ROOK: "rook.png",
    KNIGHT: "knight.png",
    BISHOP: "bishop.png",
    QUEEN: "queen.png",
    KING: "king.png"
}

export const START_POSITION_PAWNS =
{
    WHITE: {row: 1, col: 0},
    BLACK: {row: 6, col: 0}
}

export const START_POSITION_MINOR = 
{
    ROOK_A: {row: 0, col: 0},
    ROOK_H: {row: 0, col: 7},
    KNIGHT_A: {row: 0, col: 1},
    KNIGHT_H: {row: 0, col: 6},
    BISHOP_A: {row: 0, col: 2},
    BISHOP_H: {row: 0, col: 5}
}

export const START_POSITION_MAJOR =
{
    QUEEN: {row: 0, col: 3},
    KING: {row: 0, col: 4}
}

export const MOVESET =
{
	north: {row:-1, col:0},
	south: {row:1, col:0},
	east: {row:0, col:1},
	west: {row:0, col:-1},
	northEast: {row:-1, col:1},
	northWest: {row:-1, col:-1},
	southWest: {row:1, col:-1},
	southEast: {row:1 , col:1}
}