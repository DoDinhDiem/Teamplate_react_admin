"use client";
import Header from "@/app/components/_components/header";
import PieChart from "@/app/components/_components/pie-chart";
import Layout from "@/app/components/layout";
import { Box } from "@mui/material";
import React from "react";

const Pie = () => {
    return (
        <Layout>
            <Header title="Pie Chart" subtitle="Simple Pie Chart" />
            <Box height="75vh">
                <PieChart />
            </Box>
        </Layout>
    );
};

export default Pie;
