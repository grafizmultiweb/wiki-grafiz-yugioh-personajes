  //////////////////  Acordeon-01

  function setMaxHeight(el) {
    if (!el) return;
    el.style.maxHeight = 'none';
    const h = el.scrollHeight;
    el.style.maxHeight = h + 'px';
  }
  function bubbleHeights(fromEl) {
    let p = fromEl.parentElement;
    while (p) {
      if (p.classList?.contains('accordion-content')) {
        const header = p.previousElementSibling;
        if (header && header.classList.contains('accordion-header') && header.classList.contains('active')) {
          setMaxHeight(p);
        }
      }
      p = p.parentElement;
    }
  }
  document.querySelectorAll('.accordion-header').forEach(btn => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      const opening = !btn.classList.contains('active');
  
      btn.classList.toggle('active');
  
      if (opening) {
        setMaxHeight(content);
        bubbleHeights(content);
      } else {
        content.style.maxHeight = null;
        bubbleHeights(content);
      }
    });
  });
  const ro = new ResizeObserver(entries => {
    for (const entry of entries) {
      const el = entry.target;
      const header = el.previousElementSibling;
      if (header && header.classList.contains('accordion-header') && header.classList.contains('active')) {
        setMaxHeight(el);
        bubbleHeights(el);
      }
    }
  });
  document.querySelectorAll('.accordion-content').forEach(c => ro.observe(c));
  window.addEventListener('resize', () => {
    document.querySelectorAll('.accordion-header.active + .accordion-content')
      .forEach(setMaxHeight);
  });

  /* =========================================
   SISTEMA NEXO - VOLVER AL INICIO
   ========================================= */

const nexoRegreso = document.getElementById("nexoRegreso");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        nexoRegreso.classList.add("nexo-visible");

    } else {

        nexoRegreso.classList.remove("nexo-visible");

    }

});
nexoRegreso.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});



/* =========================================
   PRELOADER
========================================= */


(function () {

    "use strict";

    function gmxUltraHidePreloader() {

        const gmxUltraPreloader =
            document.getElementById("gmx-ultra-preloader");


        if (!gmxUltraPreloader) {
            return;
        }
        setTimeout(function () {

            gmxUltraPreloader.classList.add(
                "gmx-ultra-preloader--hidden"
            );
            setTimeout(function () {

                gmxUltraPreloader.style.display = "none";

            }, 900);


        }, 700);

    }
    window.addEventListener(
        "load",
        gmxUltraHidePreloader
    );
})();



  ////////////////// PLANTIlla

  const slots = document.querySelectorAll(".slot");
  let dragged = null;

  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("dragstart", e => {
      dragged = card;
      setTimeout(() => card.style.display = "none", 0);
    });

    card.addEventListener("dragend", e => {
      dragged.style.display = "flex";
      dragged = null;
    });
  });

  slots.forEach(slot => {
    slot.addEventListener("dragover", e => {
      e.preventDefault();
      slot.classList.add("over");
    });

    slot.addEventListener("dragleave", e => {
      slot.classList.remove("over");
    });

    slot.addEventListener("drop", e => {
      slot.classList.remove("over");
      if (slot.firstChild) {
        // Intercambiar cartas si ya hay una en el slot
        let temp = slot.firstChild;
        let parentDragged = dragged.parentNode;
        slot.replaceChild(dragged, temp);
        parentDragged.appendChild(temp);
      } else {
        slot.appendChild(dragged);
      }
    });
  });



//////////////////////////////////////////

function pxChangeImage(url) {
    document.getElementById("pxMainImage").src = url;
  }


