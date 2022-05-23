function moveScheduleForm(open) {

    function elementExists(id) {
        return document.getElementById(id) != null;
    }
    function getElementById(id) {
        return document.getElementById(id);
    }

    if (elementExists("scheduletable")) {
        let width = getElementById("scheduletable").offsetWidth;
        if (!open) {
            getElementById("scheduletable").style.marginLeft = 'calc((100% - ' + width + 'px + 170px)/2)';
            document.getElementById("buttonreserve").style.marginLeft = 'calc(40% + 85px)';
        } else {
            getElementById("scheduletable").style.marginLeft = 'calc((100% - ' + width + 'px)/2)';
            document.getElementById("buttonreserve").style.marginLeft = '40%';
        }
    }

    if (elementExists("facultytable")) {
        let width = getElementById("facultytable").offsetWidth;
        if (!open) {
            getElementById("facultytable").style.marginLeft = 'calc((100% - ' + width + 'px + 170px)/2)';
        } else {
            getElementById("facultytable").style.marginLeft = 'calc((100% - ' + width + 'px)/2)';
        }
    }
    if(elementExists("imageid")) {
        if(!open) {
            getElementById("imageid").style.left = 'calc(50%)';
        } else {
            getElementById("imageid").style.left = 'calc((100% - 170px) / 2)';
        }
    }
    if (elementExists("scheddropdown")) {
        if (!open) {
            getElementById("scheddropdown").style.left = 'calc((100% + 170px)/2)';
        } else {
            getElementById("scheddropdown").style.left = '50%';

        }
    }
    if (elementExists("professordropdown")) {
        if (!open) {
            getElementById("professordropdown").style.marginLeft = 'calc((100% - 60px)/2)';
        } else {
            getElementById("professordropdown").style.marginLeft = 'calc((100% - 230px)/2)';

        }
    }
    if (elementExists("textreserveroom")) {
        if (!open) {
            getElementById("textreserveroom").style.marginLeft = 'calc((60% + 170px)/2)';
        } else {
            getElementById("textreserveroom").style.marginLeft = '30%';

        }
    }
    if (elementExists("profInfo")) {
        if (!open) {
            getElementById("profInfo").style.marginLeft = 'calc((60% + 170px)/2)';
        } else {
            getElementById("profInfo").style.marginLeft = '30%';

        }
    }
    if (document.getElementsByClassName("react-datepicker-wrapper").length > 0) {
        if (!open) {
            document.getElementsByClassName("react-datepicker-wrapper")[0].style.marginLeft = 'calc((100% - 230px)/2)';
        } else {
            document.getElementsByClassName("react-datepicker-wrapper")[0].style.marginLeft = 'calc((100% - 400px)/2)';

        }
    }
}

export {moveScheduleForm}