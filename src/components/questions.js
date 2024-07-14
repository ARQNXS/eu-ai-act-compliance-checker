const questions = [
  {
    text: 'Does your AI system use techniques that could exploit human vulnerabilities, manipulate behavior, or cause physical or psychological harm, such as an AI-powered social media platform that encourages addictive behaviors or an AI system that influences voting decisions?',
    advice: 'If your AI system uses techniques that exploit vulnerabilities, manipulate behavior, or cause harm, it may be prohibited under Article 5 (Prohibited artificial intelligence practices) of the EU AI Act. This article prohibits AI systems that pose unacceptable risks, such as those that manipulate human behavior to circumvent users\' free will (5(1)(a)), exploit vulnerabilities of specific groups (5(1)(b)), or cause physical or psychological harm (5(1)(c)). Ensure your AI system does not engage in these prohibited practices.',
    category: 'Prohibited Practices',
  },
  {
    text: 'Does your AI system perform remote biometric identification of individuals in real-time and in publicly accessible spaces, such as live facial recognition systems in public transport or shopping malls?',
    advice: 'If your AI system performs real-time remote biometric identification in publicly accessible spaces, it may be prohibited or restricted under the EU AI Act. Article 5(1)(d) (Prohibited artificial intelligence practices) prohibits the use of such systems for law enforcement, with some exceptions outlined in Article 5(2). Additionally, Annex III classifies biometric identification and categorization of natural persons as high-risk, which means these systems are subject to additional requirements under the act.',
    category: 'Biometric Identification',
  },
  {
    text: 'Is your AI system used in any of the following areas: infrastructure management (e.g., transport, water, gas, or electricity), education (e.g., scoring exams or assessing students), employment (e.g., CV-sorting for recruitment), essential services (e.g., credit scoring), law enforcement, migration and border control, or administration of justice and democratic processes?',
    advice: 'If your AI system is used in any of these areas, it may be classified as a high-risk AI system under Article 6 (Classification rules for high-risk AI systems) and Annex III of the EU AI Act. High-risk AI systems are subject to additional requirements, such as strict data governance (Article 10), detailed technical documentation (Article 11), transparency and information to users (Article 13), and human oversight (Article 14). You\'ll need to ensure your AI system complies with these requirements if it falls under the high-risk category.',
    category: 'High-Risk AI Systems',
  },
  {
    text: 'Does your AI system clearly inform users that they are interacting with an AI, and provide information about its intended purpose, key characteristics, and the persons or organizations responsible for its development and deployment?',
    advice: 'Under Article 13 (Transparency and provision of information to users) of the EU AI Act, AI systems must be transparent and inform users that they are interacting with an AI (13(1)). The system\'s intended purpose, main characteristics, and responsible parties must also be clearly communicated to users (13(2)). This information should be provided in a concise, easily accessible, and timely manner. Make sure your AI system meets these transparency requirements.',
    category: 'Transparency and Information to Users',
  },
  {
    text: 'Do you have data governance practices in place to ensure the data used for training, validating, and testing your AI system is relevant, representative, free of errors, and complete, considering the system\'s intended purpose and the context in which it will be used?',
    advice: 'Robust data governance is crucial for AI systems, especially those classified as high-risk under the EU AI Act. Article 10 (Data and data governance) sets out strict requirements for high-risk AI systems, mandating that training, validation, and testing data be subject to appropriate data management and protection practices (10(2)). The data must also be relevant, representative, free of errors, and complete in view of the system\'s intended purpose (10(3)). Ensure your AI system adheres to these data governance requirements, even if not classified as high-risk.',
    category: 'Data Governance',
  },
  {
    text: 'Does your technical documentation for your AI system include a detailed description of its intended purpose, development process, performance metrics, testing methods, and any known limitations or risks associated with its use?',
    advice: 'Detailed technical documentation is essential for AI systems, particularly those classified as high-risk under the EU AI Act. Article 11 (Technical documentation) specifies the requirements for high-risk AI systems, which include describing the system and its intended purpose (11(1)(a)), the design specifications and development process (11(1)(b)), performance metrics and testing methods (11(1)(c)), and known limitations and risks (11(1)(d)). Even if your AI system is not high-risk, maintaining comprehensive technical documentation is a good practice.',
    category: 'Technical Documentation',
  },
  {
    text: 'Do you maintain accurate records of your AI system\'s operation, including logs of events, decisions made by the system, and any incidents or malfunctions that occur during its use?',
    advice: 'Maintaining accurate records of your AI system\'s operation is important for transparency, accountability, and compliance with the EU AI Act. Article 12 (Record-keeping) requires providers of high-risk AI systems to keep detailed records of their systems\' operation, including logging capabilities to capture events and decisions made by the system (12(1)). These records must be kept for a period appropriate to the system\'s intended purpose and applicable legal obligations (12(2)). Even if your AI system is not high-risk, maintaining operational records is a good practice.',
    category: 'Record-keeping',
  },
  {
    text: 'Does your AI system have human oversight measures in place that allow human operators to fully understand its capabilities and limitations, monitor its operation, and intervene or interrupt the system when necessary?',
    advice: 'Human oversight is a key requirement for high-risk AI systems under the EU AI Act. Article 14 (Human oversight) mandates that high-risk AI systems have oversight measures that enable human operators to fully understand the system\'s capabilities and limitations (14(1)), effectively oversee its operation and decide when and how to use it (14(2)), and intervene or interrupt the system through a "stop" button or similar procedure (14(3)). Even if your AI system is not high-risk, implementing appropriate human oversight measures is a good practice.',
    category: 'Human Oversight',
  },
  {
    text: 'Have you established a quality management system to ensure your AI system\'s compliance with the EU AI Act and to manage risks associated with its use?',
    advice: 'Under Article 17 (Quality management system) of the EU AI Act, providers of high-risk AI systems must establish a quality management system to ensure compliance with the act and manage risks associated with their systems. The quality management system should include strategies and procedures for ensuring regulatory compliance (17(1)(a)), data management (17(1)(b)), technical documentation (17(1)(c)), record-keeping (17(1)(d)), and more. Even if your AI system is not high-risk, implementing a quality management system can help ensure compliance and manage risks.',
    category: 'Quality Management System',
  },
  {
    text: 'Have you implemented a post-market monitoring system to actively collect and review data on your AI system\'s performance and compliance after it has been placed on the market or put into service?',
    advice: 'Post-market monitoring is mandatory for high-risk AI systems under Article 61 (Post-market monitoring system) of the EU AI Act. Providers must establish a system to actively collect and review data on their AI system\'s performance and compliance after it has been placed on the market or put into service (61(1)). The collected data should be analyzed to identify any necessary corrective actions (61(2)), and serious incidents or malfunctioning must be reported to the relevant authorities (61(3)). Even if your AI system is not high-risk, post-market monitoring can help ensure ongoing compliance and performance.',
    category: 'Post-market Monitoring',
  },
  {
    text: 'Is your AI system designed to interact with or make decisions that significantly affect individuals, such as profiling, facial recognition, or determining access to essential services like healthcare, education, or employment?',
    advice: 'AI systems that interact with or make decisions that significantly affect individuals may be subject to additional requirements under the EU AI Act. For example, AI systems used for biometric identification (Article 5(1)(d)), profiling (Annex III), or determining access to essential services (Annex III) are considered high-risk and must comply with the requirements in Title III, Chapter 2 (Articles 8-15). If your AI system falls into any of these categories, ensure it adheres to the relevant provisions of the act.',
    category: 'Interaction with Individuals',
  },  
  {
    text: 'Is your AI system designed to be used by law enforcement, immigration authorities, or the judiciary for tasks such as predicting the occurrence or reoccurrence of crimes, profiling individuals, or assessing the risk posed by individuals or groups?',
    advice: 'AI systems used by law enforcement, immigration authorities, or the judiciary for predicting crimes, profiling individuals, or assessing risks are classified as high-risk under Annex III of the EU AI Act. These systems must comply with the requirements for high-risk AI systems set out in Title III, Chapter 2 (Articles 8-15), which include strict data governance (Article 10), detailed technical documentation (Article 11), transparency and information to users (Article 13), and human oversight (Article 14). If your AI system is used for these purposes, ensure it meets these requirements.',
    category: 'Law Enforcement and Judiciary',
  },
  {
    text: 'Does your AI system use biometric data, such as fingerprints, facial images, or voice recordings, to identify or categorize individuals?',
    advice: 'AI systems that use biometric data for identification or categorization of individuals are considered high-risk under Annex III of the EU AI Act. These systems must comply with the requirements for high-risk AI systems set out in Title III, Chapter 2 (Articles 8-15), including data governance (Article 10), technical documentation (Article 11), transparency and information to users (Article 13), and human oversight (Article 14). If your AI system uses biometric data, ensure it adheres to these requirements and any additional provisions related to biometric data processing.',
    category: 'Biometric Data',
  },
  {
    text: 'Is your AI system designed to interact with children or make decisions that may affect their rights, such as in the context of education, childcare, or online services specifically targeted at children?',
    advice: 'AI systems that interact with children or make decisions that may affect their rights are subject to specific considerations under the EU AI Act. For example, AI systems used in education or vocational training are classified as high-risk under Annex III and must comply with the requirements in Title III, Chapter 2 (Articles 8-15). Additionally, the act emphasizes the importance of protecting children\'s rights and ensuring their safety when interacting with AI systems. If your AI system is designed for children, ensure it complies with the relevant provisions and prioritizes the protection of children\'s rights.',
    category: 'Interaction with Children',
  },
  {
    text: 'Does your AI system use techniques that could lead to discrimination against individuals or groups based on protected characteristics, such as race, gender, age, or disability?',
    advice: 'The EU AI Act seeks to prevent discrimination and ensure AI systems are fair and inclusive. Article 7 (Amendments to Annex III) allows the Commission to update the list of high-risk AI systems to address emerging risks, including those related to discrimination. Article 10 (Data and data governance) requires that training, validation, and testing data for high-risk AI systems be relevant, representative, free of errors, and complete (10(3)), which can help minimize the risk of discrimination. Ensure your AI system does not use techniques that could lead to discrimination and adheres to the principles of fairness and non-discrimination.',
    category: 'Non-discrimination',
  },
  {
    text: 'Does your AI system use techniques that could infringe on individuals\' privacy rights, such as processing personal data without appropriate legal basis or safeguards?',
    advice: 'The EU AI Act works in conjunction with the General Data Protection Regulation (GDPR) to protect individuals\' privacy rights in the context of AI systems. Article 10 (Data and data governance) requires that high-risk AI systems comply with relevant Union and national data protection laws (10(1)). Providers of high-risk AI systems must also implement appropriate data governance and management practices (10(2)). Ensure your AI system respects individuals\' privacy rights, complies with applicable data protection laws, and implements appropriate safeguards when processing personal data.',
    category: 'Privacy and Data Protection',
  },
  {
    text: 'Is your AI system designed to be used in the context of employment, such as for hiring, performance evaluation, promotion, or termination decisions?',
    advice: 'AI systems used in the context of employment, such as for hiring, performance evaluation, promotion, or termination decisions, are classified as high-risk under Annex III of the EU AI Act. These systems must comply with the requirements for high-risk AI systems set out in Title III, Chapter 2 (Articles 8-15), including data governance (Article 10), technical documentation (Article 11), transparency and information to users (Article 13), and human oversight (Article 14). If your AI system is used in employment-related decisions, ensure it adheres to these requirements and principles of fairness and non-discrimination.',
    category: 'Employment',
  },
  {
    text: 'Does your AI system use techniques that could influence individuals\' behavior or choices in a way that may be detrimental to their well-being or autonomy, such as through personalized advertising or content recommendations?',
    advice: 'AI systems that influence individuals\' behavior or choices in a way that may be detrimental to their well-being or autonomy may be subject to specific considerations under the EU AI Act. Article 5 (Prohibited artificial intelligence practices) prohibits AI systems that manipulate human behavior to circumvent users\' free will (5(1)(a)) or exploit vulnerabilities of specific groups (5(1)(b)). Article 7 (Amendments to Annex III) allows the Commission to update the list of high-risk AI systems to address emerging risks, including those related to personal autonomy. Ensure your AI system does not use techniques that unduly influence or exploit individuals and respects their autonomy and well-being.',
    category: 'Behavior Manipulation',
  },
  {
    text: 'Is your AI system designed to generate or manipulate audio, video, or images that could be used to deceive individuals or spread disinformation, such as deepfakes or synthetic media?',
    advice: 'AI systems that generate or manipulate audio, video, or images in a way that could deceive individuals or spread disinformation may be subject to specific considerations under the EU AI Act. Article 52 (Transparency obligations for certain AI systems) requires that providers of AI systems designed to interact with natural persons disclose that the content is generated or manipulated by an AI system (52(1)). This obligation also applies to AI systems used to generate or manipulate image, audio, or video content (52(3)). Ensure your AI system complies with these transparency obligations and does not contribute to the spread of deception or disinformation.',
    category: 'Synthetic Media and Deception',
  },
  {
    text: 'Does your AI system use techniques that could have a significant environmental impact, such as through high energy consumption or the use of rare or hazardous materials?',
    advice: 'The EU AI Act recognizes the potential environmental impact of AI systems and encourages the development of sustainable and environmentally friendly AI. Article 69 (Codes of conduct) encourages the development of codes of conduct to foster the voluntary application of sustainability requirements for AI systems, including regarding resource efficiency and environmental impact (69(2)(d)). While not mandatory, considering the environmental impact of your AI system and implementing measures to minimize negative effects can contribute to the development of more sustainable AI technologies.',
    category: 'Environmental Impact',
  },
  {
    text: 'Is your AI system intended to be used in a sector or domain where the EU has established specific regulations or standards, such as healthcare, finance, or transportation?',
    advice: 'If your AI system is intended to be used in a sector or domain where the EU has established specific regulations or standards, it may be subject to additional requirements beyond those outlined in the EU AI Act. Article 2 (Scope) clarifies that the act applies without prejudice to other Union legislation on sectorial safety or requirements for products or services (2(3)). Ensure your AI system complies with any relevant sector-specific regulations or standards in addition to the requirements of the EU AI Act.',
    category: 'Sector-specific Requirements',
  },
  {
    text: 'Does your AI system use techniques that could perpetuate or amplify existing societal biases or stereotypes, such as in the context of content moderation, targeted advertising, or search results ranking?',
advice: 'AI systems that perpetuate or amplify societal biases or stereotypes can have harmful effects on individuals and society. While not explicitly mentioned in the EU AI Act, addressing bias and ensuring fairness is a recurring theme throughout the act. Article 10 (Data and data governance) requires that training, validation, and testing data for high-risk AI systems be relevant, representative, free of errors, and complete (10(3)), which can help minimize bias. Article 7 (Amendments to Annex III) allows the Commission to update the list of high-risk AI systems to address emerging risks, which could include bias-related risks. Ensure your AI system is designed to minimize bias and promote fairness and inclusivity.',
category: 'Bias and Stereotypes',
},
{
text: 'Is your AI system designed to interact with or assist individuals with disabilities or other vulnerable groups, such as the elderly or those with limited digital literacy?',
advice: 'AI systems that interact with or assist individuals with disabilities or other vulnerable groups should be designed with accessibility, inclusivity, and user safety in mind. While not specifically addressed in the EU AI Act, the act emphasizes the importance of protecting the rights and ensuring the safety of vulnerable groups. Article 5 (Prohibited artificial intelligence practices) prohibits AI systems that exploit the vulnerabilities of specific groups (5(1)(b)). Article 7 (Amendments to Annex III) allows the Commission to update the list of high-risk AI systems to address emerging risks, which could include risks related to vulnerable groups. Ensure your AI system is designed to be accessible, inclusive, and safe for all users, especially those from vulnerable groups.',
category: 'Accessibility and Vulnerable Groups',
},
{
text: 'Does your AI system use techniques that could have a significant impact on cultural diversity or the preservation of cultural heritage, such as in the context of language translation, content recommendation, or cultural analytics?',
advice: 'AI systems that impact cultural diversity or the preservation of cultural heritage should be designed with sensitivity to cultural context and aim to promote cultural understanding and preservation. While not directly addressed in the EU AI Act, the act emphasizes the importance of developing trustworthy and socially responsible AI. Article 69 (Codes of conduct) encourages the development of codes of conduct to foster the voluntary application of requirements for ethical, transparent, and socially responsible AI (69(2)(c)). Consider the potential cultural impact of your AI system and strive to develop culturally sensitive and responsible AI technologies.',
category: 'Cultural Impact',
},
{
text: 'Is your AI system designed to be used in the context of scientific research or innovation, such as for data analysis, hypothesis generation, or experimental design?',
advice: 'AI systems used in scientific research or innovation should adhere to principles of research integrity, reproducibility, and responsible innovation. While not specifically addressed in the EU AI Act, the act encourages the development of innovative and trustworthy AI technologies. Article 55 (AI regulatory sandboxes) allows for the establishment of AI regulatory sandboxes to facilitate the development and testing of innovative AI systems under regulatory oversight (55(1)). If your AI system is used in research or innovation, ensure it complies with relevant research ethics guidelines and the requirements of the EU AI Act, particularly if it falls under a high-risk category.',
category: 'Research and Innovation',
},
{
text: 'Does your AI system use techniques that could have a significant impact on the environment or wildlife, such as in the context of environmental monitoring, wildlife conservation, or natural resource management?',
advice: 'AI systems used in environmental or wildlife-related applications should be designed to minimize negative ecological impacts and promote sustainability and conservation. While not directly addressed in the EU AI Act, the act recognizes the potential environmental impact of AI systems. Article 69 (Codes of conduct) encourages the development of codes of conduct to foster the voluntary application of sustainability requirements for AI systems, including regarding resource efficiency and environmental impact (69(2)(d)). Consider the potential ecological impact of your AI system and strive to develop environmentally responsible AI technologies that support sustainability and conservation efforts.',
category: 'Ecological Impact',
},
{
text: 'Is your AI system designed to be used in the context of national security, defense, or intelligence, such as for surveillance, threat detection, or predictive analysis?',
advice: 'AI systems used in national security, defense, or intelligence applications are subject to specific considerations and may be exempt from certain requirements of the EU AI Act. Article 2 (Scope) states that the act does not apply to AI systems developed or used exclusively for military purposes (2(3)). However, the act does apply to AI systems used for national security or law enforcement purposes, which are classified as high-risk under Annex III. If your AI system falls under this category, ensure it complies with the relevant requirements for high-risk AI systems set out in Title III, Chapter 2 (Articles 8-15), as well as any additional sector-specific regulations or guidelines.',
category: 'National Security and Defense',
},
{
text: 'Does your AI system use techniques that could have a significant impact on freedom of expression or access to information, such as in the context of content moderation, news aggregation, or information filtering?',
advice: 'AI systems that impact freedom of expression or access to information should be designed to uphold these fundamental rights and promote a diverse and pluralistic information ecosystem. While not directly addressed in the EU AI Act, the act emphasizes the importance of developing trustworthy and socially responsible AI that respects fundamental rights. Article 69 (Codes of conduct) encourages the development of codes of conduct to foster the voluntary application of requirements for ethical, transparent, and socially responsible AI (69(2)(c)). Consider the potential impact of your AI system on freedom of expression and access to information, and strive to develop AI technologies that support these fundamental rights.',
category: 'Freedom of Expression and Information',
},
{
text: 'Is your AI system designed to be used in the context of public administration or e-government services, such as for automated decision-making, resource allocation, or citizen engagement?',
advice: 'AI systems used in public administration or e-government services should be designed to ensure transparency, accountability, and fairness in their decision-making processes. Article 6 (Classification rules for high-risk AI systems) and Annex III classify AI systems used in the administration of justice and democratic processes as high-risk. These systems must comply with the requirements for high-risk AI systems set out in Title III, Chapter 2 (Articles 8-15), including transparency and information to users (Article 13), human oversight (Article 14), and record-keeping (Article 12). If your AI system is used in public administration or e-government, ensure it adheres to these requirements and promotes transparent, accountable, and fair decision-making.',
category: 'Public Administration and E-government',
},
{
text: 'Does your AI system use techniques that could have a significant impact on consumer rights or protection, such as in the context of personalized pricing, automated customer service, or product recommendations?',
advice: 'AI systems that impact consumer rights or protection should be designed to ensure fairness, transparency, and accountability in their interactions with consumers. While not directly addressed in the EU AI Act, the act emphasizes the importance of developing trustworthy and socially responsible AI that respects fundamental rights. Article 52 (Transparency obligations for certain AI systems) requires that providers of AI systems designed to interact with natural persons disclose that the content is generated or manipulated by an AI system (52(1)). Consider the potential impact of your AI system on consumer rights and protection, and strive to develop AI technologies that promote fair, transparent, and accountable consumer interactions.',
category: 'Consumer Rights and Protection',
},
{
text: 'Is your AI system designed to be used in the context of urban planning, smart cities, or transportation management, such as for traffic optimization, resource allocation, or infrastructure monitoring?',
advice: 'AI systems used in urban planning, smart cities, or transportation management should be designed to ensure safety, efficiency, and fairness in their decision-making processes. Article 6 (Classification rules for high-risk AI systems) and Annex III classify AI systems used in the management and operation of critical infrastructure, such as traffic and transport services, as high-risk. These systems must comply with the requirements for high-risk AI systems set out in Title III, Chapter 2 (Articles 8-15), including data governance (Article 10), technical documentation (Article 11), and human oversight (Article 14). If your AI system is used in these contexts, ensure it adheres to these requirements and promotes safe, efficient, and fair urban planning and transportation management.',
category: 'Urban Planning and Transportation',
},
{
text: 'Does your AI system use techniques that could have a significant impact on democratic processes or institutions, such as in the context of voter profiling, political advertising, or opinion polling?',
advice: 'AI systems that impact democratic processes or institutions should be designed to uphold the integrity of democratic systems and prevent undue influence or manipulation. Article 6 (Classification rules for high-risk AI systems) and Annex III classify AI systems used in the administration of democratic processes as high-risk. These systems must comply with the requirements for high-risk AI systems set out in Title III, Chapter 2 (Articles 8-15), including transparency and information to users (Article 13), human oversight (Article 14), and record-keeping (Article 12). If your AI system is used in the context of democratic processes, ensure it adheres to these requirements and promotes the integrity and fairness of democratic systems.',
category: 'Democratic Processes and Institutions',
},
{
text: 'Is your AI system designed to be used in the context of energy management or sustainability, such as for smart grid optimization, renewable energy forecasting, or energy efficiency monitoring?',
advice: 'AI systems used in energy management or sustainability should be designed to promote energy efficiency, reduce environmental impact, and support the transition to clean energy. While not directly addressed in the EU AI Act, the act recognizes the potential environmental impact of AI systems. Article 69 (Codes of conduct) encourages the development of codes of conduct to foster the voluntary application of sustainability requirements for AI systems, including regarding resource efficiency and environmental impact (69(2)(d)). If your AI system is used in energy management or sustainability, consider its potential environmental impact and strive to develop AI technologies that support clean energy and sustainable practices.',
category: 'Energy and Sustainability',
},
{
text: 'Does your AI system use techniques that could have a significant impact on public health or safety, such as in the context of disease surveillance, drug development, or food safety monitoring?',
advice: 'AI systems that impact public health or safety should be designed to ensure the highest standards of safety, efficacy, and reliability. Article 6 (Classification rules for high-risk AI systems) and Annex III classify certain AI systems used in the healthcare domain as high-risk, such as those used for medical diagnosis, treatment, or patient management. These systems must comply with the requirements for high-risk AI systems set out in Title III, Chapter 2 (Articles 8-15), including data governance (Article 10), risk management (Article 9), and post-market monitoring (Article 61). If your AI system is used in public health or safety-related contexts, ensure it adheres to these requirements and promotes the protection of public health and safety.',
category: 'Public Health and Safety',
},
{
text: 'Is your AI system designed to be used in the context of creative industries, such as for content creation, style transfer, or personalized recommendations in areas like music, art, or fashion?',
advice: 'AI systems used in creative industries should be designed to foster creativity, innovation, and cultural diversity while respecting intellectual property rights. While not directly addressed in the EU AI Act, the act encourages the development of innovative and trustworthy AI technologies. Article 55 (AI regulatory sandboxes) allows for the establishment of AI regulatory sandboxes to facilitate the development and testing of innovative AI systems under regulatory oversight (55(1)). If your AI system is used in creative industries, consider its potential impact on creativity, innovation, and intellectual property, and strive to develop AI technologies that support and enhance human creativity.',
category: 'Creative Industries',
},
{
text: 'Does your AI system use techniques that could have a significant impact on media pluralism or the diversity of news and information sources, such as in the context of content curation, news aggregation, or media monitoring?',
advice: 'AI systems that impact media pluralism or the diversity of news and information sources should be designed to promote a diverse and inclusive media landscape and prevent the concentration of information control. While not directly addressed in the EU AI Act, the act emphasizes the importance of developing trustworthy and socially responsible AI that respects fundamental rights. Article 69 (Codes of conduct) encourages the development of codes of conduct to foster the voluntary application of requirements for ethical, transparent, and socially responsible AI (69(2)(c)). If your AI system is used in the context of media or information diversity, consider its potential impact on media pluralism and strive to develop AI technologies that support a diverse and inclusive media ecosystem.',
category: 'Media Pluralism and Diversity',
},
{
text: 'Is your AI system designed to be used in the context of international development or humanitarian aid, such as for poverty alleviation, disaster response, or refugee assistance?',
advice: 'AI systems used in international development or humanitarian aid should be designed to prioritize the needs and rights of vulnerable populations, ensure fairness and non-discrimination, and align with international humanitarian principles. While not directly addressed in the EU AI Act, the act emphasizes the importance of developing trustworthy and socially responsible AI that respects fundamental rights and promotes social and environmental well-being. If your AI system is used in the context of international development or humanitarian aid, consider its potential impact on vulnerable populations and strive to develop AI technologies that support the goals of sustainable development and humanitarian assistance while adhering to ethical principles and international standards.',
category: 'International Development and Humanitarian Aid',
},

];
  
export default questions;