const pillows = [
    {
        id: 1,
        name: 'Мінімалізм і рожеві лапки',
        description:
            'Перше, що милує наше око в котиках - силует, хвіст і вушка. Друге - деталі, а часто - подушечки лапок. Тож, найголовніше в цьому подуху присутнє. Прошу купувати і класти на ліжечко.',
        materials: 'Матеріали: акрил (пряжа), холофайбер (наповнення). Плетіння: спиці та гачок.',
        dimensions: 'Розміри: 32/33/15см.',
        images: [
            'minimalistychnyi_01.jpg',
            'minimalistychnyi_02.jpg',
            'minimalistychnyi_03.jpg',
            'minimalistychnyi_04.jpg',
            'minimalistychnyi_05.jpg',
            'minimalistychnyi_06.jpg',
            'minimalistychnyi_07.jpg',
            'minimalistychnyi_08.jpg',
        ],
        price: 550,
        link: 'minimalizm_lapky',
        category: 'Подушки',
    },
    {
        id: 6,
        name: 'Синьо-бежевий меланж',
        description:
            'Часто можна зустріти словосполучення "синій кит" але зовсім рідко "синій кіт". Коти можуть бути будь-якого кольору, якщо вони котоподушки, тож, чого б не синій? Неймовірно гарне ручне плетіння поєднало в собі темно-синю та молочно-бежеву пряжі через кольорову меланжеву розтяжку, і з\'явився чудовий та фактурний котик. Лишень придивіться до цього рукотворного полотна - так і хочеться його торкнутись! Мордочка нашита вишита вручну, а лапки м\'якенькі та рухомі.',
        materials: 'Матеріали: холофайбер (наповнення).',
        dimensions: 'Розмір: 32/32/13см.',
        images: [
            'synio-bezhevyi_melanzh_01.jpg',
            'synio-bezhevyi_melanzh_02.jpg',
            'synio-bezhevyi_melanzh_03.jpg',
            'synio-bezhevyi_melanzh_04.jpg',
            'synio-bezhevyi_melanzh_05.jpg',
            'synio-bezhevyi_melanzh_06.jpg',
            'synio-bezhevyi_melanzh_07.jpg',
            'synio-bezhevyi_melanzh_08.jpg',
        ],
        price: 650,
        link: 'synio_bezhevyi_melanzh',
        category: 'Подушки',
    },
    {
        id: 12,
        name: 'Піаніно',
        description:
            "Подушка-піаніно створена не лише для поціновувачів музики, а й для любителів смужок, монохрому та геометричних орнаментів. Виріб плетено вручну спицями з акрилової пряжі. Подушка дуже м'яка та приємна на дотик.",
        materials: 'Матеріали: холофайбер (наповнення).',
        dimensions: 'Розміри: 43/30/13см.',
        images: [
            'pianino_01.jpg',
            'pianino_02.jpg',
            'pianino_03.jpg',
            'pianino_04.jpg',
            'pianino_05.jpg',
            'pianino_06.jpg',
        ],
        price: 400,
        link: 'pianino',
        category: 'Подушки',
        similar: [
            {
                img: 'metelyky_01.jpg',
                price: 400,
                link: 'metelyk_syni_smuzhky',
            },
            {
                img: 'metelyky_05.jpg',
                price: 400,
                link: 'metelyk_chervoni_smuzhky',
            },
        ],
    },
    {
        id: 13,
        name: 'Родинне дерево',
        description:
            'Подушка "Родинне дерево" - одна з небагатьох в наявності подушок, з яких можна знімати для прання плетену частину. Цьому плюсу в догляді сприяє проста квадратна форма виробу. Подушка плетена спицями, має з одного боку орнамент фактурних дерев, а з іншого - просто геомертичний орнамент. Плетена частина має застібку-блискавку. В середині - бавовняна подушка, наповнена холофайбером. Легенька, м\'яка та нейтрального кольору, подушка чудово пасуватиме до будь-якого інтер\'єру.',
        dimensions: 'Розміри: менша 29/29/11см, більша 33/32/12см.',
        images: [
            'rodynne_derevo_01.jpg',
            'rodynne_derevo_02.jpg',
            'rodynne_derevo_03.jpg',
            'rodynne_derevo_04.jpg',
            'rodynne_derevo_05.jpg',
            'rodynne_derevo_06.jpg',
            'rodynne_derevo_07.jpg',
            'rodynne_derevo_08.jpg',
        ],
        price: 700,
        link: 'rodynne_derevo',
        category: 'Подушки',
    },
    {
        id: 17,
        name: 'Сіра меланжева мишка',
        description:
            "Супермінімалістична, але від цього геть не гірша! М'якенька та легенька мишоподушка відрізняється від овальних подушок лише наявністю вушок та хвостика, і в цьому її родзинка. Виріб плетений спицями з акрилової пряжі, має вишиті очі та носик та гіпоалергенний наповнювач.",
        dimensions: 'Розміри: 38/28/12см.',
        images: [
            'sira_melanzheva_myshka_01.jpg',
            'sira_melanzheva_myshka_02.jpg',
            'sira_melanzheva_myshka_03.jpg',
            'sira_melanzheva_myshka_04.jpg',
        ],
        price: 400,
        link: 'sira_melanzheva_myshka',
        category: 'Подушки',
        similar: [
            {
                img: 'sira_bukliovana_myshka_01.jpg',
                price: 400,
                link: 'sira_bukliovana_myshka',
            },
        ],
    },
    {
        id: 18,
        name: 'Сіра букльована мишка',
        description:
            "Супермінімалістична, але від цього геть не гірша! М'якенька та легенька мишоподушка відрізняється від овальних подушок лише наявністю вушок та хвостика, і в цьому її родзинка. Виріб плетений спицями з акрилової пряжі, має вишиті очі та носик та гіпоалергенний наповнювач.",
        dimensions: 'Розміри: 36/23/12см.',
        images: ['sira_bukliovana_myshka_01.jpg', 'sira_bukliovana_myshka_02.jpg', 'sira_bukliovana_myshka_03.jpg'],
        price: 400,
        link: 'sira_bukliovana_myshka',
        category: 'Подушки',
        similar: [
            {
                img: 'sira_melanzheva_myshka_01.jpg',
                price: 400,
                link: 'sira_melanzheva_myshka',
            },
        ],
    },
    {
        id: 19,
        name: 'Метелик з синіми смужками',
        description:
            "Смужка завжди на часі. Хочу познайомити вас з таким вараінтом подушки, як метелик. Подушка за формою метелика до сорочки, але дуже м'яка, плетена, смугаста та для вашого дивану. Ця модель подушки є поєднанням молочного і синього кольорів.",
        materials: 'Матеріали: акрил (пряжа), холофайбер (наповнення).',
        dimensions: 'Розміри: 46/27/12см.',
        images: ['metelyky_01.jpg', 'metelyky_02.jpg', 'metelyky_03.jpg', 'metelyky_04.jpg'],
        price: 400,
        link: 'metelyk_syni_smuzhky',
        category: 'Подушки',
        similar: [
            {
                img: 'metelyky_05.jpg',
                price: 400,
                link: 'metelyk_chervoni_smuzhky',
            },
            {
                img: 'pianino_01.jpg',
                price: 400,
                link: 'pianino',
            },
        ],
    },
    {
        id: 20,
        name: 'Метелик з червоними смужками',
        description:
            "Смужка завжди на часі. Хочу познайомити вас з таким вараінтом подушки, як метелик. Подушка за формою метелика до сорочки, але дуже м'яка, плетена, смугаста та для вашого дивану. Ця модель подушки є поєднанням молочного і червоного кольорів.",
        materials: 'Матеріали: акрил (пряжа), холофайбер (наповнення).',
        dimensions: 'Розміри: 46/27/12см.',
        images: ['metelyky_05.jpg', 'metelyky_06.jpg', 'metelyky_07.jpg', 'metelyky_08.jpg'],
        price: 400,
        link: 'metelyk_chervoni_smuzhky',
        category: 'Подушки',
        similar: [
            {
                img: 'metelyky_01.jpg',
                price: 400,
                link: 'metelyk_syni_smuzhky',
            },
            {
                img: 'pianino_01.jpg',
                price: 400,
                link: 'pianino',
            },
        ],
    },
    {
        id: 23,
        name: 'Синьо-рожевий кит',
        description:
            'Це один з двох неплетених виробів у "Плетеному КоТі". Якось я знайшла серед тканин, що залишились від пошиття одягу та іграшок на замовлення, кілька видів бавовняного вельвету та бавовняну заквітчану фланель. З них мені побачились сплячі кити. І я їх пошила. Наповнення, як і у плетених подушок - холофайбер, а тканини на 100% натуральні.',
        dimensions: 'Розміри: 56/26/14см.',
        images: [
            'synio_rozhevyi_kyt_02.jpg',
            'synio_rozhevyi_kyt_01.jpg',
            'synio_rozhevyi_kyt_03.jpg',
            'synio_rozhevyi_kyt_04.jpg',
            'synio_rozhevyi_kyt_05.jpg',
        ],
        price: 350,
        link: 'synio_rozhevyi_kyt',
        category: 'Подушки',
    },
    {
        id: 24,
        name: 'Рожевий зайчик',
        description:
            "Знайомтесь - зайцеподух! Дуже м'якенький, неймовірно рожевий та трошки довговухий! Подушку-іграшку плетено та пошито повністю вручну. Зайчика виконано за допомогою поєднання молочної акрилової пряжі та меланжевої (біла+рожева нитка) пряжі. Виріб дуже м'який та приємний на дотик. Має гіпоалергенне наповнення холофайбер. Вишита вручну мила мордочка нікого не залишить байдужим, тож виріб чудово підійде на подарунок.",
        materials: 'Матеріали: акрил (пряжа), холофайбер (наповнення).',
        dimensions: 'Розміри: 32/25/12см.',
        images: ['rozhevyi_zaichyk_03.jpg', 'rozhevyi_zaichyk_04.jpg'],
        price: 600,
        link: 'rozhevyi_zaichyk',
        category: 'Подушки',
    },
    {
        id: 25,
        name: 'Бірюзова зірка',
        description:
            "Останніми роками цей колір здобув величезної популярності. Одяг, аксесуари, посуд та деталі інтер'єру бірюзового кольору можна зустріти часто, але ми не думаємо, що бірюзового буває забагто, тож ніщо не спинило Плетеного КоТа додати в свої товари бірюзову зірочку-подушку. Гладенька меланжева пряжа та лаконічний силует - завжди доречні в інтер'єрі. Тож така подушка прикрасить собою будь-яку оселю.",
        materials: 'Матеріали: акрил (пряжа), холофайбер (наповнення).',
        dimensions: 'Розмір: 46/12см.',
        images: [
            'biryuzova_zirka_01.jpg',
            'biryuzova_zirka_02.jpg',
            'biryuzova_zirka_03.jpg',
            'biryuzova_zirka_04.jpg',
            'biryuzova_zirka_05.jpg',
        ],
        price: 500,
        link: 'biryuzova_zirka',
        category: 'Подушки',
        similar: [
            {
                img: 'buzkova_zirka_01.jpg',
                price: 500,
                link: 'buzkova_zirka',
            },
            {
                img: 'bila_zirka_01.jpg',
                price: 500,
                link: 'bila_zirka',
            },
        ],
    },
    {
        id: 27,
        name: 'Бузкова зірка',
        description:
            "Пастельні світлі відтінки - завжди доречні, а світло-бузковий колір і досі в трендах. Плетена вручну подушка-зірка прикрасить собою будь-який диван чи ліжечко. Подушка дуже м'яка та приємна на дотик, виконана з цікавої меланжевох пряжі, тож не є нудною та однотонною. Виріб цікаво не лише обіймати та підкладати під голову, а й - розглядати.",
        materials: 'Матеріали: акрил (пряжа), холофайбер (наповнення).',
        dimensions: 'Розмір: 48/12см.',
        images: ['buzkova_zirka_01.jpg', 'buzkova_zirka_02.jpg', 'buzkova_zirka_03.jpg', 'buzkova_zirka_04.jpg'],
        price: 500,
        link: 'buzkova_zirka',
        category: 'Подушки',
        similar: [
            {
                img: 'biryuzova_zirka_01.jpg',
                price: 500,
                link: 'biryuzova_zirka',
            },
            {
                img: 'bila_zirka_01.jpg',
                price: 500,
                link: 'bila_zirka',
            },
        ],
    },
    {
        id: 28,
        name: 'Котосилует',
        description:
            'Мінімалізм в тренді, тож ця модель котоПодушки як ніколи на часі! Плетений вручну з гарної меланжевої пряжі - котоподух має неймовірний вигляд та супер-приємний на дотик.',
        materials: 'Матеріали: акрил (пряжа), холофайбер (наповнення).',
        dimensions: 'Розмір: 46/33/15см.',
        images: [
            'kotosyluet_01.jpg',
            'kotosyluet_02.jpg',
            'kotosyluet_03.jpg',
            'kotosyluet_04.jpg',
            'kotosyluet_05.jpg',
        ],
        price: 700,
        link: 'kotosyluet',
        category: 'Подушки',
        similar: [
            {
                img: 'kit-zhovta-smuzhka-01.jpg',
                price: 700,
                link: 'kit-zhovta-smuzhka',
            },
        ]
    },
    {
        id: 30,
        name: 'Біла зірка',
        description:
            "Якщо зірочку з неба - то велику і гарну, як ця подушка! Неймовірно м'яка букльована меланжева пряжа та дуже приємні кольори. Така подушка пасуватиме як до світлого, так і до темного інтер'єру.",
        materials: 'Матеріали: акрил (пряжа), холофайбер (наповнення).',
        dimensions: 'Розмір: 50/13см.',
        images: [
            'bila_zirka_01.jpg',
            'bila_zirka_02.jpg',
            'bila_zirka_03.jpg',
            'bila_zirka_04.jpg',
            'bila_zirka_05.jpg',
        ],
        price: 500,
        link: 'bila_zirka',
        category: 'Подушки',
        similar: [
            {
                img: 'biryuzova_zirka_01.jpg',
                price: 500,
                link: 'biryuzova_zirka',
            },
            {
                img: 'buzkova_zirka_01.jpg',
                price: 500,
                link: 'buzkova_zirka',
            },
        ],
    },
    {
        id: 39,
        name: 'Жовтий пес з блакитним метеликом',
        description:
            'Любите песиків? Тоді цей м‘якенький та жовтенький песоПодух для вас. Ручне плетіння і пошиття, приємна неколюча пряжа, гіпоалергенний наповнювач. Песик-подушка має милу вишиту посмішку, рухомі вушка, лапки та метелик',
        materials: 'Матеріали: акрил (пряжа), холофайбер (наповнювач).',
        dimensions: 'Розмір: 36/27/12см без урахування лап і хвоста.',
        images: [
            'zhovtyi-pes-blakytnyi-metelyk-01.jpg',
            'zhovtyi-pes-blakytnyi-metelyk-02.jpg',
            'zhovtyi-pes-blakytnyi-metelyk-03.jpg',
            'zhovtyi-pes-blakytnyi-metelyk-04.jpg',
            'zhovtyi-pes-blakytnyi-metelyk-05.jpg',
            'zhovtyi-pes-blakytnyi-metelyk-06.jpg',
        ],
        price: 750,
        link: 'zhovtyi-pes-blakytnyi-metelyk',
        category: 'Подушки',
    },
    {
        id: 40,
        name: 'Подушка-гора',
        description:
            "Гори - одне з найкращих місць на планеті! Тож, для тих, хто обожнює гори і хоче їх бачити навіть на власному ліжку чи дивані ми сплели і пошили подушку-гору. Велика, м'яка, поєднує в собі різні фактури пряжі, що робить її щебільш схожим на засніжений схил.",
        materials: 'Матеріали: акрил (пряжа), холофайбер (наповнювач).',
        dimensions: 'Розмір: 47/39/16см.',
        images: [
            'hora-01.jpg',
            'hora-02.jpg',
            'hora-03.jpg',
            'hora-04.jpg',
            'hora-05.jpg',
            'hora-06.jpg',
            'hora-07.jpg',
        ],
        price: 800,
        link: 'hora',
        category: 'Подушки',
    },
    {
        id: 45,
        name: 'Щокастик рудий',
        description:
            "Білі щічки - одна з найсимпатичніших деатлей цього котика, але, якщо придивитись, таких деталей - купа. Гарні вушка, цікавий меланжевий рудуватий відтінок та м'якенька ниточка, пухкенькі лапки - все ручної роботи і все це готово їхати та прикрашати вашу оселю.",
        materials: 'Матеріали: акрил (пряжа), пластик (очі), холофайбер (наповнювач).',
        dimensions: 'Розмір: 45/29/18см.',
        images: [
            'schokastyk-rudyi-01.jpg',
            'schokastyk-rudyi-02.jpg',
            'schokastyk-rudyi-03.jpg',
            'schokastyk-rudyi-04.jpg',
            'schokastyk-rudyi-05.jpg',
        ],
        price: 900,
        link: 'schokastyk-rudyi',
        category: 'Подушки',
        similar: [
            {
                img: 'schokastyk-siryi-01.jpg',
                price: 900,
                link: 'schokastyk-siryi',
            },
            {
                img: 'lymonnyi-schokastyk-01.jpg',
                price: 900,
                link: 'schokastyk-lymonnyi',
            },
        ],
    },
    {
        id: 46,
        name: 'Щокастик сірий',
        description:
            "Білі щічки - одна з найсимпатичніших деатлей цього котика, але, якщо придивитись, таких деталей - купа. Гарні вушка, цікавий меланжевий синьо-бежевий відтінок та м'якенька пухнаста ниточка, пухкенькі лапки - все ручної роботи і все це готово їхати та прикрашати вашу оселю.",
        materials: 'Матеріали: акрил (пряжа), пластик (очі), холофайбер (наповнювач).',
        dimensions: 'Розмір: 48/30/16см.',
        images: [
            'schokastyk-siryi-01.jpg',
            'schokastyk-siryi-02.jpg',
            'schokastyk-siryi-03.jpg',
            'schokastyk-siryi-04.jpg',
            'schokastyk-siryi-05.jpg',
            'schokastyk-siryi-06.jpg',
        ],
        price: 900,
        link: 'schokastyk-siryi',
        category: 'Подушки',
        similar: [
            {
                img: 'schokastyk-rudyi-01.jpg',
                price: 900,
                link: 'schokastyk-rudyi',
            },
            {
                img: 'lymonnyi-schokastyk-01.jpg',
                price: 900,
                link: 'schokastyk-lymonnyi',
            },
        ],
    },
    {
        id: 47,
        name: 'Щокастик лимонний',
        description:
            "Білі щічки - одна з найсимпатичніших деатлей цього котика, але, якщо придивитись, таких деталей - купа. Гарні вушка, цікавий меланжевий градієнт плетіння - від лимонного до чорного, приємна пряжа та пухкенькі лапки. Все - ручної роботи і все це готово їхати та прикрашати вашу оселю.",
        materials: 'Матеріали: акрил (пряжа), пластик (очі), холофайбер (наповнювач).',
        dimensions: 'Розмір: 47/30/17см.',
        images: [
            'lymonnyi-schokastyk-01.jpg',
            'lymonnyi-schokastyk-02.jpg',
            'lymonnyi-schokastyk-03.jpg',
            'lymonnyi-schokastyk-04.jpg',
            'lymonnyi-schokastyk-05.jpg',
            'lymonnyi-schokastyk-06.jpg',
        ],
        price: 900,
        link: 'schokastyk-lymonnyi',
        category: 'Подушки',
        similar: [
            {
                img: 'schokastyk-rudyi-01.jpg',
                price: 900,
                link: 'schokastyk-rudyi',
            },
            {
                img: 'schokastyk-siryi-01.jpg',
                price: 900,
                link: 'schokastyk-siryi',
            },
        ],
    },
    {
        id: 48,
        name: 'Кіт в жовту смужку',
        description:
            "Жовто-сіра смужка - ідеальні кольори та орнамент для КотоПодуха. М'який на дотик, яскравий та рукотворний. Такий котик ідеально прикрасить будь-яку кімнату.",
        materials: 'Матеріали: акрил (пряжа), холофайбер (наповнювач).',
        dimensions: 'Розмір: 43/33/15см.',
        images: [
            'kit-zhovta-smuzhka-01.jpg',
            'kit-zhovta-smuzhka-02.jpg',
            'kit-zhovta-smuzhka-03.jpg',
            'kit-zhovta-smuzhka-04.jpg',
            'kit-zhovta-smuzhka-05.jpg',
            'kit-zhovta-smuzhka-06.jpg',
            'kit-zhovta-smuzhka-07.jpg',
        ],
        price: 700,
        link: 'kit-zhovta-smuzhka',
        category: 'Подушки',
        similar: [
            {
                img: 'kotosyluet_01.jpg',
                price: 700,
                link: 'kotosyluet',
            },
        ],
    },

    {
        id: 49,
        name: 'Квадратний жовтий песик',
        description:
            "ПесоПодуха створено повністю вручну для обіймів та прикрашання оселі. Подушку-іграшку плетено та пошито вручну з приємної м'якої акрилової пряжі. Песик містить і плетіння спицями і плетіння гачком, мордочку вишито вручну. Подушка має гіпоалергенне наповнення - холофайбер.",
        materials: 'Матеріали: акрил (пряжа), холофайбер (наповнювач).',
        dimensions: 'Розмір: 31/32/15см.',
        images: [
            'kvadratnyi-zhovtyi-pesyk-01.jpg',
            'kvadratnyi-zhovtyi-pesyk-02.jpg',
            'kvadratnyi-zhovtyi-pesyk-03.jpg',
            'kvadratnyi-zhovtyi-pesyk-04.jpg',
            'kvadratnyi-zhovtyi-pesyk-05.jpg',
            'kvadratnyi-zhovtyi-pesyk-06.jpg',
        ],
        price: 800,
        link: 'kvadratnyi-zhovtyi-pesyk',
        category: 'Подушки',
        similar: []
    },
]

export default pillows
