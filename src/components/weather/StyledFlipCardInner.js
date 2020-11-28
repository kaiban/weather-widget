import styled from "styled-components";

const StyledFlipCardInner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    ${(props) => (props.flipped ? "transform: rotateY(180deg)" : "")}
`;

export default StyledFlipCardInner;
