import React from 'react';
import styled from 'styled-components';
import Heading from '../../Atoms/Heading';

const List = styled.ul`
    font-size: 18px;
    line-height: 26px;

    color: #ffffff;
    margin-left: 1.5rem;
`;

const Wrapper = styled.div`
    margin: 2rem 0 4rem;
`;

const OurServicesPanel: React.FC = () => {
    return (
        <Wrapper>
            <Heading>Nasza oferta</Heading>
            <List>
                <li>Worki na śmieci</li>
                <li>Reklamówki HDPE i LDPE</li>
                <li>Folia stretch</li>
                <li>Pianka PE i Worki z Pianki PE</li>
                <li>Taśma samoprzylepna</li>
                <li>Kaptury LDPE na palety</li>
                <li>Worki LDPE</li>
                <li>Folia bąbelkowa</li>
                <li>Rękawy, półrękawy i taśmy LDPE</li>
            </List>
        </Wrapper>
    );
};

export default OurServicesPanel;
