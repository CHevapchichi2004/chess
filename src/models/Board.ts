import { Cell } from "./Cell";
import { colors } from "./Colors";
import { Bishop } from "./figures/Bishop";
import { King } from "./figures/King";
import { Knight } from "./figures/Knight";
import { Paw } from "./figures/Paw";
import { Queen } from "./figures/Queen";
import { Rook } from "./figures/Rook";
export class Board {
	cells: Cell[][] = [];
	public initCels() {
		for (let i = 0; i < 8; i++) {
			const row: Cell[] = [];
			for (let j = 0; j < 8; j++) {
				if ((i + j) % 2 !== 0) {
					row.push(new Cell(this, j, i, colors.BLACK, null));
				} else {
					row.push(new Cell(this, j, i, colors.WHITE, null));
				}
			}
			this.cells.push(row);
		}
	}
	public getCell(x: number, y: number) {
		return this.cells[y][x];
	}

	public highlightCells(selectedCell: Cell | null) {
		for (let i = 0; i < this.cells.length; i++) {
			const row = this.cells[i];
			for (let j = 0; j < row.length; j++) {
				const target = row[j];
				target.available = !!selectedCell?.figure?.canMove(target);
			}
		}
	}

	public getCopyBoard(): Board {
		const newBoard = new Board();
		newBoard.cells = this.cells;
		return newBoard;
	}

	public addFigures() {
		for (let i = 0; i < 8; i++) {
			new Paw(colors.BLACK, this.getCell(i, 1));
			new Paw(colors.WHITE, this.getCell(i, 6));
		}
		new King(colors.BLACK, this.getCell(4, 0));
		new King(colors.WHITE, this.getCell(4, 7));

		new Queen(colors.BLACK, this.getCell(3, 0));
		new Queen(colors.WHITE, this.getCell(3, 7));

		new Bishop(colors.BLACK, this.getCell(2, 0));
		new Bishop(colors.BLACK, this.getCell(5, 0));
		new Bishop(colors.WHITE, this.getCell(2, 7));
		new Bishop(colors.WHITE, this.getCell(5, 7));

		new Knight(colors.BLACK, this.getCell(1, 0));
		new Knight(colors.BLACK, this.getCell(6, 0));
		new Knight(colors.WHITE, this.getCell(1, 7));
		new Knight(colors.WHITE, this.getCell(6, 7));

		new Rook(colors.BLACK, this.getCell(0, 0));
		new Rook(colors.BLACK, this.getCell(7, 0));
		new Rook(colors.WHITE, this.getCell(0, 7));
		new Rook(colors.WHITE, this.getCell(7, 7));
	}
}
