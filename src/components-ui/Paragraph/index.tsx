import styled from 'styled-components';

type Props = { black?: boolean };

const Paragraph = styled.p<Props>`
    font-family: ${({ theme }) => theme.fonts.family.body};
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;
    margin: 0.5rem 0;

    color: ${({ theme, black }) => (black ? '#ffffff' : theme.colors.tertiary)};
`;

export default Paragraph;
