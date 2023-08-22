import { UI } from "./UI.module.js";
import { Details } from "./details.module.js";

export class Home{
    constructor(){
      document.querySelectorAll(".nav-link").forEach((link)=> {
        link.addEventListener("click",()=>{
          
          this.changeLink(link);
          const category = link.getAttribute("data-category");
          this.getGames(category);
        })
      })
      this.loading = document.querySelector(".loading")
      this.details=document.querySelector(".details");
      this.games=document.querySelector(".games");
     this.ui =new UI;
     this.getGames("MMORPG");
     
  
    }
 async changeLink(link){

    document.querySelector(".navbar-nav .active").classList.remove("active");
    link.classList.add("active")



  }

  async getGames(cat){
    this.loading.classList.remove("d-none")
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1fa05f3b0dmsh5b09b61530f1c13p15c100jsn5aa903708112',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
        const game = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`,options)
        const apiGame =await game.json();
        this.loading.classList.add("d-none")
        this.ui.displayGames(apiGame)

        document.querySelectorAll(".card").forEach((card) => {
            card.addEventListener("click",()=>{
               this.details.classList.remove("d-none");
               this.games.classList.add("d-none");
               new Details(card.getAttribute("data-id"));

            })
        })

    }
}

