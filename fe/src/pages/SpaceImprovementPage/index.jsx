import React from 'react';
import GlobalPageWrapper from '../../components/GlobalPageWrapper';

const SpaceImprovementPage = () => {
  return (
    <GlobalPageWrapper title="Prostorna poboljšanja">
      <div className="content-wrapper">
        <p>
          Proteinske sekvence mogu sadržati i do nekoliko desetina hiljada aminokiselina. Ako bismo
          pokušali da konstruišemo poravnanje dve sekvence dužine od po nekoliko desetina hiljada
          karaktera, ne bismo uspeli, zato što bi količina memorije za čuvanje matrice poravnanja
          bila prevelika.
        </p>
        <p>
          U slučaju dinamičkih algoritama poravnanja, vremenska složenost je proporcionalna broju
          grana (<i>O(nm)</i>). Da bismo rekonstruisali najtežu putanju u grafu poravnanja, potrebno
          je čuvati i putokaze od krajnjeg do početnog čvora, pa je i prostorna složenost ovog
          algoritma proporcionalna broju čvorova (<i>O(nm)</i>). Konstruisaćemo prostorno efikasniji
          algoritam za poravnanje čija će prostorna složenost biti linearna (<i>O(n)</i>), a
          vremenska složenost će biti duplirana, tj. i dalje će ostati <i>O(nm)</i>. Algoritam će
          biti konstruisan pomoću strategije podeli-pa-vladaj.
        </p>
        <p>
          Za računanje skora najteže putanje nije potrebno čuvati celu matricu poravnanja. Za
          računanje skora jedne kolone, dovoljno je čuvati vrednosti skorova prethodne kolone, u
          svakom trenutku dovoljno je čuvati matricu od <i>2n = O(n)</i> elemenata. Za računanje
          skorova u koloni j dovoljni su nam skorovi iz kolone j − 1. Međutim, pronalaženje najteže
          putanje zahteva čuvanje cele matrice poravnanja, što dovodi do kvadratne prostorne
          složenosti. Da bismo smanjili prostornu složenost, nećemo čuvati matricu poravnanja, ali
          ćemo potrošiti više vremena.
        </p>
        <div className="image">
          <img src="/images/space/prostor3.png" alt="prostona poboljsanja" />
        </div>
        <h3>Srednji čvor</h3>
        <p>
          Neka je dat graf poravnanja za sekvence v dužine n i w dužine m. Označimo sa middle =
          ⌊m/2⌋. <b>Srednjom kolonom</b> ćemo zvati kolonu koja sadrži sve čvorove (i, middle) za 0
          ≤ i ≤ n. Najteža putanja od početnog do krajnjeg čvora u grafu poravnanja mora negde
          preseći srednju kolonu. Čvor preseka ćemo zvati <b>srednji čvor</b>. Na sledećoj slici
          levo, srednja kolona je middle = 3, a najteža putanja preseca srednju kolonu u čvoru (4,
          3) (srednji čvor).
        </p>
        <p>
          Primetimo da za pronalaženje srednjeg čvora nije neophodno da rekonstruišemo najtežu
          putanju u grafu poravnanja. Označimo putanju od početnog do krajnjeg čvora koja prolazi
          kroz srednju kolonu u čvoru i sa i-putanjom. Putanja na slici ispod levo je 4-putanja jer
          sadrži četvrti čvor srednje kolone (numeracija čvorova kreće od nule). Za svako i između 0
          i n želeli bismo da nađemo težine najtežih i-putanja (označićemo ih sa length(i)). Od svih
          i-putanja, ona sa maksimalnom težinom prolazi kroz srednji čvor. Na sledećoj slici desno
          su prikazane težine svih najtežih i-putanja upisane u odgovarajuće čvorove srednje kolone.
        </p>
        <div className="image">
          <img
            src="/images/space/srednjicvor1.png"
            alt="prostona poboljsanja"
            style={{ margin: '0 20px' }}
          />
          <img
            src="/images/space/srednjicvor3.png"
            alt="prostona poboljsanja"
            style={{ margin: '0 20px' }}
          />
        </div>
        <p>
          Označimo sa fromSource(i) težinu najteže putanje od početnog čvora do čvora (i, middle) i
          sa toSink(i) težinu najteže putanje od čvora (i, middle) do krajnjeg čvora. Težinu najteže
          i-putanje length(i) računamo na sledeći način:
        </p>
        <div className="image">
          <img src="/images/space/srednjicvorL.png" alt="prostona poboljsanja" />
        </div>
        <p>
          Vrednost fromSource(i) odgovara veličini S<sub>i,middle</sub>. Već smo razmotrili da
          matricu S možemo izračunati u linearnom prostoru. Kako je vremenska složenost
          proporcionalna broju grana u grafu poravnanja, vremenska složenost algoritma za računanje
          S<sub>i,middle</sub> je proporcionalna polovini grafa poravnanja, tj. nm/2 (slika ispod
          levo).
        </p>
        <p>
          Računanje vrednosti toSink(i) se svodi na pronalaženje najteže putanje od krajnjeg čvora
          do čvora (i, middle) ako obrnemo smer svake grane (slika ispod desno). Umesto obrtanja
          smerova grana, možemo da obrnemo sekvence v i w. U ovom slučaju vrednost toSink(i)
          odgovara veličini S<sub>n−i,m−middle</sub> u grafu poravnanja za obrnute sekvence v i w.
          Izračunavanje toSink(i) je slično izračunavanju fromSource(i) i može se izvršiti u
          linearnom prostoru i vremenu proporcionalnom polovini grafa poravnanja, tj. nm/2. Možemo
          reći da je za računanje svih vrednosti length(i) (srednjeg čvora) potrebno <i>O(n)</i>{' '}
          prostora i<i>O(nm)</i> vremena (nm/2 + nm/2 = nm).
        </p>
        <div className="image">
          <img
            src="/images/space/skorporavnanja-source.png"
            alt="prostona poboljsanja"
            style={{ margin: '0 20px' }}
          />
          <img
            src="/images/space/skorporavnanja-sync.png"
            alt="prostona poboljsanja"
            style={{ margin: '0 20px' }}
          />
        </div>
        <p>
          Pronalaskom srednjeg čvora, automatski znamo dva dela grafa poravnanja (pravougaonika)
          kroz koje prolazi najteža putanja. Kao što je prikazano na slici ispod levo jedan od
          pravougaonika sadrži sve čvorove koji se nalaze iznad i levo od srednjeg čvora, a drugi
          pravougaonik sadrži sve čvorove dole i desno od srednjeg čvora. Njihova ukupna površina
          odgovara polovini površine grafa poravnanja.
        </p>
        <p>
          Sada možemo podeliti problem pronalaženja najteže putanje od čvora (0, 0) do čvora (n, m)
          na dva potproblema. Prvi potproblem je pronalaženje najteže putanje od čvora (0, 0) do
          srednjeg čvora, a drugi je pronalaženje najteže putanje od srednjeg čvora do čvora (n, m).
          Korak vladaj podrazumeva pronalaženje srednjeg čvora u manjim pravougaonicima, za šta je
          vremenska složenost proporcionalna ukupnoj površini manjih pravougaonika, tj.
          <i>O(nm/2)</i> (slika ispod desno). Ovim postupkom smo pronašli tri čvora najteže putanje.
          Postupak nastavljamo sve dok ne dođemo do pravougaonika dimenzije 1 × 1 i dok ne pronađemo
          sve čvorove najteže putanje.
        </p>
        <div className="image">
          <img
            src="/images/space/srednji-a.png"
            alt="prostona poboljsanja"
            style={{ margin: '0 20px' }}
          />
          <img
            src="/images/space/srednji-b.png"
            alt="prostona poboljsanja"
            style={{ margin: '0 20px' }}
          />
        </div>
        <p>
          Vremenska složenost nalaženja srednjeg čvora u svakom potproblemu je proporci onalna
          površini grafa poravnanja (pravougaonika). U svakom potproblemu površina pravougaonika se
          smanjuje dva puta dok ne dođemo do pravougaonika dimenzija 1 × 1. U prvom koraku imaćemo
          nm operacija, u drugom nm/2, u trećem nm/4... što znači da je vremenska složenost jednaka:
        </p>
        <div className="image">
          <img src="/images/space/prostorslozenost.png" alt="prostona poboljsanja" />
        </div>
        <p>
          Strategijom podeli-pa-vladaj je postignuto poboljšanje prostorne složenosti na linearnu, a
          vremenska složenost je duplirana, ali je ostala kvadratna.
        </p>
      </div>
    </GlobalPageWrapper>
  );
};

export default SpaceImprovementPage;
