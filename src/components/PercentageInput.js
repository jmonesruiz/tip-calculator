import { useEffect, useReducer } from "react";

import PercentageOption from "./PercentageOption";
import PercentageOptionCustom from "./PercentageOptionCustom";
import "./PercentageInput.scss";

function inputReducer(state, action) {
	if (action.type === "OPTION_CHANGE") {
		return { checkedOption: action.checkedOption, value: action.value };
	}
	if (action.type === "RESET") {
		return { checkedOption: "", value: "" };
	}
	return { checkedOption: "", value: "" };
}

function PercentageInput(props) {
	const [inputState, dispatchFn] = useReducer(inputReducer, {
		checkedOption: "",
		value: "",
	});

	/*
	useEffect(() => {
		props.setResetFunctions((prev) => {
			return [...prev, reset];
		});
        // eslint-disable-next-line
	}, []);
*/
	useEffect(() => {
		props.changeHandler(inputState.value);
		// eslint-disable-next-line
	}, [inputState]);

	return (
		<fieldset className="percentage-input">
			<legend className="percentage-input__label">{props.label}</legend>
			<div className="percentage-input__options">
				<PercentageOption
					name={props.name}
					percentage={5}
					checkedOption={inputState.checkedOption}
					onOptionChange={onOptionChange}
				></PercentageOption>
				<PercentageOption
					name={props.name}
					percentage={10}
					checkedOption={inputState.checkedOption}
					onOptionChange={onOptionChange}
				></PercentageOption>
				<PercentageOption
					name={props.name}
					percentage={15}
					checkedOption={inputState.checkedOption}
					onOptionChange={onOptionChange}
				></PercentageOption>
				<PercentageOption
					name={props.name}
					percentage={25}
					checkedOption={inputState.checkedOption}
					onOptionChange={onOptionChange}
				></PercentageOption>
				<PercentageOption
					name={props.name}
					percentage={50}
					checkedOption={inputState.checkedOption}
					onOptionChange={onOptionChange}
				></PercentageOption>
				<PercentageOptionCustom
					name={props.name}
					checkedOption={inputState.checkedOption}
					onOptionChange={onOptionChange}
					setResetFunctions={props.setResetFunctions}
				></PercentageOptionCustom>
			</div>
		</fieldset>
	);

	function onOptionChange(id, value) {
		dispatchFn({ type: "OPTION_CHANGE", checkedOption: id, value: value });
	}

	// function reset() {
	// 	dispatchFn({ type: "RESET" });
	// }
}

export default PercentageInput;
