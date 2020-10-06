import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Simple & Powerful',
    imageUrl: 'img/icon-devices.png',
    description: (
      <>
        Single cross-platform APIs for iOS and Android make integration and development fast and painless for developers.
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
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <img src="img/ane-icon-white.png" />
          <h1 className="hero__title">Native Extensions</h1>
          <p className="hero__subtitle">Create world class applications quickly and confidently with Native Extensions for Adobe AIR, Unity and Haxe.</p>
          <p>by </p>
          <img src="img/logo.png" />
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
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
