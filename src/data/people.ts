import abrarHasnineImage from "@/assets/peoples/Abrar-Hasnain--scaled.jpg";
import anitaGhaziRahmanImage from "@/assets/peoples/Anita-Ghazi-Rahman--scaled.jpg";
import eshrakEMoazzamImage from "@/assets/peoples/Eshrak-E-Moazzam.jpg";
import gaziMdRokibBinHossainImage from "@/assets/peoples/Gazi-Md.-Rokib-Bin-Hossain-scaled.jpg";
import jarifAhmedImage from "@/assets/peoples/Jarif-Ahmed-scaled.jpg";
import masudKhanImage from "@/assets/peoples/masudkhan.jpg";
import nafiulAlamShuptoImage from "@/assets/peoples/Shupto-Profile-Page.jpg";
import nauriinAhmedImage from "@/assets/peoples/nauriinahmed-scaled.jpg";
import pushpoRahmanImage from "@/assets/peoples/Pushpo-Rahman--scaled.jpg";
import sameeraMahmudImage from "@/assets/peoples/Sameera-Mahmud-Large-Image.png";
import taahsinaRaisaRabbiImage from "@/assets/peoples/taahsinaraisa-scaled.jpg";
import umerAimanKhanImage from "@/assets/peoples/umeraimankhan-scaled.jpg";
import mahmudulHasanRabiulImage from "@/assets/peoples/Rabiul-1.jpg";
import mdMoyenUddinShakilImage from "@/assets/peoples/Shakil-1.jpg";
import kutubulAlomSohelImage from "@/assets/peoples/Sohel-1.jpg";

export const peopleTabs = [
  "Partners",
  "Of Counsel",
  "Senior Associates",
  "Associates",
  "Paralegal",
] as const;

export type PeopleTab = (typeof peopleTabs)[number];

export type ProfileSection = {
  title: string;
  items: string[];
};

export type Person = {
  name: string;
  slug: string;
  role: string;
  initials: string;
  image: string;
  qualifications?: string[];
  positions?: string[];
  phone?: string;
  email?: string;
  bio?: string[];
  sections?: ProfileSection[];
};

export const peopleTabHashes: Record<PeopleTab, string> = {
  Partners: "partners",
  "Of Counsel": "of-counsel",
  "Senior Associates": "senior-associates",
  Associates: "associates",
  Paralegal: "paralegal",
};

