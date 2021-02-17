class Googlon {

  constructor(text) {

    this._text = text.trim();
    this._foo = ['s', 'j', 'n', 'c', 'q'];
    this._verbs = 0;
    this._verbsInPrimaryPerson = 0;
    this._prepositions = 0;
    this._beautifulNum = 0;
    this._lexico = 'skmgnwqztxdrpcfjlbvh';

    this.init();

  }

  init() {
    this.searchPrepositions();
    this.searchVerbs();
    this.sortToText();
    this.beautifulNumber();
  }

  searchPrepositions() {

    let words = this._text.split(' ');

    words.map(word => {

      if (word.length == 4) {
        let lastLetter = word.slice(word.length - 1, );

        if (this._foo.includes(lastLetter)) {
          this._prepositions++;
        }

      }

    });

  }


  searchVerbs() {

    let words = this._text.split(' ');

    words.map(word => {

      if (word.length >= 7) {

        let firstLetter = word.slice(0, 1);
        let lastLetter = word.slice(word.length - 1, );

        if (!this._foo.includes(lastLetter)) {
          this._verbs++;
          if (this._foo.includes(firstLetter)) {
            this._verbsInPrimaryPerson++;
          }
        }

      }

    });

  }

  textToSort() {

    let words = this._text.split(' ');
    let lexicoList = this._lexico.split('');

    let wordsSorted = [];

    words.map(word => {

      let firstLetter = word.slice(0, 1);

      if (lexicoList.includes(firstLetter)) {
        if (!wordsSorted.includes(word)) {
          wordsSorted.push(word);
        }
      }

    });

    return wordsSorted;

  }

  sortToText() {

    let vocabulary = this.textToSort();

    this._vocabulary = vocabulary.join(' ');

  }

  textToNumber() {

    let words = this._text.split(' ');
    let lexicoList = this._lexico.split('');
    let values = [];
    let value = 0;

    words.map((word, index) => {

      let letter = word.split('');

      letter.map((l, index) => {

        let indexList = lexicoList.indexOf(l);

        value += indexList * Math.pow(20, index);

      });

      values.push(value);

    });

    return values

  }

  beautifulNumber() {

    let numbersConverted = this.textToNumber();
    let numberBase = 563131;
    let numberDivider = 5;

    numbersConverted.forEach(num => {

      console.log(num);

      if (num >= numberBase && num % numberDivider === 0) {
        this._beautifulNum++
      }

    });


  }

  response() {

    return {
      verbs: this._verbs,
      verbsInPrimaryPerson: this._verbsInPrimaryPerson,
      prepositions: this._prepositions,
      vocabulary: this._vocabulary,
      beautiful: this._beautifulNum
    }

  }

}