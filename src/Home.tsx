import { useState } from 'react';
import styled from 'styled-components';
import EntriesTable from './EntriesTable';
import LoadingSpinner from './LoadingSpinner';
import SearchInput from './SearchInput';
import dictionary from './dictionary-setup/scrabbleWords.json';
import ScrabbleWordFinder, { Word } from './helpers/scrabbleWordFinder';

const scrabbleWordFinder = new ScrabbleWordFinder(dictionary as Word[]);

const StyledHeading = styled.h1`
  font-size: 3rem;
  text-align: center;
  text-decoration: underline;
  color: #222;
  text-decoration-color: #a4343a;
  margin-bottom: 0;
  font-weight: 900;
  margin-top: 1rem;

  padding: 0 2rem;

  @media (max-width: 480px) {
    margin-top: 0;
    font-size: 2.8rem;
  }
`;

const StyledSubtitle = styled.p`
  text-align: center;
  font-size: 1.4rem;
  color: #666;
  margin-top: 0;
  margin-bottom: 2rem;
  font-weight: 300;

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

export default function Home() {
  const [scrabbleWords, setScrabbleWords] = useState<Word[]>(
    dictionary as Word[],
  );

  const [scrabbleInput, setScrabbleInput] = useState('');
  const [wordLength, setWordLength] = useState<string>();
  const [contains, setContains] = useState<string>();

  const [currentPage, setCurrentPage] = useState(1);

  const handleFilterToggle = () => {
    setCurrentPage(1);
    setWordLength(undefined);
    setContains(undefined);
    setScrabbleInput('');
    setScrabbleWords(dictionary as Word[]);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value.toLowerCase();
    setScrabbleInput(input);
    setCurrentPage(1);
    if (input === '') {
      setScrabbleWords(dictionary as Word[]);
    } else {
      const matchedWords = scrabbleWordFinder.find(input);
      setScrabbleWords(matchedWords);
    }
  };

  const handleLengthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const length = event.target.value;
    setWordLength(length);
    setCurrentPage(1);
    if (!length) {
      if (!contains) {
        setScrabbleWords(dictionary as Word[]);
      } else {
        const filteredWords = (dictionary as Word[]).filter((word) => {
          return word.form.includes(contains);
        });
        setScrabbleWords(filteredWords);
      }
    } else {
      const filteredWords = (dictionary as Word[]).filter((word) => {
        if (!contains) return word.form.length === parseInt(length);
        return (
          word.form.includes(contains) && word.form.length === parseInt(length)
        );
      });
      setScrabbleWords(filteredWords);
    }
  };

  const handleSetContains = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value.toLowerCase();
    setContains(input);
    setCurrentPage(1);
    const filteredWords = (dictionary as Word[]).filter((word) => {
      if (!wordLength) return word.form.includes(input);
      return (
        word.form.length === parseInt(wordLength) && word.form.includes(input)
      );
    });
    setScrabbleWords(filteredWords);
  };

  const sortedWords = scrabbleWords.sort((a, b) => b.value - a.value);
  return (
    <>
      <StyledHeading>Burtu Juceklis</StyledHeading>
      <StyledSubtitle>Latviešu Scrabble vārdu meklētājs</StyledSubtitle>
      <SearchInput
        handleInputChange={handleInputChange}
        wordLength={wordLength}
        setWordLength={handleLengthChange}
        handleSetContains={handleSetContains}
        handleFilterToggle={handleFilterToggle}
      />
      <main style={{ display: 'flex', justifyContent: 'center' }}>
        {scrabbleInput.length === 1 || sortedWords.length === 0 ? (
          <div style={{ marginTop: '2rem' }}>
            {Number(wordLength) < Number(contains?.length) ? (
              <p>
                Burtu virkne "{contains}" ir garāka par {wordLength}
              </p>
            ) : Number(contains?.length) > 0 && !sortedWords?.length ? (
              <>
                <p>Pamēģini kaut ko citu...</p>
              </>
            ) : (
              <>
                <LoadingSpinner />
                <p>Gaidu vēl burtus...</p>
              </>
            )}
          </div>
        ) : (
          <EntriesTable
            dictionary={sortedWords}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </main>
    </>
  );
}