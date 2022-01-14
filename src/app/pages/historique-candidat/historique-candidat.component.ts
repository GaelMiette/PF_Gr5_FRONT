import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historique-candidat',
  templateUrl: './historique-candidat.component.html',
  styleUrls: ['./historique-candidat.component.css']
})
export class HistoriqueCandidatComponent implements OnInit {

  liste = [];
  message;

  user = {isRecruiter: false}


  constructor(private http:HttpClient) { }


  ngOnInit(): void {
    this.get_liste();
  }

  get_liste(){

    this.liste = [

      {
        id:1,
        titre: "bouh",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper, arcu accumsan imperdiet fermentum, magna leo dapibus leo, quis cursus massa nulla laoreet leo. Praesent nec posuere turpis. Pellentesque vulputate metus ac enim consequat viverra. Sed fermentum dui purus, lobortis pretium sapien commodo sit amet. In eu porttitor lectus, non eleifend augue. Morbi ac varius ex. Nam fringilla ullamcorper massa",
        categorie: "categorie",
        date: "02/02/2021",
        salaire: 2000,
        type_contrat: "cdd",
        teletravail: true,
        recruteur:{
          nom: "sparrow", 
          prenom: "jack", 
          entreprise: "froustillon",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/langfr-220px-Angular_full_color_logo.svg.png",
          departement: "bouh",
        }
      },
      
      {
        id:2,
        titre: "hey",
        description: "Donec at nisi diam. Etiam tristique quam suscipit lobortis laoreet. Mauris ultrices iaculis justo, nec tincidunt elit pharetra id. In nec lorem condimentum, egestas ex eu, aliquet diam. Donec faucibus lorem a massa finibus ornare. Proin condimentum augue ipsum, eu aliquam dolor maximus in. Morbi",
        categorie: "categorie",
        date: "15/09/2020",
        salaire: 2500,
        type_contrat: "cdd",
        teletravail: true,
        recruteur:{
          nom: "sparrow", 
          prenom: "jack", 
          entreprise: "wikipedia",
          logo: "https://fr.wikipedia.org/static/images/mobile/copyright/wikipedia.png",
          departement: "bouh",
        }
      },
      
      {
        id:3,
        titre: "how",
        description: "Vestibulum ut varius est, in suscipit augue. Suspendisse maximus rutrum egestas. Nullam vitae nulla semper, porta libero a, gravida velit. In tristique mi erat. Etiam id diam leo. Quisque odio diam, maximus eu mollis tempor, tristique sed leo. Nam interdum efficitur velit in porta. Praesent aliquet nec ipsum eu bibendum. Nam finibus, nibh vel aliquet faucibus, urna velit tincidunt nisi, in faucibus massa metus et turpis. Aliquam vel ",
        categorie: "categorie",
        date: "01/01/2022",
        salaire: 1000,
        type_contrat: "cdd",
        teletravail: true,
        recruteur:{
          nom: "sparrow", 
          prenom: "jack", 
          entreprise: "entreprise 1664",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Logo_Bi%C3%A8re_1664_en_2021.png/180px-Logo_Bi%C3%A8re_1664_en_2021.png",
          departement: "bouh",
        }
      },
    
    ]
  
  }

  delete_annonce(){
    alert("bouh")

    /* this.http.delete("http://localhost:8080/danavalley/api/candidat/").
    subscribe(
      response => {
        this.message = "article supprimé";
        this.ngOnInit();
      }, err=>{
        console.log(err);
      }
      
    ); */
    // appel api pour supprimer une annonce associée au candidat et récupérer la nouvelle liste
  }

}
