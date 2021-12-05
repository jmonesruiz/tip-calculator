import { useEffect, useReducer } from "react";

import "./NumberInput.scss";

function inputReducer(_, action) {
	if (action.type === "INPUT_CHANGE") {
		if (action.value === "") {
			return { value: action.value, isValid: true };
		}
		return { value: action.value, isValid: parseFloat(action.value, 10) > 0 ? true : false };
	}
	if (action.type === "RESET") {
		return { value: "", isValid: true };
	}
	return { value: "", isValid: true };
}

function NumberInput(props) {
	const [inputState, dispatchFn] = useReducer(inputReducer, { value: "", isValid: true });

	useEffect(() => {
		props.setResetFunctions((prev) => {
			return [...prev, reset];
		});
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		if (inputState.isValid) {
			props.changeHandler(inputState.value);
		} else {
			props.changeHandler("");
		}
		// eslint-disable-next-line
	}, [inputState]);

	return (
		<div className={`number-input ${inputState.isValid ? "" : " error"}`}>
			<div className="number-input__header">
				<label className="number-input__label" htmlFor={props.name}>
					{props.label}
				</label>
				<p className="number-input__error-message">Can't be zero</p>
			</div>
			<img className="number-input__icon" src={props.icon} alt="" />
			<input
				className="number-input__input"
				type="text"
				name={props.name}
				id={props.name}
				value={inputState.value}
				placeholder="0"
				onClick={(event) => event.target.select()}
				onChange={onInputChange}
			/>
		</div>
	);

	function onInputChange(event) {
		let val = event.target.value.match(/[0-9]*\.?[0-9]*/);
		dispatchFn({ type: "INPUT_CHANGE", value: val[0] });
	}

	function reset() {
		dispatchFn({ type: "RESET" });
	}
}

export default NumberInput;
