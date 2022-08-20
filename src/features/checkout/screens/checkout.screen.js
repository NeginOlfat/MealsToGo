import React, { useContext, useState } from "react";
import { ScrollView } from "react-native";
import { List, Divider } from "react-native-paper";

import { CreditCardInput } from "../components/credit-card.component";
import { CardIconContiner, CardIcon, NameInput, PayButton, ClearButton, PaymentProcessing } from "../components/checkout.style";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";
import { CartContext } from "../../../services/cart/cart.context";


export const CheckoutScreen = ({ navigation }) => {

    const { cart, sum, restaurant, clearCart } = useContext(CartContext);

    const [name, setName] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [card, setCard] = useState(null);

    const onPay = () => {
        setIsLoading(true);
        setTimeout(() => {
            if (!card) {
                setIsLoading(false);
                navigation.navigate("CheckoutError", {
                    error: "Something went wrong with credit card"
                });
                return;
            }
            console.log(name, sum);
            setIsLoading(false);
            clearCart();
            navigation.navigate("CheckoutSuccess");
        }, 2000)
    }

    if (!cart || !restaurant) {
        return (
            <SafeArea>
                <CardIconContiner>
                    <CardIcon icon="cart-off" />
                    <Text variant="body">Your card is empty!</Text>
                </CardIconContiner>
            </SafeArea>
        )
    }

    return (
        <SafeArea>
            <RestaurantInfoCard restaurant={restaurant} />
            {isLoading && <PaymentProcessing />}
            <ScrollView>
                <Spacer position="left" size="medium">
                    <Spacer position="top" size="large">
                        <Text variant="body">Your Order</Text>
                    </Spacer>
                    <List.Section>
                        {cart.map(({ item, price }, i) => {
                            return (
                                <List.Item
                                    key={`item-${i}`}
                                    title={`${item} - ${price / 100}`}
                                />
                            )
                        })}
                    </List.Section>
                    <Text variant="body">Total: {sum / 100} </Text>
                </Spacer>
                <Spacer position="top" size="large" />
                <Divider />
                <NameInput
                    label="name"
                    value={name}
                    onChangeText={(t) => setName(t)}
                />

                {!!name.length &&
                    <Spacer position="top" size="large">
                        <CreditCardInput
                            name={name}
                            onSuccess={setCard}
                        />
                    </Spacer>
                }

                <Spacer position="top" size="xxl" />
                <PayButton
                    icon="cash"
                    mode="contained"
                    disabled={isLoading}
                    onPress={onPay}
                >
                    Pay
                </PayButton>
                <Spacer position="top" size="large">
                    <ClearButton
                        icon="cart-off"
                        mode="contained"
                        disabled={isLoading}
                        onPress={clearCart}
                    >
                        Clear Cart
                    </ClearButton>
                </Spacer>
            </ScrollView>
        </SafeArea>
    )
};
