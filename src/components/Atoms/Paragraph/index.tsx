import styled from 'styled-components';

type Props = { black?: boolean };

const Paragraph = styled.p<Props>`
    font-family: Merriweather;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;
    margin: 0.5rem 0;

    color: ${({ black }) => (black ? '#000000' : '#ffffff')};
`;

export default Paragraph;
