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
    const currTheme = window.localStorage.getItem('theme');
    var theme = document.getElementsByTagName('link')[0];
    if (currTheme) {
        theme.setAttribute('href', currTheme);
    }
});

const length = document.getElementsByClassName('terminalInput').length;
const input = document.getElementsByClassName('terminalInput')[length - 1];
if (input) {
    input.addEventListener('keypress', function(event) {
        if (event.key == "Enter") {
            const command = input.value;
            if (document.title == "About") {
                aboutCommand(command);
            }
            else if (document.title == 'Projects') {
                projectsCommand(command);
            }
        }
    });
}

function aboutCommand(command) {
    switch (command) {
        case 'help':
            const helpOutput = document.createElement('label');
            helpOutput.innerText = "ls: Lists names of files and directories.\n cd <directory_name>: Change directory to specified directory.\n cat <file_name>: Open specified file.";
            helpOutput.classList.add('output');
            const helpBr = document.createElement('br');
            document.getElementById('terminal').insertAdjacentElement('beforeend', helpBr);
            document.getElementById('terminal').insertAdjacentElement('beforeend', helpOutput);
            break;
        case 'ls':
            const output = document.createElement('label');
            output.classList.add('output');
            const br = document.createElement('br');
            output.innerText = "projects   experience   service   gpt   about.me"
            document.getElementById('terminal').insertAdjacentElement('beforeend', br);
            document.getElementById('terminal').insertAdjacentElement('beforeend', output);
            break;
        case 'cd projects':
            document.location.href = "portfolio.html";
            break;
        case 'cd experience':
            document.location.href = "resume.html";
            break;
        case 'cd service':
            document.location.href = "service.html";
            break;
        case 'cd gpt':
            document.location.href = "gpt.html";
            break;
        case 'cat about.me':
            const catOutput = document.getElementById('aboutParagraph').cloneNode(true);
            catOutput.classList.add('output');
            const catbr = document.createElement('br');
            document.getElementById('terminal').insertAdjacentElement('beforeend', catbr);
            document.getElementById('terminal').insertAdjacentElement('beforeend', catOutput);
            break;
        case 'cd':
        case 'cd .':
        case 'cd ..':
        case 'cat':
            break;
        default:
            const defaultOutput = document.createElement('label');
            defaultOutput.classList.add('output');
            defaultOutput.innerText = "command not found"
            const defbr = document.createElement('br');
            document.getElementById('terminal').insertAdjacentElement('beforeend', defbr);
            document.getElementById('terminal').insertAdjacentElement('beforeend', defaultOutput);
    }
    console.log('Command complete');
    newLine('guest@myles-website:~$ ');
}

function projectsCommand(command) {
    console.log("projects");
}

function newLine(currDirectory) {
    const length = document.getElementsByClassName('terminalInput').length;
    document.getElementsByClassName('terminalInput')[length - 1].disabled = true;

    const user = document.createElement('label');
    user.innerText = currDirectory;
    const terminalInput = document.createElement('input');
    terminalInput.type = 'text';
    terminalInput.className = 'terminalInput';
    user.appendChild(terminalInput);
    terminalInput.addEventListener('keypress', function(event) {
        if (event.key == "Enter") {
            const command = terminalInput.value;
            if (document.title == 'About') {
                aboutCommand(command);
            }
        }
    });

    const br = document.createElement('br');
    document.getElementById('terminal').insertAdjacentElement('beforeend', br);
    document.getElementById('terminal').insertAdjacentElement('beforeend', user);
    terminalInput.focus();
}
