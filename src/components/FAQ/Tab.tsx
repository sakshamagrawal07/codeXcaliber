import React from "react";

interface TabProps {
    name: string;
    isActive: boolean;
    onClick: () => void;
}

export function Tab({ name, isActive, onClick }: TabProps) {
    return (
        <button className={`tab-btn ${isActive ? "active" : ""}`} onClick={onClick}>
            {name.charAt(0).toUpperCase() + name.slice(1)}
        </button>
    );
}

interface Question {
    text: string;
    isNew: boolean;
}

interface TabContentProps {
    isActive: boolean;
    content: {
        questions: Question[];
        answers: string[];
    };
    activePreview: string | null;
    onQuestionHover: (index: string) => void;
    isMobileView?: boolean; // New prop for mobile view
}

export function TabContent({
    isActive,
    content,
    activePreview,
    onQuestionHover,
    isMobileView = false, // Default to false
}: TabContentProps) {
    if (!isActive) return null;

    return (
        <section className="faq-content active">
            <div className="faq-list">
                <ul>
                    {content.questions.map((question, index) => (
                        <li
                            key={index}
                            data-index={index}
                            onMouseEnter={() => !isMobileView && onQuestionHover(index.toString())}
                            onClick={() => isMobileView && onQuestionHover(index.toString())}
                            className="faq-question"
                        >
                            <div className="flex-col gap-2 md:p-0 p-2">
                                <div className=" font-bold">
                                    {question.text}
                                    {question.isNew && <span className="new">NEW</span>}
                                </div>
                                {/* Mobile preview directly below the question */}
                                {isMobileView && activePreview === index.toString() && (
                                    <div className="mobile-preview">
                                        <p>{content.answers[index]}</p>
                                    </div>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            {/* Desktop preview on the side */}
            {!isMobileView && (
                <div className="faq-preview">
                    {content.answers.map((answer, index) => (
                        <div
                            key={index}
                            className={`preview-box ${activePreview === index.toString() ? "active" : ""}`}
                            style={{
                                display: activePreview === index.toString() ? "flex" : "none",
                            }}
                        >
                            <p>{answer}</p>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}
