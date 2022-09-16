import React from 'react';
import GlobalPageWrapper from '../../components/GlobalPageWrapper';

const AlignmentPage = () => {
  return (
    <GlobalPageWrapper title="Poravnanje sekvenci" prethodno="/" sledece="/problem-kusura">
      <div className="content-wrapper">
        <p>
          Sekvence poredimo tako što ih poravnamo. Poravnanje podrazumeva da „zapišemo” jednu nisku
          ispod druge uz mogućnost da unutar svake niske ubacimo jedan ili više praznih simbola (−).
          Na taj način bismo dobili dvorednu matricu karaktera. Prilikom ubacivanja praznih simbola,
          nastojimo da, kad god je to moguće, u jednoj koloni budu isti karakteri. Posmatrajmo
          primer poravnanja sekvenci ATGCATGC i TGCATGCA. Kada ne ubacimo prazne simbole, sekvence
          ATGCATGC i TGCATGCA nemaju kolone koje se poklapaju:
        </p>
        <img src="/images/alignment/poredjenje1.png" alt="poredjenje" />
        <p>Ali ako ih poravnamo malo drugačije, vidimo da imaju 6 pozicija koje se poklapaju:</p>
        <img src="/images/alignment/poredjenje2.png" alt="poredjenje" />

        <p>Ali imaju i malo manje uočljive sličnosti, kao na primer:</p>
        <img src="/images/alignment/poredjenje3.png" alt="poredjenje" />

        <p>
          Ubacivanjem praznog simbola unutar poravnanja modelujemo insercije i delecije, a kolonama
          u kojima se karakteri ne poklapaju modelujemo mutacije. Postoji više načina na koje možemo
          poravnati dve sekvence, zbog toga sva poravnanja ima smisla nekako rangirati i među njima
          prema nekom kriterijumu pronaći optimalno poravnanje. Jedan takav kriterijum tj. jedna
          mera kvaliteta poravnanja je <b>Hamingovo rastojanje</b>, koje predstavlja broj
          nepoklapanja u dve sekvence, pretpostavljajući da <i>i</i> -ti simbol jedne sekvence
          poredimo sa <i>i</i> -tim simbolom druge sekvence. Prethodni primeri nas navode da
          definišemo optimalno poravnanje kao ono koje ima najveći broj poklapanja, tj. kao ono kod
          koga je Hamingovo rastojanje najmanje.
        </p>
        <p>
          Poravnanje dve sekvence možemo definisati kao dvorednu matricu, pri čemu prvi red odgovara
          prvoj, a drugi red drugoj sekvenci. Prazan simbol − može biti umetnut na bilo koje mesto u
          obe sekvence, uz pravilo da dva prazna simbola − ne budu poravnata. Primer poravnanja za
          sekvence ATGTTATA i ATCGTCC možemo videti na sledećoj slici:
        </p>
        <img src="/images/alignment/primerMatricaSekvence.png" alt="matrica poravnanja" />

        <p>U svakoj matrici poravnanja razlikujemo sledeće tipove kolona:</p>
        <ul>
          <li>poklapanja, kada se u jednoj koloni nalaze isti simboli</li>
          <li>promašaje (nepoklapanja), kada se u jednoj koloni nalaze različiti simboli</li>
          <li>insercije, kada se u prvoj koloni nalazi simbol −</li>
          <li>delecije, kada se u drugoj koloni nalazi simbol −</li>
        </ul>
        <p>
          Poklapanja u poravnanju dve sekvence formiraju njihovu zajedničku podsekvencu. Na primer,
          za poravnanje sekvenci ATGTTATA i ATCGTCC, zajednička podsekvenca je ATGT a njihovo
          Hamingovo rastojanje je 5. S obzirom da želimo da u poravnanju imamo što više poklapanja,
          problem poravnanja možemo svesti na problem nalaženja najduže zajedničke podsekvence.
        </p>
      </div>
    </GlobalPageWrapper>
  );
};

export default AlignmentPage;
