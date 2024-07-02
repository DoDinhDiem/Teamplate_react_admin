"use client";
import React from "react";
import Header from "@/app/components/_components/header";
import Layout from "@/app/components/layout";
import { Box, Typography, colors, useTheme } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { tokens } from "@/app/theme";
import { mockDataTeam } from "@/data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";

type RowData = {
    id: number;
    name: string;
    age: number;
    phone: string;
    email: string;
    access: "admin" | "manager" | "user";
};

const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns: GridColDef[] = [
        { field: "id", headerName: "ID", type: "number" },
        { field: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell" },
        { field: "age", headerName: "Age", type: "number", headerAlign: "left", align: "left" },
        { field: "phone", headerName: "Phone Number", flex: 1 },
        { field: "email", headerName: "Email", flex: 1 },
        {
            field: "access",
            headerName: "Access Level",
            flex: 1,
            renderCell: ({ row }) => {
                const { access } = row as RowData;
                let icon;
                switch (access) {
                    case "admin":
                        icon = <AdminPanelSettingsOutlinedIcon />;
                        break;
                    case "manager":
                        icon = <SecurityOutlinedIcon />;
                        break;
                    case "user":
                        icon = <LockOpenOutlinedIcon />;
                        break;
                    default:
                        icon = null;
                }
                return (
                    <Box
                        width="60%"
                        m="0 auto"
                        p="5px"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        sx={{
                            backgroundColor: access === "admin" ? colors.greenAccent[400] : access === "manager" ? colors.greenAccent[300] : colors.greenAccent[300],
                            borderRadius: "4px",
                        }}>
                        {icon}
                        <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                            {access}
                        </Typography>
                    </Box>
                );
            },
        },
    ];
    return (
        <Layout>
            <Box>
                <Header title="Team" subtitle="Managing the Team Members" />
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
                    }}>
                    <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} />
                </Box>
            </Box>
        </Layout>
    );
};

export default Team;
