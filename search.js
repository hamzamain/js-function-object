const lyrics = 'tumi amar kala pahki Ki jeno to may bolte amar mon chay . kala kala shada shada';
let search = 'KALA';
let lyricsLowerCase = lyrics.toLowerCase();
let searchLowerCase = search.toLowerCase();
let searchResult = lyrics.includes(searchLowerCase);
let Input = 'SHADA';
// console.log(searchResult);
let doseExest =lyrics.toLowerCase().includes(Input.toLowerCase());
// console.log(doseExest);
console.log(lyrics.indexOf('kala'));


if(lyrics.indexOf('kala') !== -1){
    console.log('doseExest');
}
else{
    console.log('this not here');
}
const fileName = 'myfile.jpg';
const otherFile = 'communication.pdf';

console.log(fileName.startsWith('my'));
console.log(otherFile.endsWith('n.pdf'));