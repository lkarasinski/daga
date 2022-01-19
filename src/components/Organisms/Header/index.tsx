import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin: 1rem;
`;

const Header: React.FC = () => {
    return (
        <Wrapper>
            <Image src="/logo.svg" alt="Daga Logo" width={72} height={48} />
        </Wrapper>
    );
};

export default Header;
