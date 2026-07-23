import React from "react";
import { Tabs, Tab } from "@mui/material";

function CustomTabs({ genres, value, handleChange }) {
    return (
        <Tabs
            value={value}
            onChange={handleChange}
            textColor="inherit"
            indicatorColor="secondary"
            variant="scrollable"
            scrollButtons="auto"
        >
            <Tab
                label="All"
                value="all"
            />

            {genres.map((genre) => (
                <Tab
                    key={genre.key}
                    label={genre.label}
                    value={genre.key}
                />
            ))}
        </Tabs>
    );
}

export default CustomTabs;