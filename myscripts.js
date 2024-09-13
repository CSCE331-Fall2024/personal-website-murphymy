const button = document.getElementById('ToggleButton');
const plainSite = document.getElementById("plainSite");
const terminalSite = document.getElementById("terminalSite");

button.addEventListener('click', function() {
    var theme = document.getElementsByTagName('link')[0];
    if (theme.getAttribute('href') == 'plain.css') { 
        theme.setAttribute('href', 'terminal.css'); 
        localStorage.setItem('theme', 'terminal.css');
        localStorage.setItem('button', 'Leave Terminal Mode');
        const styleButton = document.getElementById('ToggleButton');
        styleButton.innerText = "Leave Terminal Mode";
    } else { 
        localStorage.setItem('theme', 'plain.css');
        localStorage.setItem('button', 'Terminal Mode');
        theme.setAttribute('href', 'plain.css'); 
        const styleButton = document.getElementById('ToggleButton');
        styleButton.innerText = "Terminal Mode";
    } 
});

window.addEventListener('load', function() {
    const currTheme = window.localStorage.getItem('theme');
    const styleButton = document.getElementById('ToggleButton');
    var theme = document.getElementsByTagName('link')[0];
    const style = window.localStorage.getItem('button');
    if (currTheme) {
        theme.setAttribute('href', currTheme);
    }
    if (style) {
        styleButton.innerText = style;
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
            else if (document.title == 'Experience') {
                experienceCommand(command);
            }
            else if (document.title == 'Service') {
                serviceCommand(command);
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
            output.innerText = "projects   experience   service   contact   about.me"
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
        case 'cd contact':
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
    newLine('guest@myles-website:~$ ');
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
            output.innerText = "wordle.txt   pantry_pal.txt   cpu.txt"
            document.getElementById('terminal').insertAdjacentElement('beforeend', br);
            document.getElementById('terminal').insertAdjacentElement('beforeend', output);
            break;
        case 'cat wordle.txt':
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
        case 'cat pantry_pal.txt':
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
            document.getElementById('terminal').insertAdjacentElement('beforeend', pantrybr.cloneNode(true));
            document.getElementById('terminal').insertAdjacentElement('beforeend', pantryLink);
            break;
        case 'cat cpu.txt':
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

function experienceCommand(command) {
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
            output.innerText = "skills.txt   interest.txt   resume.pdf";
            document.getElementById('terminal').insertAdjacentElement('beforeend', br);
            document.getElementById('terminal').insertAdjacentElement('beforeend', output);
            break;
        case 'cat skills.txt':
            const skillsOutput = document.getElementById('skills').cloneNode(true);
            skillsOutput.classList.add('output');
            const skillsbr = document.createElement('br');
            document.getElementById('terminal').insertAdjacentElement('beforeend', skillsbr);
            document.getElementById('terminal').insertAdjacentElement('beforeend', skillsOutput);
            break;
        case 'cat interest.txt':
            const interestOutput = document.getElementById('interest').cloneNode(true);
            interestOutput.classList.add('output');
            const interestbr = document.createElement('br');
            document.getElementById('terminal').insertAdjacentElement('beforeend', interestbr);
            document.getElementById('terminal').insertAdjacentElement('beforeend', interestOutput);
            break;
        case 'cat resume.pdf':
            const resumeOutput = document.createElement('a');
            resumeOutput.href = "Myles_Resume_Sept__2024.pdf";
            resumeOutput.download = "MylesResume";
            resumeOutput.innerText = "Resume Download Link";
            const resumeViewer = document.createElement('a');
            resumeViewer.href = "Myles_Resume_Sept__2024.pdf";
            resumeViewer.target = "_blank";
            resumeViewer.rel = "noopener noreferrer";
            resumeViewer.classList.add('output');
            resumeViewer.innerText = 'View Resume';
            resumeOutput.classList.add('output');
            const resumebr = document.createElement('br');
            document.getElementById('terminal').insertAdjacentElement('beforeend', resumebr);
            document.getElementById('terminal').insertAdjacentElement('beforeend', resumeViewer);
            document.getElementById('terminal').insertAdjacentElement('beforeend', resumebr.cloneNode(true));
            document.getElementById('terminal').insertAdjacentElement('beforeend', resumeOutput);
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

    console.log('Experience command complete');
    newLine('guest@myles-website:~/experience$ ');
}

function serviceCommand(command) {
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
            output.innerText = "polls.txt   big_event.txt";
            document.getElementById('terminal').insertAdjacentElement('beforeend', br);
            document.getElementById('terminal').insertAdjacentElement('beforeend', output);
            break;
        case 'cat polls.txt':
            const pollsOutput = document.getElementById('service1text').cloneNode(true);
            pollsOutput.classList.add('output');
            const pollsbr = document.createElement('br');
            const pollsLink = document.createElement('a');
            pollsLink.href = "https://www.eac.gov/help-america-vote";
            pollsLink.innerText = "Link";
            pollsLink.target = "_blank";
            pollsLink.rel = "noopener noreferrer";
            document.getElementById('terminal').insertAdjacentElement('beforeend', pollsbr);
            document.getElementById('terminal').insertAdjacentElement('beforeend', pollsOutput);
            document.getElementById('terminal').insertAdjacentElement('beforeend', pollsLink);
            break;
        case 'cat big_event.txt':
            const bigOutput = document.getElementById('service2text').cloneNode(true);
            bigOutput.classList.add('output');
            const bigLink = document.createElement('a');
            bigLink.href = "https://www.tamug.edu/stuact/traditions/Big%20Event.html";
            bigLink.innerText = "Link";
            bigLink.target = "_blank";
            bigLink.rel = "noopener noreferrer";
            const bigbr = document.createElement('br');
            document.getElementById('terminal').insertAdjacentElement('beforeend', bigbr);
            document.getElementById('terminal').insertAdjacentElement('beforeend', bigOutput);
            document.getElementById('terminal').insertAdjacentElement('beforeend', bigLink);
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

    console.log('Service command complete');
    newLine('guest@myles-website:~/service$ ');
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
            else if (document.title == 'Experience') {
                experienceCommand(command);
            }
            else if (document.title == 'Service') {
                serviceCommand(command);
            }
        }
    });

    const br = document.createElement('br');
    document.getElementById('terminal').insertAdjacentElement('beforeend', br);
    document.getElementById('terminal').insertAdjacentElement('beforeend', user);
    terminalInput.focus();
}
