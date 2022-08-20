import { List } from "react-native-paper";
import styled from "styled-components/native";
import { SafeArea } from "../../../components/utility/safe-area.component";

export const SettingsItem = styled(List.Item)`
    padding: ${props => props.theme.space[3]};
    background-color: rgba(255,255,255,0.4)
`;

export const AvatarContainer = styled.View`
    align-items: center;
`;

export const NoFavouritesArea = styled(SafeArea)`
    align-items: center;
    justify-content: center;
`;

export const SettingsBackground = styled.ImageBackground.attrs({
    source: require("../../../../assets/home_bg.jpg")
})`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const TransparentSafeArea = styled(SafeArea)`
  background-color: transparent;
`;
