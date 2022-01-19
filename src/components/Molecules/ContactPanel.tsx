import React from 'react';
import styled from 'styled-components';
import Heading from '../Atoms/Heading';
import MaxWidth from '../Atoms/MaxWidth';
import Paragraph from '../Atoms/Paragraph';

const Background = styled.div`
    margin-top: 2rem;
    background-color: #ffffff;
    padding: 2rem 0;
    color: #000000;
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
            <Background id="kontakt">
                <MaxWidth>
                    <Heading>Kontakt</Heading>
                    <Text>Masz pytania? Skontaktuj się z nami!</Text>
                    <Paragraph black>Sławomir Kucharski DAGA</Paragraph>
                    <Paragraph black>ul. Zbożowa 14</Paragraph>
                    <Paragraph black>62-800 Kalisz</Paragraph>
                    <Paragraph black>tel. 603 534 559</Paragraph>
                    <Paragraph black>email: ztsdaga@op.pl</Paragraph>
                </MaxWidth>
            </Background>
            <BottomBar />
        </>
    );
};

export default Molecules;
