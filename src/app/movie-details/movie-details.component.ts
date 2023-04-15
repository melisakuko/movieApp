import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute,
    private dataService: DataService) { }

  parameter: any;
  genres: any;

  //ukljucimo DataService u nasu komponentu
  ngOnInit(): void {
    this.parameter = this.route.snapshot.paramMap.get('id');
    this.fetchGenres();
  }

  //zelimo iz DataService da dohvatimo zanrove
  fetchGenres() {
    //u subscribe dijelu moramo dohvatiti ono sto je uradio return u funkciji getGenres()
    this.dataService.getGenres().subscribe((response) => {
      this.genres = response;
      console.log(this.genres);
    })
    //kada se dohvati response onda u ove zanrove spasi sto smo dohvatili iz ove funkcije
  }
}
