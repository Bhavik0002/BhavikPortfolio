import React from 'react';
import TimeLineItem from './TimeLineItem';

const TimeLine = ({ items, heading }) => {
    return (
        <>
            <div className="font-semibold text-5xl py-16 w-full text-center md:text-3xl lg:text-3xl sm:text-2xl dark:text-white">
                <h1>{heading}</h1>
            </div>
            <section className="max-w-2xl md:max-w-md sm:max-w-60 sm:ml-4 mx-auto">
                <ol className="relative border-l border-blue-900 dark:border-blue-700">
                    {items.map((item, index) => (
                        <TimeLineItem
                            key={index}
                            time={item.time}
                            title={item.title}
                            link={item.link}
                            description={item.description}
                        />
                    ))}
                </ol>
            </section>
        </>
    );
};

export default TimeLine;
