class Osoba {
  constructor(ime, prezime) {
    this.ime = ime;
    this.prezime = prezime;
  }
}
class Doctor extends Osoba {
  constructor(ime, prezime, specijalizacija) {
    super(ime, prezime);
    this.specijalizacija = specijalizacija;
    this.pacijenti = [];

    logger(new Date(), `Novi doktor: ${ime} ${prezime}`);
  }
  dodajPacijenta(pacijent) {
    this.pacijenti.push(pacijent);
  }
  zakazivanjePregleda(datum, vreme, tipPregleda, imePacijenta) {
    this.tipPregleda = new Pregled(
      datum,
      vreme,
      tipPregleda,
      this.ime,
      imePacijenta
    );
    this.tipPregleda.zakazivanje();
  }
  obaviPregleda(datum, vreme, tipPregleda, imePacijenta) {
    this.tipPregleda = new Pregled(
      datum,
      vreme,
      tipPregleda,
      this.ime,
      imePacijenta
    );
    this.tipPregleda.obavljanjePregleda();
  }
}
class Pacijent extends Osoba {
  constructor(ime, prezime, jmbg, brojKartona) {
    super(ime, prezime);
    this.jmbg = jmbg;
    this.brojKartona = brojKartona;
    this.izabraniDoktor = null;
    logger(new Date(), `Novi pacijent: ${ime} ${prezime}`);
  }
  odabirDoktora(izabraniDoktor) {
    this.izabraniDoktor = izabraniDoktor;
    izabraniDoktor.dodajPacijenta(this);
    this.logger(izabraniDoktor.ime);
  }
  logger(izabraniDoktor) {
    new Date(), `pacijent odabrao doktora || ${izabraniDoktor}`;
  }
}

class Pregled {
  constructor(datum, vreme, tipPregleda, ime, imePacijenta) {
    this.datum = datum;
    this.vreme = vreme;
    this.tipPregleda = tipPregleda;
    this.ime = ime;
    this.imePacijenta = imePacijenta;
    this.gornjaVrednost = null;
    this.donjaVrednost = null;
    this.puls = null;
    this.vrednostSecera = null;
    this.vrednostHolesterola = null;
    this.vremePoslednjegObroka = null;
    this.rezultati = [];
    this.krvniPritisakLista = [];
    this.nivoSeceraLista = [];
    this.nivoHolesterolaLista = [];
  }
  zakazivanje() {
    if (this.tipPregleda === "krvniPritisak") {
      this.krvniPritisakLista.push(
        this.datum,
        this.vreme,
        this.ime,
        this.imePacijenta
      );
      return this.logger();
    } else if (this.tipPregleda === "nivoSecera") {
      this.nivoSeceraLista.push(
        this.datum,
        this.vreme,
        this.ime,
        this.imePacijenta
      );
      return this.logger();
    } else if (this.tipPregleda === "nivoHolesterola") {
      this.nivoHolesterolaLista.push(
        this.datum,
        this.vreme,
        this.ime,
        this.imePacijenta
      );
      return this.logger();
    }
  }
  logger() {
    new Date(), `pregled zakazan za || ${this.datum} || ${this.vreme}`;
  }
  obavljanjePregleda() {
    if (this.tipPregleda === "krvniPritisak") {
      let donji = Math.floor(Math.random() * (140 - 40) + 40);
      let gornji = Math.floor(Math.random() * (260 - 90) + 90);
      let puls = Math.floor(Math.random() * (180 - 40) + 40);
      this.rezultati.push(this.tipPregleda, donji, gornji, puls);
      console.log(
        "donji pritisak:" + donji + "gornji pritisak:" + gornji + "puls:" + puls
      );
    } else if (this.tipPregleda === "nivoSecera") {
      let vrednost = Math.floor(Math.random() * (5.6 - 4) + 4);
      let poslednjiObrok = Math.floor(Math.random() * 24);
      this.rezultati.push(this.tipPregleda, vrednost, poslednjiObrok);
      console.log(
        "nivo secera:" +
          vrednost +
          "vreme poslednjeg obroka:" +
          poslednjiObrok +
          "h"
      );
    } else if (this.tipPregleda === "nivoHolesterola") {
      let vrednost = Math.floor(Math.random() * (5.6 - 4) + 4);
      let poslednjiObrok = Math.floor(Math.random() * 24);
      this.rezultati.push(this.tipPregleda, vrednost, poslednjiObrok);
      console.log(
        "nivo holesterola:" +
          vrednost +
          "vreme poslednjeg obroka:" +
          poslednjiObrok +
          "h"
      );
    }
  }
}
function logger(dateTime, action) {
  console.log(`${action} || ${dateTime}`);
}

// simulacija

const docMilan = new Doctor("Milan", "Mladenovic", "Haematologyst");
const pacDragan = new Pacijent("Dragan", "Draganovic", "812394", "20102543201");
// const nivoSecera = new Pregled()
pacDragan.odabirDoktora(docMilan);
docMilan.zakazivanjePregleda("01-04-2023", "09:00h", "nivoSecera", "Dragan");
docMilan.zakazivanjePregleda("01-04-2023", "09:00h", "krvniPritisak", "Dragan");
docMilan.obaviPregleda("01-04-2023", "09:00h", "nivoSecera", "Dragan");
docMilan.obaviPregleda("01-04-2023", "09:00h", "krvniPritisak", "Dragan");
