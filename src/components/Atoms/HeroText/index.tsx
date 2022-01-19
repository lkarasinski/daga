import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.h1`
    font-size: 5rem;
`;

const HeroText: React.FC = () => {
    return <Wrapper>Zakład Tworzyw sztucznych Daga</Wrapper>;
};

export default HeroText;
