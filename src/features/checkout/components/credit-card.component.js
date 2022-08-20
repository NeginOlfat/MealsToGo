import React from "react";
import { LiteCreditCardInput } from "react-native-credit-card-input";


export const CreditCardInput = ({ name, onSuccess }) => {

    const onChange = (formData) => {
        const { values, status } = formData;
        const isIncomplete = Object.values(status).includes("incomplete");

        const expiry = values.expiry.split("/");

        const card = {
            name: name,
            number: values.number,
            exp_month: expiry[0],
            exp_year: expiry[1],
            cvc: values.cvc
        }
        if (!isIncomplete) {
            onSuccess(card)
        }
    }

    return (
        <LiteCreditCardInput onChange={onChange} />
    )
}