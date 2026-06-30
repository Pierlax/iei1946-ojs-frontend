// ============================================================
// IEI 1946 - Static Data & Types
// All content from the current iei1946.it site
// ============================================================

const OJS_BASE = (import.meta.env.VITE_OJS_BASE_URL || "http://204.216.215.234/ojs").replace(/\/$/, "");
const OJS_JOURNAL = import.meta.env.VITE_OJS_JOURNAL_PATH || "iei";
const ojsUrl = (suffix: string) => `${OJS_BASE}/index.php/${OJS_JOURNAL}/${suffix}`;

export const JOURNAL = {
  name: "Economia Internazionale",
  nameEn: "International Economics",
  fullName: "Economia Internazionale / International Economics",
  issn: "2499-8265",
  publisher: "Camera di Commercio di Genova",
  publisherEn: "Chamber of Commerce of Genova",
  institute: "Istituto di Economia Internazionale",
  instituteEn: "Institute for International Economics",
  foundedYear: 1948,
  instituteFounded: 1946,
  address: "Via Garibaldi, 4 (III piano) - 16124 Genova (Italy)",
  phone: "+39 010 2704.202",
  fax: "+39 010 2704.244",
  email: "economia.internazionale@ge.camcom.it",
  website: "www.ge.camcom.gov.it",
  license: "Creative Commons Attribution-NonCommercial 4.0 International",
  licenseUrl: "https://creativecommons.org/licenses/by-nc/4.0/",
  ojsBaseUrl: OJS_BASE,
  ojsJournalPath: OJS_JOURNAL,
  submissionUrl: ojsUrl("submissions"),
  loginUrl: ojsUrl("login"),
  registerUrl: ojsUrl("user/register"),
  logoUrl: "https://d2xsxph8kpxj0f.cloudfront.net/109698682/Ybj72GNFScvp3J8KE6MPud/iei-logo_add5cc4c.webp",
  heroUrl: "https://d2xsxph8kpxj0f.cloudfront.net/109698682/Ybj72GNFScvp3J8KE6MPud/iei-hero-background_2104ff9e.png",
  // Original site images
  coverRivistaUrl: "https://d2xsxph8kpxj0f.cloudfront.net/109698682/Ybj72GNFScvp3J8KE6MPud/cover-rivista_5e4d5a7e.png",
  logoCameraUrl: "https://d2xsxph8kpxj0f.cloudfront.net/109698682/Ybj72GNFScvp3J8KE6MPud/logo-camera-color_ed4b6c8a.jpg",
  logoFooterUrl: "https://d2xsxph8kpxj0f.cloudfront.net/109698682/Ybj72GNFScvp3J8KE6MPud/logo-footer_0a8f42dd.png",
  logoHeaderUrl: "https://d2xsxph8kpxj0f.cloudfront.net/109698682/Ybj72GNFScvp3J8KE6MPud/logo-header_76aa02ba.png",
  salaSpecchiUrl: "https://d2xsxph8kpxj0f.cloudfront.net/109698682/Ybj72GNFScvp3J8KE6MPud/sala-specchi_5b721807.jpg",
  inaugurazione1946Url: "https://d2xsxph8kpxj0f.cloudfront.net/109698682/Ybj72GNFScvp3J8KE6MPud/inaugurazione-1946_f3a32db6.jpg",
  congresso1948Url: "https://d2xsxph8kpxj0f.cloudfront.net/109698682/Ybj72GNFScvp3J8KE6MPud/congresso-1948_7c69685f.jpg",
  einaudi1952Url: "https://d2xsxph8kpxj0f.cloudfront.net/109698682/Ybj72GNFScvp3J8KE6MPud/einaudi-1952_78df80a7.jpg",
  manzittiConvegnoUrl: "https://d2xsxph8kpxj0f.cloudfront.net/109698682/Ybj72GNFScvp3J8KE6MPud/manzitti-convegno_5306b1aa.jpg",
  galbraith1972Url: "https://d2xsxph8kpxj0f.cloudfront.net/109698682/Ybj72GNFScvp3J8KE6MPud/galbraith-1972_144a981e.jpg",
  einaudiInaugurazioneUrl: "https://d2xsxph8kpxj0f.cloudfront.net/109698682/Ybj72GNFScvp3J8KE6MPud/einaudi-inaugurazione_5bb9647e.jpg",
  evento2024Url: "https://d2xsxph8kpxj0f.cloudfront.net/109698682/Ybj72GNFScvp3J8KE6MPud/evento-2024_1690fa02.jpg",
  premiati2024Url: "https://d2xsxph8kpxj0f.cloudfront.net/109698682/Ybj72GNFScvp3J8KE6MPud/premiati-2024_4a285893.jpg",
  evento2025Url: "https://d2xsxph8kpxj0f.cloudfront.net/109698682/Ybj72GNFScvp3J8KE6MPud/evento-2025_e1d9135a.jpg",
  premiati2025Url: "https://d2xsxph8kpxj0f.cloudfront.net/109698682/Ybj72GNFScvp3J8KE6MPud/premiati-2025_e47e7d9e.jpg",
  numeroSpecialeEinaudiUrl: "https://d2xsxph8kpxj0f.cloudfront.net/109698682/Ybj72GNFScvp3J8KE6MPud/numero-speciale-einaudi_ec02d31a.jpg",
  evento2023Url: "https://d2xsxph8kpxj0f.cloudfront.net/109698682/Ybj72GNFScvp3J8KE6MPud/evento-2023_6116881e.jpg",
  mostraGenova1922Url: "https://d2xsxph8kpxj0f.cloudfront.net/109698682/Ybj72GNFScvp3J8KE6MPud/mostra-genova-1922_76f9587c.jpg",
  premiazione2022Url: "https://d2xsxph8kpxj0f.cloudfront.net/109698682/Ybj72GNFScvp3J8KE6MPud/premiazione-2022_a17d99b5.jpg",
  relatori2022Url: "https://d2xsxph8kpxj0f.cloudfront.net/109698682/Ybj72GNFScvp3J8KE6MPud/relatori-2022_24ec6542.jpg",
  evento2022Url: "https://d2xsxph8kpxj0f.cloudfront.net/109698682/Ybj72GNFScvp3J8KE6MPud/evento-2022_127ee898.jpg",
};

