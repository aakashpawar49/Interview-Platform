import React from 'react'

const SummaryCard = ({
    colors,
    role,
    topicsToFocus,
    experience,
    question,
    description,
    lastUpdated,
    onSelect,
    onDelete
}) => {
  return <div
    className=''
    onClick={onSelect}
    >
    <div
      className=''
      style={{
        background: colors.bgcolor,
      }}
    >
        <div className=''>
            <div className=''>
                <span className=''>
                    GU
                </span>
            </div>

            {/* Content  Container */}
            <div className=''>
                <div className=''>
                    {/* Title and Skills */}
                </div>
                <h2 className=''>{role}</h2>
                <p className=''>
                    {topicsToFocus}
                </p>
            </div>
        </div>
    </div>

    <button
        className=''
        onClick={(e) => {
            e.stopPropagation();
            onDelete();
        }}
    >
        delete
    </button>

    <div className=''>
        <div className=''>
            <div className=''>
                Experience: {experience} {experience == 1 ? "Year" : "Years"}
            </div>

            <div className=''>
                {question} Q&A 
            </div>

            <div className=''>
                Last Updated: {lastUpdated}
            </div>
        </div>

        {/* Description */}
        <p className=''>
            {description}
        </p>
    </div>
    </div>
}

export default SummaryCard