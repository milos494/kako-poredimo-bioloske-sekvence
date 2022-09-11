import React from 'react';
import GlobalPageWrapper from '../../components/GlobalPageWrapper';

const HomePage = () => {
  return (
    <GlobalPageWrapper title="Proteini">
      <div className="content-wrapper">
        <h2>Ribozomalni proteini</h2>
        <p>
          Proteini su veliki, složeni molekuli, nepohodni za funkcionisanje svih živih organizama.
          Proteini se sastoje od stotina hiljada manjih jedinica, zvanih aminokiseline. Postoji 20
          različitih aminokiselina koje učestvuju u građi proteina.
        </p>
        <p>
          Generisanje proteina na osnovu DNK je kompleksan proces koji se sastoji iz dva koraka,
          transkripcije i translacije. Tokom transkripcije, informacije skladištene u DNK se prenose
          molekulu RNK tako što se ceo lanac DNK komplementarno prepisuje na molekul RNK. Tokom
          translacije, niz nukleotida u RNK se dešifruje unutar ribozoma, kako bi se dobio
          specifičan protein na osnovu pravila koja su definisana u genetskom kodu. Svaka sekvenca
          od 3 nukleotida (kodon) kodira jednu aminokiselinu koja se dodaje na rastući lanac
          proteina. Na slici ispod možemo videti genetski kod.
        </p>

        <div className="image">
          <img src="/images/home/genetskikod2.png" alt="Genetski kod" />
        </div>
        <h2 id="#nrp">Neribozomalni proteini</h2>
        <p>
          Za razliku od drugih proteina, sinteza neribozomalnih proteina (NRP) se odvija nezavisno
          od ribozoma. mesto toga, ovi organizmi proizvode NRP-ove uz pomoć ogromnih proteinskih
          kompleksa pod imenom <b>NRP sintetaze</b> (dijagram ispod).
        </p>

        <div className="image">
          <img src="/images/home/dijagram.png" alt="Dijagram" />
        </div>
        <p>
          Svaki NRP ima svoju NRP sintetazu, a svaka NRP sintetaza se sastoji od različitih
          segmenata, koji se nazivaju domeni adenilacije (A domeni). Svaki A domen određuje jednu
          aminokiselinu. Na primer, NRP sintetaza koja dešifruje 10 aminokiselina dug antibiotik
          Tirocidin B1, uključuje 10 A domena. Svaki A domen ima dužinu od oko 500 aminokiselina, i
          odgovoran je za jednu aminokiselinu u Tirocidinu B1.
        </p>
        <p>
          Kako svi A domeni imaju sličnu funkciju (dodavanje aminokiseline na rastući peptid),
          različiti A domeni imaju slične delove. A domeni bi takođe trebalo da imaju i različite
          delove koji odgovaraju različitim aminokiselinama. Na slici ispod možemo videti fragmente
          tri A domena koji kodiraju asparginsku kiselinu (Asp), orintonin (Orn) i valin (Val).
        </p>

        <div className="image">
          <img src="/images/home/asp-org-val.png" alt="AspOrgVal" />
        </div>
        <p>
          Možemo videti da u ovim A domenima imamo jedino 3 zajedničke kolone (pozicije unutar
          sekvenci na kojima se nalaze iste aminokoseline):
        </p>

        <div className="image">
          <img src="/images/home/zajednicke3kolone.png" alt="AspOrgVal" />
        </div>
        <p>
          Međutim, ako pomerimo drugu sekvencu za jedno mesto u desno (dodavanjem praznog simbola −
          na početak sekvence), onda vidimo da imamo 11 zajedničkih kolona:
        </p>

        <div className="image">
          <img src="/images/home/11zajednickih.png" alt="AspOrgVal" />
        </div>
        <p>Dodavanjem još nekoliko praznih simbola, otkrivamo 14 zajedničkih kolona:</p>

        <div className="image">
          <img src="/images/home/14zajednickih.png" alt="AspOrgVal" />
        </div>
        <p>I dodavanjem još malo praznih simbola, dobijamo 19 zajedničkih kolona:</p>

        <div className="image">
          <img src="/images/home/19zajednickih.png" alt="AspOrgVal" />
        </div>
        <p>
          Ispostavlja se da crvene kolone predstavljaju <b>konzervirano jezgro</b> koje dele mnogi A
          domeni. Nakon dugogodišnjih istraživanja u kojima je od velikog značaja bilo poznavanje
          konzerviranih kolona u A domenima iste NRP sintetaze, otkriveno je da su aminokiseline
          kodirane nizom nesusednih aminokiselina koje se nalaze na istim pozicijama u
          nekonzerviranim kolonama. Neribozomalni kod dužine 8 aminokiselina za Asp, Orn i Val
          možemo videti na sledećoj slici:
        </p>

        <div className="image">
          <img src="/images/home/8ljubicastoKod.png" alt="AspOrgVal" />
        </div>
        <p>
          Neribozomalni kod definisan nizom od 8 aminokiselina se naziva signatura. Na sledećoj
          slici možemo videti izdvojeno signature za aminokiseline Asp, Orn i Val:
        </p>

        <div className="image">
          <img src="/images/home/8kratkoLjubicastoKod.png" alt="AspOrgVal" />
        </div>
      </div>
    </GlobalPageWrapper>
  );
};

export default HomePage;
