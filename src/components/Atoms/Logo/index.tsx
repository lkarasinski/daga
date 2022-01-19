import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const Wrapper = styled.div`
    max-width: 75rem;
    margin: auto;
    margin-top: 2rem;
    position: absolute;
`;

const Logo: React.FC = () => {
    return (
        <Wrapper>
            <Image src="/logo.svg" alt="Daga Logo" width={72} height={48} />
        </Wrapper>
    );
};

export default Logo;
