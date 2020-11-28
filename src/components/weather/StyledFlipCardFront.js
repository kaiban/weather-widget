import styled from "styled-components";

const StyledFlipCardFront = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    top: 0;

    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
`;

export default StyledFlipCardFront;
