import React from 'react';
import ProjectSection from '../components/ProjectSection';

const Projects = () => {
    return (
        <div>
            <ProjectSection
                title="CFWS (Content Filtering Web Security)"
                subtitle="An advanced solution for network traffic filtering and policy enforcement"
                description="This project is designed to filter network traffic for devices or groups of devices under each client, using policies and rules defined specifically for that client. The core of the system includes an Agent module that handles traffic filtering according to these client-specific policies. The Agent is synchronized with a cloud system, which also functions as an agent for Windows devices, ensuring consistent policy enforcement across different platforms. For internal messaging, the project utilizes RabbitMQ to facilitate efficient and reliable communication. The system is built using Spring Boot for the application framework, and it employs Azure Sharded PostgreSQL as the database solution to handle data storage and scalability."
                linkText="@Staunchsys"
                linkUrl="https://www.staunchsys.com/"
            />

            <ProjectSection
                title="PIQNIC"
                subtitle="Document Management System (Microservices-based)"
                description="Developed a Document Management System with a microservices architecture to handle document ingestion, processing, and notification workflows. Designed and implemented multiple services, including Ingestion Service, Job Service, Email Service, Batch Service, Backup Service. Enabled inter-service communication using Apache Kafka, ensuring seamless data flow between the microservices. Integrated Flowable for workflow automation, making real-time decisions on document processing based on defined business rules. Developed a task assignment system similar to Jira, allowing clients to create tasks, assign them to different users, and track progress. Enabled the grouping of users, where tasks could be assigned to specific groups or individuals. Implemented email notifications to inform users of any actions taken on the tasks, such as updates, assignments, and completions, ensuring all stakeholders are kept informed at each step."
                linkText="@Staunchsys"
                linkUrl="https://www.staunchsys.com/"
            />

        </div>
    );
};

export default Projects;
