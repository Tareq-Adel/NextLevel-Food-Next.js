import { getMeal } from "@/lib/meals";
import classes from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";
export default async function MealsDetailsPage({ params }) {
	const meal = await getMeal(params.mealSlug);
	if (!meal) {
		notFound();
	}
	const instructions = meal.instructions.replace(/\n/g, "<br/>");
	return (
		<>
			<header className={classes.header}>
				<div className={classes.image}>
					<Image src={meal.image} alt={meal.title} fill />
				</div>
				<div className={classes.headerText}>
					<h1 className={classes.title}>{meal.title}</h1>
					<p className={classes.creator}>
						by <a href={`mailto:${"EMAIL"}`}>{meal.creator}</a>
					</p>
					<p className={classes.summary}>{meal.summary}</p>
				</div>
			</header>
			<main>
				{/* <h1>{ props.params.slug } Meal Details</h1> */}
				<p
					className={classes.instructions}
					dangerouslySetInnerHTML={{
						__html: `${instructions}`,
					}}
				></p>
			</main>
		</>
	);
}
