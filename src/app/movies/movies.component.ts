import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  constructor(private dataService: DataService) { }
  ngOnInit(): void {
    this.fetchMovies();
  }
  movies: any;
  /*   movies: any[] = [
      {
        movieID: 1,
        title: 'The Shawshank Redemption',
        director: 'Frank Darabont',
        year: 1994,
        description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
        genre: 'Drama',
        image: 'https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg',
        showDescription: true
      },
      {
        movieID: 2,
        title: 'The Godfather',
        director: 'Francis Ford Coppola',
        year: 1972,
        description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
        genre: 'Crime',
        image: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
        showDescription: true
      },
      {
        movieID: 3,
        title: 'The Dark Knight',
        director: 'Christopher Nolan',
        year: 2008,
        description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
        genre: 'Action',
        image: 'https://resizing.flixster.com/WAHXGKleT3QvhqHUlFGIRgcQAjU=/206x305/v2/https://flxt.tmsimg.com/assets/p173378_p_v8_au.jpg',
        showDescription: true
      },
      {
        movieID: 4,
        title: 'Schindler\'s List',
        director: 'Steven Spielberg',
        year: 1993,
        description: 'In Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.',
        genre: 'Drama',
        image: 'data:image/jpeg;base64,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',
        showDescription: true
      },
      {
        movieID: 5,
        title: 'Forrest Gump',
        director: 'Robert Zemeckis',
        year: 1994,
        description: 'The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate and other historical events unfold through the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.',
        genre: 'Drama',
        image: 'https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
        showDescription: true
      }
    ];
   */
  showDesc(id: number) {
    for (let i = 0; i <= this.movies.length; i++) {
      if (this.movies[i].movieID == id) {
        this.movies[i].showDescription = !this.movies[i].showDescription;
      }
    }
  }
  fetchMovies() {
    this.dataService.getMovies()
      .subscribe((response: any) => {
        this.movies = response.results; //.results - da izvadimo iz odgovora rezultate 
        console.log(this.movies);
      })
  }
}
