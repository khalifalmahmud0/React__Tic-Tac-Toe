import Box from "../Box/Box";
import "./Board.css";
export default function Board() {
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
