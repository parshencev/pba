var library = {
  books:[
    {
      id:1,
      img:"1.jpg",
      title:"Мастер и маргарита",
      author: "Михаил Булгаков",
      rating: 4,
      votes: 666,
      genre: [
        {
          id: 1,
          title: "Роман"
        },
        {
          id: 2,
          title: "Мистика"
        }
      ]
    },
    {
      id:2,
      img:"2.jpg",
      title:"Мёртвые души",
      author: "Николай Гоголь",
      rating: 3,
      votes: 552,
      genre: [
        {
          id: 3,
          title: "Политика"
        },
        {
          id: 4,
          title: "Сатира"
        }
      ]
    },
    {
      id:3,
      img:"3.jpg",
      title:"Война и мир",
      author: "Лев Толстой",
      rating: 4,
      votes: 332,
      genre: [
        {
          id: 1,
          title: "Роман"
        }
      ]
    },
    {
      id:4,
      img:"4.jpg",
      title:"Евгений Онегин",
      author: "Аександр Пушкин",
      rating: 3,
      votes: 203,
      genre: [
        {
          id: 1,
          title: "Роман"
        },
        {
          id: 5,
          title: "Стих"
        }
      ]
    },
    {
      id:5,
      img:"5.jpg",
      title:"Гамлет",
      author: "Уильям Шекспир",
      rating: 2,
      votes: 421,
      genre: [
        {
          id: 6,
          title: "Трагедия"
        }
      ]
    },
    {
      id:6,
      img:"6.jpg",
      title:"Ромео и Джульета",
      author: "Уильям Шекспир",
      rating: 4,
      votes: 521,
      genre: [
        {
          id: 6,
          title: "Трагедия"
        }
      ]
    },
    {
      id:7,
      img:"7.jpg",
      title:"Муму",
      author: "Иван Тургеньев",
      rating: 1,
      votes: 123,
      genre: [
        {
          id: 7,
          title: "Рассказ"
        }
      ]
    },
    {
      id:8,
      img:"8.jpg",
      title:"Толстый и тонкий",
      author: "Антон Чехов",
      rating: 3,
      votes: 421,
      genre: [
        {
          id: 7,
          title: "Рассказ"
        }
      ]
    },
    {
      id:9,
      img:"9.jpg",
      title:"Лев и собачка",
      author: "Лев Толстой",
      rating: 3,
      votes: 521,
      genre: [
        {
          id: 5,
          title: "Стих"
        }
      ]
    },
    {
      id:10,
      img:"10.jpg",
      title:"Таинственный остров",
      author: "Жуль Верн",
      rating: 4,
      votes: 452,
      genre: [
        {
          id: 8,
          title: "Приключение"
        },
        {
          id: 1,
          title: "Роман"
        }
      ]
    },
    {
      id:11,
      img:"11.jpg",
      title:"Тарас Бульба",
      author: "Микола Гоголь",
      rating: 2,
      votes: 334,
      genre: [
        {
          id: 9,
          title: "Повесть"
        }
      ]
    },
    {
      id:12,
      img:"12.jpg",
      title:"Анна Каренина",
      author: "Лев толстой",
      rating: 4,
      votes: 623,
      genre: [
        {
          id: 1,
          title: "Роман"
        }
      ]
    }
  ],
  filter:function(bookName){
    return library.books.map(function(book){
      if(book.title == bookName){
        return book.id;
      }
      else{
        return false;
      }
    });
  },
  viewFilteredDom:function(bookName){
    var result = library.filter(bookName),
        blocks = document.querySelectorAll(".block");
    for(j=0;j<blocks.length;j++){
      blocks[j].classList.add("close");
    }
    for(i=0;i<result.length;i++){
      if(typeof(result[i]) == "number"){
        console.log(document.getElementById("book_"+result[i]));
        document.getElementById("book_"+result[i]).classList.remove("close");
        document.getElementById("book_"+result[i]).classList.add("open");
      }
    }
    if(!bookName){
      for(i=0;i<blocks.length;i++){
        blocks[i].classList.remove("open");
        blocks[i].classList.remove("close");
      }
    }
  },
  domElement:"wrapper",
  createDom:function(){
    var dom = document.getElementById(library.domElement);

    library.books.map(function(book){
      var block = document.createElement("div"),
          img = document.createElement("img"),
          rating = document.createElement("div"),
          author = document.createElement("div"),
          title = document.createElement("div"),
          votes = document.createElement("div"),
          genre = document.createElement("div");

      block.classList.add("block");
      block.id ="book_"+book.id;
      img.classList.add("photo");
      rating.classList.add("rating");
      author.classList.add("author");
      title.classList.add("title");
      votes.classList.add("votes");
      genre.classList.add("genre");

      img.src="img/"+book.img;
      author.innerHTML = book.author;
      title.innerHTML = book.title;
      votes.innerHTML = book.votes;

      if(book.rating>=0){
        for(i=0;i<book.rating;i++){
          var star = document.createElement("img");

          star.classList.add("star");
          star.src = "img/yellowStar.png";

          rating.appendChild(star);
        }
        if(book.rating<4){
          for(i=0;i<4-book.rating;i++){
            var star = document.createElement("img");

            star.classList.add("star");
            star.src = "img/star.png";

            rating.appendChild(star);
          }
        }
      }

      book.genre.map(function(bookGenre){
        var genreTitle = document.createElement("span");

        genreTitle.classList.add("genreItem");

        genreTitle.innerHTML = bookGenre.title;

        genre.appendChild(genreTitle);
      });

      block.appendChild(title);
      block.appendChild(author);
      block.appendChild(rating);
      block.appendChild(img);
      block.appendChild(votes);
      block.appendChild(genre);

      dom.appendChild(block);
    });

  }
}
document.onkeypress = function(event){
  var e = event || window.event;

  if(e.keyCode == 13){
    library.viewFilteredDom(document.getElementById('text').value);
  }
}
document.addEventListener("DOMContentLoaded",function(){
  library.createDom();
});
