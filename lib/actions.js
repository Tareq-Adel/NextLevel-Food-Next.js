"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

export async function shareMeal(prevState, submitedData) {
	console.log(prevState);

	function isInvalidText(data) {
		return !data || data.trim(" ") === "";
	}

	const meal = {
		title: submitedData.get("title"),
		summary: submitedData.get("summary"),
		creator: submitedData.get("name"),
		instructions: submitedData.get("instructions"),
		creator_email: submitedData.get("email"),
		image: submitedData.get("image"),
	};

	if (
		isInvalidText(meal.title) ||
		isInvalidText(meal.summary) ||
		isInvalidText(meal.creator) ||
		isInvalidText(meal.instructions) ||
		isInvalidText(meal.creator_email) ||
		!meal.creator_email.includes("@") ||
		meal.image.size == 0 ||
		!meal.image
	) {
		// throw new Error("Invalid Input Data");

		return { message: "Invalid Inputs" };
	}
	saveMeal(meal);
	redirect("/meals");
}
