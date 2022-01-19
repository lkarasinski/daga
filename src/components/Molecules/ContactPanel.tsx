import React from 'react';
import styled from 'styled-components';
import Heading from '../Atoms/Heading';
import Paragraph from '../Atoms/Paragraph';

const Background = styled.div`
    margin-top: 2rem;
    background-color: #ffffff;
    padding: 2rem;
`;

const Wrapper = styled.div`
    max-width: 75rem;
    margin: 0 auto;

    p {
        color: #000000;
    }
`;

const Text = styled.h2`
    margin-bottom: 3rem;
`;
const BottomBar = styled.div`
    width: 100%;
    height: 1rem;
    background-color: #e49700;
`;

const Molecules: React.FC = () => {
    return (
        <>
            <Background>
                <Wrapper>
                    <Heading>Kontakt</Heading>
                    <Text>Masz pytania? Skontaktuj się z nami!</Text>
                    <Paragraph>Sławomir Kucharski DAGA</Paragraph>
                    <Paragraph>ul. Zbozowa 14</Paragraph>
                    <Paragraph>62-800 Kalisz</Paragraph>
                    <Paragraph>tel. 603 534 559</Paragraph>
                    <Paragraph>email: ztsdaga@op.pl</Paragraph>
                </Wrapper>
            </Background>
            <BottomBar />
        </>
    );
};

export default Molecules;
