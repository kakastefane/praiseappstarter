import EventCard from '../components/EventCard';
import styles from '../styles/pages/home.module.css';

export default function Home() {
  const events = [
    {
      "next": true,
      "members": [
        {
          "pic": "https://via.placeholder.com/30",
          "name": "Nome da Pessoa"
        }
      ]
    },
    {
      "members": [
        {
          "pic": "https://via.placeholder.com/30",
          "name": "Nome da Pessoa"
        },
        {
          "pic": "https://via.placeholder.com/30",
          "name": "Nome da Pessoa"
        },
        {
          "pic": "https://via.placeholder.com/30",
          "name": "Nome da Pessoa"
        },
        {
          "pic": "https://via.placeholder.com/30",
          "name": "Nome da Pessoa"
        },
        {
          "pic": "https://via.placeholder.com/30",
          "name": "Nome da Pessoa"
        }
      ]
    },
    {
      "members": [
        {
          "pic": "https://via.placeholder.com/30",
          "name": "Nome da Pessoa"
        },
        {
          "pic": "https://via.placeholder.com/30",
          "name": "Nome da Pessoa"
        },
        {
          "pic": "https://via.placeholder.com/30",
          "name": "Nome da Pessoa"
        }
      ]
    },
    {
      "members": [
        {
          "pic": "https://via.placeholder.com/30",
          "name": "Nome da Pessoa"
        },
        {
          "pic": "https://via.placeholder.com/30",
          "name": "Nome da Pessoa"
        },
        {
          "pic": "https://via.placeholder.com/30",
          "name": "Nome da Pessoa"
        },
        {
          "pic": "https://via.placeholder.com/30",
          "name": "Nome da Pessoa"
        }
      ]
    }
  ];

  return (
    <main className={styles.container}>
      <h2 className={styles.pageTitle}>Escalas</h2>
      <section className={styles.eventsList}>
        {events.map( (event) => (
          <EventCard key={event} event={event} />
        ))}
      </section>
    </main>
  );
}
