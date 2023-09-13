// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ', ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my website!
More about me:
'sumfetch' - short summary.
'resume' - my latest resume.
'readme' - my github readme.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Donate
// export const donate = async (args: string[]): Promise<string> => {
//   return `thank you for your interest.
// here are the ways you can support my work:
// - <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.paypal}" target="_blank">paypal</a></u>
// - <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.patreon}" target="_blank">patreon</a></u>
// `;
// };

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Wow, really? You are using bing for ${args.join(' ')}?`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.
if you want to help, you can type 'donate'.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
  █████╗  ██████╗ ██╗   ██╗███╗   ██╗ ██████╗    ██╗  ██╗
  ██╔══██╗██╔════╝ ██║   ██║████╗  ██║██╔════╝    ██║ ██╔╝
  ███████║██║  ███╗██║   ██║██╔██╗ ██║██║  ███╗   █████╔╝ 
  ██╔══██║██║   ██║██║   ██║██║╚██╗██║██║   ██║   ██╔═██╗ 
  ██║  ██║╚██████╔╝╚██████╔╝██║ ╚████║╚██████╔╝██╗██║  ██╗
  ╚═╝  ╚═╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝ ╚═╝╚═╝  ╚═╝
  [FREELANCE - WEB Developer - Jakarta Indonesia]

  I'm just a programmer who's passionate about coding and problem-solving. I rely on my trusty caffeine companion to turn lines of text into functional software. While I may dabble in semicolons, whitespace, and occasionally wrestle with syntax errors, I'm far from being a wizard.

  My mind is filled with algorithms, and I often find myself lost in the intricacies of code. I've spent my fair share of time searching on Google and reading through Stack Overflow threads. Bugs tend to disappear eventually, with a bit of patience.
  
  When I'm not typing away at my keyboard, I sometimes get lost in infinite loops, and I've been known to engage in friendly debates about coding styles. If you ever need help with your tech challenges, I'll do my best to assist you – no promises on turning frowns into laughter, though!

Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'project' to display some of my 'public' project.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
`;
};

export const project = (args?: string[]): string => {
  return `
  here is my project:

  - BMI Calculator <u><a class="text-light-blue dark:text-dark-blue underline" href="http://bmi.agungk.com" target="_blank">bmi.agungk.com</a></u> [vue]
  - QR Code & Bar Code Generator <u><a class="text-light-blue dark:text-dark-blue underline" href="http://qr.agungk.com" target="_blank">qr.agungk.com</a></u> [vanilla js]
  - Caesar Cipher <u><a class="text-light-blue dark:text-dark-blue underline" href="http://caesar.agungk.com" target="_blank">caesar.agungk.com</a></u> [vue]
  - Currency Converter <u><a class="text-light-blue dark:text-dark-blue underline" href="http://currency.agungk.com" target="_blank">currency.agungk.com</a></u> [react]
  - Metronome <u><a class="text-light-blue dark:text-dark-blue underline" href="http://metronome.agungk.com" target="_blank">metronome.agungk.com</a></u> [react]
  - Morse  <u><a class="text-light-blue dark:text-dark-blue underline" href="http://morse.agungk.com" target="_blank">morse.agungk.com</a></u> [vue]
  - Notes  <u><a class="text-light-blue dark:text-dark-blue underline" href="http://notes.agungk.com" target="_blank">notes.agungk.com</a></u> [vanilla js]
  - Picker  <u><a class="text-light-blue dark:text-dark-blue underline" href="http://picker.agungk.com" target="_blank">picker.agungk.com</a></u> [react]
  - Todolist  <u><a class="text-light-blue dark:text-dark-blue underline" href="http://todolist.agungk.com" target="_blank">todolist.agungk.com</a></u> [vanilla js]
  - Weather  <u><a class="text-light-blue dark:text-dark-blue underline" href="http://weather.agungk.com" target="_blank">weather.agungk.com</a></u> [react]
  
  `;
};

export const certificate = (args?: string[]): string => {
  return `
      
    - 2021, [Python Institute] Associate in Python Programming <u><a class="text-light-blue dark:text-dark-blue underline" href="https://www.credly.com/badges/edc3adf1-6823-4473-9b9f-de4bfb547cc9" target="_blank">view</a></u>
    - 2021, [HarvardX] CS50 Intro to CS <u><a class="text-light-blue dark:text-dark-blue underline" href="https://courses.edx.org/certificates/b47a46ba5bb24b7daae4a6ac8c569f28" target="_blank">view</a></u>
    - 2022, [HarvardX] CS50 Python <u><a class="text-light-blue dark:text-dark-blue underline" href="https://certificates.cs50.io/72bafbaf-709c-417a-831a-634f679bc3c6.pdf?size=letter" target="_blank">view</a></u>
    - 2021, [HarvardX] CS50 Web <u><a class="text-light-blue dark:text-dark-blue underline" href="https://courses.edx.org/certificates/71f0e5950c1747cbba2a84bc50125928" target="_blank">view</a></u>
    - 2022, [Dicoding] Create App Using React <u><a class="text-light-blue dark:text-dark-blue underline" href="https://www.dicoding.com/certificates/72ZDOJ2RVXYW" target="_blank">view</a></u>
    - 2022, [Dicoding] Dev Ops Basic <u><a class="text-light-blue dark:text-dark-blue underline" href="https://www.dicoding.com/certificates/07Z6GWD3YXQR" target="_blank">view</a></u>
    - 2022, [Univeristy of Helsinki] Fullstack Open <u><a class="text-light-blue dark:text-dark-blue underline" href="/files/helsinki1.jpeg" target="_blank">view</a></u>
    - 2022, [Kaggle] Intro to Machine Learning <u><a class="text-light-blue dark:text-dark-blue underline" href="https://www.kaggle.com/learn/certification/agungk878/intro-to-machine-learning" target="_blank">view</a></u>
    - 2022, [IBM] Introduction to Data Analytics <u><a class="text-light-blue dark:text-dark-blue underline" href="https://coursera.org/share/63d68bee88b5588273e16b61b54b81a0" target="_blank">view</a></u>
    - 2022, [Dicoding] Jaringan Komputer untuk Pemula <u><a class="text-light-blue dark:text-dark-blue underline" href="https://www.dicoding.com/certificates/72ZD9YNDVPYW" target="_blank">view</a></u>
    - 2020, [Hacktiv8] Web App Development Online <u><a class="text-light-blue dark:text-dark-blue underline" href="https://agungk.com/files/hacktiv8.pdf" target="_blank">view</a></u>
    
    `;
};
