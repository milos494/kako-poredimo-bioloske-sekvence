import React from 'react';

const Content = () => {
  return (
    <div className="content-wrapper">
      <h2>Konstrukcija grafa poravnanja</h2>
      <p>
        Na prethodnoj stranici smo videli kako se problem turiste na Menhetnu modeluje kao graf.
        Razmotrimo da li na sličan način možemo da modelujemo graf koji bi odgovarao problemu
        poravnanja. Za datu matricu poravnanja, graf koji bi bio analogon Menhetn grafu možemo da
        konstruišemo na sledeći način:
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
        <li>
          {' '}
          Čvor <i>(0, 0)</i> označimo kao početni čvor u grafu
        </li>
        <li>
          Čvor <i>(n, m)</i> označimo kao krajnji čvor u grafu{' '}
        </li>{' '}
      </ul>
      <p>
        Na sledećoj slici predstavljen je graf poravnanja za sekvence ATGTTATA i ATCGTCC. Da bismo
        pronašli njihovo optimalno poravnanje, potrebno je da nađemo najtežu putanju izmedu početnog
        i krajnjeg čvora. Kada poredimo ovaj graf sa grafom problema turiste sa Menhetna, vidimo da
        pored vertikalnih i horizontalnih, ovaj graf sadrži i dijagonalne grane. Problem turiste na
        Menhetnu predstavlja specijalan slučaj problema najduže zajedničke podsekvence.
      </p>
      <div className="image">
        <img src="/images/lcs/poravnanjeuvod.png" alt="Poravnanje graf" />
      </div>
      <p>
        Za svako dato poravnanje između dve sekvence, putanju između početnog i krajnjeg čvora u
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
      <p>
        Princip dinamičkog programiranja primenjen na problem Menhetn turiste možemo primeniti i za
        pronalaženje najteže putanje u grafu poravnanja. Da bi se algoritam primenio na problem
        poravnanja, neophodno je da izmenimo rekurentnu relaciju kojom se računa najteža putanja do
        čvora <i>(i, j)</i>. Kao i kod problema Menhetn turiste Označićemo sa{' '}
        <i>
          S<sub>i,j</sub>
        </i>{' '}
        vrednost najteže putanje od početnog čvora do čvora <i>(i, j)</i> u grafu (vrednost{' '}
        <i>
          S<sub>n,m</sub>
        </i>{' '}
        označava vrednost najteže putanje od početnog do krajnjeg čvora). Ako su <i>v</i> i <i>w</i>{' '}
        sekvence koje poredimo, definisaćemo rekurentnu relaciju:
      </p>
      <div className="image">
        <img src="/images/lcs/lcs1relacija.png" alt="Relacija 1" />
      </div>
      <p>
        Slično kao kod Menhetn turiste, potrebno je da rekonstruišemo najtežu putanju. U slučaju
        grafa poravnanja, rekonstruisana putanja predstavlja najdužu zajedničku podsekvencu niski{' '}
        <i>v</i> i <i>w</i>. Najtežu putanju ćemo dobiti pomoću matrice <i>backtrack</i> koja se
        računa uz pomoć naredne rekurentne relacije polaskom od krajnjeg čvora.
      </p>
      <div className="image">
        <img src="/images/lcs/lcs2relacija.png" alt="Relacija 2" />
      </div>
      <p>
        U ovoj matrici, za čvor <i>(i, j)</i> se na poziciji <i>(i, j)</i> nalazi informacija kojom
        granom smo došli do tog čvora (vrednosti matrice su: ↓, → i ↘). Matrice <i>backtrack</i> i{' '}
        <i>S</i> formiramo u isto vreme na način prikazan sledećim algoritmom. Algoritam vraća
        vrednost matrice <i>backtrack</i>, koju dalje koristimo za pronalaženje najduže zajedničke
        podsekvence.
      </p>

      <code>
        <b>function</b> LCSBackTrack(v, w)
        <br />
        <code style={{ marginLeft: '20px' }}>
          <b>for</b> i ← 0 to |v| <b>do</b>
        </code>
        <br />
        <code style={{ marginLeft: '40px' }}>
          S<sub>i,0</sub> ← 0
        </code>
        <br />
        <code style={{ marginLeft: '20px' }}>
          <b>for</b> j ← 0 to |w| <b>do</b>
        </code>
        <br />
        <code style={{ marginLeft: '40px' }}>
          S<sub>0,j</sub> ← 0
        </code>
        <br />
        <code style={{ marginLeft: '20px' }}>
          <b>for</b> j ← 1 to |v| <b>do</b>
        </code>
        <br />
        <code style={{ marginLeft: '40px' }}>
          for i ← 1 to |w| <b>do</b>
        </code>
        <br />
        <code style={{ marginLeft: '60px' }}>match = 0</code>
        <br />
        <code style={{ marginLeft: '60px' }}>
          <b>if</b> v<sub>i</sub> = w<sub>j</sub> <b>then</b>
        </code>
        <br />
        <code style={{ marginLeft: '80px' }}>match = 1</code>
        <br />
        <code style={{ marginLeft: '60px' }}>
          S<sub>i,j</sub> ← max{'{'}S<sub>i-1,j</sub> , S<sub>i,j-1</sub>, S<sub>i-1,j-1</sub> +
          match{'}'}
        </code>
        <br />
        <code style={{ marginLeft: '60px' }}>
          <b>if</b> S<sub>i,j</sub> = S<sub>i-1,j</sub> <b>then</b>
        </code>
        <br />
        <code style={{ marginLeft: '80px' }}>
          bakctrack<sub>i,j</sub> ← ↓
        </code>
        <br />
        <code style={{ marginLeft: '60px' }}>
          <b>else</b> <b>if</b> S<sub>i,j</sub> = S<sub>i,j-1</sub> <b>then</b>
        </code>
        <br />
        <code style={{ marginLeft: '80px' }}>
          bakctrack<sub>i,j</sub> ← →
        </code>
        <br />
        <code style={{ marginLeft: '60px' }}>
          <b>else</b>
        </code>
        <br />
        <code style={{ marginLeft: '80px' }}>
          bakctrack<sub>i-1,j</sub> ← ↘
        </code>
        <br />
        <code style={{ marginLeft: '20px' }}>
          <b>return</b> backtrack
        </code>
      </code>
      <p>
        Na osnovu matrice <i>backtrack</i> potrebno je rekonstruisati najtežu putanju i najdužu
        zajedničku podsekvencu, što je opisano sledećim algoritmom:
      </p>

      <code>
        <b>function</b> OutputLCS(backtrack, v, i, j)
        <br />
        <code style={{ marginLeft: '20px' }}>
          <b>if</b> i = 0 or j = 0 <b>then</b>
        </code>
        <br />
        <code style={{ marginLeft: '40px' }}>
          <b>return</b> ””
        </code>
        <br />
        <code style={{ marginLeft: '20px' }}>
          <b>if</b> backtrack<sub>i,j</sub> = ↓ <b>then</b>
        </code>
        <br />
        <code style={{ marginLeft: '40px' }}>
          <b>return</b> OutputLCS (backtrack, v, i − 1, j)
        </code>
        <br />
        <code style={{ marginLeft: '20px' }}>
          <b>else</b> <b>if</b> backtrack<sub>i,j</sub> = → <b>then</b>
        </code>
        <br />
        <code style={{ marginLeft: '40px' }}>
          <b>return</b> OutputLCS(backtrack, v, i, j − 1)
        </code>
        <br />
        <code style={{ marginLeft: '20px' }}>
          <b>else</b>
        </code>
        <br />
        <code style={{ marginLeft: '40px' }}>
          return OutputLCS(backtrack, v, i − 1, j − 1) + v[i − 1]
        </code>
      </code>
      <p>
        Poziv funkcije <i>OutputLCS(backtrack, v, i, j)</i>, na osnovu prethodno izračunate matrice{' '}
        <i>backtrack</i>, vraća najdužu zajedničku podsekvencu za prefikse niski <i>v</i> i <i>w</i>{' '}
        redom dužina <i>i</i> i <i>j</i>, a poziv <i>OutputLCS(backtrack, v, |v|, |w|)</i> vraća
        najdužu zajedničku podsekvencu za niske <i>v</i> i <i>w</i>.
      </p>
      <h2 id="#implementacija">Implementacija</h2>
    </div>
  );
};

export default Content;
