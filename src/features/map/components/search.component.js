import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";

import { LocationContext } from "../../../services/location/location.context";

export const SearchContainer = styled.View`
  padding: ${props => props.theme.space[3]};
  position: absolute;
  z-index: 999;
  width: 100%;
  top: 40px;
`;

export const Search = () => {
    const { search, keyword } = useContext(LocationContext);
    const [searchKeyword, setSearchKeyword] = useState(keyword);

    useEffect(() => {
        setSearchKeyword(keyword)
    }, []);

    return (
        <SearchContainer>
            <Searchbar
                placeholder="Search for a location"
                icon="map"
                value={searchKeyword}
                onChangeText={(txt) => setSearchKeyword(txt)}
                onSubmitEditing={() => search(searchKeyword)}
            />
        </SearchContainer>
    )
};