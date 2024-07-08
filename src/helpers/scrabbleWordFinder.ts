export interface Word {
  form: string;
  sense: string[];
  value: number;
}

class ScrabbleTreeNode {
  children: any;
  constructor() {
    this.children = Object.create(null);
  }
}

class ScrabbleDictionary {
  root: any;
  constructor(words: Word[]) {
    this.root = new ScrabbleTreeNode();
    words.forEach((word) => this.insert(word));
  }
  insert(word: Word) {
    let cursor = this.root;
    for (let letter of word.form.toLowerCase()) {
      if (!cursor.children[letter]) {
        cursor.children[letter] = new ScrabbleTreeNode();
      }
      cursor = cursor.children[letter];
    }
    cursor.isWord = true;
    cursor.value = word.value;
    cursor.sense = word.sense;
    cursor.form = word.form;
  }
}

class ScrabbleWordFinder {
  dict: any;
  constructor(dict: Word[]) {
    this.dict = new ScrabbleDictionary(dict);
  }
  find(letters: string): Word[] {
    return this.validWords(this.dict.root, letters);
  }
  validWords(node: any, letters: string, word = '', results = []) {
    if (node.isWord) {
      (results as any).push({
        form: node.form,
        sense: node.sense,
        value: node.value,
      });
    }
    const seen = new Set();
    for (let ch of letters) {
      if (!seen.has(ch)) {
        seen.add(ch);
        if (node.children[ch]) {
          this.validWords(
            node.children[ch],
            letters.replace(ch, ''),
            word + ch,
            results,
          );
        }
      }
    }
    return results;
  }
}

export default ScrabbleWordFinder;
