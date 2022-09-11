import React from 'react';

const Content = () => {
  return (
    <div className="content-wrapper">
      <h2>Konstrukcija grafa poravnanja</h2>
      <p>
        Ako se vratimo na poravnanje sekvenci, vidimo da postoji veza sa problemom turiste na
        Menhetnu. Pitanje koje postavljamo je kako da izgradimo graf za problem poravnanja. Za datu
        matricu poravnanja, graf koji bi bio analogon Menhetn grafu možemo da konstruišemo na
        sledeći način:
      </p>
      <ul>
        <li>Kolone grafa označimo karakterima iz prve niske</li>
        <li>Vrste grafa označimo karakterima iz druge niske</li>
        <li>U svaku presečnu tačku postavimo po jedan čvor</li>
        <li>
          Gde god je moguće, postavimo vertikalne (insercija), horizontalne (delecija) i dijagonalne
          grane (poklapanje ili promašaj)
        </li>
        <li>
          Dijagonalne grane koje odgovaraju poklapanjima otežamo koeficijentom 1, ostale grane
          koeficijentom 0 (suština je da povoljniji ishod (poklapanje) otežamo više nego
          nepovoljniji (promašaj))
        </li>
        <li> Čvor (0, 0) označimo kao početni čvor u grafu</li>
        <li>Čvor (n, m) označimo kao krajnji čvor u grafu </li>{' '}
      </ul>
      <p>
        Na sledećoj slici predstavljen je graf poravnanja za sekvence ATGTTATA i ATCGTCC. Da bismo
        pronašli njihovo optimalno poravnanje, potrebno je da nađemo najtežu putanju izmedu početnog
        i krajnjeg čvora. Kada poredimo ovaj graf sa grafom problema turiste sa Menhetna, vidimo da
        pored vertikalnih i horizontalnih, ovaj graf sadrži i dijagonalne grane.
      </p>
      <div className="image">
        <img src="/images/lcs/poravnanjeuvod.png" alt="Poravnanje graf" />
      </div>
      <p>
        Za svako dato poravnanje između dve sekvence, putanju između početnog i kraj- njeg čvora u
        grafu možemo konstruisati na sledeći način: počevši od prve kolone poravnanja, za svako
        poklapanje i promašaj u putanju dodamo dijagonalnu granu, za svaku inserciju horizontalnu a
        za svaku deleciju vertikalnu granu. Na primer, neka su sekvence ATGTTATA i ATCGTCC poravnate
        na sledeći način:
      </p>
      <div className="image">
        <img src="/images/lcs/poravnanjeAA.png" alt="Poravnanje dve sekvence" />
      </div>
      <p>
        Za dato poravnanje, na sledećoj slici možemo videti konstruisanu putanju u grafu poravnanja.
        Možemo primetiti da svakom poravnanju odgovara tačno jedna putanja u grafu, ali i da svakoj
        putanji odgovara tačno jedno poravnanje.
      </p>
      <div className="image">
        <img src="/images/lcs/poravnanjeprimer.png" alt="Poravnanje dve sekvence graf" />
      </div>
      <h2 id="#dinamicki">Dinamički pristup</h2>

      <h2 id="#implementacija">Implementacija</h2>
    </div>
  );
};

export default Content;
