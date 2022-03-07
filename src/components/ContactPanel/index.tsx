import React from 'react';
import styled from 'styled-components';
import Heading from '../../components-ui/Heading';
import MaxWidth from '../../components-ui/MaxWidth';
import Paragraph from '../../components-ui/Paragraph';

const Background = styled.div`
    margin-top: 2rem;
    background-color: ${({ theme }) => theme.colors.secondary};
    padding: 2rem 0;
    color: ${({ theme }) => theme.colors.background};
`;

const Text = styled.h2`
    margin-bottom: 3rem;
    color: ${({ theme }) => theme.colors.background};
`;
const BottomBar = styled.div`
    width: 100%;
    height: 1rem;
    background-color: ${({ theme }) => theme.colors.primary};
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
                    <Paragraph black>tel. 603 934 559</Paragraph>
                    <Paragraph black>email: ztsdaga@op.pl</Paragraph>
                </MaxWidth>
            </Background>
            <BottomBar />
        </>
    );
};

export default Molecules;
