document.querySelector('button').addEventListener('click', event => {

  event.preventDefault();

  let text = document.querySelector('textarea').value;

  let googlon = new Googlon(text);

  let result = googlon.response();

  document.querySelector('#verbs').innerHTML = result.verbs;
  document.querySelector('#verbsFirstPerson').innerHTML = result.verbsInPrimaryPerson;
  document.querySelector('#prepositions').innerHTML = result.prepositions;
  document.querySelector('#beautifulNumber').innerHTML = result.beautiful;
  document.querySelector('#vocabulary').value = result.vocabulary;
});

