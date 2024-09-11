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
    console.log('About command complete');
    newLine('guest@myles-website:~/projects$ ');
}

function projectsCommand(command) {
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
            output.innerText = "wordle.pro   pantry_pal.pro   cpu.pro"
            document.getElementById('terminal').insertAdjacentElement('beforeend', br);
            document.getElementById('terminal').insertAdjacentElement('beforeend', output);
            break;
        case 'cat wordle.pro':
            const wordleOutput = document.getElementById('project3text').cloneNode(true);
            const wordleGithub = document.createElement('a');
            wordleGithub.href = "https://github.com/murphymy04/Wordle-Project";
            wordleGithub.target = "_blank";
            wordleGithub.rel = "noopener noreferrer";
            wordleGithub.innerText = "GitHub";
            wordleOutput.classList.add('output');
            const wordlebr = document.createElement('br');
            document.getElementById('terminal').insertAdjacentElement('beforeend', wordlebr);
            document.getElementById('terminal').insertAdjacentElement('beforeend', wordleOutput);
            document.getElementById('terminal').insertAdjacentElement('beforeend', wordleGithub);
            break;
        case 'cat pantry_pal.pro':
            const pantryOutput = document.getElementById('project2text').cloneNode(true);
            pantryOutput.classList.add('output');
            const pantryGithub = document.createElement('a');
            pantryGithub.href = "https://github.com/murphymy04/Pantry-Pal";
            pantryGithub.innerText = "GitHub";
            pantryGithub.target = "_blank";
            pantryGithub.rel = "noopener noreferrer";
            const pantryLink = document.createElement('a');
            pantryLink.innerText = "Deployed Link";
            pantryLink.href = "https://pantry-pal-mhvj.onrender.com";
            pantryLink.target = "_blank";
            pantryLink.rel = "noopener noreferrer";
            const pantrybr = document.createElement('br');
            document.getElementById('terminal').insertAdjacentElement('beforeend', pantrybr);
            document.getElementById('terminal').insertAdjacentElement('beforeend', pantryOutput);
            document.getElementById('terminal').insertAdjacentElement('beforeend', pantryGithub);
            document.getElementById('terminal').insertAdjacentElement('beforeend', pantrybr);
            document.getElementById('terminal').insertAdjacentElement('beforeend', pantryLink);
            break;
        case 'cat cpu.pro':
            const cpuOutput = document.getElementById('project1text').cloneNode(true);
            cpuOutput.classList.add('output');
            const cpubr = document.createElement('br');
            document.getElementById('terminal').insertAdjacentElement('beforeend', cpubr);
            document.getElementById('terminal').insertAdjacentElement('beforeend', cpuOutput);
            break;
        case 'cd ..':
            document.location.href = "index.html";
            break;
        case 'cd':
        case 'cd .':
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

    console.log('Projects command complete');
    newLine('guest@myles-website:~/projects$ ');
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
            else if (document.title == 'Projects') {
                projectsCommand(command);
            }
        }
    });

    const br = document.createElement('br');
    document.getElementById('terminal').insertAdjacentElement('beforeend', br);
    document.getElementById('terminal').insertAdjacentElement('beforeend', user);
    terminalInput.focus();
}
