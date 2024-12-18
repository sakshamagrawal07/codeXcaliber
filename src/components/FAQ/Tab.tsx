import React from 'react'

interface TabProps {
  name: string
  isActive: boolean
  onClick: () => void
}

export function Tab({ name, isActive, onClick }: TabProps) {
  return (
    <button
      className={`tab-btn ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      {name.charAt(0).toUpperCase() + name.slice(1)}
    </button>
  )
}

interface TabContentProps {
  isActive: boolean
  content: {
    questions: { text: string; isNew: boolean }[]
    answers: string[]
  }
  activePreview: string | null
  onQuestionHover: (index: string) => void
}

export function TabContent({
  isActive,
  content,
  activePreview,
  onQuestionHover,
}: TabContentProps) {
  if (!isActive) return null

  return (
    <section className={`faq-content active`}>
      <div className="faq-list">
        <ul>
          {content.questions.map((question, index) => (
            <li
              key={index}
              data-index={index}
              onMouseEnter={() => onQuestionHover(index.toString())}
            >
              {question.text}
              {question.isNew && <span className="new">NEW</span>}
            </li>
          ))}
        </ul>
      </div>
      <div className="faq-preview">
        {content.answers.map((answer, index) => (
          <div
            key={index}
            className={`preview-box ${
              activePreview === index.toString() ? 'active' : ''
            }`}
            style={{
              display: activePreview === index.toString() ? 'flex' : 'none',
            }}
          >
            <p>{answer}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

