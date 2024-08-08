import { useState } from "react";
import data from "./data.json";
import "./supplied.css";

const SuppliedComponent = () => {
  const [selectedLetter, setSelectedLetter] = useState('');

  const groupedTerms = data.termList.reduce((acc, term) => {
    const firstLetter = term.title[0].toUpperCase();
    acc[firstLetter] = (acc[firstLetter] || []).concat(term);
    return acc;
  }, {});

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
  };

  const showTerms = (letter) => {
    const terms = groupedTerms[letter];
    if (!terms) return null;

    return terms.map((term, index) => (
      <div key={index}>
        <a href={term.link}>{term.title}</a>
      </div>
    ));
  };

  const showLetters = () => {
    const allLetters = Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 65));
    return allLetters.map((letter, index) => {
      const hasTerms = groupedTerms[letter] && groupedTerms[letter].length > 0;
      return (
        <button
          key={index}
          onClick={() => handleLetterClick(letter)}
          disabled={!hasTerms}
        >
          {letter}
        </button>
      );
    });
  };

  return (
    <div className="container">
      <div className="letter-container">
        <p>Treatments, Services and Specialties</p>
        <div className="letter-buttons">
            {showLetters()}
        </div>
      </div>
      <div className="terms-list">
        {   selectedLetter ? (
                <div key={selectedLetter} className="terms-group">
                    <h2>{selectedLetter}</h2>
                    <hr />
                    {showTerms(selectedLetter)}
                </div>
        ) : ( Object.entries(groupedTerms).map(([letter, terms]) => (
                <div key={letter} className="terms-group">
                    <h2>{letter}</h2>
                    <hr />
                    {showTerms(letter)}
                </div>
                ))
            )
        }
      </div>
    </div>
  );
};

export default SuppliedComponent;
