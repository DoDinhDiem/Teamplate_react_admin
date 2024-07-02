"use client";
import BarChart from "@/app/components/_components/bar-chart";
import Header from "@/app/components/_components/header";
import Layout from "@/app/components/layout";
import { Box } from "@mui/material";
import React from "react";

const Bar = () => {
    return (
        <Layout>
            <Header title="BAR CHART" subtitle="Simple Bar Chart" />
            <Box height="75vh">
                <BarChart />
            </Box>
        </Layout>
    );
};

export default Bar;
