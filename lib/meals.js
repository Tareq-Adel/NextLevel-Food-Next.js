const sql = require("better-sqlite3");
const db = sql("meals.db");

import fs from "node:fs";
import xss from "xss";
import slugify from "slugify";

export async function getMeals() {
	// await new Promise((resolve) => setTimeout(resolve, 5000));
	// throw new Error("Ohhh sory, An Error😣😣");
	return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
	return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal) {
	meal.slug = slugify(meal.title, { lower: true });
	meal.instructions = xss(meal.instructions);

	const extention = meal.image.name.split(".").pop();
	const fileName = `${meal.title}.${extention}`;

	const stream = fs.createWriteStream(`public/images/${fileName}`);
	const bufferedImage = await meal.image.arrayBuffer();

	stream.write(Buffer.from(bufferedImage), (error) => {
		if (error) {
			throw new Error("Can't save image");
		}
	});
	meal.image = `/images/${fileName}`;
	console.log(meal);

	db.prepare(
		`
		INSERT INTO meals
		(title, summary, instructions, creator, creator_email, image, slug)
		VALUES
		(
			@title,
			@summary,
			@instructions,
			@creator,
			@creator_email,
			@image,
			@slug
		 )
		`
	).run(meal);
}
