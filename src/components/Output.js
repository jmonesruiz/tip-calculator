import "./Output.scss";

function Output(props) {
	return (
		<div className="output">
			<h2 className="output__label">
				{props.label}
				<span>/ person</span>
			</h2>
			<p className="output__value">{props.value}</p>
		</div>
	);
}

export default Output;
