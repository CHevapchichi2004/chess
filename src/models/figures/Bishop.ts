import { Figure, FigureNames } from "./Figure";
import blackLogo from "../../assets/black-bishop.png";
import whiteLogo from "../../assets/white-bishop.png";
import { colors } from "../Colors";
import { Cell } from "../Cell";

export class Bishop extends Figure {
	constructor(color: colors, cell: Cell) {
		super(color, cell);
		this.logo = color === colors.WHITE ? whiteLogo : blackLogo;
		this.name = FigureNames.BISHOP;
	}
	canMove(target: Cell): boolean {
		if (!super.canMove(target)) {
			return false;
		}
		if (this.cell.isEmptyDiagonal(target)) {
			return true;
		}
		return false;
	}
}
