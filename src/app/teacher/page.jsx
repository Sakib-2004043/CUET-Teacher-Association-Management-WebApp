<<<<<<< HEAD
import React from 'react';
import Link from 'next/link';
import './teacher.css';

export default function Home() {
  const archives = [
    {
      title: "3rd General Meeting of CUET Teachers Association",
      date: "September 17, 2024",
      description: "The 3rd general meeting of CUET Teachers Association was successfully held, discussing upcoming events and strategies.",
    },
    {
      title: "57th Syndicate Meeting",
      date: "August 27, 2024",
      description: "The 57th syndicate meeting was hosted by CUET to address institutional growth and faculty collaboration.",
    },
    {
      title: "CUET Annual Conference",
      date: "July 10, 2024",
      description: "The annual conference highlighted key achievements and future plans of CUET.",
    },
  ];

  return (
    <div className="container">
      <header className="header">
        <h1>CUET Teacher's Association</h1>
        <nav>
          <Link href="/login" className='login-link'>Log Out</Link>
        </nav>
      </header>

      <main className="main-content">
        <div className="card-container">
          <div className="card">
            <h3>Meeting Schedule</h3>
            <p>View upcoming meetings and events.</p>
          </div>
          <br />
          <div className="card">
            <h3>Cast Your Vote</h3>
            <p>Participate in ongoing polls.</p>
          </div>
          <br />
          <div className="card">
            <h3>Poll Results</h3>
            <p>View results of previous votes.</p>
          </div>
        </div>

        <section className="archives">
          <h2>Recent Archives</h2>
          {archives.map((archive, index) => (
            <div className="archive-item" key={index}>
              <h4>{archive.title}</h4>
              <p>{archive.description}</p>
              <p>{archive.date}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
=======
import React from 'react';
import Link from 'next/link';
import './teacher.css';

export default function Home() {
  const archives = [
    {
      title: "3rd General Meeting of CUET Teachers Association",
      date: "September 17, 2024",
      description: "The 3rd general meeting of CUET Teachers Association was successfully held, discussing upcoming events and strategies.",
    },
    {
      title: "57th Syndicate Meeting",
      date: "August 27, 2024",
      description: "The 57th syndicate meeting was hosted by CUET to address institutional growth and faculty collaboration.",
    },
    {
      title: "CUET Annual Conference",
      date: "July 10, 2024",
      description: "The annual conference highlighted key achievements and future plans of CUET.",
    },
  ];

  return (
    <div className="container">
      <header className="header">
        <h1>CUET Teacher's Association</h1>
        <nav>
          <Link href="/login" className='login-link'>Log Out</Link>
        </nav>
      </header>

      <main className="main-content">
        <div className="card-container">
          <div className="card">
            <h3>Meeting Schedule</h3>
            <p>View upcoming meetings and events.</p>
          </div>
          <br />
          <div className="card">
            <h3>Cast Your Vote</h3>
            <p>Participate in ongoing polls.</p>
          </div>
          <br />
          <div className="card">
            <h3>Poll Results</h3>
            <p>View results of previous votes.</p>
          </div>
        </div>

        <section className="archives">
          <h2>Recent Archives</h2>
          {archives.map((archive, index) => (
            <div className="archive-item" key={index}>
              <h4>{archive.title}</h4>
              <p>{archive.description}</p>
              <p>{archive.date}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
>>>>>>> df74fd4d1c57a495a9008abda6f08dd1b30a0847
