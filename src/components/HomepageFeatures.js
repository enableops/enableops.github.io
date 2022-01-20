import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('../../static/img/easy.svg').default,
    description: (
      <>
        enableOps was designed from the ground up to be easily installed and
        used to get your infrastructure up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('../../static/img/matters.svg').default,
    description: (
      <>
        enableOps lets you focus on your development, and we&apos;ll do the chores, like infrastructure or security.
      </>
    ),
  },
  {
    title: 'Powered by Terraform',
    Svg: require('../../static/img/terraform.svg').default,
    description: (
      <>
        Extend or customize your network layout by changing variables in modules. enableOps can
        be easily extended while reusing the same configs.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
