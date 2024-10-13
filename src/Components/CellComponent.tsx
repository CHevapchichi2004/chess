import React from "react";
import { Cell } from "../models/Cell";

interface CellProps {
	cell: Cell;
	selected: boolean;
	onClickHandler: (cell: Cell) => void;
}

const CellComponent: React.FC<CellProps> = ({
	cell,
	selected,
	onClickHandler,
}) => {
	return (
		<div
			onClick={() => onClickHandler(cell)}
			className={["cell", cell.color, selected ? "selected" : ""].join(" ")}
			style={{
				backgroundColor: cell.figure && cell.available ? "green" : " ",
			}}
		>
			{cell.available && !cell.figure && <div className="available"></div>}
			{cell.figure?.logo && <img src={cell.figure.logo} alt="#" />}
		</div>
	);
};
export default CellComponent;
