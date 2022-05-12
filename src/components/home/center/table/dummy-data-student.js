function getScheduleForDay(day) {
    let sch = null;
    scheduleForDays.map(function (value) {
        if (value.day === day) {
            sch = value.schedule
        }
    });
    if (sch === null) {
        sch = [
            {hour: '08-09', room: '', subject: ''},
            {hour: '09-10', room: '', subject: ''},
            {hour: '10-11', room: '', subject: ''},
            {hour: '11-12', room: '', subject: ''},
            {hour: '12-13', room: '', subject: ''},
            {hour: '13-14', room: '', subject: ''},
            {hour: '14-15', room: '', subject: ''},
            {hour: '15-16', room: '', subject: ''},
            {hour: '16-17', room: '', subject: ''},
            {hour: '17-18', room: '', subject: ''},
            {hour: '18-19', room: '', subject: ''},
            {hour: '19-20', room: '', subject: ''},
            {hour: '20-21', room: '', subject: ''}]
    }
    return sch
}

export {getScheduleForDay}

let scheduleForDays = [
    {
        day: "10.05",
        schedule: [
            {hour: '08-09', room: '', subject: ''},
            {hour: '09-10', room: '', subject: ''},
            {hour: '10-11', room: '', subject: ''},
            {hour: '11-12', room: 'A101', subject: 'SS (c)/ASC (c)'},
            {hour: '12-13', room: 'A101', subject: 'SS (c)/ASC (c)'},
            {hour: '13-14', room: 'B206', subject: 'MC (c)'},
            {hour: '14-15', room: 'B206', subject: 'MC (c)'},
            {hour: '15-16', room: 'B204', subject: 'SS (l)'},
            {hour: '16-17', room: 'B204', subject: 'SS (l)'},
            {hour: '17-18', room: 'B204', subject: 'SS (l)'},
            {hour: '18-19', room: '', subject: ''},
            {hour: '19-20', room: '', subject: ''},
            {hour: '20-21', room: '', subject: ''}]
    },
    {
        day: "11.05",
        schedule: [
            {hour: '08-09', room: '', subject: ''},
            {hour: '09-10', room: '', subject: ''},
            {hour: '10-11', room: '', subject: ''},
            {hour: '11-12', room: 'A101', subject: 'SS (c)/ASC (c)'},
            {hour: '12-13', room: 'A101', subject: 'SS (c)/ASC (c)'},
            {hour: '13-14', room: 'B206', subject: 'MC (c)'},
            {hour: '14-15', room: 'B206', subject: 'MC (c)'},
            {hour: '15-16', room: 'B204', subject: 'SS (l)'},
            {hour: '16-17', room: 'B204', subject: 'SS (l)'},
            {hour: '17-18', room: 'B204', subject: 'SS (l)'},
            {hour: '18-19', room: '', subject: ''},
            {hour: '19-20', room: '', subject: ''},
            {hour: '20-21', room: '', subject: ''}]
    },
    {
        day: "12.05",
        schedule: [
            {hour: '08-09', room: '', subject: ''},
            {hour: '09-10', room: '', subject: ''},
            {hour: '10-11', room: '', subject: ''},
            {hour: '11-12', room: 'A101', subject: 'SS (c)/ASC (c)'},
            {hour: '12-13', room: 'A101', subject: 'SS (c)/ASC (c)'},
            {hour: '13-14', room: 'B206', subject: 'MC (c)'},
            {hour: '14-15', room: 'B206', subject: 'MC (c)'},
            {hour: '15-16', room: 'B204', subject: 'SS (l)'},
            {hour: '16-17', room: 'B204', subject: 'SS (l)'},
            {hour: '17-18', room: 'B204', subject: 'SS (l)'},
            {hour: '18-19', room: '', subject: ''},
            {hour: '19-20', room: '', subject: ''},
            {hour: '20-21', room: '', subject: ''}]
    },
    {
        day: "13.05",
        schedule: [
            {hour: '08-09', room: '', subject: ''},
            {hour: '09-10', room: '', subject: ''},
            {hour: '10-11', room: '', subject: ''},
            {hour: '11-12', room: 'A101', subject: 'SS (c)/ASC (c)'},
            {hour: '12-13', room: 'A101', subject: 'SS (c)/ASC (c)'},
            {hour: '13-14', room: 'B206', subject: 'MC (c)'},
            {hour: '14-15', room: 'B206', subject: 'MC (c)'},
            {hour: '15-16', room: 'B204', subject: 'SS (l)'},
            {hour: '16-17', room: 'B204', subject: 'SS (l)'},
            {hour: '17-18', room: 'B204', subject: 'SS (l)'},
            {hour: '18-19', room: '', subject: ''},
            {hour: '19-20', room: '', subject: ''},
            {hour: '20-21', room: '', subject: ''}]
    },
    {
        day: "14.05",
        schedule: [
            {hour: '08-09', room: '', subject: ''},
            {hour: '09-10', room: '', subject: ''},
            {hour: '10-11', room: '', subject: ''},
            {hour: '11-12', room: 'A101', subject: 'SS (c)/ASC (c)'},
            {hour: '12-13', room: 'A101', subject: 'SS (c)/ASC (c)'},
            {hour: '13-14', room: 'B206', subject: 'MC (c)'},
            {hour: '14-15', room: 'B206', subject: 'MC (c)'},
            {hour: '15-16', room: 'B204', subject: 'SS (l)'},
            {hour: '16-17', room: 'B204', subject: 'SS (l)'},
            {hour: '17-18', room: 'B204', subject: 'SS (l)'},
            {hour: '18-19', room: '', subject: ''},
            {hour: '19-20', room: '', subject: ''},
            {hour: '20-21', room: '', subject: ''}]
    }

]