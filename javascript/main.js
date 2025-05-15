document.getElementById("btnHome").addEventListener("click", () => {
    window.location.href = "index.html";
})

class Task {
    #name;
    #time;
    #description;
    #date;
    constructor(taskName, taskTime, taskDescription, date)
    {
        this.#name = taskName;
        this.#time = taskTime;
        this.#description = taskDescription;
        this.#date = date;
    }

    getDescription() {
        return this.#description;
    }

    getName() {
        return this.#name;
    }

    getTime() {
        return this.#time;
    }

    setName(n) {
        this.#name = n;
    }

    setTime(t) {
        this.#time = t;
    }

    setDescription(d) {
        this.#description = d;
    }

    getDate() {
        return this.#date;
    }
}
let board = document.getElementById('board');
let sbt = document.getElementById('sidebarTitle');
let topbar = document.getElementById("topbar");
const dates = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const classes = document.getElementsByClassName('sideChange');
const classes2 = document.getElementsByClassName('sideChange2');
const close = document.getElementsByClassName('close');
const bottombar = document.getElementById('bottombar');
let tasklist = document.getElementById('taskList');
const sideChange = classes[0];
const sideChange2 = classes2[0];

let root;

let tasks = [];
let taskElements = [];

let savetask = () => {
    let taskName = document.getElementById('tname').value;
    let taskTime = document.getElementById('ttime').value;
    let taskDescription = document.getElementById('tdesc').value;
    tasks[root-1][taskName] = new Task(taskName, taskTime, taskDescription, root);
    tasks[root-1].empty = false;
    let element = document.createElement('li');
    console.log(tasks[root-1][taskName].getDate());
    element.innerText = taskName;
    element.addEventListener("click", viewtask_element)
    tasklist.appendChild(element);
    taskElements.push(element);
    showBottomBar();
};

let viewtask_element = event => {
    let t = event.currentTarget;
    let taskName = document.getElementById('tname').value;
    let taskTime = document.getElementById('ttime').value;
    let taskDescription = document.getElementById('tdesc').value;
    showBottomBar();
    tasklist.removeChild(t);
    for (let i = 0; i < taskElements.length; i++)
        if (taskElements[i] == t)
            taskElements.splice(i, 1);

    document.getElementById('tname').value = event.currentTarget.innerText;
    document.getElementById('ttime').value = tasks[root-1][document.getElementById('tname').value].getTime();
    document.getElementById('ttime').value = tasks[root-1][document.getElementById('tname').value].getTime();
    document.getElementById('savebtn').addEventListener("click", () => {
        tasks[root-1][taskName].setName(document.getElementById('tname').value);
        tasks[root-1][taskName].setTime(document.getElementById('tname').value);
        tasks[root-1][taskName].setDescription(document.getElementById('tname').value);
        t.innerText = tasks[root-1][taskName].value;
    });
};

document.getElementById('savebtn').addEventListener("click", savetask);


let menuitems = document.getElementsByClassName('barmenu');
for (let c = 0; c < menuitems.length; c++)
{
    const para = document.createElement("p");
    if (c == 0)
        para.classList.add("sideChange");
    else
        para.classList.add("sideChange" + c+1);
    para.classList.add("close");
    para.innerText = "x";
    document.getElementsByClassName("barmenu")[c].appendChild(para);
}
let bottomBarOpen = false;
let showBottomBar = () => {
    if ((sideChange2.style.display === 'none' || sideChange2.style.display === '') && !bottomBarOpen) {
        bottombar.classList.add('bubbleSection');
        bottombar.style.width = "250px"; 
        bottombar.style.height = "250px"; 
        for (let i =0; i < classes2.length; i++) {
            classes2[i].style.display = 'block';
        }
        bottomBarOpen = true;
    } else {
        bottombar.classList.remove('bubbleSection');
        bottombar.style.width = "10px"; 
        bottombar.style.height = "10px"; 
        for (let i =0; i < classes2.length; i++) {
            classes2[i].style.display = 'none';
        }
        bottomBarOpen = false;
    }
}

