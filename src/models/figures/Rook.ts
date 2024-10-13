import { Figure, FigureNames } from "./Figure";
import blackLogo from "../../assets/black-rook.png";
import whiteLogo from "../../assets/white-rook.png";
import { colors } from "../Colors";
import { Cell } from "../Cell";

export class Rook extends Figure {
	constructor(color: colors, cell: Cell) {
		super(color, cell);
		this.logo = color === colors.WHITE ? whiteLogo : blackLogo;
		this.name = FigureNames.ROOK;
	}
	public canMove(target: Cell): boolean {
		if (!super.canMove(target)) {
			return false;
		}
		if (this.cell.isEmptyHorizontal(target)) {
			return true;
		}
		if (this.cell.isEmptyVertival(target)) {
			return true;
		}
		return false;
	}
}
