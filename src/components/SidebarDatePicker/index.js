import React, {useState} from 'react'
import Grid from '@material-ui/core/Grid'
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'

import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import Button from "@material-ui/core/Button"

export default  function SidebarDateSelect(props) {
    const [startDate, setStartDate] = useState('2019-12-01')
    const [endDate, setEndDate] = useState('2019-12-31')

    const handleStartDateChange = date => {
        setStartDate(date)
    }

    const handleEndDateChange = date => {
        setEndDate(date)
    }

    return (
        <MuiPickersUtilsProvider setDate={props.setDate} utils={DateFnsUtils}>
            <Grid container justify="space-around">
                <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Start Date"
                    value={startDate}
                    onChange={setStartDate}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
                <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="End Date"
                    value={endDate}
                    onChange={setEndDate}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
                <Button onClick={() => props.setDate({start:startDate.toString(), end:endDate.toString()})}>Update Dates</Button>
                <div date={startDate}>{JSON.stringify(startDate)}</div>
                <div date={startDate}>{JSON.stringify(endDate)}</div>
            </Grid>
        </MuiPickersUtilsProvider>
    )
}