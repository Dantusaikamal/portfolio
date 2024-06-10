import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Footer } from 'components/Footer';
import { Heading } from 'components/Heading';
import { Icon } from 'components/Icon';
import { Input } from 'components/Input';
import { Meta } from 'components/Meta';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { tokens } from 'components/ThemeProvider/theme';
import { Transition } from 'components/Transition';
import { useFormInput } from 'hooks';
import { useRef, useState } from 'react';
import { cssProps, msToNum, numToMs } from 'utils/style';
import styles from '../projects/churn/ChurnSight.module.css';
import { Fragment } from 'react';
import { Image } from 'components/Image';
import { FaCircle } from 'react-icons/fa'; // Import the icon component

import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '../../layouts/Project';

const title = 'My Technical Journey';
const description =
  'I interned at multiple organisations and built robust applications. Also published multiple research papers while participating in national level hackathons.';
const roles = ['Full Stack Development', 'Mobile App Development', 'Machine Learning'];

import sliceAppPlaceholder from 'assets/slice-app-placeholder.jpg';
import sliceBackgroundPlaceholder from 'assets/slice-background-placeholder.jpg';
import dashboardBackground from 'assets/relationship-map.PNG';
import sliceIrlPlaceholder from 'assets/slice-irl-placeholder.jpg';
import sliceIrl from 'assets/slice-irl.jpg';
import sliceSidebarAnnotationsPlaceholder from 'assets/slice-sidebar-annotations-placeholder.png';
import sliceSidebarLayersPlaceholder from 'assets/slice-sidebar-layers-placeholder.png';
import sliceSlidesPlaceholder from 'assets/slice-slides-placeholder.jpg';
import dashboardTexture from 'assets/Dashboard-light.png';
import dashboardTexture2 from 'assets/Dashboard-dark.png';
import metricsTexture from 'assets/metrics.png';
import holdoutAccuracyTexture from 'assets/holdoutAccuracy.png';

import milkyway from 'assets/milkyway.jpg';

import { media } from '../../utils/style';
import { Color } from 'three';
import { fontStyles } from 'components/ThemeProvider';
import { Font } from 'three-stdlib';

export const Experience = () => {
  return (
    <Fragment>
      <Meta title={title} prefix="Projects" description={description} />
      <ProjectContainer className={styles.slice}>
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

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectSectionHeading>Work Experience</ProjectSectionHeading>
            <ProjectSectionText>
              <span style={{ fontWeight: 'bold', color: '#00E5FF' }}>
                Full Stack Developer | ELP Aviation (Hyderabad) | Aug’2023 – Present
              </span>
              <br />
              • Developed and maintained the Crew Portal for leading airlines including
              Kalitta, Frontier, Piedmont, and Hawaiian, enhancing crew member access to
              key functionalities and improving operational efficiency. Utilized Flutter
              for mobile and Angular for web applications and Node.js for backend.
              <br />
              • Contributed to the Crew Pay application, automating payroll processes and
              reducing discrepancies by 60%.
              <br />
              • Designed scalable microservices with Node.js and Docker, reducing response
              times by 40% and ensuring high availability. Managed RESTful API services
              and database interactions for robust backend functionality.
              <br />• Implemented CI/CD pipelines in Bitbucket, streamlining development
              workflows and ensuring reliable software releases.
            </ProjectSectionText>
            <ProjectSectionText>
              <span style={{ fontWeight: 'bold', color: '#00E5FF' }}>
                Software Development Engineering Intern | Quriverse (Bangalore) |
                Sept’2022 – April’23
              </span>
              <br />
              • Overhauled the UI for Quriverse React.js application, which is India's
              first interactive community platform.
              <br />
              • Integrated Live streaming platform with 100ms live and nest.js. Built REST
              APIs, Websockets for handling dynamic requests in real time.
              <br />
              • Handled queries from Django backend and hosted react.js application on AWS
              Amplify, Database in AWS RDS and Backend in AWS Beanstalk. Also used Amazon
              S3, EC2 instances, ECS and built CI/CD pipelines using GitHub Actions.
              <br />
              • Solved critical production issues and built robust microservices.
              <br />• Working on designing and development of an interactive live
              streaming application using flutter. <br></br>
              <br />
              <span style={{ fontWeight: 'bold', color: '#00E5FF' }}>
                Google DSC Lead ‘21, Intern Google Developer Students Club | Aug’2021 -
                Aug’2022
              </span>
              <br />
              • Conducted hands-on workshops and sessions on Web Development, Docker,
              Kotlin, Kubernetes, Cloud, Git.
              <br />
              • Part of 250 students from India that were selected as Google Developer
              Students Clubs lead in 2021.
              <br />
              • Established a technical community in the college and built various
              open-source projects.
              <br />
              <br />
              <span style={{ fontWeight: 'bold', color: '#00E5FF' }}>
                Full Stack Developer, Intern HFIL Technologies Pvt. Ltd. | Nov’2020 –
                July’2021
              </span>
              <br />
              • Led the Development team of a Start-up that focuses on Electric vehicle
              charging stations and smart energy meters.
              <br />
              • Built cross platform scalable mobile applications using flutter and
              deployed the data pipelines on AWS EC2, and Azure instances.
              <br />
              • Designed UI wireframes for the applications using Figma and also
              documentation for the applications.
              <br />
              • Improved the response time of applications by over 800 milliseconds, using
              advanced frameworks, data structures, caching mechanism and optimized code
              in order to reduce the number of queries to the database.
              <br />
              <br />
              <span style={{ fontWeight: 'bold', color: '#00E5FF' }}>
                Linux Developer, Intern Swecha.org | June’2020 – July’2020
              </span>
              <br />
              • Built an Operating System for Engineering colleges in the state of
              Telangana that comes pre-installed with all the software an Engineer of any
              majors would require.
              <br />• The Operating System is based on Linux kernel and is made
              open-sourced in order to encourage other students contribute to the
              Operating System and learn more about Operating Systems.
            </ProjectSectionText>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
