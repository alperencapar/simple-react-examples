import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

const Form = () => {
	return (
		<div>
			<Formik
				initialValues={{
					firstName: "",
					lastName: "",
					username: "",
					email: "",
					password: "",
					password1: ""
				}}
				validationSchema={Yup.object().shape({
					firstName: Yup.string()
						.min(2, "Minimum 2 character needed")
						.max(50, "You can enter maximum 50 character")
						.required("You must fill this area"),
					lastName: Yup.string()
						.min(2, "Minimum 2 character needed")
						.max(50, "You can enter maximum 50 character")
						.required("You must fill this area"),
					username: Yup.string()
						.min(3, "Minimum 2 character needed")
						.max(30, "You can enter maximum 30 character")
						.required("You must fill this area"),
					email: Yup.string()
						.email()
						.required("You must fill this area"),
					password: Yup.string()
						.min(8)
						.max(50)
						.required("You must fill this area"),
					password1: Yup.string()
						.min(8)
						.max(50)
						.required("You must fill this area")
						.oneOf(
							[Yup.ref("password"), null],
							"Password must match!"
						)
				})}
				onSubmit={(values) => {
					console.log(values);
				}}
			>
				{({
					values,
					errors,
					isSubmitting,
					dirty,
					touched,
					isValid,
					handleChange,
					handleSubmit,
					handleBlur,
					handleReset
				}) => (
					<form onSubmit={handleSubmit}>
						<div>
							<label htmlFor="firstName">First Name:</label>
							<input
								id="firstName"
								type="text"
								name="firstName"
								placeholder="First Name"
								value={values.firstName}
								onChange={handleChange}
								onBlur={handleBlur}
								data-invalid={touched.firstName && errors.firstName ? true: null}
							/>
							{touched.firstName && errors.firstName ? (
								<span>{errors.firstName}</span>
							) : null}
						</div>

						<div>
						<label htmlFor="lastName">Last Name:</label>
							<input
								id="lastName"
								type="text"
								name="lastName"
								placeholder="Last Name"
								value={values.lastName}
								onChange={handleChange}
								onBlur={handleBlur}
								data-invalid={touched.lastName && errors.lastName ? true: null}
							/>
							{touched.lastName && errors.lastName ? (
								<span>{errors.lastName}</span>
							) : null}
						</div>

						<div>
						<label htmlFor="username">Username:</label>
							<input
								id="username"
								type="text"
								name="username"
								placeholder="username"
								value={values.username}
								onChange={handleChange}
								onBlur={handleBlur}
								data-invalid={touched.username && errors.username ? true: null}
							/>
							{touched.username && errors.username ? (
								<span>{errors.username}</span>
							) : null}
						</div>

						<div>
						<label htmlFor="email">Email:</label>
							<input
								id="email"
								type="text"
								name="email"
								placeholder="Email"
								value={values.email}
								onChange={handleChange}
								onBlur={handleBlur}
								data-invalid={touched.email && errors.email ? true: null}
							/>
							{touched.email && errors.email ? (
								<span>{errors.email}</span>
							) : null}
						</div>

						<div>
						<label htmlFor="password">Password:</label>
							<input
								id="password"
								type="password"
								name="password"
								placeholder="Password"
								value={values.password}
								onChange={handleChange}
								onBlur={handleBlur}
								data-invalid={touched.password && errors.password ? true: null}
							/>
							{touched.password && errors.password ? (
								<span>{errors.password}</span>
							) : null}
						</div>

						<div>
						<label htmlFor="password1">Confirm Password:</label>
							<input
								id="password1"
								type="password"
								name="password1"
								placeholder="Confirm Password"
								value={values.password1}
								onChange={handleChange}
								onBlur={handleBlur}
								data-invalid={touched.password1 && errors.password1 ? true: null}
							/>
							{touched.password1 && errors.password1 ? (
								<span>{errors.password1}</span>
							) : null}
						</div>
						<div className="btn-holder">
							<button onClick={handleReset} className="resetBtn">
								Reset
							</button>
							<button
								type="submit"
								disabled={!dirty || !isValid || isSubmitting}
							>
								Send Form
							</button>
						</div>
					</form>
				)}
			</Formik>
		</div>
	);
};

export default Form;