const anitaGhaziRahman: Person = {
  name: "Anita Ghazi Rahman",
  slug: "anita-ghazi-rahman",
  role: "Founder, Managing Partner & Senior Advocate of the Supreme Court of Bangladesh",
  initials: "AR",
  image: anitaGhaziRahmanImage,
  qualifications: [
    "LL.B. (Hons), University College London (UCL)",
    "Barrister-at-Law, of Lincoln's Inn",
    "Senior Advocate, Supreme Court of Bangladesh",
  ],
  positions: [
    "Independent Director, Chittagong Stock Exchange",
    "Member, National Advisory Board for Impact Investment in Bangladesh",
    "Independent Director, LightCastle Partners",
  ],
  phone: "+8801713036917",
  email: "anita@legalcirclebd.com",
  bio: [
    "Anita Ghazi Rahman defines law as her calling. She obtained her LL.B. (Hons) degree from University College London (UCL) in 2002 and was called to the Bar of England and Wales from Lincoln's Inn in July 2003, completing her Bar Vocational Course with Merit from The College of Law. Anita qualified as an Advocate in Bangladesh in 2004, as Advocate of the High Court Division of Bangladesh Supreme Court in 2006 and as Advocate of the apex Court, the Appellate Division of the Bangladesh Supreme Court in 2018. In February 2025 she has been enrolled as a Senior Advocate of Supreme Court of Bangladesh.",
    "Anita focuses her practice on company, general corporate law and dispute resolution. She provides corporate and transactional advice with respect to business formation, employment, financing, IP, services and procurement contracts, joint ventures, mergers & acquisitions and other business restructurings and also advises on the acquisition, development, and disposition of commercial, industrial and residential real estate. Anita heads the firm's Litigation practice.",
    "Anita has been listed amongst the Inspiring individuals to follow in 2015 in Bangladesh in Dhaka Tribune, Future Startup's 15 Under 35 For 2015: Entrepreneurs, Trailblazers, Mold-Breakers Of Bangladesh and has been featured in the books From Stones to Castles: In conversation with 16 inspiring personalities of Bangladesh and Aine Tarunno. She is a Asia 21 Young Leader for the Class of 2016 and one of the initial signatories to the Belt & Road Legal Service International Cooperation Platform.",
    "Anita is the Founder of The Legal Circle and Founder of Think Legal Bangladesh, the first of its kind, free open and crowd-sourced web-based legal resources platform, as well as the Founder and Publisher of Legal Circle Law Reports (LCLR).",
    "Anita Ghazi Rahman serves on the Boards of a number of non-profits and professional associations, and mentors for national and international incubator and accelerator programmes. Anita is an active mentor in the startup ecosystem since its nascent stages and frequently mentors for BetterStories, Founders' Institute, GP Accelerator, LightCastle Center for Advanced Learning, Seedstars, Startup Dhaka, YGAP and BYLC Ventures, among others. She is a sponsor-member of Bangladesh Angels Network (BAN).",
    "Anita is an Independent Director of Chittagong Stock Exchange, previously having served as Independent Director of Golden Harvest Agro Industries Limited, and is a Member of the National Advisory Board for Impact Investment in Bangladesh. She is a member of the Investment Committee in Startup Bangladesh Ltd, the flagship venture capital fund of the ICT Ministry of Bangladesh.",
    "She serves on the Board of iSocial, a social impact company empowering communities through women entrepreneurship and on the board of Jaago Foundation.",
    "The Legal Circle is committed to giving back and Anita Ghazi has an established reputation for her pro bono work, spending a substantial amount of time on helping initiatives she finds are capable of making a difference for a better Bangladesh. She regularly advises home grown not-for-profits and also foreign NGOs, non-profits and donor agencies, the latter through iProbono and Thomson Reuters Foundation.",
  ],
  sections: [
    {
      title: "Business Formation, Company & Securities",
      items: [
        "Anita's areas of practice include all aspects of company law including advisory, structuring, formation & registration, litigation, mergers & acquisitions and shareholder disputes.",
        "Regularly advises on entity registration options and formation/registration of foreign, joint venture and local businesses and representative offices at the RJSC, Board of Investment and EPZs.",
        "Has assisted in the registration of businesses in automobile, consultancy, clothing, distribution, ITES, investment, food and beverage, logistics, retail, RMG, telecommunication, trading, transport, travel and real estate sectors in Bangladesh.",
        "Preferred go-to lawyer for Rocket Internet ventures in Bangladesh for company incorporation and intricate company restructuring advice.",
        "Represented an international public company in a three-year start-to-finish development of a Greenfield Project in Bangladesh.",
        "Structuring and incorporation of Bangladesh-Japan JV with Japanese logistics giant.",
        "Enlistment of private companies with the Bangladesh Securities and Exchange Commission (BSEC).",
        "Filing and representation in company matters at the High Court including minority protection, rectification of share register and amalgamation matters.",
        "Striking off of a subsidiary of an Indian listed IT education and training company.",
        "Winding up, including initiation of creditors' winding up process.",
      ],
    },
    {
      title: "Distributorship & Agency",
      items: [
        "Drafting of exclusive and non-exclusive distributorship and agency agreements and review of such agreements.",
        "Successfully advised on termination of distributorships of medical equipment and packaged food distribution contracts, representing foreign principals in both transactions.",
        "Setting in place supply-chain contracts for food distribution within Bangladesh.",
        "Advising on claim of compensation for loss incurred by principal.",
      ],
    },
    {
      title: "Employment",
      items: [
        "Advised the world's leading content marketing platform, a US based company, in implementing the company's incentive stock option scheme in Bangladesh.",
        "Negotiated a win-win Employee Severance Settlement for employees in a multinational brownfield services company.",
        "Advised a leading international retailer on negotiation and settlement of a complex disciplinary action, drafting of settlement agreement and NDAs.",
        "Advise both employers and employees in wrongful termination claims and disciplinary matters.",
        "Advisory, drafting/review and registering Gratuity and Provident Funds in light of local labour and tax laws.",
        "Review of HR, confidentiality and non-disclosure policies.",
        "Appearance before the BEPZA on employment complaint.",
      ],
    },
    {
      title: "Energy, Power, Oil & Gas",
      items: [
        "Presently assisting and advising on negotiations and documentation in relation to implementation of a 750MW dual fuel Combined Cycle Power plant in Meghnaghat, Narayanganj.",
        "Counsel to Orion Group, a leading industrial conglomerate in Bangladesh building one of the first super-critical coal fired power plants in the country.",
        "Engineering, Procurement and Supervision Contract in the construction of a 30,000 MTPA Capacity LPG Terminal/Filling Plant at Mongla Port Industrial Area.",
        "Advised in the development of a 50 MW Waste to Electricity Generation Plant and ancillary waste treatment plants on BOO/BOOT basis under Ministry of LGRD & Co-operatives.",
        "Was seconded to Shell and Cairn Energy during the Transfer of Operatorship from Shell to Cairn Energy from 2003-2004.",
      ],
    },
    {
      title: "Financing",
      items: [
        "Advised on term loan financing to the tune of US$88 million from foreign sources for Orion Group.",
        "Advised Borrower, Golden Harvest Ice Cream Ltd. in Loan Syndication for establishing a premium ice cream plant in Bangladesh. Deal Value BDT 700 million.",
        "Financing of four biogas plants to generate a total of 400 kilowatts of electricity using slurry produced as a byproduct from biogas digesters.",
      ],
    },
    {
      title: "Franchise",
      items: [
        "Advised in the licensing of multiple F&B franchises including Fish & Co., Krispy Kreme & The Cream & Fudge Factory.",
        "Assisted numerous franchise businesses with expanding their operations on regional, national and international level.",
        "Assist entrepreneurs in all phases of starting, growing and operating small businesses and related investment opportunities.",
        "Advisory on sub-franchising.",
        "Represented sellers of food & beverage target in sale of shares and transfer of franchise.",
      ],
    },
    {
      title: "Litigation",
      items: [
        "Represented Energypac Bangladesh in income tax litigation at the High Court of Bangladesh and successfully obtained interim relief against realization of assessed tax.",
        "Filed Judicial Review/Writ Petitions in the High Court against Local Authority over advertising standard and licensing.",
        "Co-counsel in Public Interest Litigation on emergency medical treatment to victims of traffic accidents and good Samaritan awareness.",
        "Successfully represented tenderer in challenging the non-issuance of Notification of Award in relation to a weigh scale and electronic ticketing tender for Bangabandhu Bridge.",
        "Successfully represented tenderer in challenging the decision of a Review Panel for procurement of single phase electronic meters from the Rural Electrification Board.",
        "Successfully disposed of judicial review/writ petition relating to customs claim and penalty matter in the High Court Division and Appellate Division.",
        "Assisting in representing the securities regulator in litigation at the High Court.",
        "Successfully represented respondent in landmark telecommunication dispute at the Supreme Court representing foreign investors in a WIMAX/ISP licensing dispute.",
        "Successfully rectified share register of a public listed company establishing claim of foreign beneficial owners of shares.",
      ],
    },
    {
      title: "Mergers & Acquisitions (M&A)",
      items: [
        "Advised Ceylon Biscuit, a Sri Lankan fortune 100 company, in establishing a greenfield project in Bangladesh. Deal value approximately US$15 million.",
        "Represented the CIEL Group in its acquisition of two garments manufacturers.",
        "Advised in Bangladesh restructuring and implementation of German start-up dynamo Rocket Internet's investment for Daraz.",
        "Represented SQ Group in negotiations with a foreign private equity investor for sale of an equity interest.",
        "Advised leading US based industrial and consumer sewing thread manufacturing company on expansion and lease of industrial premises and utilities.",
        "Advised Japanese conglomerate on establishment of ceramics greenfield project in Bangladesh.",
        "Represented a purchaser in the acquisition of an entity that owns a telecommunications IGW License/business. Deal value over US$7 million.",
        "Advised BD Venture Limited in its investment in Edtech startup Eshosikhi.com.",
      ],
    },
    {
      title: "Real Estate",
      items: [
        "Due diligence and acquisition of 30+ acres of land for industrial park.",
        "Vetting land documents and giving legal opinion on 93 decimals of land to build a readymade garment factory at Tongi, Dhaka.",
        "Vetting land documents and giving legal opinion on 8 acres of land to build a knit composite at Savar, Dhaka.",
      ],
    },
    {
      title: "Services and Procurement Contracts",
      items: [
        "Representation in detailed and lengthy negotiations for Call Centre Outsourcing Agreements with leading telecommunications providers.",
      ],
    },
    {
      title: "Speaking Engagements",
      items: [
        "Mentor & Director, Founder Institute, Bangladesh Chapter.",
        "Mentor, Grameen Phone Accelerator, 3rd batch, Startup Legal, 23 March 2017.",
        "Speaker, School of Entrepreneurship Lecture Series, Intellectual Property, 4 February 2017.",
        "Panelist, The State of Social Enterprise in Bangladesh, 9 October 2016.",
        "Mentor, Grameen Phone Accelerator, 2nd batch, Startup Legal and Intellectual Property, 27 September 2016.",
        "Speaker at Legal Framework for Entrepreneurs, 6 February 2016.",
        "Panelist, Tech Women Conference at Digital World 2015.",
        "Speaker at the GIST Bangladesh Startup Boot Camp, May 22-24, 2014.",
        "Panelist, E-Learning in Bangladesh, 13 December 2014.",
        "Mentor, Legal Workshop for Startups, GrameenPhone Innovation Xtreme, 22 November 2014.",
        "Co-Speaker, Corporate Law and Public-Private Cooperation in Political Development, Joint IPSA Conference in Bangladesh, 2014.",
        "Featured Speaker at TEDxDhaka, Access to Laws Online, 2012.",
        "Speaking Engagement for Prepaid Cards Asia Conference 2010, Singapore.",
      ],
    },
    {
      title: "Publications",
      items: [
        "Publisher & Co-Editor of LCLR (Legal Circle Law Reports), a quarterly law report.",
        "Editor of Think Legal Bangladesh - thinklegalbangladesh.com.",
        "Framing a social enterprise law, published in The Daily Star on 13 June 2017.",
        "Lead Author of Bangladesh Section of The Employment Law Review, 8th Edition.",
        "Co-Author of Bangladesh Section of The International Comparative Guide to: Project Finance 2016 & 2017.",
        "Co-Author of Bangladesh Section of Laws on Telecom and Media 2013.",
        "Cross Border Merger and Acquisitions - the new frontier, written with Mr. Masud Khan, published in The Financial Express on 26 May 2010.",
        "An easy conversion, published in The Daily Star on 25 May 2010.",
        "Employee Stock Option (ESO) - a beneficial plan for both the company and the employees, published on December 22, 2021 in the Financial Express.",
        "Investing workers' funds differently: securities seen best choice, published on November 24, 2021 in the Financial Express.",
        "Understanding Preference Shares in Practice, published on December 5, 2020 in the Financial Express.",
        "Data, digitalisation and public welfare post-covid-19, published on December 1, 2020 in the Whiteboard Magazine.",
        "Easing repatriation of proceeds from share sale, published on July 15, 2020 in the Financial Express.",
        "Returning to work during Covid-19, published on June 1, 2020 in the Financial Express.",
        "Covid-19 Government Support Measures, published on May 30, 2020 in the Lex Mundi Website.",
        "Workforce reduction during Covid-19: Information for employers, published on March 30, 2020 in the Financial Express.",
        "Data, Privacy and e-commerce, published on December 11, 2018 in the Financial Express.",
        "MR A J O AND MRS T L V. The Slovak Republic, UNCITRAL Award, published on September 5, 2012 by School of International Arbitration, Queen Mary, University of London.",
        "THE TEMPLE OF PREAH VIHEAR - CAMBODIA v. THAILAND - (Decision on the Request of Provisional Measures), published in 2012 by School of International Arbitration, Queen Mary, University of London.",
        "A review of laws and policies to prevent and remedy violence against children in police and pre-trial detention in Bangladesh, published in 2013 in www.penalreform.org.",
      ],
    },
  ],
};

