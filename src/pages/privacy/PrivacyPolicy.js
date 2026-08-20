import { Heading } from 'components/Heading';
import { Meta } from 'components/Meta';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { Fragment } from 'react';
import styles from './PrivacyPolicy.module.css';

const effectiveDate = 'August 20, 2026';
const developer = 'Dantu Sai Kamal';
const privacyContact = 'dantusaikamal@gmail.com';

export const PrivacyPolicy = ({ appName, description, sections }) => (
  <Fragment>
    <Meta
      title={`${appName} Privacy Policy`}
      prefix=""
      description={`Privacy Policy for ${appName}, effective ${effectiveDate}.`}
    />
    <Section className={styles.privacy} as="article">
      <div className={styles.content}>
        <header className={styles.header}>
          <Text className={styles.eyebrow} size="s" as="p" weight="medium">
            Effective date: {effectiveDate}
          </Text>
          <Heading className={styles.title} level={2} as="h1">
            {appName} Privacy Policy
          </Heading>
          <div className={styles.meta}>
            <Text as="p" size="l">
              Developer: {developer}
            </Text>
            <Text as="p" size="l">
              Privacy contact:{' '}
              <a className={styles.link} href={`mailto:${privacyContact}`}>
                {privacyContact}
              </a>
            </Text>
          </div>
          {description.map(paragraph => (
            <Text className={styles.lede} as="p" size="l" key={paragraph}>
              {paragraph}
            </Text>
          ))}
        </header>

        <div className={styles.sections}>
          {sections.map(section => (
            <section className={styles.section} key={section.title}>
              <Heading className={styles.sectionTitle} level={4} as="h2">
                {section.title}
              </Heading>
              {section.content.map((item, index) => {
                if (Array.isArray(item)) {
                  return (
                    <ul className={styles.list} key={`${section.title}-${index}`}>
                      {item.map(listItem => (
                        <li key={listItem}>
                          <Text as="span">{listItem}</Text>
                        </li>
                      ))}
                    </ul>
                  );
                }

                return (
                  <Text className={styles.paragraph} as="p" key={item}>
                    {item}
                  </Text>
                );
              })}
            </section>
          ))}
        </div>
      </div>
    </Section>
  </Fragment>
);

