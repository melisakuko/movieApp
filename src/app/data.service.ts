import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ //pomocu dekoratora znamo da je u pitanju servis, ukljucuje se u razlicite fajlove/komponente
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  //prvi API poziv bez parametara
  getGenres() {
    //1. Da bi napravili HTTP poziv prvo moramo u konstruktoru
    //    ukljuciti HttpClient servis

    //za svaki API headeri su specificni i razliciti
    var header = new HttpHeaders()
      .set(
        'X-RapidAPI-Key',
        '2461f21ab8msh738b8d6f4c5f4e5p1b6190jsna5aa3e0bf1e3'
      )
      .set(
        'X-RapidAPI-Host',
        'moviesdatabase.p.rapidapi.com'
      )

    //headeri se nalaze u options objektu, a options objekat saljemo u HTTP poziv
    var options = { headers: header };
    //kada smo napravili options objekat onda on ide u get poziv
    return this.http.get(
      'https://moviesdatabase.p.rapidapi.com/titles/utils/genres',
      options
    );
  }

  getMovies() {
    //1. Da bi napravili HTTP poziv prvo moramo u konstruktoru
    //    ukljuciti HttpClient servis

    //za svaki API headeri su specificni i razliciti
    var header = new HttpHeaders()
      .set(
        'X-RapidAPI-Key',
        '2461f21ab8msh738b8d6f4c5f4e5p1b6190jsna5aa3e0bf1e3'
      )
      .set(
        'X-RapidAPI-Host',
        'moviesdatabase.p.rapidapi.com'
      )

    //headeri se nalaze u options objektu, a options objekat saljemo u HTTP poziv
    var options = { headers: header };
    //kada smo napravili options objekat onda on ide u get poziv
    return this.http.get(
      'https://moviesdatabase.p.rapidapi.com/titles',
      options
    );
  }


}
