import { Board } from "./Board";
import { colors } from "./Colors";
import { Figure } from "./figures/Figure";

export class Cell {
	readonly x: number;
	readonly y: number;
	readonly color: colors;
	figure: Figure | null;
	board: Board;
	available: boolean;
	id: number;

	constructor(
		board: Board,
		x: number,
		y: number,
		color: colors,
		figure: Figure | null
	) {
		this.x = x;
		this.y = y;
		this.board = board;
		this.color = color;
		this.figure = figure;
		this.available = false;
		this.id = Math.random();
	}

	public isEmpty(): boolean {
		return this.figure == null;
	}

	public isEnemy(target: Cell): boolean {
		if (target.figure) {
			return target.figure.color !== this.figure?.color;
		}
		return false;
	}

	public setFigure(figure: Figure) {
		this.figure = figure;
		this.figure.cell = this;
	}

	public isEmptyVertival(target: Cell): boolean {
		if (target.x !== this.x) {
			return false;
		}
		const min = Math.min(this.y, target.y);
		const max = Math.max(this.y, target.y);
		for (let y = min + 1; y < max; y++) {
			if (!this.board.getCell(this.x, y).isEmpty()) {
				return false;
			}
		}
		return true;
	}

	public isEmptyHorizontal(target: Cell): boolean {
		if (target.y !== this.y) {
			return false;
		}
		const min = Math.min(this.x, target.x);
		const max = Math.max(this.x, target.x);
		for (let x = min + 1; x < max; x++) {
			if (!this.board.getCell(x, this.y).isEmpty()) {
				return false;
			}
		}
		return true;
	}

	public isEmptyDiagonal(target: Cell): boolean {
		const absX = Math.abs(target.x - this.x);
		const absY = Math.abs(target.y - this.y);
		if (absY !== absX) {
			return false;
		}

		const dy = this.y < target.y ? 1 : -1;
		const dx = this.x < target.x ? 1 : -1;

		for (let i = 1; i < absY; i++) {
			if (!this.board.getCell(this.x + dx * i, this.y + dy * i).isEmpty()) {
				return false;
			}
		}
		return true;
	}

	public moveFigure(target: Cell) {
		if (this.figure && this.figure.canMove(target)) {
			this.figure.moveFigure(target);
			target.setFigure(this.figure);
			target.figure = this.figure;
			this.figure = null;
		}
	}
}
