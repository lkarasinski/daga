import React from 'react';
import styled from 'styled-components';
import Heading from '../../Atoms/Heading';
import Paragraph from '../../Atoms/Paragraph';

const Wrapper = styled.div`
    margin: 2rem 0;
`;

const AboutUsPanel: React.FC = () => {
    return (
        <Wrapper>
            <Heading>O nas</Heading>
            <Paragraph>
                Nasza oferta to opakowania dla przemysłu i handlu.
                Specjalizujemy się głównie w workach na śmieci.
            </Paragraph>
            <Paragraph>Worki produkowane z folii LDPE i HDPE.</Paragraph>
            <Paragraph>
                Możemy zrealizować każdą ofertę na worki pod względem grubości
                folii rodzaju i koloru.
            </Paragraph>
            <Paragraph>
                Oprócz tego w ofercie mamy inne artykuły do kompleksowego
                pakowania towaru.
            </Paragraph>
        </Wrapper>
    );
};

export default AboutUsPanel;
