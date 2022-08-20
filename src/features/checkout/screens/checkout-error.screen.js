import React from "react";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Text } from "../../../components/typography/text.component";
import { colors } from "../../../infrastructure/theme/colors";
import { CardIconContiner, CardIcon } from "../components/checkout.style";


export const CheckoutErrorScreen = ({ route }) => {
    const { error = "" } = route.params;
    return (
        <SafeArea>
            <CardIconContiner>
                <CardIcon icon="close" bg={colors.ui.error} />
                <Text variant="label" >{error}</Text>
            </CardIconContiner>
        </SafeArea>
    );
}
