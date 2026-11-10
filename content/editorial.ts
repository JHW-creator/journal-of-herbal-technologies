export type BoardPerson = {
  role: string;
  name: string;
  details: string[];
  image: string;
  imageAlt: string;
};

export const editorial = {
  intro:
    "The editorial structure of JHT is designed to provide clear scientific responsibility while supporting multidisciplinary coverage.",
  leadership: [
    {
      role: "Editor-in-Chief",
      name: "Dr Vandana Jain",
      details: [
        "Ph.D(Tech)",
        "Principal, Oriental College of Pharmacy, Sector-2, Plot No.3,4,5, Behind Sanpada Railway Station, Sanpada West, Mumbai, Maharashtra 400705, India",
      ],
      image: "/brand/Editor/Editor-in-Chief.jpeg",
      imageAlt: "Dr Vandana Jain",
    },
    {
      role: "Co-Editor-in-Chief",
      name: "Dr. Yogendra Pal",
      details: [
        "Ph.D., M.Pharm (Pharmaceutical Chemistry)",
        "Assistant Professor, Oriental College of Pharmacy, Sector-2, Plot No.3,4,5, Behind Sanpada Railway Station, Sanpada West, Mumbai, Maharashtra 400705, India",
      ],
      image: "/brand/Editor/Co-Editor-in-Chief.jpeg",
      imageAlt: "Dr. Yogendra Pal",
    },
  ] satisfies BoardPerson[],
  members: [
    {
      role: "Editorial Board Member",
      name: "Dr Rashmi Pal",
      details: [
        "PhD",
        "Assistant Professor at SIES School of Pharmaceutical Sciences, D-125, MIDC Main Road, near USV Ltd, opp. River Park, TTC Industrial Area, Shiravane, Nerul, Navi Mumbai, Maharashtra 400705, India",
      ],
      image: "/brand/Editor/Editorial-borad.jpeg",
      imageAlt: "Dr Rashmi Pal",
    },
    {
      role: "Editorial Board Member",
      name: "Dr. Rajeshkumar Gavit",
      details: [
        "PhD (Tech.)",
        "Senior Scientist, Head of Downstream Process Development, Herbanext Laboratories Inc., Philippines. Negros South Road, Bago, Negros Occidental, Philippines",
      ],
      image: "/brand/Editor/Editorial-borad-2.jpeg",
      imageAlt: "Dr. Rajeshkumar Gavit",
    },
    {
      role: "Editorial Board Member",
      name: "Prof.(Dr.) Kamaldeep Singh",
      details: [
        "PhD",
        "HOD, Lala Lajpat Rai College of Pharmacy, Moga, Punjab, India.",
      ],
      image: "/brand/Editor/Editorial-borad-3.jpeg",
      imageAlt: "Prof.(Dr.) Kamaldeep Singh",
    },
    {
      role: "Editorial Board Member",
      name: "Rohit Upadhyay",
      details: [
        "PhD",
        "Research Scientist at Tulane University School of Medicine, 1430 Tulane Avenue, New Orleans, Louisiana 70112, USA",
      ],
      image: "/brand/Editor/Editorial-borad-4.jpeg",
      imageAlt: "Rohit Upadhyay",
    },
    {
      role: "Editorial Board Member",
      name: "Prof. (Dr.) Satyendra K. Rajput",
      details: [
        "PhD",
        "Professor, Dean, Pharmaceutical Sciences, Gurukula Kangri (Deemed to be University), Haridwar, India",
      ],
      image: "/brand/Editor/Editorial-borad-5.jpeg",
      imageAlt: "Prof. (Dr.) Satyendra K. Rajput",
    },
    {
      role: "Editorial Board Member",
      name: "Dr. Aruna P. Jadhav",
      details: [
        "PhD (Tech.), Pharmacognosy",
        "Professor of Pharmacognosy, Bharati Vidyapeeth’s College of Pharmacy, 8, YMCA Marg, Sector 3A, CBD Belapur, Navi Mumbai, Maharashtra 400614, India",
      ],
      image: "/brand/Editor/Editorial-borad-6.jpeg",
      imageAlt: "Dr. Aruna P. Jadhav",
    },
    {
      role: "Editorial Board Member",
      name: "Dr. Sangita Shukla",
      details: [
        "PhD (Pharmaceutical Sciences)",
        "Principal, Indubhai Patel College of Pharmacy and Research Centre, Dharmaj, Anand, Gujarat, India.",
      ],
      image: "/brand/Editor/Editorial-borad-7.jpeg",
      imageAlt: "Dr. Sangita Shukla",
    },
  ] satisfies BoardPerson[],
  managing: [
    {
      role: "Managing and Technical Editor",
      name: "Raj Mishra, B Pharm",
      details: [
        "Jr. Key Account Manager",
        "NOVITIOUS PHARMACEUTICAL PRIVATE LIMITED",
        "821/810, 8th Floor, Sun Gravitas, Nr. Shyamal Cross Road, Ahmedabad 380015, Gujarat, India",
      ],
      image: "/brand/Editor/Editor-tech.jpeg",
      imageAlt: "Raj Mishra",
    },
    {
      role: "Managing and Technical Editor",
      name: "Krishna Prajapati, B Pharm",
      details: [
        "Medical Content Writer & Editorial Coordinator",
        "Paradigm Infocom Private Ltd, Sai Sadan Apt, Janmbhoomi Marg, Fort, Mumbai, Maharashtra, India.",
      ],
      image: "/brand/Editor/tech-editor.jpeg",
      imageAlt: "Krishna Prajapati",
    },
  ] satisfies BoardPerson[],
  independence: [
    "JHT is institutionally associated with Oriental College of Pharmacy. Institutional association does not determine the scientific outcome of individual manuscripts.",
    "Editors are responsible for editorial decisions based on scientific quality, relevance, methodological soundness, ethical standards and the journal's scope.",
  ],
};
