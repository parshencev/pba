var library={books:[{id:1,img:"1.jpg",title:"Мастер и маргарита",author:"Михаил Булгаков",rating:4,votes:666,genre:[{id:1,title:"Роман"},{id:2,title:"Мистика"}]},{id:2,img:"2.jpg",title:"Мёртвые души",author:"Николай Гоголь",rating:3,votes:552,genre:[{id:3,title:"Политика"},{id:4,title:"Сатира"}]},{id:3,img:"3.jpg",title:"Война и мир",author:"Лев Толстой",rating:4,votes:332,genre:[{id:1,title:"Роман"}]},{id:4,img:"4.jpg",title:"Евгений Онегин",author:"Аександр Пушкин",rating:3,votes:203,genre:[{id:1,title:"Роман"},{id:5,title:"Стих"}]},{id:5,img:"5.jpg",title:"Гамлет",author:"Уильям Шекспир",rating:2,votes:421,genre:[{id:6,title:"Трагедия"}]},{id:6,img:"6.jpg",title:"Ромео и Джульета",author:"Уильям Шекспир",rating:4,votes:521,genre:[{id:6,title:"Трагедия"}]},{id:7,img:"7.jpg",title:"Муму",author:"Иван Тургеньев",rating:1,votes:123,genre:[{id:7,title:"Рассказ"}]},{id:8,img:"8.jpg",title:"Толстый и тонкий",author:"Антон Чехов",rating:3,votes:421,genre:[{id:7,title:"Рассказ"}]},{id:9,img:"9.jpg",title:"Лев и собачка",author:"Лев Толстой",rating:3,votes:521,genre:[{id:5,title:"Стих"}]},{id:10,img:"10.jpg",title:"Таинственный остров",author:"Жуль Верн",rating:4,votes:452,genre:[{id:8,title:"Приключение"},{id:1,title:"Роман"}]},{id:11,img:"11.jpg",title:"Тарас Бульба",author:"Микола Гоголь",rating:2,votes:334,genre:[{id:9,title:"Повесть"}]},{id:12,img:"12.jpg",title:"Анна Каренина",author:"Лев толстой",rating:4,votes:623,genre:[{id:1,title:"Роман"}]}],filter:function(e){return library.books.map(function(t){return t.title==e&&t.id})},viewFilteredDom:function(e){var t=library.filter(e),n=document.querySelectorAll(".block");for(j=0;j<n.length;j++)n[j].classList.add("close");for(i=0;i<t.length;i++)"number"==typeof t[i]&&(console.log(document.getElementById("book_"+t[i])),document.getElementById("book_"+t[i]).classList.remove("close"),document.getElementById("book_"+t[i]).classList.add("open"));if(!e)for(i=0;i<n.length;i++)n[i].classList.remove("open"),n[i].classList.remove("close")},domElement:"wrapper",createDom:function(){var e=document.getElementById(library.domElement);library.books.map(function(t){var n=document.createElement("div"),d=document.createElement("img"),r=document.createElement("div"),a=document.createElement("div"),o=document.createElement("div"),l=document.createElement("div"),s=document.createElement("div");if(n.classList.add("block"),n.id="book_"+t.id,d.classList.add("photo"),r.classList.add("rating"),a.classList.add("author"),o.classList.add("title"),l.classList.add("votes"),s.classList.add("genre"),d.src="img/"+t.img,a.innerHTML=t.author,o.innerHTML=t.title,l.innerHTML=t.votes,t.rating>=0){for(i=0;i<t.rating;i++){var g=document.createElement("img");g.classList.add("star"),g.src="img/yellowStar.png",r.appendChild(g)}if(t.rating<4)for(i=0;i<4-t.rating;i++){var g=document.createElement("img");g.classList.add("star"),g.src="img/star.png",r.appendChild(g)}}t.genre.map(function(e){var t=document.createElement("span");t.classList.add("genreItem"),t.innerHTML=e.title,s.appendChild(t)}),n.appendChild(o),n.appendChild(a),n.appendChild(r),n.appendChild(d),n.appendChild(l),n.appendChild(s),e.appendChild(n)})}};document.onkeypress=function(e){var t=e||window.event;13==t.keyCode&&library.viewFilteredDom(document.getElementById("text").value)},document.addEventListener("DOMContentLoaded",function(){library.createDom()});