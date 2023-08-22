import { UI } from "./UI.module.js";

export class Details{
    constructor(id){
        document.getElementById("btnClose").addEventListener("click",()=>{
            document.querySelector(".details").classList.add("d-none");
            document.querySelector(".games").classList.remove("d-none");
          
        });
        this.loading = document.querySelector(".loading")
        this.getDetails(id);
        this.ui = new UI();
    }

   async getDetails(id){
    this.loading.classList.remove("d-none")
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1fa05f3b0dmsh5b09b61530f1c13p15c100jsn5aa903708112',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
      const apiDetails= await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,options);
      const respose = await apiDetails.json()
      this.loading.classList.add("d-none")
      console.log(respose)
      this.ui.displayDetails(respose)
    }
}