const gaziMdRokibBinHossain: Person = {
  name: "Gazi Md. Rokib Bin Hossain",
  slug: "gazi-md-rokib-bin-hossain",
  role: "Partner",
  initials: "GH",
  image: gaziMdRokibBinHossainImage,
  qualifications: [
    "LL.B. (Hons), University of Wolverhampton",
    "LL.B (Hons), University of Glasgow",
    "LL.M, University of Strathclyde",
  ],
  phone: "+8801977778800",
  email: "rokib@legalcirclebd.com",
  bio: [
    "Gazi specializes in company law, labour law, banking law, IT & telecommunications law and intellectual property law. In order to increase his knowledge in his preferred fields, Gazi has attended various seminars on IP law and the telecoms industries convened and instructed by renowned lawyers in the UK/IDLO and participated in various projects with British Telecom and Vodafone.",
    "Since returning to Bangladesh, Gazi has been involved in company and intellectual property law matters and has advised on mergers & acquisitions, E-Commerce, foreign direct investment, joint ventures, trademark and DRM, and copyright issues and also worked with banks and mobile network companies to prepare the mobile money/digital money policy and drafting of various agreements between government bodies and private institutions.",
  ],
};

const sameeraMahmud: Person = {
  name: "Sameera Mahmud",
  slug: "sameera-mahmud",
  role: "Co-Managing Partner",
  initials: "SM",
  image: sameeraMahmudImage,
  qualifications: [
    "LL.B., LL.M (City University London, UK)",
    "Barrister-at-Law",
    "Advocate, Supreme Court of Bangladesh",
  ],
  phone: "+8801777345636",
  email: "sameera@legalcirclebd.com",
  bio: [
    "Sameera Mahmud has a LL.B (Hons) degree from Northumbria University in Newcastle, UK and has a Master of Laws (LL.M) degree in Commercial law specializing in Banking and Finance from the City University of London, UK. She has been called to the Bar of England and Wales in the year 2011 by the Hon'ble Society of Lincoln's Inn, completing her Bar Professional Training Course with Very Competent. Sameera also qualified as an Advocate in Bangladesh in 2014 and enrolled as an Advocate of the Supreme Court of Bangladesh in 2017.",
    "Sameera's main practice area is Mergers and Acquisition, Telecommunications, Banking and Finance, Power and Energy, Employment & Labour, Civil and Corporate matters. Sameera has 13+ years of experience in the field of law and her legal career began as an associate for two leading law firms of Bangladesh between the years 2011-2016. During her tenure at the chambers she gained extensive experience in drafting and negotiating numerous contracts, ensuring legal compliance and business efficiency. She played a key role in the strategic growth of clients and fostered trust and long-term client relations.",
    "Sameera joined The Legal Circle in 2016 and is currently a Co-Managing Partner in the Firm where she oversees the Firm's practice in the areas of her expertise. In terms of M&A, she has extensive experience in conducting due diligence on a target company, negotiating the deal structure, price and terms and locking the definitive purchase agreement. She has directed due diligence processes of over 10 corporate transactions and has managed, prepared and reviewed transaction documents, reducing the potential legal exposure of clients. She has spearheaded legal aspects of cross-border transactions and assisted in implementation of innovative strategies for corporate restructuring.",
    "In the area of Banking and Finance, she has extensively dealt with complex loan advisory transactions including loan syndication. She has experience dealing with security enforcement matters, including enforcement in Artha Rin Adalat (Money loan Court). She has facilitated issues between clients by assisting in out-of-court settlements and compromises. Her experience and legal practice also includes advice in relation to regulatory matters for banking and financial services, including syndication, lease finance, corporate finance and mobile banking.",
    "As a Power and Energy practitioner, Sameera has comprehensive knowledge in the energy laws and policies of Bangladesh including environmental compliance, renewable energy policies, and energy market regulations. She has the ability to provide interpretation and practical advice to clients on governmental regulations. She has assisted in review of complex agreements between the project company and the GOB including Power Purchase Agreements, Implementation Agreements, Land Use Agreements and Facility Agreements. She has also represented clients during Pre-COD, construction phase and the post-COD operation phase including review and negotiations of EPC/O&M contracts for development of power projects.",
    "In terms of Telecommunication laws, she has advised on regulatory matters, including award and licences. She is aptly versed with the telecommunication guidelines issued by the Bangladesh Telecommunication Regulatory Commission from time to time and has assisted clients in making submissions as stakeholders in materializations of the guidelines.",
    "She has previously at an initial stage of her career worked as a Legal Counsel for bKash Limited, the first and only unicorn of Bangladesh, and was responsible for ensuring compliance with regulatory affairs, advising on employment matters, company matters, litigations, mobile banking and finance.",
  ],
  sections: [
    {
      title: "Recent Posts",
      items: [
        "Directors in share market - February 15, 2026",
        "Banking on change: key reforms transforming Bangladesh's financial sector - November 10, 2025",
        "FAQ on Board Meetings - May 11, 2025",
        "Independent directors: The role and its evolution - December 10, 2024",
        "Ensuring judicial oversight in lawful interception - November 10, 2024",
        "Will this remain a nation for men? - September 26, 2024",
        "Bringing more women in boardrooms can be game-changer in BD corporate arena - December 10, 2023",
      ],
    },
  ],
};

