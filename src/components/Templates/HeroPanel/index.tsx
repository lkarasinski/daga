import React from 'react';
import styled from 'styled-components';
import HeroText from '../../Atoms/HeroText';
import Logo from '../../Atoms/Logo';

const Wrapper = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url('/background-min.jpg');
    width: 100%;
    height: 70vh;
    background-size: cover;
    color: #ffffff;

    overflow: hidden;
`;

const Content = styled.div`
    max-width: 75rem;
    margin: 0 auto;
`;

const Grid = styled.div`
    display: grid;
    place-items: center;
    height: 70vh;
`;

const HeroPanel: React.FC = () => {
    return (
        <Wrapper>
            <Content>
                <Logo />
            </Content>
            <Grid>
                <HeroText />
            </Grid>
        </Wrapper>
    );
};

export default HeroPanel;
