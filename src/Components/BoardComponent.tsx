import React, { useEffect, useState } from "react";
import { Board } from "../models/Board";
import CellComponent from "./CellComponent";
import { Cell } from "../models/Cell";

interface BoardProps {
	board: Board;
	setBoard: (board: Board) => void;
}

const BoardComponent: React.FC<BoardProps> = ({ board, setBoard }) => {
	const [selected, setSelected] = useState<Cell | null>(null);

	useEffect(() => {
		highlightCells();
	}, [selected]);

	const onClickHandler = (cell: Cell) => {
		if (selected && selected !== cell && selected.figure?.canMove(cell)) {
			selected.moveFigure(cell);
			setSelected(null);
		} else {
			setSelected(cell);
		}
	};

	const highlightCells = () => {
		board.highlightCells(selected);
		updateBoard();
	};

	function updateBoard() {
		const newBoard = board.getCopyBoard();
		setBoard(newBoard);
	}

	return (
		<div className="board">
			{board.cells.map((row, index) => (
				<React.Fragment key={index}>
					{row.map((item) => (
						<CellComponent
							key={item.id}
							cell={item}
							selected={item.x === selected?.x && item.y === selected?.y}
							onClickHandler={onClickHandler}
						/>
					))}
				</React.Fragment>
			))}
		</div>
	);
};

export default BoardComponent;
