function fetchCall(url, body, href) {

    return fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: body
    }).then(response => {
        const status = response.status
        if (status === 200) {
            console.log("SUCCESSS")
            window.location.href = href;
        } else if (status === 400) {
            document.getElementById("submitButton").disabled = false
            console.log("SOMETHING WENT WRONG")
            response.json().then(json => {
                alert(json.message)
                console.log(json);
            })
                .catch(error => {
                    console.log(error)
                    // handle error
                });
        } else if (status === 500) {
            document.getElementById("submitButton").disabled = false
            console.log("SOMETHING WENT WRONG")
            response.json().then(json => {
                alert(json.message)
                console.log(json);
            })
                .catch(error => {
                    console.log(error)
                    // handle error
                });
        }
    })
}

export function makeButtonPending() {
    document.getElementById("submitButton").style.background = 'rgba(85,88,96,0.51)'
    document.getElementById("submitButton").type = "button"
    document.getElementById("submitButton").style.cursor = "progress"
}

export function resetButtonStyle() {
    document.getElementById("submitButton").style.background = ''
    document.getElementById("submitButton").type = "submit"
    document.getElementById("submitButton").style.cursor = "pointer"
}

function prepend(value, array) {
    let newArray = array.slice();
    newArray.unshift(value);
    return newArray;
}

export function validateInfo(values) {
    let errors = {}

    if (!values.email.trim()) {
        errors.email = "Adresa email nu poate fi goală"
    } else if(!/^[a-zA-Z]{2,50}@upb.ro$|ana.maria.dinca.1411@gmail.com|ana_maria.dinca@stud.etti.upb.ro/i.test(values.email)) {
        errors.email = "Adresă email invalidă"
    }

    if (!values.phoneNumber.trim()) {
        errors.phoneNumber = "Numărul de telefon nu poate fi gol"
    } else if(!/^\+407[0-9]{8}$|^07[0-9]{8}$/i.test(values.phoneNumber)) {
        errors.phoneNumber = "Numărul de teleofn este invalid invalid"
    }

    if (values.surname != null && !values.surname.trim()) {
        errors.surname = "Numele nu poate fi gol"
    }

    if (values.givenName != null && !values.givenName.trim()) {
        errors.givenName = "Prenumele nu poate fi gol"
    }

    return errors;
}

export {fetchCall, prepend}