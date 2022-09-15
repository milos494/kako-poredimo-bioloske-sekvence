import React from 'react';

const Content = () => {
  return (
    <div className="content-wrapper">
      <p>
        Kod globalnog poravnanja korišćen je linearni model za računanje skora: ako je σ kazna za
        insercije i delecije, onda je k · σ kazna za interval od k insercija i delecija. Mutacije su
        često prouzrokovane greškama prilikom replikacije DNK, koje se često sastoje iz insercije
        ili delecije celog intervala od k nukleotida. Zbog toga je preterano kažnjavati takve
        mutacije sa kaznom k · σ. Na primer, ako posmatramo dva poravnanja sa sledeće slike, želeli
        bismo da skor poravnanja sa leve strane slike bude manji nego na desnoj strani slike:
      </p>
      <div className="image">
        <img src="/images/affine/afinekazne1.png" alt="Afine kazne" />
      </div>
      <p>
        Definišimo prazninu kao sekvencu uzastopnih − simbola u poravnanju. Za pra- zninu dužine k
        ćemo definisati afinu kaznu koja iznosi σ + ε · (k − 1), gde je σ kazna za otvaranje
        praznine, a ε kazna za proširenje praznine, pri čemu je σ {'>'} ε.
      </p>
      <h2 id="#konstrukcija">Konstrukcija grafa</h2>
      <p>
        Na sledećoj slici prikazano je kako graf poravnanja možemo prilagoditi afinoj kazni za
        praznine.
      </p>
      <div className="image">
        <img src="/images/affine/afinekazne2.png" alt="Afine kazne" />
      </div>
      <p>
        Potrebno je da dodamo novu vrstu grana, koje nazivamo duge grane, za svaku prazninu. Pošto
        ne znamo koliko praznina postoji, moramo da dodamo grane za svaku moguću prazninu. Zbog toga
        ćemo dodati nove horizontalne i vertikalne grane između svaka dva čvora gde je to moguće.
        Konkretno, za svaki čvor (i, j) grafa poravnanja dodajemo grane ka čvorovima (i + k, j) i
        (i, j + k) sa težinama σ + ε · (k − 1) za sve moguće praznine dužine k, što možemo videti na
        sledećoj slici. Za dve sekvence dužine n, broj grana u grafu ovim dodavanjem raste sa
        <i>
          O(n<sup>2</sup>)
        </i>{' '}
        na{' '}
        <i>
          O(n<sup>3</sup>)
        </i>
        . Kako je složenost algoritma za određivanje skora poravnanja proporcionalna broju grana,
        potrebno je pronaći efikasnije rešenje.
      </p>
      <div className="image">
        <img src="/images/affine/afinekazne3.png" alt="Afine kazne" />
      </div>
      <p>
        Kako je broj grana kubni u odnosu na dužinu jedne sekvence, potrebno je smanjiti broj grana
        u grafu poravnanja. Pošto broj čvorova u grafu ne utiče na vremensku složenost algoritma,
        možemo ga povećati. Izgradićemo graf poravnanja na tri nivoa. Za svaki čvor (i, j) uvešćemo
        tri dodatna čvora (i, j)<sub>lower</sub>, (i, j)<sub>middle</sub> i (i, j)<sub>upper</sub>.
        Donji nivo sadrži samo vertikalne čvorove težine −ε i predstavlja praznine u sekvenci v, a
        gornji nivo sadrži samo horizontalne čvorove težine −ε i predstavlja praznine u sekvenci w.
        Srednji nivo sadrži dijagonalne grane težine određene matricom skora score(v<sub>i</sub>, w
        <sub>j</sub> ), tj. poklapanja i promašaje.
      </p>
      <div className="image">
        <img src="/images/affine/afinekazne4.png" alt="Afine kazne" />
      </div>
      <p>
        Trenutno ne postoji način za povezivanje tri nivoa grafa. Da bismo rešili taj problem,
        dodaćemo grane koje će predstavljati otvaranje i zatvaranje praznina. Za otvaranje praznina,
        povezaćemo svaki čvor (i, j) sa čvorovima (i, j)<sub>lower</sub> i (i, j)<sub>upper</sub>{' '}
        granama težine −σ. Zatvaranje praznina ne želimo da kažnjavamo, pa ćemo dodati grane težine
        0 između svakog čvora (i, j)<sub>lower</sub> i (i, j)<sub>upper</sub> i odgovarajućeg čvora
        (i, j). Na ovaj način, praznina dužine k počinje i završava se na srednjem nivou i kažnjava
        se sa −σ za prvi simbol −, −ε za svaki sledeći i 0 za zatvaranje (slika 5.11). Ovim dobijamo
        kaznu σ + ε · (k − 1) za prazninu dužine k.
      </p>
      <div className="image">
        <img src="/images/affine/afinekazne5.png" alt="Afine kazne" />
      </div>
      <p>
        Iako se na prvi pogled konstrukcija ovakvog grafa čini komplikovana, zapravo ovakav graf ima
        samo <i>O(nm)</i> grana za sekvence dužine n i m. Najteža putanja u ovakvom grafu odgovara
        optimalnom poravnanju sa afinom kaznom za praznine. Potrebno je da definišemo rekurentnu
        relaciju za pronalaženje najteže putanje u ovako konstruisanom grafu. U ovom slučaju, umesto
        jedne kao što je do sada bio slučaj, definisaćemo tri rekurentne relacije, za računanje
        lower<sub>i,j</sub> , upper<sub>i,j</sub> i middle<sub>i,j</sub>. lower<sub>i,j</sub> ,
        upper<sub>i,j</sub> i middle<sub>i,j</sub> predstavljaju redom težine najtežih putanja od
        početnog čvora do čvorova (i, j)<sub>lower</sub>, (i, j)<sub>upper</sub> i (i, j)
        <sub>middle</sub>.
      </p>
      <div className="image">
        <img src="/images/affine/afinekazne6.png" alt="Afine kazne" />
      </div>
      <h2 id="#implementacija">Implementacija</h2>
    </div>
  );
};

export default Content;
