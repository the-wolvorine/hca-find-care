import { useEffect, useState } from "react";
import data from "./data.json";

const SuppliedComponent = () => {
    const [selectedLetter, setSelectedLetter] = useState('');
    const [filteredTerms, setFilteredTerms] = useState(data.termList);

    useEffect(() => {
        const filtered = data.termList.filter(term => term.title.startsWith(selectedLetter));
        setFilteredTerms(filtered);
    }, [selectedLetter]);

    const handleLetterClick = (letter) => {
        setSelectedLetter(letter);
    }

    const showTerms = () => {
        return filteredTerms.map((term, index) => (
            <div key={term.index}>
                <a href={term.link}>{term.title}</a>
            </div>
        ));
    }

    const showLetters = () => {
        const allLetters = Array.from({length: 26}, (_,i) => String.fromCharCode(i+65));
        const existingLetters = new Set(data.termList.map(term => term.title[0].toUpperCase()));
        return allLetters.map((letter, index) => (
            <button key={index} onClick={() => handleLetterClick(letter)} disabled={!existingLetters.has(letter)} >
                {letter}
            </button>
        ));
    }
    return(
        <div className="container">
            <div className="letter-buttons">
                {showLetters()}
            </div>
            <div className="terms-list">
                {showTerms()}
            </div>
        </div>
    );
}

export default SuppliedComponent;