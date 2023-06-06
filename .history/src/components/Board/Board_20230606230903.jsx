import { useState } from "react";
import Box from "../Box/Box";
import "./Board.css";
export default function Board() {
	const [state, setState] = useState(Array(9).fill(PP));
	return (
		<>
			<div className="board-container">
				<div className="board-row">
					<Box value={state[0]} />
					<Box value={state[1]} />
					<Box value={state[2]} />
				</div>
				<div className="board-row">
					<Box value={state[3]} />
					<Box value={state[4]} />
					<Box value={state[5]} />
				</div>
				<div className="board-row">
					<Box value={state[6]} />
					<Box value={state[7]} />
					<Box value={state[8]} />
				</div>
			</div>
		</>
	);
}
