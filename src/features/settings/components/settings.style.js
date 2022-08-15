import { List } from "react-native-paper";
import styled from "styled-components/native";
import { SafeArea } from "../../../components/utility/safe-area.component";

export const SettingsItem = styled(List.Item)`
    padding: ${props => props.theme.space[3]};
`;

export const AvatarContainer = styled.View`
    align-items: center;
`;

export const NoFavouritesArea = styled(SafeArea)`
    align-items: center;
    justify-content: center;
`;
