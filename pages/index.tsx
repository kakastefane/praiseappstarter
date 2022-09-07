import EventCard from '../components/EventCard';
import styles from '../styles/pages/home.module.css';

export default function Home() {
  const events = [
    {
      "next": true,
      "members": [
        {},{},{}
      ]
    },
    {
      "members": [
        {},{},{}
      ]
    },
    {
      "members": [
        {},{},{}
      ]
    },
    {
      "members": [
        {},{},{}
      ]
    }
  ];

  return (
    <main className={styles.container}>
      <h2 className={styles.pageTitle}>Escalas</h2>
      <section className={styles.eventsList}>
        {events.map( event => (
          <EventCard event={event} />
        ))}
      </section>
    </main>
  );
}
