// ===== HADITH DUAS =====
// Authentic duas from Sahih Hadith
// Sources: Bukhari, Muslim, Tirmidhi, Abu Dawud

const hadithDuas = [
    // ===== DAILY DUAS =====
    {
        id: 101,
        prophet: "Muhammad",
        category: "Protection",
        arabic: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
        transliteration: "Bismillahilladhi la yadurru ma'asmihi shay'un fil ardi wa la fis sama'i wa huwas samee'ul 'aleem",
        swahili: "Kwa jina la Allah ambaye kwa jina lake hakuna kitu kinacho dhuru katika ardhi wala mbinguni, Naye ni Mwenye kusikia, Mwenye kujua.",
        reference: "Sunan Abi Dawud 5088",
        source: "hadith"
    },
    {
        id: 102,
        prophet: "Muhammad",
        category: "Morning",
        arabic: "اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ",
        transliteration: "Allahumma bika asbahna, wa bika amsayna, wa bika nahya, wa bika namutu, wa ilaykan nushur",
        swahili: "Allahumma, kwa Wewe tumefika asubuhi, kwa Wewe tumefika jioni, kwa Wewe tuna ishi, kwa Wewe tunakufa, na kwako ndio kurudi.",
        reference: "Sunan Abi Dawud 5068",
        source: "hadith"
    },
    {
        id: 103,
        prophet: "Muhammad",
        category: "Evening",
        arabic: "اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ الْمَصِيرُ",
        transliteration: "Allahumma bika amsayna, wa bika asbahna, wa bika nahya, wa bika namutu, wa ilaykal masir",
        swahili: "Allahumma, kwa Wewe tumefika jioni, kwa Wewe tumefika asubuhi, kwa Wewe tuna ishi, kwa Wewe tunakufa, na kwako ndio marejeo.",
        reference: "Sunan Abi Dawud 5068",
        source: "hadith"
    },
    
    // ===== SLEEP DUAS =====
    {
        id: 104,
        prophet: "Muhammad",
        category: "Sleep",
        arabic: "اللَّهُمَّ بِاسْمِكَ أَمُوتُ وَأَحْيَا",
        transliteration: "Allahumma bismika amutu wa ahya",
        swahili: "Allahumma, kwa jina lako nafa na nakuwa hai.",
        reference: "Sahih al-Bukhari 6324",
        source: "hadith"
    },
    {
        id: 105,
        prophet: "Muhammad",
        category: "Sleep",
        arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا، وَكَفَانَا وَآوَانَا، فَكَمْ مِمَّنْ لَا كَافِيَ لَهُ وَلَا مُؤْوِيَ",
        transliteration: "Alhamdu lillahilladhi at'amana wa saqana, wa kafana wa awana, fakam mimman la kafiya lahu wa la mu'wi",
        swahili: "Alhamdulillah ambaye ametulisha na kutunywea, akatutosheleza na kutuhifadhi. Wengi wapo wasio na wa kuwatosheleza wala wa kuwahifadhi.",
        reference: "Sahih Muslim 2715",
        source: "hadith"
    },
    
    // ===== MORNING & EVENING =====
    {
        id: 106,
        prophet: "Muhammad",
        category: "Morning",
        arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا",
        transliteration: "Allahumma inni as'aluka 'ilman nafi'an, wa rizqan tayyiban, wa 'amalan mutaqabbalan",
        swahili: "Allahumma, nakuomba elimu inayo faa, riziki njema, na amala inayo kubalika.",
        reference: "Sunan Ibn Majah 925",
        source: "hadith"
    },
    
    // ===== PROTECTION DUAS =====
    {
        id: 107,
        prophet: "Muhammad",
        category: "Protection",
        arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْبُخْلِ وَالْجُبْنِ، وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ",
        transliteration: "Allahumma inni a'udhu bika minal hammi wal hazani, wal 'ajzi wal kasali, wal bukhli wal jubni, wa dala'id dayni wa ghalabatir rijal",
        swahili: "Allahumma, najikinga kwako na wasiwasi na huzuni, na unyonge na uvivu, na ubakhili na woga, na mzigo wa deni na kutawaliwa na watu.",
        reference: "Sahih al-Bukhari 6369",
        source: "hadith"
    },
    {
        id: 108,
        prophet: "Muhammad",
        category: "Protection",
        arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، وَمِنْ عَذَابِ النَّارِ، وَمِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ، وَمِنْ فِتْنَةِ الْمَسِيحِ الدَّجَّالِ",
        transliteration: "Allahumma inni a'udhu bika min 'adhabil qabri, wa min 'adhabin nar, wa min fitnatil mahya wal mamati, wa min fitnatil masihid dajjal",
        swahili: "Allahumma, najikinga kwako na adhabu ya kaburi, na adhabu ya moto, na fitna ya uhai na kifo, na fitna ya Masih Dajjal.",
        reference: "Sahih Muslim 588",
        source: "hadith"
    },
    
    // ===== RIZQ DUAS =====
    {
        id: 109,
        prophet: "Muhammad",
        category: "Rizq",
        arabic: "اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ، وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ",
        transliteration: "Allahummakfini bi halalika 'an haramika, wa aghnini bi fadlika 'amman siwaka",
        swahili: "Allahumma, nitosheleze na halali yako usiniache niingie kwenye haramu, na unitajirishe kwa fadhila zako usiniache nitegemee yeyote asiye kuwa Wewe.",
        reference: "Sunan al-Tirmidhi 3563",
        source: "hadith"
    },
    
    // ===== FORGIVENESS DUAS =====
    {
        id: 110,
        prophet: "Muhammad",
        category: "Forgiveness",
        arabic: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَٰهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ وَأَبُوءُ بِذَنْبِي، فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ",
        transliteration: "Allahumma anta rabbi la ilaha illa anta, khalaqtani wa ana 'abduka, wa ana 'ala 'ahdika wa wa'dika mastata'tu, a'udhu bika min sharri ma sana'tu, abu'u laka bini'matika 'alayya wa abu'u bidhanbi, faghfir li fa innahu la yaghfirudh dhunuba illa anta",
        swahili: "Allahumma, Wewe ni Mola wangu, hakuna mungu ila Wewe. Umeniumba nami ni mtumwa wako, nako kwenye ahadi yako kwa uwezo wangu. Najikinga kwako na ubaya wa nilio fanya. Ninakiri neema yako juu yangu na ninakiri dhambi yangu. Nisamehe, kwani hakuna anaye samehe dhambi isipokuwa Wewe.",
        reference: "Sahih al-Bukhari 6306",
        source: "hadith"
    },
    
    // ===== DISTRESS DUAS =====
    {
        id: 111,
        prophet: "Muhammad",
        category: "Distress",
        arabic: "لَا إِلَٰهَ إِلَّا اللَّهُ الْعَظِيمُ الْحَلِيمُ، لَا إِلَٰهَ إِلَّا اللَّهُ رَبُّ الْعَرْشِ الْعَظِيمِ، لَا إِلَٰهَ إِلَّا اللَّهُ رَبُّ السَّمَاوَاتِ وَرَبُّ الْأَرْضِ رَبُّ الْعَرْشِ الْكَرِيمِ",
        transliteration: "La ilaha illallahul 'azimul halim, la ilaha illallahu rabbul 'arshil 'azim, la ilaha illallahu rabbus samawati wa rabbul ardi rabbul 'arshil karim",
        swahili: "Hakuna mungu ila Allah, Mkuu, Mpole. Hakuna mungu ila Allah, Mola wa Kiti Enzi kikuu. Hakuna mungu ila Allah, Mola wa mbingu na ardhi, Mola wa Kiti Enzi kilicho chema.",
        reference: "Sahih al-Bukhari 6345",
        source: "hadith"
    },
    {
        id: 112,
        prophet: "Muhammad",
        category: "Distress",
        arabic: "اللَّهُمَّ رَحْمَتَكَ أَرْجُو فَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ، وَأَصْلِحْ لِي شَأْنِي كُلَّهُ، لَا إِلَٰهَ إِلَّا أَنْتَ",
        transliteration: "Allahumma rahmataka arju fala takilni ila nafsi tarfata 'aynin, wa aslih li sha'ni kullahu, la ilaha illa anta",
        swahili: "Allahumma, natumai rehema yako, usiniache kwa nafsi yangu hata kwa mwendo wa kufumba na kufumbua, na nirekebishie mambo yangu yote, hakuna mungu ila Wewe.",
        reference: "Sunan Abi Dawud 5090",
        source: "hadith"
    },
    
    // ===== TRAVEL DUAS =====
    {
        id: 113,
        prophet: "Muhammad",
        category: "Travel",
        arabic: "اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَٰذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ، وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ، اللَّهُمَّ إِنَّا نَسْأَلُكَ فِي سَفَرِنَا هَذَا الْبِرَّ وَالتَّقْوَى، وَمِنَ الْعَمَلِ مَا تَرْضَى، اللَّهُمَّ هَوِّنْ عَلَيْنَا سَفَرَنَا هَذَا، وَاطْوِ عَنَّا بُعْدَهُ، اللَّهُمَّ أَنْتَ الصَّاحِبُ فِي السَّفَرِ، وَالْخَلِيفَةُ فِي الْأَهْلِ، اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ وَعْثَاءِ السَّفَرِ، وَكَآبَةِ الْمَنْظَرِ، وَسُوءِ الْمُنْقَلَبِ فِي الْمَالِ وَالْأَهْلِ",
        transliteration: "Allahu akbar, Allahu akbar, Allahu akbar, subhanalladhi sakhkhara lana hadha wa ma kunna lahu muqrinin, wa inna ila rabbina lamunqalibun. Allahumma inna nas'aluka fi safarina hadhal birra wat taqwa, wa minal 'amali ma tarda. Allahumma hawwin 'alaina safarana hadha watwi 'anna bu'dah. Allahumma anta sahibu fis safari wal khalifatu fil ahli. Allahumma inni a'udhu bika min wa'thais safari wa ka'abatil manzari wa su'il munqalabi fil mali wal ahli",
        swahili: "Allahu Akbar (3x). Subhanallah ambaye ametuwezesha hiki, na hatunge weza wenyewe. Na hakika kwa Mola wetu tutarejea. Allahumma, tunakuomba katika safari yeta hii wema na taqwa, na amala unayo iridhia. Allahumma, tufanyie safari yeta hii iwe nyepesi, na ukunjie umbali wake. Allahumma, Wewe ni mwandani safarini, na mlinzi wa familia. Allahumma, najikinga kwako na taabu za safari, na mandhari ya kuhuzunisha, na kurudi vibaya kwa mali na familia.",
        reference: "Sahih Muslim 1342",
        source: "hadith"
    },
    
    // ===== ENTERING HOME =====
    {
        id: 114,
        prophet: "Muhammad",
        category: "Protection",
        arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ الْمَوْلِجِ وَخَيْرَ الْمَخْرَجِ، بِسْمِ اللَّهِ وَلَجْنَا، وَبِسْمِ اللَّهِ خَرَجْنَا، وَعَلَى اللَّهِ رَبِّنَا تَوَكَّلْنَا",
        transliteration: "Allahumma inni as'aluka khairal mauliji wa khairal makhraji, bismillahi walajna, wa bismillahi kharajna, wa 'alallahi rabbina tawakkalna",
        swahili: "Allahumma, nakuomba kheri ya kuingia na kheri ya kutoka. Kwa jina la Allah tuna ingia, kwa jina la Allah tuna toka, na kwa Allah Mola wetu tunategemea.",
        reference: "Sunan Abi Dawud 5096",
        source: "hadith"
    },
    
    // ===== EATING DUAS =====
    {
        id: 115,
        prophet: "Muhammad",
        category: "Eating",
        arabic: "اللَّهُمَّ بَارِكْ لَنَا فِيمَا رَزَقْتَنَا، وَقِنَا عَذَابَ النَّارِ، بِسْمِ اللَّهِ",
        transliteration: "Allahumma barik lana fima razaqtana, wa qina 'adhaban nar, bismillah",
        swahili: "Allahumma, bariki kwa tulicho pewa, na tukinge na adhabu ya moto. Bismillah.",
        reference: "Sahih al-Bukhari 5376",
        source: "hadith"
    },
    {
        id: 116,
        prophet: "Muhammad",
        category: "Eating",
        arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَٰذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ",
        transliteration: "Alhamdu lillahilladhi at'amani hadha wa razaqanihi min ghairi haulin minni wa la quwwah",
        swahili: "Alhamdulillah ambaye amenilisha hiki na akamiruzuku bila ya nguvu wala uweza wangu.",
        reference: "Sunan Abi Dawud 4023",
        source: "hadith"
    },
    
    // ===== AFTER PRAYER =====
    {
        id: 117,
        prophet: "Muhammad",
        category: "Prayer",
        arabic: "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ",
        transliteration: "Allahumma a'inne 'ala dhikrika wa shukrika wa husni 'ibadatika",
        swahili: "Allahumma, nisaidie kukukumbuka, kukushukuru, na kukuabudu vizuri.",
        reference: "Sunan Abi Dawud 1522",
        source: "hadith"
    },
    {
        id: 118,
        prophet: "Muhammad",
        category: "Forgiveness",
        arabic: "اللَّهُمَّ أَنْتَ السَّلَامُ، وَمِنْكَ السَّلَامُ، تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ",
        transliteration: "Allahumma antas salam, wa minkas salam, tabarakta ya dhal jalali wal ikram",
        swahili: "Allahumma, Wewe ni Salam, na kutoka kwako ni salam. Umebarikiwa, Ewe Mwenye Jalali na Ukarimu.",
        reference: "Sahih Muslim 591",
        source: "hadith"
    }
];

// Export
window.hadithDuas = hadithDuas;
console.log('✅ Hadith duas loaded:', hadithDuas.length);