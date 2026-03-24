/*
Passing Exam Count

Given an array of student exam scores and the score needed to pass it, return the number of students that passed the exam.
*/

function passingCount(scores, passingScore) {
  return scores.filter(score => score >= passingScore).length;
}

passingCount([90, 85, 75, 60, 50], 70);
// return: 3

passingCount([76, 79, 80, 70, 71, 65, 79, 78, 59, 72], 85);
// return: 0
