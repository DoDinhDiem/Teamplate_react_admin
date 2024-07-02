"use client";
import GeographyChart from "@/app/components/_components/geography-chart";
import Header from "@/app/components/_components/header";
import Layout from "@/app/components/layout";
import { tokens } from "@/app/theme";
import { Box, useTheme } from "@mui/material";
import React from "react";

const Geography = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Layout>
            <Header title="Geography" subtitle="Simple Geography Chart" />

            <Box height="75vh" border={`1px solid ${colors.grey[100]}`} borderRadius="4px">
                <GeographyChart />
            </Box>
        </Layout>
    );
};

export default Geography;