const pushpoRahman: Person = {
  name: "Pushpo Rahman",
  slug: "pushpo-rahman",
  role: "Partner",
  initials: "PR",
  image: pushpoRahmanImage,
  qualifications: [
    "Advocate, Supreme Court of Bangladesh",
    "LL.B (University of London)",
    "BPTC (City University, London)",
    "Barrister-at-Law (Lincoln's Inn)",
  ],
  phone: "+8801775990022",
  email: "pushpo@legalcirclebd.com",
  bio: [
    "Pushpo Rahman, having completed her LL.B (Hons), pursued the Bar Professional Training Course (BPTC) from the City Law School, London and was called to the Bar by the Honourable Society of Lincoln's Inn.",
    "Prior to The Legal Circle (TLC), she gained significant legal experience having served as an Associate at a reputed law firm in Dhaka. At TLC, Ms. Rahman has vast legal experience in providing legal opinions, drafting and vetting corporate business documents. She has advised large corporations and multi-national companies in relation to their operations and legal compliance in Bangladesh on numerous occasions.",
    "She has also played a key role in providing consultation to foreign and local companies intending to invest in Bangladesh by means of conducting legal due diligence of target companies on matters relating to company validation, assets & employment alongside government and central banking regulations. Ms. Rahman has attained knowledge and experience regarding application filing at government offices and understanding procedures about various corporate, regulatory, banking & employment laws.",
    "She has represented The Legal Circle while delivering talks on employment laws, its implications & practice with clients. Her meaningful contributions in existing projects and ability to come up with alternative solutions have made her a pivotal member of The Legal Circle team.",
  ],
};

const nauriinAhmed: Person = {
  name: "Nauriin Ahmed",
  slug: "nauriin-ahmed",
  role: "Partner",
  initials: "NA",
  image: nauriinAhmedImage,
  qualifications: [
    "Advocate, Supreme Court of Bangladesh",
    "LL.B (Hons.), BRAC University",
    "Master of Corporate Law, Christ's College, University of Cambridge",
  ],
  phone: "+8801762539297",
  email: "nauriin@legalcirclebd.com",
  bio: [
    "Nauriin is a partner of the Firm and has been with the Firm since 2015. She is admitted to practice law in Bangladesh and is an active member of the Dhaka Bar Association.",
    "She obtained her LL.B. (Hons) degree from BRAC University, Dhaka in 2015 and her Master of Corporate Law (MCL) degree from University of Cambridge in 2017. While at Cambridge, she was awarded the Herbert Smith Freehills African-Asian Bursary by the Faculty of Law, University of Cambridge and the Christ's College Scriven Graduate Bursary for her academic excellence.",
    "Nauriin's extensive legal experience spans a variety of key practice areas, including competition and anti-trust, data privacy and protection, defence supply, employment, M&A, NGOs and non-profit, and Technology, Media & Telecommunication (TMT).",
    "In competition and anti-trust matters, she has advised clients on issues related to mergers and acquisitions, use of exclusivity clauses in contracts, resale price maintenance, and market dominance. Her expertise in data privacy and protection laws has enabled her to assist clients with developing compliant programs and ensuring their data protection policies are in line with applicable laws and regulations.",
    "She has also counselled clients on defence procurement processes, contract negotiations, and compliance with regulations related to defence and security. In the area of employment law, she has assisted clients with issues such as termination and employment benefits. Her experience in the NGO and non-profit sector includes advising on entity formation, obtaining NGO Affairs Bureau registration, corporate governance and regulatory compliance.",
    "In the technology, media, and telecommunications (TMT) sector her proficiency makes her particularly well-suited to advise clients on legal issues related to emerging technologies and telecommunications law.",
    "As a partner at The Legal Circle, her deep legal knowledge, professionalism, attention to detail and ability to identify and mitigate potential risks have helped her clients avoid costly disputes and regulatory penalties. She is committed to delivering exceptional service and results, and is dedicated to understanding her client's unique needs and goals. She is known for her strong work ethic, attention to detail, and innovative problem-solving skills.",
  ],
  sections: [
    {
      title: "Practice Areas",
      items: [
        "Competition and Anti-Trust",
        "Data Privacy and Protection",
        "Defence Supply",
        "Employment",
        "M&A",
        "NGOs and Non-Profit",
        "Technology, Media & Telecommunication (TMT)",
      ],
    },
  ],
};

