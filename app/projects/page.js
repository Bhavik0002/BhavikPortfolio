import React from 'react';

const Projects = () => {
    return (
        <section className="bg-gray-100 py-12 font-serif">
            <div className="max-w-3xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h1 className="text-4xl sm:text-xl font-bold text-gray-800">CFWS (Content Filtering Web Security)&nbsp;
                        <a href='https://www.staunchsys.com/' target="_blank" className="text-3xl text-blue-600 sm:text-sm md:text-2xl">@Staunchsys</a></h1>
                    <p className="text-xl sm:text-lg text-gray-600 mt-2">An advanced solution for network traffic filtering and policy enforcement.</p>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <p className="text-gray-700 leading-relaxed">
                        This project is designed to filter network traffic for devices or groups of devices under each client, using policies and rules defined specifically for that client. The core of the system includes an Agent module that handles traffic filtering according to these client-specific policies. The Agent is synchronized with a cloud system, which also functions as an agent for Windows devices, ensuring consistent policy enforcement across different platforms. For internal messaging, the project utilizes RabbitMQ to facilitate efficient and reliable communication. The system is built using Spring Boot for the application framework, and it employs Azure Sharded PostgreSQL as the database solution to handle data storage and scalability.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Projects;