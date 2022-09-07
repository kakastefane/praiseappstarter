import Avatar from '../Avatar';
import styles from './styles.module.css';

export default function AvatarGroup({ members, active }: any) {
  return (
    <div className={styles.avatarGroup}>
      {members.map( (member?: any) => (
        <Avatar key={member} user={member} active={active} />
      ))}
    </div>
  )
}