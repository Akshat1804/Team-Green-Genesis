import React, { useState } from "react";
import { Button } from "../Ui/Button";
import { Card, CardContent } from "../Ui/Card";
import questions from "../components/questions";

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizEnd, setQuizEnd] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setQuizEnd(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100 p-4">
      <Card className="max-w-md w-full text-center p-6">
        <CardContent>
          {quizEnd ? (
            <h2 className="text-xl font-bold">Your Score: {score}/{questions.length}</h2>
          ) : (
            <div>
              <h2 className="text-lg font-bold">{questions[currentQuestion].question}</h2>
              <div className="mt-4 flex flex-col gap-2">
                {questions[currentQuestion].options.map((option, index) => (
                  <Button key={index} onClick={() => handleAnswer(option)}>
                    {option}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}