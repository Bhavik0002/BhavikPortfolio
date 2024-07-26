import React from 'react';
import TimeLine from '../components/TimeLine';

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
      description: '',
    },
    {
      time: 'July 2023 - present',
      title: 'Jr Consultant',
      link: { url: 'https://www.staunchsys.com/', text: '@Staunchsys' },
      description: '',
    }
  ];

  return (
    <>
      <TimeLine items={backgroundItems} heading='Background' />
      <TimeLine items={experienceItems} heading='Experience' />
      <div className="font-semibold text-5xl mt-14 w-full text-center md:text-3xl lg:text-3xl sm:text-2xl">
        <h1>Technical Skills</h1>
      </div>
      <section className="my-20 w-full">
        <div className="w-[100%] h-32 flex justify-around flex-wrap items-center">
          <div className="w-20 h-20 mx-3 my-2 sm:w-8 sm:h-8 bg-red-400">1</div>
          <div className="w-20 h-20 mx-3 my-2 sm:w-8 sm:h-8 bg-red-200">2</div>
          <div className="w-20 h-20 mx-3 my-2 sm:w-8 sm:h-8 bg-red-100">3</div>
          <div className="w-20 h-20 mx-3 my-2 sm:w-8 sm:h-8 bg-blue-400">4</div>
          <div className="w-20 h-20 mx-3 my-2 sm:w-8 sm:h-8 bg-blue-200">5</div>
          <div className="w-20 h-20 mx-3 my-2 sm:w-8 sm:h-8 bg-blue-100">6</div>
          <div className="w-20 h-20 mx-3 my-2 sm:w-8 sm:h-8 bg-blue-100">6</div>
          <div className="w-20 h-20 mx-3 my-2 sm:w-8 sm:h-8 bg-blue-100">6</div>
          <div className="w-20 h-20 mx-3 my-2 sm:w-8 sm:h-8 bg-blue-100">6</div>
        </div>
      </section>

    </>
  );
};

export default About;