const accessories = [
    {
        id: 1,
        name: "Берет \"Срібло\"",
        description: "Берет плетений спицями з тоненької сірої ниточки з люрексом. Аксесуар дуже легкий та додасть романтики у ваш образ.",
        images: [
            "../assets/img/beret_shalyk_09.jpg",
            "../assets/img/beret_shalyk_10.jpg"
        ],
        price: 200,
        link: '/accessories/beret_sriblo',
        category: "Аксесуари"
    },
    {
        id: 2,
        name: "Шалик та берет \"Світлий беж\"",
        description: "Берет та шалик, плетені спицями з тоненької бежевої ниточки з люрексом. Дуже м'які та пластичні. Набір гарно пасуватиме як до весняного, так і до осіннього образу, також підійде на теплу зиму.",
        images: [
            "../assets/img/beret_shalyk_01.jpg",
            "../assets/img/beret_shalyk_02.jpg",
            "../assets/img/beret_shalyk_03.jpg",
            "../assets/img/beret_shalyk_04.jpg",
            "../assets/img/beret_shalyk_05.jpg",
            "../assets/img/beret_shalyk_06.jpg",
            "../assets/img/beret_shalyk_07.jpg",
            "../assets/img/beret_shalyk_08.jpg"
        ],
        price: 550,
        link: '/accessories/shalyk_beret_svitlyi_bezh',
        category: "Аксесуари"
    },
    {
        id: 3,
        name: "Бактус \"Весняна зелень\"",
        description: "Виріб з напиленням весняного настрою - зелений пухнастий бактус. Плетений спицями з цікавої кольорової пряжі, можна носити і як шалик, і як хустку. Бактус має фактурне легке плетіння, тож чудово пасуватиме до демісезонних образів.",
        images: [
            "../assets/img/zelenyi_baktus_01.jpg",
            "../assets/img/zelenyi_baktus_02.jpg",
            "../assets/img/zelenyi_baktus_03.jpg",
            "../assets/img/zelenyi_baktus_04.jpg",
            "../assets/img/zelenyi_baktus_05.jpg"
        ],
        price: 350,
        link: '/accessories/baktus_vesniana_zelen',
        category: "Аксесуари"
    },
    {
        id: 4,
        name: "Мітенки \"Оливкові коси\"",
        description: "Мітенки теплого оливкового кольору - плетені вручну з акрилової пряжі. Дуже м'які та приємні на дотик. Фактурні плетені коси прикрасять будь-який образ.",
        images: [
            "../assets/img/mitenky_olyvkovi_kosy_01.jpg",
            "../assets/img/mitenky_olyvkovi_kosy_02.jpg",
            "../assets/img/mitenky_olyvkovi_kosy_03.jpg",
            "../assets/img/mitenky_olyvkovi_kosy_04.jpg",
            "../assets/img/mitenky_olyvkovi_kosy_05.jpg"
        ],
        price: 180,
        link: '/accessories/mitenky_olyvkovi_kosy',
        category: "Аксесуари"
    },
    {
        id: 5,
        name: "Мітенки \"Фактурні сови\"",
        description: "Ці мітенки є найпопулярнішими серед моїх замовників. Сама ношу такі, але темно-зелені. Мітенки плетені вручну, мають два нашитих круглих гудзика-ока. М'якенькі, оригінальні, приємні на дотик і пасуватимуть під будь-яку куртку чи пальто.",
        images: [
            "../assets/img/mitenky_fakturni_sovy_01.jpg",
            "../assets/img/mitenky_fakturni_sovy_02.jpg",
            "../assets/img/mitenky_fakturni_sovy_03.jpg",
            "../assets/img/mitenky_fakturni_sovy_04.jpg",
            "../assets/img/mitenky_fakturni_sovy_05.jpg"
        ],
        price: 250,
        link: '/accessories/mitenky_fakturni_sovy',
        category: "Аксесуари"
    },
    {
        id: 6,
        name: "Рукавиці чоловічі \"Сірі коси\"",
        description: "Вовняні чоловічі рукавиці - до вашої уваги. Саме такі рукавиці у мого чоловіка, тож виріб проходить тестування і активно використовується. Рукавиці плетені спицями, з пряжі, що містить великий відсоток вовни, але не є кусючою, тепла та приємна на дотик. Ниточка - меланжева, сіро-синюватого відтінку. Рукавиці мають отвір для вказівного пальця та не закритий верх великого пальця. Щоб можна було користуватись мобільним телефоном, не знімаючи рукавичку.",
        images: [
            "../assets/img/rukavytsi_cholovichi_siri_01.jpg",
            "../assets/img/rukavytsi_cholovichi_siri_02.jpg",
            "../assets/img/rukavytsi_cholovichi_siri_03.jpg",
            "../assets/img/rukavytsi_cholovichi_siri_04.jpg",
            "../assets/img/rukavytsi_cholovichi_siri_05.jpg",
            "../assets/img/rukavytsi_cholovichi_siri_06.jpg",
            "../assets/img/rukavytsi_cholovichi_siri_07.jpg",
            "../assets/img/rukavytsi_cholovichi_siri_08.jpg"
        ],
        price: 300,
        link: '/accessories/rukavytsi_siri_kosy',
        category: "Аксесуари"
    },
    {
        id: 7,
        name: "Рукавиці для мобільного \"Блакитно-жовтий меланж\"",
        description: "Рукавички плетені спицями вручну з пряжі зі значним вмістом вовни. Містять приємне поєднання пастельних відтінків блакитного, сірого, синього та жовтуватого. Рукавички мають не закриті великі пальці та отвори для вказівних пальців, для зручнішого користування мобільним в холодну погоду.",
        images: [
            "../assets/img/rukavytsi_mobilnogo_smugasti_01.jpg",
            "../assets/img/rukavytsi_mobilnogo_smugasti_02.jpg",
            "../assets/img/rukavytsi_mobilnogo_smugasti_03.jpg",
            "../assets/img/rukavytsi_mobilnogo_smugasti_04.jpg",
            "../assets/img/rukavytsi_mobilnogo_smugasti_05.jpg",
            "../assets/img/rukavytsi_mobilnogo_smugasti_06.jpg",
            "../assets/img/rukavytsi_mobilnogo_smugasti_07.jpg"
        ],
        price: 300,
        link: '/accessories/rukavytsi_siri_kosy',
        category: "Аксесуари"
    },
    {
        id: 8,
        name: "Мітенки \"Сніжна блакить\"",
        description: "Мітенки плетені вручну з акрилової блакитної пряжі. Мають виплетені спицями коси та нашиті дерев'яні ґудзики-сніжинки. Мітенки дуже м'які та приємні на дотик, пасуватимуть до ніжного зимового образу.",
        images: [
            "../assets/img/mitenky_snizhna_blakyt_01.jpg",
            "../assets/img/mitenky_snizhna_blakyt_02.jpg",
            "../assets/img/mitenky_snizhna_blakyt_03.jpg",
            "../assets/img/mitenky_snizhna_blakyt_04.jpg",
            "../assets/img/mitenky_snizhna_blakyt_05.jpg",
            "../assets/img/mitenky_snizhna_blakyt_06.jpg"
        ],
        price: 250,
        link: '/accessories/mitenky_snizhna_blakyt',
        category: "Аксесуари"
    },
    {
        id: 9,
        name: "Мітенки \"Фіолетовий меланж\"",
        description: "Мітенки плетені вручну з акрилової меланжевої пряжі бузково-рожевого відтінку. Мають виплетені спицями коси та нашиті дерев'яні ґудзики з намальованими на них сніжинками. Мітенки дуже м'які та приємні на дотик, пасуватимуть до ніжного зимового образу.",
        images: [
            "../assets/img/mitenky_fioletovyi_melanzh_01.jpg",
            "../assets/img/mitenky_fioletovyi_melanzh_02.jpg",
            "../assets/img/mitenky_fioletovyi_melanzh_03.jpg",
            "../assets/img/mitenky_fioletovyi_melanzh_04.jpg",
            "../assets/img/mitenky_fioletovyi_melanzh_05.jpg"
        ],
        price: 250,
        link: '/accessories/mitenky_fioletovyi_melanzh',
        category: "Аксесуари"
    },
    {
        id: 10,
        name: "Мітенки \"Сніжинки\"",
        description: "Мітенки плетені вручну з акрилової меланжевої пряжі бузково-рожевого відтінку. Мають виплетені спицями коси та нашиті дерев'яні ґудзики з намальованими на них сніжинками. Мітенки дуже м'які та приємні на дотик, пасуватимуть до ніжного зимового образу.",
        images: [
            "../assets/img/mitenky_snizhynky_01.jpg",
            "../assets/img/mitenky_snizhynky_02.jpg",
            "../assets/img/mitenky_snizhynky_03.jpg"
        ],
        price: 250,
        link: '/accessories/mitenky_snizhynky',
        category: "Аксесуари"
    },
    {
        id: 11,
        name: "Мітенки \"Сніжне золото\"",
        description: "Мітенки плетені вручну з акрилової меланжевої пряжі з вкрапленнями золотого люрексу. Мають виплетені спицями коси та нашиті дерев'яні ґудзики-сніжинки. Мітенки дуже м'які та приємні на дотик, пасуватимуть до ніжного зимового образу.",
        images: [
            "../assets/img/mitenky_snizhne_zoloto_01.jpg",
            "../assets/img/mitenky_snizhne_zoloto_02.jpg",
            "../assets/img/mitenky_snizhne_zoloto_03.jpg",
            "../assets/img/mitenky_snizhne_zoloto_04.jpg",
            "../assets/img/mitenky_snizhne_zoloto_05.jpg"
        ],
        price: 250,
        link: '/accessories/mitenky_snizhne_zoloto',
        category: "Аксесуари"
    },
    {
        id: 12,
        name: "Мітенки \"Три троянди\"",
        description: "Мітенки плетені вручну з акрилової м'якої пряжі. Мають ручну вишивку - квіти. Пряжа, з якої виконано аксесуар - меланжева, в одній нитці поєднано блакитну, білу та сірувату ниточки.",
        images: [
            "../assets/img/mitenky_try_troyandy_01.jpg",
            "../assets/img/mitenky_try_troyandy_02.jpg",
            "../assets/img/mitenky_try_troyandy_03.jpg",
            "../assets/img/mitenky_try_troyandy_04.jpg"
        ],
        price: 300,
        link: '/accessories/mitenky_try_troyandy',
        category: "Аксесуари"
    },
    {
        id: 13,
        name: "Мітенки \"Пухнастики\"",
        description: "Рукавички плетені вручну з дууже м'якої меланжевої пряжі з ворсом. Здалеку здаються білими, але насправді містять в собі дуже багато кольорьорових петельок та різноманітних фактур. Пухнасті, святкові та готові стати чудовим подарунком вам або вашим близьким.",
        images: [
            "../assets/img/rukavytsi_bili_puhnasti_01.jpg",
            "../assets/img/rukavytsi_bili_puhnasti_02.jpg",
            "../assets/img/rukavytsi_bili_puhnasti_03.jpg",
            "../assets/img/rukavytsi_bili_puhnasti_04.jpg",
            "../assets/img/rukavytsi_bili_puhnasti_05.jpg"
        ],
        price: 270,
        link: '/accessories/rukavytsi_pukhnastyky',
        category: "Аксесуари"
    },
    {
        id: 14,
        name: "Мітенки \"Жакард\"",
        description: "Рукавички плетені вручну цікавим жакардовим плетінням. Виконані з акрилової пряжі молочного та бузкового меланжу. Виріб приємний на дотик, теплий та не кусючий. Пасуватиме як до курти, так і до пальта.",
        images: [
            "../assets/img/rukavychky_zhakard_01.jpg",
            "../assets/img/rukavychky_zhakard_02.jpg",
            "../assets/img/rukavychky_zhakard_03.jpg",
            "../assets/img/rukavychky_zhakard_04.jpg",
            "../assets/img/rukavychky_zhakard_05.jpg"
        ],
        price: 270,
        link: '/accessories/rukavytsi_zhakard',
        category: "Аксесуари"
    }
]

export default accessories