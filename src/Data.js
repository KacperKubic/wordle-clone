import wordBank from './wordsList.txt'

export const gameboardInitial = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ];

export const generateWordSet = async () => {
  let wordSet;
  let todayWord;
  await fetch(wordBank).then((response) => response.text()).then((result) => {
    const wordArr = result.split("\r")
    console.log(wordArr)
    todayWord = wordArr[Math.floor(Math.random() * wordArr.length)]
    console.log(todayWord)
    wordSet = new Set(wordArr)
    console.log(wordSet)
  });

  return { wordSet, todayWord }
}