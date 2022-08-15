import React, { useContext } from "react";
import { List, Avatar } from "react-native-paper";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { SettingsItem, AvatarContainer } from "../components/settings.style";


export const SettingsScreen = ({ navigation }) => {

    const { onLogout, user } = useContext(AuthenticationContext);

    return (
        <SafeArea>
            <AvatarContainer>
                <Spacer position="top" size="large">
                    <Avatar.Icon size={180} icon="human" />
                </Spacer>
                <Spacer position="top" size="large">
                    <Text variant="label">{user.email}</Text>
                </Spacer>
            </AvatarContainer>
            <List.Section>
                <SettingsItem
                    title="Favourites"
                    description="View your Favourites"
                    left={() => <List.Icon color="black" icon="cards-heart" />}
                    onPress={() => navigation.navigate("Favourites")}
                />
                <SettingsItem
                    title="Logout"
                    left={() => <List.Icon color="black" icon="logout" />}
                    onPress={onLogout}
                />
            </List.Section>
        </SafeArea>
    );
};
