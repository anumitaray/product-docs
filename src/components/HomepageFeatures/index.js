import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '⚡ Lightning Fast & Local-First',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Zero cloud latency and 100% offline capability. Your tasks and workflow state
        live right alongside your codebase in version control.
      </>
    ),
  },
  {
    title: '🌿 Git Branch Awareness',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Seamlessly links active tasks to your current Git feature branch, automatically
        tracking commits, PR descriptions, and sprint status.
      </>
    ),
  },
  {
    title: '🤖 Workflow Automations & Hooks',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Configure deterministic pre-start and post-completion hooks. Trigger webhooks,
        run linters, or send team Slack updates automatically.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
