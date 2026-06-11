/*
Idea Rankings

Given a 2D array where each inner array contains (in this order) an idea name, an optimistic estimate, a realistic estimate, and a pessimistic estimate (in days), return an array of the idea names sorted by expected time to completion, shortest first.
Calculate the expected time to completion for each idea using the following formula:
  expected = ((optimistic + 4 * realistic + pessimistic) / 6) * length of idea name
*/

const expectedTime = (opt, rea, pes, ideaLength) => 
  ((opt + 4 * rea + pes) / 6) * ideaLength;

function analyzeIdeas(ideas) {
  return ideas
    .map(([idea, opt, rea, pes]) => [idea, expectedTime(opt, rea, pes, idea.length)])
    .sort((a, b) => a[1] - b[1])
    .map(([idea]) => idea);
}

analyzeIdeas([
  ["Add logging", 2, 5, 15], 
  ["SEO optimization", 4, 8, 20], 
  ["Fix bug", 1, 3, 5]
]);
// [ 'Fix bug', 'Add logging', 'SEO optimization' ]
