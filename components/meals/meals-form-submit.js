"use client";
import { useFormStatus } from "react-dom";

export default function MealsFormSubmit() {
	const submitForm = useFormStatus();

	return (
		<button type='submit'>
			{submitForm.pending ? "Pending..." : "Share Meal"}
		</button>
	);
}
