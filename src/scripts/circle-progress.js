
let gitValue = 85;
let scrumValue = 85;
let kanbanValue = 75;
let jiraValue = 75;
let confluenceValue = 75;
let reqValue = 65;
let dockerValue = 45;


let teamworkValue = 90;
let autonomousWorkValue = 90;
let communicationValue = 85;
let projManagementValue = 25;

let gitNumber = document.getElementById("git-circle-num")
let scrumNumber = document.getElementById("scrum-circle-num")
let kanbanNumber = document.getElementById("kanban-circle-num")
let jiraNumber = document.getElementById("jira-circle-num")
let confluenceNumber = document.getElementById("confluence-circle-num")
let requirementNumber = document.getElementById("requirement-analysis-circle-num")
let dockerNumber = document.getElementById("docker-circle-num")



let teamworkNumber = document.getElementById("teamwork-circle-num")
let autonomousWorkNumber = document.getElementById("autonomous-work-circle-num")
let communicationNumber = document.getElementById("communication-circle-num")
let projManagementNumber = document.getElementById("proj-management-circle-num")


{
let gitCounter = 0;
setInterval (() => {
    if(gitCounter == gitValue) {
        clearInterval();
    } 
    else { 
        gitCounter +=1;
        gitNumber.innerHTML = gitCounter + "%"; 
    } 
}, 15);


let scrumCounter = 0;
setInterval (() => {
    if(scrumCounter == scrumValue) {
        clearInterval();
    } 
    else {
    scrumCounter +=1;
    scrumNumber.innerHTML = scrumCounter + "%";
    } 
}, 15);


let kanbanCounter = 0;
setInterval (() => {
    if(kanbanCounter == kanbanValue) {
        clearInterval();
    } 
    else {
    kanbanCounter +=1;
    kanbanNumber.innerHTML = kanbanCounter + "%";
    } 
}, 16);


let jiraCounter = 0;
setInterval (() => {
    if(jiraCounter == jiraValue) {
        clearInterval();
    } 
    else {
    jiraCounter +=1;
    jiraNumber.innerHTML = jiraCounter + "%";
    } 
}, 16);


let confluenceCounter = 0;
setInterval (() => {
    if(confluenceCounter == confluenceValue) {
        clearInterval();
    } 
    else {
    confluenceCounter +=1;
    confluenceNumber.innerHTML = confluenceCounter + "%";
    } 
}, 16);


let reqCounter = 0;
setInterval (() => {
    if(reqCounter == reqValue) {
        clearInterval();
    } 
    else {
    reqCounter +=1;
    requirementNumber.innerHTML = reqCounter + "%";
    } 
}, 16);




let dockerCounter = 0;
setInterval (() => {
    if(dockerCounter == dockerValue) {
        clearInterval();
    } 
    else {
        dockerCounter +=1;
        dockerNumber.innerHTML = dockerCounter + "%";
    } 
}, 16);






}




{
let teamworkCounter = 0;
setInterval (() => {
    if(teamworkCounter == teamworkValue) {
        clearInterval();
    } 
    else { 
        teamworkCounter +=1;
        teamworkNumber.innerHTML = teamworkCounter + "%"; 
    } 
}, 15);

let autonomousWorCounter = 0;
setInterval (() => {
    if(autonomousWorCounter == autonomousWorkValue) {
        clearInterval();
    } 
    else { 
        autonomousWorCounter +=1;
        autonomousWorkNumber.innerHTML = autonomousWorCounter + "%"; 
    } 
}, 15);

let communicationCounter = 0;
setInterval (() => {
    if(communicationCounter == communicationValue) {
        clearInterval();
    } 
    else { 
        communicationCounter +=1;
        communicationNumber.innerHTML = communicationCounter + "%"; 
    } 
}, 15);

let projManagementCounter = 0;
setInterval (() => {
    if(projManagementCounter == projManagementValue) {
        clearInterval();
    } 
    else { 
        projManagementCounter +=1;
        projManagementNumber.innerHTML = projManagementCounter + "%"; 
    } 
}, 15);
}

{

let sewingValue = 65;
let dancingValue = 50;
let boulderingValue = 35;

let sewingNumber = document.getElementById("sewing-circle-num");
let dancingNumber = document.getElementById("dancing-circle-num");
let boulderingNumber = document.getElementById("bouldering-circle-num");

let sewingCounter = 0;
setInterval (() => {
    if(sewingCounter == sewingValue) {
        clearInterval();
    } 
    else { 
        sewingCounter +=1;
        sewingNumber.innerHTML = sewingCounter + "%"; 
    } 
}, 15);

let dancingCounter = 0;
setInterval (() => {
    if(dancingCounter == dancingValue) {
        clearInterval();
    } 
    else { 
        dancingCounter +=1;
        dancingNumber.innerHTML = dancingCounter + "%"; 
    } 
}, 15);

let boulderingCounter = 0;
setInterval (() => {
    if(boulderingCounter == boulderingValue) {
        clearInterval();
    } 
    else { 
        boulderingCounter +=1;
        boulderingNumber.innerHTML = boulderingCounter + "%"; 
    } 
}, 15);

}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.radial-bar .path').forEach(el => {
    observer.observe(el);
  });