import Header from "@/app/components/_components/header";
import LineChart from "@/app/components/_components/line-chart";
import Layout from "@/app/components/layout";
import { Box } from "@mui/material";
import React from "react";

const Line = () => {
    return (
        <Layout>
            <Header title="Line Chart" subtitle="Simple Line Chart" />
            <Box height="75vh">
                <LineChart />
            </Box>
        </Layout>
    );
};

export default Line;
