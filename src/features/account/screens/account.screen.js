import React from "react";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AccountBackground, AccountCover, AccountContainer, AuthButton } from "../components/account.style";

export const AccountScreen = ({ navigation }) => {
    return (
        <AccountBackground>
            <AccountCover />
            <AccountContainer>
                <AuthButton
                    icon="lock-open-outline"
                    mode="contained"
                    onPress={() => navigation.navigate("Login")}
                >
                    Login
                </AuthButton>
                <Spacer size="large" >
                    <AuthButton
                        icon="email"
                        mode="contained"
                        onPress={() => navigation.navigate("Register")}
                    >
                        Register
                    </AuthButton>
                </Spacer>
            </AccountContainer>
        </AccountBackground>
    )
};