const jarifAhmedRumman: Person = {
  name: "Jarif Ahmed Rumman",
  slug: "jarif-ahmed-rumman",
  role: "Of Counsel",
  initials: "JR",
  image: jarifAhmedImage,
  qualifications: [
    "Advocate, Supreme Court of Bangladesh",
    "LLB (UoL), PGDL (City University, London)",
    "LLM (City University, London)",
    "Barrister-at-Law (Lincoln's Inn)",
  ],
  phone: "+8801914083954",
  email: "jarif@legalcirclebd.com",
  bio: [
    "Jarif Ahmed is a senior associate of The Legal Circle and has been with the Firm since 2014. He qualified as an Advocate in Bangladesh in 2018 and as an Advocate of the High Court Division of Bangladesh Supreme Court in 2022, and is an active member of the Supreme Court Bar Association.",
    "Jarif obtained his LL.B (Hons) degree from University of London (UOL) in 2012 and was called to the Bar of England and Wales from Honorable Society of Lincoln's Inn in 2014, completing his Bar Professional Training Course (BPTC) and LL.M from City University London.",
    "Jarif is known for his exceptional client management skill, work ethics, deep legal knowledge, professionalism and dynamic problem-solving skills. He focuses his practice on various aspects of law including intellectual property, employment law, real estate, company law, contract negotiation, merger & acquisition, data privacy and protection, and NGOs and non-profit matters.",
    "Jarif is also a sub-editor of Legal Circle Law Reports (LCLR), which is a quarterly law report in Bangladesh, and in Think Legal Bangladesh - www.thinklegalbangladesh.com, one of the first comprehensive free legal resource websites in Bangladesh.",
    "Jarif's detailed profile can also be found in his LinkedIn profile.",
  ],
  sections: [
    {
      title: "Practice Areas",
      items: [
        "Intellectual Property (trademark, copyright and patent)",
        "Employment Law",
        "Real Estate",
        "Company Law",
        "Contract Negotiation",
        "Merger & Acquisition",
        "Data Privacy and Protection",
        "NGOs and Non-Profit",
      ],
    },
    {
      title: "Business Incorporation/Registration",
      items: [
        "Advised from time to time on formation of foreign, joint venture and local businesses, branch offices and liaison offices at the Registrar of Joint Stock (RJSC) and Bangladesh Investment Development Authority (BIDA).",
        "Advised from time to time on striking off, winding up including initiation of creditors' winding up process.",
      ],
    },
    {
      title: "Employment",
      items: [
        "Advised both employers and employees in wrongful termination claims and disciplinary matters.",
        "Advisory, drafting/review and registering gratuity and provident Funds in light of Bangladesh labour and tax laws.",
        "Review of employee contracts, handbook, confidentially and non-disclosure agreements and policies.",
      ],
    },
    {
      title: "Arbitration",
      items: [
        "Acted as a Legal Secretary in a landmark arbitration case where the Sole Arbitrator was Mr. Justice Md. Tafazzul Islam, Former Chief Justice of Bangladesh.",
      ],
    },
    {
      title: "Transaction",
      items: [
        "Advised clients in participating tender of mobile number portability Service (MNPS) conducted by Bangladesh Telecommunication and Regulatory Commission (BTRC) and supply of electrical meter and other equipment called by BREB, BPDB, DESCO etc.",
      ],
    },
    {
      title: "Mergers & Acquisitions (M&A)",
      items: [
        "Advised BD Venture Limited, a venture capital firm, in its investment in Edtech startup Eshosikhi.com.",
      ],
    },
    {
      title: "Publications",
      items: [
        "Sub-Editor of LCLR (Legal Circle Law Reports), a quarterly law report.",
        "Co-Author of Bangladesh Chapter of LexisNexis Company Law Guide 2017-2018, published by Lexis-Nexis, a reputed international legal publication company.",
        "Co-Author of Bangladesh Section of The Employment Law Review, 8th Edition, published by Law Business Research Ltd., a reputed international legal publication company.",
        "Spokesperson of Is Your Startup Legal, published by Hifi Public. Detail of the publication can be found at https://hifipublic.com/2016/11/01/is-your-startup-legal/.",
      ],
    },
    {
      title: "Speaking & Training Engagements",
      items: [
        "Acted as a Coach at the first Dhaka Meetup organised by OPEN Accelerator and provided entrepreneurs with one-to-one support in technical/legal areas including structuring business entities around business needs and investor requirements.",
      ],
    },
  ],
};

const masudKhan: Person = {
  name: "Masud Khan",
  slug: "masud-khan",
  role: "Of Counsel",
  initials: "MK",
  image: masudKhanImage,
  qualifications: [
    "Attorney-at-Law",
    "BSc, University of Wisconsin-Oshkosh",
    "Juris Doctor, Marquette University Law School",
  ],
  phone: "+8801920804522",
  email: "masud@legalcirclebd.com",
  bio: [
    "Masud Khan is an international corporate attorney. Prior to coming to Bangladesh in 2007, Masud was a corporate law partner in a US Mid-Western law firm, Reinhart Boerner Van Deuren, with 200 plus lawyers. Masud spearheaded RBV's efforts to build an international practice by helping many of his Wisconsin based manufacturing clients explore and set up operations in China, India and South America.",
    "Masud focuses his practice on general corporate law, M&A including cross-border transactions, foreign investment into Bangladesh, financing equity and debt transactions, business and contract negotiations, US export and import laws including FCPA compliance, international trade, distribution and agency law.",
    "Masud spends time to understand a client's business and strategic goals, and is a trusted advisor who engages himself in every aspect of a transaction and representing his client's interests. Masud has worked on a significant number of private equity transactions in Bangladesh in the last few years, where his win-win approach to negotiating and closing transactions has been beneficial to his clients.",
    "Masud also advises on legal analysis and strategy on certain cases involving high value claims, foreign parties or specific sectors. Masud has been highlighted in Chambers and Partners since 2011 and, during his US practice days, was ranked by Martindale Hubbell as AV.",
    "Masud is also a very active member of the RMG ACTion Working Group which prepared a 10 Point RMG Sector Reform Plan and is working towards implementing key elements of that plan.",
    "Masud also participates in various public interest projects in Bangladesh and is an editor of both Legal Circle Law Reports and Think Legal, vice-president and member of Green Movement Foundation, counsel for BRAC for restructuring work in Tanzania, Uganda and other parts of Africa and Asia, and pro bono counsel for JAAGO Foundation, One Degree Initiative, Streetwise Foundation, Bangladesh on Seven Summits and Share2Care Trust.",
    "Masud is a columnist for the daily newspaper New Age, Dhaka Tribune and the online opinion site BDNews24. Masud's detailed profile can be found in his LinkedIn profile. He was also mentioned in Lawyer Monthly for his outstanding work in Mergers and Acquisitions.",
  ],
  sections: [
    {
      title: "Practice Focus",
      items: [
        "General corporate law",
        "M&A including cross-border transactions",
        "Foreign investment into Bangladesh",
        "Financing equity and debt transactions",
        "Business and contract negotiations",
        "US export and import laws, including FCPA compliance",
        "International trade",
        "Distribution and agency law",
      ],
    },
    {
      title: "Public Interest & Publications",
      items: [
        "Editor of Legal Circle Law Reports and Think Legal.",
        "Vice-president and member of Green Movement Foundation.",
        "Counsel for BRAC for restructuring work in Tanzania, Uganda and other parts of Africa and Asia.",
        "Pro bono counsel for JAAGO Foundation, One Degree Initiative, Streetwise Foundation, Bangladesh on Seven Summits and Share2Care Trust.",
        "Columnist for New Age, Dhaka Tribune and BDNews24.",
      ],
    },
    {
      title: "References",
      items: [
        "RMG Sector 10 Point Reform Plan: https://www.scribd.com/doc/144976994/BangladeshRMG-Sector-10-Point-Reform-Plan.",
        "Lawyer Monthly feature: https://www.lawyer-monthly.com/magazine/LMLA15/#page=67.",
        "Wisconsin Lawyer article on The Wisconsin Business Advisor Series: https://www.wisbar.org/newspublications/wisconsinlawyer/pages/article.aspx?Volume=79&Issue=6&ArticleID=1070.",
        "Wisconsin Lawyer article on partner promotion at Reinhart Boerner Van Deuren: https://www.wisbar.org/newspublications/wisconsinlawyer/pages/article.aspx?Volume=79&Issue=3&ArticleID=1071.",
      ],
    },
  ],
};

