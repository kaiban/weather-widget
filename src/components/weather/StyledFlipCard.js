import styled from "styled-components";
import bg from "../../assets/weather/weather-bg.png";

const StyledFlipCard = styled.div`
    background: url(${bg});
    background-size: cover;
    background-position: center;
    background-color: transparent;
    padding: 24px 16px;
    width: 100%;
    height: 100%;
    perspective: 1000px;
    position: relative;
    box-sizing: border-box;
`;

export default StyledFlipCard;
