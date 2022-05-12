function getScheduleForDay(day) {
    let sch = null;
    scheduleForDays.map(function (value) {
        if (value.day === day) {
            sch = value.schedule
        }
    });
    if (sch === null) {
        sch = [
            {hour: '08-09', specialisation: '', group: '', room: '', subject: ''},
            {hour: '09-10', specialisation: '', group: '', room: '', subject: ''},
            {hour: '10-11', specialisation: '', group: '', room: '', subject: ''},
            {hour: '11-12', specialisation: '', group: '', room: '', subject: ''},
            {hour: '12-13', specialisation: '', group: '', room: '', subject: ''},
            {hour: '13-14', specialisation: '', group: '', room: '', subject: ''},
            {hour: '14-15', specialisation: '', group: '', room: '', subject: ''},
            {hour: '15-16', specialisation: '', group: '', room: '', subject: ''},
            {hour: '16-17', specialisation: '', group: '', room: '', subject: ''},
            {hour: '17-18', specialisation: '', group: '', room: '', subject: ''},
            {hour: '18-19', specialisation: '', group: '', room: '', subject: ''},
            {hour: '19-20', specialisation: '', group: '', room: '', subject: ''},
            {hour: '20-21', specialisation: '', group: '', room: '', subject: ''}]
    }
    return sch
}

export {getScheduleForDay}

