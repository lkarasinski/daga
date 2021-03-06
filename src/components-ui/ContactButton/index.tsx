import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    background: #333333;
    font-family: ${({ theme }) => theme.fonts.family.body};
    font-style: normal;
    border: none;
    font-weight: bold;
    font-size: ${({ theme }) => theme.fonts.sizes.small};
    color: ${({ theme }) => theme.colors.background};
    border: none;
    padding: 0.75rem 2rem;
    cursor: pointer;
`;

const ContactButton: React.FC = () => {
    return (
        <a href="#kontakt">
            <Button>Skontaktuj się</Button>
        </a>
    );
};

export default ContactButton;
