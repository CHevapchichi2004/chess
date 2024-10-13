import { Figure, FigureNames } from "./Figure";
import blackLogo from "../../assets/black-queen.png";
import whiteLogo from "../../assets/white-queen.png";
import { colors } from "../Colors";
import { Cell } from "../Cell";

export class Queen extends Figure {
	constructor(color: colors, cell: Cell) {
		super(color, cell);
		this.logo = color === colors.WHITE ? whiteLogo : blackLogo;
		this.name = FigureNames.QUEEN;
	}

	public canMove(target: Cell): boolean {
		if (!super.canMove(target)) {
			return false;
		}
		if (this.cell.isEmptyVertival(target)) {
			return true;
		}
		if (this.cell.isEmptyHorizontal(target)) {
			return true;
		}
		if (this.cell.isEmptyDiagonal(target)) {
			return true;
		}
		return false;
	}
}
