import Output from "./Output";
import "./CalculatorOutputs.scss";

function CalculatorOutputs(props) {
	const billAmount = parseFloat(props.inputs.billAmount);
	const tipPercentage = parseFloat(props.inputs.tipPercentage);
	const people = parseFloat(props.inputs.people);

	let tipAmount = 0;
	let total = 0;

	return (
		<div className="calculator-outputs">
			<div className="outputs">
				<Output label="Tip Amount" value={"$" + calcTipAmount().toFixed(2)}></Output>
				<Output label="Total" value={"$" + calcTotal().toFixed(2)}></Output>
			</div>

			<button className="reset-btn" onClick={props.reset}>
				Reset
			</button>
		</div>
	);

	function calcTipAmount() {
		if (billAmount && tipPercentage && people) {
			tipAmount = (billAmount * (tipPercentage / 100)) / people;
		} else {
			tipAmount = 0;
		}
		return tipAmount;
	}

	function calcTotal() {
		if (billAmount && tipPercentage && people) {
			total = billAmount / people + tipAmount;
		} else {
			total = 0;
		}
		return total;
	}
}

export default CalculatorOutputs;