const associations = [
  {
    name: "UEFA",
    img: "https://i.postimg.cc/XJZx0mFw/uefa.png",
    countries: [
      {
        name: "España",
        img: "https://i.postimg.cc/ZYBDkBF1/espa-a.png",
        clubs: [
          { name: "Athletic Club", img: "https://i.ibb.co/bMsFNRp5/espa-a-athetic.png", link: "https://grafizmultiweb.github.io/grafizfutbol-clubes-1/athletic.html" },
          { name: "Atletico Madrid", img: "https://i.ibb.co/39495Tzb/espa-a-atleticomadrid.png", link: "https://grafizmultiweb.github.io/grafizfutbol-clubes-1/atletico-madrid.html" },
          { name: "Barcelona", img: "https://i.ibb.co/gZKPbQBr/espa-a-barcelona.png", link: "https://grafizmultiweb.github.io/grafizfutbol-clubes-1/barcelona.html" },
          { name: "Celta de Vigo", img: "https://i.ibb.co/gFvhyVQ8/espa-a-celtavigo.png", link: "https://grafizmultiweb.github.io/grafizfutbol-clubes-1/celta-vigo.html" },
          { name: "Deportivo Alavés", img: "https://i.ibb.co/r2tC6Ssf/espa-a-deportivoalaves.png", link: "https://grafizmultiweb.github.io/grafizfutbol-clubes-1/deportivo-alaves.html" },
          { name: "Espanyol", img: "https://i.ibb.co/0pJkX4ht/espa-a-espanyol.png", link: "https://grafizmultiweb.github.io/grafizfutbol-clubes-1/espanyol.html" },
          { name: "Getafe", img: "https://i.ibb.co/N6dtXmLh/espa-a-getafe.png", link: "https://grafizmultiweb.github.io/grafizfutbol-clubes-1/getafe.html" },
          { name: "Girona", img: "https://i.ibb.co/G4Fp0Q3r/espa-a-girona.png", link: "https://grafizmultiweb.github.io/grafizfutbol-clubes-1/girona.html" },
          { name: "Mallorca", img: "https://i.ibb.co/qMWh0Znm/espa-a-mallorca.png", link: "https://grafizmultiweb.github.io/grafizfutbol-clubes-1/mallorca.html" },
          { name: "Osasuna", img: "https://i.ibb.co/9kq6mbLB/espa-a-osasuna.png", link: "https://grafizmultiweb.github.io/grafizfutbol-clubes-1/osasuna.html" },
          { name: "Rayo Vallecano", img: "https://i.ibb.co/qLRz1G5w/espa-a-rayovallecano.png", link: "https://grafizmultiweb.github.io/grafizfutbol-clubes-1/rayo-vallecano.html" },
          { name: "Real Betis", img: "https://i.ibb.co/BHkHYp7R/espa-a-realbetis.png", link: "https://grafizmultiweb.github.io/grafizfutbol-clubes-1/real-betis.html" },
          { name: "Real Madrid", img: "https://i.ibb.co/7JCgfybT/espa-a-realmadrid.png", link: "https://grafizmultiweb.github.io/grafizfutbol-clubes-1/real-madrid.html" },
          { name: "Real Sociedad", img: "https://i.ibb.co/JW3XQzh3/espa-a-realsociedad.png", link: "https://grafizmultiweb.github.io/grafizfutbol-clubes-1/real-sociedad.html" },
          { name: "Sevilla", img: "https://i.ibb.co/YTt90xKH/espa-a-sevilla.png", link: "https://grafizmultiweb.github.io/grafizfutbol-clubes-1/sevilla.html" },
          { name: "Valencia", img: "https://i.ibb.co/QjKYHRZj/espa-a-valencia.png", link: "https://grafizmultiweb.github.io/grafizfutbol-clubes-1/valencia.html" },
          { name: "Villareal", img: "https://i.ibb.co/qL82H8VH/espa-a-villareal.png", link: "https://grafizmultiweb.github.io/grafizfutbol-clubes-1/villareal.html" }
        ]
      },
      {
        name: "Alemania",
        img: "https://i.ibb.co/Wy2M3KK/alemania.png",
        clubs: [
          { name: "Augsburg", img: "https://i.ibb.co/Cpt0FMHv/alemania-augsburgo.png", link: "https://grafizmultiweb.github.io/grafizfutbol-clubes-1/augsburg.html" },
          { name: "Bayer Leverkusen", img: "https://i.ibb.co/RpnZ6cXJ/alemania-bayerleverkusen.png", link: "https://grafizmultiweb.github.io/grafizfutbol-clubes-1/bayer_leverkusen.html" },
          { name: "Bayern Munich", img: "https://i.ibb.co/gMYpV2N1/alemania-bayernmunich.png", link: "https://grafizmultiweb.github.io/grafizfutbol-clubes-1/bayern_munich.html" },
          { name: "B. Monchengladbach", img: "https://i.ibb.co/wrQ64FMg/alemania-borussiamonchengladbach.png", link: "https://grafizmultiweb.github.io/grafizfutbol-clubes-1/b_monchengladbach.html" },
          { name: "Borussia Dortmund", img: "https://i.ibb.co/N6sFrPZP/alemania-bvb.png", link: "https://grafizmultiweb.github.io/grafizfutbol-clubes-1/borussia_dortmund.html" },
          { name: "Colonia", img: "https://i.ibb.co/zhfG1sVm/alemania-colonia.png", link: "https://grafizmultiweb.github.io/grafizfutbol-clubes-1/colonia.html" },
          { name: "Eintracht Fráncfort", img: "https://i.ibb.co/wNQHF1t5/alemania-eintrachtfrankfurt.png", link: "https://grafizmultiweb.github.io/grafizfutbol-clubes-1/eintracht_francfort.html" },
          { name: "Friburgo", img: "https://i.ibb.co/fdGfPVRr/alemania-friburgo.png", link: "https://grafizmultiweb.github.io/grafizfutbol-clubes-1/friburgo.html" },
          { name: "Hertha Berlin", img: "https://i.ibb.co/wr3byY88/alemania-herthaberlin.png", link: "https://grafizmultiweb.github.io/grafizfutbol-clubes-1/hertha-berlin.html" },
          { name: "Hoffenheim", img: "https://i.ibb.co/qLjhhspg/alemania-hoffenheim.png", link: "https://grafizmultiweb.github.io/grafizfutbol-clubes-1/hoffenheim.html" },
          { name: "Mainz 05", img: "https://i.ibb.co/MDcNxMCr/alemania-mainz05.png", link: "https://grafizmultiweb.github.io/grafizfutbol-clubes-1/mainz-05.html" },
          { name: "RB Leipzig", img: "https://i.ibb.co/tTgvm3Rr/alemania-leipzig.png", link: "https://grafizmultiweb.github.io/grafizfutbol-clubes-1/leipzig.html" },
          { name: "Stuttgart", img: "https://i.ibb.co/wZ7KfPnR/alemania-stuttgart.png", link: "https://grafizmultiweb.github.io/grafizfutbol-clubes-1/stuttgart.html" },
          { name: "Union Berlin", img: "https://i.ibb.co/79fPjbN/alemania-unionberlin.png", link: "https://grafizmultiweb.github.io/grafizfutbol-clubes-1/union-berlin.html" },
          { name: "Weder Bremen", img: "https://i.ibb.co/2YW8rvby/alemania-wederbremen.png", link: "https://grafizmultiweb.github.io/grafizfutbol-clubes-1/weder-bremen.html" },
          { name: "Wolfburgo", img: "https://i.ibb.co/B2RxXp91/alemania-wolfburgo.png", link: "https://grafizmultiweb.github.io/grafizfutbol-clubes-1/wolfburgo.html" }
        ]
      },
      {
        name: "Inglaterra",
        img: "https://i.ibb.co/hgyGCpW/inglaterra.png",
        clubs: [
          { name: "Arsenal", img: "https://i.ibb.co/Xcj0ynZ/inglaterrra-arsenal.png", link: "https://manutd.com" },
          { name: "Aston Villa", img: "https://i.ibb.co/B2kgdF6M/inglaterrra-astonvilla.png", link: "https://manutd.com" },
          { name: "Bournemouth", img: "https://i.ibb.co/TBNKcpZd/inglaterrra-bournemouth.png", link: "https://manutd.com" },
          { name: "Brentford", img: "https://i.ibb.co/9kK7knJS/inglaterrra-brentford.png", link: "https://manutd.com" },
          { name: "Brighton & Hove", img: "https://i.ibb.co/4nPR3tQB/inglaterrra-brighton-hove.png", link: "https://manutd.com" },
          { name: "Chelsea", img: "https://i.ibb.co/G4dS6hfw/inglaterrra-chelsea.png", link: "https://manutd.com" },
          { name: "Crystal Palace", img: "https://i.ibb.co/NnSjqF0B/inglaterrra-crystalpalace.png", link: "https://manutd.com" },
          { name: "Everton", img: "https://i.ibb.co/m5YgjY7X/inglaterrra-everton.png", link: "https://manutd.com" },
          { name: "Fulham", img: "https://i.ibb.co/8gqCD6cQ/inglaterrra-fulham.png", link: "https://manutd.com" },
          { name: "Leeds United", img: "https://i.ibb.co/rN0XV9m/inglaterrra-leedsunited.png", link: "https://manutd.com" },
          { name: "Leicester City", img: "https://i.ibb.co/DPrTZyXW/inglaterrra-leicestercity.png", link: "https://manutd.com" },
          { name: "Liverpool", img: "https://i.ibb.co/8nQW4RHg/inglaterrra-liverpool.png", link: "https://manutd.com" },
          { name: "Manchester City", img: "https://i.ibb.co/Jw8DbHs3/inglaterrra-manchestercity.png", link: "https://manutd.com" },
          { name: "Manchester United", img: "https://i.ibb.co/GfLqFB3J/inglaterrra-manchesterunited.png", link: "https://manutd.com" },
          { name: "Newcastle United", img: "https://i.ibb.co/FLPVdhxJ/inglaterrra-newcastle.png", link: "https://manutd.com" },
          { name: "Nottingham Forest", img: "https://i.ibb.co/Y7DzNdsf/inglaterrra-nottinghamforest.png", link: "https://manutd.com" },
          { name: "Tottenham Hotspur", img: "https://i.ibb.co/B21Qpw5D/inglaterrra-tothenham.png", link: "https://manutd.com" },
          { name: "Southampton ", img: "https://i.ibb.co/QjNJdZFg/inglaterrra-southampton.png", link: "https://manutd.com" },
          { name: "West Ham United", img: "https://i.ibb.co/kgKFXj5R/inglaterrra-westham.png", link: "https://manutd.com" },
          { name: "Watford", img: "https://i.ibb.co/DH2xcwgf/inglaterrra-watford.png", link: "https://manutd.com" },
          { name: "Wolverhampton", img: "https://i.ibb.co/SwmVX0ct/inglaterrra-wolverhampton.png", link: "https://liverpoolfc.com" }
        ]
      },
      {
        name: "Francia",
        img: "https://i.ibb.co/TrmRWdh/francia.png",
        clubs: [
          { name: "xxxNOMBRExxx", img: "xxxxIMAGEN", link: "https://manutd.com" },
          { name: "xxxNOMBRExxx", img: "xxxxIMAGEN", link: "https://liverpoolfc.com" }
        ]
      }
    ]
  },
  {
    name: "CONMEBOL",
    img: "https://i.ibb.co/LXt8SSg8/conmebol.png",
    countries: [
      {
        name: "Argentina",
        img: "https://i.ibb.co/LZZdYcQ/chile.png",
        clubs: [
          { name: "Boca Juniors", img: "https://i.ibb.co/gMYpV2N1/alemania-bayernmunich.png", link: "https://bocajuniors.com" },
          { name: "River Plate", img: "https://i.ibb.co/N6sFrPZP/alemania-bvb.png", link: "https://riverplate.com" }
        ]
      },
      {
        name: "Brasil",
        img: "https://i.ibb.co/LDGBcP5b/bolivia.png",
        clubs: [
          { name: "Flamengo", img: "https://i.ibb.co/79fPjbN/alemania-unionberlin.png", link: "https://flamengo.com" },
          { name: "Palmeiras", img: "https://i.ibb.co/Cpt0FMHv/alemania-augsburgo.png", link: "https://palmeiras.com" }
        ]
      }
    ]
  }
];

