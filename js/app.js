//inst classes

const ft = new Fetch();
const ui = new UI();

// add event listeners

const search = document.getElementById("searchUser");
const button = document.getElementById("submit");

button.addEventListener("click", ()=>{
    const currentVal = search.value;

    ft.getCurrent(currentVal).then((data)=>{
        // call a UI method
        ui.populateUI(data);
        //call saveTols
        ui.saveToLS(data);
    });
});