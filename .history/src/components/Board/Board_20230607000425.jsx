import { useState } from "react";
import Box from "../Box/Box";
import "./Board.css";
export default function Board() {
	const [state, setState] = useState(Array(9).fill(null));
	const [isXturn, setisXturn] = useState(true);
	const checkWinner = () => {
		const winnerLogic = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];
		for (let logic of winnerLogic) {
			const [a, b, c] = logic;
			if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
				return state[a];
			}
		}
		return false;
	};
	const isWinner = checkWinner();
	const whatHappenAfterClickBox = (index) => {
		if (state[index] !== null) {
			return;
		}
		const copyState = [...state];
		copyState[index] = isXturn ? "X" : "O";
		setState(copyState);
		setisXturn(!isXturn);
	};
	return (
		<>
			<div className="board-container">
				{isWinner ? (
					<>
						<h1>{isWinner} Jitacha</h1> <button>Play Again</button>
					</>
				) : (
					<>
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
					</>
				)}
			</div>
		</>
	);
}
