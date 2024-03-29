class UI {
    constructor(){
        this.uiContainer = document.getElementById("content");
        this.city;
    }

    populateUI(data){
        // de-structure vars

        this.uiContainer.innerHTML = `
        <div class="card mx-auto mt-5 mona">
        <div class="card-body justify-content-center">
            <h5 class="card-title">${data.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Highs of ${data.main.temp_max}. Lows of ${data.main.temp_min}</h6>
            <p class="card-text">Weather conditions are described as: ${data.weather[0].description}</p>
        </div>
    </div>
        `;
    }

    // clearUI(){
    //     uiContainer.innerHTML ="";
    // }

    // saveToLs(data){
    //     localStorage.setItem("city", JSON.stringify(data));
    // }
    // getFromLS(){
    //     if (localStorage.setItem("city" == null)) {
    //         return null;
    //     } else{
    //         this.city = JSON.parse(localStorage.getItem("city"));
    //     }
    //     return this.city;
    // }
    // clearLS(){
    //     localStorage.clear();
    // }
}