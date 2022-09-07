import cx from 'classnames';
import Link from 'next/link';
import AvatarGroup from '../AvatarGroup';

import styles from './styles.module.css';

export default function EventCard({ event }: any) {
  return (
    <div className={cx(styles.eventCard, {[styles.next]: event.next })}>
      <div className={styles.eventTime}>
        <span className={styles.eventDay}>06</span>
        <span className={styles.eventMonth}>set</span>
        <span className={styles.eventHour}>17h</span>
      </div>
      <div className={styles.eventInfo}>
        <h3 className={styles.eventTitle}>Culto da Família</h3>
        <div className={styles.eventTeam}>
          <span className={styles.eventTeamText}>Escalados:</span>
          <AvatarGroup members={event.members} />
        </div>
        <Link href="/">
          <a className={styles.eventLink}>
            <span>Ver os detalhes</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </Link>
      </div>
    </div>
  )
}