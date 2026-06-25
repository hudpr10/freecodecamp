/*
Frontmatter Parser

Given a string representing a frontmatter block, parse it and return an object (JavaScript) or dictionary (Python) with the keys and values.
Frontmatter is wrapped in --- delimiters and contains key: value pairs within them, one per line.

  - Numbers, Booleans, and Strings should all be returned as their respective type.
  - The given string will have new lines separated with the newline character ("\n"). The above example would be given as: "---\ntitle: My Post\ndraft: false\nviews: 100\n---".
*/

function parseFrontmatter(str) {
  let arr = str
    .substring(4, str.length - 4)
    .split("\n")
    .map((s) => s.split(": "));

  const obj = {};

  for (const [key, val] of arr) {
    try {
      obj[key] = JSON.parse(val);
    } catch {
      obj[key] = val;
    }
  }

  return obj;
}

console.log(
  parseFrontmatter("---\ntitle: My Post\ndraft: false\nviews: 100\n---"),
);
// return: { title: 'My Post', draft: false, views: 100 }
