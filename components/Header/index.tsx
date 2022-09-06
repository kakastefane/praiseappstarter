import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import cx from 'classnames'

import styles from "./styles.module.css";

const Header = () => {
	const { route } = useRouter();
	const [ menuActive, setMenuActive ] = useState(false);
	const [ userMenuActive, setUserMenuActive ] = useState(false);

	return (
    <div className={styles.container}>
			<button className={styles.button} onClick={() => {setMenuActive(menuActive => !menuActive)}}>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
				</svg>
			</button>
			<Link href="/">
				<a className={styles.brand}>
					Praise<span>+</span>
				</a>
			</Link>
			<nav className={cx(styles.menu, {[styles.active]: menuActive})}>
				<ul className={styles.menuList}>
					<li className={styles.menuItem}>
						<Link href="/">
							<a className={cx(styles.menuLink, {[styles.active]: route == "/"})}>Escalas</a>
						</Link>
					</li>
					<li className={styles.menuItem}>
						<Link href="/repertory">
							<a className={cx(styles.menuLink, {[styles.active]: route == "/repertory"})}>Repertório</a>
						</Link>
					</li>
					<li className={styles.menuItem}>
						<Link href="/ministry">
							<a className={cx(styles.menuLink, {[styles.active]: route == "/ministry"})}>Ministério</a>
						</Link>
					</li>
				</ul>
			</nav>
			<button className={styles.avatar} onClick={() => {setUserMenuActive(userMenuActive => !userMenuActive)}}>
				<img src="https://via.placeholder.com/30" />
			</button>
			<div className={cx(styles.userMenu, {[styles.active]: userMenuActive})}>
				<ul className={styles.userMenuList}>
					<li className={styles.userMenuItem}>
						<span className={styles.userMenuHeader}>
							Você está logado como: <br />
							<strong>Kariston Stefane</strong>
						</span>
					</li>
					<li className={styles.userMenuSeparator}></li>
					<li className={styles.userMenuItem}>
						<Link href="/profile">
							<a className={cx(styles.userMenuLink, {[styles.active]: route == "/profile"})}>Meu perfil</a>
						</Link>
					</li>
					<li className={styles.userMenuItem}>
						<Link href="/settings">
							<a className={cx(styles.userMenuLink, {[styles.active]: route == "/settings"})}>Configurações</a>
						</Link>
					</li>
					<li className={styles.userMenuSeparator}></li>
					<li className={styles.userMenuItem}>
						<Link href="/">
							<a className={cx(styles.userMenuLink, {[styles.logout]: true})}>Sair</a>
						</Link>
					</li>
				</ul>
			</div>
		</div>
  )
}

export default Header
