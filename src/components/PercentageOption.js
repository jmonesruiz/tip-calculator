import "./PercentageOption.scss";

function PercentageOption(props) {
	const identifier = props.name + "-" + props.percentage;

	return (
		<label className="percentage-option" htmlFor={identifier}>
			<input
				className="percentage-option__radio"
				type="radio"
				name={props.name}
				id={identifier}
				value={props.percentage}
				checked={identifier === props.checkedOption}
				onChange={(e) => props.onOptionChange(e.target.id, e.target.value)}
			/>
			<span className="percentage-option__text">{props.percentage}%</span>
		</label>
	);
}

export default PercentageOption;