let showSideBar = event => {
    if (sideChange.style.display === 'none' || sideChange.style.display === '') {
        topbar.classList.add('bubbleSection');
        topbar.style.width = "250px"; 
        topbar.style.height = "250px";
        // TODO: set sbt.innerText to date
        const monthName = new Date(0, new Date().getMonth() - 1).toLocaleString('default', { month: 'long' });
        sbt.innerText = monthName + " " + event.currentTarget.innerText;
        if (root != event.currentTarget.innerText)
        {
            // New date
            root = event.currentTarget.innerText;
            tasklist.innerHTML = '';
            document.getElementById('savebtn').addEventListener("click", savetask);
            if (!tasks[root-1].empty && tasks[root-1] != undefined)
                {
                    for (let c in tasks[root-1])
                    {
                        if (typeof(tasks[root-1][c]) == 'boolean')
                            continue;
                        console.log(c);
                        document.getElementById('tname').value = tasks[root-1][c].getName();
                        document.getElementById('ttime').value = tasks[root-1][c].getTime();
                        document.getElementById("tdesc").value = tasks[root-1][c].getDescription();
                        for (let i = 0; i < taskElements.length; i++)
                            tasklist.appendChild(taskElements[i]);
                    }
                }
        } else {
            // Existing date
            if (tasks[root-1].empty)
                console.log("empty");
        } 
        //document.getElementById("info").style.display = "block";
        for (let i = 0; i < classes.length; i++) {
            classes[i].style.display = 'block';
        }
    }
    else {
        topbar.classList.remove('bubbleSection');
        topbar.style.width = "10px"; 
        topbar.style.height = "10px";
        //document.getElementById("info").style.display = "none";
        //document.getElementById("taskList").style.display = "none";
        sideChange.style.display = 'none';
        for (let i = 0; i < classes.length; i++) {
            classes[i].style.display = 'none';
        }
        if (bottomBarOpen)
            showBottomBar();
    }
};

let onClickBackup = () => {
    let sidebar = document.getElementById('sidebar');
    sidebar.classList.add('makevisible');
};

for (let i = 0; i < dates.length; i++)
{
    let date = document.createElement("p");
    date.classList.add('column');
    date.innerText = dates[i];
    date.id = dates[i];
    board.appendChild(date);
}


let increment = 1;
for (let i = 0; i < dates.length; i++)
{
    for (let j = 0; j < 5; j++) {
        let date = document.createElement("button");
        date.classList.add('column');
        date.classList.add('button-clean');
        date.classList.add('bubbleSection');
        date.addEventListener('click', showSideBar)
        tasks.push({empty: true});
        date.innerText = increment + 1 < 32 ? increment++ : '';
        date.id=date.innerText;
        board.appendChild(date);
    }
}


let info = document.getElementById("info");
let addTask = showBottomBar;
function addInfo(info){
    const main = document.getElementById()
}

function present(){
    topbar.style.width = "250px"; 
    document.getElementById("info").style.display = "block";
    document.getElementById("taskList").style.display = "block";
    document.getElementsByClassName("sideChange") = "block";
}

for (let i = 0; i < close.length; i++)
{
    close[0].addEventListener('click', showSideBar);
    close[1].addEventListener('click', showBottomBar);
}
// const createBar = document.getElementById('createBar');

// createBar.addEventListener('click', function() {
//     if (sideChange2.style.display === 'none' || sideChange2.style.display === '') {
//         document.getElementById("createBar").style.width = "250px"; 
//         for (let i =0; i < classes.length; i++) {
//             classes[i].style.display = 'block';
//         }
//     }
//     else {
//         topbar.style.width = "10px"; 
//         sideChange2.style.display = 'none';
//         for (let i = 0; i < classes2.length; i++) {
//             classes2[i].style.display = 'none';
//         }
//     }
// });

