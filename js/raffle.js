class Raffle {
  constructor() {
    this.students = [];
    this.finalPairs = [];
    this.indexCounter = 0;

    $("select").on("change", (e) => {
      this.selectSquad();
    });
  }

  selectSquad() {
    $(".card").remove();
    const selected = document.getElementById("squad").value;

    this.students = _.shuffle([
      { name: "Anita", img: "./img/anita.jpg", squad: "Kraken" },
      { name: "Andre", img: "./img/andre.jpg", squad: "Kraken" },
      { name: "Andrés", img: "./img/andres.jpg", squad: "Kraken" },
      { name: "Ángela", img: "./img/angela.jpg", squad: "Kraken" },
      { name: "Anna", img: "./img/anna.JPG", squad: "Kraken" },
      { name: "Arseni", img: "./img/arseni.JPG", squad: "Kraken" },
      { name: "Cristian", img: "./img/cristian.jpg", squad: "Kraken" },
      { name: "Diego", img: "./img/diego.jpg", squad: "Kraken" },
      { name: "Edu", img: "./img/edu.JPG", squad: "Kraken" },
      { name: "Ernesto", img: "./img/ernesto.jpg", squad: "Kraken" },
      { name: "Estefanía", img: "./img/estefania.jpg", squad: "Kraken" },
      { name: "Gonzalo", img: "./img/gonzalo.jpg", squad: "Kraken" },
      { name: "Guillermo Rodríguez", img: "./img/guilleR.jpg", squad: "Kraken" },
      { name: "Guillermo Pérez", img: "./img/guillep.jpg", squad: "Kraken" },
      { name: "Guillermo Ávila", img: "./img/guillea.jpg", squad: "Kraken" },
      { name: "Gustavo", img: "./img/gustavo.JPG", squad: "Kraken" },
      { name: "Hiba", img: "./img/hiba.jpg", squad: "Kraken" },
      { name: "Inés", img: "./img/ines.jpg", squad: "Kraken" },
      { name: "Íñigo", img: "./img/iñigo.jpg", squad: "Kraken" },
      { name: "Jean Carlo", img: "./img/jeancarlo.jpg", squad: "Kraken" },
      { name: "Jorge", img: "./img/jorge.jpg", squad: "Kraken" },
      { name: "Judit", img: "./img/judith.jpg", squad: "Kraken" },
      { name: "Laura", img: "./img/laura.jpg", squad: "Kraken" },
      { name: "Mario", img: "./img/mario.jpg", squad: "Kraken" },
      { name: "Miguel", img: "./img/miguel.jpg", squad: "Kraken" },
      { name: "Mikel", img: "./img/mikel.jpg", squad: "Kraken" },
      { name: "Mónica", img: "./img/monica.jpg", squad: "Kraken" },
      { name: "Ricardo M.", img: "./img/ricardoM.jpg", squad: "Kraken" },
      { name: "Ricardo R.", img: "./img/ricardoR.jpg", squad: "Kraken" },
      { name: "Roberto", img: "./img/roberto.jpg", squad: "Kraken" },
      { name: "Salva", img: "./img/salva.jpg", squad: "Kraken" },
      { name: "Sara", img: "./img/sara.jpg", squad: "Kraken" },
      { name: "Shirley", img: "./img/shirley.jpg", squad: "Kraken" },
    ]);

    selected == "all"
      ? this.students.map((e) => {
        this.addCard(e);
      })
      : this.students
        .filter((e) => e.squad == selected)
        .map((e) => {
          this.addCard(e);
        });

    $(".card").on("click", (e) => {
      let total = $(".card.clicked").length;
      if (!$(e.currentTarget).hasClass("clicked")) {
        e.currentTarget.setAttribute("attr-name", this.students[this.indexCounter].name)
        e.currentTarget.querySelector(".side.front").innerHTML = `<img src=${this.students[this.indexCounter].img}><p>Lalala</p>`
        this.indexCounter++
        $(e.currentTarget).addClass("clicked");
        let name = $(e.currentTarget).attr("attr-name");
        this.addPaired(name);
      }
    });
  }

  addCard() {
    let card_el = $(`
        <div class="container">
          <div class="card" attr-name="">
              <div class="side back">
                  <img src="https://www.siliconweek.com/wp-content/uploads/2017/10/article_595_contents_6763_capital_big.jpg">
                  </div>
              <div class="side front">
              </div>
          </div>
        </div>
        `);
    $("#board").append(card_el);
  }

  /* addCard(card) {
    let card_el = $(`
        <div class="card" attr-name="${card.name}">
            <div class="side back">
                <img src="https://www.siliconweek.com/wp-content/uploads/2017/10/article_595_contents_6763_capital_big.jpg">
            </div>
            <div class="side front">
                <img src="${card.img}">
            </div>
        </div>
        `);
    $("#board").append(card_el);
  } */

  addPaired(name) {
    this.finalPairs.push(name);
    let chunks = _.chunk(this.finalPairs, 2);
    let pairs = $("#pairs");
    pairs.empty();
    chunks.forEach((ch) => {
      let pair = $(`
                <div class="pair">
                  <span>${ch[0]}</span>
                   - 
                  <span>${ch[1] ? ch[1] : "...."}</span>
                </div>
            `);
      pairs.append(pair);
    });
  }
}
