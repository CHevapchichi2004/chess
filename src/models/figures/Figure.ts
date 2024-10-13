import { colors } from "../Colors";
import logo from "../../assets/black-bishop.png";
import { Cell } from "../Cell";

export enum FigureNames {
	FIGURE = "figure",
	KING = "king",
	KHIGHT = "knight",
	PAW = "paw",
	QUEEN = "queen",
	ROOK = "rook",
	BISHOP = "bishop",
}

export class Figure {
	color: colors;
	logo: typeof logo | null;
	cell: Cell;
	name: FigureNames;
	id: number;
	constructor(color: colors, cell: Cell) {
		this.color = color;
		this.cell = cell;
		this.cell.figure = this;
		this.logo = null;
		this.name = FigureNames.FIGURE;
		this.id = Math.random();
	}

	public canMove(target: Cell): boolean {
		if (target.figure?.color === this.cell.figure?.color) {
			return false;
		}
		if (target.figure?.name === FigureNames.KING) {
			return false;
		}
		return true;
	}

	public moveFigure(target: Cell) {}
}
