// Constants representing the letters used for chess board files (columns).
export const LETTERS = ["A", "B", "C", "D", "E", "F", "G", "H"];

// Constants representing the numbers used for chess board ranks (rows).
export const NUMBERS = ["1", "2", "3", "4", "5", "6", "7", "8"];

// String constants for representing the colors of chess pieces.
export const BLACK = "BLACK";
export const WHITE = "WHITE";

// String constants used for marking potential move locations on the board.
export const PATH_MARKER = "path-marker"; // Marks a potential move location.
export const TARGET = "target"; // Marks a square where a piece can be captured.

// Object holding default configuration values for the game.
export const DEFAULT = {
    BOARD_SIZE: 8, // Default size of the chessboard (8x8).
};

// Object containing string constants for chess piece names.
export const PIECE_NAME = {
    PAWN: "PAWN",
    ROOK: "ROOK",
    KNIGHT: "KNIGHT",
    BISHOP: "BISHOP",
    QUEEN: "QUEEN",
    KING: "KING"
};

// Object grouping minor chess piece names.
export const PIECE_NAME_MINOR = {
    ROOK: "ROOK",
    KNIGHT: "KNIGHT",
    BISHOP: "BISHOP",
};

// Object grouping major chess piece names.
export const PIECE_NAME_MAJOR = {
    QUEEN: "QUEEN",
    KING: "KING"
};

// Object mapping board ranks (rows) to numerical indices (0-7).
export const BOARD_RANK = {
    ONE: 0,
    TWO: 1,
    THREE: 2,
    FOUR: 3,
    FIVE: 4,
    SIX: 5,
    SEVEN: 6,
    NINE: 7 // Note: Should probably be EIGHT: 7
};

// Object mapping board files (columns) to numerical indices (0-7).
export const BOARD_FILE = {
    A: 0,
    B: 1,
    C: 2,
    D: 3,
    E: 4,
    F: 5,
    G: 6,
    H: 7
};

// Object mapping piece names to their algebraic notation symbols.
export const PIECE_NOTATION = {
    PAWN: "", // Pawn has no symbol in algebraic notation.
    ROOK: "R",
    KNIGHT: "N",
    BISHOP: "B",
    QUEEN: "Q",
    KING: "K"
};

// Object defining the base paths for piece sprite images based on color.
export const COLOR_PATH = {
    WHITE: "/sprites/white_",
    BLACK: "/sprites/black_",
};

// Object defining the file names for piece sprite images.
export const PIECE_PATH = {
    PAWN: "pawn.png",
    ROOK: "rook.png",
    KNIGHT: "knight.png",
    BISHOP: "bishop.png",
    QUEEN: "queen.png",
    KING: "king.png"
};

// Object defining the starting positions for pawns based on color.
export const START_POSITION_PAWNS = {
    WHITE: { row: 1, col: 0 },
    BLACK: { row: 6, col: 0 }
};

// Object defining the starting positions for minor pieces (rooks, knights, bishops).
export const START_POSITION_MINOR = {
    ROOK_A: { row: 0, col: 0 },
    ROOK_H: { row: 0, col: 7 },
    KNIGHT_A: { row: 0, col: 1 },
    KNIGHT_H: { row: 0, col: 6 },
    BISHOP_A: { row: 0, col: 2 },
    BISHOP_H: { row: 0, col: 5 }
};

// Object defining the starting positions for major pieces (queen, king).
export const START_POSITION_MAJOR = {
    QUEEN: { row: 0, col: 3 },
    KING: { row: 0, col: 4 }
};

// Object defining movement offsets for various directions on the board.
export const MOVESET = {
    north: { row: -1, col: 0 },
    south: { row: 1, col: 0 },
    east: { row: 0, col: 1 },
    west: { row: 0, col: -1 },
    northEast: { row: -1, col: 1 },
    northWest: { row: -1, col: -1 },
    southWest: { row: 1, col: -1 },
    southEast: { row: 1, col: 1 }
};