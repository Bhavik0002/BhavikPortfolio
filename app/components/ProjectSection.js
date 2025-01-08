import React from 'react';

const ProjectSection = ({ title, subtitle, description, linkText, linkUrl }) => {
    return (
        <section className="bg-gray-100 dark:bg-gray-900 py-12 font-serif text-gray-900 dark:text-gray-200">
            <div className="max-w-3xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h1 className="text-4xl sm:text-xl font-bold text-gray-800 dark:text-gray-100">
                        {title}&nbsp;
                        <a
                            href={linkUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 dark:text-blue-400 sm:text-sm md:text-2xl">
                            {linkText}
                        </a>
                    </h1>
                    <p className="text-xl sm:text-lg text-gray-600 dark:text-gray-300 mt-2">
                        {subtitle}
                    </p>
                </div>
                <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;
