import Image from 'next/image';
import * as React from 'react';
import styled from 'styled-components';

type ImageCardProps = {
    src: string;
    alt: string;
    label: string;
};

const ImageCard = ({ src, alt, label }: ImageCardProps) => {
    return (
        <StyledWrapper>
            <Image
                src={src}
                alt={alt}
                width={'200px'}
                height={'200px'}
                priority={false}
            />
            <p>{label}</p>
        </StyledWrapper>
    );
};
const StyledWrapper = styled.div`
    text-align: center;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fonts.sizes.small};
    padding: 0.5rem 0;
    color: ${({ theme }) => theme.colors.tertiary};
    font-weight: 600;
`;

export default ImageCard;
