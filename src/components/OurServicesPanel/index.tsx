import React from 'react';
import styled from 'styled-components';
import Heading from '../../components-ui/Heading';
import ImageCard from '../../components-ui/ImageCard';

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
`;

const Wrapper = styled.div`
    margin: 2rem 0 4rem;
`;

const OurServicesPanel: React.FC = () => {
    return (
        <Wrapper>
            <Heading>Nasza oferta</Heading>
            <Grid>
                <ImageCard
                    src="/worki-na-smieci.jpg"
                    alt="Rolka czarnych worków na śmieci"
                    label="Worki na śmieci"
                />
                <ImageCard
                    src="/reklamowki.jpg"
                    alt="Wielokolorowe reklamówki"
                    label="Reklamówki HDPE i LDPE"
                />
                <ImageCard
                    src="/folia-stretch.jpg"
                    alt="Czarne i białe rolki folii stretch"
                    label="Folia stretch"
                />
                <ImageCard
                    src="/pianka-pe.jpg"
                    alt="Rolka pianki PE"
                    label="Pianka PE i Worki z pianki PE"
                />
                <ImageCard
                    src="/tasma-samoprzylepna.jpg"
                    alt="Dwie rolki taśmy samoprzylepnej"
                    label="Taśma samoprzylepna"
                />
                <ImageCard
                    src="/kaptury-ldpe.jpg"
                    alt="Paleta z kartonami okryta kapturem LDPE"
                    label="Kaptury LDPE na palety"
                />
                <ImageCard
                    src="/worki-ldpe.jpg"
                    alt="Wielokolorowe rolki worków LDPE"
                    label="Worki LDPE"
                />
                <ImageCard
                    src="/folia-babelkowa.jpg"
                    alt="Rolka folii bąbelkowej"
                    label="Folia bąbelkowa"
                />
                <ImageCard
                    src="/rekaw-ldpd.jpg"
                    alt="Rolka rękawu LDPE"
                    label="Rękawy, półrękawy i taśmy LDPE"
                />
            </Grid>
        </Wrapper>
    );
};

export default OurServicesPanel;
