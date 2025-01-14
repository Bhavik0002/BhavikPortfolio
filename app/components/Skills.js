import React from 'react';

const Skills = () => {
    return (
        <>
            <div className="font-semibold text-5xl mt-14 w-full text-center md:text-3xl lg:text-3xl sm:text-2xl dark:text-white">
                <h1>Technical Skills</h1>
            </div>
            <section className="mt-20 pb-14 w-full">
                <div className="w-full h-auto flex flex-wrap justify-center items-center">
                    <div className="mx-3 my-4 flex bg-gradient-to-r from-red-500 to-red-700 text-white rounded-full py-2 px-4 shadow-lg hover:shadow-xl dark:from-red-700 dark:to-red-900">
                        <p className="text-sm font-semibold sm:text-xs">Java</p>
                    </div>
                    <div className="mx-3 my-4 flex bg-gradient-to-r from-green-400 to-green-600 text-white rounded-full py-2 px-4 shadow-lg hover:shadow-xl dark:from-green-600 dark:to-green-800">
                        <p className="text-sm font-semibold sm:text-xs">Spring Boot</p>
                    </div>
                    <div className="mx-3 my-4 flex bg-gradient-to-r from-purple-400 to-purple-600 text-white rounded-full py-2 px-4 shadow-lg hover:shadow-xl dark:from-purple-600 dark:to-purple-800">
                        <p className="text-sm font-semibold sm:text-xs">Git</p>
                    </div>
                    <div className="mx-3 my-4 flex bg-gradient-to-r from-blue-700 to-blue-900 text-white rounded-full py-2 px-4 shadow-lg hover:shadow-xl dark:from-blue-900 dark:to-blue-950">
                        <p className="text-sm font-semibold sm:text-xs">PostgreSQL</p>
                    </div>
                    <div className="mx-3 my-4 flex bg-gradient-to-r from-red-400 to-red-600 text-white rounded-full py-2 px-4 shadow-lg hover:shadow-xl dark:from-red-600 dark:to-red-800">
                        <p className="text-sm font-semibold sm:text-xs">Mockito</p>
                    </div>
                    <div className="mx-3 my-4 flex bg-gradient-to-r from-gray-400 to-gray-600 text-white rounded-full py-2 px-4 shadow-lg hover:shadow-xl dark:from-gray-600 dark:to-gray-800">
                        <p className="text-sm font-semibold sm:text-xs">JUnit</p>
                    </div>
                    <div className="mx-3 my-4 flex bg-gradient-to-r from-indigo-400 to-indigo-600 text-white rounded-full py-2 px-4 shadow-lg hover:shadow-xl dark:from-indigo-600 dark:to-indigo-800">
                        <p className="text-sm font-semibold sm:text-xs">SQL</p>
                    </div>
                    <div className="mx-3 my-4 flex bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-full py-2 px-4 shadow-lg hover:shadow-xl dark:from-orange-600 dark:to-orange-800 transition-shadow duration-300 ease-in-out">
                         <p className="text-sm font-semibold sm:text-xs">RabbitMQ</p>
                    </div>
                    <div className="mx-3 my-4 flex bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full py-2 px-4 shadow-lg hover:shadow-xl dark:from-blue-700 dark:to-blue-900">
                        <p className="text-sm font-semibold sm:text-xs">Tailwind CSS</p>
                    </div>
                    <div className="mx-3 my-4 flex bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-full py-2 px-4 shadow-lg hover:shadow-xl dark:from-orange-600 dark:to-orange-800">
                        <p className="text-sm font-semibold sm:text-xs">HTML</p>
                    </div>
                    <div className="mx-3 my-4 flex bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded-full py-2 px-4 shadow-lg hover:shadow-xl dark:from-yellow-600 dark:to-yellow-800">
                        <p className="text-sm font-semibold sm:text-xs">JavaScript</p>
                    </div>
                    <div className="mx-3 my-4 flex bg-gradient-to-r from-purple-400 to-purple-600 text-white rounded-full py-2 px-4 shadow-lg hover:shadow-xl dark:from-purple-600 dark:to-purple-800 transition-shadow duration-300 ease-in-out">
                        <p className="text-sm font-semibold sm:text-xs">Kafka</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Skills;
