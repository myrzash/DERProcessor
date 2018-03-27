const DATAS = {
    ru: {
        title: "Процессор и его характеристики",
        grade: "7 Класс",
        typeder: "Интерактивная лекция",
        prologue: {
            author: 'Уильям Блейк',
            phrase: 'Увидеть мир в одной песчинке…',
        },
        parts: [
            {
                title: 'Знакомство с процессором',
                info: 'Предлагаем познакомиться с одним из устройств компьютера',
                image: 'a1.jpg',
                interactive: {
                    name: 'lecture',
                    items: {
                        shape: {
                            title: 'Знакомство|с процессором',
                            subTitle: 'Процессор и его|характеристики',
                            bg: {
                                parallax: 'public/1/k1.jpg',
                                // video: 'public/video4.mp4',
                                height: 900,
                            }
                        },
                        views: [
                            [{
                                name: 'm-image',
                                backgroundColor: '#92cdff',
                                src: 'public/1/kt1.png',
                            }, {
                                name: 'm-text',
                                title: 'Процессор',
                                big: true,
                                extra: null,
                                text: ['Процессор (сокращенно ЦП – центральный процессор или международное <b>CPU</b>) – это главный вычислительный элемент в компьютере. Фактически он является <b>сердцем компьютера</b>. На нем лежит вся работа по обработке данных. Работа процессора, действительно напоминает работу сердца, т.к. он работает под управлением электронных импульсов, так называемых тактов.']
                            }], [{
                                name: 'm-image',
                                cover: true,
                                src: 'public/1/kt2.png',
                            }, {
                                name: 'm-text',
                                title: 'Процессор',
                                big: true,
                                extra: null,
                                text: ['Первый микропроцессор для персонального компьютера был изобретён в <b>1970</b> году <b>Маршианом Эдвардом Хоффом</b> и его командой инженеров из Intel.']
                            }], {
                                name: 'm-text',
                                title: 'Как ты думаешь, что означает информация закладки «Общие» из свойств системы?',
                            },
                            {
                                name: 'm-video',
                                src: 'public/1/infos_system.mp4',
                                height: 900,
                                // full: true,
                                // backgroundColor: '#98aaac',
                                bgVideo: true
                            },
                            {
                                name: 'm-text',
                                big: true,
                                title: 'Назначение процессора',
                                text: ['Давай попробуем разобраться.',
                                    'Итак, назначение процессора заключается в следующем:',
                                    '1. Выполнять команды программы, находящейся в оперативной памяти.',
                                    '2. Координировать работу всех устройств компьютера.'],
                                // extra: '<h4 class="font500">В состав процессора обязательно входят:</h4>',
                            },
                            {
                                name: 'm-text',
                                padding: '0px 0px 0px 144',
                                backgroundColor: 'white',
                                title: 'В состав процессора обязательно входят:',
                            },
                            [{
                                name: 'm-text',
                                big: true,
                                backgroundColor: 'white',
                                marginClass: 'mt-0',
                                padding: 20,
                                title: 'Устройство управления',
                                text: ['УУ - координирует работу всех устройств компьютера'],
                            }, {
                                name: 'm-text',
                                big: true,
                                padding: 20,
                                backgroundColor: 'white',
                                title: 'Арифметико-логическое устройство',
                                text: ['АЛУ - выполняет команды программы находящейся в оперативной памяти'],
                            }, {
                                name: 'm-text',
                                big: true,
                                padding: 20,
                                backgroundColor: 'white',
                                title: 'Регистры памяти',
                                text: ['ячейки, в которые по очереди помещаются команды программы, по которой работает процессор и вся необходимая информация для их выполнения'],
                            }, {
                                name: 'm-text',
                                big: true,
                                padding: 20,
                                backgroundColor: 'white',
                                title: 'Шины данных, команд, адресов',
                                text: ['по этим магистралям происходит обмен данными между внутренними устройствами процессора и внешними по отношению к нему'],
                            }],
                            {
                                name: 'm-video',
                                src: 'public/1/processor_work.mp4',
                                full: true,
                                bg: 'public/1/k2.jpg',
                            }, {
                                name: 'm-text',
                                title: 'Тактовая частота',
                                big: true,
                                text: ['Один из показателей микропроцессора – <b>тактовая частота</b>. Это важнейшая характеристика процессора, она измеряется в <b>гигагерцах</b> (Ггц). От нее зависит скорость и производительность компьютера. Выше тактовая частота, значит быстрее скорость вычислений. Современные процессоры выполняют несколько миллионов операций в секунду.',
                                    'Первый <b>процессор Хоффа</b> работал на частоте всего-навсего <b>750 кГц.</b>'],
                            }
                        ],
                    }
                }
            },
            {
                title: 'Как устроен процессор?',
                info: 'Из чего сделан процессор? Какие характеристики важны для процессора?',
                image: 'a2.jpg',
                interactive: {
                    name: 'lecture',
                    items: {
                        shape: {
                            title: 'Как устроен|процессор?',
                            subTitle: 'Процессор и его|характеристики',
                            bg: {
                                parallax: 'public/2/k1.jpg',
                                // video: 'public/video4.mp4',
                                height: 800,
                            }
                        },
                        views: [

                            [{
                                name: 'm-image',
                                src: 'public/2/kt1.png',
                                cover: true,
                            }, {
                                name: 'm-text',
                                big: true,
                                text: ['Физически процессор представляет собой металлическую пластинку со множеством ножек (выводов), устанавливаемую в так называемый сокет (разъем) материнской платы.',
                                    'Внутри пластины находится кристалл полупроводника, содержащий до 2 млрд. логических элементов — транзисторов. Их размер настолько мал, что они умещаются на кристалле площадью 4-6 см<sub>2</sub>.']
                            }],
                            {
                                name: 'm-video',
                                src: 'public/2/how_make_processor.mp4',
                                bg: 'public/2/k2.jpg',
                            },
                            {
                                name: 'm-text',
                                big: true,
                                text: ['Процессор обладает целым рядом характеристик, но мы рассмотрим самые главные. Как правило, их указывают в характеристиках компьютера в магазине.']
                            },
                            [{
                                name: 'm-text',
                                big: true,
                                padding: 20,
                                backgroundColor: 'white',
                                title: 'Тактовая частота',
                                text: ['Один из самых главный параметров процессора, обозначающий количество тактов в секунду и в зависимости от модели процессора может доходить до 4Ггц и выше.  Чем выше тактовая частота, тем процессор быстрее выполняет все операции. Например, тактовая частота у первых персональных компьютеров составляла 3-5 Мгц.\n' +
                                'Следует отметить, что когда-то запусками ракет и работой спутников руководили микропроцессоры с тактовой частотой в тысячи раз меньшей, чем та, которой обладают «собратья» нынешние!\n']
                            }, {
                                name: 'm-text',
                                title: 'Количество ядер',
                                padding: 20,
                                backgroundColor: 'white',
                                big: true,
                                text: ['Ядро – это главный вычислительный модуль процессора. Современные процессоры заключают в одном корпусе от 2 до 8 вычислительных ядер. Такой подход позволяет увеличить производительность ЦП, за счет распределения обработки данных по ядрам. Для простоты понимания можно сказать, что в одном корпусе размещены несколько процессоров.']
                            }],
                            [{
                                name: 'm-text',
                                big: true,
                                text: ['Выбирая компьютер для покупки, сразу определитесь, для чего он вам нужен. Если только для офисных задач и интернета, то покупайте компьютер с двухядерным процессором. Для игр, обработки видео и трехмерной графики лучше будет компьютер с 4 или 6 ядрами.'],
                            }, {
                                name: 'm-text',
                                padding: 20,
                                backgroundColor: '#114775',
                                extra: '<div class="text-xs-center"><img  height="400" src="public/2/kt-1.png" alt=""><img height="400" src="public/2/kt-2.png" alt=""></div>'
                            }]
                        ]
                    }
                }
            },
            {
                title: 'Проверь себя',
                image: 'part3.png',
                info: 'Пройди небольшой тест и узнай насколько ты усвоил материал',
                interactive:
                    {
                        name: 'test',
                        items:
                            {
                                count: 10,
                                data:
                                    [
                                        {
                                            question: 'Назовите устройства, входящие в состав процессора:',
                                            variants: [['АЛУ, УУ, регистры памяти'], ['память, периферийное устройство', 'системная плата, контроллер процессора', 'драйвер, регистры']]
                                        },
                                        {
                                            question: 'Скорость работы компьютера зависит от:',
                                            variants: [['тактовой частоты процессора'], ['наличия или отсутствия подключенного принтера', 'количества хранящейся информации ', 'количества периферийных устройств']]
                                        },
                                        {
                                            question: 'Тактовая частота - это:',
                                            variants: [['количество операций процессора в единицу времени'], ['количество обращений процессора к памяти за одну секунду', 'скорость обмена информацией между процессором и периферией ', 'скорость обмена информацией между процессором и памятью']]
                                        },
                                        {
                                            question: 'Количество информации, которое обрабатывается процессором за одну операцию, называют:',
                                            variants: [['тактовой частотой процессора'], ['разрядностью регистров процессора', 'емкостью процессора', 'разрядностью процессора']]
                                        },
                                        {
                                            question: 'Основными функциями процессора являются:',
                                            variants: [['обрабатывать и управлять'], ['обрабатывать и хранить', 'хранить и передавать', 'обрабатывать и передавать']]
                                        },
                                        {
                                            question: 'Все данные, обрабатываемые процессором попадают в/из …',
                                            variants: [['оперативную память'], ['процессор', 'устройство ввода', 'постоянное запоминающее устройство']]
                                        },
                                        {
                                            question: 'Для управления работой компьютера и выполнения операций над данными служит',
                                            variants: [['процессор'], ['винчестер', 'тактовая частота', 'оперативная память']]
                                        },
                                        {
                                            question: 'Чем выше тактовая частота процессора, тем…',
                                            variants: [['быстрее обрабатывается информация'], ['медленнее обрабатывается информация', 'больше двоичных разрядов могут передаваться и обрабатываться процессором одновременно', 'меньше двоичных разрядов могут передаваться и обрабатываться процессором одновременно ']]
                                        },
                                        {
                                            question: 'Объем оперативной памяти …',
                                            variants: [['чем больше, тем больше производительность ПК'], ['не влияет на скорость её работы', 'влияет на способ подключения', 'влияет на объем адресуемой памяти']]
                                        },
                                        {
                                            question: 'Микропроцессор входит в состав …',
                                            variants: [['материнской платы'], ['внутренней памяти', 'монитора', 'оперативной памяти']]
                                        },
                                    ]
                            }
                    }
            }
        ]
    },
    kz: {
        title: "Процессор және оның сипаттамалары",
        grade: "7-сынып",
        typeder: "Интерактивті лекция",
        prologue: {
            author: 'Уильям Блейк',
            phrase: 'Құм қиыршығынан әлемді көре алу …',
        },
        parts: [
            {
                title: 'Процессормен танысу',
                info: 'Компьютер құрылғыларының бірімен танысуды ұсынамыз',
                image: 'a1.jpg',
                interactive: {
                    name: 'lecture',
                    items: {
                        shape: {
                            title: 'Процессормен|танысу',
                            subTitle: 'Процессор|және|оның сипаттамалары',
                            bg: {
                                parallax: 'public/1/k1.jpg',
                                height: 900,
                            }
                        },
                        views: [
                            [{
                                name: 'm-image',
                                backgroundColor: '#92cdff',
                                src: 'public/1/kt1.png',
                            }, {
                                name: 'm-text',
                                title: 'Процессор',
                                big: true,
                                extra: null,
                                text: ['Процессор (қысқартылған ОП – орталық процессор немесе халықаралық CPU) – бұл компьютердегі негізгі есептеуші элемент. Ол негізінен компьютер жүрегі болып табылады. Оған деректерді өңдеу бойынша барлық жұмыстар артылған. Процессор жұмысы шындығында да жүрек жұмысына ұқсайды, яғни ол такттар деп аталатын электронды импульстердің басқаруымен жұмыс жасайды. ']
                            }], [{
                                name: 'm-image',
                                cover: true,
                                src: 'public/1/kt2.png',
                            }, {
                                name: 'm-text',
                                title: 'Процессор',
                                big: true,
                                extra: null,
                                text: ['Дербес компьютерге арналған алғашқы микропроцессорды 1970 жылы Маршиан Эдвард Хофф және оның Intel компаниясындағы инженерлерінің командасы ойлап тапты.']
                            }], {
                                name: 'm-text',
                                title: 'Жүйе қасиеттеріндегі «Жалпы» қойындысындағы ақпарат нені білдіреді деп ойлайсың?',
                            },
                            {
                                name: 'm-video',
                                src: 'public/1/infos_system.mp4',
                                height: 900,
                                bgVideo: true
                            },
                            {
                                name: 'm-text',
                                big: true,
                                title: 'Процессордың міндеті',
                                text: ['Түсініп көрейік.',
                                    'Сонымен, процессордың мақсаты:' +
                                    '1. Жедел жадыдағы программа командаларын орындау.',
                                    '2. Компьютердің барлық құрылғыларының жұмысын үйлестіру.'],
                            },
                            {
                                name: 'm-text',
                                padding: '0px 0px 0px 144',
                                backgroundColor: 'white',
                                title: 'Процессор құрамына міндетті түрде келесілер кіреді:',
                            },
                            [{
                                name: 'm-text',
                                big: true,
                                backgroundColor: 'white',
                                marginClass: 'mt-0',
                                padding: 20,
                                title: 'Басқару құрылғысы',
                                text: ['БҚ - компьютердің барлық құрылғыларының жұмысын үйлестіреді'],
                            }, {
                                name: 'm-text',
                                big: true,
                                padding: 20,
                                backgroundColor: 'white',
                                title: 'Арифметикалық-логикалық құрылғы',
                                text: ['АЛҚ - жедел жадыдағы программа командаларын орындайды'],
                            }, {
                                name: 'm-text',
                                big: true,
                                padding: 20,
                                backgroundColor: 'white',
                                title: 'Жады регистрі',
                                text: ['процессор жұмыс жасайтын программа командаларына кезекпен орналасатын ұяшықтар және олардың орындалуы үшін қажетті барлық ақпарат'],
                            }, {
                                name: 'm-text',
                                big: true,
                                padding: 20,
                                backgroundColor: 'white',
                                title: 'Деректер, командалар, мекенжайлар шинасы',
                                text: ['бұл магистралдарда процессордың сыртқы құрылғысы мен оған қатысты ішкі құрылғысы арасында деректермен алмасу орын алады'],
                            }],
                            {
                                name: 'm-video',
                                src: 'public/1/processor_work.mp4',
                                full: true,
                                bg: 'public/1/k2.jpg',
                            }, {
                                name: 'm-text',
                                title: 'Тактілік жиілік',
                                big: true,
                                text: ['Микропроцессор көрсеткіштерінің бірі – тактілік жиілік. Бұл процессордың аса маңызды сипаттамасы, ол гигагерцпен (Ггц) өлшенеді. Компьютер жылдамдығы мен өндіргіштігі оған тәуелді. Тактілік жиілік жоғары болса, есептеу жылдамдығы да жоғары. Заманауи процессорлар бір секундта бірнеше миллион операция орындайды.',
                                    'Хоффтың бірінші процессоры не бары 750 кГц жиілікте жұмыс жасады.'],
                            }
                        ],
                    }
                }
            },
            {
                title: 'Процессор құрылымы қандай?',
                info: 'Процессор неден жасалған? Процессор үшін қандай сипаттамалар маңызды?',
                image: 'a2.jpg',
                interactive: {
                    name: 'lecture',
                    items: {
                        shape: {
                            title: 'Процессор құрылымы|қандай?',
                            subTitle: 'Процессор|және|оның сипаттамалары',
                            bg: {
                                parallax: 'public/2/k1.jpg',
                                // video: 'public/video4.mp4',
                                height: 800,
                            }
                        },
                        views: [

                            [{
                                name: 'm-image',
                                src: 'public/2/kt1.png',
                                cover: true,
                            }, {
                                name: 'm-text',
                                big: true,
                                text: ['Негізінен процессор аналық платаның сокетіне (ағытпасына) орнатылатын көптеген аяқтары (шығыстары) бар металл пластина.',
                                    'Пластина ішінде 2 млрд. дейінгі логикалық элементтерден — транзисторлардан тұратын жартылай өткізгіш кристаллдары бар. Олардың өлшемінің кішкене болғандығы соншалық, олар тіпті ауданы 4-6 см2 кристаллға сыйып кетеді.']
                            }],
                            {
                                name: 'm-video',
                                src: 'public/2/how_make_processor.mp4',
                                bg: 'public/2/k2.jpg',
                            },
                            {
                                name: 'm-text',
                                big: true,
                                text: ['Процессордың көптеген сипаттамалары бар, бірақ біз тек ең негізгілерін қарастырамыз. Ереже бойынша, оларды дүкенде компьютер сипаттамаларында көрсетеді.']
                            },
                            [{
                                name: 'm-text',
                                big: true,
                                padding: 20,
                                backgroundColor: 'white',
                                title: 'Тактілік жиілік',
                                text: ['Процессордың бір секундтағы тактілер санын білдіретін ең негізгі параметрлерінің бірі және процессор моделіне байланысты 4Гц дейін жете және одан жоғары бола алады. Тактілік жиілік қаншалықты жоғары болса, процессор операциялардың барлығын соғұрлым жылдам орындайды. Мысалы, алғашқы дербес компьютерлердің тактілік жиілігі 3-5 Мгц құрады.',
                                    'Бір кездері ракеталарды іске қосуды және спутниктердің жұмысын тактілік жиілігі қазіргі «туыстарына» қарағанда мың есе аз микропроцессорлар басқарғандығын айта кеткен жөн.']
                            }, {
                                name: 'm-text',
                                title: 'Ядролар саны',
                                padding: 20,
                                backgroundColor: 'white',
                                big: true,
                                text: ['Ядро – бұл процессордың негізгі есептеу модулі. Заманауи процессорлардың бір корпусында 2-ден 8-ге дейін есептеу ядролары болады. Мұндай тәсіл деректерді өңдеуді ядроларға бөлу есебінен ОП өндіргіштігін арттыруға мүмкіндік береді. Түсінуді жеңілдету үшін бір корпуста бірнеше процессор орналасқан деп те айтуға болады.']
                            }],
                            [{
                                name: 'm-text',
                                big: true,
                                text: ['Компьютерді сатып алар алдында оның сізге не үшін керектігін белгілеп алыңыз. Егер кеңсе тапсырмалары мен интернет үшін ғана болса, екі ядролы процессоры бар компьютер алыңыз. Ойнау, бейнелерді өңдеу және үш өлшемді графика жасау үшін 4 немесе 6 ядролы компьютер алған жөн.'],
                            }, {
                                name: 'm-text',
                                padding: 20,
                                backgroundColor: '#114775',
                                extra: '<div class="text-xs-center"><img  height="400" src="public/2/kt-1.png" alt=""><img height="400" src="public/2/kt-2.png" alt=""></div>'
                            }]
                        ]
                    }
                }
            },
            {
                title: 'Өзіңді тексер',
                image: 'part3.png',
                info: 'Тексеру жұмысын орында және материалды қаншалықты игергеніңді анықта',
                interactive:
                    {
                        name: 'test',
                        items:
                            {
                                count: 10,
                                data:
                                    [{
                                        question: 'Процессор құрамына кіретін құрылғыларды атаңыз: ',
                                        variants: [['жады, перифериялық құрылғы;'], ['жүйелік плата, процессор контроллері; ', 'АЛҚ, БҚ, жады регистрлері;', 'драйвер, регистрлер.']]
                                    }, {
                                        question: 'Компьютердің жұмыс жасау жылдамдығы келесілерге тәуелді: ',
                                        variants: [['процессордың тактілік жиілігіне;'], ['жалғанған принтердің болуына немесе болмауына;', 'сақталған ақпараттар көлеміне; ', 'перифериялық құрылғылар санына.']]
                                    }, {
                                        question: 'Тактілік жиілік - бұл:',
                                        variants: [['процессордың бір секундта процессорға жүгінген саны'], ['уақыт бірлігіндегі процессор операцияларының саны', 'процессор мен периферия арасындағы ақпарат алмасу жылдамдығы', 'процессор мен жады арасындағы ақпарат алмасу жылдамдығы']]
                                    }, {
                                        question: 'Процессор бір операцияда өңдейтін ақпарат көлемін ... деп атайды.',
                                        variants: [['процессордың тактілік жиілігі'], ['процессор регистрлерінің разрядтылығы', 'процессор сыйымдылығы', 'процессор разрядтылығы']]
                                    }, {
                                        question: 'Процессордың негізгі функциялары:',
                                        variants: [['өңдеу және сақтау'], ['өңдеу және басқару', 'сақтау және жіберу', 'өңдеу және жіберу']]
                                    }, {
                                        question: 'Процессор өңдейтін деректердің барлығы ... ге/ден түседі:',
                                        variants: [['енгізу құрылғысы'], ['процессор', 'жедел жады', 'тұрақты есте сақтау құрылғысы']]
                                    }, {
                                        question: 'Компьютер жұмысын басқару және деректердің операцияларын орындау үшін ... қолданылады.',
                                        variants: [['процессор'], ['винчестер', 'тактілік жиілік', 'жедел жады']]
                                    }, {
                                        question: 'Процессордың тактілік жиілігі қаншалықты жоғары болса, соғұрлым...',
                                        variants: [['ақпарат жылдам өңделеді'], ['ақпарат бәсең өңделеді', 'екілік разрядтар көбірек беріледі және процессор бір уақытта өңдей алады', 'екілік разрядтар аз беріледі және процессор бір уақытта өңдей алады']]
                                    }, {
                                        question: 'Жедел жады көлемі ...',
                                        variants: [['оның жұмысының жылдамдығына әсер етпейді '], ['жалғау тәсіліне әсер етеді', 'қаншалықты көп болса, ДК өндіргіштігі соғұрлым жоғары ', 'адрестелетін жады көлеміне әсер етеді']]
                                    }, {
                                        question: 'Микропроцессор ... құрамына кіреді.',
                                        variants: [['аналық платаның'], ['ішкі жадының', 'монитордың', 'жедел жадының ']]
                                    }]
                            }
                    }
            }
        ]
    },
    en: {
        title: "Processor and its specifications",
        grade: "Grade 7",
        typeder: "On-line lecture",
        prologue: {
            author: 'William Blake"',
            phrase: 'To see the world in one grain of sand…'
        },
        parts: [
            {
                title: 'Getting acquainted with the processor',
                info: 'We suggest to get acquainted with one of computer device',
                image: 'a1.jpg',
                interactive: {
                    name: 'lecture',
                    items: {
                        shape: {
                            title: 'Getting acquainted|with the processor',
                            subTitle: 'Processor and | its specifications',
                            bg: {
                                parallax: 'public/1/k1.jpg',
                                height: 900,
                            }
                        },
                        views: [
                            [{
                                name: 'm-image',
                                backgroundColor: '#92cdff',
                                src: 'public/1/kt1.png',
                            }, {
                                name: 'm-text',
                                title: 'Processor',
                                big: true,
                                extra: null,
                                text: ['Processor (shortly CP – central processor or international CPU) is a main compute element in computer. Actually, it is the heart of computer. It is for all work of data processing. Actually, processor’s work recognizes work of the heart because it works under control of electronic impulses calling tact.']
                            }], [{
                                name: 'm-image',
                                cover: true,
                                src: 'public/1/kt2.png',
                            }, {
                                name: 'm-text',
                                title: 'Процессор',
                                big: true,
                                extra: null,
                                text: ['The first microprocessor for personal computer was invented in 1970 by Marshian Edward Hoff and his Engineers’ team from Intel.']
                            }], {
                                name: 'm-text',
                                title: 'How do you think what does information bookmark “General” from system properties mean?',
                            },
                            {
                                name: 'm-video',
                                src: 'public/1/infos_system.mp4',
                                height: 900,
                                bgVideo: true
                            },
                            {
                                name: 'm-text',
                                big: true,
                                title: 'Purpose of the processor',
                                text: ['Let’s try to solve.',
                                    'So, purpose of the processor is:' +
                                    '1. to perform program commands, locating in RAM.',
                                    '2. to coordinate work of all computer devices.'],
                            },
                            {
                                name: 'm-text',
                                padding: '0px 0px 0px 144',
                                backgroundColor: 'white',
                                title: 'Content of processor includes necessarily:',
                            },
                            [{
                                name: 'm-text',
                                big: true,
                                backgroundColor: 'white',
                                marginClass: 'mt-0',
                                padding: 20,
                                title: 'CPU controller',
                                text: ['CPU controller is CPUC (Coordinates work of all devices of computer)'],
                            }, {
                                name: 'm-text',
                                big: true,
                                padding: 20,
                                backgroundColor: 'white',
                                title: 'Arithmetic logic unit',
                                text: ['Arithmetic logic unit is ALU (performs program commands locating in RAM)'],
                            }, {
                                name: 'm-text',
                                big: true,
                                padding: 20,
                                backgroundColor: 'white',
                                title: 'Memory register',
                                text: ['Cells where program commands should be allocated in turn, where processor works and there are all necessary information for their implementation'],
                            }, {
                                name: 'm-text',
                                big: true,
                                padding: 20,
                                backgroundColor: 'white',
                                title: 'Data, program, address buses',
                                text: ['On these highways interchange data is performed between internal devices of processor and external respect to it'],
                            }],
                            {
                                name: 'm-video',
                                src: 'public/1/processor_work.mp4',
                                full: true,
                                bg: 'public/1/k2.jpg',
                            }, {
                                name: 'm-text',
                                title: 'Processor speed',
                                big: true,
                                text: ['One from indicators of microprocessor is processor speed. This is the most important specification of processor, it measures in gigaherz (GHz). It influences on speed and power. When processor speed is higher, it means more calculating speed.  Contemporary processors perform several millions of operations in a second.',
                                    'First processor of Hoff worked with speed only 750 kHz.'],
                            }
                        ],
                    }
                }
            },
            {
                title: 'What structure does processor have?',
                info: 'From what is processor made? Which specification is important for processor?',
                image: 'a2.jpg',
                interactive: {
                    name: 'lecture',
                    items: {
                        shape: {
                            title: 'What structure does processor have?',
                            subTitle: 'Processor and | its specifications',
                            bg: {
                                parallax: 'public/2/k1.jpg',
                                height: 800,
                            }
                        },
                        views: [

                            [{
                                name: 'm-image',
                                src: 'public/2/kt1.png',
                                cover: true,
                            }, {
                                name: 'm-text',
                                big: true,
                                text: ['Physically processor is metal plate with lots of small legs (outputs), which shall be installed in socket of motherboard.',
                                    'There is semiconductor crystal, contenting about 2 billion logic elements, inside of plate -  transistors. Their size is very small that they are located on crystal of 4-6cm2.']
                            }],
                            {
                                name: 'm-video',
                                src: 'public/2/how_make_processor.mp4',
                                bg: 'public/2/k2.jpg',
                            },
                            {
                                name: 'm-text',
                                big: true,
                                text: ['Processor has a variety of specifications, but we will consider the uppermost ones. As a rule, they are mentioned in specifications of computer in shops.']
                            },
                            [{
                                name: 'm-text',
                                big: true,
                                padding: 20,
                                backgroundColor: 'white',
                                title: 'Processor speed',
                                text: ['One of the most main parameter of processor, specifying quantity of tacts in a second and depending on processor’s model can reach up to 4 GHz and higher. Than higher processor speed that the processor performs quicker all operations. For example, processor speed of first personal computers was 3-5 MHz.',
                                    'It will be noted that at one time rocket firing and satellite works were managed by microprocessors with processor speed in one thousand times less, than «fellows» have nowadays! ']
                            }, {
                                name: 'm-text',
                                title: 'Number of cores',
                                padding: 20,
                                backgroundColor: 'white',
                                big: true,
                                text: ['Core is a main computer module of the processor. Contemporary processors include from 2 up to 8 hardware cores on one package. Doing so is allowed to increase CPU power by allocation of data processing for cores. For easy understanding, I can say that several processors are located in one package.']
                            }],
                            [{
                                name: 'm-text',
                                big: true,
                                text: ['While choosing a computer to buy, be determined at once, for what you are going to use it? If only for office aims and internet, that buy a computer with dual-core processor. For games, video processing and 3D graphics better is a computer with 4 or 6 cores.'],
                            }, {
                                name: 'm-text',
                                padding: 20,
                                backgroundColor: '#114775',
                                extra: '<div class="text-xs-center"><img  height="400" src="public/2/kt-1.png" alt=""><img height="400" src="public/2/kt-2.png" alt=""></div>'
                            }]
                        ]
                    }
                }
            },
            {
                title: 'Check yourself',
                image: 'part3.png',
                info: 'Perform testing work and clear up how much you learned subject',
                interactive:
                    {
                        name: 'test',
                        items:
                            {
                                count: 10,
                                data:
                                    [{
                                        question: 'Mention devices which part of the processor:',
                                        variants: [['memory, accessories;'], ['base board, processor-controller;', 'ALU, CPU controller, memory register;', 'driver, register.']]
                                    }, {
                                        question: 'Computer work speed depends on:',
                                        variants: [['processor speed;'], ['existence or non-existence of connected printer;', 'quantity of stored information;', 'quantity of hardware peripheral.']]
                                    }, {
                                        question: 'Processor speed is:',
                                        variants: [['hit count of processor to memory in one second;'], ['hit count of processor in timeron;', 'rate of exchange of information between processor and peripheral;', 'rate of exchange of information between processor and memory.']]
                                    }, {
                                        question: 'Information quantity which processes by processor in one operation is:',
                                        variants: [['processor speed;'], ['register length of processor;', 'capacity of processor;', 'processor word.']]
                                    }, {
                                        question: 'Main function of processor is:',
                                        variants: [['to process and to store;'], ['to process and to control;', 'to store and to transfer;', 'to process and to transfer.']]
                                    }, {
                                        question: 'All data, processing by processor hits into/from...',
                                        variants: [['input device'], ['processor', 'corememory', 'ROM']]
                                    }, {
                                        question: 'For management by computer work and operation with data are:',
                                        variants: [['hard disk drive'], ['processor speed', 'RAM', 'processor']]
                                    }, {
                                        question: 'Than higher processor speed that…',
                                        variants: [['information is processing quicker;'], ['information is processing slowly;', 'more binary bit can be transferred and processed by processor at one time', 'less binary bit can be transferred and processed by processor at one time']]
                                    }, {
                                        question: 'RAM…',
                                        variants: [['it does not influence on speed of its work'], ['it influences on connection method ', 'than more, that more personal computer performance ', 'it influences on volume of address memory']]
                                    }, {
                                        question: 'Microprocessor is a part of',
                                        variants: [['motherboard'], ['internal memory', 'monitor', 'RAM']]
                                    }]
                            }
                    }
            }
        ]
    }
}