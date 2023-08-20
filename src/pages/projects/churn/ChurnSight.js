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

import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Meta } from 'components/Meta';
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
} from 'layouts/Project';
import { Fragment } from 'react';
import { media } from 'utils/style';
import styles from './ChurnSight.module.css';

const title = 'ChurnSight: Empowering Telecoms with AI to Predict Customer Loyalty';
const description =
  'Used Machine Learning to anticipate Telecom Churn and Secure Customer Loyalty.';
const roles = ['Machine Learning', 'Data Analysis', 'Customer Insights'];

export const ChurnSight = () => {
  return (
    <Fragment>
      <Meta title={title} prefix="Projects" description={description} />
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={dashboardBackground}
          srcSet={`${dashboardBackground.src} 1280w, ${dashboardBackground.src} 2560w`}
          placeholder={sliceBackgroundPlaceholder}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://github.com/Dantusaikamal/Telecom-users-churn-analysis/"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={[dashboardTexture2, dashboardTexture]}
              placeholder={sliceAppPlaceholder}
              alt="Telecom Churn Analysis by Sai Kamal."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>
                Unveiling Insights, Preventing Farewells
              </ProjectSectionHeading>
              <ProjectSectionText>
                In the highly competitive telecom sector, understanding and minimizing
                customer churn is paramount. Our project addresses this challenge by
                leveraging data analytics to identify customers at risk of churning and
                uncovering the factors influencing their decisions.{' '}
              </ProjectSectionText>
              <ProjectSectionText>
                The Telecom Churn project spans these key steps:
              </ProjectSectionText>
              <ProjectSectionText>
                Creating a Data-Driven Solution: Understand and predict customer churn by
                analyzing historical data.
              </ProjectSectionText>
              <ProjectSectionText>
                AutoAI Magic: Utilize AutoAI to automate the machine learning pipeline,
                from data preparation to model deployment.
              </ProjectSectionText>
              <ProjectSectionText>
                Strategic Deployments: Deploy the churn prediction model to offer
                real-time insights to telecom providers.
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={[holdoutAccuracyTexture, holdoutAccuracyTexture]}
                placeholder={sliceSidebarAnnotationsPlaceholder}
                alt="Multiple user annotations on a shared layer."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={[metricsTexture, metricsTexture]}
                placeholder={sliceSidebarLayersPlaceholder}
                alt="The layers sidebar design."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Project Impact</ProjectSectionHeading>
              <ProjectSectionText>
                The Telecom Users Churn Analysis project has the potential to
                revolutionize how telecom companies retain customers and make informed
                business decisions. By harnessing the power of data analytics, we aim to
                drive a positive impact on customer satisfaction, revenue, and the overall
                telecom industry landscape.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={[dashboardTexture, dashboardTexture]}
              placeholder={sliceSlidesPlaceholder}
              alt="Churn Analysis"
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Join the journey</ProjectSectionHeading>
              <ProjectSectionText>
                We invite you to be a part of our endeavor to transform customer retention
                strategies in the telecom industry. Explore the depths of data analysis,
                machine learning, and business insights through our project, and join us
                in making a meaningful difference.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              src={sliceIrl}
              placeholder={sliceIrlPlaceholder}
              alt="Students at the University of New South Wales using the new collaborative annotation features"
            />
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