const abrarHasnineRifat: Person = {
  name: "Abrar Hasnine Rifat",
  slug: "abrar-hasnine-rifat",
  role: "Senior Associate",
  initials: "AR",
  image: abrarHasnineImage,
  qualifications: [
    "LLB (Hons) (Stamford University, Bangladesh)",
    "LLM (Southeast University, Bangladesh)",
  ],
  phone: "+8801916381857",
  email: "rifat@legalcirclebd.com",
  bio: [
    "Abrar Hasnine is an accomplished Senior Associate at The Legal Circle, having joined the firm in 2014. He completed his LL.B degree from Stamford University of Bangladesh in 2014 and went on to earn his LL.M from Southeast University Bangladesh in 2016. Enrolled as an advocate in Dhaka Bar, Mr. Hasnine specializes in corporate, commercial, and property law.",
    "His expertise extends to various aspects of law, including company law, employment law, land law, banking law, and corporate transactions.",
    "Mr. Hasnine has honed his skills in providing invaluable litigation support and research assistance to the firm's senior partners. He has cultivated a comprehensive understanding of legal intricacies and maintains regular communication with state regulators and government departments, ensuring the firm remains abreast of practical and procedural developments in law and regulations.",
    "Mr. Hasnine plays a vital role in drafting and vetting legal documents, offering legal opinions, maintaining client relations, formulating policy matters, and contributing to risk management initiatives within the firm.",
  ],
  sections: [
    {
      title: "Practice Areas",
      items: [
        "Corporate Law: advising and facilitating the formation of foreign, joint venture, and local businesses, as well as liaison offices, including processes at RJSC and BIDA.",
        "Employment Law: guidance to both employers and employees in wrongful termination claims and disciplinary matters.",
        "Litigation Support: advice and attendance at litigation hearings at the Judges court of Dhaka, including criminal and civil litigations and legal services at judges' courts across Bangladesh.",
      ],
    },
    {
      title: "Career Highlights",
      items: [
        "Advised and facilitated the formation of foreign, joint venture, and local businesses at RJSC and BIDA.",
        "Provided guidance on post-registration steps, including share issuance, share transfer, and compliance in accordance with the Companies Act.",
        "Advised and managed the winding-up processes of companies.",
        "Provided counsel to both employers and employees in wrongful termination claims and disciplinary matters.",
      ],
    },
    {
      title: "Litigations",
      items: [
        "Attended litigation hearings at the Judges court of Dhaka.",
        "Offered advice on criminal and civil litigations.",
        "Processed various legal services at different judges' courts in Bangladesh.",
      ],
    },
  ],
};

const taahsinaRaisaRabbi: Person = {
  name: "Taahsina Raisa Rabbi",
  slug: "taahsina-raisa-rabbi",
  role: "Senior Associate",
  initials: "TR",
  image: taahsinaRaisaRabbiImage,
  qualifications: [
    "LL.B (Hons), University of London, UK",
    "LL.M, Eastern University, Dhaka, Bangladesh",
  ],
  phone: "+8801711102771",
  email: "taahsina@legalcirclebd.com",
  bio: [
    "Taahsina is a senior associate of the Firm and has been with the Firm since 2011. She obtained her LL.B (Hons) degree from the University of London in 2010 and LL.M degree from Eastern University, Bangladesh in 2014. Upon completion of the LL.B (Hons) degree Taahsina joined The Legal Circle (TLC).",
    "Taahsina's invaluable legal experience spans a variety of key practice areas including land law, real estate law, inheritance law, NGOs and non-profit, employment, and intellectual property law.",
    "At TLC, Taahsina has vast legal experience in reviewing various land documents, providing legal opinions, drafting and vetting land purchase documents and transfer agreements, trust deeds and formation of trust, NGO registration, labour or employment law and intellectual property rights issues.",
    "Ms. Taahsina has attained knowledge and experience regarding application filing at government offices and understanding procedures about various property, regulatory and employment laws. At TLC she attained invaluable experience in drafting supply and delivery contracts, lease deed, sale deed, heba deed, partition deed, preparing applications for NGO registration, preparing copyright and trademark applications for registration and reviewing land documents.",
    "At the Firm she conducted legal research on various legal issues including land matter, inheritance, labour, telecommunication, non-profit and intellectual property law issues.",
    "Prior to TLC, she gained significant legal experience having served at Renata Ltd., a pharmaceutical company, as a Senior Legal Officer. Her meaningful contributions in existing projects and ability to come up with alternative solutions have made her a pivotal member of The Legal Circle.",
  ],
  sections: [
    {
      title: "Practice Areas",
      items: [
        "Land Law",
        "Real Estate Law",
        "Inheritance Law",
        "NGOs and Non-Profit",
        "Employment",
        "Intellectual Property Law",
      ],
    },
  ],
};

