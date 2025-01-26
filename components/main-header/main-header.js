// "use client";

import Link from "next/link";
import Image from "next/image";

import logoImg from "@/assets/logo.png";
import classes from "@/components/main-header/main-header.module.css";
import MainHeaderBackgroun from "./main-header-background";
// import { usePathname } from "next/navigation";
import NavLink from "./nav-link";

export default function MainHeader() {
	// console.log("baraa");
	// const path = usePathname();

	return (
		<>
			<MainHeaderBackgroun />
			<header className={classes.header}>
				<Link href='/' className={classes.logo}>
					<Image
						src={logoImg.src}
						alt='a plate with food on it'
						priority
						width={500}
						height={500}
					/>
					{/* <img src={logoImg.src} alt='a plate with food on it' /> */}
					NextLevel Food
				</Link>
				<nav className={classes.nav}>
					<ul style={{ listDecoration: "none " }}>
						<li>
							<NavLink href='/meals'>Browse Meals</NavLink>
						</li>
						<li>
							<NavLink href='/community'>
								Browse Community
							</NavLink>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}
