import React from 'react';

const Content = () => {
  return (
    <div className="content-wrapper" title="Globalno poravnanje">
      <p>
        Jedan od primera gde globalno poravnanje ne uspeva da otkrije biološke poveanosti je
        poređenje homeobox gena. Ovi geni su odgovorni za razvoj embriona i prisutni su u velikom
        broju vrsta. Homeobox geni su dugački i dosta se razlikuju između vrsta, ali oko 60
        aminokiselina dug region u svakom proteinu koji ovi geni kodiraju je najčešće konzerviran i
        naziva se homeodomen. Na sledećoj slici možemo videti prikazane homeodomene čoveka i miša:
      </p>
      <div className="image">
        <img src="/images/local/mousehuman1.png" alt="Covek Mis" />
      </div>
      <p>
        Globalno poravnanje traži sličnosti između cele dve niske karaktera. Međutim kada tražimo
        homeodomene, od značaja su manji lokalni regioni sličnosti. Kada su biološki značajne
        sličnosti prisutne u nekim delovima sekvenci <i>v</i> i <i>w</i>, umesto da tražimo globalno
        poravnanje sa najvećim skorom, želimo da pronađemo globalno poravnanje između svih podniski
        jedne i druge sekvence sa najvećim skorom. Ovakvo poravnanje se naziva lokalno poravnanje.
      </p>
      <p>
        Problem lokalnog poravnanja možemo rešiti tako što ćemo pronaći globalno poravnanje za svaka
        dva čvora u grafu poravnanja i izabrati ono sa najvećim skorom. Ako u grafu poravnanja imamo
        ukupno <i>#nodes</i> čvorova, onda bismo algoritam za pronalaženje globalnog poravnanja
        morali da pokrenemo <i>O(#nodes2)</i> puta. Pokušaćemo da pronađemo efikasniji način.
        Zamislimo besplatnu vožnju od početnog čvora u grafu poravnanja do čvora koji označava
        početak konzerviranog intervala, i takođe zamislimo besplatnu vožnju od čvora koji označava
        kraj konzerviranog intervala i krajnjeg čvora u grafu poravnanja:
      </p>
      <div className="image">
        <img style={{ width: '50%' }} src="/images/local/taksivoznja.png" alt="Covek Mis" />
      </div>
      <p>
        Ako bismo pronašli način kojim bismo detektovali te besplatne vožnje, tj. ukinuli
        kažnjavanje od početnog čvora do prvog čvora konzerviranog intervala i od poslednjeg čvora
        konzerviranog intervala do krajnjeg čvora, došli bismo do lokalnog poravnanja. Da bismo graf
        poravnanja prilagodili na ovaj način, dovoljno je da dodamo grane od početnog do svih drugih
        čvorova, kao i od svakog čvora do krajnjeg čvora grafa. Za sekvence <i>v</i> i <i>w</i>
        ukupan broj grana u ovakvom grafu sa dodavanjem besplatnih vožnji je <i>O(|v| · |w|)</i> što
        je i vremenska složenost algoritma za nalaženje najteže putanje. Izmenićemo rekurentnu
        relaciju za izračunavanje vrednosti S<sub>i,j</sub>, sada umesto 3 imamo 4 ulazne grane u
        čvor (i, j):
      </p>
      <div className="image">
        <img src="/images/local/realcijalocal.png" alt="lokalno poravnanje" />
      </div>
      <p>
        Pomoću prethodne relacije modelovane su besplatne vožnje od početnog ali ne i do krajnjeg
        čvora. Pošto postoje grane od svakog do krajnjeg čvora, S<sub>n,m</sub> možemo izračunati
        kao maksimum po svim ostalim S<sub>i,j</sub>:
      </p>
      <div className="image">
        <img src="/images/local/realcijalocal2.png" alt="lokalno poravnanje" />
      </div>
      <h2 id="#implementacija">Implementacija</h2>
    </div>
  );
};

export default Content;
