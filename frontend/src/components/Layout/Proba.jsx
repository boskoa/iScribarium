import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const components = {
  img: ({ alt, src, title }) => (
    <img
      alt={alt}
      src={src}
      title={title}
      style={{
        maxWidth: "100%",
        minWidth: 180,
        maxHeight: 400,
        boxShadow: "0 0 5px 0 grey",
        border: "1px solid grey",
      }}
    />
  ),
  table: (props) => (
    <table
      style={{
        maxWidth: 300,
        float: "right",
        border: "1px solid gray",
        margin: "5px 5px 0 10px ",
        padding: 5,
        fontSize: 12,
        backgroundColor: "rgba(50, 150, 200, 0.3)",
      }}
      {...props}
    />
  ),
  a: (props) => <a {...props} style={{ textDecoration: "none" }} />,
  p: (props) => <p {...props} style={{ textAlign: "justify" }} />,
  h2: (props) => (
    <h2
      {...props}
      style={{
        margin: "15px 0px 10px 0px",
        display: "inline-block",
        position: "relative",
        borderBottom: "2px solid rgba(50, 50, 100, 0.3)",
      }}
      className="subtitle"
    />
  ),
  h3: (props) => <h3 {...props} style={{ margin: "5px 0" }} />,
};

function Proba() {
  const text = `# Svemir

|   |
|:---:|
|![Habl slika svemira](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Hubble_ultra_deep_field.jpg/800px-Hubble_ultra_deep_field.jpg)|
|Slika svemira|

Svemir, kosmos, vasiona ili univerzum je beskonačno prostranstvo koje nas okružuje. Svemirom zovemo prostor-vreme, koji čine svetle galaksije (koje sadrže mnogo zvezda i drugih nebeskih tela) rasute u tamnom međugalaktičkom (i međuzvezdanom), uslovno, „praznom” prostor-vremenu koje zovemo vakuum. To je sveukupni prostor-vreme u kome plovi mnoštvo materijalnih nebeskih tela kao što su: zvezde, planete, satelite, planetoide, komete, meteore, crne rupe i neutronske zvezde. Ipak, najveći deo materije i energije je najverovatnije u obliku takozvane tamne materije i tamne energije.

## Definicija

Svemir je uobičajeno definiše kao sve što postoji, sve što je ikad postojalo, i sve što će ikad postojati. Prema našem današnjem razumevanju, Svemir se sastoji od tri konstituenta: prostor-vreme, formi energije, uključujući elektromagnetnu radijaciju i materiju, i fizičkih zakona koji ih povezuju. Svemir isto tako obuhvata sav život, svu istoriju, a neki filozofi i naučnici čak sugerišu da obuhvata i ideje kao što je matematika.

## Pojam Svemira

U prvoj polovini XX veka reč Svemir se upotrebljavala u smislu značenja reči celog prostorno-vremenskog kontinuuma u kojem egzistiramo zajedno sa svom energijom i materijom unutar njega. Pokušaji da se shvati sam smisao Svemira s najveće tačke gledišta su napravljeni u kosmologiji, nauci koja se razvila iz fizike i astronomije. Tokom druge polovine XX veka razvoj opservacione kosmologije, nazvane još i fizičkom kosmologijom, je doveo do podele u vezi s značenjem reči Svemir između opservacionih i teoretskih kosmologa, gde su prethodni obično odbacili nadu za opserviranjem celog prostorno-vremenskog kontinuuma, dok su kasniji zadržali ovu nadu pokušavajući pronaći najrazumnije spekulacije za modelovanje celog prostorno-vremenskog kontinuuma, uprkos ekstremnim poteškoćama u stvaranju slike bilo kojeg empirijskog ograničenja u ovim spekulacijama i riziku od svođenja na nivo metafizike.

Termini poznati Svemir, opservabilni Svemir i vidljivi Svemir se često koriste pri opisivanju dela Svemira koji se može videti ili pak opservirati. Oni koji su uvereni u to da možemo opservirati celi kontinuum mogu koristiti izraz naš Svemir, odnoseći se delimično samo na njegov poznati deo ljudskim bićima.

## Širenje, starost i teorija Velikog praska

|   |
|:---:|
|![Hronologija razvoja svemira](https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/CMB_Timeline300_no_WMAP.jpg/1024px-CMB_Timeline300_no_WMAP.jpg)|
|Hronologija razvoja svemira Hronologija razvoja svemira Hronologija razvoja svemira Hronologija razvoja svemira|

Aleksandar Aleksandrovič Fridman (1888—1925) je zamislio 1922. godine da se svemir širi, to jest da se galaksije udaljavaju jedna od druge, ali njegovo pisanje prvobitno nije imalo veći odjek, a slično je bilo i sa tvrdnjom Žorža E. Lemetra objavljenom nekoliko godina posle da je svemir koji se brzo širi mogao započeti kao jedna tačka, „prvi atom”, ali kada je takvu zamisao svemira podržao Albert Ajnštajn i drugi istraživači su je prihvatili.

Najvažniji rezultat fizičke kosmologije, saznanje da se svemir širi, izveden je iz posmatranja crvenog pomaka uobličenog u Hablov zakon. Ekstrapolacijom tog širenja po vremenu, nazad u prošlost, dostiže se gravitacioni singularitet, prilično apstraktan matematički koncept, koji možda odgovara, a možda i ne odgovara stvarnosti. Iz toga je izrasla teorija Velikog praska, koja je danas preovlađujući model svemira. Starost svemira, računajući od Velikog praska, prema sadašnjim podacima koje je prikupila WMAP sonda agencije NASA (engl. WMAP — Wilkinson Microwave Anisotropy Probe, Vilkinsonova sonda mikrotalasne anizotropije) procenjuje se na oko 13,7 milijardi (13,7 × 109) godina, sa granicom greške od oko 1% (± 200 miliona godina). Druge metode procene starosti daju različite vrednosti za starost svemira koje kreću od 11 milijardi do 20 milijardi godina. Većina ocena grupisana je u opsegu 13-15 milijardi godina.

Fundamentalni aspekt Velikog praska može se danas videti u opservaciji koja se zasniva na činjenici da što su galaksije dalje od nas to brže od nas odmiču. Takođe se može uočiti pri kosmičkom mikrotalasnom pozadinskom zračenju koje je mnogo slabije zračenje od onog skorije nastalog nakon Velikog praska. Ovo pozadinsko zračenje je značajno uniformno u svim pravcima, koje su kosmolozi pokušavali da objasne početnim periodom brze inflacije (širenja) uz Veliki prasak.

## Nenaučne teorije

### Judeo-hrišćansko verovanje

Potom reče Bog: neka budu videla na svodu nebeskom, da dele dan i noć, da budu znaci vremenima i danima i godinama; I neka svetle na svodu nebeskom, da obasjavaju zemlju. I bi tako. I stvori Bog dva videla velika: videlo veće da upravlja danom, i videlo manje da upravlja noću i zvezde. I postavi ih Bog na svodu nebeskom da obasjavaju zemlju. I da upravljaju danom i noću, i da dele svetlost od tame. I vide Bog da je dobro. I bi veče i bi jutro, dan četvrti. (1 Mojsije 1. 14-19).

Ovako se u prvoj knjizi Mojsijevoj opisuje stvaranje nebeskih tela i njihov uticaj na Zemlju. Ovo verovanje je rasprostranjeno među vernicima judeo-hrišćanskim i svima onima koji veruju biblijskim izvorima.

### Filozofija
Za Plotina, svemir je jedinstveno biće kojim vlada simpatija (simpatheia), saosećaj koji međusobno prožima i povezuje sve. To znači da se svako delovanje, ma gde bilo, oseća i prenosi i na druge delove svemira.

## Dalje
`;

  return (
    <div>
      <ReactMarkdown components={components} remarkPlugins={[remarkGfm]}>
        {text}
      </ReactMarkdown>
    </div>
  );
}

export default Proba;
