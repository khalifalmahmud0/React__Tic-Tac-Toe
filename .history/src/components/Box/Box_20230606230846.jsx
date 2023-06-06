import "./Box.css";
export default function Box({ value }) {
	return (
		<>
			<div className="boxContainer">
				<h5>{value}</h5>
			</div>
		</>
	);
}
