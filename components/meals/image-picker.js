"use client";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";
export default function ImagePicker({ label, name }) {
	const imageInput = useRef();
	const [pickedImage, setPickedImage] = useState(null);

	function handlePickerClick() {
		imageInput.current.click();
	}

	function handleImageChange(event) {
		const file = event.target.files[0];
		if (!file) {
			setPickedImage(null);
			return;
		}
		const fileReader = new FileReader();
		fileReader.onload = () => {
			setPickedImage(fileReader.result);
		};
		fileReader.readAsDataURL(file);
	}

	return (
		<div className={classes.picker}>
			<label htmlFor={name}>{label}</label>
			<div className={classes.controls}>
				<input
					className={classes.input}
					type='file'
					name={name}
					id={name}
					accept='image/png , image/jpeg'
					ref={imageInput}
					onChange={handleImageChange}
					required
				/>
				<div className={classes.preview}>
					{!pickedImage && <p>No Image Pickedet!</p>}
					{pickedImage && (
						<Image
							src={pickedImage}
							alt='The image selected by the user. '
							fill
						/>
					)}
				</div>

				<button
					className={classes.button}
					type='button'
					onClick={handlePickerClick}
				>
					Pic an Image
				</button>
			</div>
		</div>
	);
}
