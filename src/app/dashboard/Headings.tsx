import React from 'react'

type HaedingsProps = {
    headingText: string, 
    headingTextPosition: string, 
    headingTextSize :string
}
const Headings = ({headingText, headingTextPosition, headingTextSize}: HaedingsProps) => {
  return (
    <h1 className={`${headingTextPosition} ${headingTextSize} font-semibold mb-5`}>{headingText}</h1>
  )
}

export default Headings