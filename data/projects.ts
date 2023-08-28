export const projects: Projects = {
    jqassistant: {
        title: "jQAssistant OpenApi Plugin",
        link: "https://github.com/jqassistant-plugin/jqassistant-openapi-plugin",
        description: "As part of the course Software Engineering at the university of Leipzig I participated in developing an open source plugin for the dev suite jQAssistant by Buschmais GbR which enables it's users to scan openAPI contracts in order to analyze software structures regarding the communication between microservices.",
        skills: ["JUnit", "Java", "Maven", "OpenAPI", "Neo4j"],
    }
}

export interface Project {
    title: string;
    link: string;
    description: string;
    skills: string[];
}

export interface Projects {
    [key: string]: Project;
}