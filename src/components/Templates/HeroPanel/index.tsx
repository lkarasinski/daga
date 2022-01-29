import React from 'react';
import styled from 'styled-components';
import HeroText from '../../Atoms/HeroText';
import Logo from '../../Atoms/Logo';
import MaxWidth from '../../Atoms/MaxWidth';
import ContactButton from '../../Molecules/ContactButton';

const Wrapper = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)),
        url('/background-min.jpg');
    width: 100%;
    height: 70vh;
    background-size: cover;
    color: #ffffff;

    overflow: hidden;

    @media (max-width: 50rem) {
        height: 85vw;
    }
    @media (max-width: 75rem and min-width: 50rem) {
        height: 50vh;
    }
`;

const Grid = styled.div`
    display: grid;
    place-items: center;
    height: 70vh;
    @media (max-width: 50rem) {
        height: 85vw;
    }
    @media (max-width: 75rem and min-width: 50rem) {
        height: 50vh;
    }
`;

const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;
    width: 100%;
    position: absolute;
`;

const HeroPanel: React.FC = () => {
    return (
        <Wrapper>
            <MaxWidth>
                <TopContainer>
                    <Logo />
                    <ContactButton />
                </TopContainer>
            </MaxWidth>
            <Grid>
                <HeroText />
            </Grid>
        </Wrapper>
    );
};

export default HeroPanel;
