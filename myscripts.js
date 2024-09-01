const button = document.getElementById('ToggleButton');
const plainSite = document.getElementById("plainSite");
const terminalSite = document.getElementById("terminalSite");

button.addEventListener('click', function() {
    var theme = document.getElementsByTagName('link')[0];
    if (theme.getAttribute('href') == 'plain.css') { 
        theme.setAttribute('href', 'terminal.css'); 
    } else { 
        theme.setAttribute('href', 'plain.css'); 
    } 
});

const input = document.getElementById("terminalInput");
input.addEventListener('keypress', function(event) {
    if (event.key == "Enter") {
        const command = input.value;
        handleCommand(command);
    }
})

function handleCommand(command) {
    switch (command) {
        case 'ls':
            console.log("ls");
    }
}