let scheduleForDays = [
    {
        day: "10.05",
        schedule: [
            {hour: '08-09', specialisation: '', group: '', room: '', subject: ''},
            {hour: '09-10', specialisation: '', group: '', room: '', subject: ''},
            {hour: '10-11', specialisation: '', group: '', room: '', subject: ''},
            {hour: '11-12', specialisation: 'G', group: '-', room: 'A103', subject: 'Fizică 2'},
            {hour: '12-13', specialisation: 'G', group: '-', room: 'A103', subject: 'Fizică 2'},
            {hour: '13-14', specialisation: 'C', group: '-', room: 'A103', subject: 'MC'},
            {hour: '14-15', specialisation: 'C', group: '-', room: 'A103', subject: 'MC'},
            {hour: '15-16', specialisation: 'E', group: '432E', room: 'B204', subject: 'SS l'},
            {hour: '16-17', specialisation: 'E', group: '432E', room: 'B204', subject: 'SS l'},
            {hour: '17-18', specialisation: 'E', group: '432E', room: 'B204', subject: 'SS l'},
            {hour: '18-19', specialisation: '', group: '', room: '', subject: ''},
            {hour: '19-20', specialisation: '', group: '', room: '', subject: ''},
            {hour: '20-21', specialisation: '', group: '', room: '', subject: ''}]
    },
    {
        day: "11.05",
        schedule: [
            {hour: '08-09', specialisation: '', group: '', room: '', subject: ''},
            {hour: '09-10', specialisation: '', group: '', room: '', subject: ''},
            {hour: '10-11', specialisation: '', group: '', room: '', subject: ''},
            {hour: '11-12', specialisation: 'F', group: '413F', room: 'B32', subject: 'AM2'},
            {hour: '12-13', specialisation: 'F', group: '413F', room: 'B32', subject: 'AM2'},
            {hour: '13-14', specialisation: 'C', group: '-', room: 'A103', subject: 'MC'},
            {hour: '14-15', specialisation: 'C', group: '-', room: 'A103', subject: 'MC'},
            {hour: '15-16', specialisation: 'E', group: '432E', room: 'B204', subject: 'SS l'},
            {hour: '16-17', specialisation: 'E', group: '432E', room: 'B204', subject: 'SS l'},
            {hour: '17-18', specialisation: 'E', group: '432E', room: 'B204', subject: 'SS l'},
            {hour: '18-19', specialisation: '', group: '', room: '', subject: ''},
            {hour: '19-20', specialisation: '', group: '', room: '', subject: ''},
            {hour: '20-21', specialisation: '', group: '', room: '', subject: ''}]
    },
    {
        day: "12.05",
        schedule: [
            {hour: '08-09', specialisation: '', group: '', room: '', subject: ''},
            {hour: '09-10', specialisation: '', group: '', room: '', subject: ''},
            {hour: '10-11', specialisation: '', group: '', room: '', subject: ''},
            {hour: '11-12', specialisation: 'A/B', group: '412A', room: 'A101', subject: 'SS/ASC'},
            {hour: '12-13', specialisation: 'A/B', group: '412A', room: 'A101', subject: 'SS/ASC'},
            {hour: '13-14', specialisation: 'C', group: '-', room: 'A103', subject: 'MC'},
            {hour: '14-15', specialisation: 'C', group: '-', room: 'A103', subject: 'MC'},
            {hour: '15-16', specialisation: 'E', group: '432E', room: 'B204', subject: 'SS l'},
            {hour: '16-17', specialisation: 'E', group: '432E', room: 'B204', subject: 'SS l'},
            {hour: '17-18', specialisation: 'E', group: '432E', room: 'B204', subject: 'SS l'},
            {hour: '18-19', specialisation: '', group: '', room: '', subject: ''},
            {hour: '19-20', specialisation: '', group: '', room: '', subject: ''},
            {hour: '20-21', specialisation: '', group: '', room: '', subject: ''}]
    },
    {
        day: "13.05",
        schedule: [
            {hour: '08-09', specialisation: '', group: '', room: '', subject: ''},
            {hour: '09-10', specialisation: '', group: '', room: '', subject: ''},
            {hour: '10-11', specialisation: '', group: '', room: '', subject: ''},
            {hour: '11-12', specialisation: 'G', group: '-', room: 'A103', subject: 'Fizică 2'},
            {hour: '12-13', specialisation: 'G', group: '-', room: 'A103', subject: 'Fizică 2'},
            {hour: '13-14', specialisation: 'C', group: '-', room: 'A103', subject: 'MC'},
            {hour: '14-15', specialisation: 'C', group: '-', room: 'A103', subject: 'MC'},
            {hour: '15-16', specialisation: 'E', group: '432E', room: 'B204', subject: 'SS l'},
            {hour: '16-17', specialisation: 'E', group: '432E', room: 'B204', subject: 'SS l'},
            {hour: '17-18', specialisation: 'E', group: '432E', room: 'B204', subject: 'SS l'},
            {hour: '18-19', specialisation: '', group: '', room: '', subject: ''},
            {hour: '19-20', specialisation: '', group: '', room: '', subject: ''},
            {hour: '20-21', specialisation: '', group: '', room: '', subject: ''}]
    },
    {
        day: "14.05",
        schedule: [
            {hour: '08-09', specialisation: '', group: '', room: '', subject: ''},
            {hour: '09-10', specialisation: '', group: '', room: '', subject: ''},
            {hour: '10-11', specialisation: '', group: '', room: '', subject: ''},
            {hour: '11-12', specialisation: 'G', group: '-', room: 'A103', subject: 'Fizică 2'},
            {hour: '12-13', specialisation: 'G', group: '-', room: 'A103', subject: 'Fizică 2'},
            {hour: '13-14', specialisation: 'C', group: '-', room: 'A103', subject: 'MC'},
            {hour: '14-15', specialisation: 'C', group: '-', room: 'A103', subject: 'MC'},
            {hour: '15-16', specialisation: 'E', group: '432E', room: 'B204', subject: 'SS l'},
            {hour: '16-17', specialisation: 'E', group: '432E', room: 'B204', subject: 'SS l'},
            {hour: '17-18', specialisation: 'E', group: '432E', room: 'B204', subject: 'SS l'},
            {hour: '18-19', specialisation: '', group: '', room: '', subject: ''},
            {hour: '19-20', specialisation: '', group: '', room: '', subject: ''},
            {hour: '20-21', specialisation: '', group: '', room: '', subject: ''}]
    }

]