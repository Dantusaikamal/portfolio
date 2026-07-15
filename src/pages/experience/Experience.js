import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Fragment } from 'react';
import milkyway from 'assets/milkyway.jpg';
import styles from './Experience.module.css';

import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
} from '../../layouts/Project';

const title = 'My Technical Journey';
const description =
  'Full stack engineer building AI, IoT, marketplace, airline, mobile, and cloud systems across production teams and founder-led products.';
const roles = ['Full Stack Development', 'AI + IoT Platforms', 'Cloud & DevOps'];

const workExperience = [
  {
    title: 'Full Stack Developer',
    company: 'Replicant Systems',
    date: 'April 2025 - Present',
    note: 'Promoted to Senior Software Engineer in Apr 2026',
    points: [
      'Designed and owned core components of a distributed AI + IoT platform used across dozens of enterprise deployments, spanning edge inference, cloud services, and data pipelines.',
      'Defined service boundaries and APIs for LLM-driven workflows, computer vision pipelines, and device control services, enabling independent scaling and fault isolation.',
      'Built backend services using Node.js, Python, and MongoDB, following stateless patterns for horizontal scaling and reliability.',
      'Integrated Jetson edge devices with AWS IoT Core over MQTT for real-time telemetry, inference results, OTA updates, and remote command execution.',
      'Implemented ingestion and storage pipelines using AWS S3 and CloudFront, handling large volumes of image and metadata assets.',
      'Added observability with Prometheus and Grafana, enabling latency tracking and faster production issue diagnosis.',
    ],
  },
  {
    title: 'Founding Engineer - Software',
    company: 'Ready Labs',
    date: 'April 2024 - April 2025',
    points: [
      'Built an on-demand services marketplace for the US market as the sole engineer, owning backend, frontend, mobile, and infrastructure end-to-end.',
      'Designed a high-availability backend on AWS using EC2, ALB, and Auto Scaling with Node.js and Python, supporting steady growth and variable traffic.',
      'Handled core data systems using MongoDB and PostgreSQL.',
      'Introduced Redis caching and asynchronous background processing, improving latency and reducing database load under peak usage.',
      'Implemented JWT-based authentication and RBAC across customer, provider, and admin roles.',
      'Set up Dockerized deployments, CI/CD, and monitoring, enabling regular production releases during early traction and funding.',
    ],
  },
  {
    title: 'Full Stack Developer',
    company: 'ELP Aviation',
    date: 'August 2023 - April 2024',
    points: [
      'Worked on airline crew and payroll systems used by multiple U.S. carriers under strict correctness requirements.',
      'Designed Node.js backend services, improving performance through query optimization and async handling.',
      'Automated payroll workflows, reducing manual reconciliation by about 60%.',
      'Built and maintained Flutter mobile and Angular web clients.',
    ],
  },
];

const technologies = [
  ['Programming Languages', 'JavaScript, Python, Java, Dart, C++'],
  ['Databases', 'MongoDB, PostgreSQL, Redis, Cassandra, MySQL'],
  ['Frameworks and Libraries', 'Flutter, ReactJS, NodeJS, NestJS, ExpressJS, NextJS, Tailwind'],
  ['Cloud & DevOps', 'Amazon Web Services, Azure, Docker, Terraform, Kubernetes'],
  ['Observability', 'Prometheus, Grafana'],
];

const education = [
  [
    'Master of Science in Data Science',
    'IIIT Hyderabad - April 2025 to Present',
  ],
  [
    'B.Tech. in Computer Science Engineering',
    'Bharat Institute of Engineering and Technology - 8.0/10, July 2019 to July 2023',
  ],
];

const projects = [
  [
    'ZapMyJob',
    'Developed and launched an AI-driven SaaS platform that makes finding jobs easier and faster, scaling to 10k users in less than 2 months.',
  ],
  [
    'Healthify',
    'Built a heart-stroke prediction mobile app with smartwatch integration and real-time SOS alerts, reaching the Top 50 submissions in Google Solution Challenge.',
  ],
];

export const Experience = () => {
  return (
    <Fragment>
      <Meta title={title} prefix="Experience" description={description} />
      <ProjectContainer className={styles.experience}>
        <ProjectBackground
          src={milkyway}
          srcSet={`${milkyway.src} 1280w, ${milkyway.src} 2560w`}
          placeholder={milkyway}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://drive.google.com/file/d/1oqRTt6mjDLz45FoF62bHaqblIicW4Oga/view?usp=sharing"
          roles={roles}
          linkLabel="Resume"
        />

        <ProjectSection padding="top">
          <ProjectSectionContent className={styles.resumeContent}>
            <section className={styles.sectionBlock}>
              <ProjectSectionHeading>Work Experience</ProjectSectionHeading>
              <div className={styles.experienceList}>
                {workExperience.map(({ title, company, date, note, points }) => (
                  <article className={styles.role} key={`${company}-${date}`}>
                    <div className={styles.roleMeta}>
                      <ProjectSectionText>
                        <span className={styles.roleTitle}>{title}</span>
                        <br />
                        <span className={styles.company}>{company}</span>
                        <br />
                        <span className={styles.date}>{date}</span>
                        {note && (
                          <>
                            <br />
                            <span className={styles.note}>{note}</span>
                          </>
                        )}
                      </ProjectSectionText>
                    </div>
                    <ProjectSectionText as="div">
                      <ul className={styles.bulletList}>
                        {points.map(point => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </ProjectSectionText>
                  </article>
                ))}
              </div>
            </section>

            <section className={styles.sectionBlock}>
              <ProjectSectionHeading>Languages and Technologies</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <ul className={styles.compactList}>
                  {technologies.map(([label, value]) => (
                    <li key={label}>
                      <span className={styles.itemLabel}>{label}:</span> {value}
                    </li>
                  ))}
                </ul>
              </ProjectSectionText>
            </section>

            <section className={styles.sectionBlock}>
              <ProjectSectionHeading>Education</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <ul className={styles.compactList}>
                  {education.map(([label, value]) => (
                    <li key={label}>
                      <span className={styles.itemLabel}>{label}</span>, {value}
                    </li>
                  ))}
                </ul>
              </ProjectSectionText>
            </section>

            <section className={styles.sectionBlock}>
              <ProjectSectionHeading>Technical Experience</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <ul className={styles.compactList}>
                  {projects.map(([label, value]) => (
                    <li key={label}>
                      <span className={styles.itemLabel}>{label}:</span> {value}
                    </li>
                  ))}
                </ul>
              </ProjectSectionText>
            </section>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
