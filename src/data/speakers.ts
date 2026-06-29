import {
  githubLink,
  linkedInLink,
  type ProfileLink,
  twitterLink,
  websiteLink,
} from "./profile-links";

export type Speaker = {
  name: string;
  image?: string;
  links?: ProfileLink[];
};

export const SPEAKERS = {
  "estera-kot": {
    name: "Estera Kot",
    image: "/speakers/estera_kot.jpeg",
    links: [linkedInLink("https://www.linkedin.com/in/esterakot/")],
  },
  "bartek-brak": {
    name: "Bartek Brak",
    image: "/speakers/bartosz_rychlicki.jpeg",
    links: [githubLink("https://github.com/bartekbrak/")],
  },
  "agata-skamruk": {
    name: "Agata Skamruk",
    image: "/speakers/Agata_Skamruk.jpeg",
    links: [linkedInLink("https://www.linkedin.com/in/agata-skamruk-785b44b1/")],
  },
  "yevhen-maltsev": {
    name: "Yevhen Maltsev",
    image: "/speakers/yevhen_maltsev.jpg",
    links: [
      linkedInLink("https://www.linkedin.com/in/yevhen-maltsev-990500296"),
      githubLink("https://github.com/maltsevmki"),
    ],
  },
  "vladyslav-fedoriuk": {
    name: "Vladyslav Fedoriuk",
    image: "/speakers/vlad_fedoriuk.jpeg",
    links: [
      linkedInLink("https://www.linkedin.com/in/vladyslav-fedoriuk"),
      githubLink("https://github.com/vladfedoriuk"),
    ],
  },
  "jonas-cicenas": {
    name: "Jonas Cicenas",
    image: "/speakers/jonas_cicenas.jpg",
    links: [
      linkedInLink("https://www.linkedin.com/in/jonascicenas/"),
      githubLink("https://github.com/JNK5a"),
      twitterLink("https://x.com/jonuxc"),
      websiteLink("https://mapkinases.eu/founder/"),
    ],
  },
  "andrii-orlov": {
    name: "Andrii Orlov",
    image: "/speakers/Andrii_Orlov.jpg",
    links: [
      linkedInLink("https://www.linkedin.com/in/orlan0045/"),
      githubLink("https://github.com/andrii-harbour"),
      twitterLink("https://x.com/orlan0045"),
    ],
  },
  "krzysiek-wilczynski": {
    name: "Krzysiek Wilczyński",
    image: "/speakers/krzzysztof_wilczynski.jpeg",
    links: [
      linkedInLink("https://www.linkedin.com/in/3sztof/"),
      githubLink("https://github.com/3sztof"),
      websiteLink("https://3sztof.github.io/"),
    ],
  },
  "dorota-ostrowska": {
    name: "Dorota Ostrowska",
    image: "/speakers/dorota_ostrowska.jpeg",
    links: [
      linkedInLink("https://www.linkedin.com/in/ostrowska-dorota/"),
      githubLink("https://github.com/dorota-ostrowska/"),
    ],
  },
  "piotr-gredowski": {
    name: "Piotr Grędowski",
    image: "/organizers/piotr-gredowski.jpeg",
    links: [
      linkedInLink("https://www.linkedin.com/in/piotrgredowski/"),
      githubLink("https://github.com/piotrgredowski"),
      twitterLink("https://x.com/piotrgredowski"),
      websiteLink("https://gredowski.com"),
    ],
  },
  "cyprian-gburek": {
    name: "Cyprian Gburek",
    image: "/speakers/cyprian_gburek.jpeg",
    links: [
      linkedInLink("https://www.linkedin.com/in/cyprian-gburek/"),
      githubLink("https://github.com/SirCypkowskyy"),
      websiteLink("https://gburek.dev/pl"),
    ],
  },
  "mateusz-staniaszek": {
    name: "Mateusz Staniaszek",
    image: "/speakers/mateusz_staniaszek.jpeg",
    links: [linkedInLink("https://www.linkedin.com/in/mstaniaszek/")],
  },
  "szymon-cader": {
    name: "Szymon Cader",
    image: "/speakers/szymon_cader.png",
    links: [
      linkedInLink("https://www.linkedin.com/in/szymon-cader/"),
      githubLink("https://github.com/nekeal/"),
    ],
  },
  "timothy-hobbs": {
    name: "Timothy Hobbs",
    image: "/speakers/timothy_hobbs.png",
    links: [
      linkedInLink("https://www.linkedin.com/in/timothy-hobbs-5a6a80229/"),
      githubLink("https://github.com/timthelion/"),
      websiteLink("https://hobbs.cz"),
    ],
  },
  "marta-mulik-walczyna": {
    name: "Marta Mulik-Walczyna (Akademickie Biuro Karier)",
    image: "/speakers/marta_mulik_walczyna.png",
  },
  "jakub-melzacki": {
    name: "Jakub Melzacki",
    image: "/speakers/jakub_melzacki.jpeg",
    links: [
      linkedInLink("https://www.linkedin.com/in/jmelzacki/"),
      githubLink("https://github.com/melzak252"),
    ],
  },
  "daniel-goliszewski": {
    name: "Daniel Goliszewski",
    image: "/speakers/daniel_goliszewski.jpeg",
    links: [linkedInLink("https://www.linkedin.com/in/daniel-goliszewski/")],
  },
  "aksa-fatima": {
    name: "Aksa Fatima",
    image: "/speakers/aksa_fatima.jpeg",
  },
  "janusz-kamienski": {
    name: 'Janusz "Ivellios" Kamieński',
    image: "/speakers/janusz_kamienski.jpeg",
    links: [
      linkedInLink("https://www.linkedin.com/in/jakamienski/"),
      githubLink("https://github.com/ivellios"),
    ],
  },
  "jan-bielecki": {
    name: "Jan Bielecki",
    image: "/speakers/jan_bielecki.jpg",
    links: [
      linkedInLink("https://www.linkedin.com/in/jan-bielecki/"),
      githubLink("https://github.com/K4liber"),
      websiteLink("https://k4liber.github.io/definit-dsa/"),
    ],
  },
  "aleksandra-olszewska": {
    name: "Aleksandra Olszewska",
    image: "/speakers/aleksandra_olszewska.png",
    links: [linkedInLink("https://www.linkedin.com/in/aleksandra-olszewska-66218a109/")],
  },
  "vadym-lishchynskyi": {
    name: "Vadym Lishchynskyi",
    image: "/speakers/Vadym_Lishchynskyi.jpg",
    links: [linkedInLink("https://www.linkedin.com/in/vadym-lishchynskyi-924a241a5/")],
  },
  "mateusz-zaremba": {
    name: "Mateusz Zaremba",
    image: "/speakers/mateusz_zaremba.jpg",
    links: [linkedInLink("https://www.linkedin.com/in/mateusz-zaremba")],
  },
  "bartek-nowak": {
    name: 'Bartek "PokerFacowaty" Nowak',
    image: "/speakers/bartek_nowak.jpeg",
    links: [
      githubLink("https://github.com/PokerFacowaty"),
      websiteLink("https://pokerfacowaty.com/"),
    ],
  },
  "kinga-marszalkowska": {
    name: "Kinga Marszałkowska",
    image: "/speakers/kinga_marszalkowska.jpeg",
    links: [
      linkedInLink(
        "https://www.linkedin.com/in/kinga-marszałkowska-38b5391a9",
      ),
      githubLink("https://github.com/kinga-marszalkowska"),
    ],
  },
  "sebastian-buczynski": {
    name: "Sebastian Buczyński",
    image: "/speakers/sebastian_buczynski.png",
    links: [
      linkedInLink("https://www.linkedin.com/in/sebastianbuczynski/"),
      githubLink("https://github.com/Enforcer"),
      websiteLink("https://breadcrumbscollector.tech/"),
    ],
  },
};

export type SpeakerId = keyof typeof SPEAKERS;
