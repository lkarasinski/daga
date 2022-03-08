import React from 'react';
import styled from 'styled-components';
import ContactInfo from '../../components-ui/ContactInfo';
import Heading from '../../components-ui/Heading';
import MaxWidth from '../../components-ui/MaxWidth';
import {
    faAddressBook,
    faMapMarkerAlt,
    faPhone,
    faAt,
} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const Molecules: React.FC = () => {
    return (
        <>
            <Background id="kontakt">
                <MaxWidth>
                    <Heading>Kontakt</Heading>
                    <Text>Masz pytania? Skontaktuj się z nami!</Text>
                    <Grid>
                        <ContactInfo
                            text={'Sławomir Kucharski Daga'}
                            icon={faAddressBook}
                        />
                        <ContactInfo
                            text={'ul. Zbożowa 14, 62-800 Kalisz'}
                            icon={faMapMarkerAlt}
                        />
                        <ContactInfo text={'603 934 559'} icon={faPhone} />
                        <ContactInfo text={'ztsdaga@op.pl'} icon={faAt} />
                    </Grid>
                </MaxWidth>
            </Background>
            <StyledImageBarContainer>
                <Image
                    src="/pasek.jpg"
                    alt="Dekoracja"
                    layout="fill"
                    objectFit="cover"
                />
            </StyledImageBarContainer>
        </>
    );
};

const StyledImageBarContainer = styled.div`
    width: 100%;
    height: 20vh;
    position: relative;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
`;

const Background = styled.div`
    background-color: ${({ theme }) => theme.colors.secondary};
    padding: 2rem 0;
    color: ${({ theme }) => theme.colors.background};
    margin-top: 150px;
`;

const Text = styled.h2`
    margin-bottom: 3rem;
    color: ${({ theme }) => theme.colors.background};
`;

export default Molecules;
