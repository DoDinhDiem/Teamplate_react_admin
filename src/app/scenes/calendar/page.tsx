"use client";
import Header from "@/app/components/_components/header";
import Layout from "@/app/components/layout";
import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { formatDate } from "@fullcalendar/core";
import { Box, List, ListItem, ListItemText, Typography, useTheme } from "@mui/material";
import { tokens } from "@/app/theme";
import { EventClickArg, DateSelectArg } from "@fullcalendar/core";

const Calendar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [currentEvents, setCurrentEvents] = useState<any[]>([]);

    const handleDateClick = (arg: DateSelectArg) => {
        const title = prompt("Please enter a new title for your event");
        const calendarApi = arg.view.calendar;
        calendarApi.unselect();
        if (title) {
            calendarApi.addEvent({
                id: `${arg.startStr}-${title}`,
                title,
                start: arg.startStr,
                end: arg.endStr,
                allDay: arg.allDay,
            });
        }
    };

    const handleEventClick = (arg: EventClickArg) => {
        if (window.confirm(`Are you sure you want to delete the event '${arg.event.title}'`)) {
            arg.event.remove();
        }
    };

    return (
        <Layout>
            <Header title="CALENDAR" subtitle="Full Calendar Interactive Page" />
            <Box display="flex" justifyContent="space-between">
                <Box flex="1 1 20%" p="15px" sx={{ backgroundColor: colors.primary[600], borderRadius: "4px" }}>
                    <Typography variant="h5">Event</Typography>
                    <List>
                        {currentEvents.map((event) => (
                            <ListItem key={event.id} sx={{ backgroundColor: colors.greenAccent[500], margin: "10px 0", borderRadius: "2px" }}>
                                <ListItemText
                                    primary={event.title}
                                    secondary={
                                        <Typography>
                                            {formatDate(event.start, {
                                                year: "numeric",
                                                month: "short",
                                                day: "numeric",
                                            })}
                                        </Typography>
                                    }
                                />
                            </ListItem>
                        ))}
                    </List>
                </Box>
                <Box flex="1 1 100%" ml="15px">
                    <FullCalendar
                        height="75vh"
                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
                        headerToolbar={{
                            left: "prev, next today",
                            center: "title",
                            right: "dayGridMonth, timeGridWeek, timeGridDay, listMonth",
                        }}
                        initialView="dayGridMonth"
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        select={handleDateClick}
                        eventClick={handleEventClick}
                        eventsSet={(events) => setCurrentEvents(events)} // Assuming events are correctly typed
                        initialEvents={[
                            { id: "1234", title: "All-day event", start: "2024-07-02" },
                            { id: "4321", title: "Timed event", start: "2024-07-01" },
                        ]}
                    />
                </Box>
            </Box>
        </Layout>
    );
};

export default Calendar;
