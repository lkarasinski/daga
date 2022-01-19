import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    background: #e49700;
    font-family: Merriweather;
    font-style: normal;
    border: none;
    font-weight: bold;
    font-size: 1rem;
    color: #292929;
    padding: 0.75rem 2rem;
`;

const ContactButton: React.FC = () => {
    return (
        <a href="#kontakt">
            <Button>Skontaktuj się</Button>
        </a>
    );
};

export default ContactButton;