import styles from './styles.module.css';

export default function AvatarGroup({ members }: any) {
  return (
    <div className={styles.eventGroup}>
      {members.map( (member?, index) => (
        <span key={index} className={styles.eventMember}>
          <img src="https://via.placeholder.com/30" alt="" />
        </span>
      ))}
    </div>
  )
}