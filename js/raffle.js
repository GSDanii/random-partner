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
      { name: "Alberto", img: "./img/Alberto_naval3.jpg", squad: "Kraken" },
      { name: "Alejandro Abad", img: "", squad: "Kraken" },
      { name: "Alex Lino", img: "./img/Alex_lino.jpg", squad: "Kraken" },
      { name: "Alexis", img: "./img/Alexis.jpg", squad: "Kraken" },
      { name: "Catalina", img: "./img/Catalina.jpg", squad: "Kraken" },
      { name: "Christian", img: "./img/christian.jpg", squad: "Kraken" },
      { name: "David Fernández", img: "", squad: "Kraken" },
      { name: "David Muñoz", img: "./img/David_muñoz.jpg", squad: "Kraken" },
      { name: "David Daganzo", img: "./img/David_Daganzo.jpg", squad: "Kraken" },
      { name: "Gonzalo", img: "./img/Gonzalo.jpg", squad: "Kraken" },
      { name: "Hugo", img: "./img/Hugo.jpg", squad: "Kraken" },
      { name: "Jadde", img: "./img/Jadde.jpg", squad: "Kraken" },
      { name: "João", img: ".", squad: "Kraken" },
      { name: "Juan Pablo", img: "", squad: "Kraken" },
      { name: "Juliana", img: "./img/Juliana.jpg", squad: "Kraken" },
      { name: "Manuel", img: "./img/Manuel.png", squad: "Kraken" },
      { name: "Marta", img: "./img/marta.png", squad: "Kraken" },
      { name: "Miguel", img: "./img/Miguel_Angel.jpg", squad: "Kraken" },
      { name: "Naomi", img: "./img/Naomi.jpg", squad: "Kraken" },
      { name: "Pedro", img: "", squad: "Kraken" },
      { name: "Raquel", img: "", squad: "Kraken" },
      { name: "Teresa", img: "../img/teresa.jpg", squad: "Kraken" },
      { name: "Víctor", img: "./img/Victor.jpg", squad: "Kraken" },
      { name: "Yanxia", img: "./img/yanxia.jpg", squad: "Kraken" },
      
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
