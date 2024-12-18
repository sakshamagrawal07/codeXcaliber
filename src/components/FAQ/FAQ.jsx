import React, { useState } from 'react';
import './styles.css'; // Add your CSS styles here

const FAQSection = () => {
  const [activeTab, setActiveTab] = useState('organisation');
  const [activeIndex, setActiveIndex] = useState(0);

  const faqData = {
    organisation: [
      "Winter of Code (WoC) is an exciting month-long open-source program. It’s similar to Google Summer of Code (GSoC), but with a few fun twists of our own!",
      "Mentors guide participants, review code, provide feedback, and help troubleshoot any issues during the event.",
      "No, you cannot participate as both a mentor and a contributor in WOC. Mentors are experienced members of open-source organizations who guide new contributors by reviewing code and providing support.",
      "Yes, follow our GDG team on LinkedIn, and Instagram for the latest announcements and updates.",
      "WOC lasts for almost 2 months, allowing participants enough time to contribute meaningfully to their chosen projects.",
      "If you have more questions, you can raise a ticket on our Discord server. Our support team and mentors will assist you."
    ],
    participant: [
      "Absolutely anyone! Whether you're a student (grad, undergrad, or even in high school), a professional, or anyone else we might've missed, WoC is open to all.",
      "Yes, WoC is for EVERYONE - beginners, pros, and everyone in between!",
      "Submit a stellar application! 😊 After an initial screening, shortlisted participants submit proposals via Devfolio. Mentors review the top submissions, and if you pass, awesome swag is yours!",
      "A proposal is where you outline your WoC project plan. Some organizations even allow you to propose your own ideas! Once selected, we’ll guide you through submission and host a session on writing a great proposal.",
      "WOC lasts for almost 2 months, allowing participants enough time to contribute meaningfully to their chosen projects.",
      "If you have more questions, you can raise a ticket on our Discord server. Our support team and mentors will assist you."
    ],
    registration: [
      "Registration details and deadlines are announced on our official channels as well as on our website. Follow our GDG social media handles and website for updates.",
      "Basic coding skills and familiarity with Git and GitHub are recommended. Domain-specific knowledge will help, but it’s also a great opportunity to learn as you go.",
      "No prior experience is required, but having a basic understanding of open-source contributions and version control (Git) is helpful.",
      "No, participation in WOC is completely free of charge.",
      "Yes, you can participate in WOC alongside other open-source programs, as long as you manage your time effectively.",
      "Accepted participants will receive an email confirmation. Keep an eye on your inbox and check for updates on our official channels and website."
    ],
    rewards: [
      "Winners receive swags, T-shirts, and certificates to acknowledge their outstanding contributions.",
      "Yes, all participants receive a certificate of participation, and winners receive special certificates acknowledging their outstanding contributions.",
      "Definitely! Participating in WOC demonstrates your coding skills, commitment to open-source, and ability to work independently on real-world projects.",
      "Winners are selected based on the quality of their contributions, the impact of their work, and their adherence to the project guidelines.",
      "Yes, there are milestones and deadlines. Details will be provided in the project guidelines once you’re accepted.",
      "While contributions are individual, you can network and discuss ideas with other participants on official communication platforms."
    ]
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setActiveIndex(0);
  };

  const handlePreviewChange = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="faq-container">
      {/* Header */}
      <header className="faq-header">
        <h1>All that... and more.</h1>
        <p>Here's the answer to every question you have in mind!</p>
        <div className="faq-buttons">
          {Object.keys(faqData).map((tab) => (
            <button
              key={tab}
              className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => handleTabChange(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </header>

      {/* Content Section */}
      <section className="faq-content">
        <div className="faq-list">
          <ul>
            {faqData[activeTab].map((item, index) => (
              <li
                key={index}
                className={activeIndex === index ? 'active' : ''}
                onClick={() => handlePreviewChange(index)}
              >
              
                {item}
                
              </li>
            ))}
          </ul>
        </div>

        <div className="faq-preview">
          <div className="preview-box">
            <p>{faqData[activeTab][activeIndex]}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQSection;