const nafiulAlamShupto: Person = {
  name: "Nafiul Alam Shupto",
  slug: "nafiul-alam-shupto",
  role: "Senior Associate",
  initials: "NS",
  image: nafiulAlamShuptoImage,
  qualifications: [
    "Advocate, Subordinate Courts and Tribunals of Bangladesh",
    "LL.B (Hons), North South University",
  ],
  phone: "+8801681015105",
  email: "nafiul@legalcirclebd.com",
  bio: [
    "Nafiul has been a member of the Firm since 2020, currently serving as a Senior Associate. He earned his LL.B. (Hons) degree from North South University (NSU), Dhaka in December 2019.",
    "While at NSU, Nafiul served as the Joint Secretary at the North South University Law & Mooting Society (NSULMS). He gained extensive experience in moot court activities and earned the NSU moot court championship title. Additionally, Nafiul contributed as a Research Assistant in various national and internationally funded projects during his time there.",
    "After joining the Firm, Nafiul has acted as counsel for a range of local and international clients, providing legal assistance in contentious and non-contentious matters across banking, financial services and foreign investments, business incorporation, competition, dispute resolution, employment, energy, fintech, M&A, TMT and trust law.",
    "Nafiul acted as part of a team co-counsel or junior counsel in the representative matters listed below.",
  ],
  sections: [
    {
      title: "Practice Areas",
      items: [
        "Banking, Financial Services and Foreign Investments",
        "Business Incorporation/Registration",
        "Competition and Anti-Trust",
        "Dispute Resolution (Litigation and Negotiations)",
        "Employment",
        "Energy and Projects",
        "Fintech",
        "M&A",
        "Technology, Media & Telecommunication (TMT)",
        "Trust Law",
      ],
    },
    {
      title: "Banking, Financial Services and Foreign Investments",
      items: [
        "Advised clients on preparation and enforcement of finance documents, collateral documents, including hypothecation or mortgage of assets, share pledges and other security arrangements.",
        "Advised corporate foreign clients on dividend and capital repatriation regulations imposed by the Bangladesh Bank.",
        "Advised international corporate clients on anti-money laundering and anti-terrorist financing regulations.",
        "Advised multiple local and international clients on foreign exchange regulations, restrictions and requirements on Bangladeshi companies establishing branches/subsidiaries outside Bangladesh.",
      ],
    },
    {
      title: "Business Incorporation/Registration",
      items: [
        "Advised from time to time on formation of foreign, joint venture and local businesses, at the Registrar of Joint Stock (RJSC).",
        "Advised from time to time on striking off, winding up including initiation of creditors' winding up process.",
      ],
    },
    {
      title: "Competition and Anti-Trust",
      items: [
        "Advised and represented a MNPS License holder in a competition dispute matter before the Competition Commission Bangladesh.",
        "Advised multiple foreign and local clients regarding competition law of Bangladesh.",
      ],
    },
    {
      title: "Dispute Resolution",
      items: [
        "Assisted senior counsel in representing clients before the Appellate Division and the High Court Division of the Supreme Court of Bangladesh in various company matters.",
        "Assisted senior counsel in representing Apollo Tyres India before the Joint District Judge, Dhaka with regard to a title suit and obtained judgment in favour of the client.",
        "Assisted senior counsel in representing various banking companies in various money suits before the District Court, Dhaka.",
        "Represented Dignity Textile Mills Ltd in negotiations to reach a settlement in a commercial dispute with Dhaka Custom Agents Association.",
      ],
    },
    {
      title: "Employment",
      items: [
        "Advised both employers and employees in wrongful termination procedure, claims and disciplinary matters.",
        "Advisory, drafting/review and registering gratuity, provident funds, and workers profit participation fund in light of Bangladesh labour laws.",
        "Review of employee contracts, handbook, confidentiality and non-disclosure agreements and policies.",
        "Advised multiple international clients on foreign worker employment laws, foreign employee earnings' repatriation laws, work-permit, employment visa and special waiver applications at BIDA.",
        "Advised multiple international clients regarding sexual harassment at workplace laws of Bangladesh.",
        "Advised multiple international clients regarding Employee Stock Ownership Plan (ESOP) in light of Bangladesh law.",
      ],
    },
    {
      title: "Energy and Projects",
      items: [
        "Advised a global solar energy company in relation to outward remittances from Bangladesh, including selling electricity by foreign private investors in Bangladesh.",
        "Advised an international client through Mayer Brown LLP on public procurement laws of Bangladesh concerning a JICA funded government infrastructure development project.",
        "Advised Shardul Amarchand Mangaldas & Co on cross border trading of electricity in light of Bangladesh energy law regulations.",
        "Advised a UAE based Energy Company in the proposed acquisition of a waste to energy power plant in Bangladesh, including corporate and legal due diligence, employment, tax, environmental and regulatory matters.",
        "Advised Sweco Denmark A/S on public procurement laws of Bangladesh concerning a government infrastructure development project.",
      ],
    },
    {
      title: "Fintech",
      items: [
        "Advised local and international fintech companies on licensing regulations and laws relating to mobile financial services, PSP and PSO laws and related Bangladesh Bank regulations.",
        "Advised local and international fintech companies on laws and regulations relating to unsecured private digital-lending, digital wallet and mobile financial services in Bangladesh.",
        "Advised In Financial Technologies Holdings Pte. Ltd with regard to introducing virtual bank and providing digital lending services in Bangladesh.",
      ],
    },
    {
      title: "Mergers & Acquisitions",
      items: [
        "Advised a leading U.S private equity firm through Kirkland & Ellis LLP in acquiring two large global package manufacturing companies operating in Bangladesh.",
        "Advised Startup Bangladesh Limited in investment worth BDT 100 crore made to 100 prominent startup companies of Bangladesh, including due diligence, term sheet negotiation, investment agreements and shareholders agreements.",
        "Advised and represented Bettex HK Ltd in acquiring two garments factories in Bangladesh.",
        "Advised a local company in the acquisition of PSP Licensee Company.",
        "Advised a UAE based Energy Company in the proposed acquisition of a waste to energy power plant in Bangladesh.",
      ],
    },
    {
      title: "Technology, Media & Telecommunication (TMT)",
      items: [
        "Advised a large global telecommunication service provider company through DLA Piper UK with regard to satellite laws of Bangladesh.",
        "Advised Netflix regarding OTT laws of Bangladesh.",
        "Advised a TVAS licensee on BTRC regulations and conditions/terms of service.",
      ],
    },
    {
      title: "Other Matters",
      items: [
        "Advised Visa Worldwide Pte concerning the implementation of a trust structure in Bangladesh.",
        "Advised an American biotechnology company through Sidley Austin LLP regarding foreign donation laws of Bangladesh.",
        "Advised Pepsico India Holdings Limited regarding packaging and manufacturing of Lay's Potato chips in Bangladesh.",
        "Provided company secretarial support to Big Bad Wolf Bangladesh and Delivery Bangladesh Logistics Limited.",
      ],
    },
    {
      title: "Publications",
      items: [
        "One last prayer & white supremacy, Kathmandu Tribune.",
        "Legal termination of pregnancy resulting from failed contraception, New Age.",
        "A tale of white-collar workers' rights in Bangladesh, New Age.",
        "The Pornography Control Act, 2012, New Age.",
        "Laws safeguarding animal rights, New Age.",
        "Road Transport Act 2018: Financial aid or compensation?, New Age.",
        "A law of power and energy impunity?, New Age.",
        "Stairway to green Dhaka, New Age.",
        "Analysis of Harijan inclusivity, New Age.",
        "UN peacekeepers: protectors or predators?, New Age.",
        "Freedom of thought, conscience and of speech in Bangladesh, New Age.",
        "A legal review on tarnishing the country's image, New Age.",
        "LEGAL SOLUTIONS FOR SUSTAINABLE FUTURES IN SOUTH ASIA: HOW PRO BONO CONTRIBUTES TO SDG PROGRESS, published by Advocates for International Development (A4ID) and UKAID on 23 November 2023.",
        "Legal reform as a catalyst for social enterprise: an international social enterprise law & policy report, prepared and published by Morrison & Foerster LLP with support from Lex Mundi Pro Bono Foundation. Mr. Nafiul contributed in the Bangladesh part of this report.",
      ],
    },
    {
      title: "Presentations and Seminars",
      items: [
        "Conducted a session on Financial Compliances and Term Sheet at Regional Startup Network (RSN) Formative workshop hosted by KIIT-TBI in collaboration with U.S Consulate Kolkata in Dhaka, Bangladesh.",
        "Attended 12th Asia Pro Bono Conference: The Evolution of Empowering Pro Bono and Access to Justice in Cebu City, Philippines.",
      ],
    },
  ],
};

