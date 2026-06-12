/*
HTML Content Extractor

Given a string of HTML, return the plain text content with all tags removed.
*/

function extractContent(html) {
  const REGEX = /<[^>]+>/g;
  return html.replace(REGEX, "");
}

extractContent('<p>hello world</p>')
// 'hello world'

extractContent('<p><button onClick="learnToCode()">Learn</button> to <code>code<code> <br/>for <strong>free</strong> <br/>on <a href="https://freecodecamp.org/" target="_blank"><span class="highlight">freecodecamp</span>.org</a>');
// 'Learn to code for free on freecodecamp.org'
