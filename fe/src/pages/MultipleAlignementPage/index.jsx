import React from 'react';
import GlobalPageWrapper from '../../components/GlobalPageWrapper';

const MultipleAlignmentPage = () => {
  return (
    <GlobalPageWrapper title="Višestruko poravnanje">
      <div className="content-wrapper">
        <p>
          Proteini koji obavljaju istu funkciju mogu imati donekle slične sekvence, ali ove
          sličnosti se veoma teško detektuju u slučaju različitih vrsta organizama. Ako je sličnost
          sekvenci slaba, onda poravnanje dve sekvence možda neće identifikovati njihovu biološku
          povezanost. Međutim, poređenje većeg broja sekvenci nam često može pomoći da pronađemo
          sličnosti koje se ne vide u poređenju dve sekvence.
        </p>
        <p>
          Ako ponovo pogledamo poravnanje tri A domena sa početne stranice, vidimo da imamo 19
          konzerviranih kolona:
        </p>
        <div className="image">
          <img src="/images/multiple/visestuko1.png" alt="visestruko poravnanje" />
        </div>
        <p>
          Međutim, ako pogledamo poravnanje po parovima, vidimo da se sličnosti između ovih A domena
          ne nalaze samo u 19 konzerviranih kolona. Poravnanje po parovima nam otkriva još 10 + 9 +
          12 = 31 polukonzerviranu kolonu gde se poklapaju po dve aminokiseline:
        </p>
        <div className="image">
          <img src="/images/multiple/visestruko2.png" alt="visestruko poravnanje" />
        </div>
        <p>
          Višestruko poravnanje t sekvenci v<sup>1</sup>, ..., v<sup>t</sup> definisano je matricom
          od t redova. Na poziciji i u matrici se nalaze simboli iz sekvence vi zajedno sa simbolima
          −. Podrazumevamo da nijedna kolona matrice na sadrži samo praznine. Na slici ispod možemo
          videti označene najpopularnije simbole u svakoj koloni (simboli koji se pojavljuju najviše
          puta u datoj koloni označeni velikim slovom).
        </p>
        <div className="image">
          <img src="/images/multiple/visestruko3.png" alt="visestruko poravnanje" />
        </div>
        <p>
          Matrica poravnanja za više sekvenci predstavlja generalizaciju matrice poravnanja dve
          sekvence na proizvoljan broj sekvenci. U primeru na slici iznad, ispod matrice poravnanja,
          je svakom simbolu različitom od praznine pridružen njegov indeks u sekvenci. Ovi indeksi
          pročitani po kolonama predstavljaju najtežu putanju u trodimenzionalnom grafu poravnanja
          za ove sekvence:
        </p>
        <div className="image">
          <img src="/images/multiple/visestruko4.png" alt="visestruko poravnanje" />
        </div>
        <p>
          Kod poravnanja dve sekvence, graf poravnanja je mreža kvadrata, a kod poravnanja tri
          sekvence, graf poravnanja je mreža kocki. Susedni čvorovi formiraju kocke i svaki ima
          sedam ulaznih grana:
        </p>
        <div className="image">
          <img src="/images/multiple/visestruko5.png" alt="visestruko poravnanje" />
        </div>
        <p>
          Rekurentna relacija za računanje skora višestrukog poravnanja predstavlja generalizaciju
          rekurentne relacije za dvostruko poravnanje. Za tri sekvence v, w i u definisaćemo
          rekurentnu relaciju za računanje vrednosti S<sub>i,j,k</sub>:
        </p>
        <div className="image">
          <img src="/images/multiple/visestrukorelacija.png" alt="visestruko poravnanje" />
        </div>
        <p>
          Matrica score je u ovom slučaju trodimenzionalna. U slučaju t sekvenci dužine n, graf
          poravnanja sadrži nt čvorova i svaki čvor ima 2<sup>t</sup> − 1 ulaznih grana. Kako je
          vremenska složenost dinamičkog algoritma poravnanja proporcionalna broju grana, vremenska
          složenost za višestruko poravnanje je{' '}
          <i>
            O(2<sup>t</sup>n<sup>t</sup>)
          </i>
          . Sa porastom broja sekvenci ovaj algoritam postaje prespor. Jedan od algoritama koji
          prevazilazi ovo usko grlo je pohlepni algoritam za višestruko poravnanje
        </p>
        <h3>Pohlepni algoritam</h3>
        <p>
          Svako višestruko poravnanje sadrži i dvostruka poravnanja njegovih sekvenci koja ne moraju
          biti optimalna:
        </p>
        <div className="image">
          <img src="/images/multiple/visestruko66.png" alt="visestruko poravnanje" />
        </div>
        <p>
          Proverimo da li važi obrnuto, tj. ako su data optimalna dvostruka poravnanja za parove od
          tri sekvence, da li se ona mogu kombinovati u višestruko poravnanje:
        </p>
        <div className="image">
          <img src="/images/multiple/visestruko77.png" alt="visestruko poravnanje" />
        </div>
        <p>
          Ne možemo uvek kombinovati optimalna dvostruka poravnanja u višestruko poravnanje zato što
          dvostruka poravnanja mogu biti nekompatibilna. Na osnovu prvog poravnanja, AAAA se
          pojavljuje pre TTTT u višestrukom poravnanju. Na osnovu drugog poravnanja, GGGG bi trebalo
          da se pojavi pre AAAA, a na osnovu trećeg, TTTT bi trebalo da se pojavi pre GGGG. Dolazimo
          do zaključka da se AAAA mo- ra pojaviti pre TTTT, koje se mora pojaviti pre GGGG, koje se
          mora pojaviti pre AAAA, što dovodi do kontradikcije.
        </p>
        <p>
          Kako bismo izbegli kontradikciju, pokušaćemo da rekonstruišemo višestruko poravnanje na
          osnovu dvostrukih poravnanja koja ne moraju biti optimalna. Pohlep- nim pristupom se za
          početak od svih dvostrukih poravnanja bira ono sa najvećim skorom i generiše profilna
          sekvenca. Na taj način problem se svodi na poravnanje t − 2 sekvence i profilne sekvence.
          Zatim se profilna sekvenca poredi sa preostale t − 2 sekvence. Na osnovu t − 2 poravnanja
          se bira ono sa maksimalnim skorom i ažurira profilna sekvenca i tako redom.
        </p>
        <p>
          Ovaj algoritam pokazuje dobre rezultate za slične sekvence. Međutim, kada sekvence nisu
          slične, može se desiti da se inicijalno odabrano poravnanje u velikoj meri razlikuje od
          ostalih i da se greška nagomilava dodavanjem novih sekvenci.
        </p>
      </div>
    </GlobalPageWrapper>
  );
};

export default MultipleAlignmentPage;
