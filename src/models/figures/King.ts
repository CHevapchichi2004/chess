import { Figure, FigureNames } from "./Figure";
import blackLogo from "../../assets/black-king.png";
import whiteLogo from "../../assets/white-king.png";
import { colors } from "../Colors";
import { Cell } from "../Cell";

export class King extends Figure {
	constructor(color: colors, cell: Cell) {
		super(color, cell);
		this.logo = color === colors.WHITE ? whiteLogo : blackLogo;
		this.name = FigureNames.KING;
	}
}
