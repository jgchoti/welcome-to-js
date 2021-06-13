'use strict';

let word = '';

let didConfirm = false;
while (!didConfirm) {
  word = prompt('enter a word to spell:');

  if (word === '' || word === null) {
    alert('nope, enter something');
    continue;
  }

  didConfirm = confirm('do you want to spell this word?\n\n- "' + word + '"');
}

let spellIt = 'all spelled out:\n';
for (let nextLetter of word) {
  spellIt = spellIt + '\n- ' + nextLetter;
}

alert(spellIt);
