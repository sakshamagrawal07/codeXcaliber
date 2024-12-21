import React, { useState, useEffect } from 'react';
import { Tab, TabContent } from './Tab';
import { faqData } from './faqData';
import "./styles.css";

export default function FAQSection() {
  const [activeTab, setActiveTab] = useState('organisation');
  const [activePreview, setActivePreview] = useState<string | null>(null);
  const [isMobileView, setIsMobileView] = useState(false);

  // Update mobile view state based on window width
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    // Initialize state and add resize listener
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setActivePreview('0');
  }, [activeTab]);

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  const handleQuestionHover = (index: string) => {
    setActivePreview(index);
  };

  return (
    <div className="faq-container">
      <header className="faq-header">
        <h1>All that... and more.</h1>
        <p>Here's the answer to every question you have in mind!</p>
        <div className="faq-buttons">
          {Object.keys(faqData).map((tabName) => (
            <Tab
              key={tabName}
              name={tabName}
              isActive={activeTab === tabName}
              onClick={() => handleTabClick(tabName)}
            />
          ))}
        </div>
      </header>

      {Object.entries(faqData).map(([tabName, content]) => (
        <TabContent
          key={tabName}
          isActive={activeTab === tabName}
          content={content}
          activePreview={activePreview}
          onQuestionHover={handleQuestionHover}
          isMobileView={isMobileView} // Pass the mobile view state
        />
      ))}
    </div>
  );
}
