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
    {
      text: 'Have you conducted impact assessments to evaluate the potential risks and benefits of your AI system?',
      advice: 'Article 9 of the EU AI Act encourages providers to conduct impact assessments to identify and mitigate risks associated with their AI systems.',
      category: 'Impact Assessments'
    },
    {
      text: 'Is your AI system designed to ensure the accuracy and reliability of its outputs, particularly in safety-critical applications?',
      advice: 'Article 12 of the EU AI Act emphasizes the importance of accuracy and reliability in high-risk AI systems.',
      category: 'Accuracy and Reliability'
    },
    {
      text: 'Does your AI system adhere to principles of non-discrimination and inclusiveness, particularly in sensitive areas like recruitment or law enforcement?',
      advice: 'Articles 7 and 8 of the EU AI Act address non-discrimination and inclusiveness in AI applications.',
      category: 'Non-discrimination'
    },
    {
      text: 'Have you implemented measures to ensure that your AI system does not undermine the autonomy and decision-making abilities of individuals?',
      advice: 'Article 16 of the EU AI Act protects against AI systems that unduly interfere with human autonomy.',
      category: 'Autonomy Protection'
    },
    {
      text: 'Does your AI system provide mechanisms for redress and complaint handling for individuals affected by its decisions?',
      advice: 'Article 18 of the EU AI Act requires AI systems to include mechanisms for addressing complaints and providing redress.',
      category: 'Redress Mechanisms'
    },
    {
      text: 'Is your AI system interoperable with other systems and capable of sharing data securely when necessary?',
      advice: 'Article 19 of the EU AI Act encourages interoperability and secure data sharing among AI systems.',
      category: 'Interoperability'
    },
    {
      text: 'Does your AI system undergo continuous testing and validation to ensure its ongoing compliance and performance?',
      advice: 'Continuous testing and validation are essential under Article 20 of the EU AI Act for maintaining compliance and performance.',
      category: 'Testing and Validation'
    },
    {
      text: 'Have you implemented measures to prevent bias and ensure fairness in the datasets used by your AI system?',
      advice: 'Addressing bias and ensuring fairness in datasets is crucial under Article 21 of the EU AI Act.',
      category: 'Bias Prevention'
    },
    {
      text: 'Does your AI system include mechanisms for explaining its decisions and actions to affected individuals?',
      advice: 'Article 22 of the EU AI Act mandates explainability in AI systems, particularly for high-risk applications.',
      category: 'Explainability'
    },
    {
      text: 'Have you conducted regular reviews and audits of your AI system\'s operations and outcomes?',
      advice: 'Article 23 of the EU AI Act requires providers to conduct regular reviews and audits to assess compliance and performance.',
      category: 'Reviews and Audits'
    },
    {
      text: 'Does your AI system adhere to specific ethical guidelines or codes of conduct relevant to its application domain?',
      advice: 'Ethical guidelines and codes of conduct are referenced in Article 24 of the EU AI Act for guiding AI system development and deployment.',
      category: 'Ethical Guidelines'
    },
    {
      text: 'Have you implemented measures to ensure the security and integrity of AI training data to prevent tampering or unauthorized access?',
      advice: 'Article 25 of the EU AI Act focuses on securing AI training data to maintain integrity and prevent unauthorized access.',
      category: 'Training Data Security'
    },
    {
      text: 'Is your AI system designed to prioritize data minimization and avoid unnecessary collection or processing of personal data?',
      advice: 'Article 26 of the EU AI Act promotes data minimization and privacy protection in AI systems handling personal data.',
      category: 'Data Minimization'
    },
    {
      text: 'Does your AI system comply with any additional sector-specific regulations or guidelines relevant to its application domain?',
      advice: 'Sector-specific regulations and guidelines should be considered alongside the EU AI Act requirements.',
      category: 'Sector-specific Compliance'
    },
    {
      text: 'Have you implemented measures to ensure the resilience and robustness of your AI system against adversarial attacks or malicious manipulation?',
      advice: 'Article 27 of the EU AI Act emphasizes resilience and robustness in AI systems to mitigate risks from adversarial attacks.',
      category: 'Resilience and Robustness'
    },
    {
      text: 'Does your AI system have mechanisms to ensure transparency and accountability in its decision-making processes?',
      advice: 'Transparency and accountability mechanisms are essential under the EU AI Act to build trust and comply with regulatory requirements.',
      category: 'Transparency and Accountability'
    },
    {
      text: 'Have you established measures to address the potential social and environmental impacts of your AI system?',
      advice: 'Considering social and environmental impacts is crucial under Article 8 of the EU AI Act to ensure responsible deployment of AI technologies.',
      category: 'Social and Environmental Impacts'
    },
    {
      text: 'Is your AI system designed with mechanisms to handle unexpected situations and ensure safe operation?',
      advice: 'Article 28 of the EU AI Act requires AI systems to have mechanisms for handling unexpected situations to ensure safe operation.',
      category: 'Safety Mechanisms'
    },
    {
      text: 'Have you implemented mechanisms to monitor and mitigate the risks associated with bias in AI decision-making?',
      advice: 'Addressing bias is critical under Article 29 of the EU AI Act to ensure fair and unbiased AI systems.',
      category: 'Bias Monitoring and Mitigation'
    },
  ];
  
  export default questions;
  