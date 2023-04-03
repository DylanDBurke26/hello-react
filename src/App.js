import { useState } from 'react';
import { supabase } from './supabaseClient';
import logo from './logo.svg';
import './App.css';

const hands = [
  {id: 1, code: 'A&spades;', color: 'black'},
  {id: 2, code: 'K&hearts;', color: 'red'},
  {id: 3, code: 'Q&diams;', color: 'red'},
  {id: 4, code: 'J&clubs;', color: 'black'},
  {id: 5, code: 'T&spades;', color: 'black'},
];

function Hands() {
  const listSuits = hands.map(hand =>
    <div>
      {/* https://dev.to/jobpick/how-to-render-html-string-in-a-react-component-3kd2 */}
      {/* where I found to set the innerhtml to the suit */}
      <h2 style={{color: hand.color}} key={hand.id} dangerouslySetInnerHTML={{__html : `<div>${hand.code} ${hand.code}</div>`}}></h2>
    </div>
    
  );
   
  return (
    <div className='wrapper'>
      <h1>Five Best Starting Hands in Texas Hold'em</h1>
      <ul style={{padding: 0}}>{listSuits}</ul>
    </div>
  );
}

function LogoButton() {
  // https://stackoverflow.com/questions/19074171/how-to-toggle-a-divs-visibility-by-using-a-button-click
  // helped code the function
  function appearDisappear() {
    let logo = document.getElementById('logo');
    logo.style.opacity = logo.style.opacity === '0' ? '100' : '0';

    let logoButton = document.getElementById('logoButton');
    logoButton.innerHTML = logo.style.opacity === '100' ? 'Click to Make Logo Disappear' : 'Click to Make Logo Appear';
    console.log(logo.style.opacity);
  }
  
  return (
    <>
      <button id='logoButton' type='button' onClick={appearDisappear}>Click to Make Logo Disappear</button>
      <img
        className='App-logo'
        id='logo' 
        src={logo}
        alt='react logo'
      />
    </>

  );
}

function Count() {
  let count = 0;
  async function updateCount() {
    count++;
    let counter = document.getElementById('counter');
    counter.innerHTML = `<div>You Have Clicked ${count} times</div>`;
    
    if (count === 7) {
      let btn = document.getElementById('btn');
      btn.style.display = 'none';
      counter.innerHTML += `<p>You Have Clicked Too Many Times; Goodbye</p>`;
    }
  }

  return(
    <div className='wrapper'>
      <div id='counter'>
        You Have Clicked {count} times
      </div>
      <button id='btn' onClick={updateCount}>Counter</button>
    </div>
  );
}

// A React component that queries and displays data from Supabase
function Library() {
  // The useState hook lets us store data in a component across renders
  // setMyBooks is a setter function that updates the state of myBooks
  const [myBooks, setMyBooks] = useState([]);
  // This should look familar from Codepen
  async function getBooks() {
    let { data: books, error } = await supabase
      .from('Books')
      .select('*')
    // Update the state
    setMyBooks(books);
    console.log(error);
  }
  // Execute the function
  getBooks();
  // Below is what displays when you use <Library />
  return (
    <table className='bookTable'>
    {
      myBooks.map(b => (
        <tr className='tableRow'>
          <td>{b.title}</td>
          <td>{b.author}</td>
          <td>{b.isbn}</td>
          <td>{b.description}</td>
        </tr>
      ))
    }
    </table>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hands/>
        <LogoButton/>
        <Count/>
        <Library/>
      </header>
    </div>
  );
}

export default App;
