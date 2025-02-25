import Head from 'next/head';
import '../styles/globals.css'; // Import global styles

export default function ComingSoon() {
  return (
    <div className="container">
      <Head>
        <title>MUACLOUD - Coming Soon</title>
        <meta name="description" content="MUACLOUD is launching soon. Stay tuned!" />
      </Head>
      <h1>MUACLOUD</h1>
      <p>Its Coming Soon</p>
      <a href="https://muacloud.in" className="button">Stay Updated</a>
      <div className="rocket">🚀</div>
    </div>
  );
}
