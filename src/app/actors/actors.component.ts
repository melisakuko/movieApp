import { Component } from '@angular/core';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent {
// The Shawshank Redemption
actors: any[] = [
  {
    name: "Tim",
    surname: "Robbins",
    age: 63,
    placeOfBirth: "West Covina, California, USA",
    height: "6' 5\" (1.96 m)",
    image: "https://m.media-amazon.com/images/M/MV5BMTI1OTYxNzAxOF5BMl5BanBnXkFtZTYwNTE5ODI4._V1_.jpg",
  },
  {
    name: "Morgan",
    surname: "Freeman",
    age: 84,
    placeOfBirth: "Memphis, Tennessee, USA",
    height: "6' 2\" (1.88 m)",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Morgan_Freeman_Deauville_2018.jpg/640px-Morgan_Freeman_Deauville_2018.jpg",
  },
  {
    name: "Bob",
    surname: "Gunton",
    age: 76,
    placeOfBirth: "Santa Monica, California, USA",
    height: "6' 1\" (1.85 m)",
    image: "data:image/jpeg;base64,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",
  },
// The Godfather
  {
    name: "Marlon",
    surname: "Brando",
    age: "1924-2004",
    placeOfBirth: "Omaha, Nebraska, USA",
    height: "5' 9\" (1.75 m)",
    image: "https://cdn.britannica.com/97/90697-050-1AE6A31D/Marlon-Brando-A-Streetcar-Named-Desire.jpg",
  },
  {
    name: "Al",
    surname: "Pacino",
    age: 82,
    placeOfBirth: "Manhattan, New York City, New York, USA",
    height: "5' 7\" (1.7 m)",
    image: "https://m.media-amazon.com/images/M/MV5BMTQzMzg1ODAyNl5BMl5BanBnXkFtZTYwMjAxODQ1._V1_FMjpg_UX1000_.jpg",
  },
  {
    name: "James",
    surname: "Caan",
    age: 82,
    placeOfBirth: "The Bronx, New York City, New York, USA",
    height: "5' 9\" (1.75 m)",
    image: "https://m.media-amazon.com/images/M/MV5BMTI5NjkyNDQ3NV5BMl5BanBnXkFtZTcwNjY5NTQ0Mw@@._V1_.jpg",
  },

// The Dark Knight
  {
    name: "Christian",
    surname: "Bale",
    age: 48,
    placeOfBirth: "Haverfordwest, Pembrokeshire, Wales, UK",
    height: "6' 0½\" (1.84 m)",
    image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/S/pv-target-images/987198608664c0ea883b61671e86c0cfdddf59fddd2449923c538811a00c51b2.jpg",
  },
  {
    name: "Heath",
    surname: "Ledger",
    age: "1979-2008",
    placeOfBirth: "Perth, Western Australia, Australia",
    height: "6' 1\" (1.85 m)",
    image: "https://m.media-amazon.com/images/M/MV5BMTI2NTY0NzA4MF5BMl5BanBnXkFtZTYwMjE1MDE0._V1_FMjpg_UX1000_.jpg",
  },
  {
    name: "Aaron",
    surname: "Eckhart",
    age: 54,
    placeOfBirth: "Cupertino, California, USA",
    height: "6' 0½\" (1.84 m)",
    image: "https://m.media-amazon.com/images/M/MV5BMTc4MTAyNzMzNF5BMl5BanBnXkFtZTcwMzQ5MzQzMg@@._V1_.jpg"
  }
  ];
}
