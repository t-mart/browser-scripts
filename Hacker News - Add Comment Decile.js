// ==UserScript==
// @name        Hacker News - Add Comment Decile
// @description Adds a percentile indicator to comments corresponding to their up-/down-vote performance
// @namespace   Violentmonkey Scripts
// @match       https://news.ycombinator.com/item
// @grant       none
// @version     1.0.0
// @author      t-mart
// @homepageURL https://github.com/t-mart/browser-scripts
// @description 8/20/2022, 9:48:43 AM
// ==/UserScript==

const COLOR_COMMENT_TEXT_PATTERN = /^c[a-fA-F0-9]{2}$/;

function chooseDecile(className) {
  switch (className) {
    case 'c00':
      return 10;
    case 'c5a':
      return 9;
    case 'c73':
      return 8;
    case 'c82':
      return 7;
    case 'c88':
      return 6;
    case 'c9c':
      return 5;
    case 'cae':
      return 4;
    case 'cbe':
      return 3;
    case 'cce':
      return 2;
    case 'cdd':
      return 1;
    default:
      throw new Error(`could not parse ${className}`)
  }
}

[...document.querySelectorAll(".athing.comtr .default")].forEach((commentElement) => {
  const commentTextElement = commentElement.querySelector(".commtext");
  const colorClassName = [...commentTextElement.classList.values()].find(className => COLOR_COMMENT_TEXT_PATTERN.test(className));
  const decile = chooseDecile(colorClassName);

  const decileElement = document.createElement("span")
  decileElement.textContent = `${decile * 10}%`
  decileElement.classList.add('decile'
                             )
  const ageElement = commentElement.querySelector(".age")
  ageElement.after(" ", decileElement); // space is intentional. its how they add margin (yuck)
})