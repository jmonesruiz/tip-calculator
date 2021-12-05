import { useState } from "react";
import CalculatorInputs from "./CalculatorInputs";
import CalculatorOutputs from "./CalculatorOutputs";
import "./TipCalculator.scss";

function TipCalculator() {
	const [inputs, setInputs] = useState({
		billAmount: "",
		tipPercentage: "",
		people: "",
	});
	const [resetFunctions, setResetFunctions] = useState([]);

	return (
		<div className="tip-calculator">
			<CalculatorInputs
				inputs={inputs}
				setInputs={setInputs}
				setResetFunctions={setResetFunctions}
			></CalculatorInputs>
			<CalculatorOutputs inputs={inputs} reset={onReset}></CalculatorOutputs>
		</div>
	);

	function onReset() {
		resetFunctions.forEach((func) => {
			func();
		});
	}
}

export default TipCalculator;
