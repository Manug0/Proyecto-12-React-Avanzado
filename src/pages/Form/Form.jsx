import React, { useReducer, useState } from "react";
import "./Form.css";

const formReducer = (state, action) => {
	switch (action.type) {
		case "USERNAME":
			return { ...state, username: action.payload };
		case "EMAIL":
			return { ...state, email: action.payload };
		case "MESSAGE":
			return { ...state, message: action.payload };
		default:
			return state;
	}
};

const Form = () => {
	const [state, dispatch] = useReducer(formReducer, {
		username: "",
		email: "",
		message: "",
	});

	const [errors, setErrors] = useState({});

	const handleSubmit = (e) => {
		e.preventDefault();
		let errors = {};
		if (state.username === "") {
			errors = { ...errors, username: "Este campo es requerido" };
		}
		if (!state.email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
			errors = { ...errors, email: "Formato de email incorrecto" };
		}
		if (state.message === "") {
			errors = { ...errors, message: "El campo de mensaje no puede estar vacío" };
		}
		setErrors(errors);
		if (Object.entries(errors).length === 0) {
			console.log(state);
		}
	};

	return (
		<div className="request-info">
			<h2>Tienes alguna sugerencia?</h2>
			<p>Ponte en contacto con nosotros</p>

			<br />

			<form onSubmit={handleSubmit}>
				<label htmlFor="username">Nombre de usuario:</label>
				<input
					style={
						errors.username
							? {
									border: "1px solid red",
									backgroundColor: "rgb(255, 213, 220)",
									color: "black",
							  }
							: {}
					}
					type="text"
					id="username"
					value={state.username}
					onInput={(e) => dispatch({ type: "USERNAME", payload: e.target.value })}
				/>
				{errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
				<label htmlFor="email">Email:</label>
				<input
					style={
						errors.email
							? {
									border: "1px solid red",
									backgroundColor: "rgb(255, 213, 220)",
									color: "black",
							  }
							: {}
					}
					type="email"
					id="email"
					value={state.email}
					onInput={(e) => dispatch({ type: "EMAIL", payload: e.target.value })}
				/>
				{errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

				<label htmlFor="message">Mensaje:</label>
				<input
					style={
						errors.message
							? {
									border: "1px solid red",
									backgroundColor: "rgb(255, 213, 220)",
									color: "black",
							  }
							: {}
					}
					type="text"
					id="message"
					value={state.message}
					onInput={(e) => dispatch({ type: "MESSAGE", payload: e.target.value })}
				/>
				{errors.message && <p style={{ color: "red" }}>{errors.message}</p>}

				<button type="submit">Enviar</button>
			</form>
		</div>
	);
};

export default Form;
