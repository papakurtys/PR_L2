let nav = '<nav><a href="index.html">Home</a>  ' +  '<a href="contact.html">Kontakt</a></nav>'; //- między cudzysłów zawartość kodu HTML nawigacji

let navbarElem = document.querySelector(".navbar"); //lub inny sposób opisany wyżej

navbarElem.innerHTML = nav;
