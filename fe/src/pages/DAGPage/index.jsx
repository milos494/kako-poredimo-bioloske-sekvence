import React from 'react';
import GlobalPageWrapper from '../../components/GlobalPageWrapper';

const DAGPage = () => {
  return (
    <GlobalPageWrapper
      title="Proizvoljni graf"
      prethodno="/problem-poravnanja"
      sledece="/globalno-poravnanje"
    >
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
          Ako čvor u grafu označimo slovom <i>b</i>, onda ćemo sa{' '}
          <i>
            S<sub>b</sub>
          </i>{' '}
          označiti najtežu putanju od početnog čvora do čvora <i>b</i>. Za svaki čvor <i>a</i>{' '}
          kažemo da je predak čvora <i>b</i> ako u grafu postoji grana koja povezuje čvorove{' '}
          <i>a</i> i <i>b</i>. Slično kao kod grafa poravnanja, definisaćemo rekurentnu relaciju za
          računanje vrednosti{' '}
          <i>
            S<sub>b</sub>
          </i>{' '}
          za proizvoljni usmereni aciklični graf:
        </p>
        <div className="image">
          <img src="/images/dag/dagrelacija2.png" alt="DAG" />
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
          čvorova tako da za čvor <i>b</i> računamo vrednost{' '}
          <i>
            S<sub>b</sub>
          </i>{' '}
          nakon svih njegovih predaka. Tako definisan redosled, koji obezbeđuje da pre svakog čvora
          obiđemo sve njegov pretke, naziva se <b>topološko sortiranje</b> čvorova grafa. Ako za niz
          čvorova <i>(a1, ..., ak)</i> važi da će se za svaki čvor{' '}
          <i>
            a<sub>i</sub>
          </i>{' '}
          nalaziti ispred čvora{' '}
          <i>
            a<sub>j</sub>
          </i>{' '}
          ako u grafu postoji grana od{' '}
          <i>
            a<sub>i</sub>
          </i>{' '}
          do{' '}
          <i>
            a<sub>j</sub>
          </i>{' '}
          za <i>i {'<'} j</i>, onda kažemo da je takav niz topološki sortiran. Može se dokazati da
          za svaki usmereni aciklični graf postoji topološko sortiranje, i da takvo soritanje može
          biti konstruisano u vremenu proporcionalnom broju grana u grafu (<i>O(#edges)</i>). Nakon
          ovako definisanog redosleda čvorova, možemo definisati algoritam za računanje najteže
          putanje u proizvoljnom usmerenom acikličnom grafu:
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
