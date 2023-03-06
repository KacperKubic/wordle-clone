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
    const wordArr = result.split("\n")
    todayWord = wordArr[Math.floor(Math.random() * wordArr.length)]
    wordSet = new Set(wordArr)
  });

  return { wordSet, todayWord }
}