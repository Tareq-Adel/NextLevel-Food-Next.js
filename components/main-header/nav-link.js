"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./nav-link.module.css";

export default function NavLink({ href, children }) {
	console.log(children, "hi");
	console.log(href, "hi");

	const path = usePathname();
	console.log("hi ");

	return (
		<Link
			href={href}
			className={
				path.startsWith(href)
					? `${classes.active} ${classes.link}`
					: classes.link
			}
		>
			{children}
		</Link>
	);
}
