import { useEffect, useReducer } from "react";

import "./PercentageOptionCustom.scss";

function inputReducer(state, action) {
	if (action.type === "INPUT_CHANGE") {
		return { value: action.value, isValid: parseFloat(action.value, 10) >= 0 ? true : false };
	}
	if (action.type === "RESET") {
		return { value: "", isValid: false };
	}
	return { value: "", isValid: false };
}

function PercentageOptionCustom(props) {
	const [inputState, dispatchFn] = useReducer(inputReducer, { value: "", isValid: false });

	useEffect(() => {
		props.setResetFunctions((prev) => {
			return [...prev, reset];
		});
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		if (inputState.isValid) {
			props.onOptionChange(props.name + "-custom", inputState.value);
		} else {
			props.onOptionChange("", "");
		}
		// eslint-disable-next-line
	}, [inputState]);

	return (
		<label
			className={`percentage-option-custom ${
				inputState.value === "" || inputState.isValid ? "" : " error"
			}`}
			htmlFor={props.name + "-custom"}
		>
			<input
				className="percentage-option-custom__radio"
				type="radio"
				name={props.name}
				id={props.name + "-custom"}
				checked={props.name + "-custom" === props.checkedOption}
				value={inputState.value}
				onChange={onOptionChange}
			/>
			<input
				className="percentage-option-custom__input"
				type="text"
				value={inputState.value}
				placeholder="Custom"
				onClick={handleClick}
				onChange={onInputChange}
			/>
		</label>
	);

	function handleClick(event) {
		event.target.parentElement.click();
		event.target.focus();
		event.target.select();
	}

	function onInputChange(event) {
		let val = event.target.value.match(/[0-9]*\.?[0-9]*/);
		dispatchFn({ type: "INPUT_CHANGE", value: val[0] });
	}

	function onOptionChange(event) {
		if (inputState.isValid) {
			props.onOptionChange(event.target.id, event.target.value);
		} else {
			props.onOptionChange("", "");
		}
	}

	function reset() {
		dispatchFn({ type: "RESET" });
	}
}

export default PercentageOptionCustom;
