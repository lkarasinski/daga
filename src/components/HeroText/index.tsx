import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 1rem;
    background-color: #00000040;
    text-align: center;
`;

const CompanyName = styled.h1`
    font-family: 'Azonix';
    font-size: ${({ theme }) => theme.fonts.sizes.large};
    /* color: hsla(40, 100%, 45%, 1); */
    @media (max-width: 75rem) {
        font-size: 3rem;
    }
`;
const CompanyDescription = styled.h2`
    font-size: ${({ theme }) => theme.fonts.sizes.medium};
    @media (max-width: 75rem) {
        font-size: 1.5rem;
    }
`;

const HeroText: React.FC = () => {
    return (
        <Wrapper>
            <CompanyName>Daga</CompanyName>
            <CompanyDescription>Zakład tworzyw sztucznych</CompanyDescription>
        </Wrapper>
    );
};

export default HeroText;
