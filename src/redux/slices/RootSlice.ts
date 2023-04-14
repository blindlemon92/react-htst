import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: "Name",
        country_of_origin: "Country of Origin",
        description: "Description",
        flavor_profile: "Flavor Profile",
    },

    reducers: {
        chooseName: (state, action) => {
            state.name = action.payload
        },
        chooseCountryOfOrigin: (state, action) => {
            state.country_of_origin = action.payload
        },
        chooseDescription: (state, action) => {
            state.description = action.payload
        },
        chooseFlavorProfile: (state, action) => {
            state.flavor_profile = action.payload
        },
}})
export const reducer = rootSlice.reducer;
export const { chooseName, chooseCountryOfOrigin, chooseDescription, chooseFlavorProfile } = rootSlice.actions;