const umerAimanKhan: Person = {
  name: "Umer Aiman Khan",
  slug: "umer-aiman-khan",
  role: "Associate",
  initials: "UK",
  image: umerAimanKhanImage,
  qualifications: ["LL.B, University of London"],
  phone: "+8801758803966",
  email: "aiman@legalcirclebd.com",
  bio: [
    "Umer Aiman Khan, obtaining his LL.B (Hons) from the University of London International Programmes, joined The Legal Circle as an intern, after which he was subsequently elevated to the position of an Associate.",
    "While working at The Legal Circle, Mr. Khan has advised reputed tech firms and multinational companies about their operations in Bangladesh in various areas of law including finance, transport, aviation, company, corporate, tax and property laws.",
    "He routinely assists the seniors at the firm with legal research and other various activities of the firm. He also holds significant experience in laws governing the formation and operations of non-profit organizations in Bangladesh.",
    "Mr. Khan works as a sub-editor for Think Legal Bangladesh, the country's only open source legal resource platform, where he is responsible for the development and maintenance of the platform's promotion and database. He also works for Legal Circle Law Review, a law report published quarterly in Bangladesh.",
  ],
  sections: [
    {
      title: "Practice Areas",
      items: [
        "Finance",
        "Transport",
        "Aviation",
        "Company Law",
        "Corporate Law",
        "Tax",
        "Property Law",
        "Non-Profit Organization Formation and Operations",
      ],
    },
  ],
};

const eshrakEMoazzam: Person = {
  name: "Eshrak E Moazzam",
  slug: "eshrak-e-moazzam",
  role: "Associate",
  initials: "EM",
  image: eshrakEMoazzamImage,
  qualifications: [
    "LL.B (City, University of London)",
    "LLM (SOAS, University of London, UK)",
    "Barrister-at-Law (Hon'ble Society of Lincoln's Inn)",
  ],
  phone: "+8801720128401",
  email: "eshrak@legalcirclebd.com",
  bio: [
    "Eshrak E Moazzam has a Bachelor of Laws degree from City, University of London, UK and has a Master of Laws (LL.M) degree in International Commercial and Economic Law specializing in Company, Islamic Banking, Financial and Arbitration from SOAS, University of London, UK. He was called to the Bar of England and Wales in 2019 by the Hon'ble Society of Lincoln's Inn.",
    "Prior to joining The Legal Circle (TLC), Eshrak gained substantial legal experience while serving as an Associate at a reputed law firm in Dhaka. He achieved the knowledge of dealing with corporate clients, drafting and providing legal opinions on commercial leases, corporate deals and structuring and has worked alongside his seniors in advising and assisting various large corporations and multi-national companies in relation to their operations and legal compliance in Bangladesh on numerous occasions.",
    "He also gained public speaking and communication skills as a youth member of the Rotaract Club of Dhaka, where he made presentations on multiple occasions.",
    "Eshrak joined TLC immediately after completing his studies in the UK in 2020 and has been actively involved with the firm since. He has attained considerable experience and his legal practice includes negotiating contracts, incorporation of companies, analyzing legal issues relating to various company matters, advising and guiding foreign investments, advising and guiding NGOs, assisting in the setting up of power companies and advising on its structures including renewable energy, and matters related to human resource, employment and labour issues.",
    "Besides this, he is interested in the capital market, including the Dhaka Stock Exchange and Chittagong Stock Exchange, and is well acquainted with investments and portfolios in Bangladesh as he is also a director of a well-reputed brokerage house in Dhaka.",
  ],
  sections: [
    {
      title: "Practice Areas",
      items: [
        "Contract Negotiation",
        "Company Incorporation (foreign and national)",
        "Company Matters",
        "Foreign Investment",
        "NGOs",
        "Power Companies and Renewable Energy Structures",
        "Human Resource, Employment and Labour",
        "Capital Market",
      ],
    },
  ],
};

const mdMoyenUddinShakil: Person = {
  name: "MD. Moyen Uddin (Shakil)",
  slug: "md-moyen-uddin-shakil",
  role: "Manager",
  initials: "MS",
  image: mdMoyenUddinShakilImage,
  qualifications: ["LLB (Hons), National University"],
  positions: ["Income Tax Practitioner"],
  bio: [
    "Moyen Uddin (Shakil) has 11 years of experience at The Legal Circle and serves as Manager.",
  ],
  sections: [
    {
      title: "Professional Details",
      items: [
        "Experience: 11 years at The Legal Circle.",
        "Designation: Manager.",
        "Academic Qualifications: LLB (Hons), National University.",
        "Income Tax Practitioner.",
      ],
    },
  ],
};

const kutubulAlomSohel: Person = {
  name: "Kutubul Alom Sohel",
  slug: "kutubul-alom-sohel",
  role: "Office Manager",
  initials: "KS",
  image: kutubulAlomSohelImage,
  qualifications: ["BSS (Hons)", "MSS (Masters), National University"],
  bio: [
    "MD. Kutubul Alom Sohel has 8 years of experience at The Legal Circle and serves as Office Manager.",
  ],
  sections: [
    {
      title: "Professional Details",
      items: [
        "Experience: 8 years at The Legal Circle.",
        "Designation: Office Manager.",
        "Academic Qualifications: BSS (Hons).",
        "MSS (Masters), National University.",
      ],
    },
  ],
};

const mahmudulHasanRabiul: Person = {
  name: "Mahmudul Hasan Rabiul",
  slug: "mahmudul-hasan-rabiul",
  role: "Court Clerk",
  initials: "MR",
  image: mahmudulHasanRabiulImage,
  qualifications: ["SSC"],
  bio: [
    "Mahmudul Hasan Rabiul has 9 years of experience at The Legal Circle and serves as Court Clerk.",
  ],
  sections: [
    {
      title: "Professional Details",
      items: [
        "Experience: 9 years at The Legal Circle.",
        "Designation: Court Clerk.",
        "Academic Qualifications: SSC.",
      ],
    },
  ],
};

export const people: Record<PeopleTab, Person[]> = {
  Partners: [
    anitaGhaziRahman,
    gaziMdRokibBinHossain,
    sameeraMahmud,
    pushpoRahman,
    nauriinAhmed,
  ],
  "Of Counsel": [jarifAhmedRumman, masudKhan],
  "Senior Associates": [abrarHasnineRifat, taahsinaRaisaRabbi, nafiulAlamShupto],
  Associates: [umerAimanKhan, eshrakEMoazzam],
  Paralegal: [mdMoyenUddinShakil, kutubulAlomSohel, mahmudulHasanRabiul],
};

export const allPeople = peopleTabs.flatMap((tab) => people[tab]);

export function getPersonBySlug(slug: string) {
  return allPeople.find((person) => person.slug === slug);
}
