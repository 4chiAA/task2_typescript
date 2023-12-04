import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const numbers:number[] = [1,2,3,4,5];
  const words:string[] = ["apple", "banana", "kiwi", "orange"];

  const doubleNumbers:number[] = numbers
      .map((num:number) => num * 2);
  console.log(doubleNumbers);

  const wordsLonger5:string[] = words
      .filter((word:string) => word.length>5)
  console.log(wordsLonger5);

  const sumNumbers:number = numbers
      .reduce((sum:number, num:number) => sum + num);
  console.log(sumNumbers);

  const greater10:boolean = numbers
      .some((num:number) => num > 10);
  if(greater10){
    console.log("At least one number is greater than 10.")
  } else {
    console.log("No number is greater than 10.")
  }

  interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
  }

  let rickAndMortyCharacters:Character[] = [];

  fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
        if (data && data.results) {
          rickAndMortyCharacters = data.results; // Speichern der results-Liste in characterList
          console.log("Here are all characters:")
          console.log(rickAndMortyCharacters);  // Verwendung oder Verarbeitung der characterList hier
          console.log("Here are only living humans:")
          onlyLivingHumans(rickAndMortyCharacters);
          console.log("Here are the names of all characters:")
          namesAsString(rickAndMortyCharacters);
        } else {
          console.error('Ungültiges Datenformat');
        }
      })
      .catch(error => {
        console.error('Error getting the Data', error);
      })

  function onlyLivingHumans(list:Character[]) {
    const livingHumans:Character[] = list
        .filter((char:Character) => char.status === "Alive" && char.species === "Human");
    console.log(livingHumans);
  }

  function namesAsString(list:Character[]) {
    const characterNames: string[] = list
        .map((char: Character) => char.name);
    console.log(characterNames);
  }




  return (
    <>
    </>
  )
}

export default App
