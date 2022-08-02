import React from "react";
import styled, { useTheme } from "styled-components/native";

const positionVarient = {
    top: "margin-top",
    bottom: "margin-bottom",
    left: "margin-left",
    right: "margin-right"
};

const sizeVarient = {
    small: 1,
    medium: 2,
    large: 3,
    xl: 4,
    xxl: 5
};

const getVarient = ({ position, size, theme }) => {
    const property = positionVarient[position];
    const sizeIndex = sizeVarient[size];
    const value = theme.space[sizeIndex];
    return `${property}:${value}`;
}

const SpacerView = styled.View`
    ${({ variant }) => variant};
`;

export const Spacer = ({ position, size, children }) => {
    const theme = useTheme();
    const variant = getVarient({ position, size, theme });
    return <SpacerView variant={variant}>{children}</SpacerView>
};

Spacer.defaultProps = {
    position: "top",
    size: "small"
};
