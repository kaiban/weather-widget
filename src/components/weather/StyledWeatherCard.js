import styled from "styled-components";

const StyledWeatherCard = styled.div`
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    flex: 0 1 14%;
    align-items: center;
    justify-content: space-around;
    min-width: 95px;
    max-width: 95px;
    padding: 12px 0;
    border: 1px solid transparent;
    border-radius: 12px;
    box-sizing: border-box;
    transition: all 0.4s;
    transition-timing-function: ease-out;

    &::hover {
        border: 1px solid #c69887;
        border-radius: 12px;
        background-color: rgba(247, 248, 250, 0.18);
    }

    ${({ selected }) =>
        selected &&
        `
    border: 1px solid #c69887; 
    border-radius: 12px;
    background-color: rgba(247, 248, 250, 0.18);
  `}

    .forecast-icon-wrapper {
        flex: 1 1 100%;
        display: flex;
        align-items: start;
        justify-content: center;
        width: 85%;
        padding: 12px;
        box-sizing: border-box;
    }

    .forecast-title {
        font-size: 14px;
    }

    .forecast-min-max {
        font-size: 14px;
    }
`;

export default StyledWeatherCard;
