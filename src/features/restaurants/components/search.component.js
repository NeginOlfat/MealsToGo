import React, { useState, useContext } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";

export const SearchContainer = styled.View`
  padding: ${props => props.theme.space[3]};
`;

export const Search = () => {
    const { search, keyword } = useContext(LocationContext);
    const [searchKeyword, setSearchKeyword] = useState(keyword);

    return (
        <SearchContainer>
            <Searchbar
                placeholder="Search for a location"
                value={searchKeyword}
                onChangeText={(txt) => setSearchKeyword(txt)}
                onSubmitEditing={() => search(searchKeyword)}
            />
        </SearchContainer>
    )
};