export const EDITORIAL_BOARD = {
  editorInChief: "Giovanni Battista Pittaluga",
  coEditors: ["Maurizio Conti", "Elena Seghezza"],
  scientificBoard: [
    "Nicola Acocella", "Luigi Attanasio", "Angelo Baglioni", "Giorgio Basevi",
    "Eugenia Baroncelli", "Luca Beltrametti", "Lorenzo Bini-Smaghi", "Franco Bruni",
    "Maurizio Caviglia", "Gabriele Cardullo", "Parvesh K. Chopra", "Georgios Chortareas",
    "Mario Deaglio", "Debora Di Gioacchino", "Silvia Fedeli", "Daniele Franco",
    "Gerald Epstein", "Jeffry Frieden", "Emma Galli", "Claudia Girardone",
    "Paolo Guerrieri Paleotti", "Carsten Hefeker", "Arye L. Hillman", "Claudio Impenna",
    "Miroslav N. Jovanovic", "Rainer Masera", "Giuseppe Mastromatteo", "Juan Carlos Moreno-Brid",
    "Gianmarco Ottaviano", "Piercarlo Padoan", "Martin Paldam", "Angelo Panebianco",
    "Carlo Panico", "Martin Puchet Anyul", "Alessio Reghezza",
    "Sergio Rossi", "Laura Sabani", "Paolo Savona", "Vito Tanzi", "John Thornton",
  ],
};

export const REVIEW_METRICS = {
  reviewTime: { value: "8", unit: "Weeks", label: "Review Time" },
  decisionTime: { value: "10", unit: "Weeks", label: "Time to Final Decision" },
  publicationTime: { value: "2", unit: "Weeks", label: "Publication Time" },
  totalTime: { value: "20", unit: "Weeks", label: "Total Time" },
};

export const FOUNDERS = [
  { name: "Luigi Einaudi", role: "Honorary Member" },
  { name: "Luigi Amoroso", role: "" },
  { name: "Costantino Bresciani-Turroni", role: "" },
  { name: "Epicarmo Corbino", role: "" },
  { name: "Orlando D'Alauro", role: "" },
  { name: "Gustavo Del Vecchio", role: "" },
  { name: "Mauro Fasiani", role: "" },
  { name: "Pasquale Jannaccone", role: "" },
  { name: "Francesco Manzitti", role: "" },
  { name: "Volrico Travaglini", role: "" },
];

export const INDEXING = [
  "RePEc", "Crossref", "Econpapers", "Econlit", "Google Scholar",
];

export interface Article {
  id: number;
  title: string;
  authors: { name: string; affiliation?: string }[];
  abstract: string;
  doi?: string;
  volume: number;
  issue: number;
  year: number;
  month: string;
  pages: string;
  jel?: string[];
  keywords?: string[];
  pdfUrl?: string;
  bibliography?: string[];
}

export interface Issue {
  id: number;
  volume: number;
  issue: number;
  year: number;
  month: string;
  publicationDate: string;
  articles: Article[];
}

