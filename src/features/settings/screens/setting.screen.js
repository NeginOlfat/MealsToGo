import React, { useContext, useCallback, useState } from "react";
import { TouchableOpacity } from "react-native";
import { List, Avatar } from "react-native-paper";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { SettingsItem, AvatarContainer, SettingsBackground, TransparentSafeArea } from "../components/settings.style";
import { colors } from "../../../infrastructure/theme/colors";


export const SettingsScreen = ({ navigation }) => {

    const { onLogout, user } = useContext(AuthenticationContext);

    const [photo, setPhoto] = useState(null);

    const getProfilePicture = async (currentUser) => {
        const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
        setPhoto(photoUri);
    };

    useFocusEffect(
        useCallback(() => {
            getProfilePicture(user);
        }, [user])
    );

    return (
        <SettingsBackground>
            <TransparentSafeArea>
                <AvatarContainer>
                    <Spacer position="top" size="large">
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Camera")}
                        >
                            {!photo && (
                                < Avatar.Icon size={180} icon="human" backgroundColor={colors.brand.primary} />
                            )}
                            {photo && (
                                < Avatar.Image size={180} source={{ uri: photo }} />
                            )}
                        </TouchableOpacity>
                    </Spacer>
                    <Spacer position="top" size="large">
                        <Text variant="label">{user.email}</Text>
                    </Spacer>
                </AvatarContainer>
                <List.Section>
                    <SettingsItem
                        title="Favourites"
                        description="View your Favourites"
                        left={() => <List.Icon color={colors.ui.error} icon="cards-heart" />}
                        onPress={() => navigation.navigate("Favourites")}
                    />
                    <Spacer />
                    <SettingsItem
                        title="Payment"
                        left={() => <List.Icon color={colors.ui.secondary} icon="cart" />}
                        onPress={() => null}
                    />
                    <Spacer />
                    <SettingsItem
                        title="Past Order"
                        left={() => <List.Icon color={colors.ui.secondary} icon="history" />}
                        onPress={() => null}
                    />
                    <Spacer />
                    <SettingsItem
                        title="Logout"
                        left={() => <List.Icon color={colors.ui.secondary} icon="logout" />}
                        onPress={onLogout}
                    />
                </List.Section>
            </TransparentSafeArea>
        </SettingsBackground>
    );
};
