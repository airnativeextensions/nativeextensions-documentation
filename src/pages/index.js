import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Head from '@docusaurus/Head';

const features = [
  {
    title: 'Simple & Powerful',
    imageUrl: 'img/icon-devices.png',
    description: (
      <>
        Single cross-platform APIs for iOS, tvOS, Android, Windows and macOS make integration and development fast and painless for developers.
      </>
    ),
  },
  {
    title: 'Support & Updates',
    imageUrl: 'img/icon-support.png',
    description: (
      <>
        We continually update our extensions to stay up to date with platform and SDK updates so you can focus on building apps and games without worrying about compatibilty.
      </>
    ),
  },
  {
    title: 'Cost Effective',
    imageUrl: 'img/icon-heart.png',
    description: (
      <>
        Our extensions are the most cost effective on the market. We don't limit developers with restrictive licenses - no profit shares, no limitations on your apps.
      </>
    ),
  }
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
        <Head>
          <script src="https://kit.fontawesome.com/61428cba37.js" crossorigin="anonymous"></script>
        </Head>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <img className='ane__logo' src="img/ane-icon-white.png"  />
          <h1 className="hero__title">Native Extensions</h1>
          <p className="hero__subtitle">Create world class applications quickly and confidently with Native Extensions for Adobe AIR, Unity and Haxe.</p>
          
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--secondary button--lg',
                styles.getStarted,
                )}
              to={useBaseUrl('docs/')}>
              <i class="fa fa-file-alt"></i>&nbsp;&nbsp; Documentation
            </Link>
          </div>

          <br/>
          <p>This site contains the best source of documentation for the extensions, including detailed guides on adding the extensions, 
            tutorials on getting started, and API documentation on the usage of the extensions in your applications.</p>

        </div>
      </header>
      <div className={clsx('hero ', styles.heroBanner)}>
        <div className="container">
          <h2>Looking for our extensions?</h2>
          <p>Our extensions are provided through a variety of sources all of which are linked through our main site. With over 60 extensions available, we are the largest provider of native extensions for AIR developers and one of the only providers of Universal Extensions.</p>
          <p>Our mobile solutions allow developers to fast-forward development and focus on building great games and apps.</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--primary button--outline',
                styles.getStarted,
                )}
              to="https://airnativeextensions.com">
              <img className="ane__logo" src="img/ane-icon-black.png" /> Get the extensions
            </Link>
          </div>
          {/* <div className={styles.company}>
            <a href="https://distriqt.com"><img src="img/logo.png"/></a>
          </div> */}
        </div>
      </div>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
