import React from 'react';

const Content = () => {
  return (
    <div className="content-wrapper">
      <p>
        Problemom kusura i problemom turiste na Menhetnu se služimo da bismo potencijalna
        algoritamska rešenja ilustrovali i analizirali najpre na jednostavnijim problemima koja ćemo
        nakon toga primeniti na problem poravnanja.
      </p>
      <p>
        Pretpostavimo da turista na Menhetnu želi da poseti što više znamenitosti za što manje
        vremena. Na Menhetnu se sve ulice seku pod pravim uglom i pravilo je da se turista na svakoj
        raskrsnici može kretati jedino južno (↓) ili istočno (→), što znači da ne može da se vrati
        nazad. Turista može birati između više različitih putanja, ali ne postoji putanja kojom će
        posetiti sve znamenitosti. Problem pronalaženja putanje kroz grad kojom će turista posetiti
        najviše znamenitosti se zove Problem turiste na Menhetnu.
      </p>
      <p>
        Mapu Menhetna možemo predstaviti kao usmeren graf, u kome svaka raskrsnica predstavlja čvor,
        a svaka ulica sa naznačenim smerom kretanja (južno ili istočno) predstavlja granu u grafu.
        Svakoj grani pridružimo težinu jednaku broju znamenitosti koje se nalaze u toj ulici. Graf
        koji posmatramo je usmeren, pravougaoni, težinski i mrežni i takav graf ćemo zvati{' '}
        <b>Menhetn graf</b>. Da bismo rešili ovaj problem, zapravo moramo pronaći putanju maksimalne
        težine u Menhetn grafu. S obzirom na dozvoljene smerove kretanja, čvor sa koordinatama{' '}
        <i>(0, 0)</i> možemo označiti kao početni, a čvor sa koordinatama <i>(n, m)</i> kao krajnji.
      </p>
      <div className="image">
        <img style={{ width: '800px' }} src="/images/manhattan/manhattan1.png" alt="Menhetn graf" />
      </div>
      <h2 id="#pohlepan">Pohlepan pristup</h2>
      <p>
        Primena grube sile na ovaj problem zahteva mnogo vremena zato što je ukupan broj svih
        mogućih putanja ogroman. Pohlepan pristup bi izabrao jedan od dva pravca (južno ili
        istočno), u zavisnosti koliko znamenitosti možemo posetiti kretajući se južno ili istočno.
        Postoji mogućnost da ovakav pristup zanemari najtežu moguću putanju. Na slikama ispod možemo
        videti Menhetn graf, putanju dobijenu primenom grube sile i putanju maksimalne težine.
      </p>
      <div className="image">
        <img
          style={{ flex: '0 0 30%', width: '30%' }}
          src="/images/manhattan/manhattangraf.png"
          alt="Menhetn graf"
        />
        <img
          style={{ flex: '0 0 30%', width: '30%' }}
          src="/images/manhattan/manhattanpohlepan.png"
          alt="Menhetn graf"
        />
        <img
          style={{ flex: '0 0 30%', width: '30%' }}
          src="/images/manhattan/menhetn1najtezaputanja.png"
          alt="Menhetn graf"
        />
      </div>
      <h2 id="#rekurzivni">Rekurzivni pristup</h2>
      <p>
        Sledeći algoritam izračunava najtežu putanju do čvora <i>(i, j)</i> u Menhetn grafu uz
        ograničenje da do čvora <i>(i, j)</i> jedino možemo doći kretajući se južno (iz čvora{' '}
        <i>(i − 1, j)</i>) ili istočno (iz čvora <i>(i, j − 1)</i>). Slično kao kod rekurzivnog
        pristupa vraćanju kusura, ovaj algoritam se izvršava više puta za istu vrednost.
      </p>
      <code>
        <b>function</b> ManhattanRecursive<i>(i, j)</i>
        <br />
        <code style={{ marginLeft: '20px' }}>
          <b>if</b> i = 0 and j = 0 <b>then</b> <b>return</b> 0
        </code>
        <br />
        <code style={{ marginLeft: '20px' }}>x ← −∞</code>
        <br />
        <code style={{ marginLeft: '20px' }}>y ← −∞</code>
        <br />
        <code style={{ marginLeft: '20px' }}>
          <b>if</b> i {'>'} 0 <b>then</b>
        </code>
        <br />
        <code style={{ marginLeft: '40px' }}>
          x ←ManhattanRecursive(i − 1, j) + weight of vertical edge into <i>(i, j)</i>
        </code>
        <br />
        <code style={{ marginLeft: '20px' }}>
          <b>if</b> j {'>'} 0 <b>then</b>
        </code>
        <br />
        <code style={{ marginLeft: '40px' }}>
          y ←ManhattanRecursive(i, j − 1) + weight of horizontal edge into <i>(i, j)</i>
        </code>
        <br />
        <code style={{ marginLeft: '20px' }}>
          <b>return</b> max{'{'}(x, y){'}'}
        </code>
      </code>
      <h2 id="#dinamicki">Dinamički pristup</h2>
      <p>
        Pristupom dinamičkog programiranja, da bismo pronašli najtežu putanju od početnog čvora{' '}
        <i>(0, 0)</i> do krajnjeg <i>(n, m)</i>, prvo ćemo pronaći težine svih putanja od početnog
        do svih čvorova <i>(i, j)</i> u mreži, kretajući se od početnog pa sve do krajnjeg čvora.
        Ideja iza pristupa dinamičkim programiranjem je da prvo rešimo svaki od manjih problema
        jednom, umesto milionima puta. Označićemo sa{' '}
        <i>
          S<sub>i,j</sub>
        </i>{' '}
        vrednost najteže putanje od početnog čvora do čvora <i>(i, j)</i> u grafu (vrednost{' '}
        <i>
          S<sub>n,m</sub>
        </i>{' '}
        označava vrednost najteže putanje od početnog do krajnjeg čvora). Prvo računamo težine svih
        putanja do čvorova po obodu grafa, zato što oni imaju samo po jednu ulaznu granu. Nakon
        toga, red po red, izračunavamo odgovarajuće težine{' '}
        <i>
          S<sub>i,j</sub>
        </i>{' '}
        za ostale čvorove prateći relaciju:
      </p>
      <div className="image">
        <img src="/images/manhattan/relacijaManhattan.png" alt="Relacija Menhetn" />
      </div>
      <p>
        Kako bi na kraju bilo moguće rekonstruisati putanju, pošto ulazni čvorovi imaju po dve
        ulazne grane, potrebno je i zapamtiti kojom granom smo došli do datog čvora. Da bismo
        rekonstruisali putanju, dovoljno je da krenemo od krajnjeg čvora u suprotnom smeru. Ako sa{' '}
        <i>
          down<sub>i,j</sub>
        </i>{' '}
        i{' '}
        <i>
          right<sub>i,j</sub>
        </i>{' '}
        označimo težine odgovarajućih grana, rešenje problema turiste na Menhetnu dinamičkim
        pristupom možemo opisati sledećim algoritmom:
      </p>
      <code>
        <b>function</b> ManhattanDynamic(n, m, down, right)
        <br />
        <code style={{ marginLeft: '20px' }}>
          S<sub>0,0</sub> ← 0
        </code>
        <br />
        <code style={{ marginLeft: '20px' }}>
          <b>for</b> i ← 1 to n <b>do</b>
        </code>
        <br />
        <code style={{ marginLeft: '40px' }}>
          S<sub>i,0</sub> ← S<sub>i-1,0</sub> + down<sub>i,0</sub>
        </code>
        <br />
        <code style={{ marginLeft: '20px' }}>
          <b>for</b> j ← 1 to m <b>do</b>
        </code>
        <br />
        <code style={{ marginLeft: '40px' }}>
          S<sub>0,j</sub> ← S<sub>0,j-1</sub> + down<sub>0,j</sub>
        </code>
        <br />
        <code style={{ marginLeft: '20px' }}>
          <b>for</b> j ← 1 to m <b>do</b>
        </code>
        <br />
        <code style={{ marginLeft: '40px' }}>
          <b>for</b> i ← 1 to n <b>do</b>
        </code>
        <br />
        <code style={{ marginLeft: '60px' }}>
          S<sub>i,j</sub> ← max{'{'}S<sub>i-1,j</sub> + down<sub>i,j</sub> , S<sub>i,j-1</sub> +
          right<sub>i,j</sub> {'}'}
        </code>
        <br />
        <code style={{ marginLeft: '20px' }}>
          <b>return</b> S<sub>n,m</sub>
        </code>
      </code>
      <h2 id="#implementacija">Implementacija</h2>
    </div>
  );
};

export default Content;
