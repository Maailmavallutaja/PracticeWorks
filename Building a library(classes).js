class Catalog {
  constructor(){
    
  }
}
class Media extends Catalog {
  constructor(title){
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings(){
    return this._ratings
  }
  set isCheckedOut(newStatus){
    this._isCheckedOut = newStatus;
  }
 
  toggleCheckOutStatus(){
    if(this.isCheckedOut === true) {
      this.isCheckedOut = false;
    } else if(this.isCheckedOut === false){
      this.isCheckedOut = true;
    } 
  }
  getAverageRating(){
   let ratingsSum = this.ratings.reduce((acc, current) =>
     acc + current, 0);
   return ratingsSum / this.ratings.length;    
  }
  addRating(rating){
    if (0 <= rating <= 5){
    this.ratings.push(rating);
  	} else {
    console.log ('Please add rating from 0 up to 5.')
  	}
  }
}
class Book extends Media{
  constructor(author, title, pages){
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author(){
    return this._author;
  }
  get pages(){
    return this._pages;
  }
}
class Movie extends Media{
  constructor(director, title, runTime, movieCast){
    super(title);
    this._director = director;
    this._runTime = runTime;
    this._movieCast = movieCast;
  }
  get director(){
    return this._director;
  }
  get runTime(){
    return this._runTime;
  }
  get movieCast(){
    return this._movieCast;
  }
}
class Cd extends Media{
  constructor(artist, title, songs){
    super(title);
    this._artist = artist;
    this._songs = [];
  }
  get artist(){
    return this._artist;
  }
  get songs(){
    return this._songs;
  }
  shuffle(){
    return this.songs[Math.floor(Math.random() * this.songs.length)]
  }
}
const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
//console.log(historyOfEverything.isCheckedOut);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Jan de Bont', 'Speed', 116, ['fgasd', 'gsdf'])
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());
console.log(speed.movieCast)