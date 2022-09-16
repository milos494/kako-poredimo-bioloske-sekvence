import React from 'react';

const Content = () => {
  return (
    <div className="content-wrapper">
      <p>
        Kod globalnog poravnanja korišćen je linearni model za računanje skora: ako je <i>σ</i>{' '}
        kazna za insercije i delecije, onda je <i>k · σ</i> kazna za interval od <i>k</i> insercija
        i delecija. Mutacije su često prouzrokovane greškama prilikom replikacije DNK, koje se često
        sastoje iz insercije ili delecije celog intervala od <i>k</i> nukleotida. Zbog toga je
        preterano kažnjavati takve mutacije sa kaznom <i>k · σ</i>. Na primer, ako posmatramo dva
        poravnanja sa sledeće slike, želeli bismo da skor poravnanja sa leve strane slike bude manji
        nego na desnoj strani slike:
      </p>
      <div className="image">
        <img src="/images/affine/afinekazne1.png" alt="Afine kazne" />
      </div>
      <p>
        Definišimo prazninu kao sekvencu uzastopnih − simbola u poravnanju. Za prazninu dužine{' '}
        <i>k</i> ćemo definisati <b>afinu kaznu</b> koja iznosi <i>σ + ε · (k − 1)</i>, gde je{' '}
        <i>σ</i> kazna za otvaranje praznine, a <i>ε</i> kazna za proširenje praznine, pri čemu je{' '}
        <i>σ {'>'} ε</i>.
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
        Konkretno, za svaki čvor <i>(i, j)</i> grafa poravnanja dodajemo grane ka čvorovima{' '}
        <i>(i + k, j)</i> i <i>(i, j + k)</i> sa težinama <i>σ + ε · (k − 1)</i> za sve moguće
        praznine dužine <i>k</i>, što možemo videti na sledećoj slici. Za dve sekvence dužine{' '}
        <i>n</i>, broj grana u grafu ovim dodavanjem raste sa{' '}
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
        možemo ga povećati. Izgradićemo graf poravnanja na tri nivoa. Za svaki čvor <i>(i, j)</i>{' '}
        uvešćemo tri dodatna čvora{' '}
        <i>
          (i, j)<sub>lower</sub>
        </i>{' '}
        ,{' '}
        <i>
          (i, j)<sub>middle</sub>
        </i>{' '}
        i{' '}
        <i>
          (i, j)<sub>upper</sub>
        </i>{' '}
        . Donji nivo sadrži samo vertikalne čvorove težine <i>−ε</i> i predstavlja praznine u
        sekvenci <i>v</i>, a gornji nivo sadrži samo horizontalne čvorove težine <i>−ε</i> i
        predstavlja praznine u sekvenci <i>w</i>. Srednji nivo sadrži dijagonalne grane težine
        određene matricom skora{' '}
        <i>
          score(
          <i>
            v<sub>i</sub>
          </i>{' '}
          ,{' '}
          <i>
            w<sub>j</sub>
          </i>{' '}
          )
        </i>
        , tj. poklapanja i promašaje.
      </p>
      <div className="image">
        <img src="/images/affine/afinekazne4.png" alt="Afine kazne" />
      </div>
      <p>
        Trenutno ne postoji način za povezivanje tri nivoa grafa. Da bismo rešili taj problem,
        dodaćemo grane koje će predstavljati otvaranje i zatvaranje praznina. Za otvaranje praznina,
        povezaćemo svaki čvor <i>(i, j)</i> sa čvorovima{' '}
        <i>
          (i, j)<sub>lower</sub>
        </i>{' '}
        i{' '}
        <i>
          (i, j)<sub>upper</sub>
        </i>{' '}
        granama težine <i>−σ</i>. Zatvaranje praznina ne želimo da kažnjavamo, pa ćemo dodati grane
        težine 0 između svakog čvora{' '}
        <i>
          (i, j)<sub>lower</sub>
        </i>{' '}
        i{' '}
        <i>
          (i, j)<sub>upper</sub>
        </i>{' '}
        i odgovarajućeg čvora <i>(i, j)</i>. Na ovaj način, praznina dužine <i>k</i> počinje i
        završava se na srednjem nivou i kažnjava se sa <i>−σ</i> za prvi simbol −, <i>−ε</i> za
        svaki sledeći i 0 za zatvaranje (naredna slika). Ovim dobijamo kaznu <i>σ + ε · (k − 1)</i>{' '}
        za prazninu dužine <i>k</i>.
      </p>
      <div className="image">
        <img src="/images/affine/afinekazne5.png" alt="Afine kazne" />
      </div>
      <p>
        Iako se na prvi pogled konstrukcija ovakvog grafa čini komplikovana, zapravo ovakav graf ima
        samo <i>O(nm)</i> grana za sekvence dužine <i>n</i> i <i>m</i>. Najteža putanja u ovakvom
        grafu odgovara optimalnom poravnanju sa afinom kaznom za praznine. Potrebno je da definišemo
        rekurentnu relaciju za pronalaženje najteže putanje u ovako konstruisanom grafu. U ovom
        slučaju, umesto jedne kao što je do sada bio slučaj, definisaćemo tri rekurentne relacije,
        za računanje{' '}
        <i>
          lower<sub>i,j</sub>
        </i>{' '}
        ,{' '}
        <i>
          upper<sub>i,j</sub>
        </i>{' '}
        i{' '}
        <i>
          middle<sub>i,j</sub>
        </i>{' '}
        .{' '}
        <i>
          lower<sub>i,j</sub>
        </i>{' '}
        ,{' '}
        <i>
          upper<sub>i,j</sub>
        </i>{' '}
        i{' '}
        <i>
          middle<sub>i,j</sub>
        </i>{' '}
        predstavljaju redom težine najtežih putanja od početnog čvora do čvorova{' '}
        <i>
          (i, j)<sub>lower</sub>
        </i>{' '}
        ,{' '}
        <i>
          (i, j)<sub>upper</sub>
        </i>{' '}
        i{' '}
        <i>
          (i, j)<sub>middle</sub>
        </i>{' '}
        .
      </p>
      <div className="image">
        <img src="/images/affine/afinekazne6.png" alt="Afine kazne" />
      </div>
      <h2 id="#implementacija">Implementacija</h2>
    </div>
  );
};

export default Content;
