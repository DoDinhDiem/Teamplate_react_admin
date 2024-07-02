"use client";
import React from "react";
import Header from "@/app/components/_components/header";
import { Box, useTheme } from "@mui/material";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "@/app/theme";
import { mockDataContacts } from "@/data/mockData";
import Layout from "@/app/components/layout";

// Mark the Page component as a client component
const Contact = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns: GridColDef[] = [
        { field: "id", headerName: "ID", type: "number", flex: 0.5 },
        { field: "registrarId", headerName: "Registrar ID", type: "number", flex: 0.5 },

        { field: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell" },
        { field: "age", headerName: "Age", type: "number", headerAlign: "left", align: "left" },
        { field: "phone", headerName: "Phone Number", flex: 1 },
        { field: "email", headerName: "Email", flex: 1 },
        { field: "address", headerName: "Address", flex: 1 },
        { field: "city", headerName: "City", flex: 1 },
        { field: "zipCode", headerName: "ZipCode", flex: 1 },
    ];
    return (
        <Layout>
            <Header title="CONTACT" subtitle="List of Contacts for Future Referece" />
            <Box
                mt={4}
                height="75vh"
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
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: `${colors.grey[900]} !important`,
                    },
                }}>
                <DataGrid rows={mockDataContacts} columns={columns} slots={{ toolbar: GridToolbar }} />
            </Box>
        </Layout>
    );
};

export default Contact;
