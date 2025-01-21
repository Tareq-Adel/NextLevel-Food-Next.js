import Link from "next/link";
import Image from "next/image";

import logoImg from "@/assets/logo.png";
import classes from "@/components/main-header/main-header.module.css";
import MainHeaderBackgroun from "./main-header-background";

export default function MainHeader() {
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
							<Link href='/meals'>Browse Meals</Link>
						</li>
						<li>
							<Link href='/community'>Browse Community</Link>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}
