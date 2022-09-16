import React from 'react';

const Content = () => {
  return (
    <div className="content-wrapper" title="Globalno poravnanje">
      <p>
        Do sada smo podrazumevali da je optimalno poravnanje dve sekvence ono koje ima najveći broj
        poklapanja, tj. ono kod koga je Hamingovo rastojanje najmanje. Problem poravnanja smo
        svodili na problem pronalaženja najduže zajedničke podsekvence. Ovako konstruisano
        poravnanje ima veći broj poklapanja, ali i insercija i delecija. Poravnanje u biološkom
        smislu može imati različita značenja. Važno je da možemo da kontrolišemo da li u optimalnom
        poravnanju želimo da dobijemo manje ili više insercija/delecija kao i da li da budu na
        početku/kraju niske ili u sredini. Uvešćemo pojam <b>skora poravnanja</b>, na osnovu koga
        ćemo definisati različite vrste poravnanja.
      </p>
      <p>
        Ako skor za promašaj (<i>mismatch</i>) označimo sa <i>µ</i>, a skor za insercije i delecije
        (indel) sa <i>σ</i>, onda skor poravnanja možemo računati kao:
      </p>
      <div className="image">
        <img
          style={{ width: '400px' }}
          src="/images/global/skorporavnanja.png"
          alt="Skor poravnanja"
        />
      </div>
      <p>
        Pošto su neke mutacije više verovatne od drugih, to znači da svaki promašaj, inserciju i
        deleciju možemo različito ceniti zavisno koji simboli su uključeni. Tada ima smisla ove
        vrednosti predstaviti matrično i takvu matricu nazivamo <b>matricom skora</b>. Na slici
        ispod možemo videti matricu skora DNK sekvenci kada su promašaji kažnjeni skorom <i>µ</i> a
        insercije i delecije skorom <i>σ</i>. Ovakve matrice ne moraju biti simetrične, jer se na
        primer češće dešava da G mutira u T nego obrnuto, na slici ispod možemo videti primer jedne
        takve matrice.
      </p>
      <div className="image">
        <img
          style={{ width: '300px', margin: 0 }}
          src="/images/global/miSigmaSkor.png"
          alt="Skor poravnanja"
        />
        <img
          style={{ width: '300px', margin: 0 }}
          src="/images/global/misigmaskripta.png"
          alt="Skor poravnanja"
        />
      </div>
      <p>
        Označimo matricu skora sa <i>score</i>. Da bismo rešili ovaj problem, uzevši u obzir izmenu
        u načinu računanja skora poravnanja, definisaćemo rekurentnu relaciju za računanje najteže
        putanje <i>S</i> u grafu poravnanja:
      </p>
      <div className="image">
        <img src="/images/global/relacijaglobalno.png" alt="Skor poravnanja" />
      </div>
      <h2 id="#implementacija">Implementacija</h2>
    </div>
  );
};

export default Content;
