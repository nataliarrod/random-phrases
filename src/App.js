import React,{ useState, useEffect } from 'react';
import styled from '@emotion/styled'
import Phrase from './components/Phrase'


const Container = styled.div`
  display: flex;
  align-items:center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Button = styled.button`
  background: green;
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .3s ease;

  :hover{
    cursor: pointer;
    background-size: 400px;
  }
`;

function App() {

  const [phrase, setPhrase] = useState({});

  const searchAPI = async () => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
    const phrase = await api.json()
    setPhrase(phrase[0]);
  }

useEffect(() => {
  searchAPI()
}, []);

  return (
    <Container>
      <Phrase 
        phrase={phrase}
      />
      <Button
        onClick={searchAPI}
      >
        Get your phrase
      </Button>
    </Container>
  
  );
}

export default App;
