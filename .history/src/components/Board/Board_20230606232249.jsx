import { useState } from "react";
import Box from "../Box/Box";
import "./Board.css";
export default function Board() {
	const [state, setState] = useState(Array(9).fill(null));
	const whatHappenAfterClickBox = (index) => {
		console.log(index);
	};
	return (
		<>
			<div className="board-container">
				<div className="board-row">
					<Box
						value={state[0]}
						clickSingleBox={() => whatHappenAfterClickBox(0)}
					/>
					<Box
						value={state[1]}
						clickSingleBox={() => whatHappenAfterClickBox(1)}
					/>
					<Box
						value={state[2]}
						clickSingleBox={() => whatHappenAfterClickBox(2)}
					/>
				</div>
				<div className="board-row">
					<Box
						value={state[3]}
						clickSingleBox={() => whatHappenAfterClickBox(3)}
					/>
					<Box
						value={state[4]}
						clickSingleBox={() => whatHappenAfterClickBox(4)}
					/>
					<Box
						value={state[5]}
						clickSingleBox={() => whatHappenAfterClickBox(5)}
					/>
				</div>
				<div className="board-row">
					<Box
						value={state[6]}
						clickSingleBox={() => whatHappenAfterClickBox(6)}
					/>
					<Box
						value={state[7]}
						clickSingleBox={() => whatHappenAfterClickBox(7)}
					/>
					<Box
						value={state[8]}
						clickSingleBox={() => whatHappenAfterClickBox(8)}
					/>
				</div>
			</div>
		</>
	);
}
