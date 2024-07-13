const questions = [
    {
      text: 'Does your AI system engage in any practices that exploit vulnerabilities, cause physical or psychological harm, or subliminally manipulate behavior?',
      advice: 'Such practices are prohibited under Article 5 of the EU AI Act, which outlines AI systems that pose unacceptable risks.',
      category: 'Prohibited Practices'
    },
    {
      text: 'Does your AI system operate in critical domains such as biometric identification, critical infrastructure, education, or employment?',
      advice: 'AI systems in these domains may be classified as high-risk under Article 6 and subject to additional requirements outlined in Title III, Chapter 2 of the EU AI Act.',
      category: 'Risk Assessment'
    },
    {
      text: 'Does your AI system provide clear information to users about its purpose, the responsible parties, and its key characteristics?',
      advice: 'Article 13 of the EU AI Act requires AI systems to be transparent and provide this information to users.',
      category: 'Transparency'
    },
    {
      text: 'Do you have appropriate data governance measures in place to ensure the quality, integrity, and security of the data used by your AI system?',
      advice: 'Article 10 of the EU AI Act outlines the data governance requirements for high-risk AI systems.',
      category: 'Data Governance'
    },
    {
      text: 'Does your AI system\'s technical documentation include detailed information on its development, testing, and performance?',
      advice: 'Article 11 of the EU AI Act specifies the technical documentation requirements for high-risk AI systems.',
      category: 'Technical Documentation'
    },
    {
      text: 'Does your AI system allow for human oversight, including the ability to fully understand, monitor, and override its outputs?',
      advice: 'Article 14 of the EU AI Act mandates human oversight measures for high-risk AI systems.',
      category: 'Human Oversight'
    },
    {
      text: 'Have you established a quality management system to ensure your AI system\'s compliance with the EU AI Act?',
      advice: 'Article 17 requires providers of high-risk AI systems to implement a quality management system.',
      category: 'Quality Management'
    },
    {
      text: 'Do you have a post-market monitoring system to actively collect and review data on your AI system\'s performance and compliance?',
      advice: 'Article 61 of the EU AI Act mandates post-market monitoring for high-risk AI systems.',
      category: 'Post-market Monitoring'
    },
    {
      text: 'Have you registered your high-risk AI system in the EU database before placing it on the market?',
      advice: 'Article 51 requires providers to register their high-risk AI systems in the EU database.',
      category: 'Registration'
    },
    {
      text: 'Does your AI system\'s instruction manual include information on its characteristics, capabilities, limitations, and intended use?',
      advice: 'Article 13(3) specifies the information that must be included in the instruction manual for high-risk AI systems.',
      category: 'Transparency'
    },
    {
      text: 'Have you implemented appropriate cybersecurity measures to protect your AI system against vulnerabilities and unauthorized access?',
      advice: 'Article 15 of the EU AI Act requires high-risk AI systems to have appropriate cybersecurity measures in place.',
      category: 'Cybersecurity'
    },
    {
      text: 'Does your AI system comply with the relevant harmonized standards or common specifications referred to in the EU AI Act?',
      advice: 'Articles 40 and 41 discuss the role of harmonized standards and common specifications in demonstrating compliance with the EU AI Act.',
      category: 'Standards and Specifications'
    },
    {
      text: 'Have you conducted a conformity assessment for your high-risk AI system as required by the EU AI Act?',
      advice: 'Articles 43 and 44 outline the conformity assessment procedures for high-risk AI systems.',
      category: 'Conformity Assessment'
    },
    {
      text: 'Does your AI system have a compliant CE marking, indicating its conformity with the applicable requirements of the EU AI Act?',
      advice: 'Articles 49 discusses the CE marking requirements for high-risk AI systems that comply with the EU AI Act.',
      category: 'CE Marking'
    },
    {
      text: 'Do you have mechanisms in place to report serious incidents or malfunctioning of your AI system to the relevant authorities?',
      advice: 'Article 62 requires providers to report serious incidents and malfunctioning of their AI systems to the national competent authorities.',
      category: 'Incident Reporting'
    },
  ];

  export default questions;