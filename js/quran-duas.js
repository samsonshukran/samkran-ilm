// ===== QUR'ANIC DUAS =====
// Duas directly from the Holy Qur'an
// Organized by Prophet and Category

const quranDuas = [
    // ===== PROPHET ADAM (AS) =====
    {
        id: 1,
        prophet: "Adam",
        category: "Repentance",
        arabic: "رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ",
        transliteration: "Rabbana zalamna anfusana wa in lam taghfir lana wa tarhamna lanakoonanna minal khasireen",
        swahili: "Mola wetu! Tumejidhulumu nafsi zetu. Na usipotusamehe na kuturehemu, hakika tutakuwa miongoni mwa walio hasiriwa.",
        reference: "Qur'an 7:23",
        source: "quran"
    },
    
    // ===== PROPHET NUH (AS) =====
    {
        id: 2,
        prophet: "Nuh",
        category: "Forgiveness",
        arabic: "رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَلِمَن دَخَلَ بَيْتِيَ مُؤْمِنًا وَلِلْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ",
        transliteration: "Rabbighfir li wa liwalidayya wa liman dakhala baytiya mu'minan wa lil mu'mineena wal mu'minat",
        swahili: "Mola wangu! Nisamehe mimi na wazazi wangu, na yeyote anaye ingia nyumbani kwangu akiwa Muumini, na Waumini wote wanaume na wanawake.",
        reference: "Qur'an 71:28",
        source: "quran"
    },
    
    // ===== PROPHET IBRAHIM (AS) =====
    {
        id: 3,
        prophet: "Ibrahim",
        category: "Guidance",
        arabic: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا",
        transliteration: "Rabbana hab lana min azwajina wa dhurriyatina qurrata a'yunin waj'alna lil mutaqeena imama",
        swahili: "Mola wetu! Tujalie kutoka kwa wake zetu na dhuria zetu furaha ya macho, na tujaalie tuwe waongozi kwa wachamungu.",
        reference: "Qur'an 25:74",
        source: "quran"
    },
    {
        id: 4,
        prophet: "Ibrahim",
        category: "Rizq",
        arabic: "رَبَّنَا تَقَبَّلْ مِنَّا ۖ إِنَّكَ أَنتَ السَّمِيعُ الْعَلِيمُ",
        transliteration: "Rabbana taqabbal minna innaka antas samee'ul 'aleem",
        swahili: "Mola wetu! Kubali kutoka kwetu. Hakika Wewe ndiye Mwenye kusikia, Mwenye kujua.",
        reference: "Qur'an 2:127",
        source: "quran"
    },
    {
        id: 5,
        prophet: "Ibrahim",
        category: "Protection",
        arabic: "رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِن ذُرِّيَّتِي ۚ رَبَّنَا وَتَقَبَّلْ دُعَاءِ",
        transliteration: "Rabbij 'alni muqeemas salati wa min dhurriyati rabbana wa taqabbal du'a",
        swahili: "Mola wangu! Nijaalie mimi na dhuria zetu tushike Sala. Mola wetu! Ukubali maombi yangu.",
        reference: "Qur'an 14:40",
        source: "quran"
    },
    
    // ===== PROPHET MUSA (AS) =====
    {
        id: 6,
        prophet: "Musa",
        category: "Rizq",
        arabic: "رَبِّ إِنِّي لِمَا أَنزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ",
        transliteration: "Rabbi inni lima anzalta ilayya min khairin faqeer",
        swahili: "Mola wangu! Hakika mimi nina haja ya kheri unayo niteremshia.",
        reference: "Qur'an 28:24",
        source: "quran"
    },
    {
        id: 7,
        prophet: "Musa",
        category: "Confidence",
        arabic: "رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي",
        transliteration: "Rabishrah li sadri wa yassir li amri",
        swahili: "Mola wangu! Nifungulie kifua changu, na unyanyachie kazi yangu.",
        reference: "Qur'an 20:25-26",
        source: "quran"
    },
    
    // ===== PROPHET YUNUS (AS) =====
    {
        id: 8,
        prophet: "Yunus",
        category: "Distress",
        arabic: "لَّا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ",
        transliteration: "La ilaha illa anta subhanaka inni kuntu minaz zalimeen",
        swahili: "Hapana mungu isipokuwa Wewe. Subhanaka! Hakika mimi nilikuwa miongoni mwa walio dhulumu.",
        reference: "Qur'an 21:87",
        source: "quran"
    },
    
    // ===== PROPHET AYYUB (AS) =====
    {
        id: 9,
        prophet: "Ayyub",
        category: "Patience",
        arabic: "أَنِّي مَسَّنِيَ الضُّرُّ وَأَنتَ أَرْحَمُ الرَّاحِمِينَ",
        transliteration: "Anni massaniyad durru wa anta arhamur rahimeen",
        swahili: "Hakika nimesumbuliwa na shida, na Wewe ndiye Mwenye kurehemu kuliko wote wenye kurehemu.",
        reference: "Qur'an 21:83",
        source: "quran"
    },
    
    // ===== PROPHET SULAIMAN (AS) =====
    {
        id: 10,
        prophet: "Sulaiman",
        category: "Gratitude",
        arabic: "رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ وَعَلَىٰ وَالِدَيَّ وَأَنْ أَعْمَلَ صَالِحًا تَرْضَاهُ",
        transliteration: "Rabbi awzi'ni an ashkura ni'matakallati an'amta 'alayya wa 'ala walidayya wa an a'mala salihan tardah",
        swahili: "Mola wangu! Nijaalie nishukuru neema zako ulizo neneemesha mimi na wazazi wangu, na nitende mema uyayo ridhia.",
        reference: "Qur'an 27:19",
        source: "quran"
    },
    
    // ===== GENERAL DUAS =====
    {
        id: 11,
        prophet: "General",
        category: "Forgiveness",
        arabic: "رَبَّنَا اغْفِرْ لَنَا ذُنُوبَنَا وَإِسْرَافَنَا فِي أَمْرِنَا",
        transliteration: "Rabbana ighfir lana dhunoobana wa israfana fi amrina",
        swahili: "Mola wetu! Tusamehe dhambi zetu na utupuzaji wetu katika mambo yetu.",
        reference: "Qur'an 3:147",
        source: "quran"
    },
    {
        id: 12,
        prophet: "General",
        category: "Protection",
        arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
        transliteration: "Rabbana atina fid dunya hasanatan wa fil akhirati hasanatan wa qina 'adhaban nar",
        swahili: "Mola wetu! Tupe duniani hasana na akhera hasana, na tukinge na adhabu ya moto.",
        reference: "Qur'an 2:201",
        source: "quran"
    },
    {
        id: 13,
        prophet: "General",
        category: "Patience",
        arabic: "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا",
        transliteration: "Rabbana afrigh 'alaina sabran wa thabbit aqdamana",
        swahili: "Mola wetu! Tumiminie subira na turegeze miguu yetu.",
        reference: "Qur'an 2:250",
        source: "quran"
    }
];

// Export
window.quranDuas = quranDuas;
console.log('✅ Quranic duas loaded:', quranDuas.length);