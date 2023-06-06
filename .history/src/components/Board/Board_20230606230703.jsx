import { useState } from "react";
import Box from "../Box/Box";
import "./Board.css";
export default function Board() {
	const [state, setState] = useState(Array(9).fill(null));
	return (
		<>
			<div className="board-container">
				<div className="board-row">
					<Box />
					<Box />
					<Box />
				</div>
				<div className="board-row">
					<Box />
					<Box />
					<Box />
				</div>
				<div className="board-row">
					<Box />
					<Box />
					<Box />
				</div>
			</div>
		</>
	);
}
