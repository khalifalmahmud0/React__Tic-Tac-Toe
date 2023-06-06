import { useState } from "react";
import Box from "../Box/Box";
import "./Board.css";
export default function Board() {
	const [state, setState] = useState([9].fill(null));
	console.log(state);
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
