import { Figure, FigureNames } from "./Figure";
import blackLogo from "../../assets/black-pawn.png";
import whiteLogo from "../../assets/white-pawn.png";
import { colors } from "../Colors";
import { Cell } from "../Cell";

export class Paw extends Figure {
	isFirstStep: boolean = true;

	constructor(color: colors, cell: Cell) {
		super(color, cell);
		this.logo = color === colors.WHITE ? whiteLogo : blackLogo;
		this.name = FigureNames.PAW;
	}

	public canMove(target: Cell): boolean {
		if (!super.canMove(target)) {
			return false;
		}
		const direction = this.cell.figure?.color === colors.BLACK ? 1 : -1;
		const firstStepDirection =
			this.cell.figure?.color === colors.BLACK ? 2 : -2;
		if (
			(target.y === this.cell.y + direction ||
				(this.isFirstStep && target.y === this.cell.y + firstStepDirection)) &&
			target.x === this.cell.x &&
			this.cell.board.getCell(target.x, target.y).isEmpty()
		) {
			return true;
		}

		if (
			target.y === this.cell.y + direction &&
			(target.x === this.cell.x + 1 || target.x === this.cell.x - 1) &&
			this.cell.isEnemy(target)
		) {
			return true;
		}

		return false;
	}

	moveFigure(target: Cell) {
		super.moveFigure(target);
		this.isFirstStep = false;
	}
}
