import styled from "styled-components";

const StyledFlipCardBack = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transform: rotateY(180deg);
`;

export default StyledFlipCardBack;
