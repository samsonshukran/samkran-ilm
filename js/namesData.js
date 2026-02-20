// ===== 50 NAMES OF ALLAH =====
// Source: Qur'an and authentic hadith
// Format: Each entry contains complete information for spiritual growth

const namesData = [
    {
        id: 1,
        arabic: "الرحمن",
        transliteration: "Ar-Raḥmān",
        meaning: "The Most Gracious",
        evidence: "Qur'an 1:3, 55:1",
        reflection: "Allah's mercy encompasses all of creation—believers and non-believers, humans and animals. His mercy precedes His wrath.",
        whenToUse: [
            "When seeking mercy",
            "When feeling hopeless",
            "When starting something new",
            "When making dua for others"
        ],
        duaExample: "Yā Raḥmān irḥamnī wa-rḥam jamīʻa ummati Muḥammad",
        relatedNames: ["Ar-Raḥīm", "Al-Ghafūr", "Al-Wadūd"],
        tajwidNote: "ḥ (ح) is a deep throat sound, not like English 'h'"
    },
    {
        id: 2,
        arabic: "الرحيم",
        transliteration: "Ar-Raḥīm",
        meaning: "The Most Merciful",
        evidence: "Qur'an 1:3, 33:43",
        reflection: "While Ar-Raḥmān is mercy for all, Ar-Raḥīm is special mercy for the believers in the Hereafter.",
        whenToUse: [
            "After committing sins",
            "When seeking forgiveness",
            "For the deceased",
            "For mercy in the afterlife"
        ],
        duaExample: "Yā Raḥīm ighfirlī warḥamnī wa-antā khayr ar-rāḥimīn",
        relatedNames: ["Ar-Raḥmān", "Al-Ghafūr", "At-Tawwāb"],
        tajwidNote: "Rā' (ر) is pronounced with the tip of the tongue"
    },
    {
        id: 3,
        arabic: "الملك",
        transliteration: "Al-Malik",
        meaning: "The King, The Sovereign",
        evidence: "Qur'an 59:23, 20:114",
        reflection: "Allah is the absolute sovereign of the entire universe. He owns everything and everyone, and all creation is under His dominion.",
        whenToUse: [
            "When feeling powerless",
            "Before those in authority",
            "When seeking justice",
            "To remind of Allah's ultimate control"
        ],
        duaExample: "Yā Malik aghnithnī wa lā takilnī ilā nafsī",
        relatedNames: ["Al-Mālik", "Al-Malīk", "Mālik al-Mulk"],
        tajwidNote: "Qalqalah in the letter qāf (ق) – bouncing sound"
    },
    {
        id: 4,
        arabic: "القدوس",
        transliteration: "Al-Quddūs",
        meaning: "The Holy, The Pure",
        evidence: "Qur'an 59:23, 62:1",
        reflection: "Allah is absolutely pure and free from any imperfection, deficiency, or fault. He is transcendent above any comparison.",
        whenToUse: [
            "When purifying intention",
            "During wudu (ablution)",
            "When seeking spiritual purity",
            "When feeling spiritually unclean"
        ],
        duaExample: "Yā Quddūs tahhir qalbī wa amsī 'amalī",
        relatedNames: ["As-Salām", "Al-ʻAlīy", "Al-Kabīr"],
        tajwidNote: "Ḍād (ض) is a heavy 'd' sound from the side of the tongue"
    },
    {
        id: 5,
        arabic: "السلام",
        transliteration: "As-Salām",
        meaning: "The Source of Peace",
        evidence: "Qur'an 59:23",
        reflection: "Allah is the source of all peace and safety. He grants security to His creation, and Paradise is the home of peace.",
        whenToUse: [
            "When feeling anxious",
            "Before sleeping",
            "When entering home",
            "For protection from harm"
        ],
        duaExample: "Yā Salām sallimnī wa sallim dīnī wa amānatī",
        relatedNames: ["Al-Mu'min", "Al-Muhaymin"],
        tajwidNote: "Sīn (س) is a soft hissing sound"
    },
    {
        id: 6,
        arabic: "المؤمن",
        transliteration: "Al-Mu'min",
        meaning: "The Guarantor of Faith",
        evidence: "Qur'an 59:23",
        reflection: "Allah grants faith to His servants and is the source of security. He fulfills His promises and keeps His creation safe.",
        whenToUse: [
            "When faith weakens",
            "For protection from doubt",
            "When feeling insecure",
            "Before travel"
        ],
        duaExample: "Yā Mu'min āminnī fī dār al-ghurūr wa yawm al-ʻarḍ",
        relatedNames: ["As-Salām", "Al-Muhaymin"],
        tajwidNote: "Hamzah (ء) – a glottal stop from the throat"
    },
    {
        id: 7,
        arabic: "المهيمن",
        transliteration: "Al-Muhaymin",
        meaning: "The Guardian, The Protector",
        evidence: "Qur'an 59:23",
        reflection: "Allah watches over everything, protects His creation, and witnesses all actions. Nothing escapes His knowledge.",
        whenToUse: [
            "When seeking protection",
            "For children and family",
            "When feeling watched by creation",
            "For security of iman"
        ],
        duaExample: "Yā Muhaymin iḥfaẓnī bi-ʻaynika allatī lā tanām",
        relatedNames: ["Ar-Raqīb", "Al-Ḥafīẓ"],
        tajwidNote: "Hā' (ه) is a soft breath from the chest"
    },
    {
        id: 8,
        arabic: "العزيز",
        transliteration: "Al-'Azīz",
        meaning: "The Almighty, The Mighty",
        evidence: "Qur'an 3:6, 4:158",
        reflection: "Allah is the Almighty who cannot be overpowered. He is the victor over all things, and nothing can defeat Him.",
        whenToUse: [
            "When feeling weak",
            "Against enemies",
            "When facing difficulty",
            "To gain strength and honor"
        ],
        duaExample: "Yā 'Azīz a'izzanī bi-ṭāʻatika wa lā tudhillanī bi-maʻṣiyatik",
        relatedNames: ["Al-Qawīy", "Al-Matīn"],
        tajwidNote: "ʻAyn (ع) is a deep throat sound with no English equivalent"
    },
    {
        id: 9,
        arabic: "الجبار",
        transliteration: "Al-Jabbār",
        meaning: "The Compeller, The Irresistible",
        evidence: "Qur'an 59:23",
        reflection: "Allah compels all things according to His will. He mends every brokenness and has absolute power over everything.",
        whenToUse: [
            "When feeling broken",
            "For healing",
            "When things are out of control",
            "For those who are oppressed"
        ],
        duaExample: "Yā Jabbār jabbur kasrī wa kasr al-muslimīn",
        relatedNames: ["Al-Qahhār", "Al-ʻAzīz"],
        tajwidNote: "Jīm (ج) is a clear 'j' sound from the middle of the tongue"
    },
    {
        id: 10,
        arabic: "المتكبر",
        transliteration: "Al-Mutakabbir",
        meaning: "The Supreme, The Majestic",
        evidence: "Qur'an 59:23",
        reflection: "Allah alone has true greatness and majesty. He is above any need for creation, and all pride belongs to Him.",
        whenToUse: [
            "Against arrogance",
            "To humble oneself",
            "When seeing the greatness of creation",
            "To remember who truly deserves pride"
        ],
        duaExample: "Yā Mutakabbir adhhib kibrī wa ʻizzatī laka",
        relatedNames: ["Al-ʻAlīy", "Al-Kabīr"],
        tajwidNote: "Kāf (ك) is a soft 'k' from the back of the tongue"
    },
    {
        id: 11,
        arabic: "الخالق",
        transliteration: "Al-Khāliq",
        meaning: "The Creator",
        evidence: "Qur'an 6:102, 13:16",
        reflection: "Allah creates everything from nothing. He is the originator of all existence, with no previous model or material.",
        whenToUse: [
            "When admiring creation",
            "For creativity",
            "When studying science",
            "To increase awe of Allah"
        ],
        duaExample: "Yā Khāliq ukhluqnī ʻalā ṣirāṭika l-mustaqīm",
        relatedNames: ["Al-Bāri'", "Al-Muṣawwir"],
        tajwidNote: "Khā' (خ) is a deep throaty sound like the Scottish 'loch'"
    },
    {
        id: 12,
        arabic: "البارئ",
        transliteration: "Al-Bāri'",
        meaning: "The Evolver, The Maker",
        evidence: "Qur'an 59:24",
        reflection: "Allah brings creation into existence and gives each thing its unique characteristics. He fashions with perfect precision.",
        whenToUse: [
            "For uniqueness",
            "When feeling different",
            "For healing from illness",
            "For perfection in work"
        ],
        duaExample: "Yā Bāri' bārik lī fī ʻamalī wa dhurriyyatī",
        relatedNames: ["Al-Khāliq", "Al-Muṣawwir"],
        tajwidNote: "Alif maqṣūrah (ى) is a long 'a' sound"
    },
    {
        id: 13,
        arabic: "المصور",
        transliteration: "Al-Muṣawwir",
        meaning: "The Fashioner of Forms",
        evidence: "Qur'an 59:24",
        reflection: "Allah gives every creation its distinct form and shape. No two are exactly alike, reflecting His infinite creativity.",
        whenToUse: [
            "For beauty and form",
            "When creating art",
            "For gratitude for one's body",
            "For appreciation of diversity"
        ],
        duaExample: "Yā Muṣawwir ṣuwwirnā ʻalā ṣūratil-islām wal-īmān",
        relatedNames: ["Al-Khāliq", "Al-Bāri'"],
        tajwidNote: "Ṣād (ص) is a heavy 's' with the lips rounded"
    },
    {
        id: 14,
        arabic: "الغفار",
        transliteration: "Al-Ghaffār",
        meaning: "The Great Forgiver",
        evidence: "Qur'an 20:82, 38:66",
        reflection: "Allah repeatedly forgives sins, no matter how many times one repents. He covers faults and overlooks shortcomings.",
        whenToUse: [
            "After sinning",
            "During istighfar",
            "When feeling guilty",
            "For forgiveness of others"
        ],
        duaExample: "Yā Ghaffār ighfirlī wa liwālidayya wa lil-mu'minīn",
        relatedNames: ["Al-Ghafūr", "At-Tawwāb"],
        tajwidNote: "Ghayn (غ) is a throaty 'g' sound"
    },
    {
        id: 15,
        arabic: "القهار",
        transliteration: "Al-Qahhār",
        meaning: "The Subduer, The Overcomer",
        evidence: "Qur'an 13:16, 38:65",
        reflection: "Allah has complete dominance over everything. Nothing can resist His will, and all creation submits to Him.",
        whenToUse: [
            "Against oppressors",
            "When facing powerful enemies",
            "For overcoming bad habits",
            "When feeling overwhelmed"
        ],
        duaExample: "Yā Qahhār aqhar ʻaduwwī wa ʻaduwwad-dīn",
        relatedNames: ["Al-Jabbār", "Al-Qādir"],
        tajwidNote: "Qāf (ق) is a heavy 'q' from the back of the throat"
    },
    {
        id: 16,
        arabic: "الوهاب",
        transliteration: "Al-Wahhāb",
        meaning: "The Bestower",
        evidence: "Qur'an 38:9, 3:8",
        reflection: "Allah gives generously without expecting anything in return. He bestows gifts, knowledge, children, and countless blessings.",
        whenToUse: [
            "When asking for something",
            "For children",
            "For knowledge and wisdom",
            "For rizq (provision)"
        ],
        duaExample: "Yā Wahhāb hab lī min ladunka ʻilman wa dhurriyyatan ṭayyibah",
        relatedNames: ["Ar-Razzāq", "Al-Karīm"],
        tajwidNote: "Wāw (و) is a round lip 'w' sound"
    },
    {
        id: 17,
        arabic: "الرزاق",
        transliteration: "Ar-Razzāq",
        meaning: "The Provider",
        evidence: "Qur'an 51:58, 22:58",
        reflection: "Allah provides sustenance for every living creature. He guarantees provision for all, from the smallest ant to the largest whale.",
        whenToUse: [
            "For halal rizq",
            "When facing poverty",
            "Before earning income",
            "For barakah in provision"
        ],
        duaExample: "Yā Razzāq urzuqnī rizqan ḥalālan ṭayyibā",
        relatedNames: ["Al-Wahhāb", "Al-Karīm"],
        tajwidNote: "Zāy (ز) is a buzzing 'z' sound"
    },
    {
        id: 18,
        arabic: "الفتاح",
        transliteration: "Al-Fattāḥ",
        meaning: "The Opener, The Judge",
        evidence: "Qur'an 34:26, 7:89",
        reflection: "Allah opens doors of mercy, provision, and knowledge. He also opens the way to victory and judges with truth.",
        whenToUse: [
            "When doors are closed",
            "For solving problems",
            "For new opportunities",
            "Before exams or challenges"
        ],
        duaExample: "Yā Fattāḥ iftaḥ lanā abwāba raḥmatika wal-falāḥ",
        relatedNames: ["Al-ʻAlīm", "Al-Ḥakam"],
        tajwidNote: "Tā' (ت) is a light 't' with the tongue tip"
    },
    {
        id: 19,
        arabic: "العليم",
        transliteration: "Al-'Alīm",
        meaning: "The All-Knowing",
        evidence: "Qur'an 2:158, 4:35",
        reflection: "Allah knows everything—the past, present, and future. He knows what was, what is, and what will be, and what never happened but could have.",
        whenToUse: [
            "For knowledge",
            "Before studying",
            "When confused about decisions",
            "When Allah alone knows the truth"
        ],
        duaExample: "Yā 'Alīm 'allimnī mā yanfaʻunī",
        relatedNames: ["Al-Khabīr", "Al-Ḥakīm"],
        tajwidNote: "ʻAyn (ع) as before – deep throat"
    },
    {
        id: 20,
        arabic: "القابض",
        transliteration: "Al-Qābiḍ",
        meaning: "The Restrainer",
        evidence: "Qur'an 2:245",
        reflection: "Allah restricts provision, withholds, and constricts as part of His wisdom. He alone controls all things.",
        whenToUse: [
            "When facing hardship",
            "For patience in difficulty",
            "When provision seems tight",
            "To understand divine wisdom"
        ],
        duaExample: "Yā Qābiḍ iqbiḍ ʻannī l-fitan mā ẓahara wa mā baṭan",
        relatedNames: ["Al-Bāsiṭ", "Al-Māniʻ"],
        tajwidNote: "Ḍād (ض) – heavy 'd' from the side of the tongue"
    },
    {
        id: 21,
        arabic: "الباسط",
        transliteration: "Al-Bāsiṭ",
        meaning: "The Expander",
        evidence: "Qur'an 2:245",
        reflection: "Allah expands provision, opens doors, and gives generously. He extends mercy, knowledge, and all good things.",
        whenToUse: [
            "For increase in rizq",
            "For expansion of heart",
            "For ease in matters",
            "For growth in knowledge"
        ],
        duaExample: "Yā Bāsiṭ ubsuṭ ʻalaynā raḥmataka wa rizqaka",
        relatedNames: ["Al-Wāsiʻ", "Al-Karīm"],
        tajwidNote: "Sīn (س) – soft hissing"
    },
    {
        id: 22,
        arabic: "الخافض",
        transliteration: "Al-Khāfiḍ",
        meaning: "The Abaser",
        evidence: "Qur'an 56:3, 95:5",
        reflection: "Allah lowers the arrogant and humbles the proud. He brings down those who deserve to be brought low.",
        whenToUse: [
            "Against pride and arrogance",
            "When fearing status",
            "For humility",
            "Against oppressors"
        ],
        duaExample: "Yā Khāfiḍ ikhfiḍnī wa lā tudhillanī",
        relatedNames: ["Ar-Rāfiʻ", "Al-Mudhill"],
        tajwidNote: "Khā' (خ) – deep throaty sound"
    },
    {
        id: 23,
        arabic: "الرافع",
        transliteration: "Ar-Rāfi'",
        meaning: "The Exalter",
        evidence: "Qur'an 58:11, 6:83",
        reflection: "Allah raises the humble and elevates the righteous. He gives honor and high status to whom He wills.",
        whenToUse: [
            "For success and elevation",
            "For honor in this life and next",
            "When feeling low",
            "For raising one's rank"
        ],
        duaExample: "Yā Rāfi' irfaʻnī fī d-dunyā wa l-ākhirah",
        relatedNames: ["Al-Khāfiḍ", "Al-Muʻizz"],
        tajwidNote: "Fā' (ف) is a light 'f' with the bottom lip"
    },
    {
        id: 24,
        arabic: "المعز",
        transliteration: "Al-Mu'izz",
        meaning: "The Giver of Honor",
        evidence: "Qur'an 3:26",
        reflection: "Allah gives honor and dignity to whom He wills. True honor comes only from Him, not from status or wealth.",
        whenToUse: [
            "For dignity and honor",
            "When feeling humiliated",
            "For respect among people",
            "For honor in the Hereafter"
        ],
        duaExample: "Yā Mu'izz aʻizzanī bi-islāmī",
        relatedNames: ["Al-Mudhill", "Al-Jabbār"],
        tajwidNote: "ʻAyn (ع) – deep throat"
    },
    {
        id: 25,
        arabic: "المذل",
        transliteration: "Al-Mudhill",
        meaning: "The Giver of Dishonor",
        evidence: "Qur'an 3:26",
        reflection: "Allah abases those who deserve dishonor. He humiliates the arrogant and brings down tyrants.",
        whenToUse: [
            "Against oppressors",
            "For protection from disgrace",
            "When fearing humiliation",
            "To remain humble"
        ],
        duaExample: "Yā Mudhill adhill ʻaduwwī wa ʻaduwwad-dīn",
        relatedNames: ["Al-Muʻizz", "Al-Qahhār"],
        tajwidNote: "Dhāl (ذ) is a soft 'th' like in 'that'"
    },
    {
        id: 26,
        arabic: "السميع",
        transliteration: "As-Samī'",
        meaning: "The All-Hearing",
        evidence: "Qur'an 2:127, 49:1",
        reflection: "Allah hears everything—every whisper, every prayer, every heartbeat. Nothing escapes His hearing.",
        whenToUse: [
            "When making dua",
            "For whispered prayers",
            "When feeling unheard",
            "For privacy and secrets"
        ],
        duaExample: "Yā Samī' ismaʻ duʻā'ī wa lā taḥrimnī ijābatak",
        relatedNames: ["Al-Baṣīr", "Al-ʻAlīm"],
        tajwidNote: "Mīm (م) is a nasal 'm' sound"
    },
    {
        id: 27,
        arabic: "البصير",
        transliteration: "Al-Baṣīr",
        meaning: "The All-Seeing",
        evidence: "Qur'an 4:58, 17:1",
        reflection: "Allah sees everything—the seen and unseen, the manifest and hidden. His sight encompasses all.",
        whenToUse: [
            "For awareness of Allah's sight",
            "When feeling watched by people",
            "For sincerity in deeds",
            "For protection from hidden harm"
        ],
        duaExample: "Yā Baṣīr araṇī l-ḥaqqa ḥaqqā",
        relatedNames: ["As-Samī'", "Ash-Shahīd"],
        tajwidNote: "Ṣād (ص) – heavy 's'"
    },
    {
        id: 28,
        arabic: "الحكم",
        transliteration: "Al-Ḥakam",
        meaning: "The Judge",
        evidence: "Qur'an 22:69",
        reflection: "Allah is the ultimate judge between His servants. His judgments are perfect and just.",
        whenToUse: [
            "For justice",
            "In disputes",
            "When wronged by others",
            "For fair decisions"
        ],
        duaExample: "Yā Ḥakam uḥkum baynanā bil-ḥaqq",
        relatedNames: ["Al-ʻAdl", "Al-Fattāḥ"],
        tajwidNote: "Ḥā' (ح) – deep throat 'h'"
    },
    {
        id: 29,
        arabic: "العدل",
        transliteration: "Al-'Adl",
        meaning: "The Just",
        evidence: "Qur'an 6:115",
        reflection: "Allah is absolutely just. He does not wrong anyone, even by an atom's weight. His justice is perfect.",
        whenToUse: [
            "When seeking justice",
            "For fairness in dealings",
            "When feeling wronged",
            "To be just with others"
        ],
        duaExample: "Yā 'Adl iʻdil ʻalaynā bi-faḍlika lā bi-ʻadlik",
        relatedNames: ["Al-Ḥakam", "Al-Muqsiṭ"],
        tajwidNote: "Dāl (د) is a light 'd' with the tongue tip"
    },
    {
        id: 30,
        arabic: "اللطيف",
        transliteration: "Al-Laṭīf",
        meaning: "The Subtle, The Kind",
        evidence: "Qur'an 6:103, 22:63",
        reflection: "Allah is gentle and kind with His servants. He reaches them in ways they cannot perceive and brings good from hidden places.",
        whenToUse: [
            "For gentleness",
            "When things are unclear",
            "For kindness from others",
            "For unseen help"
        ],
        duaExample: "Yā Laṭīf uṭfuf bī wa bi-jamīʻil-muslimīn",
        relatedNames: ["Al-Khabīr", "Ar-Ra'ūf"],
        tajwidNote: "Ṭā' (ط) – heavy 't'"
    },
    {
        id: 31,
        arabic: "الخبير",
        transliteration: "Al-Khabīr",
        meaning: "The All-Aware",
        evidence: "Qur'an 6:18, 31:34",
        reflection: "Allah has complete knowledge of all things, including the innermost secrets and hidden realities that no one else knows.",
        whenToUse: [
            "For understanding hidden matters",
            "When only Allah knows",
            "For trusting Allah's plan",
            "For unseen future"
        ],
        duaExample: "Yā Khabīr akhbaranī bi-ʻuyūbī",
        relatedNames: ["Al-ʻAlīm", "Al-Laṭīf"],
        tajwidNote: "Rā' (ر) rolled slightly"
    },
    {
        id: 32,
        arabic: "الحليم",
        transliteration: "Al-Ḥalīm",
        meaning: "The Forbearing",
        evidence: "Qur'an 2:235, 17:44",
        reflection: "Allah is patient and does not punish immediately despite His power. He gives time to repent and correct mistakes.",
        whenToUse: [
            "For patience",
            "When delaying punishment",
            "For controlling anger",
            "When Allah gives time"
        ],
        duaExample: "Yā Ḥalīm ḥlim ʻannā wa tajāwaz ʻan sayyiʼātinā",
        relatedNames: ["Al-Ghafūr", "Al-ʻAfuww"],
        tajwidNote: "Lām (ل) is a clear 'l' with the tongue tip"
    },
    {
        id: 33,
        arabic: "العظيم",
        transliteration: "Al-'Aẓīm",
        meaning: "The Magnificent",
        evidence: "Qur'an 2:255, 42:4",
        reflection: "Allah's greatness is beyond comprehension. No mind can grasp His magnitude; He is the Greatest of all.",
        whenToUse: [
            "For awe of Allah",
            "When seeing greatness in creation",
            "For tawḥīd",
            "For humility before Allah"
        ],
        duaExample: "Yā 'Aẓīm aʻẓimnī bi-ṭāʻatik",
        relatedNames: ["Al-Kabīr", "Al-Jalīl"],
        tajwidNote: "Ẓā' (ظ) – heavy 'dh'"
    },
    {
        id: 34,
        arabic: "الغفور",
        transliteration: "Al-Ghafūr",
        meaning: "The All-Forgiving",
        evidence: "Qur'an 2:173, 8:69",
        reflection: "Allah's forgiveness is vast and covers all sins for those who repent. He forgives endlessly and completely.",
        whenToUse: [
            "For major sins",
            "For forgiveness of others",
            "When feeling unworthy",
            "For mercy in the grave"
        ],
        duaExample: "Yā Ghafūr ighfirlī wa liwālidayya wa lil-mu'minīn",
        relatedNames: ["Al-Ghaffār", "Al-ʻAfuww"],
        tajwidNote: "Fā' (ف) – light 'f'"
    },
    {
        id: 35,
        arabic: "الشكور",
        transliteration: "Ash-Shakūr",
        meaning: "The Appreciative",
        evidence: "Qur'an 35:30, 42:23",
        reflection: "Allah appreciates and rewards even small deeds with immense blessings. He multiplies rewards and accepts gratitude.",
        whenToUse: [
            "For gratitude",
            "For increase in blessings",
            "For appreciation of good deeds",
            "For recognizing small favors"
        ],
        duaExample: "Yā Shakūr ushkurnī wa-jʻalnī min ash-shākirīn",
        relatedNames: ["Al-Ḥalīm", "Al-Wadūd"],
        tajwidNote: "Shīn (ش) is a 'sh' sound from the middle of the tongue"
    },
    {
        id: 36,
        arabic: "العلي",
        transliteration: "Al-'Alī",
        meaning: "The Most High",
        evidence: "Qur'an 4:34, 22:62",
        reflection: "Allah is the Highest in every sense—in essence, in power, in rank. Nothing is above Him.",
        whenToUse: [
            "For elevation",
            "When feeling low",
            "For spiritual ascent",
            "For tawakkul (reliance)"
        ],
        duaExample: "Yā 'Alī aʻlinī bi-īmānī",
        relatedNames: ["Al-Aʻlā", "Al-Mutaʻāl"],
        tajwidNote: "ʻAyn (ع) – deep throat"
    },
    {
        id: 37,
        arabic: "الكبير",
        transliteration: "Al-Kabīr",
        meaning: "The Great",
        evidence: "Qur'an 13:9, 22:62",
        reflection: "Allah is greater than everything. Nothing is greater than Him; His greatness is absolute.",
        whenToUse: [
            "For takbīr",
            "For recognizing Allah's greatness",
            "For humility",
            "Against false greatness"
        ],
        duaExample: "Yā Kabīr akbirnī ʻalā ṭāʻatik",
        relatedNames: ["Al-'Aẓīm", "Al-Jalīl"],
        tajwidNote: "Kāf (ك) – soft 'k'"
    },
    {
        id: 38,
        arabic: "الحفيظ",
        transliteration: "Al-Ḥafīẓ",
        meaning: "The Preserver",
        evidence: "Qur'an 11:57, 34:21",
        reflection: "Allah preserves and protects everything. He guards the heavens, earth, and all that is within them.",
        whenToUse: [
            "For protection",
            "For preservation of Qur'an",
            "For safety of family",
            "For guarding faith"
        ],
        duaExample: "Yā Ḥafīẓ iḥfaẓnī min bayni yadayya wa min khalfī",
        relatedNames: ["Ar-Raqīb", "Al-Muhaymin"],
        tajwidNote: "Ẓā' (ظ) – heavy 'dh'"
    },
    {
        id: 39,
        arabic: "المقيت",
        transliteration: "Al-Muqīt",
        meaning: "The Nourisher",
        evidence: "Qur'an 4:85",
        reflection: "Allah provides nourishment and sustenance to all living things. He is the guardian over everything.",
        whenToUse: [
            "For daily bread",
            "For spiritual nourishment",
            "For sustenance",
            "For strength"
        ],
        duaExample: "Yā Muqīt aqitnī bi-ṭāʻatika",
        relatedNames: ["Ar-Razzāq", "Al-Wahhāb"],
        tajwidNote: "Qāf (ق) – heavy 'q'"
    },
    {
        id: 40,
        arabic: "الحسيب",
        transliteration: "Al-Ḥasīb",
        meaning: "The Reckoner",
        evidence: "Qur'an 4:6, 33:39",
        reflection: "Allah is sufficient as the one who takes account. He knows all deeds and will bring everything to account.",
        whenToUse: [
            "For accountability",
            "For sufficiency in Allah",
            "Before deeds",
            "For fairness"
        ],
        duaExample: "Yā Ḥasīb ḥasibnī ḥisāban yasīrā",
        relatedNames: ["Ash-Shahīd", "Ar-Raqīb"],
        tajwidNote: "Ḥā' (ح) – deep 'h'"
    },
    {
        id: 41,
        arabic: "الجليل",
        transliteration: "Al-Jalīl",
        meaning: "The Majestic",
        evidence: "Qur'an 55:27",
        reflection: "Allah possesses absolute majesty, glory, and magnificence. His countenance is full of majesty and honor.",
        whenToUse: [
            "For awe and reverence",
            "For glorifying Allah",
            "For majesty in character",
            "For fear of Allah"
        ],
        duaExample: "Yā Jalīl ajillanī bi-karamik",
        relatedNames: ["Al-'Aẓīm", "Al-Kabīr"],
        tajwidNote: "Jīm (ج) – clear 'j'"
    },
    {
        id: 42,
        arabic: "الكريم",
        transliteration: "Al-Karīm",
        meaning: "The Generous",
        evidence: "Qur'an 27:40, 82:6",
        reflection: "Allah is infinitely generous. He gives without being asked, and His generosity never diminishes His treasures.",
        whenToUse: [
            "For generosity",
            "For noble character",
            "When asking from Allah",
            "For barakah"
        ],
        duaExample: "Yā Karīm akrimnī bi-jannatik",
        relatedNames: ["Al-Jawād", "Al-Wahhāb"],
        tajwidNote: "Rā' (ر) – rolled 'r'"
    },
    {
        id: 43,
        arabic: "الرقيب",
        transliteration: "Ar-Raqīb",
        meaning: "The Watchful",
        evidence: "Qur'an 4:1, 5:117",
        reflection: "Allah watches over everything and everyone. Nothing escapes His observation, and He is ever-vigilant.",
        whenToUse: [
            "For awareness",
            "For sincerity",
            "When alone",
            "For avoiding sin"
        ],
        duaExample: "Yā Raqīb urqubnī bi-ʻaynika allatī lā tanām",
        relatedNames: ["Ash-Shahīd", "Al-Ḥafīẓ"],
        tajwidNote: "Qāf (ق) – heavy 'q'"
    },
    {
        id: 44,
        arabic: "المجيب",
        transliteration: "Al-Mujīb",
        meaning: "The Responder",
        evidence: "Qur'an 11:61",
        reflection: "Allah answers prayers and responds to those who call upon Him. He never leaves a sincere supplication unanswered.",
        whenToUse: [
            "When making dua",
            "For urgent needs",
            "For istijābah",
            "For all requests"
        ],
        duaExample: "Yā Mujīb ajib duʻā'ī wa lā taḥrimnī raḥmatak",
        relatedNames: ["As-Samī'", "Al-Qarīb"],
        tajwidNote: "Bā' (ب) – light 'b' with lips"
    },
    {
        id: 45,
        arabic: "الواسع",
        transliteration: "Al-Wāsi'",
        meaning: "The All-Encompassing",
        evidence: "Qur'an 2:268, 3:73",
        reflection: "Allah's capacity is vast beyond measure. His mercy, knowledge, and generosity have no limits.",
        whenToUse: [
            "For vast mercy",
            "For limitless provision",
            "For expansion",
            "For encompassing blessings"
        ],
        duaExample: "Yā Wāsiʻ awsiʻ ʻalaynā raḥmataka",
        relatedNames: ["Al-Muḥīṭ", "Al-Kabīr"],
        tajwidNote: "Sīn (س) – soft 's'"
    },
    {
        id: 46,
        arabic: "الحكيم",
        transliteration: "Al-Ḥakīm",
        meaning: "The Wise",
        evidence: "Qur'an 31:27, 2:129",
        reflection: "Allah's actions are perfect wisdom. Everything He does has profound purpose, even when hidden from us.",
        whenToUse: [
            "For wisdom",
            "When facing trials",
            "For understanding",
            "For good decisions"
        ],
        duaExample: "Yā Ḥakīm ḥakkimnī fī umūrī",
        relatedNames: ["Al-ʻAlīm", "Al-Khabīr"],
        tajwidNote: "Ḥā' (ح) – deep 'h'"
    },
    {
        id: 47,
        arabic: "الودود",
        transliteration: "Al-Wadūd",
        meaning: "The Loving",
        evidence: "Qur'an 11:90, 85:14",
        reflection: "Allah loves His righteous servants and is beloved to them. His love is the greatest gift.",
        whenToUse: [
            "For love of Allah",
            "For love between people",
            "For mawaddah",
            "For affection"
        ],
        duaExample: "Yā Wadūd wāddanī wa ḥabbibnī ilā khalqik",
        relatedNames: ["Ar-Ra'ūf", "Ar-Raḥīm"],
        tajwidNote: "Wāw (و) – round lip 'w'"
    },
    {
        id: 48,
        arabic: "المجيد",
        transliteration: "Al-Majīd",
        meaning: "The Glorious",
        evidence: "Qur'an 11:73, 85:15",
        reflection: "Allah's glory is absolute. His actions are glorious, His names are glorious, and His essence is full of glory.",
        whenToUse: [
            "For glorifying Allah",
            "For honor and glory",
            "For noble character",
            "For praising Allah"
        ],
        duaExample: "Yā Majīd ajidnī bi-maghfiratik",
        relatedNames: ["Al-Jalīl", "Al-Karīm"],
        tajwidNote: "Jīm (ج) – clear 'j'"
    },
    {
        id: 49,
        arabic: "الباعث",
        transliteration: "Al-Bā'ith",
        meaning: "The Resurrector",
        evidence: "Qur'an 22:7",
        reflection: "Allah will resurrect all of creation on the Day of Judgment. He brings life to the dead.",
        whenToUse: [
            "For resurrection",
            "For hope in the afterlife",
            "For awakening of hearts",
            "For new beginnings"
        ],
        duaExample: "Yā Bā'ith ibʻathnī fī zumratil-muttaqīn",
        relatedNames: ["Al-Muḥyī", "Al-Qādir"],
        tajwidNote: "Thā' (ث) – soft 'th' like in 'three'"
    },
    {
        id: 50,
        arabic: "الشهيد",
        transliteration: "Ash-Shahīd",
        meaning: "The Witness",
        evidence: "Qur'an 4:166, 22:17",
        reflection: "Allah witnesses everything—every action, every word, every thought. Nothing is hidden from His testimony.",
        whenToUse: [
            "For bearing witness",
            "For truth in testimony",
            "When seeking justice",
            "For awareness"
        ],
        duaExample: "Yā Shahīd ishhad lanā bil-khayr",
        relatedNames: ["Ar-Raqīb", "Al-Ḥafīẓ"],
        tajwidNote: "Shīn (ش) – 'sh' sound"
    }
];

// For backward compatibility
const namesDataSimple = namesData.map(n => ({
    arabic: n.arabic,
    translit: n.transliteration,
    meaning: n.meaning,
    evidence: n.evidence,
    reflection: n.reflection,
    dua: n.duaExample,
    whenToUse: n.whenToUse.join(", "),
    relatedNames: n.relatedNames.join(", "),
    tajweed: n.tajwidNote
}));

// ===== EXPORT TO WINDOW =====
window.namesData = namesData;
window.namesDataSimple = namesDataSimple;

console.log('✅ Names data loaded:', namesData.length, 'names');