import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='text-3xl text-green-600 p-2'>
      <Head>
        <title>Haider's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        
      </Head>

      <main>
        <h1 className="title">
          Welcome to Haider's Website!
        </h1>


        <div className="grid" style={{justifyContent: "space-around"}}>

          <div className="card">
          <Link href="/about">
            <h3>About &rarr;</h3>
            <p>Learn more about Haider Ali</p>
          </Link>
          </div>

          <div className="card">
          <Link href="/blog">
            <h3>Blog &rarr;</h3>
            <p>Read about what Haider is upto!</p>
          </Link>
          </div>

          <div className="card">
          <Link href="/portfolio">
            <h3>Portfolio &rarr;</h3>
            <p>Discover the magic of his words and code.</p>
          </Link>
          </div>

          <div className="card">
          <Link href="/contact">
            <h3>Contact &rarr;</h3>
            <p>Let's make it official</p>
          </Link>
          </div>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Haider's Own Charisma
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
        }

        Link {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: white;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          color: white;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: left;
          justify-content: left;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          background-color: #7CA1FF;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
          color: white;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
          color: white;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          background-color: #aaaaaa;
          font-family: 'Poor Story', cursive;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
