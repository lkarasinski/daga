import React from 'react';
import styled from 'styled-components';
import HeroText from '../HeroText';
import MaxWidth from '../../components-ui/MaxWidth';
import ContactButton from '../../components-ui/ContactButton';

const Wrapper = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)),
        url('/background-min.jpg');
    width: 100%;
    height: 70vh;
    background-size: cover;
    color: ${({ theme }) => theme.colors.background};

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
    justify-content: right;
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
