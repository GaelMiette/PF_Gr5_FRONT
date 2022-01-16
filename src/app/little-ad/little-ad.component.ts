import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Anounce } from '../shared/anounce';
import { Candidate } from '../shared/candidate';

@Component({
    selector: 'app-little-ad',
    templateUrl: './little-ad.component.html',
    styleUrls: ['./little-ad.component.css']
})
export class LittleAdComponent implements OnInit {

    annonce: Anounce = new Anounce();
    id: any;
    user: Candidate = new Candidate();
    isCandidat: boolean = false;
    constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }
    departements = JSON.parse(sessionStorage.getItem("departements"));
    BASE_URL = "";

    async ngOnInit() {

        this.user = JSON.parse(sessionStorage.getItem("user"));

        this.route.params.subscribe(params => {
            this.id = params['id'];
        });

        this.annonce = await this.http.get<Anounce>("http://localhost:8080/danavalley/api/annonces/" + this.id).toPromise();

        this.checkPostule();

        this.BASE_URL = sessionStorage.getItem("BASE_URL");
    }

    checkPostule() {
        for (let annonce of this.user.listeAnnonces) {
            if (annonce.id == this.id) {
                this.isCandidat = true;
                break;
            } else { this.isCandidat = false }
        }
    }

    async candidater() {

        this.user.listeAnnonces.push(this.annonce);
        let body = JSON.stringify(this.user);
        let headers = { headers: new HttpHeaders({ "Content-Type": "application/json" }) };

        await this.http.put(this.BASE_URL + "/candidats", body, headers).toPromise();

        this.user = await this.http.get<Candidate>(this.BASE_URL + "/candidats/" + this.user.id).toPromise();
        this.user.isRecruiter = false;

        sessionStorage.setItem("user", JSON.stringify(this.user));
        window.location.reload();
    }

    async retCandidature() {

        let current = [...this.user.listeAnnonces];

        this.user.listeAnnonces.map((annonce, index) => {
            if (annonce.id == this.id) {
                current.splice(index, 1);
            }
        });

        this.user.listeAnnonces = current;

        let body = JSON.stringify(this.user);

        let headers = { headers: new HttpHeaders({ "Content-Type": "application/json" }) };

        await this.http.put(this.BASE_URL + "/candidats", body, headers).toPromise();

        this.user = await this.http.get<Candidate>(this.BASE_URL + "/candidats/" + this.user.id).toPromise();
        this.user.isRecruiter = false;

        sessionStorage.setItem("user", JSON.stringify(this.user));

        window.location.reload();
    }

    modifier() {
        this.router.navigate(['/upd_ad/' + this.id]);
    }

    supprimer() {
        this.http.delete(sessionStorage.getItem("BASE_URL") + "/annonces/" + this.id).subscribe((response) => {
            alert(response);
            this.router.navigate(['/espc']);
        })

    }

    find_departement(id) {
        let departement = null;

        this.departements.map(dept => {
            if (dept.id == id) {
                departement = dept;
            }
        });

        return departement;

    }

}
