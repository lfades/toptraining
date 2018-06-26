import SideNav from '../components/SideNav';
import Head from 'next/head';
import Timeline from '../components/Timeline';
import Page from '../components/Page';

export default () => (
  <div className="content">
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:200,400,600"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="/static/fontello.css" />
    </Head>

    <SideNav />

    <div className="wrapper" style={{ background: '#ddd' }}>
      <Timeline />
      <Page />
    </div>

    <style jsx global>{`
      body {
        margin: 0;
        font-family: 'Montserrat';
      }
      h1,
      h2,
      h3,
      h4,
      h5 {
        padding: 0;
        margin: 0;
      }
    `}</style>

    <style jsx>{`
      .content {
        display: grid;
        grid-template-columns: 80px 1fr;
        grid-template-rows: 1fr;
        height: 130vh;
      }
      .wrapper {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 300px 1fr;
      }
    `}</style>
  </div>
);
