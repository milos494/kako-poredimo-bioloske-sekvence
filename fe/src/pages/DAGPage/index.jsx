import React from 'react';
import GlobalPageWrapper from '../../components/GlobalPageWrapper';

const DAGPage = () => {
  return (
    <GlobalPageWrapper title="Proizvoljni graf">
      <div className="content-wrapper">
        <p>
          Pored već konstruisanog poravnanja, postoje i razne druge, kompleksnije vrste poravnanja
          koja se ne mogu modelovati mrežnim grafovima. Zbog toga ćemo, uz pomoć principa dinamičkog
          programiranja, predstaviti rešenje za opštiji problem koji podrazumeva pronalaženje
          najteže putanje u usmerenom težinskom grafu koji nema mrežnu topologiju
        </p>
        <div className="image">
          <img style={{ width: '400px' }} src="/images/dag/dag2.png" alt="DAG" />
        </div>
        <p>
          Ako čvor u grafu označimo slovom b, onda ćemo sa S<sub>b</sub> označiti najtežu putanju od
          početnog čvora do čvora b. Za svaki čvor a kažemo da je predak čvora b ako u grafu postoji
          grana koja povezuje čvorove a i b. Slično kao kod grafa poravnanja, definisaćemo
          rekurentnu relaciju za računanje vrednosti S<sub>b</sub> za proizvoljni usmereni aciklični
          graf:
        </p>
        <div className="image">
          <img src="/images/dag/dagrelacija.png" alt="DAG" />
        </div>
        <p>
          Posmatrajmo graf na sledećoj slici. Želeli bismo da izračunamo težinu najteže putanje od
          početnog čvora do čvora označenog upitnikom. Da bismo izračunali najtežu putanju do ovog
          čvora, moramo obići sve njegove pretke. Ako pokušamo da izračunamo težinu za sve pretke,
          vratićemo se do posmatranog čvora. Možemo zaključiti da se rekurentna relacija ne može
          primeniti na sve grafove već samo na grafove koji ne sadrže cikluse, odnosno na usmerene
          aciklične grafove.
        </p>
        <div className="image">
          <img style={{ width: '80%' }} src="/images/dag/ciklus333.png" alt="DAG" />
        </div>
        <h2> Topološko sortiranje</h2>
        <p>
          Posmatrajmo ponovo sliku sa početka, gde je plavom bojom označen početni, a crvenom
          krajnji čvor. Postavljamo pitanje kako da pronađemo najtežu putanju do krajnjeg čvora kod
          grafa koji nije mreža. Kod mrežnog grafa, prvo bismo obilazili sve čvorove po obodu, pa
          onda po unutrašnjosti, i time bismo bili sigurni da smo obišli sve pretke datog čvora.
          Pitamo se kako da budemo sigurni da smo obišli sve pretke čvora u grafu, ako taj graf nema
          mrežnu topologiju. Da bismo pronašli najtežu putanju, prvo moramo da definišemo redosled
          čvorova tako da za čvor b računamo vrednost S<sub>b</sub> nakon svih njegovih predaka.
          Tako definisan redosled, koji obezbeđuje da pre svakog čvora obiđemo sve njegov pretke,
          naziva se topološko sortiranje čvorova grafa. Ako za niz čvorova <i>(a1, ..., ak)</i> važi
          da će se za svaki čvor a<sub>i</sub> nalaziti ispred čvora a<sub>j</sub> ako u grafu
          postoji grana od a<sub>i</sub> do a<sub>j</sub> za i {'<'} j, onda kažemo da je takav niz
          toploški sortiran. Može se dokazati da za svaki usmereni aciklični graf postoji topološko
          sortoranje, i da takvo soritanje može biti konstruisano u vremenu pro- porcionalnom broju
          grana u grafu (<i>O(#edges)</i>). Nakon ovako definisanog redosleda čvorova, možemo
          definisati algoritam za računanje najteže putanje u proizvoljnom usmerenom acikličnom
          grafu:
        </p>
        <code>
          <b>function</b> LongestPath(Graph, source, sink)
          <br />
          <code style={{ marginLeft: '20px' }}>
            <b>for</b> each node b in Graph <b>do</b>
          </code>
          <br />
          <code style={{ marginLeft: '40px' }}>
            S<sub>b</sub> ← −∞
          </code>
          <br />
          <code style={{ marginLeft: '20px' }}>
            S<sub>source</sub> ← 0
          </code>
          <br />
          <code style={{ marginLeft: '20px' }}>topologically order Graph</code>
          <br />
          <code style={{ marginLeft: '20px' }}>
            <b>for</b> each node b in Graph (followig the topological order) <b>do</b>
          </code>
          <br />
          <code style={{ marginLeft: '40px' }}>
            S<sub>b</sub> ← max<sub>all predecessors a of node b</sub> {'{'}Sa + weight of edge from
            a to b{'}'}
          </code>
          <br />
          <code style={{ marginLeft: '20px' }}>
            <b>return</b> S<sub>sink</sub>
          </code>
        </code>
      </div>
    </GlobalPageWrapper>
  );
};

export default DAGPage;
