const button = document.getElementById('ToggleButton');
const plainSite = document.getElementById("plainSite");
const terminalSite = document.getElementById("terminalSite");

button.addEventListener('click', function() {
    var theme = document.getElementsByTagName('link')[0];
    if (theme.getAttribute('href') == 'plain.css') { 
        theme.setAttribute('href', 'terminal.css'); 
        localStorage.setItem('theme', 'terminal.css');
    } else { 
        localStorage.setItem('theme', 'plain.css');
        theme.setAttribute('href', 'plain.css'); 
    } 
});

window.addEventListener('load', function() {
    const currTheme = this.localStorage.getItem('theme');
    var theme = document.getElementsByTagName('link')[0];
    theme.setAttribute('href', currTheme);
});

const length = document.getElementsByClassName('terminalInput').length;
const input = document.getElementsByClassName('terminalInput')[length - 1];
input.addEventListener('keypress', function(event) {
    if (event.key == "Enter") {
        const command = input.value;
        handleCommand(command);
    }
});

function handleCommand(command) {
    switch (command) {
        case 'help':
            console.log("help");
            break;
        case 'ls':
            const output = document.createElement('label');
            const br = document.createElement('br');
            output.innerText = "portfolio   qualifications   service   gpt"
            document.getElementById('terminal').insertAdjacentElement('beforeend', br);
            document.getElementById('terminal').insertAdjacentElement('beforeend', output);
            break;
        case 'cd portfolio':
            document.location.href = "portfolio.html";
            break;
        case 'cd resume':
            document.location.href = "resume.html";
            break;
        case 'cd service':
            document.location.href = "service.html";
            break;
        case 'cd gpt':
            document.location.href = "gpt.html";
            break;
    }
    console.log('Command complete');
    
    const length = document.getElementsByClassName('terminalInput').length;
    document.getElementsByClassName('terminalInput')[length - 1].disabled = true;

    const user = document.createElement('label');
    user.innerText = 'guest@myles-portfolio:~$ ';
    const terminalInput = document.createElement('input');
    terminalInput.type = 'text';
    terminalInput.className = 'terminalInput';
    user.appendChild(terminalInput);
    terminalInput.addEventListener('keypress', function(event) {
        if (event.key == "Enter") {
            const command = terminalInput.value;
            handleCommand(command);
        }
    });

    const br = document.createElement('br');
    document.getElementById('terminal').insertAdjacentElement('beforeend', br);
    document.getElementById('terminal').insertAdjacentElement('beforeend', user);

}

