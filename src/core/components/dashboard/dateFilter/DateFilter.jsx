import React, { useState, useRef } from "react";
import "./dateFilter.scss";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

const DateFilter = ({ onDateChange }) => {
    const [selectedOption, setSelectedOption] = useState("Last Month");
    const [fromDate, setFromDate] = useState(dayjs('2025-08-01'));
    const [toDate, setToDate] = useState(dayjs('2025-08-31'));
    const [openPicker, setOpenPicker] = useState(false);

    const iconRef = useRef(null); // anchor for Popper

    const filterOptions = [
        "Today", "Yesterday", "This Week", "Last Week",
        "This Month", "Last Month", "This Quarter", "Last Quarter",
        "This Year", "Last Year"
    ];

    const handleOptionChange = (event, value) => {
        setSelectedOption(value);

        let newFrom = dayjs('2025-09-01');
        let newTo = dayjs('2025-09-22');

        if (value === "Last Month") {
            newFrom = dayjs('2025-08-01');
            newTo = dayjs('2025-08-31');
        }

        setFromDate(newFrom);
        setToDate(newTo);
        onDateChange && onDateChange({
            from: newFrom.format('DD/MMM/YYYY'),
            to: newTo.format('DD/MMM/YYYY')
        });
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className="dateFilterContainer">
                <div className="selectWrapper">
                    <Autocomplete
                        disablePortal
                        options={filterOptions}
                        value={selectedOption}
                        onChange={handleOptionChange}
                        renderInput={(params) => (
                            <TextField {...params} label="Select" size="small" />
                        )}
                        sx={{ width: 200 }}
                    />
                </div>

                <div className="dateBox">
                    <span>{fromDate.format('DD/MMM/YYYY')} – {toDate.format('DD/MMM/YYYY')}</span>
                    <div className="calendarWrapper" ref={iconRef}>
                        <CalendarTodayIcon
                            className="calendarIcon"
                            onClick={() => setOpenPicker(true)}
                        />
                        {/* <DesktopDatePicker
                            open={openPicker}
                            onClose={() => setOpenPicker(false)}
                            value={fromDate}
                            onChange={(newValue) => {
                                setFromDate(newValue);
                                onDateChange && onDateChange({
                                    from: newValue.format('DD/MMM/YYYY'),
                                    to: toDate.format('DD/MMM/YYYY'),
                                });
                            }}
                            PopperProps={{
                                anchorEl: iconRef.current,
                                placement: "bottom-end",
                            }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    sx={{
                                        display: 'none',
                                    }}
                                />
                            )}
                        /> */}
                    </div>
                </div>
            </div>
        </LocalizationProvider>
    );
};

export default DateFilter;
