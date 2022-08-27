import styles from './styles.module.css'

const Wrapper = ({ children }:{ children:any }) => {
	return (
		<main className={styles.wrapper}>
			{ children }
		</main>
	)
}

export default Wrapper