// Aims & Scope text
export const AIMS_AND_SCOPE = `Economia Internazionale / International Economics is a peer-reviewed, open access journal committed to advancing scholarly research on the economics of open economies. The Journal provides an international forum for the publication of high-quality theoretical, empirical, and policy-oriented contributions in the fields of international trade, open-economy macroeconomics, and international finance.

The Journal welcomes manuscripts that contribute to the analysis of major economic issues arising in an increasingly interconnected global economy. Areas of interest include, but are not limited to, international trade in goods and services, global value chains, trade policy and trade agreements, firms' internationalization, productivity, innovation and competitiveness, exchange rates, monetary and fiscal policy in open economies, international capital flows, financial integration, sovereign risk, financial stability, cross-border banking, and the implications of globalization for economic development, inequality, and sustainability.

The Journal particularly encourages submissions that combine analytical rigor with clear relevance for contemporary economic debate and policymaking. Empirical studies based on high-quality micro-level, administrative, experimental, or cross-country data are especially welcome, as are methodological contributions offering meaningful applications to international economics.

The Journal addresses a broad scholarly and professional readership, including academics, researchers, and graduate students in economics and related disciplines, as well as policy makers and practitioners working in central banks, international organizations, regulatory authorities, and public institutions.

Economia Internazionale / International Economics considers for publication original research articles, review and survey articles, and policy-oriented papers grounded in solid analytical or empirical research. The Journal may also publish invited special issues devoted to themes of particular relevance to the international economics community. All submissions are subject to a rigorous double-blind peer-review process.`;

export const CALL_FOR_PAPERS = `Economia Internazionale/International Economics, edited by the Chamber of Commerce of Genova, is a quarterly review which publishes scientific papers on all economics research topics. In particular, it aims at encouraging and disseminating high quality researches about Italian and world economy.

To this purpose, the journal welcomes applied, institutional and theoretical papers dealing with issues which can be of relevance for the economic debate.

To submit an article, authors are requested to register and follow the Submission guidelines.

The Review is double blind peer-reviewed and indexed in RePEc, Crossref, Econpapers, Econlit, Google Scholar.`;

export const EDITORS_NOTE = `It is an honour to serve as Editor of Economia Internazionale / International Economics, a journal founded in 1948 by the Institute of International Economics and the Genoa Chamber of Commerce, with the support of leading Italian economists such as Luigi Einaudi, Costantino Bresciani\u2011Turroni, Volrico Travaglini and Orlando D\u2019Alauro. Born in the aftermath of World War II, the journal played an important role in promoting trade openness and Italy\u2019s integration with Western Europe and the United States, choices that proved crucial for the country\u2019s economic and political development.

Today, in a context where protectionist pressures have re\u2011emerged after the Covid\u201119 pandemic and rising geopolitical tensions, the journal aims to contribute to the renewed debate on free trade versus protectionism by providing rigorous analyses of the international economy and of Italy\u2019s external economic relations and by putting forward well\u2011founded policy proposals. I trust we can continue to count on the support of our devoted readers in this endeavour.`;

export const INSTITUTE_HISTORY_EN = `The review Economia Internazionale/International Economics is an international economic journal established in 1948 by the Institute for International Economics of the Chamber of Commerce of Genoa.

The Institute for International Economics, a body formed to carry out scientific research in the areas of international economic theory and policy, was founded in 1946 by Professor Orlando D\u2019Alauro, Professor Volrico Travaglini, Francesco Manzitti, President of the Genoa Chamber of Commerce, and Bruno Minoletti, the Chamber\u2019s General Secretary.

The Institute\u2019s mission as set out by its founders was to construct a strong centre of scientific research able to support, as in fact it did, economic policy that envisaged the liberalisation of international trade in a country \u2013 Italy \u2013 that had for decades been subject to policies of autarchy and belligerence.

The Institute was born in 1945 on the initiative of the Chamber of Commerce, then led by President Francesco Manzitti, and of the University of Genoa. The Institute officially opened on 4th November 1946 in front of the President of Italian Republic, Enrico de Nicola, and the highest political and economics authorities of the country.

The Institute has always been involved in the organization of important events, starting from the International Congress of Parliamentarians and Experts for the Development of International Trade in 1948. This Congress was attended by almost a thousand delegates and experts from 50 countries.

In the following years, the Institute went on promoting and organizing international meetings and conferences of prominent scholars or important personalities of the economic world, as Wilhelm R\u00f6pke (1963), Ota Sik (1971), John Kenneth Galbraith (1972), until Mario Monti (2005).

In 2008 the first edition of the \u201cInternational Economics Prize\u201d and \u201cFrancesco Manzitti Prize\u201d took place on occasion of the 60th anniversary of the review. The International Economics prize is awarded to an economist for his research work and the Francesco Manzitti prize to an entrepreneur for his repute in international business activity.`;

export const CHAMBER_OF_COMMERCE = `Founded in 1805 by Napoleon, it is one of the oldest Chambers of Commerce in Italy, with a tradition of strong commitment to the development of the port and its traffic, industry, infrastructure but also culture and technical and commercial training.`;

export const NAV_ITEMS = [
  { label: "Home", path: "/" },
  { label: "Review", path: "/review" },
  { label: "Institute", path: "/institute" },
  { label: "News & Events", path: "/blog" },
  { label: "Contacts", path: "/contacts" },
  { label: "OA & Copyright", path: "/oa-copyright" },
  { label: "Publication Ethics", path: "/publication-ethics" },
];

export const REVIEW_SUB_NAV = [
  { label: "Latest Issue", path: "/review#latest-issue" },
  { label: "Archive", path: "/review#archive" },
  { label: "Submit a Paper", path: "/submission-guidelines" },
  { label: "Register", path: "/register" },
];
