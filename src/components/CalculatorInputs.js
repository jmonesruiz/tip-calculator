import NumberInput from "./NumberInput";
import PercentageInput from "./PercentageInput";
import iconDollar from "../img/icon-dollar.svg";
import iconPerson from "../img/icon-person.svg";
import "./CalculatorInputs.scss";

function CalculatorInputs(props) {
	return (
		<form onSubmit={(event) => event.preventDefault()} className="calculator-inputs">
			<NumberInput
				label="Bill"
				name="bill-amount"
				icon={iconDollar}
				changeHandler={billChangeHandler}
				setResetFunctions={props.setResetFunctions}
			></NumberInput>
			<PercentageInput
				label="Select Tip %"
				name="tip-percentage"
				changeHandler={percentageChangeHandler}
				setResetFunctions={props.setResetFunctions}
			></PercentageInput>
			<NumberInput
				label="Number of People"
				name="people"
				icon={iconPerson}
				changeHandler={peopleChangeHandler}
				setResetFunctions={props.setResetFunctions}
			></NumberInput>
		</form>
	);

	function billChangeHandler(value) {
		props.setInputs((prev) => {
			return { ...prev, billAmount: value };
		});
	}

	function percentageChangeHandler(value) {
		props.setInputs((prev) => {
			return { ...prev, tipPercentage: value };
		});
	}

	function peopleChangeHandler(value) {
		props.setInputs((prev) => {
			return { ...prev, people: value };
		});
	}
}

export default CalculatorInputs;
