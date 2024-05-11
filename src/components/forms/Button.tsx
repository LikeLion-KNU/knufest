import styled from "styled-components";

export interface IButton {
    width: string;
    variant: "navy" | "purple" | "red";
}

export const Button = styled.button<IButton>`
    display: block;

    width: ${(props) => props.width};
    height: 53px;

    border: none;
    border-radius: 40px;

    color: #fff;
    background-color: ${(props) => {
        switch (props.variant) {
            case "navy":
                return "#1E285F";
            case "purple":
                return "#5D5A88";
            case "red":
                return "#B04949";
        }
    }};
`;