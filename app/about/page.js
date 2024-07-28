import React from 'react';
import TimeLine from '../components/TimeLine';
import Skills from '../components/Skills';

const About = () => {
  const backgroundItems = [
    {
      time: 'March 2017',
      title: 'Secondary',
      description: 'Dharti Vidhyalaya, Ahmedabad',
    },
    {
      time: 'March 2019',
      title: 'Higher Secondary',
      description: 'Sarthak Higher Secondary School, Ahmedabad',
    },
    {
      time: 'July 2019 - July 2023',
      title: 'Bachelor Of Engineering In Computer Science',
      description: 'Gandhinagar University, Gandhinagar',
    }
  ];

  const experienceItems = [
    {
      time: 'Feb 2023 - June 2023',
      title: 'Trainee',
      link: { url: 'https://www.staunchsys.com/', text: '@Staunchsys' },
      description: 'As a trainee at StaunchSys, I have learned Spring Boot and worked on implementing CRUD operations. I have also gained experience with various front-end technologies and contributed to testing projects.',
    },
    {
      time: 'July 2023 - present',
      title: 'Jr Consultant',
      link: { url: 'https://www.staunchsys.com/', text: '@Staunchsys' },
      description: 'I am working as a backend developer, focusing on the backend side using the Spring Boot framework. In my role, I implement tasks as assigned.',
    }
  ];

  return (
    <>
      <TimeLine items={backgroundItems} heading='Background' />
      <TimeLine items={experienceItems} heading='Experience' />
      <Skills />
    </>
  );
};

export default About;