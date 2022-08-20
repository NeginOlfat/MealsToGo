import styled from "styled-components/native";
import { Avatar, TextInput, Button, ActivityIndicator, Colors } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";

export const CardIconContiner = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const CardIcon = styled(Avatar.Icon).attrs({
    size: 128
})`
    background-color: ${props => props.bg || props.theme.colors.brand.primary};
`;

export const NameInput = styled(TextInput)`
    margin: ${props => props.theme.space[3]};
`;

export const PayButton = styled(Button).attrs({
    color: colors.brand.primary
})`
    width: 80%;
    align-self: center;
    padding: ${props => props.theme.space[2]};
`;

export const ClearButton = styled(Button).attrs({
    color: colors.ui.error
})`
    width: 80%;
    align-self: center;
    padding: ${props => props.theme.space[2]};
`;

export const PaymentProcessing = styled(ActivityIndicator).attrs({
    size: 128,
    animating: true,
    color: Colors.blue300
})`
    position: absolute;
    top: 50%;
    left: 35%;
    z-index: 999;
`;
