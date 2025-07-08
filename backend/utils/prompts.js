const questionAnswerPrompt = (role, experience, topicsToFocus, numberOfQuestions) => {
  return [
    {
      role: "user",
      parts: [
        {
          text: `
You are an AI trained to generate technical interview questions and answers.

Task:
- Role: ${role}
- Candidate Experience: ${experience} years
- Focus Topics: ${topicsToFocus}
- Number of Questions: ${numberOfQuestions}
- For each question, generate a beginner-friendly answer.
- Include short code snippets if relevant.
- Return a JSON array like:
[
  {
    "question": "What is X?",
    "answer": "Explanation here."
  }
]

Important: Only return clean, valid JSON. No extra text.
          `.trim()
        }
      ]
    }
  ];
};

const conceptExplainPrompt = (question) => {
  return [
    {
      role: "user",
      parts: [
        {
          text: `
You are an AI trained to generate clear explanations for technical interview questions.

Task:
- Explain this question for a beginner: "${question}"
- Include analogies or examples where helpful.
- Add a short title that summarizes the topic.
- Format the result as valid JSON:

{
  "title": "Short title",
  "explanation": "Full explanation here"
}

Important: Return only the JSON. No extra text.
        `.trim()
        }
      ]
    }
  ];
};

module.exports = { questionAnswerPrompt, conceptExplainPrompt };
