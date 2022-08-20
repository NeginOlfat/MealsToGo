import React from "react";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Text } from "../../../components/typography/text.component";
import { CardIconContiner, CardIcon } from "../components/checkout.style";


export const CheckoutSuccessScreen = () => (
    <SafeArea>
        <CardIconContiner>
            <CardIcon icon="check-bold" />
            <Text variant="label" >Success!</Text>
        </CardIconContiner>
    </SafeArea>
);
