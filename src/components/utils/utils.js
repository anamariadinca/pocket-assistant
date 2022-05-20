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

export {fetchCall}