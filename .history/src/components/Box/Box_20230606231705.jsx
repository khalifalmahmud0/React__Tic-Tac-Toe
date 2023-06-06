import "./Box.css";
export default function Box({ value, clickSingleBox }) {
	return (
		<>
			<div className="boxContainer" onClick={clickSingleBox}>
				<h5>{value}</h5>
			</div>
		</>
	);
}
