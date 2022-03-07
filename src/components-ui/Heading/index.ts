import styled from 'styled-components';

const Heading = styled.h1`
    font-size: 36px;
    line-height: 45px;
    color: ${({ theme }) => theme.colors.primary};
    margin-top: 1rem;
    margin-bottom: 1rem;
`;

export default Heading;
