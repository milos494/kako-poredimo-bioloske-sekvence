import React from 'react';
import GlobalPageWrapper from '../../components/GlobalPageWrapper';

const DynamicPage = () => {
  return (
    <GlobalPageWrapper
      title="Problem kusura"
      prethodno="/poravnanje-sekvenci"
      sledece="/menhetn-turista"
    >
      <div className="content-wrapper">
        <p>
          Problemom kusura i problemom turiste na Menhetnu se služimo da bismo potencijalna
          algoritamska rešenja ilustrovali i analizirali najpre na jednostavnijim problemima koja
          ćemo nakon toga primeniti na problem poravnanja.
        </p>
        <p>
          Objasnimo problem kusura na primeru. Ako je račun u prodavnici $69.24, koji kupac želi da
          plati sa $70, to znači da prodavac mora da vrati kusur u iznosu od 76 centi. Na prodavcu
          je da donese odluku kako da vrati kusur, da li će dati 76 novčića od 1 cent ili na primer
          samo 4 novčića (25 + 25 + 25 + 1 = 76). Ovaj jednostavan primer nam pomaže u definisanju
          opštijeg problema: kako prodavac može da vrati kusur koristeći najmanji broj novčića.
        </p>
        <h2 id="#pohlepan">Pohlepan pristup</h2>
        <p>
          Ako pretpostavimo da na raspolaganju imamo apoene 50, 25, 20, 10, 5, 1, pohlepnim
          pristupom bismo kusur u vrednosti od 40 vratili kao 25 + 10 + 5. Međutim, manje novčića
          bismo upotrebili ako bismo izabrali dva novčića od po 20 : 20 + 20. Ovakav pristup
          problemu vraćanja kusura opisan je sledećim algoritmom:
        </p>
        <code>
          <b>function</b> GreedyChange(money)
          <br />
          <code style={{ marginLeft: '20px' }}>change ← empty collection of coins</code>
          <br />
          <code style={{ marginLeft: '20px' }}>
            <b>while</b> money {'>'} 0 <b>do</b>
          </code>
          <br />
          <code style={{ marginLeft: '40px' }}>
            change ← largest denomination that is less than or equal to money
          </code>
          <br />
          <code style={{ marginLeft: '40px' }}>
            add a coin with denomination coin to the collection of coins change
          </code>
          <br />
          <code style={{ marginLeft: '40px' }}>money ← money −coin</code>
          <br />
          <code style={{ marginLeft: '20px' }}>
            <b>return</b> change
          </code>
        </code>
        <h2 id="#rekurzivni">Rekurzivni pristup</h2>
        <p>
          Pošto pohlepan pristup može da propusti tačno rešenje, pokušaćemo drugačije. Na primer,
          treba da vratimo kusur od 76 centi, ali jedino imamo dostupne apoene vrednosti 5, 4 i 1
          cent. Minimalna kolekcija novčića koja u zbiru daje 76 mora biti jedna od tri:
        </p>
        <ul>
          <li>minimalna kolekcija novčića koja u zbiru daje 75 centi, plus novčić od 1 cent</li>
          <li>minimalna kolekcija novčića koja u zbiru daje 72 centa, plus novčić od 4 centa</li>
          <li>minimalna kolekcija novčića koja u zbiru daje 71 cent, plus novčić od 5 centi</li>
        </ul>
        <p>
          Za niz celih brojeva <i>Coins = (coin1, coin2, ..., coind)</i>, minimalni broj novčića,
          <i>MinNumCoins(money)</i>, je jednak minimumu sledećih <i>d</i> brojeva:
        </p>
        <div className="image">
          <img src="/images/dynamic/relacijaproblemkusura.png" alt="Relacija problem kusura" />
        </div>
        <p>Pomoću rekurentne relacije iznad, definišemo algoritam za rešavanje problema kusura:</p>
        <code>
          <b>function</b> RecursiveChange(money, coins)
          <br />
          <code style={{ marginLeft: '20px' }}>
            <b>if</b> money = 0 <b>then</b> <b>return</b> 0
          </code>
          <br />
          <code style={{ marginLeft: '20px' }}>minNumCoins ← ∞</code>
          <br />
          <code style={{ marginLeft: '20px' }}>
            <b>for</b> i ← 1 to |Coins| <b>do</b>
          </code>
          <br />
          <code style={{ marginLeft: '40px' }}>
            <b>if</b> money ≥ coin<sub>i</sub> <b>then</b>
          </code>
          <br />
          <code style={{ marginLeft: '60px' }}>
            numCoins ← RecursiveChange(money − coin<sub>i</sub>, coins)
          </code>
          <br />
          <code style={{ marginLeft: '60px' }}>
            <b>if</b> numCoins + 1 {'<'} minNumCoins <b>then</b>
          </code>
          <br />
          <code style={{ marginLeft: '80px' }}>minNumCoins ← numCoins + 1</code>
          <br />
          <code style={{ marginLeft: '20px' }}>
            <b>return</b> minNumCoins
          </code>
        </code>
        <p>
          Možemo primetiti da se algoritam više puta izvršava za istu vrednost. Na primer, za
          vrednost od 70 centi, algoritam se izvršava čak 6 puta. Daljim procenama možemo doći do
          zaključka da se optimalna kombinacija novčića za vraćanje kusura od 30 centi izračunava
          milijardama puta. Rekurzivan pristup nije efikasan za rešavanje ovakvih problema.
        </p>
        <div className="image">
          <img src="/images/dynamic/vracanjeKusura.png" alt="Problem kusura primer" />
        </div>
        <h2 id="#dinamicki">Dinamički pristup</h2>
        <p>
          Kako bismo izbegli mnogo rekurzivnih poziva, koristićemo strategiju dinamičkog
          programiranja. Bilo bi idealno kada bismo znali sve vrednosti{' '}
          <i>
            MinNumCoins(money − coin<sub>i</sub>)
          </i>{' '}
          u vreme izračunavanja <i>MinNumCoins(money)</i>. Suština dinamičkog programiranja je u
          koraku koji ne deluje toliko intuitivno. Umesto rekurzivnog računanja{' '}
          <i>MinNumCoins(M)</i> za svaku vrednost <i>M</i> od 76 do 1, uradićemo potpuno suprotno,
          izračunaćemo <i>MinNumCoins(M)</i> za svaku vrednost <i>M</i> od 1 do 76. Sve vrednosti
          pamtimo i koristimo po potrebi pa tako, umesto vremenski zahtevnih rekurzivnih poziva,
          jednostavno potražili vrednosti iz unapred izračunate tabele. Rekurentna relacija za
          izračunavanje <i>MinNumCoins(money)</i> ostaje ista kao kod rekurzivnog pristupa.
        </p>
        <p>
          Pristup dinamičkog programiranja rešavanju problema kusura je opisan sledećim algoritmom.
          Vremenska složenost ovog algoritma za računanje <i>MinNumCoins(money)</i> je{' '}
          <i>O(money · |Coins|)</i>.
        </p>
        <code>
          <b>function</b> DPChange(money, coins)
          <br />
          <code style={{ marginLeft: '20px' }}>minNumCoins(0) ← 0</code>
          <br />
          <code style={{ marginLeft: '20px' }}>
            <b>for</b> m ← 1 to money <b>do</b>
          </code>
          <br />
          <code style={{ marginLeft: '40px' }}>minNumCoins(0) ← ∞</code>
          <br />
          <code style={{ marginLeft: '40px' }}>
            <b>for</b> i ← 1 to |Coins| <b>do</b>
          </code>
          <br />
          <code style={{ marginLeft: '60px' }}>
            <b>if </b>m ≤ coin<sub>i</sub>
            <b> then</b>
          </code>
          <br />
          <code style={{ marginLeft: '80px' }}>
            <b>if </b>minNumCoins(m − coin<sub>i</sub>) + 1 {'<'} minNumCoins(m)<b> then</b>
          </code>
          <br />
          <code style={{ marginLeft: '100px' }}>
            minNumCoins(m) ← minNumCoins(m − coin<sub>i</sub>) + 1
          </code>
          <br />
          <code style={{ marginLeft: '20px' }}>
            <b>return</b> minNumCoins(money)
          </code>
        </code>
      </div>
    </GlobalPageWrapper>
  );
};

export default DynamicPage;
