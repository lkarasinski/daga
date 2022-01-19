import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 1rem;
    background-color: #00000040;
`;

const CompanyName = styled.h1`
    font-size: 4rem;
    color: hsla(40, 100%, 45%, 1);
`;
const CompanyDescription = styled.h2`
    font-size: 2.25rem;
`;

const HeroText: React.FC = () => {
    return (
        <Wrapper>
            <CompanyName>Daga</CompanyName>
            <CompanyDescription>
                Producent tworzyw sztucznych
            </CompanyDescription>
        </Wrapper>
    );
};

export default HeroText;
