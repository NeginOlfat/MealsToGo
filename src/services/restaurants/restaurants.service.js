import { mocks, mockImages } from "./mock";
import camelize from "camelize";

export const restaurantsRequest = (location = "43.653225,-79.383186") => {
    return new Promise((resolve, reject) => {
        const mock = mocks[location];
        if (!mock)
            reject("Not Found");
        resolve(mock);
    })
}

export const restaurantsTransform = ({ results }) => {
    const mappedResult = results.map((restaurant) => {
        restaurant.photos = restaurant.photos.map(() => (
            mockImages[Math.ceil(Math.random() * (mockImages.length - 1))]
        ))
        return {
            ...restaurant,
            address: restaurant.vicinity,
            isOpeningNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
            isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY"
        }
    });
    return camelize(mappedResult);
}
