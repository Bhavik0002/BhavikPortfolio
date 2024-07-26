import React from 'react';
import TimeLineItem from './TimeLineItem';

const TimeLine = ({ items, heading }) => {
    return (
        <>
            <div className="font-semibold text-5xl mt-14 w-full text-center md:text-3xl lg:text-3xl sm:text-2xl">
                <h1>{heading}</h1>
            </div>
            <section className="my-20 max-w-2xl md:max-w-md sm:max-w-60 sm:ml-4 mx-auto">
                <ol className="relative border-s border-blue-900">
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