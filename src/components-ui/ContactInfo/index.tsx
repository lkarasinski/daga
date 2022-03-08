import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

type ContactInfoProps = {
    icon: IconDefinition;
    text: string;
};

const ContactInfo = ({ icon, text }: ContactInfoProps) => {
    return (
        <StyledWrapper>
            <StyledIconWrapper>
                <StyledIcon icon={icon} />
            </StyledIconWrapper>
            <StyledText>{text}</StyledText>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    font-size: 1rem;

    border: 2px solid ${({ theme }) => theme.colors.primary};
`;

const StyledText = styled.p`
    font-size: ${({ theme }) => theme.fonts.sizes.small};
`;

const StyledIconWrapper = styled.div`
    width: 48px;
    height: 48px;
    background-color: ${({ theme }) => theme.colors.primary};
    display: grid;
    place-items: center;
    border-radius: 50%;
`;

const StyledIcon = styled(FontAwesomeIcon)`
    width: 24px;
    height: 24px;
    color: ${({ theme }) => theme.colors.tertiary};
`;

export default ContactInfo;
