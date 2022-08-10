import React, { useState, useContext } from "react";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import {
    AccountBackground,
    AccountCover,
    AccountContainer,
    AuthButton,
    AuthInput,
    ErrorContainer
} from "../components/account.style";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";


export const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { onLogin, error } = useContext(AuthenticationContext);

    return (
        <AccountBackground>
            <AccountCover />
            <AccountContainer>
                <AuthInput
                    label="E-mail"
                    vallue={email}
                    textContentType="emailAddress"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    onChangeText={(u) => setEmail(u)}
                />
                <Spacer size="large">
                    <AuthInput
                        label="Password"
                        vallue={password}
                        textContentType="password"
                        secureTextEntry
                        autoCapitalize="none"
                        onChangeText={(p) => setPassword(p)}
                    />
                </Spacer>
                <Spacer size="large">
                    {error && (
                        <ErrorContainer>
                            <Text variant="error">{error}</Text>
                        </ErrorContainer>
                    )}
                </Spacer>
                <Spacer size="large">
                    <AuthButton
                        icon="lock-open-outline"
                        mode="contained"
                        onPress={() => onLogin(email, password)}
                    >
                        Login
                    </AuthButton>
                </Spacer>
            </AccountContainer>
            <Spacer size="large">
                <AuthButton
                    icon="keyboard-backspace"
                    mode="contained"
                    onPress={() => navigation.goBack()}
                >
                    Back
                </AuthButton>
            </Spacer>
        </AccountBackground>
    )
};
