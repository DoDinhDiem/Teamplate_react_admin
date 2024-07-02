"use client";
import React from "react";
import Header from "@/app/components/_components/header";
import { Box, useTheme, Typography } from "@mui/material";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "@/app/theme";
import { mockDataInvoices } from "@/data/mockData";
import Layout from "@/app/components/layout";

// Mark the Page component as a client component
const Invoices = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns: GridColDef[] = [
        { field: "id", headerName: "ID", type: "number", flex: 0.5 },
        { field: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell" },
        { field: "age", headerName: "Age", type: "number", headerAlign: "left", align: "left" },
        { field: "phone", headerName: "Phone Number", flex: 1 },
        { field: "email", headerName: "Email", flex: 1 },
        { field: "cost", headerName: "Cost", flex: 1, renderCell: (params) => <Typography color={colors.greenAccent[500]}>${params.row.cost}</Typography> },
        { field: "date", headerName: "Date", flex: 1 },
    ];
    return (
        <Layout>
            <Header title="INVOICES" subtitle="List of Invoice Balances" />
            <Box
                mt={4}
                height="80vh"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                    },
                    "& .name-column--cell": {
                        color: colors.greenAccent[300],
                    },
                    "& .MuiDataGrid-columnHeader": {
                        backgroundColor: colors.blueAccent[300],
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[600],
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.blueAccent[300],
                    },
                    "& .MuiCheckbox-root": {
                        color: `${colors.greenAccent[800]} !important`,
                    },
                }}>
                <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} slots={{ toolbar: GridToolbar }} />
            </Box>
        </Layout>
    );
};

export default Invoices;
