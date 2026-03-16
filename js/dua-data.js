// ===== dua-data.js =====
// Authentic Duas from Qur'an and Hadith

const duasData = [
    // ===== AFTER TAKBIR (OPENING) =====
    {
        arabic: "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ وَتَبَارَكَ اسْمُكَ وَتَعَالَى جَدُّكَ وَلَا إِلَهَ غَيْرُكَ",
        transliteration: "Subḥānaka Allāhumma wa biḥamdika wa tabāraka smuka wa taʿālā jadduka wa lā ilāha ghayruk.",
        translation: "Glory be to You, O Allah, and praise. Blessed is Your name and exalted is Your majesty. There is no god worthy of worship except You.",
        source: "hadith",
        reference: "Tirmidhī, Abū Dāwūd",
        category: "opening",
        tags: ["takbir", "iftitah"]
    },
    {
        arabic: "وَجَّهْتُ وَجْهِيَ لِلَّذِي فَطَرَ السَّمَاوَاتِ وَالْأَرْضَ حَنِيفًا وَمَا أَنَا مِنَ الْمُشْرِكِينَ",
        transliteration: "Wajjahtu wajhiya lilladhī faṭaras-samāwāti wal-arḍa ḥanīfan wa mā ana minal-mushrikīn.",
        translation: "I have turned my face toward Him who created the heavens and the earth, inclining toward truth, and I am not of those who associate others with Allah.",
        source: "hadith",
        reference: "Muslim",
        category: "opening",
        tags: ["iftitah"]
    },
    // ===== IN RUKU' =====
    {
        arabic: "سُبْحَانَ رَبِّيَ الْعَظِيمِ",
        transliteration: "Subḥāna Rabbiyal-ʿAẓīm",
        translation: "Glory be to my Lord, the Magnificent.",
        source: "hadith",
        reference: "Abū Dāwūd, Tirmidhī",
        category: "ruku",
        tags: ["ruku", "tasbeeh"]
    },
    {
        arabic: "سُبْحَانَكَ اللَّهُمَّ رَبَّنَا وَبِحَمْدِكَ اللَّهُمَّ اغْفِرْ لِي",
        transliteration: "Subḥānaka Allāhumma Rabbanā wa biḥamdika Allāhumma ghfir lī.",
        translation: "Glory be to You, O Allah, our Lord, and praise. O Allah, forgive me.",
        source: "hadith",
        reference: "Bukhārī, Muslim",
        category: "ruku",
        tags: ["ruku", "forgiveness"]
    },
    {
        arabic: "سُبُّوحٌ قُدُّوسٌ رَبُّ الْمَلَائِكَةِ وَالرُّوحِ",
        transliteration: "Subbūḥun Quddūsun Rabbul-malā'ikati war-rūḥ.",
        translation: "Glorified, Holy, Lord of the angels and the Spirit (Jibril).",
        source: "hadith",
        reference: "Muslim",
        category: "ruku",
        tags: ["ruku", "angels"]
    },
    // ===== RISING FROM RUKU' =====
    {
        arabic: "سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ",
        transliteration: "Samiʿa llāhu liman ḥamidah.",
        translation: "Allah hears whoever praises Him.",
        source: "hadith",
        reference: "Bukhārī",
        category: "post-ruku",
        tags: ["standing", "tahmeed"]
    },
    {
        arabic: "رَبَّنَا وَلَكَ الْحَمْدُ حَمْدًا كَثِيرًا طَيِّبًا مُبَارَكًا فِيهِ",
        transliteration: "Rabbanā wa lakal-ḥamdu ḥamdan kathīran ṭayyiban mubārakan fīh.",
        translation: "Our Lord, to You be all praise – abundant, pure, and blessed praise.",
        source: "hadith",
        reference: "Bukhārī",
        category: "post-ruku",
        tags: ["standing", "praise"]
    },
    {
        arabic: "أَهْلَ الثَّنَاءِ وَالْمَجْدِ أَحَقُّ مَا قَالَ الْعَبْدُ وَكُلُّنَا لَكَ عَبْدٌ",
        transliteration: "Ahlath-thanā'i wal-majdi aḥaqqu mā qālal-ʿabdu wa kullunā laka ʿabd.",
        translation: "You are worthy of praise and glory – the most true thing a servant says, and we are all Your servants.",
        source: "hadith",
        reference: "Muslim",
        category: "post-ruku",
        tags: ["standing"]
    },
    // ===== IN SUJOOD =====
    {
        arabic: "سُبْحَانَ رَبِّيَ الْأَعْلَى",
        transliteration: "Subḥāna Rabbiyal-Aʿlā",
        translation: "Glory be to my Lord, the Most High.",
        source: "hadith",
        reference: "Abū Dāwūd, Tirmidhī",
        category: "sujood",
        tags: ["sajdah", "tasbeeh"]
    },
    {
        arabic: "سُبْحَانَكَ اللَّهُمَّ رَبَّنَا وَبِحَمْدِكَ اللَّهُمَّ اغْفِرْ لِي",
        transliteration: "Subḥānaka Allāhumma Rabbanā wa biḥamdika Allāhumma ghfir lī.",
        translation: "Glory be to You, O Allah, our Lord, and praise. O Allah, forgive me.",
        source: "hadith",
        reference: "Bukhārī, Muslim",
        category: "sujood",
        tags: ["sajdah", "forgiveness"]
    },
    {
        arabic: "اللَّهُمَّ اغْفِرْ لِي ذَنْبِي كُلَّهُ دِقَّهُ وَجِلَّهُ وَأَوَّلَهُ وَآخِرَهُ وَعَلَانِيَتَهُ وَسِرَّهُ",
        transliteration: "Allāhumma ghfir lī dhanbī kullahū diqqahū wa jillahū wa awwalahū wa ākhirahū wa ʿalāniyatahū wa sirrahū.",
        translation: "O Allah, forgive me all my sins – the small and great, the first and last, the open and secret.",
        source: "hadith",
        reference: "Muslim",
        category: "sujood",
        tags: ["sajdah", "forgiveness"]
    },
    {
        arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِرِضَاكَ مِنْ سَخَطِكَ وَبِمُعَافَاتِكَ مِنْ عُقُوبَتِكَ وَأَعُوذُ بِكَ مِنْكَ لَا أُحْصِي ثَنَاءً عَلَيْكَ أَنْتَ كَمَا أَثْنَيْتَ عَلَى نَفْسِكَ",
        transliteration: "Allāhumma innī aʿūdhu bi-riḍāka min sakhaṭika wa bi-muʿāfātika min ʿuqūbatika wa aʿūdhu bika minka lā uḥṣī thanā'an ʿalayka anta kamā athnayta ʿalā nafsik.",
        translation: "O Allah, I seek refuge in Your pleasure from Your wrath, and in Your forgiveness from Your punishment. I cannot enumerate Your praise; You are as You have praised Yourself.",
        source: "hadith",
        reference: "Muslim",
        category: "sujood",
        tags: ["sajdah", "refuge"]
    },
    // ===== BETWEEN TWO PROSTRATIONS =====
    {
        arabic: "رَبِّ اغْفِرْ لِي رَبِّ اغْفِرْ لِي",
        transliteration: "Rabbighfir lī, Rabbighfir lī.",
        translation: "My Lord, forgive me. My Lord, forgive me.",
        source: "hadith",
        reference: "Abū Dāwūd, Ibn Mājah",
        category: "between-sajdahs",
        tags: ["jalsah", "forgiveness"]
    },
    {
        arabic: "اللَّهُمَّ اغْفِرْ لِي وَارْحَمْنِي وَاهْدِنِي وَاجْبُرْنِي وَارْزُقْنِي",
        transliteration: "Allāhumma ghfir lī warḥamnī wahdinī wajburnī warzuqnī.",
        translation: "O Allah, forgive me, have mercy on me, guide me, mend me, and provide for me.",
        source: "hadith",
        reference: "Tirmidhī, Abū Dāwūd",
        category: "between-sajdahs",
        tags: ["jalsah", "comprehensive"]
    },
    // ===== TASHAHHUD (SITTING) =====
    {
        arabic: "التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ",
        transliteration: "At-taḥiyyātu lillāhi waṣ-ṣalawātu waṭ-ṭayyibātu. As-salāmu ʿalayka ayyuhan-nabiyyu wa raḥmatullāhi wa barakātuh. As-salāmu ʿalaynā wa ʿalā ʿibādillāhiṣ-ṣāliḥīn. Ashhadu allā ilāha illallāh wa ashhadu anna Muḥammadan ʿabduhū wa rasūluh.",
        translation: "All greetings, prayers, and pure words are for Allah. Peace be upon you, O Prophet, and the mercy of Allah and His blessings. Peace be upon us and upon the righteous servants of Allah. I bear witness that there is no god but Allah, and I bear witness that Muhammad is His servant and Messenger.",
        source: "hadith",
        reference: "Bukhārī, Muslim",
        category: "tashahhud",
        tags: ["sitting", "shahada"]
    },
    {
        arabic: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ",
        transliteration: "Allāhumma ṣalli ʿalā Muḥammadin wa ʿalā āli Muḥammadin kamā ṣallayta ʿalā Ibrāhīma wa ʿalā āli Ibrāhīma innaka Ḥamīdun Majīd.",
        translation: "O Allah, send prayers upon Muhammad and the family of Muhammad, as You sent prayers upon Ibrahim and the family of Ibrahim. Indeed, You are Praiseworthy, Glorious.",
        source: "hadith",
        reference: "Bukhārī",
        category: "tashahhud",
        tags: ["sitting", "salawat"]
    },
    {
        arabic: "اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ",
        transliteration: "Allāhumma bārik ʿalā Muḥammadin wa ʿalā āli Muḥammadin kamā bārakta ʿalā Ibrāhīma wa ʿalā āli Ibrāhīma innaka Ḥamīdun Majīd.",
        translation: "O Allah, bless Muhammad and the family of Muhammad, as You blessed Ibrahim and the family of Ibrahim. Indeed, You are Praiseworthy, Glorious.",
        source: "hadith",
        reference: "Bukhārī",
        category: "tashahhud",
        tags: ["sitting", "salawat"]
    },
    // ===== AFTER TASHAHHUD (BEFORE SALAM) =====
    {
        arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ وَمِنْ عَذَابِ جَهَنَّمَ وَمِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ وَمِنْ شَرِّ فِتْنَةِ الْمَسِيحِ الدَّجَّالِ",
        transliteration: "Allāhumma innī aʿūdhu bika min ʿadhābil-qabri wa min ʿadhābi jahannama wa min fitnatil-maḥyā wal-mamāti wa min sharri fitnatil-masīḥid-dajjāl.",
        translation: "O Allah, I seek refuge with You from the punishment of the grave, from the punishment of Hellfire, from the trials of life and death, and from the evil of the trial of the False Messiah (Dajjal).",
        source: "hadith",
        reference: "Muslim",
        category: "before-salam",
        tags: ["refuge", "akhirah"]
    },
    {
        arabic: "اللَّهُمَّ إِنِّي ظَلَمْتُ نَفْسِي ظُلْمًا كَثِيرًا وَلَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ فَاغْفِرْ لِي مَغْفِرَةً مِنْ عِنْدِكَ وَارْحَمْنِي إِنَّكَ أَنْتَ الْغَفُورُ الرَّحِيمُ",
        transliteration: "Allāhumma innī ẓalamtu nafsī ẓulman kathīran wa lā yaghfirudh-dhunūba illā anta faghfir lī maghfiratan min ʿindika warḥamnī innaka antal-Ghafūrur-Raḥīm.",
        translation: "O Allah, I have greatly wronged myself, and none forgives sins but You. So grant me forgiveness from You and have mercy on me. Indeed, You are the Oft-Forgiving, the Most Merciful.",
        source: "hadith",
        reference: "Bukhārī, Muslim",
        category: "before-salam",
        tags: ["forgiveness", "mercy"]
    },
    {
        arabic: "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ",
        transliteration: "Allāhumma aʿinnī ʿalā dhikrika wa shukrika wa ḥusni ʿibādatik.",
        translation: "O Allah, help me to remember You, to thank You, and to worship You in the best manner.",
        source: "hadith",
        reference: "Abū Dāwūd, Nasā'ī",
        category: "before-salam",
        tags: ["dhikr", "shukr", "ibadah"]
    },
    // ===== AFTER SALAM =====
    {
        arabic: "أَسْتَغْفِرُ اللَّهَ (ثَلَاثًا) اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ",
        transliteration: "Astaghfirullāh (three times). Allāhumma antas-salām wa minkas-salām tabārakta yā Dhal-Jalāli wal-Ikrām.",
        translation: "I seek forgiveness from Allah (three times). O Allah, You are Peace and from You comes peace. Blessed are You, O Possessor of Majesty and Honor.",
        source: "hadith",
        reference: "Muslim",
        category: "after-salam",
        tags: ["istighfar", "taslim"]
    },
    {
        arabic: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
        transliteration: "Lā ilāha illallāh waḥdahū lā sharīka lahū lahul-mulku wa lahul-ḥamdu wa huwa ʿalā kulli shay'in Qadīr.",
        translation: "There is no god but Allah alone, with no partner. His is the dominion and His is the praise, and He is over all things competent.",
        source: "hadith",
        reference: "Muslim",
        category: "after-salam",
        tags: ["tahlil", "tamjeed"]
    },
    {
        arabic: "اللَّهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ وَلَا مُعْطِيَ لِمَا مَنَعْتَ وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ",
        transliteration: "Allāhumma lā māni'a limā aʿṭayta wa lā muʿṭiya limā manaʿta wa lā yanfaʿu dhal-jaddi minkal-jadd.",
        translation: "O Allah, there is none who can withhold what You give, nor give what You withhold, and the wealth of the wealthy cannot benefit them against You.",
        source: "hadith",
        reference: "Bukhārī, Muslim",
        category: "after-salam",
        tags: ["tawheed", "qadr"]
    }
];

// Group duas by category for display
const duaCategories = {
    opening: "After Takbir (Opening)",
    ruku: "In Rukūʿ (Bowing)",
    "post-ruku": "After Rising from Rukūʿ",
    sujood: "In Sujood (Prostration)",
    "between-sajdahs": "Between the Two Prostrations",
    tashahhud: "Tashahhud (Sitting)",
    "before-salam": "Before Taslīm (Salām)",
    "after-salam": "After Taslīm"
};