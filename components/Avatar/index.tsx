import Link from 'next/link';
import cx from "classnames";

import styles from './styles.module.css';

export default function Avatar({ user, url, active }: any) {
  if (url) {
    return (
      <Link href={url}>
        <a className={cx(styles.avatar, {[styles.active]: active == true })}>
          <img src={user.pic} alt={user.name} />
        </a>
      </Link>
    )
  } else {
    return (
      <span className={cx(styles.avatar, {[styles.active]: active == true })}>
        <img src={user.pic} alt={user.name} />
      </span>
    )
  }
}