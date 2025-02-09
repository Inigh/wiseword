import { useState } from 'react';
import Quote from '../../constants/quote';
import * as S from './style';

const Quete = () => {
    const [quote, setQuote] = useState<string>('');

    const getRandomQuote = () => {
        const randomIndex = Math.floor(Math.random() * Quote.length);
        setQuote(Quote[randomIndex]);
    };

    return (
        <S.Container>
            <S.Quote>{quote}</S.Quote>
            <S.Button onClick={getRandomQuote}>랜덤 명언 생성!</S.Button>
        </S.Container>
    )
}

export default Quete;