// Índices actuales
let assocIndex = 0;
let countryIndex = 0;
let clubIndex = 0;

// Inicialización
function init() {
  updateAssociation();
  updateCountry();
  updateClub();
}

// Cambiar Asociación
function changeAssociation(step) {
  assocIndex = (assocIndex + step + associations.length) % associations.length;
  countryIndex = 0; // resetear país
  clubIndex = 0; // resetear club
  updateAssociation();
  updateCountry();
  updateClub();
}

// Cambiar País
function changeCountry(step) {
  const countries = associations[assocIndex].countries;
  countryIndex = (countryIndex + step + countries.length) % countries.length;
  clubIndex = 0; // resetear club
  updateCountry();
  updateClub();
}

// Cambiar Club
function changeClub(step) {
  const clubs = associations[assocIndex].countries[countryIndex].clubs;
  clubIndex = (clubIndex + step + clubs.length) % clubs.length;
  updateClub();
}

// Actualizar Asociación
function updateAssociation() {
  const assoc = associations[assocIndex];
  document.getElementById("fifa-association-img").src = assoc.img;
  document.getElementById("fifa-association-name").textContent = assoc.name;
}

// Actualizar País
function updateCountry() {
  const country = associations[assocIndex].countries[countryIndex];
  document.getElementById("fifa-country-img").src = country.img;
  document.getElementById("fifa-country-name").textContent = country.name;
}

// Actualizar Club
function updateClub() {
  const club = associations[assocIndex].countries[countryIndex].clubs[clubIndex];
  document.getElementById("fifa-club-img").src = club.img;
  document.getElementById("fifa-club-name").textContent = club.name;
  document.getElementById("fifa-select-btn").href = club.link;
}

// Iniciar al cargar
window.onload = init;
