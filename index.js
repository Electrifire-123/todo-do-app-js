const main = document.getElementById("main");
const addList = document.getElementById("addListBtn");
const message = document.getElementById("msg");
const parent = document.getElementById("parent");
const showCard = document.getElementById("showCard");
const popup = document.getElementById("popupMain")

addList.addEventListener('click', () => {
    const popup1st = document.createElement("div");
    popup1st.className = "popup1st";
    popup.appendChild(popup1st);
    const popHeading = document.createElement("h2");
    popHeading.className = "title";
    popHeading.innerText = "Add New List";
    popup1st.appendChild(popHeading);
    popup1st.style.display = "flex";
    const input = document.createElement("input")
    input.type = "text";
    input.placeholder = "Add new list";
    const popupButtons = document.createElement("div");
    popupButtons.className = "popupButtons"
    const addBtn = document.createElement("button");
    addBtn.className = "add";
    addBtn.innerText = "Add";
    const closeBtn = document.createElement("button");
    closeBtn.className = "add";
    closeBtn.innerText = "Close"
    popup1st.appendChild(popHeading);
    popup1st.appendChild(input);
    popup1st.appendChild(popupButtons);
    popupButtons.appendChild(addBtn);
    popupButtons.appendChild(closeBtn);
    main.style.filter = "blur(5px)";
    addBtn.addEventListener('click', () => {
        message.style.display = "none";
        main.style.filter = "blur(0px)"
        const child = document.createElement("div");
        child.className = "child";
        const cardHead = document.createElement("h2");
        cardHead.id = "cardHead";
        const addItem = document.createElement("i")
        addItem.className = "addBtn fa-solid fa-circle-plus";
        const deleteCard = document.createElement("i");
        deleteCard.className = "delBtn fa-solid fa-trash";
        const parent = document.querySelector("#parent");
        parent.appendChild(child)
        child.appendChild(cardHead);
        child.appendChild(addItem);
        child.appendChild(deleteCard);
        cardHead.innerText = input.value;
        cardHead.addEventListener('click', () => {
            const cardHeading = document.getElementById("cardHeading");
            cardHeading.innerText = cardHead.innerText;
            // const main 
            main.style.visibility = "hidden";
            // const showCard = document.querySelector(".showCard");
            showCard.style.visibility = "visible";

            const backToMain = document.getElementById("backToMain");

            showCard.appendChild(child);

            deleteCard.addEventListener('click', ()  => {
                document.querySelector(".showCard").removeChild(child);
                main.style.visibility = "visible";
                showCard.style.visibility = "hidden";
            })
            backToMain.addEventListener('click', () => {
                showCard.removeChild(child);
                parent.appendChild(child);
                main.style.visibility = "visible";
                showCard.style.visibility = "hidden";
            })
        })
        popup.removeChild(popup1st);
        deleteCard.addEventListener('click',() => {
            parent.removeChild(child);
            if(parent.innerText===""){
                message.style.display = "block";
            }
        });
        addItem.addEventListener('click', () => {
            const popup1st = document.createElement("div")
            popup1st.className = "popup1st";
            popup.appendChild(popup1st);
            const popHeading = document.createElement("h2");
            popHeading.innerText = "Add new task";
            popHeading.className = "title";
            const input = document.createElement("input");
            input.type = "text";
            input.placeholder = "Add new Task";
            const popupButtons = document.createElement("div");
            popupButtons.className = "popupButtons"
            const addBtn = document.createElement("button");
            addBtn.className = "add";
            addBtn.innerText = "Add";
            const closeBtn = document.createElement("button");
            closeBtn.className = "add";
            closeBtn.innerText = "Close"
            popup1st.appendChild(popHeading);
            popup1st.appendChild(input);
            popup1st.appendChild(popupButtons);
            popupButtons.appendChild(addBtn);
            popupButtons.appendChild(closeBtn);
            popup1st.style.display = "flex";
            main.style.filter = "blur(5px)";
            addBtn.addEventListener('click', () => {
                const task = document.createElement("div");
                const tasktitle = document.createElement("span");
                const doneBtn = document.createElement("button");
                task.className = "task";
                tasktitle.innerText = input.value;
                doneBtn.innerText = "Mark Done";
                main.style.filter = "blur(0px)"
                child.appendChild(task);
                task.appendChild(tasktitle);
                task.appendChild(doneBtn);
                popup.removeChild(popup1st);
                
                doneBtn.addEventListener("click", () => {
                    tasktitle.style.textDecoration = "line-through";
                    task.removeChild(doneBtn);
                })
            })
            closeBtn.addEventListener('click', () => {
                popup.removeChild(popup1st);
                main.style.filter = "blur(0px)";
            })
        })

    })

    closeBtn.addEventListener('click',() => {
        const popup = document.querySelector(".popupMain");
        popup.removeChild(popup1st);
        main.style.filter = "blur(0px)";
    })
})