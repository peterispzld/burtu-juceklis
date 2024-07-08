import fs from 'fs';
import dictionary from './dictionary.json' assert { type: 'json' };
import scrabbleLetterCounts from './scrabbleLetterCounts.js';

function filterScrabbleWords() {
  const scrabbleWords = [];

  // Filter out null values, words with length 1, and words that begin with an uppercase letter
  const filteredWords = dictionary.filter(
    (word) =>
      word &&
      word.form.length > 1 &&
      word.form.length <= 15 &&
      /^[a-zāčēģīķļņšūž]+$/.test(word.form) &&
      !/[xyq]/i.test(word.form),
  );

  filteredWords.forEach((word) => {
    const wordLetterCounts = {};
    // Count the occurrences of each letter in the word
    for (let i = 0; i < word.form.length; i++) {
      const letter = word.form[i];
      wordLetterCounts[letter] = (wordLetterCounts[letter] || 0) + 1;
    }
    // Check if the word is Scrabble eligible
    let isScrabbleEligible = true;
    for (const letter in wordLetterCounts) {
      if (wordLetterCounts[letter] > scrabbleLetterCounts[letter]) {
        isScrabbleEligible = false;
        break;
      }
    }
    if (isScrabbleEligible) {
      scrabbleWords.push(word);
    }
  });
  return scrabbleWords;
}

const scrabbleWords = filterScrabbleWords();

function calculateScrabbleValue() {
  const getLetterScore = (letter) => {
    switch (letter) {
      case 'Č':
      case 'F':
      case 'Ģ':
      case 'H':
      case 'Ķ':
        return 10;
      case 'Ļ':
      case 'Ž':
        return 8;
      case 'Ņ':
      case 'Š':
      case 'Ū':
        return 6;
      case 'B':
      case 'C':
      case 'G':
        return 5;
      case 'Ē':
      case 'Ī':
      case 'J':
        return 4;
      case 'D':
      case 'O':
      case 'V':
      case 'Z':
        return 3;
      case 'Ā':
      case 'K':
      case 'L':
      case 'M':
      case 'N':
      case 'P':
        return 2;
      default:
        return 1;
    }
  };

  const scrabbleWordsWithValues = scrabbleWords.map((word) => {
    let value = 0;
    for (let i = 0; i < word.form.length; i++) {
      const letter = word.form[i];
      value += getLetterScore(letter.toUpperCase()) || 0;
    }
    return { ...word, value };
  });

  return scrabbleWordsWithValues;
}

const scrabbleWordsWithValues = calculateScrabbleValue();

// Convert scrabbleWords to JSON string
const scrabbleWordsJSON = JSON.stringify(scrabbleWordsWithValues);

// Write scrabbleWordsJSON to a file
fs.writeFile('scrabbleWords.json', scrabbleWordsJSON, (err) => {
  if (err) {
    console.error('Error writing scrabbleWords to file:', err);
  } else {
    console.log('scrabbleWords successfully written to file');
  }
});
