import Link from 'next/link'
import styles from './styles.module.css'

import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <header className={styles.container}>
      <Link href="/">
        <a className={styles.brand}>
          Praise++
        </a>
      </Link>
			<button className={styles.button}>
				<FaBars />
			</button>
    </header>
  )
}

export default Header
