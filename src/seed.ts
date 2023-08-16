import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// interface DefaultDiseaseInsertType extends DefaultDisease {
//     fungicides?: { id: number }[];
//     createdAt?: Date;
//     updatedAt?: Date;
// }

async function main() {
    const fungicides = [
        {
            id: 10465,
            tradeMark: 'Acronis',
            patentHolder: 'Basf S.A. – São Paulo',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '48.539.407/0001-18',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Trat. Sementes',
            compatibility: '',
            packaging:
                'Frasco (Polietileno/Metálico): 0,1; 0,25; 0,5; 0,6; 1,0; 1,5; 1,6; 2,0; 2,5 litros\nBombona (Polietileno/Metálico): 3; 5; 10; 15; 20; 50; 100; 200 e 1000 litros',
            activeIngredients: [
                {
                    name: 'piraclostrobina',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'tiofanato-metílico',
                    concentration: 'benzimidazol (precursor de)',
                },
            ],
        },
        {
            id: 11798,
            tradeMark: 'Acronis UBS',
            patentHolder: 'Basf S.A. – São Paulo',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '48.539.407/0001-18',
            actionMethod: '',
            applicationMethod: 'Trat. Sementes',
            compatibility: '',
            packaging:
                'Tipo: Bag in box\nMaterial: Fibra de papel com bolsa plástica interna\nCapacidade: 0,1; 0,25; 0,5; 0,6; 1,0; 10; 1,6; 2,0; 20; 2,5; 5,0 L\nTipo: Balde\nMaterial: Metálico e Plástico\nCapacidade: 1,0; 10; 20; 5,0 L\nTipo: Bombona\nMaterial: Plástico\nCapacidade: 10; 100; 15; 2,0; 20; 2,5; 3,0; 5,0; 50 L\nTipo: Caminhão tanque\nMaterial: Metálico\nCapacidade: 10.000; 15.000; 16.000; 17.000; 18.000; 19.000; 20.000; 21.000; 22.000; 23.000; 24.000; 25.000; 29.000; 30.000; 5.000 L\nTipo: Contentor intermediário (IBC)\nMaterial: Metálico e metal/plástico com pallet de madeira e fibra de papel com bolsa plástica interna e metal/plástico com pallet de plástico e Plástico\nCapacidade: 1.000; 1.800; 2.000; 2.700; 3.000; 950; 960; 970; 980; 990 L\nTipo: Frasco\nMaterial: Plástico\nCapacidade: 0,1; 0,25; 0,5; 0,6; 1,0; 1,6L\nTipo: Isocontainer\nMaterial: Metálico\nCapacidade: 10.000; 15.000; 16.000; 17.000; 18.000; 19.000; 20.000; 21.000; 22.000; 23.000; 24.000; 25.000; 29.000; 30.000; 5.000 L\nTipo: Lata\nMaterial: Metálico\nCapacidade: 1,0; 10; 20; 5,0 L\nTipo: Stand-up pouch, com tampa\nMaterial: Plástico e plástico com estrutura metálica\nCapacidade: 0,1; 0,25; 0,5; 0,6; 1,0; 10; 1,6; 2,0; 2,5; 5,0 L\nTipo: Tambor\nMaterial: Metálico e Plástico\nCapacidade: 100; 190; 200; 210; 50 L',
            activeIngredients: [
                {
                    name: 'piraclostrobina',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'tiofanato-metílico',
                    concentration: 'benzimidazol (precursor de)',
                },
            ],
        },
        {
            id: 4978,
            tradeMark: 'Captan SC',
            patentHolder: 'Adama Brasil S.A. - Londrina',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '02.290.510/0001-76',
            actionMethod: 'Não sistêmico de ação preventiva',
            applicationMethod: 'Terrestre',
            compatibility: '',
            packaging:
                'Tipo: balde \nMaterial:metálico\ncapacidade:5;10;20 L\n\nTipo: Bombona\nMaterial: Plástico\ncapacidade:3;5;3;10;15;20;25;30;40;50 L\n\nTipo:Frasco\nMaterial:Plástico\ncapacidade:100;150;200;250;300;400;500;600ml; 1;1,5;2;2,2;2,5L\n\nTipo:Tambor\nMaterial:métalico\ncapacidade:200L\n\nTipo: Tambor \nMaterial :Plástico\ncapacidade:100;200 L\n\nTipo: bag in box\nMaterial: Fibra celulósica com bolsa prática interna \ncapacidade:1;1,5;2;2,5;3;5;10;15;20;25;30;40;50 L\n\nTipo:Bulk\nMaterial:Plástico\ncapacidade:100;200;500;1000 L\n\nTipo: Bulk \nMaterial: metálico\ncapacidade:500;1000 L\n\nTipo:Bulk\nMaterial:Plástico com estrutura metálica \ncapacidade:100;200;300;400;500;600;700;800;900;1000 L\n\nTipo: Sachê com Tampa\nMaterial: Alumínio/Plástico\ncapacidade:1;1,5;2;2,5;3;5;10;15;20;25;30;40;50 L\n\nTipo:Tambor\nMaterial: Plástico/metálico\ncapacidade:100;150;200;250;300;400;500 L',
            activeIngredients: [
                {
                    name: 'captana',
                    concentration: 'dicarboximida',
                },
            ],
        },
        {
            id: 11925,
            tradeMark: 'Novum',
            patentHolder: 'Basf S.A. – São Paulo',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '48.539.407/0001-18',
            actionMethod: '',
            applicationMethod: 'Trat. Sementes',
            compatibility: '',
            packaging:
                'Tipo: Bag in box.\nMaterial: Fibra de papel com bolsa plástica interna.\nCapacidade: 0,5; 1,0; 2,0; 3,0; 5,0; 10; 20 L.\nTipo: Balde.\nMaterial: Metálico e Plástico.\nCapacidade: 1,0; 5,0; 10; 20 L.\nTipo: Bombona.\nMaterial: Plástico.\nCapacidade: 3,0; 5,0; 2,0; 10; 20; 50; 100 L.\nTipo: Contentor intermediário (IBC).\nMaterial: Metálico e metal/plástico com pallet de madeira e Plástico e plástico com estrutura metálica.\nCapacidade: 300; 400; 500; 600; 700; 800; 850; 900; 925; 950; 960; 970; 980; 990; 1.000; 1.800; 2.000; 2.700; 3.000 L.\nTipo: Frasco.\nMaterial: Plástico.\nCapacidade: 0,1; 0,25; 0,35; 0,5; 0,75; 1,0 L.\nTipo: Stand-up pouch, com tampa.\nMaterial: Plástico e plástico com estrutura metálica.\nCapacidade: 0,25; 0,5; 0,6; 1,0; 2,0; 3,0; 5,0; 10 L.\nTipo: Tambor.\nMaterial: Metálico e Plástico.\nCapacidade: 50; 100; 190; 200; 210 L.\nTipo: Tanque.\nMaterial: Metálico.\nCapacidade: 300; 400; 500; 600; 700; 800; 850; 900; 925; 950; 960; 970; 980; 990; 1.000; 1.800; 2.000; 2.700; 3.000; 5.000; 10.000; 15.000; 16.000; 17.000; 18.000; 19.000; 20.000; 21.000; 22.000; 23.000; 24.000; 25.000; 29.000; 30.000 L.',
            activeIngredients: [
                {
                    name: 'piraclostrobina',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'tiofanato-metílico',
                    concentration: 'benzimidazol (precursor de)',
                },
            ],
        },
        {
            id: 5365,
            tradeMark: 'Vitavax-Thiram WP',
            patentHolder:
                'UPL do Brasil Indústria e Comércio de Insumos Agropecuários S.A. - Matriz Ituverava/SP ',
            toxicologyClassification: 'III - Medianamente Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '02.974.733/0001-52',
            actionMethod: 'Sistêmico e de contato',
            applicationMethod: 'Trat. Sementes',
            compatibility: '',
            packaging:
                'Embalagens: 1, 5,10 e 20 litros. Mistura em tanque (vide Furazin 310 TS).',
            activeIngredients: [
                {
                    name: 'carboxina',
                    concentration: 'carboxanilida',
                },
                {
                    name: 'tiram',
                    concentration: 'dimetilditiocarbamato',
                },
            ],
        },
        {
            id: 5343,
            tradeMark:
                'Vitavax Thiram 200 SC; Vitavax Thiram 200 FS, Vitavax Ultra; ',
            patentHolder:
                'UPL do Brasil Indústria e Comércio de Insumos Agropecuários S.A. - Matriz Ituverava/SP ',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '02.974.733/0001-52',
            actionMethod: 'Sistêmico e de contato',
            applicationMethod: 'Trat. Sementes',
            compatibility: '',
            packaging:
                'Frasco plástico de 1, 5 e 10 L. Baldes plásticos  de 5, 10 e 25 L. Bombona de 25, 50 e 100 L. Bombona de polietileno de alta densidade de 20 L. Latas de folha de flandres de 1, 2 e 5 L. Balde de folha de flandres de 10 L. Bulk de polietileno de alta densidade de 1.000, 1.250, 10.000 e 15.000 L. Tambor de aço de 100 e 200 L. Isotanque de metal de 10.000, 15.000 e 20.000 L.',
            activeIngredients: [
                {
                    name: 'carboxina',
                    concentration: 'carboxanilida',
                },
                {
                    name: 'tiram',
                    concentration: 'dimetilditiocarbamato',
                },
            ],
        },
        {
            id: 17458,
            tradeMark: 'Acronis FS',
            patentHolder: 'Basf S.A. – São Paulo',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '48.539.407/0001-18',
            actionMethod: '',
            applicationMethod: 'Trat. Sementes',
            compatibility: '',
            packaging:
                'Tipo: Frasco\nMaterial: Plástico\nCapacidade: 0,1; 0,25; 0,5; 0,6; 1,0; 1,6 litros\nTipo: Bombona\nMaterial: Plástico\nCapacidade: 2,0; 2,5; 3,0; 5,0; 10; 15; 20; 50; 100 litros\nTipo: Bag-in-box\nMaterial: Plástico\nCapacidade: 0,1; 0,25; 0,5; 0,6; 1,0; 1,6; 2,0; 2,5; 5,0; 10; 20 litros\nTipo: Stand-up pouch com tampa\nMaterial: Plástico/Plástico metalizado\nCapacidade: 0,1; 0,25; 0,5; 0,6; 1,0; 1,6; 2,0; 2,5; 5,0; 10 litros\nTipo: Lata\nMaterial: Plástico/Metálico\nCapacidade: 1; 5; 10; 20 litros\nTipo: Balde\nMaterial: Plástico/Metálico\nCapacidade: 1; 5; 10; 20 litros\nTipo: Tambor\nMaterial: Plástico/Metálico\nCapacidade: 50; 100; 190; 200; 210 litros\nTipo: Tanque contentor intermediário (IBC)\nMaterial: Plástico/Metálico/Fibra de papel com bolsa plástica interna/Metal e plástico com pallet de plástico/Metal e plástico com pallet de madeira\nCapacidade: 950; 960; 970; 980; 990; 1.000; 1.800; 2.000; 2.700; 3.000 litros\nTipo: Tanque/Isocontainer/Caminhão tanque\nMaterial: Metal\nCapacidade: 5.000; 10.000; 15.000; 16.000; 17.000; 18.000; 19.000; 20.000; 21.000; 22.000; 23.000; 24.000; 25.000; 29.000; 30.000 litros',
            activeIngredients: [
                {
                    name: 'piraclostrobina',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'tiofanato-metílico',
                    concentration: 'benzimidazol (precursor de)',
                },
            ],
        },
        {
            id: 12897,
            tradeMark: 'ADOBE 450 FS',
            patentHolder:
                'UPL do Brasil Indústria e Comércio de Insumos Agropecuários S.A. - Matriz Ituverava/SP ',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '02.974.733/0001-52',
            actionMethod: '',
            applicationMethod: 'Trat. Sementes',
            compatibility: '',
            packaging:
                'Tipo: Balde\nMaterial: Metálico/Plástico\nCapacidade: 10; 20; 25; 30; 40; 50 L\nTipo: Bombona\nMaterial: Metálico/Plástico\nCapacidade: 10; 20; 25; 30; 40; 50 L\nTipo: Container\nMaterial: Aço-inox/Metal com proteção anticorrosivo\nCapacidade: 1000; 2000; 5000; 10000; 20000; 25000 L\nTipo: Frasco\nMaterial: Metálico/Plástico\nCapacidade: 1; 5 L\nTipo: Tambor\nMaterial: Metálico/Plástico\nCapacidade: 100; 200; 250; 500; 1000 L',
            activeIngredients: [
                {
                    name: 'ipconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 11915,
            tradeMark: 'Amulet TOP',
            patentHolder: 'Basf S.A. – São Paulo',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '48.539.407/0001-18',
            actionMethod: 'Ação protetora/Sistêmico/Contato e ingestão ',
            applicationMethod: 'Trat. Sementes',
            compatibility: '',
            packaging:
                'Tipo: Frasco.\nMaterial: Metálico.\nCapacidade: 1; 5; 10; 20; 50; 200; 1.000 L.\nTipo: Frasco.\nMaterial:Plástico.\nCapacidade: 0,25; 0,6; 1,0; 1,6; 5,0; 10; 20; 50; 200; 1.000 L.',
            activeIngredients: [
                {
                    name: 'piraclostrobina',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'fipronil',
                    concentration: 'pirazol',
                },
                {
                    name: 'tiofanato-metílico',
                    concentration: 'benzimidazol (precursor de)',
                },
            ],
        },
        {
            id: 11916,
            tradeMark: 'Belure TOP',
            patentHolder: 'Basf S.A. – São Paulo',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '48.539.407/0001-18',
            actionMethod: '',
            applicationMethod: 'Trat. Sementes',
            compatibility: '',
            packaging:
                'Tipo: Frasco.\nMaterial: Metálico.\nCapacidade: 1; 5; 10; 20; 50; 200; 1.000 L.\nTipo: Frasco.\nMaterial: Plástico.\nCapacidade: 0,25; 0,6; 1,0; 1,6; 5,0; 10; 20; 50; 200; 1.000 L.',
            activeIngredients: [
                {
                    name: 'piraclostrobina',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'tiofanato-metílico',
                    concentration: 'benzimidazol (precursor de)',
                },
                {
                    name: 'fipronil',
                    concentration: 'pirazol',
                },
            ],
        },
        {
            id: 8459,
            tradeMark: 'Certeza N; Firmeza N;',
            patentHolder: 'Iharabras S.A. Indústria Químicas - Sorocaba',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '61.142.550/0001-30',
            actionMethod: 'Sistêmico e contato',
            applicationMethod: 'Trat. Sementes',
            compatibility: 'Não se conhecem casos de incompatibilidade',
            packaging:
                'Frasco plástico para 0,5 e 1 L. Bombona plástica 5, 6, 10, 20, 50, 100, 200, 500 e 1000 L. Farm-pack plástico para 50, 100, 200, 500 e 1000 L. Tanque plástico para 50, 100, 200, 500 e 1000 L.',
            activeIngredients: [
                {
                    name: 'tiofanato-metílico',
                    concentration: 'benzimidazol (precursor de)',
                },
                {
                    name: 'fluazinam',
                    concentration: 'fenilpiridinilamina',
                },
            ],
        },
        {
            id: 5395,
            tradeMark: 'Flint 500 WG',
            patentHolder: 'Bayer S.A. - São Paulo/ SP',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '18.459.628/0001-15',
            actionMethod: 'mesostêmico',
            applicationMethod: 'Terrestre',
            compatibility: '',
            packaging:
                'Saco de papel Kraft, 25, 30, 40 e 50 kg, saco de plástico ( polietileno ou poliprofileno ) 25, 30, 40, 50, 100 e 200kg, fibrolata em fibra de papel 2, 3, 5, 10 e 50 kg, barrica em fibra de papel 25, 30, 50 e 100 kg, caixa de papelão com saco interno de alumínio 2, 5, 10, 20, 25 e 50kg, frasco plástico polietileno de alta densidade 2,5,10,20 e 50kg, big bag 100, 200, 500, 1000, 1500 e 2000 kg, tambor metálico 10, 25, 30, 50, 100 e 200 kg.',
            activeIngredients: [
                {
                    name: 'trifloxistrobina',
                    concentration: 'estrobilurina',
                },
            ],
        },
        {
            id: 8930,
            tradeMark: 'Maxim Advanced',
            patentHolder: 'Syngenta Proteção de Cultivos Ltda. – São Paulo ',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '60.744.463/0001-90',
            actionMethod: 'sistêmico',
            applicationMethod: 'Trat. Sementes',
            compatibility: '',
            packaging:
                'Barrica - aço, ferro, fibra e plástico - 10; 25; 40; 50; 60; 70; 80; 90; 100; 125; 150; 180; 200; 220; 250; 400; 450; 500; 550L\nBombona - plástico - 3;5;10;20;25;50L\nBulks - fibra e plástico - 1000; 2000; 5000; 10000; 20000L\nBulk - aço, ferro e plástico - 1000;5000;10000;20000L\nFarm-pack - fibra e plástico - 200; 220; 250; 400; 420; 450; 500; 550L\nFrasco - plástico - 0,25; 0,5 ;1; 2,5; 5; 10; 20L\nTambor - aço, ferro, fibra e plástico - 10; 25; 40; 45; 50; 60; 70; 80; 90; 100; 125; 150; 160; 180; 200; 220; 250; 400; 450; 500; 550L\nTanque - aço, ferro e plástico - 1000 L/kg',
            activeIngredients: [
                {
                    name: 'metalaxil-M',
                    concentration: 'acilalaninato',
                },
                {
                    name: 'tiabendazol',
                    concentration: 'benzimidazol',
                },
                {
                    name: 'fludioxonil',
                    concentration: 'fenilpirrol',
                },
            ],
        },
        {
            id: 18316,
            tradeMark: 'Maxim Advanced Professional',
            patentHolder: 'Syngenta Proteção de Cultivos Ltda. – São Paulo ',
            toxicologyClassification:
                'Não - Não Classificado - Produto Não Classificado',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '60.744.463/0001-90',
            actionMethod: '',
            applicationMethod: 'Trat. Sementes',
            compatibility: '',
            packaging:
                'Tipo: Barrica\nMaterial: Aço/Ferro/Fibra/Plástico\nCapacidade: 10; 25; 40; 45; 50; 60; 70; 80; 90; 100; 125; 150; 180; 200; 220; 250; 400; 450; 500; 550 L\nTipo: Bombona\nMaterial: Plástico\nCapacidade: 3; 5; 10; 20; 25; 50 L\nTipo: Bulk\nMaterial: Aço/Ferro/Plástico\nCapacidade: 1.000; 5.000; 10.000; 20.000 L\nTipo: Bulk\nMaterial: Fibra/Plástico\nCapacidade: 1.000; 1.000; 5.000; 10.000; 20.000 L\nTipo: Farm-Pack\nMaterial: Fibra/Plástico\nCapacidade: 200; 220; 250; 400; 420; 450; 500; 550 L\nTipo: Frasco\nMaterial: Plástico\nCapacidade: 0,25; 0,5; 1,0; 2,5; 5,0; 10; 20 L\nTipo: Tambor\nMaterial: Aço/Ferro/Fibra/Plástico\nCapacidade: 10; 25; 40; 45; 50; 60; 70; 80; 90; 100; 125; 150; 160; 180; 200; 220; 250; 400; 450; 500; 550 L\nTipo: Tanque\nMaterial: Aço/Ferro/Plástico\nCapacidade: 1.000 L e kg',
            activeIngredients: [
                {
                    name: 'Tiabendazol',
                    concentration: 'benzimidazol',
                },
                {
                    name: 'fludioxonil',
                    concentration: 'fenilpirrol',
                },
                {
                    name: 'metalaxil-M',
                    concentration: 'acilalaninato',
                },
            ],
        },
        {
            id: 10539,
            tradeMark: 'Rancona 450 FS ',
            patentHolder:
                'UPL do Brasil Indústria e Comércio de Insumos Agropecuários S.A. - Matriz Ituverava/SP ',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '02.974.733/0001-52',
            actionMethod: 'sistêmico.',
            applicationMethod: '',
            compatibility: '',
            packaging:
                'FRASCO - PLÁSTICO - 1; 5 LITROS\nBOMBONA, BALDE - PLÁSTICO OU METÁLICO - 10; 20; 25; 30; 40; 50 LITROS\nTAMBORES - PLÁSTICOS - 100; 200; 250; 500 E 1.000 LITROS\nBULK - PLÁSTICO METALIZADO, PLÁSTICO ALUMINIZADO E PLÁSTICO - 250;500 E 1.000 L',
            activeIngredients: [
                {
                    name: 'ipconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 12300,
            tradeMark: 'Redigo',
            patentHolder: 'Bayer S.A. - São Paulo/ SP',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '18.459.628/0001-15',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Trat. Sementes',
            compatibility: '',
            packaging:
                'Tipo: Balde\nMaterial: Aço/Ferro\nCapacidade: 20; 50; 100; 200 L\nTipo: Bombona\nMaterial: Polietileno/COEX/PET\nCapacidade: 3; 4; 5; 6; 7; 8; 9; 10; 15; 20; 50; 100; 200 L\nTipo: Container\nMaterial: Polietileno/Aço/Ferro\nCapacidade: 200; 300; 400; 500; 600; 700; 800; 900; 1000; 1250; 2000 L\nTipo: Frasco\nMaterial: Polietileno/COEX/PET\nCapacidade: 0,025; 0,03; 0,05; 0,06; 0,1; 0,125; 0,15; 0,2; 0,25; 0,3; 0,4; 0,5; 0,75; 0,9; 1,0; 1,5; 2,0 L\nTipo: Tambor\nMaterial: Polietileno/Aço/Ferro\nCapacidade: 20; 50; 100; 150; 180; 190; 200; 220; 250 L\nTipo: Tanque\nMaterial: Polietileno/Aço/Ferro\nCapacidade: 1000; 2000; 5000; 10000; 15000; 20000; 25000; 50000 L',
            activeIngredients: [
                {
                    name: 'Protioconazol',
                    concentration: 'Triazolinthione',
                },
            ],
        },
        {
            id: 16320,
            tradeMark: 'Redigo A',
            patentHolder: 'Bayer S.A. - São Paulo/ SP',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '18.459.628/0001-15',
            actionMethod: '',
            applicationMethod: 'Trat. Sementes',
            compatibility: '',
            packaging:
                'Tipo: Bag in box\nMaterial: Fibra celulósica com saco plástico interno\nCapacidade: 20 L\nTipo: Balde\nMaterial: Metálico e Plástico\nCapacidade: 25 L\nTipo: Bombona\nMaterial: Plástico\nCapacidade: 60 L\nTipo: Contentor intermediário- IBC\nMaterial: Plástico com estrutura metálica externa\nCapacidade: 1200 L\nTipo: Frasco\nMaterial: Plástico\nCapacidade: 2 L\nTipo: Tambor\nMaterial: Metálico e Plástico\nCapacidade: 220 L',
            activeIngredients: [
                {
                    name: 'Protioconazol',
                    concentration: 'Triazolinthione',
                },
            ],
        },
        {
            id: 11899,
            tradeMark: 'Source Top',
            patentHolder: 'Basf S.A. – São Paulo',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '48.539.407/0001-18',
            actionMethod: 'Sistêmico/ Contato/ Protetora/ Ingestão ',
            applicationMethod: 'Trat. Sementes',
            compatibility: '',
            packaging:
                'Tipo: Frasco.\nMaterial: Metálico.\nCapacidade: 1; 5; 10; 20; 50; 200; 1.000 L.\nTipo: Frasco.\nMaterial:Plástico.\nCapacidade: 0,25; 0,6; 1,0; 1,6; 5,0; 10; 20; 50; 200; 1.000 L.',
            activeIngredients: [
                {
                    name: 'tiofanato-metílico',
                    concentration: 'benzimidazol (precursor de)',
                },
                {
                    name: 'fipronil',
                    concentration: 'pirazol',
                },
                {
                    name: 'piraclostrobina',
                    concentration: 'estrobilurina',
                },
            ],
        },
        {
            id: 9211,
            tradeMark: 'Standak Top',
            patentHolder: 'Basf S.A. – São Paulo',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '48.539.407/0001-18',
            actionMethod: 'sistêmico, de contato e protetora ingestão',
            applicationMethod: 'Trat. Sementes',
            compatibility: '',
            packaging:
                'Tipo: Balde\nMaterial: Metálico\nCapacidade: 10; 20 L.\n\nTipo: Bombona\nMaterial: Plástico\nCapacidade: 5; 10; 20; 50 L.\n\nTipo: Bombona\nMaterial: Metálico\nCapacidade: 5 L.\n\nTipo: Frasco\nMaterial: Metálico\nCapacidade: 1 L.\n\nTipo: Frasco\nMaterial: Plástico\nCapacidade: 0,25; 0,6; 1,0; 1,6 L.\n\nTipo: Tambor\nMaterial: Plástico/Metálico\nCapacidade: 50; 200 L.',
            activeIngredients: [
                {
                    name: 'piraclostrobina',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'tiofanato-metílico',
                    concentration: 'benzimidazol (precursor de)',
                },
                {
                    name: 'fipronil',
                    concentration: 'pirazol',
                },
            ],
        },
        {
            id: 11527,
            tradeMark: 'Standak Top UBS',
            patentHolder: 'Basf S.A. – São Paulo',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '48.539.407/0001-18',
            actionMethod: '',
            applicationMethod: 'Trat. Sementes',
            compatibility: '',
            packaging:
                'Tipo: Bag in box\nMaterial: Fibra celulósica com bolsa plástica interna\nCapacidade: 0,1; 0,25; 0,5; 0,6; 1,0; 1,5; 1,6; 2,0; 2,5; 5,0; 10; 20 L\nTipo: Balde\nMaterial: Metálico/Plástico\nCapacidade: 1; 5; 10; 20 L\nTipo: Bombona\nMaterial: Plástico\nCapacidade: 2,0; 2,5; 3,0; 5,0; 10; 20; 50; 100 L\nTipo: Frasco\nMaterial: Plástico\nCapacidade: 0,1; 0,25; 0,5; 0,6; 1,0; 1,5; 1,6 L\nTipo: Lata\nMaterial: Metálico/Plástico\nCapacidade: 1,0; 10; 20; 5 L\nTipo: Sachê com tampa\nMaterial: Plástico metalizado/Plástico\nCapacidade: 0,1; 0,25; 0,5; 0,6; 1,0; 1,5; 1,6; 2,0; 2,5; 5,0; 10 L\nTipo: Tambor\nMaterial: Metálico/Plástico\nCapacidade: 50; 100; 190; 200; 210 L',
            activeIngredients: [
                {
                    name: 'piraclostrobina',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'tiofanato-metílico',
                    concentration: 'benzimidazol (precursor de)',
                },
                {
                    name: 'fipronil',
                    concentration: 'pirazol',
                },
            ],
        },
        {
            id: 11165,
            tradeMark: 'Flowsan FS',
            patentHolder: 'Taminco do Brasil Produtos Químicos Ltda',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '07.097.695/0001-10',
            actionMethod: 'Contato',
            applicationMethod: 'Trat. Sementes',
            compatibility: '',
            packaging:
                'Tipo: Bombona\nMaterial: Polietileno\nCapacidade: 1; 5; 10; 25; 60 L\nTipo: Contentor intermediário- IBC\nMaterial: Polietileno\nCapacidade: 1000 L\nTipo: Tambor\nMaterial: Polietileno\nCapacidade: 200 L',
            activeIngredients: [
                {
                    name: 'tiram',
                    concentration: 'dimetilditiocarbamato',
                },
            ],
        },
        {
            id: 5185,
            tradeMark: 'Maxim',
            patentHolder: 'Syngenta Proteção de Cultivos Ltda. – São Paulo ',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification: 'III - Produto Perigoso ao Meio Ambiente',
            registerNumber: 'III - Produto Perigoso ao Meio Ambiente',
            cnpj: '60.744.463/0001-90',
            actionMethod: 'De contato',
            applicationMethod: 'Trat. Sementes',
            compatibility: 'Não se conhecem casos de incompatibilidade.',
            packaging:
                'Embalagens: 1, 5, 10, 20, 200, 420, 500, 1000, 5000, 10000, 15000, 20000 e 25000 L.',
            activeIngredients: [
                {
                    name: 'fludioxonil',
                    concentration: 'fenilpirrol',
                },
            ],
        },
        {
            id: 10143,
            tradeMark: 'Maxim Quattro',
            patentHolder: 'Syngenta Proteção de Cultivos Ltda. – São Paulo ',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '60.744.463/0001-90',
            actionMethod: 'sistêmico',
            applicationMethod: 'Trat. Sementes',
            compatibility: '',
            packaging:
                'Tipo: Balde.\nMaterial: Metal.\nCapacidade: 5; 10; 15; 20; 25 Litros.\nTipo: Balde.\nMaterial:Plástico.\nCapacidade: 5; 10; 15; 20 Litros.\nTipo: Bag-in-box.\nMaterial: Fibra de papel com bolsa plástica interna.\nCapacidade: 5; 10; 15; 20; 25; 100; 180; 200; 220; 500; 1.000 Litros.\nTipo: Bombona.\nMaterial: Plástico.\nCapacidade: 5; 10; 15; 20; 25; 50; 100; 180; 200 Litros.\nTipo: Frasco.\nMaterial: Plástico.\nCapacidade: 0,1; 0,25; 0,5; 1,0; 1,5; 2,0 Litros.\nTipo: Contentor intermediário (IBC).\nMaterial: Plástico.\nCapacidade: 500; 600; 750; 1.000 Litros.\nTipo: Lata.\nMaterial: Metal.\nCapacidade: 0,25; 0,5; 1,0; 1,5; 2,0; 5,0 Litros.\nTipo: Tambor.\nMaterial: Plástico/Fibra.\nCapacidade: 100; 180; 200; 220 Litros.\nTipo: Tanque.\nMaterial: Plástico/Metal.\nCapacidade: 5.000 e 20.000 Litros.',
            activeIngredients: [
                {
                    name: 'Azoxistrobina',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'tiabendazol',
                    concentration: 'benzimidazol',
                },
                {
                    name: 'fludioxonil',
                    concentration: 'fenilpirrol',
                },
                {
                    name: 'metalaxil-M',
                    concentration: 'acilalaninato',
                },
            ],
        },
        {
            id: 10138,
            tradeMark: 'Maxim Quattro Professional ',
            patentHolder: 'Syngenta Proteção de Cultivos Ltda. – São Paulo ',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '60.744.463/0001-90',
            actionMethod: 'sistêmico',
            applicationMethod: 'Trat. Sementes',
            compatibility: '',
            packaging:
                'Tipo: Balde\nMaterial: Metal\nCapacidade: 5; 10; 15; 20; 25 L\nTipo: Balde\nMaterial: Plástico\nCapacidade: 5; 10; 15; 20 L\nTipo: Bag-in-box\nMaterial: Fibra de papel com bolsa plástica interna\nCapacidade: 5; 10; 15; 20; 25; 100; 180; 200; 220 L\nTipo: Bombona\nMaterial: Plástico\nCapacidade: 5; 10; 15; 20; 25; 50; 100; 180; 200 L\nTipo: Frasco\nMaterial: Plástico\nCapacidade: 0,1; 0,25; 0,5; 1,0; 1,5; 2,0 L\nTipo: Contentor intermediário(IBC)\nMaterial: Plástico\nCapacidade: 500; 600; 750; 1.000 L\nTipo: Lata\nMaterial: Metal\nCapacidade: 0,25; 0,5; 1,0; 1,5; 2,0; 5,0 L\nTipo: Tambor\nMaterial: Plástico/Fibra\nCapacidade: 100; 180; 200; 220 L\nTipo: Tanque\nMaterial: Plástico/Metal\nCapacidade: 5.000; 20.000 L',
            activeIngredients: [
                {
                    name: 'Azoxistrobina',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'tiabendazol',
                    concentration: 'benzimidazol',
                },
                {
                    name: 'fludioxonil',
                    concentration: 'fenilpirrol',
                },
                {
                    name: 'metalaxil-M',
                    concentration: 'acilalaninato',
                },
            ],
        },
        {
            id: 5380,
            tradeMark: 'Maxim XL',
            patentHolder: 'Syngenta Proteção de Cultivos Ltda. – São Paulo ',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '60.744.463/0001-90',
            actionMethod: 'Sistêmico e de contato.',
            applicationMethod: 'Trat. Sementes',
            compatibility: 'Não se conhecem casos de incompatibilidade.',
            packaging:
                'Frasco de plástico: 1 e 2 L.\nBombona de plástico: 2, 5 e 10 L.\nTambor de plástico: 20, 50, 100,180, 190 e 200 L.\nFarm-pack plástico: 420, 500 e 1000 L.\n',
            activeIngredients: [
                {
                    name: 'fludioxonil',
                    concentration: 'fenilpirrol',
                },
                {
                    name: 'metalaxil-M',
                    concentration: 'acilalaninato',
                },
            ],
        },
        {
            id: 8302,
            tradeMark: 'Maxim XL Professional',
            patentHolder: 'Syngenta Proteção de Cultivos Ltda. – São Paulo ',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '60.744.463/0001-90',
            actionMethod: 'sistêmico e de contato',
            applicationMethod: 'Trat. Sementes',
            compatibility: '',
            packaging:
                'Conteúdo: 1, 5, 10, 20, 160, 180, 200, 420, 1.000, 5.000, 10.000 e 20.000 L.',
            activeIngredients: [
                {
                    name: 'fludioxonil',
                    concentration: 'fenilpirrol',
                },
                {
                    name: 'metalaxil-M',
                    concentration: 'acilalaninato',
                },
            ],
        },
        {
            id: 8246,
            tradeMark: 'Sementiran 500 SC ',
            patentHolder:
                'Masterbor Comércio e Indústria de Produtos Químicos Ltda',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification: 'III - Produto Perigoso ao Meio Ambiente',
            registerNumber: 'III - Produto Perigoso ao Meio Ambiente',
            cnpj: '03.964.950/0001-24',
            actionMethod: '',
            applicationMethod: 'Trat. Sementes',
            compatibility: '',
            packaging: 'Conteúdo: 1; 3; 5; 20; 50; 100; 150 e 200 L.',
            activeIngredients: [
                {
                    name: 'tiram',
                    concentration: 'dimetilditiocarbamato',
                },
            ],
        },
        {
            id: 14031,
            tradeMark: 'Torino',
            patentHolder: 'Sipcam Nichino Brasil S.A. - Uberaba/MG',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '23.361.306/0001-79',
            actionMethod: '',
            applicationMethod: 'Trat. Sementes',
            compatibility: '',
            packaging:
                'Tipo: Bombona\nMaterial: Plástico\nCapacidade: 60 L\nTipo: Frasco\nMaterial: Metálico/Plástico\nCapacidade: 2 L\nTipo: Tambor\nMaterial: Fibra celulósica/Fibra celulósica com saco plástico interno/Metálico/Plástico\nCapacidade: 220 L',
            activeIngredients: [
                {
                    name: 'tiofanato-metílico',
                    concentration: 'benzimidazol (precursor de)',
                },
                {
                    name: 'fluazinam',
                    concentration: 'fenilpiridinilamina',
                },
            ],
        },
        {
            id: 11534,
            tradeMark: 'Zagrone TS',
            patentHolder: 'Syngenta Proteção de Cultivos Ltda. – São Paulo ',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '60.744.463/0001-90',
            actionMethod: 'Sistêmico.',
            applicationMethod: 'Trat. Sementes',
            compatibility: '',
            packaging:
                'Tipo: Bag in box\nMaterial: Fibra de papel com bolsa plástica interna\nCapacidade: 5; 10; 15; 20; 25; 100; 180; 200; 220 L\nTipo: Balde\nMaterial: Plástico\nCapacidade: 5; 10; 15; 20 L\nTipo: Balde\nMaterial: Metálico\nCapacidade: 5; 10; 15; 20; 25 L\nTipo: Bombona\nMaterial: Plástico\nCapacidade: 5; 10; 15; 20; 25; 50; 100; 180; 200 L\nTipo: Frasco\nMaterial: Plástico\nCapacidade: 0,1; 0,25; 0,5; 1,0; 1,5; 2,0 L\nTipo: Contentor intermediário (IBC)\nMaterial: Plástico\nCapacidade: 500; 600; 750; 1.000L\nTipo: Lata\nMaterial: Metálico\nCapacidade: 0,25; 0,5; 1,0; 1,5; 2,0; 5,0 L\nTipo: Tambor\nMaterial: Fibra/Plástico\nCapacidade: 100; 180; 200; 220 L\nTipo: Tanque\nMaterial: Metálico/Plástico\nCapacidade: 5.000; 20.000 L',
            activeIngredients: [
                {
                    name: 'Azoxistrobina',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'metalaxil-M',
                    concentration: 'acilalaninato',
                },
                {
                    name: 'tiabendazol',
                    concentration: 'benzimidazol',
                },
                {
                    name: 'fludioxonil',
                    concentration: 'fenilpirrol',
                },
            ],
        },
        {
            id: 9313,
            tradeMark: 'Abacus HC',
            patentHolder: 'Basf S.A. – São Paulo',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '48.539.407/0001-18',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Bag in box\nMaterial: Fibra de papel com bolsa plástica interna\nCapacidade: 0,1; 0,25; 0,5; 0,6; 1,0; 1,5; 1,6; 2,0; 2,5; 3,0; 5,0; 10 L.\n\nTipo: Bombona\nMaterial: Plástico\nCapacidade: 2,0; 2,5; 3,0; 5,0; 10; 15; 20; 50; 100 L.\n\nTipo: Frasco\nMaterial: Plástico\nCapacidade: 0,1; 0,25; 0,5; 0,6; 1,0; 1,5; 1,6 L.\n\nTipo: Stand-up pouch, com tampa\nMaterial: Plástico\nCapacidade: 0,1; 0,25; 0,5; 0,6; 1,0; 1,5; 1,6; 2,0; 2,5; 3,0; 5,0; 10 L.\n\nTipo: Tambor\nMaterial: Metálico/Plástico\nCapacidade: 100; 200 L.\n\nTipo: Tanque\nMaterial: Metálico/Fibra de papel com bolsa plástica interna/Plástico\nCapacidade: 1.000 L.',
            activeIngredients: [
                {
                    name: 'piraclostrobina',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'epoxiconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 13247,
            tradeMark: 'Aproach Power ',
            patentHolder:
                'Corteva Agriscience do Brasil Ltda - Barueri (Alphaville)',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'I - Produto Altamente Perigoso ao Meio Ambiente',
            registerNumber: 'I - Produto Altamente Perigoso ao Meio Ambiente',
            cnpj: '61.064.929/0001-79',
            actionMethod: '',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Bombona\nMaterial: Plástico\nCapacidade: 0,05 - 30 L\nTipo: Frasco\nMaterial: Plástico\nCapacidade: 0,005 - 30 L\nTipo: Tambor\nMaterial: Metálico e Plástico\nCapacidade: 10 - 250 L\nTipo: IBC\nMaterial: Plástico\nCapacidade: 100 - 1000 L',
            activeIngredients: [
                {
                    name: 'Picoxistrobina',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'ciproconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 12657,
            tradeMark: 'Aproach Power BR',
            patentHolder:
                'Corteva Agriscience do Brasil Ltda - Barueri (Alphaville)',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'I - Produto Altamente Perigoso ao Meio Ambiente',
            registerNumber: 'I - Produto Altamente Perigoso ao Meio Ambiente',
            cnpj: '61.064.929/0001-79',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Bombona\nMaterial: Plástico\nCapacidade: 0,05 - 30 L\nTipo: Frasco\nMaterial: Plástico\nCapacidade: 0,005 - 30 L\nTipo: Tambor\nMaterial: Metálico e Plástico\nCapacidade: 10 - 250 L',
            activeIngredients: [
                {
                    name: 'Picoxistrobina',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'ciproconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 8360,
            tradeMark: 'Aproach Prima',
            patentHolder:
                'Corteva Agriscience do Brasil Ltda - Barueri (Alphaville)',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '61.064.929/0001-79',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: 'Não há casos de incompatibilidade.',
            packaging:
                'Tipo: Barrica\nMaterial: Aço/Ferro/Fibra/Plástico\nCapacidade: 10; 25; 40; 50; 60; 70; 80; 90; 100; 125; 150; 180; 200; 220; 250; 400; 450; 500; 550 L.\n\nTipo: Bombona\nMaterial: Plástico\nCapacidade: 3; 5; 10; 20; 25; 50 L.\n\nTipo: Bulk\nMaterial: Fibra/Plástico\nCapacidade: 1.000; 2.000; 5.000; 10.000; 20.000 L.\n\nTipo: Farm-Pack\nMaterial: Fibra/Plástico\nCapacidade: 200; 220; 250; 400; 420; 450; 500; 550 L.\n\nTipo: Frasco\nMaterial: Plástico\nCapacidade: 0,25; 0,5; 1,0; 2,5; 5,0; 10; 20 L.\n\nTipo: Tambor\nMaterial: Aço/Ferro/Fibra/Plástico\nCapacidade: 10; 25; 40; 50; 60; 70; 80; 90; 100; 125; 150; 180; 200; 220; 250; 400; 450; 500; 550 L.\n',
            activeIngredients: [
                {
                    name: 'Picoxistrobina',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'ciproconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 10085,
            tradeMark: 'Atak',
            patentHolder: 'Prentiss Química Ltda. - Campo Largo/PR',
            toxicologyClassification:
                '3 - Categoria 3 – Produto Moderadamente Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '00.729.422/0001-00',
            actionMethod: '',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Bombona.\nMaterial: Plástico/Polietileno/Plástico COEX, PEAD, PET.\nCapacidade: 5; 10; 15; 20; 25; 50; 100; 150; 200 L.\nTipo: Frasco.\nMaterial: Plástico.\nCapacidade: 0,1; 0,15; 0,2; 0,25; 0,5; 1,0; 2,0; 2,5; 5,0; 10; 15; 20 L.\nTipo: Frasco.\nMaterial: Polietileno.\nCapacidade: 0,5; 1,0; 2,0; 2,5; 5,0; 10; 15; 20 L.\nTipo: Frasco.\nMaterial: Alumínio.\nCapacidade: 1 L.\nTipo: Frasco.\nMaterial: Plástico COEX, PEAD, PET.\nCapacidade: 1,0; 2,0; 2,5; 5,0; 10; 15; 20 L.\nTipo: Garrafa.\nMaterial: Plástico.\nCapacidade: 1 L.\nTipo: Mini bulk.\nMaterial: Plástico/Polietileno/Plástico COEX, PEAD, PET/Aço.\nCapacidade: 1.000 L.',
            activeIngredients: [
                {
                    name: 'tebuconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 11347,
            tradeMark: 'Ativum',
            patentHolder: 'Basf S.A. – São Paulo',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '48.539.407/0001-18',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Frasco Plástico 100; 250; 500; 600 e 800 mL 1 e 1,6 L\nBombona Plástico Plástico 2; 2,5; 3; 3,2; 5; 10; 20; 50 e 100 L\nBag in Box Papelão e Plástico 100; 250; 500 e 600 mL 1; 1,6; 2; 2,5; 5 e 10 L\nFilme Plástico ou Plástico metalizado 100; 250; 500 e 600 mL 1; 1,6; 2; 2,5; 5 e 10 L\nLata/Balde 1; 5; 10 e 20 L\nTambor Plástico ou Metal 50; 100; 190; 200 e 210 L\nTanque/Container intermediário de Plástico, metal ou fibra de papel com bolsa plástica interna; metal ou plástico; metal ou plástico pallet de madeira de 950; 960; 970; 980; 990; 1.000; 1.800; 2.000; 2.700 e 3.000 L\nTanque/ISOcontainer/Caminhão tanque Metal 5.000; 10.000; 15.000; 16.000; 17.000; 18.000; 19.000; 20.000; 21.000; 22.000; 23.000; 24.000; 25.000; 29.000 e 30.000 L',
            activeIngredients: [
                {
                    name: 'epoxiconazol',
                    concentration: 'triazol',
                },
                {
                    name: 'fluxapiroxade',
                    concentration: 'carboxamida',
                },
                {
                    name: 'piraclostrobina',
                    concentration: 'estrobilurina',
                },
            ],
        },
        {
            id: 11200,
            tradeMark: 'AUG 137',
            patentHolder:
                'Avgust Crop Protection Importação e Exportação Ltda.',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '09.721.963/0001-59',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Terrestre',
            compatibility: '',
            packaging: '',
            activeIngredients: [
                {
                    name: 'tebuconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 5351,
            tradeMark: 'Constant',
            patentHolder: 'Bayer S.A. - São Paulo/ SP',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '18.459.628/0001-15',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Frasco de polietileno: 1,0 L.\nbombona plástica acondicionada em caixa de papelão para tranporte: 5,0 L.\nEmbalagem plástica (COEX): 20 L.\nEmbalagem metálica: 20, 100 e 200 L.',
            activeIngredients: [
                {
                    name: 'tebuconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 13156,
            tradeMark: 'Denaxo',
            patentHolder: 'Basf S.A. – São Paulo',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '48.539.407/0001-18',
            actionMethod: '',
            applicationMethod: '',
            compatibility: '',
            packaging:
                'tipo de embalagem: Bag in box\nMaterial: fibra de papel com bolsa plástica interna \ncapacidade: 0,5;1,0;2,0;3,0;5,0;10;20 L\n\ntipo de embalagem: balde\nMaterial: Metálico/ Plástico\ncapacidade: 1,0;5,0;10;20 L\n\ntipo de embalagem: bombona\nMaterial: Plástico\ncapacidade:2,0;3,0;5,0;10;20;50;100 L\n\ntipo de embalagem: Caminhão quente\nMaterial: Metálico\ncapacidade: 300;400;500;600;700;800;850;900;925;950;960;970;980;990;1000;1800;2000;2700;3000;5000;10.000;15.000;16.000;17.000;18.000;19.000;20.000;21.000;22.000;23.000;24.000;25.000;29.000;30.000 L\n\ntipo de embalagem: Contentor intermediário\nMaterial: Metal/Plástico com estrutura metálica/metal/plástico com pallet de madeira /plástico\ncapacidade:300;400;500;600;700;800;850;900;925;950;960;970;980;990;1.000;1.800;2.000;2.700;3.000L\n\ntipo de embalagem: Frasco \nMaterial: Plástico\ncapacidade: 0,1;0,25;0,4;0,75;1,0 L\n\ntipo de embalagem: Isocontainer\nMaterial: metálico\ncapacidade:300;400;500;600;700;800;850;900;925;950;960;970;980;990;1.000;1.800;2.000;2.700;3.000;5.000;10.000;15.000;16.000;17.000;18.000;19.000;20.000;21.000;22.000;23.000;24.000;25.000;29.000;30.000 L\n\ntipo de embalagem:Stand-up pouch com tampa\nMaterial: plástico/ Plástico com estrutura metálica \ncapacidade: 0,25;0,5;0,6;1.0;2,0;3,0;5,0;10 L\n\ntipo de embalagem: tambor\nMaterial: metálico/Plástico\ncapacidade: 50;100;190;200;210 L\n\ntipo de embalagem: Tanque\nMaterial: Metálico\ncapacidade: 300;400;500;600;700;800;850;900;925;950;960;970;980;990;1000;1.800;2.000;2.700;3.000;5.000;10.000;15.000;16.000;17.000;18.000;19.000;20.000;21.000;22.000;23.000;24.000;25.000;29.000;30.000 L',
            activeIngredients: [
                {
                    name: 'epoxiconazol',
                    concentration: 'triazol',
                },
                {
                    name: 'fluxapiroxade',
                    concentration: 'carboxamida',
                },
                {
                    name: 'piraclostrobina',
                    concentration: 'estrobilurina',
                },
            ],
        },
        {
            id: 5361,
            tradeMark: 'Elite',
            patentHolder: 'Bayer S.A. - São Paulo/ SP',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '18.459.628/0001-15',
            actionMethod: 'Sistêmico ',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Frasco plástico de polietileno com 1,0 L. \nBombona plástica com 5,0 L.\nEmbalagem plástica tipo COEX de 20 L.\nEmbalagens metálicas de 20, 100 e 200 L.',
            activeIngredients: [
                {
                    name: 'tebuconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 9844,
            tradeMark: 'Erradicur',
            patentHolder:
                'Tecnomyl Brasil Distribuidora de Produtos Agrícolas Ltda - Foz do Iguaçu',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '05.280.269/0001-92',
            actionMethod: 'sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'EMBALAGEM                         MATERIAL                               CAPACIDADE\nBalde                                   Plástico(Coex ou PEAD)          5L;10L;20L e 50L\nBombona                             Plástico(Coex ou PEAD)          5L;10L;20L e 50L\nBombona                             Metálico(Aço)                          5L;10L;20L e 50L\nContainer                            Aço Inox                                  500mL;1000mL e 1500mL\nFrasco                                 Plástico(Coex ou PEAD)           50mL;70mL;100mL;250mL;350mL;500mL;\n                                           ou PET                                      1,0L;1,5L;2,0L;4,0L e 5,0L\nGalão                                  Plástico(Coex ou PEAD)            5,0L\nSaco                                    Plástico(Polietileno) inserido    500;750 e 1000L\n                                           em contentores de \n                                           polietileno/aço inox                                                              \nTambor                               Metálico(Ferro ou Aço)              100 e 200 L\nTambor                               Plástico(PEAD)                           100 e 200 L  ',
            activeIngredients: [
                {
                    name: 'tebuconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 15203,
            tradeMark: 'Evolution ',
            patentHolder:
                'UPL do Brasil Indústria e Comércio de Insumos Agropecuários S.A. - Matriz Ituverava/SP ',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '02.974.733/0001-52',
            actionMethod: 'Sistêmico/Contato',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Big-bag\nMaterial: Plástico\nCapacidade: 2000 kg\nTipo: Caixa\nMaterial: Fibra celulósica revestida com plástico/Fibra celulósica com saco plástico interno\nCapacidade: 1200 kg\nTipo: Saco\nMaterial: Hidrossolúvel\nCapacidade: 10 kg\nTipo: Saco\nMaterial: Plástico/Plástico metalizado\nCapacidade: 25 kg',
            activeIngredients: [
                {
                    name: 'Azoxistrobina',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'mancozebe',
                    concentration: 'alquilenobis(ditiocarbamato)',
                },
                {
                    name: 'Protioconazol',
                    concentration: 'Triazolinthione',
                },
            ],
        },
        {
            id: 9750,
            tradeMark: 'Fezan',
            patentHolder: 'Oxon Brasil Defensivos Agrícolas Ltda.',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '07.224.503/0001-90',
            actionMethod: 'sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Bombona\nMaterial: Plástico\nCapacidade: 10,0; 5,0 L\n\nTipo: Frasco\nMaterial: Polietileno e Pet/COEX\nCapacidade: 1,0 L\n\nTipo: Frasco\nMaterial: Polietileno e Pet/COEX\nCapacidade: 20,0 L\n\n\n',
            activeIngredients: [
                {
                    name: 'tebuconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 5078,
            tradeMark: 'Folicur 200 EC',
            patentHolder: 'Bayer S.A. - São Paulo/ SP',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '18.459.628/0001-15',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Frascos de polietileno cilíndrico de 1 L;  Bombonas plásticas em polietileno de 5 L; Embalagem plástica tipo Coex de 20 L; Embalagens metálicas de 20, 100 e 200 L.',
            activeIngredients: [
                {
                    name: 'tebuconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 9960,
            tradeMark: 'Fox',
            patentHolder: 'Bayer S.A. - São Paulo/ SP',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '18.459.628/0001-15',
            actionMethod: 'Mesostêmico e sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Frasco de Polietileno de Alta densidade (PEAD) de 250 mL; 500 mL e 1L\nBombona de Polietileno de Alta densidade (PEAD) de 5; 10; 20 Litros\nTambores de Polietileno de Alta densidade (PEAD) de 50;100;200 Litros\nContentores intermediários para granéis ( IBC) de Polietileno de Alta densidade (PEAD) de 500 e 1000 Litros.',
            activeIngredients: [
                {
                    name: 'trifloxistrobina',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'Protioconazol',
                    concentration: 'Triazolinthione',
                },
            ],
        },
        {
            id: 15639,
            tradeMark: 'Fox SC',
            patentHolder: 'Bayer S.A. - São Paulo/ SP',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '18.459.628/0001-15',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Bombona\nMaterial: Plástico\nCapacidade: 60 L\nTipo: Contentor intermediário para granel- IBC\nMaterial: Plástico/Metálico\nCapacidade: 1200 L\nTipo: Frasco\nMaterial: Plástico\nCapacidade: 2 L\nTipo: Tambor\nMaterial: Plástico/Metálico\nCapacidade: 220 L',
            activeIngredients: [
                {
                    name: 'Protioconazol',
                    concentration: 'Triazolinthione',
                },
                {
                    name: 'trifloxistrobina',
                    concentration: 'estrobilurina',
                },
            ],
        },
        {
            id: 12212,
            tradeMark: 'Fox Xpro',
            patentHolder: 'Bayer S.A. - São Paulo/ SP',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '18.459.628/0001-15',
            actionMethod: 'Sistêmico/Mesostêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Balde\nMaterial: Aço/Ferro\nCapacidade: 20; 50; 100; 200 L.\n\nTipo: Bombona\nMaterial: COEX/PEAD/PET\nCapacidade: 3; 4; 5; 6; 7; 8; 9; 10; 15; 20; 50; 100; 200 L.\n\nTipo: Container\nMaterial: PEAD(polietileno de alta densidade)/Aço/Ferro\nCapacidade: 300; 400; 500; 600; 700; 800; 900; 1.000; 1.250; 2.000 L.\n\nTipo: Frasco\nMaterial: COEX/PEAD/PET\nCapacidade: 0,025; 0,03; 0,05; 0,06; 0,1; 0,125; 0,15; 0,2; 0,25; 0,3; 0,4; 0,5; 0,75; 0,9; 1; 1,5; 2 L.\n\nTipo: Tambor\nMaterial: PEAD(polietileno de alta densidade/Aço/Ferro\nCapacidade: 20; 50; 100; 150; 180; 190; 200; 220; 250 L.\n\nTipo: Tanque\nMaterial: PEAD(polietileno de alta densidade)/Aço/Ferro\nCapacidade: 1.000; 2.000; 5.000; 10.000; 15.000; 20.000; 25.000; 50.000 L.',
            activeIngredients: [
                {
                    name: 'Bixafem',
                    concentration: 'carboxamida',
                },
                {
                    name: 'Protioconazol',
                    concentration: 'Triazolinthione',
                },
                {
                    name: 'trifloxistrobina',
                    concentration: 'estrobilurina',
                },
            ],
        },
        {
            id: 8298,
            tradeMark: 'Icarus 250 EC',
            patentHolder:
                'Rotam do Brasil Agroquímica e Produtos Agrícolas Ltda.',
            toxicologyClassification:
                '2 - Categoria 2 – Produto Altamente Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '05.772.606/0001-69',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: 'Não há casos de incompatibilidade',
            packaging:
                'Frasco de polietileno de alta densidade: 1 L;\nBombona de polietileno de alta densidade: 5; 10 e 20 L.',
            activeIngredients: [
                {
                    name: 'tebuconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 11204,
            tradeMark: 'Keyzol EC',
            patentHolder:
                'Avgust Crop Protection Importação e Exportação Ltda.',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '09.721.963/0001-59',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Balde\nMaterial: Plástico\nCapacidade: 20; 25; 50 L.\n\nTipo: Bombona\nMaterial: Plástico\nCapacidade: 5; 10; 15; 20 L.\n\nTipo: Bulk\nMaterial: Plástico\nCapacidade: 100; 200; 400; 450; 500; 550; 600 L.\n\nTipo: Frasco\nMaterial: Plástico\nCapacidade: 0,5; 1,0; 2,0 L.\n\nTipo: Tambor\nMaterial: Plástico/Metálico\nCapacidade: 50; 100; 200; 400; 450; 500; 550; 600 L.',
            activeIngredients: [
                {
                    name: 'tebuconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 10220,
            tradeMark: 'Lost',
            patentHolder: 'Prentiss Química Ltda. - Campo Largo/PR',
            toxicologyClassification:
                '3 - Categoria 3 – Produto Moderadamente Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '00.729.422/0001-00',
            actionMethod: 'sistêmica',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Bombona.\nMaterial: Plástico/Polietileno/Plástico COEX, PEAD, PET.\nCapacidade: 5; 10; 15; 20; 25; 50; 100; 150; 200 L.\nTipo: Frasco.\nMaterial: Plástico.\nCapacidade: 0,1; 0,15; 0,2; 0,25; 0,5; 1,0; 2,0; 2,5; 5,0; 10; 15; 20 L.\nTipo: Frasco.\nMaterial: Polietileno.\nCapacidade: 0,5; 1,0; 2,0; 2,5; 5,0; 10; 15; 20 L.\nTipo: Frasco.\nMaterial: Alumínio.\nCapacidade: 1 L.\nTipo: Frasco.\nMaterial: Plástico COEX, PEAD, PET.\nCapacidade: 1,0; 2,0; 2,5; 5,0; 10; 15; 20 L.\nTipo: Garrafa.\nMaterial: Plástico.\nCapacidade: 1 L.\nTipo: Mini bulk.\nMaterial: Plástico/Polietileno/Plástico COEX, PEAD, PET/Aço.\nCapacidade: 1.000 L.',
            activeIngredients: [
                {
                    name: 'tebuconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 11438,
            tradeMark: 'Lousal',
            patentHolder:
                'Tradecorp do Brasil Comércio de insumos Agrícolas Ltda - Hortolândia/SP',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '04.997.059/0001-57',
            actionMethod: 'Sistêmico.',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Frasco de polietileno de 1 L;\nBombona de polietileno de 5 L;\nBombona de COEX de 20 L;\nTambor metálico de 20; 100 e 200 L.',
            activeIngredients: [
                {
                    name: 'tebuconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 14440,
            tradeMark: 'Maragato 500 EC',
            patentHolder: 'Cropchem Ltda - Porto Alegre',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '03.625.679/0001-00',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Balde\nMaterial: Metálico/Plástico\nCapacidade: 30 L\nTipo: Bombona\nMaterial: Plástico\nCapacidade: 60 L\nTipo: Contentor intermediário - IBC\nMaterial: Metálico/Plástico com estrutura metálica externa\nCapacidade: 1200 L\nTipo: Frasco\nMaterial: Metálico/Plástico\nCapacidade: 2 L\nTipo: Tambor\nMaterial: Metálico/Plástico\nCapacidade: 220 L',
            activeIngredients: [
                {
                    name: 'propiconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 14205,
            tradeMark: 'Mesic',
            patentHolder: 'Bayer S.A. - São Paulo/ SP',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '18.459.628/0001-15',
            actionMethod: 'Sistêmico/Mesostêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Bag in box\nMaterial: Fibra celulósica revestida com plástico/Fibra celulósica com bolsa plástica interna\nCapacidade: 3 - 25 L\nTipo: Balde\nMaterial: Metálico/Plástico\nCapacidade: 20 - 25 L\nTipo: bombona\nMaterial: Plástico\nCapacidade: 3 - 200 L\nTipo: Bulk\nMaterial: Metálico/Plástico\nCapacidade: 300 - 2000 L\nTipo: Frasco\nMaterial: Plástico\nCapacidade: 0,25 - 2 L\nTipo: Tambor\nMaterial: Metálico/Plástico\nCapacidade: 50 - 250 L',
            activeIngredients: [
                {
                    name: 'trifloxistrobina',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'Protioconazol',
                    concentration: 'Triazolinthione',
                },
            ],
        },
        {
            id: 7975,
            tradeMark: 'Nativo',
            patentHolder: 'Bayer S.A. - São Paulo/ SP',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '18.459.628/0001-15',
            actionMethod: 'Mesostêmico e sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Frasco, bombona e balde de plástico de 1,5, 10 e 20 L. Balde de aço de 20 L e Farm Pack de polietileno de 100, 200, 500 e 1000 L.',
            activeIngredients: [
                {
                    name: 'trifloxistrobina',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'tebuconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 15705,
            tradeMark: 'New Fox A',
            patentHolder: 'Bayer S.A. - São Paulo/ SP',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '18.459.628/0001-15',
            actionMethod: 'Sistêmico/Mesostêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Bombona\nMaterial: Plástico\nCapacidade: 60 L\nTipo: Contentor intermediário para granel- IBC\nMaterial: Plástico/Metálico\nCapacidade: 1200 L\nTipo: Frasco\nMaterial: Plástico\nCapacidade: 2 L\nTipo: Tambor\nMaterial: Plástico/Metálico\nCapacidade: 220 L',
            activeIngredients: [
                {
                    name: 'Protioconazol',
                    concentration: 'Triazolinthione',
                },
                {
                    name: 'trifloxistrobina',
                    concentration: 'estrobilurina',
                },
            ],
        },
        {
            id: 16371,
            tradeMark: 'New Fox B',
            patentHolder: 'Bayer S.A. - São Paulo/ SP',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '18.459.628/0001-15',
            actionMethod: '',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Bag in box\nMaterial: Fibra celulósica com saco plástico interno\nCapacidade: 20 L\nTipo: Balde\nMaterial: Plástico/Metálico\nCapacidade: 30 L\nTipo: Bombona\nMaterial: Plástico\nCapacidade: 60 L\nTipo: Contentor intermediário para granel- IBC\nMaterial: Plástico/Metálico\nCapacidade: 1200 L\nTipo: Frasco\nMaterial: Plástico\nCapacidade: 2 L\nTipo: Tambor\nMaterial: Plástico/Metálico\nCapacidade: 220 L',
            activeIngredients: [
                {
                    name: 'Protioconazol',
                    concentration: 'Triazolinthione',
                },
                {
                    name: 'trifloxistrobina',
                    concentration: 'estrobilurina',
                },
            ],
        },
        {
            id: 10751,
            tradeMark: 'Opera Ultra',
            patentHolder: 'Basf S.A. – São Paulo',
            toxicologyClassification:
                '3 - Categoria 3 – Produto Moderadamente Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '48.539.407/0001-18',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Frasco plástico: 0,1; 0,25; 0,5; 0,6; 1; 1,5 e 1,6 Litro;\nBombona plástica: 2; 2,5; 3; 5; 10; 15; 20; 50 e 100 Litros;\nSaco plástico: 0,1; 0,25; 0,5; 0,6; 1; 1,5; 1,6; 2; 2,5; 3; 5 e 10 Litros;\nTambor plástico ou metálico: 100 e 200 Litros;\nTanque plástico, metálico ou de fibra de papel com bolsa plástica interna: 1.000 Litros.',
            activeIngredients: [
                {
                    name: 'piraclostrobina',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'metconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 10058,
            tradeMark: 'Orbis',
            patentHolder: 'Somax Agro do Brasil Ltda.',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '45.923.627/0001-52',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Bombona.\nMaterial: Plástico/Polietileno/Plástico COEX,PEAD,PET.\nCapacidade: 5; 10; 15; 20; 25; 50; 100; 150; 200 L.\nTipo: Frasco.\nMaterial: Plástico.\nCapacidade: 0,1; 0,15; 0,2; 0,25; 0,5; 1,0; 2,0; 2,5; 5,0; 10; 15; 20 L.\nTipo: Frasco.\nMaterial: Polietileno.\nCapacidade: 0,5; 1,0; 2,0; 2,5; 5,0; 10; 15; 20 L.\nTipo: Frasco.\nMaterial: Alumínio.\nCapacidade: 1 L.\nTipo: Frasco.\nMaterial: Plástico COEX,PEAD,PET.\nCapacidade: 1,0; 2,0; 2,5; 5,0; 10; 15; 20 L.\nTipo: Garrafa.\nMaterial: Plástico.\nCapacidade: 1 L.\nTipo: Mini bulk.\nMaterial: Plástico/Polietileno/Plástico COEX,PEAD,PET/Aço.\nCapacidade: 1.000 L.',
            activeIngredients: [
                {
                    name: 'tebuconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 14021,
            tradeMark: 'Prilan Duo',
            patentHolder: 'Cropchem Ltda - Porto Alegre',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '03.625.679/0001-00',
            actionMethod: '',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo:Balde\nMaterial: Metálico\nCapacidade: 30 L\nTipo:Bombona\nMaterial: Plástico\nCapacidade: 60 L\nTipo:Contentor intermediário-IBC\nMaterial: Plástico com estrutura metálica\nCapacidade: 1200 L\nTipo: Frasco\nMaterial: Plástico\nCapacidade: 2 L\nTipo: Tambor\nMaterial: Metálico e Plástico\nCapacidade: 220 L\nTipo: Tanque estacionário(granel)\nMaterial: Metálico e Plástico\nCapacidade: 60000 L',
            activeIngredients: [
                {
                    name: 'Azoxistrobina',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'tebuconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 9843,
            tradeMark: 'ProdutorBR',
            patentHolder: 'Ouro Fino Química S.A. - Uberaba',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '09.100.671/0001-07',
            actionMethod: 'sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging: '',
            activeIngredients: [
                {
                    name: 'tebuconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 10463,
            tradeMark: 'Propiconazole Max Nortox',
            patentHolder: 'Nortox S.A. - Arapongas',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '75.263.400/0001-99',
            actionMethod: 'Sistêmico, contato e ingestão',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Balde\nMaterial: Metálico/Plástico\nCapacidade: 30 L\nTipo: Bombona\nMaterial: Plástico\nCapacidade: 60 L\nTipo: Contentor intermediário para granel- IBC\nMaterial: Metálico/Plástico com estrutura metálica externa\nCapacidade: 1200 L\nTipo: Frasco\nMaterial: Metálico/Plástico\nCapacidade: 2 L\nTipo: Tambor\nMaterial: Metálico/Plástico\nCapacidade: 220 L',
            activeIngredients: [
                {
                    name: 'propiconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 8556,
            tradeMark: 'Propiconazole Nortox',
            patentHolder: 'Nortox S.A. - Arapongas',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '75.263.400/0001-99',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Terrestre',
            compatibility: 'Não se conhecem casos de incompatibilidade',
            packaging:
                'Garrafa plástica para 1 L. Bombonas plásticas para 5, 10 e 20 L. Tambores plásticos retornáveis para 100, 110, 125, 200, 500 e 1000 L.',
            activeIngredients: [
                {
                    name: 'propiconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 7847,
            tradeMark: 'Rival 200 EC',
            patentHolder:
                'Sumitomo Chemical Brasil Indústria Química S.A. - Maracanaú/CE',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '07.467.822/0001-26',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Terrestre',
            compatibility: '',
            packaging: 'Conteúdo:1, 5, 10 e 20 L',
            activeIngredients: [
                {
                    name: 'tebuconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 12691,
            tradeMark: 'Sesitra',
            patentHolder: 'Basf S.A. – São Paulo',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '48.539.407/0001-18',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Bag in box de fibra de papel com bolsa plástica interna - 0,5; 1,0; 2,0 3,0; 5,0; 10; 20 L\nBalde Metálico / Plástico - 1,0; 5,0; 10;20 L\nBombona\tPlástica - 2,0; 3,0; 5,0; 10; 20; 50; 100 L\nCaminhão tanque metálico - 300;400;500;600;700; 800; 850;900;925; 950; 960; 970; 980; 990; 1.000; 1.800; 2.000; 2.700; 3.000; 5.000; 10.000; 15.000; 16.000; 17.000; 18.000; 19.000; 20.000; 21.000; 22.000; 23.000; 24.000; 25.000; 29.000; 30.000 L\nContentor intermediário (IBC) Metal / Plástico com estrutura metálica/Metal/plástico com pallet de madeira/ Plástico - 300; 400; 500; 600; 700; 800; 850; 900; 925; 950; 960; 970; 980; 990; 1.000; 1.800; 2.000; 2.700; 3.000 L\nFrasco Plástico - 0,1; 0,25; 0,5; 0,75; 1,0 L\nIsocontainer Metálico - 300; 400; 500; 600; 700; 800; 850; 900; 925; 950; 960; 970; 980; 990; 1.000; 1.800; 2.000; 2.700; 3.000; 5.000; 10.000; 15.000; 16.000; 17.000; 18.000; 19.000; 20.000; 21.000; 122.000; 23.000; 24.000;25.000; 29.000; 30.000 L\nStand-up pouch com tampa de Plástico/ Plástico com estrutura metálica - 0,25; 0,5; 0,6; 1,0; 2,0; 3,0; 5,0 10 L\nTambor Metálico/Plástico - 50; 100; 190; 200; 210 L\nTanque Metálico 300; 400; 500 600; 700; 800; 850; 900; 925; 950.960,970,980, 99O 1000, 1 800 2.000; 2700; 3 000; 5 000; 10.000; 15.000; 16.000; 17,000; 18.000; 19.000; 20.000; 21.000; 22.000, 23.000; 24.000; 25.000; 29.000; 30.000 L.',
            activeIngredients: [
                {
                    name: 'epoxiconazol',
                    concentration: 'triazol',
                },
                {
                    name: 'piraclostrobina',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'fluxapiroxade',
                    concentration: 'carboxamida',
                },
            ],
        },
        {
            id: 8885,
            tradeMark: 'Sphere Max',
            patentHolder: 'Bayer S.A. - São Paulo/ SP',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '18.459.628/0001-15',
            actionMethod: 'mesostêmico e sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Bombona\nMaterial: PEAD\nCapacidade: 4,5; 5,0; 10; 20 L.\n\nTipo: Contentor intermediário\nMaterial: PEAD\nCapacidade: 500; 1.000 L.\n\nTipo: Frasco\nMaterial: PEAD\nCapacidade: 0,25; 0,5; 0,9; 1,0 L.\n\nTipo: Tambor\nMaterial: PEAD\nCapacidade: 50; 100; 200 L.',
            activeIngredients: [
                {
                    name: 'trifloxistrobina',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'ciproconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 14423,
            tradeMark: 'Sphere Max A',
            patentHolder: 'Bayer S.A. - São Paulo/ SP',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '18.459.628/0001-15',
            actionMethod: 'Sistêmico/Mesostêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Bombona.\nMaterial: Plástico.\nCapacidade:  4,5 - 20 L.\nTipo: Bulk.\nMaterial: Plástico.\nCapacidade:  500 - 1.000 L.\nTipo: Frasco.\nMaterial: Plástico.\nCapacidade:  0,25 - 1,0 L.\nTipo: Tambor.\nMaterial: Plástico.\nCapacidade:  50 - 200 L.',
            activeIngredients: [
                {
                    name: 'trifloxistrobina',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'ciproconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 14424,
            tradeMark: 'Sphere Max B',
            patentHolder: 'Bayer S.A. - São Paulo/ SP',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '18.459.628/0001-15',
            actionMethod: 'Sistêmico/Mesosistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Bombona.\nMaterial:Plástico.\nCapacidade: 4,5 - 20 L.\nTipo: Bulk.\nMaterial: Plástico.\nCapacidade: 500 - 1.000 L.\nTipo: Frasco.\nMaterial: Plástico.\nCapacidade: 0,25 - 1,0 L.\nTipo:  Tambor.\nMaterial: Plástico.\nCapacidade: 50 - 200 L.',
            activeIngredients: [
                {
                    name: 'trifloxistrobina',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'ciproconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 5475,
            tradeMark: 'Stratego 250 EC',
            patentHolder: 'Bayer S.A. - São Paulo/ SP',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '18.459.628/0001-15',
            actionMethod: 'Sistêmico e mesostêmico',
            applicationMethod: 'Terrestre',
            compatibility: '',
            packaging:
                'Frascos de Polietileno de 1 Litro\nLata de Folha de Flandres de 1 e 5 Litros\nBalde de Aço de 20 Litros\nBombona de COEX de 5 Litros\nFarm-Pack de polietileno de 225, 420 e 530 Litros',
            activeIngredients: [
                {
                    name: 'propiconazol',
                    concentration: 'triazol',
                },
                {
                    name: 'trifloxistrobina',
                    concentration: 'estrobilurina',
                },
            ],
        },
        {
            id: 10086,
            tradeMark: 'Tebas',
            patentHolder: 'Nutrien Soluções Agrícolas Ltda. – São Paulo/SP',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '88.305.859/0001-50',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Bombona.\nMaterial: Plástico/Polietileno/Plástico COEX,PEAD,PET.\nCapacidade: 5; 10; 15; 20; 25; 50; 100; 150; 200 L.\nTipo: Frasco.\nMaterial: Plástico.\nCapacidade: 0,1; 0,15; 0,2; 0,25; 0,5; 1,0; 2,0; 2,5; 5,0; 10; 15; 20 L.\nTipo: Frasco.\nMaterial: Polietileno.\nCapacidade: 0,5; 1,0; 2,0; 2,5; 5,0; 10; 15; 20 L.\nTipo: Frasco.\nMaterial: Alumínio.\nCapacidade: 1 L.\nTipo: Frasco.\nMaterial: Plástico COEX, PEAD, PET.\nCapacidade: 1,0; 2,0; 2,5; 5,0; 10; 15; 20 L.\nTipo: Garrafa.\nMaterial: Plástico.\nCapacidade: 1 L.\nTipo: Mini bulk.\nMaterial: Plástico/Polietileno/Plástico COEX,PEAD,PET/Aço.\nCapacidade: 1.000 L.',
            activeIngredients: [
                {
                    name: 'tebuconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 13268,
            tradeMark: 'Tebuco A Nortox',
            patentHolder: 'Nortox S.A. - Arapongas',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '75.263.400/0001-99',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Balde\nMaterial: Metálico\nCapacidade: 30 L\nTipo: Bombona\nMaterial: Plástico\nCapacidade: 60 L\nTipo: Contentor intermediário - IBC\nMaterial: Plástico com estrutura metálica\nCapacidade: 1200 L\nTipo: Frasco\nMaterial: Plástico\nCapacidade: 2 L\nTipo: Tambor\nMaterial: Metálico e Plástico\nCapacidade: 220 L\nTipo: Tanque estacionário\nMaterial: Metálico e Plástico\nCapacidade: 60000 L\nTipo: \nMaterial: \nCapacidade: ',
            activeIngredients: [
                {
                    name: 'Azoxistrobina',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'tebuconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 10962,
            tradeMark: 'Tebuconazol 200 EC UPL ',
            patentHolder:
                'UPL do Brasil Indústria e Comércio de Insumos Agropecuários S.A. - Matriz Ituverava/SP ',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '02.974.733/0001-52',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Balde Plástico (Coex ou PEAD) - 5; 10; 20; 50 L\nBombona\tPlástico (Coex/ PEAD) - 5; 10; 20; 50 L\t\nBombona Metálica (Aço) - 5; 10; 20; 50 L\t\nContainer\tAço-inox - 500; 1000; 1500 L\nFrasco Plástico (Coex ou PEAD) ou PET -  0,05; 0,07, 0,1; 0,25; 0,35; 0,50; 1; 1,5; 2; 4; 5 L\nGalão Plástico (Coex ou PEAD)\t - 5 L\nSaco Plástico (Polietileno) inserido em contentores de polietileno/aço inox - 500; 750; 1000 L\t\nTambor Metálico (Ferro ou Aço) - 100; 200 L\nTambor Plástico (PEAD) - 100, 200 L.',
            activeIngredients: [
                {
                    name: 'tebuconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 9380,
            tradeMark: 'Tebuconazole CCAB 200 EC',
            patentHolder: 'CCAB Agro S.A.  – São Paulo',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '08.938.255/0001-01',
            actionMethod: 'sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging: '',
            activeIngredients: [
                {
                    name: 'tebuconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 16546,
            tradeMark: 'UPL 2013 FP',
            patentHolder:
                'UPL do Brasil Indústria e Comércio de Insumos Agropecuários S.A. - Matriz Ituverava/SP ',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '02.974.733/0001-52',
            actionMethod: '',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Big-bag\nMaterial: Plástico\nCapacidade: 2000 kg\nTipo: Caixa\nMaterial: Fibra celulósica com saco plástico interno/Fibra celulósica revestida com plástico\nCapacidade: 1200 kg\nTipo: Saco\nMaterial: Hidrossolúvel\nCapacidade: 10 kg\nTipo: Saco\nMaterial: Plástico/Plástico metalizado\nCapacidade: 25 kg',
            activeIngredients: [
                {
                    name: 'Azoxistrobina',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'mancozebe',
                    concentration: 'alquilenobis(ditiocarbamato)',
                },
                {
                    name: 'Protioconazol',
                    concentration: 'Triazolinthione',
                },
            ],
        },
        {
            id: 8502,
            tradeMark: 'Wittita',
            patentHolder: 'Rainbow Defensivos Agrícolas Ltda.- Porto Alegre',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'I - Produto Altamente Perigoso ao Meio Ambiente',
            registerNumber: 'I - Produto Altamente Perigoso ao Meio Ambiente',
            cnpj: '10.486.463/0001-69',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: 'Não se conhecem casos de incompatibilidade',
            packaging:
                'Frasco plástico para 0,5; 1; 1,5; 2; 2,5; 3; 3,5; 4; 4,5 e 5 litros. Bombona plástica para 5; 10; 15; 20; 25; 30; 35; 40; 45; 50; 100; 150; 200; 250; 300; 350; 400; 450; 500 e 1000 litros.',
            activeIngredients: [
                {
                    name: 'tebuconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 14204,
            tradeMark: 'Wonder',
            patentHolder: 'Bayer S.A. - São Paulo/ SP',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '18.459.628/0001-15',
            actionMethod: 'Sistêmico/Mesostêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Bag in box\nMaterial: Fibra celulósica revestida com plástico/Fibra celulósica com bolsa plástica interna\nCapacidade: 3 - 25 L\nTipo: Balde\nMaterial: Metálico/Plástico\nCapacidade: 20 - 25 L\nTipo: Bombona\nMaterial: Plástico\nCapacidade: 3 - 200 L\nTipo: Bulk\nMaterial: Metálico/Plástico\nCapacidade: 300 - 2000 L\nTipo: Frasco\nMaterial: Plástico\nCapacidade: 0,25 - 2 L\nTipo: Tambor\nMaterial: Metálico/Plástico\nCapacidade: 50 - 250 L',
            activeIngredients: [
                {
                    name: 'trifloxistrobina',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'Protioconazol',
                    concentration: 'Triazolinthione',
                },
            ],
        },
        {
            id: 5387,
            tradeMark: 'Captan 200 FS',
            patentHolder: 'Adama Brasil S.A. - Londrina',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '02.290.510/0001-76',
            actionMethod: 'Não sistêmico',
            applicationMethod: 'Trat. Sementes',
            compatibility: '',
            packaging:
                'Frascos coex e/ou plástico endurecido: 75ml; 150 ml; 375 ml; 450 ml; 500 ml; 750 ml; 1 litro; 1,5 Litros; 2 litros e 3 litros.\nBombonas coex e ou plástico endurecido: 1,5 litros; 2 litros e 3 litros; 3,75 litros; 5 litros; 10 litros e 20 litros.\nTambores de Coex e/ou plástico endurecido: 25 litros e 37,5 litros; 50 litros; 100 litros;\n200 litros; 250 litros; 300 litros; 375 litros e 400 litros. \n\n\n\n\n\n\n\n\n\n\n',
            activeIngredients: [
                {
                    name: 'captana',
                    concentration: 'dicarboximida',
                },
            ],
        },
        {
            id: 12859,
            tradeMark: 'Captive; Betan; Cobral; Pasha;',
            patentHolder: 'Rainbow Defensivos Agrícolas Ltda.- Porto Alegre',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification: 'III - Produto Perigoso ao Meio Ambiente',
            registerNumber: 'III - Produto Perigoso ao Meio Ambiente',
            cnpj: '10.486.463/0001-69',
            actionMethod: '',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Saco\nMaterial: Plástico/Plástico aluminizado/Plástico metalizado\nCapacidade: 0,25 - 1.000 kg',
            activeIngredients: [
                {
                    name: 'captana',
                    concentration: 'dicarboximida',
                },
            ],
        },
        {
            id: 13230,
            tradeMark: 'Sistiva',
            patentHolder: 'Basf S.A. – São Paulo',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '48.539.407/0001-18',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Trat. Sementes',
            compatibility: '',
            packaging:
                'Tipo: Bag in box\nMaterial: Fibra de papel com bolsa plástica interna\nCapacidade: 0,5; 1,0; 2,0; 3,0; 5,0; 10; 20 L\nTipo: Balde\nMaterial: Metálico e Plástico\nCapacidade: 1; 5; 10; 20 L\nTipo: Bombona\nMaterial: Plástico\nCapacidade: 2; 3; 5; 10; 20; 50; 100 L\nTipo: Caminhão tanque/Isocontainer/Tanque\nMaterial: Metálico\nCapacidade: 300; 400; 500; 600; 700; 800; 850; 900; 925; 950; 960; 970; 980; 990; 1000; 1800; 2000; 2700; 3000; 5000; 10000; 15000; 16000; 17000; 18000; 19000; 20000; 21000; 22000; 23000; 24000; 25000; 29000; 30000 L\nTipo: Contentor intermediário- IBC\nMaterial: Metálico/Metal/Plástico com pallet de madeira/Plástico/Plástico com estrutura metálica\nCapacidade: 300; 400; 500; 600; 700; 800; 850; 900; 925; 950; 960; 970; 980; 990; 1000; 1800; 2000; 2700; 3000 L\nTipo: Frasco\nMaterial: Plástico\nCapacidade: 0,1; 0,25; 0,5; 0,75; 1,0 L\nTipo: Stand-up pouch com tampa\nMaterial: Plástico/Plástico com estrutura metálica\nCapacidade: 0,25; 0,5; 0,6; 1,0; 2,0; 3,0; 5,0; 10 L\nTipo: Tambor\nMaterial: Metálico/Plástico\nCapacidade: 50; 100; 190; 200; 210 L',
            activeIngredients: [
                {
                    name: 'fluxapiroxade',
                    concentration: 'carboxamida',
                },
            ],
        },
        {
            id: 14252,
            tradeMark: 'Absoluto FIX',
            patentHolder: 'Iharabras S.A. Indústria Químicas - Sorocaba',
            toxicologyClassification:
                '2 - Categoria 2 – Produto Altamente Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '61.142.550/0001-30',
            actionMethod: 'Contato',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Bombona.\nMaterial: Plástico.\nCapacidade: 5; 10; 20 L.\nTipo: Frasco.\nMaterial: Plástico.\nCapacidade: 1 L.',
            activeIngredients: [
                {
                    name: 'clorotalonil',
                    concentration: 'isoftalonitrila',
                },
            ],
        },
        {
            id: 15314,
            tradeMark: 'Across; Zarco;',
            patentHolder: 'Adama Brasil S.A. - Londrina',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '02.290.510/0001-76',
            actionMethod: 'Sistêmico/Contato',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Bag in box\nMaterial: Fibra celulósica com bolsa plástica interna\nCapacidade: 50 L\nTipo: Balde\nMaterial: Metálico/Plástico\nCapacidade: 50 L\nTipo: Bombona\nMaterial: Plástico\nCapacidade: 50 L\nTipo: Frasco\nMaterial: Plástico\nCapacidade: 2,5 L\nTipo: Caixa\nMaterial: Fibra celulósica\nCapacidade: 50 L\nTipo: Sachê com tampa\nMaterial: Plástico/Plástico aluminizado/Plástico metalizado\nCapacidade: 50 L\nTipo: Tambor\nMaterial: Metálico/Plástico\nCapacidade: 500 L',
            activeIngredients: [
                {
                    name: 'Azoxistrobina',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'difenoconazol',
                    concentration: 'triazol',
                },
                {
                    name: 'clorotalonil',
                    concentration: 'isoftalonitrila',
                },
            ],
        },
        {
            id: 15006,
            tradeMark: 'Adetus',
            patentHolder: 'Syngenta Proteção de Cultivos Ltda. – São Paulo ',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '60.744.463/0001-90',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Frasco\nMaterial: Plástico\nCapacidade: 2 L\nTipo: Bombona\nMaterial: Plástico\nCapacidade: 60 L\nTipo: Bag in box\nMaterial: Fibra celulósica com saco plástico interno\nCapacidade: 20 L\nTipo: Balde\nMaterial: Metálico\nCapacidade: 30 L\nTipo: Lata\nMaterial: Metálico\nCapacidade: 30 L',
            activeIngredients: [
                {
                    name: 'Pidiflumetofen',
                    concentration: 'carboxamida',
                },
                {
                    name: 'difenoconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 11129,
            tradeMark: 'Agrotop; Pilardifen; ',
            patentHolder: 'Pilarquim Br Comercial Ltda.- São Paulo',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '00.642.795/0001-31',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Terrestre',
            compatibility: '',
            packaging:
                'Tipo: Balde\nMaterial: Metálico/Plástico\nCapacidade: 50 L\nTipo: Bombona\nMaterial: Plástico\nCapacidade: 50 L\nTipo: Frasco\nMaterial: Plástico\nCapacidade: 2 L\nTipo: Tambor\nMaterial: Metálico/Plástico\nCapacidade: 500 L',
            activeIngredients: [
                {
                    name: 'difenoconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 17411,
            tradeMark: 'Alade ',
            patentHolder: 'Syngenta Proteção de Cultivos Ltda. – São Paulo ',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '60.744.463/0001-90',
            actionMethod: '',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Bag in box\nMaterial: Fibra celulósica com bolsa plástica interna\nCapacidade: 20 L\nTipo: Balde\nMaterial: Plástico/Metálico\nCapacidade: 30 L\nTipo: Bombona\nMaterial: Plástico\nCapacidade: 60 L\nTipo: Contentor intermediário - IBC\nMaterial: Plástico/Metálico com estrutura metálica externa\nCapacidade: 1200 L\nTipo: Frasco\nMaterial: Plástico\nCapacidade: 2 L\nTipo: Lata\nMaterial: Metálico\nCapacidade: 30 L\nTipo: Sachê com tampa\nMaterial: Fibra celulósica/Fibra celulósica revestida com plástico/Fibra celulósica revestida com plástico metalizado/Plástico/Plástico metalizado\nCapacidade: 0,1 L',
            activeIngredients: [
                {
                    name: 'Benzovindiflupyr',
                    concentration: 'pirazol carboxamida',
                },
                {
                    name: 'ciproconazol',
                    concentration: 'triazol',
                },
                {
                    name: 'difenoconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 11450,
            tradeMark: 'Approve',
            patentHolder: 'Iharabras S.A. Indústria Químicas - Sorocaba',
            toxicologyClassification:
                'Não - Não Classificado - Produto Não Classificado',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '61.142.550/0001-30',
            actionMethod: 'Sistêmico, Contato',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                '0,01; 0,02; 0,03; 0,04; 0,05; 0,07; 0,09; 0,1; 0,2; 0,25; 0,3; 0,35; 0,45; 0,5; 0,7; 0,9; 1; 4,5; 5; 10; 20 e 25 kg.',
            activeIngredients: [
                {
                    name: 'fluazinam',
                    concentration: 'fenilpiridinilamina',
                },
                {
                    name: 'tiofanato-metílico',
                    concentration: 'benzimidazol (precursor de)',
                },
            ],
        },
        {
            id: 16468,
            tradeMark: 'Armero BR',
            patentHolder: 'Adama Brasil S.A. - Londrina',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '02.290.510/0001-76',
            actionMethod: '',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Bag in box\nMaterial: Fibra celulósica com saco plástico interno\nCapacidade: 20 L\nTipo: Balde \nMaterial: Metálico/Plástico\nCapacidade: 30 L\nTipo: bombona\nMaterial: Plástico\nCapacidade: 60 L\nTipo: Contentor intermediário- IBC\nMaterial: Metálico/Plástico com estrutura metálica externa\nCapacidade: 1200 L\nTipo: Frasco\nMaterial: Metálico/Plástico\nCapacidade: 2 L\nTipo: Sachê com tampa\nMaterial: Fibra celulósica/Fibra celulósica revestida com plástico/Fibra celulósica revestida com plástico metalizado/Plástico/Plástico metalizado\nCapacidade: 0,1 L\nTipo: Tambor\nMaterial: Metálico/Plástico\nCapacidade: 220 L',
            activeIngredients: [
                {
                    name: 'Protioconazol',
                    concentration: 'Triazolinthione',
                },
                {
                    name: 'mancozebe',
                    concentration: 'alquilenobis(ditiocarbamato)',
                },
            ],
        },
        {
            id: 19467,
            tradeMark: 'Avert',
            patentHolder:
                'Tecnomyl Brasil Distribuidora de Produtos Agrícolas Ltda - Foz do Iguaçu',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '05.280.269/0001-92',
            actionMethod: '',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Balde\nMaterial: Metálico e Plástico\nCapacidade: 20 L\nTipo: Bombona\nMaterial: Plástico\nCapacidade: 50 L\nTipo: Frasco\nMaterial: Metálico e Plástico\nCapacidade: 2 L',
            activeIngredients: [
                {
                    name: 'Azoxistrobina',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'ciproconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 10353,
            tradeMark: 'Azimut; Custodia; ',
            patentHolder: 'Adama Brasil S.A. - Londrina',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '02.290.510/0001-76',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Balde metálico - 2,5; 3; 5; 10; 15; 20; 25; 30; 40 e 50 L\nBombona de plástico - 2,5; 3; 5; 10; 15; 20; 25; 30; 40 e 50 L\nContainer de polietileno - 500, 1000, 2000, 5000, 10000, 15000, 20000, 25000 e 30000 L\nFrasco metálico - 0,20; 0,25; 0,30; 0,40; 0,50; 0,60; 1,0; 1,5; 2,0 e 2,2 L\nFrasco plástico - 0,20; 0,25; 0,30; 0,40; 0,50; 0,60; 1,0; 1,5; 2,0 e 2,2 L\nIsocontainer de polietileno - 500, 1000, 2000, 5000, 10000, 15000, 20000, 25000 e 30000 L\nIsocontainer metálico - 500, 1000, 2000, 5000, 10000, 15000, 20000, 25000 e 30000 L\nTambor metálico - 50, 100, 150, 200, 250, 400 e 500 L\nTambor plástico - 50, 100, 150, 200, 250, 400 e 500 L\nTanque metálico - 500, 1000, 2000, 5000, 10000, 15000, 20000, 25000 e 30000 L',
            activeIngredients: [
                {
                    name: 'Azoxistrobina',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'tebuconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 16553,
            tradeMark: 'Azoxistrobin 200 + Ciproconazol 80 SC CCAB',
            patentHolder: 'CCAB Agro S.A.  – São Paulo',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '08.938.255/0001-01',
            actionMethod: '',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Balde\nMaterial: Metálico e Plástico\nCapacidade: 30 L\nTipo: Bombona\nMaterial: Metálico e Plástico\nCapacidade: 50 L\nTipo: Frasco\nMaterial: Metálico e Plástico\nCapacidade: 2 L\nTipo: Tambor\nMaterial: Metálico e Plástico\nCapacidade: 220 L',
            activeIngredients: [
                {
                    name: 'Azoxistrobina',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'ciproconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 12120,
            tradeMark: 'Azoxistrobin 200 Ciproconazole 80 CCAB SC',
            patentHolder: 'CCAB Agro S.A.  – São Paulo',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '08.938.255/0001-01',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Balde\nMaterial: Metálico e Plástico\nCapacidade: 20 L\nTipo: Bombona\nMaterial: Plástico\nCapacidade: 50 L\nTipo: Contentor intermediário- IBC\nMaterial: Metálico e Plástico\nCapacidade: 1000 L\nTipo: Frasco\nMaterial: Metálico e Plástico\nCapacidade: 2 L\nTipo: Tambor\nMaterial: Metálico e Plástico\nCapacidade: 250 L',
            activeIngredients: [
                {
                    name: 'Azoxistrobina',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'ciproconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 14026,
            tradeMark: 'Azoxistrobina + Ciproconazol Coonagro 280 SC',
            patentHolder:
                'UPL do Brasil Indústria e Comércio de Insumos Agropecuários S.A. - Matriz Ituverava/SP ',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '02.974.733/0001-52',
            actionMethod: '',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Bombona\nMaterial: Metálico/Plástico\nCapacidade: 60 L\nTipo: Contentor intermediário- IBC\nMaterial: Metálico/Plástico\nCapacidade: 1200 L\nTipo: Frasco\nMaterial: Plástico\nCapacidade: 2 L\nTipo: Tambor\nMaterial: Metálico/Plástico\nCapacidade: 220 L',
            activeIngredients: [
                {
                    name: 'Azoxistrobina',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'ciproconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 12682,
            tradeMark: 'Azoxy + Cypro 280 SC Proventis',
            patentHolder: 'Proventis Lifescience Defensivos Agrícolas Ltda',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '14.497.712/0001-72',
            actionMethod: '',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Bombona\nMaterial: Metálico e Plástico\nCapacidade: 50 L\nTipo: Contentor intermediário- IBC\nMaterial: Metálico e Plástico\nCapacidade: 1000 L\nTipo: Frasco\nMaterial: Plástico\nCapacidade: 2 L\nTipo: Tambor\nMaterial: Metálico e Plástico\nCapacidade: 220 L',
            activeIngredients: [
                {
                    name: 'Azoxistrobina',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'ciproconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 14607,
            tradeMark: 'Belyan',
            patentHolder: 'Basf S.A. – São Paulo',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '48.539.407/0001-18',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Bag-in-box\nMaterial: Fibra celulósica com saco plástico interno\nCapacidade: 20 L\nTipo: Balde\nMaterial: Plástico/Metálico\nCapacidade: 30 L\nTipo: bombona\nMaterial: Plástico\nCapacidade: 60 L\nTipo: Frasco\nMaterial: Plástico\nCapacidade: 2 L\nTipo: Sachê com tampa\nMaterial: Fibra celulósica/Fibra celulósica revestida com plástico/Fibra celulósica revestida com plástico metalizado/Plástico/Plástico metalizado\nCapacidade: 0,1 L\nTipo: Tambor\nMaterial: Plástico/Metálico\nCapacidade: 220 L',
            activeIngredients: [
                {
                    name: 'mefentrifluconazol',
                    concentration: 'triazol',
                },
                {
                    name: 'piraclostrobina',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'fluxapiroxade',
                    concentration: 'carboxamida',
                },
            ],
        },
        {
            id: 16313,
            tradeMark: 'Blavity',
            patentHolder: 'Basf S.A. – São Paulo',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '48.539.407/0001-18',
            actionMethod: '',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Bag in box\nMaterial: Fibra celulósica com saco plástico interno\nCapacidade: 20 L\nTipo: Balde\nMaterial: Metálico/Plástico\nCapacidade: 30 L\nTipo: Bombona\nMaterial: Plástico\nCapacidade: 60 L\nTipo: Frasco\nMaterial: Plástico\nCapacidade: 2 L\nTipo: Sachê com tampa\nMaterial: Fibra celulósica/Fibra celulósica revestida com plástico/Fibra celulósica revestida com plástico metalizado/Plástico/Plástico metalizado\nCapacidade: 0,1 L\nTipo: Tambor\nMaterial: Metálico/Plástico\nCapacidade: 220 L',
            activeIngredients: [
                {
                    name: 'fluxapiroxade',
                    concentration: 'carboxamida',
                },
                {
                    name: 'Protioconazol',
                    concentration: 'Triazolinthione',
                },
            ],
        },
        {
            id: 11874,
            tradeMark: 'Bravonil Top',
            patentHolder: 'Syngenta Proteção de Cultivos Ltda. – São Paulo ',
            toxicologyClassification:
                '2 - Categoria 2 – Produto Altamente Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '60.744.463/0001-90',
            actionMethod: '',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Bag in box\nMaterial: Fibra de papel com bolsa plástica interna\nCapacidade: 5; 10; 15; 20; 25; 40; 45; 50; 55; 60; 100; 180; 200; 220; 400; 450; 500; 550; 600; 680; 750; 937,5; 1.000 L\nTipo: Balde\nMaterial: Metálico\nCapacidade: 5; 10; 15; 20; 25; 40; 45; 50; 55; 60; 100; 180; 200; 250 L\nTipo: Bombona\nMaterial: Plástico\nCapacidade: 5; 10; 15; 20; 25; 40; 45; 50; 55; 60 L\nTipo: Contentor intermediário (IBC)\nMaterial: Plástico\nCapacidade: 500; 550; 600; 680; 750; 937,5; 1.000 L\nTipo: Frasco\nMaterial: Plástico\nCapacidade: 0,1; 0,25; 0,5; 1,0; 1,5; 2,0 L\nTipo: Isotanque\nMaterial: Aço\nCapacidade: 5.000; 18.000; 20.000; 25.000; 26.000; 28.000 L\nTipo: Lata\nMaterial: Metálico\nCapacidade: 0,25; 0,5; 1,0; 1,5; 2,0; 5,0 L\nTipo: Tambor\nMaterial: Fibra\nCapacidade: 5; 10; 15; 20; 25; 40; 45; 50; 55; 60; 100; 180; 200; 220 L\nTipo: Tambor\nMaterial: Aço/Ferro/Plástico\nCapacidade: 100; 180; 200; 220 L\nTipo: Tanque\nMaterial: Aço/Ferro/Plástico\nCapacidade: 5.000; 18.000; 20.000; 25.000; 26.000; 28.000 L',
            activeIngredients: [
                {
                    name: 'clorotalonil',
                    concentration: 'isoftalonitrila',
                },
                {
                    name: 'difenoconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 5400,
            tradeMark: 'Bravonil 720 ',
            patentHolder: 'Syngenta Proteção de Cultivos Ltda. – São Paulo ',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '60.744.463/0001-90',
            actionMethod: 'De contato',
            applicationMethod: 'Terrestre/Aérea',
            compatibility:
                'Não aplicar com mistura de óleo mineral e/ou vegetal.',
            packaging:
                'Frascos de plastico de 0,1; 0,25; 0,5 e 1 litro.\nBombona de plastico de 15, 20, 25, 40, 45, 50, 55, 60 e 200 litros.\nBalde metálico de 5, 10, 15 e 20 litros.\nBalde plastico 5, 10, 15 e 20 litros.\nTambor metálico de 180 e 200 litros.',
            activeIngredients: [
                {
                    name: 'clorotalonil',
                    concentration: 'isoftalonitrila',
                },
            ],
        },
        {
            id: 15045,
            tradeMark: 'Melyra',
            patentHolder: 'Basf S.A. – São Paulo',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '48.539.407/0001-18',
            actionMethod: '',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Bag in box\nMaterial: Fibra celulósica com saco plástico interno\nCapacidade: 20 L\nTipo: Balde\nMaterial: Metálico/Plástico\nCapacidade: 30 L\nTipo: Bombona\nMaterial: Plástico\nCapacidade: 60 L\nTipo: Frasco\nMaterial: Plástico\nCapacidade: 1 L\nTipo: Sachê com tampa\nMaterial: Plástico/Plástico metalizado\nCapacidade: 0,1 L\nTipo: Tambor\nMaterial: Metálico e Plástico\nCapacidade: 220 L',
            activeIngredients: [
                {
                    name: 'piraclostrobina',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'mefentrifluconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 13988,
            tradeMark: 'Tiofanato Nortox',
            patentHolder: 'Nortox S.A. - Arapongas',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification: 'III - Produto Perigoso ao Meio Ambiente',
            registerNumber: 'III - Produto Perigoso ao Meio Ambiente',
            cnpj: '75.263.400/0001-99',
            actionMethod: '',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Balde\nMaterial: Metálico\nCapacidade: 30 L\nTipo: bombona\nMaterial: Plástico\nCapacidade: 50 L\nTipo: Contentor intermediário - IBC\nMaterial: Plástico com estrutura metálica\nCapacidade: 1000 L\nTipo: Frasco\nMaterial: Plástico\nCapacidade: 1 L\nTipo: Tambor\nMaterial: Metálico/Plástico\nCapacidade: 200 L\nTipo: Tanque estacionário-granel\nMaterial: Metálico/Plástico\nCapacidade: 60000 L',
            activeIngredients: [
                {
                    name: 'tiofanato-metílico',
                    concentration: 'benzimidazol (precursor de)',
                },
            ],
        },
        {
            id: 11155,
            tradeMark: 'Helmstar Plus',
            patentHolder: 'Helm do Brasil Mercantil - São Paulo/SP',
            toxicologyClassification:
                '3 - Categoria 3 – Produto Moderadamente Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '47.176.755/0001-05',
            actionMethod: 'Sistêmico.',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Balde\nMaterial: Plástico\nCapacidade: 20; 25; 50 L.\n\nTipo: Bombona\nMaterial: Plástico\nCapacidade: 4; 5; 6; 10; 20 L.\n\nTipo: Frasco\nMaterial: Plástico\nCapacidade: 0,25; 0,5; 0,75; 1; 2; 3; 5 L.\n\nTipo: Tambor\nMaterial: Metálico/Plástico\nCapacidade: 50; 100; 200; 500 L.',
            activeIngredients: [
                {
                    name: 'Azoxistrobina',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'tebuconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 10954,
            tradeMark: 'Tigre',
            patentHolder:
                'UPL do Brasil Indústria e Comércio de Insumos Agropecuários S.A. - Matriz Ituverava/SP ',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '02.974.733/0001-52',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Balde\nMaterial: COEX/PEAD/PET\nCapacidade: 5; 10; 20; 50 L.\n\nTipo: Bombona\nMaterial: COEX/PEAD/PET e Aço\nCapacidade: 5; 10; 20; 50 L.\n\nTipo: Container\nMaterial: Aço-inox\nCapacidade: 500; 1.000; 1.500 L.\n\nTipo: Frasco\nMaterial: COEX/PEAD/PET\nCapacidade: 0,25; 0,5; 1,0; 1,5; 2,0; 4,0; 5,0 L.\n\nTipo: Galão\nMaterial: COEX/PEAD/PET\nCapacidade: 5 L.\n\nTipo: Tambor\nMaterial: PEAD(polietileno de alta densidade) e Aço e Ferro\nCapacidade: 100; 200 L.',
            activeIngredients: [
                {
                    name: 'propiconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 5260,
            tradeMark: 'Tilt',
            patentHolder: 'Syngenta Proteção de Cultivos Ltda. – São Paulo ',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '60.744.463/0001-90',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Cartucho de papel com saco solúvel de 1 Litro. \nBandeja plástica com saco solúvel de 1 Litro. \nLata de fibra com saco solúvel de 1 Litro. \nFrasco coex de 1 Litro. \nLata de folha de flandres de 1, e 5 Litros. \nBombona coex de 5 Litros. \nBalde de aço de 20 Litros. \nFarm-pack de polietileno de alta densidade de 225, 420, e 530 Litros.\nFarm pack de plástico de 640 e 1000 Litros',
            activeIngredients: [
                {
                    name: 'propiconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 9274,
            tradeMark: 'Tino',
            patentHolder:
                'UPL do Brasil Indústria e Comércio de Insumos Agropecuários S.A. - Matriz Ituverava/SP ',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '02.974.733/0001-52',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Balde de plástico - 5,0; 10; 20; 50 L.\nBombona de aço e plástico - 5,0; 10; 20; 50 L.\nContainer de aço-inox - 500; 1000; 1500 L.\nContentor (com sacos de polietileno interno) de aço-inox/ polietileno - 500; 750; 1000 L.\nContentor intermediário (IBC) de plástico - 1000 L.\nFrasco de COEX/ PEAD/ PET - 0,25; 0,5; 1,0; 1,5; 2,0; 4,0; 5,0 L.\nGalão de plástico - 5,0 L\nSaco (inseridos em contentores) de polietileno - 500; 750; 1000 L.\nTambor de PEAD/ Metálico - 100; 200 L.',
            activeIngredients: [
                {
                    name: 'propiconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 10193,
            tradeMark: 'Tivaro',
            patentHolder: 'Basf S.A. – São Paulo',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '48.539.407/0001-18',
            actionMethod: 'sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: bag in box \nMaterial: fibra de papel com bolsa plástica interna \nCapacidade: 0,1; 0,25; 0,5; 0,6; 1,0; 1,5; 1,6; 2,0; 2,5; 5,0; 10; 20 L\n\nTipo: Balde\nMaterial: metálico/plástico\nCapacidade: 1,0; 5,0; 10; 20 L\n\nTipo: Bombona\nMaterial: plástico\nCapacidade: 2,0; 2,5; 3,0; 5,0; 10; 15; 20; 50; 100 L\n\nTipo: caminhão tanque\nMaterial: metálico\nCapacidade: 5000; 10000; 15000;16000; 17000; 18000; 19000; 20000; 21000; 22000; 23000; 24000; 25000; 29000; 30000 L\n\nTipo: Contentor intermediário\nMaterial: metálico/ plástico/ metal/ plástico com pallet de madeira/ fibra de papel com bolsa plástica interna/ metal/ plástico com pallet de plástico\nCapacidade: 950; 960; 970; 980; 990; 1000; 1800; 2000; 2700; 3000 L\n\nTipo: Frasco\nMaterial: plástico\nCapacidade: 0,1; 0,25; 0,5; 0,6;1,0; 1,6; 2,0; 2,5; 5,0; 10 L\n\nTipo: Isocontainer \nMaterial: Metálico\nCapacidade:5000; 10000; 15000; 16000; 17000; 18000; 19000; 20000; 21000; 22000; 23000; 24000; 25000; 29000; 30000 L\n\nTipo: Lata\nMaterial: metálico/ plástico\nCapacidade: 1,0; 5,0; 10; 20 L\n\nTipo: Stand-up pouch, com tampa\nMaterial: plástico\nCapacidade: 0,1; 0,25; 0,5; 0,6; 1,0; 1,6; 2,0; 2,5; 5,0; 10 L\n\nTipo: Tambor\nMaterial: metálico/plástico\nCapacidade: 50; 100; 190; 200; 210 L\n\nTipo: tanque\nMaterial: metálico/ plástico/ metal/plástico com pallet de madeira/ fibra de papel com bolsa plástica interna/ metal/ plástico com pallet de plástico\nCapacidade: 950; 960; 970; 980; 990; 1000; 1800; 2000; 2700; 3000 L\n\nTipo: Tanque\nMaterial: metálico\nCapacidade: 5000; 10000; 15000; 16000; 17000; 18000; 19000; 20000; 21000; 22000; 23000; 24000; 25000; 29000; 30000 L',
            activeIngredients: [
                {
                    name: 'epoxiconazol',
                    concentration: 'triazol',
                },
                {
                    name: 'fluxapiroxade',
                    concentration: 'carboxamida',
                },
                {
                    name: 'piraclostrobina',
                    concentration: 'estrobilurina',
                },
            ],
        },
        {
            id: 8374,
            tradeMark: 'Capo WG',
            patentHolder: 'Sipcam Nichino Brasil S.A. - Uberaba/MG',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification: 'III - Produto Perigoso ao Meio Ambiente',
            registerNumber: 'III - Produto Perigoso ao Meio Ambiente',
            cnpj: '23.361.306/0001-79',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Peso líquido:\n- 20; 40 e 50 g;\n- 0,15; 0,1; 0,2; 0,25; 0,3; 0,5; 0,6; 1; 1,2; 1,5; 2; 5; 9; 10; 11; 15; 20; 25; 30; 35; 36; 41; 43; 50; 60 e 70 Kg.',
            activeIngredients: [
                {
                    name: 'tiofanato-metílico',
                    concentration: 'benzimidazol (precursor de)',
                },
            ],
        },
        {
            id: 12251,
            tradeMark: 'Cercobin 875 WG',
            patentHolder: 'Iharabras S.A. Indústria Químicas - Sorocaba',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification: 'III - Produto Perigoso ao Meio Ambiente',
            registerNumber: 'III - Produto Perigoso ao Meio Ambiente',
            cnpj: '61.142.550/0001-30',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Frasco.\nMaterial: Plástico.\nCapacidade: 0,05; 0,1; 0,2; 0,25; 0,35; 0,45; 0,5; 0,9; 1,0 kg.\nTipo: Saco.\nMaterial: Plástico.\nCapacidade: 0,05; 0,1; 0,2; 0,25; 0,35; 0,45; 0,5; 0,9; 1,0; 4,5; 5,0; 10; 20; 25 kg.\nTipo: Saco (contendo saco hidrossolúvel).\nMaterial: Plástico.\nCapacidade: 0,05; 0,1; 0,2; 0,25; 0,35; 0,45; 0,5; 0,9; 1,0; 4,5; 5,0; 10; 20; 25 kg.\nTipo: Saco.\nMaterial: Hidrossolúvel.\nCapacidade: 0,01; 0,02; 0,03; 0,04; 0,05; 0,07; 0,09; 0,1; 0,2; 0,3; 0,5; 0,7; 0,9; 1,0 kg.',
            activeIngredients: [
                {
                    name: 'tiofanato-metílico',
                    concentration: 'benzimidazol (precursor de)',
                },
            ],
        },
        {
            id: 10983,
            tradeMark: 'Cerimônia',
            patentHolder:
                'Tradecorp do Brasil Comércio de insumos Agrícolas Ltda - Hortolândia/SP',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '04.997.059/0001-57',
            actionMethod: 'sistêmico',
            applicationMethod: 'Terrestre',
            compatibility: '',
            packaging:
                'Tipo: Balde\nMaterial: Metálico/Plástico\nCapacidade: 50 L\nTipo: Bombona\nMaterial: Plástico\nCapacidade: 50 L\nTipo: Frasco\nMaterial: Plástico\nCapacidade: 2 L\nTipo: Tambor\nMaterial: Metálico/Plástico\nCapacidade: 500 L',
            activeIngredients: [
                {
                    name: 'difenoconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 11278,
            tradeMark: 'Curygen EC',
            patentHolder:
                'Avgust Crop Protection Importação e Exportação Ltda.',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '09.721.963/0001-59',
            actionMethod: 'Sistêmico.',
            applicationMethod: '',
            compatibility: '',
            packaging:
                'Tipo: Balde.\nMaterial: Plástico.\nCapacidade: 20 - 50 L.\nTipo: Bombona.\nMaterial: Plástico.\nCapacidade: 5 - 20 L.\nTipo: Bulk.\nMaterial: Metálico/Plástico.\nCapacidade: 100 - 600 L.\nTipo: Frasco.\nMaterial: Plástico.\nCapacidade: 0,5 - 2,0 L.\nTipo: Tambor.\nMaterial: Metálico/Plástico.\nCapacidade: 50 - 500 L.',
            activeIngredients: [
                {
                    name: 'difenoconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 16377,
            tradeMark: 'Difenoconazol CCAB 250 EC',
            patentHolder: 'CCAB Agro S.A.  – São Paulo',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '08.938.255/0001-01',
            actionMethod: '',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Balde\nMaterial: Metálico/Plástico\nCapacidade: 30 L\nTipo: bombona\nMaterial: Metálico/Plástico\nCapacidade: 60 L\nTipo: Frasco\nMaterial: Metálico/Plástico\nCapacidade: 2 L\nTipo: Tambor\nMaterial: Metálico/Plástico\nCapacidade: 220 L',
            activeIngredients: [
                {
                    name: 'difenoconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 14246,
            tradeMark: 'Elatus Trio',
            patentHolder: 'Syngenta Proteção de Cultivos Ltda. – São Paulo ',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '60.744.463/0001-90',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Balde.\nMaterial: Metálico.\nCapacidade: 3 - 10 kg.\nTipo: Bombona.\nMaterial: Plástico.\nCapacidade: 3 - 10 kg.\nTipo: Caixa.\nMaterial: Fibra celulósica com bolsa plástica interna.\nCapacidade: 3 - 100 kg.\nTipo: Cartucho.\nMaterial: Fibra celulósica.\nCapacidade: 1 - 5 kg.\nTipo: Frasco.\nMaterial: Plástico.\nCapacidade: 0,1 - 3 kg.\nTipo: Saco.\nMaterial: Fibra celulósica/Plástico/Ráfia.\nCapacidade: 0,01 - 60 kg.\nTipo: Tambor.\nMaterial: Fibra celulósica/Metálico/Plástico.\nCapacidade: 5 - 100 kg.',
            activeIngredients: [
                {
                    name: 'Benzovindiflupyr',
                    concentration: 'pirazol carboxamida',
                },
                {
                    name: 'difenoconazol',
                    concentration: 'triazol',
                },
                {
                    name: 'Azoxistrobina',
                    concentration: 'estrobilurina',
                },
            ],
        },
        {
            id: 10504,
            tradeMark: 'Excolha',
            patentHolder:
                'UPL do Brasil Indústria e Comércio de Insumos Agropecuários S.A. - Matriz Ituverava/SP ',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '02.974.733/0001-52',
            actionMethod: 'Sistêmico',
            applicationMethod: '',
            compatibility: '',
            packaging:
                'TIPO                          MATERIAL                             CAPACIDADE\nFrasco                       Plástico ou metálico             0,1;0,15;0,2;1,5;2,0;3,0 L\n\nFrasco                       PET ou COEX                       0,25;0,5;1,0 L\n\nBombona                   Plástico                               2,5;4,0;5,0;8,0;10;15;20;25 e 50 L\n\nBalde                         Plástico ou metálico            4,0;8,0;10;15;20;25 e 50 L\n\nTambor                      Plástico ou metálico            100;200;250;500 e 1.000 L\n\nTanque vontainer      Aço Inox                              1.000.2.000;5.000;10.000;15.000;\nestruturado                                                           20.000;23.000 e 25.000 L                              ',
            activeIngredients: [
                {
                    name: 'tebuconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 12154,
            tradeMark: 'Fleris',
            patentHolder: 'Syngenta Proteção de Cultivos Ltda. – São Paulo ',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '60.744.463/0001-90',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Bag in box.\nMaterial: Papelão e Plástico.\nCapacidade: 5; 10; 20; 100; 180; 200; 220; 1.000 L.\nTipo: Balde.\nMaterial: Metálico.\nCapacidade: 20 L.\nTipo: Bombona.\nMaterial: Plástico.\nCapacidade: 5; 10; 20; 100; 180; 200; 220 L.\nTipo: Farm-pack.\nMaterial: Plástico.\nCapacidade: 420; 640; 1.000 L.\nTipo: Frasco.\nMaterial: Plástico.\nCapacidade: 0,25; 0,4; 0,5; 1,0 L.\nTipo: Lata.\nMaterial: Metálico e Fibra.\nCapacidade: 0,25; 0,4; 0,5; 1,0 L.\nTipo: Tambor.\nMaterial: Metálico.\nCapacidade: 100; 180; 200; 220 L.',
            activeIngredients: [
                {
                    name: 'difenoconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 12722,
            tradeMark: 'Fusão EC',
            patentHolder: 'Iharabras S.A. Indústria Químicas - Sorocaba',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '61.142.550/0001-30',
            actionMethod: 'Sistêmico.',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Bag in box\nMaterial: Fibra de papel com bolsa plástica interna\nCapacidade: 5,0; 6,0; 10; 15; 20; 30; 50; 100 L.\n\nTipo: Balde\nMaterial: Metálico/Plástico\nCapacidade: 10; 15; 20; 30; 40; 50; 100 L.\n\nTipo: Bombona\nMaterial: Plástico\nCapacidade: 5,0; 6,0; 10; 15; 20; 30; 50; 100 L.\n\nTipo: Contentor intermediário(IBC)\nMaterial: Metálico/Plástico\nCapacidade: 50; 100; 150; 200; 250; 500; 1.000 L.\n\nTipo: Frasco\nMaterial: Plástico\nCapacidade: 0,1; 0,2; 0,25; 0,3; 0,5; 1,0; 1,5; 2,0 L.\n\nTipo: Stand-up pouch, com tampa\nMaterial: Plástico\nCapacidade: 0,1; 0,2; 0,25; 0,3; 0,5; 1,0; 1,5; 2,0 L.',
            activeIngredients: [
                {
                    name: 'metominostrobin',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'tebuconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 14422,
            tradeMark: 'Kayko 250 EC',
            patentHolder: 'Tagros Brasil Comércio de Produtos Químicos Ltda.',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '21.545.388/0001-86',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Frasco\nMaterial: Plástico\nCapacidade: 2 L\nTipo: Tambor\nMaterial: Metálico\nCapacidade: 220 L',
            activeIngredients: [
                {
                    name: 'difenoconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 14576,
            tradeMark: 'Miravis',
            patentHolder: 'Syngenta Proteção de Cultivos Ltda. – São Paulo ',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '60.744.463/0001-90',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Frasco\nMaterial: Plástico\nCapacidade: 2 L\nTipo: Bombona\nMaterial: Plástico\nCapacidade: 25 L\nTipo: Bag-in-box\nMaterial: Fibra celulósica com bolsa plástica interna\nCapacidade: 25 L\nTipo: Balde\nMaterial: Metálico\nCapacidade: 25 L\nTipo: Lata\nMaterial: Metálico\nCapacidade: 5 L\nTipo: Tambor\nMaterial: Fibra celulósica com bolsa plástica interna\nCapacidade: 25 L',
            activeIngredients: [
                {
                    name: 'Pidiflumetofen',
                    concentration: 'carboxamida',
                },
            ],
        },
        {
            id: 14578,
            tradeMark: 'Miravis Duo',
            patentHolder: 'Syngenta Proteção de Cultivos Ltda. – São Paulo ',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '60.744.463/0001-90',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Frasco\nMaterial: Plástico\nCapacidade: 2 L\nTipo: Bombona\nMaterial: Plástico\nCapacidade: 60 L\nTipo: Bag in box\nMaterial: Fibra celulósica com saco plástico interno\nCapacidade: 20 L\nTipo: Balde\nMaterial: Metálico\nCapacidade: 30 L\nTipo: Lata\nMaterial: Metálico\nCapacidade: 30 L',
            activeIngredients: [
                {
                    name: 'Pidiflumetofen',
                    concentration: 'carboxamida',
                },
                {
                    name: 'difenoconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 14597,
            tradeMark: 'Miravis Top',
            patentHolder: 'Syngenta Proteção de Cultivos Ltda. – São Paulo ',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '60.744.463/0001-90',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging: '',
            activeIngredients: [
                {
                    name: 'Pidiflumetofen',
                    concentration: 'carboxamida',
                },
                {
                    name: 'difenoconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 18715,
            tradeMark: 'Mitrion',
            patentHolder: 'Syngenta Proteção de Cultivos Ltda. – São Paulo ',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '60.744.463/0001-90',
            actionMethod: '',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Bag in box\nMaterial: Fibra celulósica com bolsa plástica interna\nCapacidade: 20 L\nTipo: Balde\nMaterial: Metálico/Plástico\nCapacidade: 30 L\nTipo: Bombona\nMaterial: Plástico\nCapacidade: 60 L\nTipo: Contentor intermediário- IBC\nMaterial: Plástico/Metálico com estrutura metálica externa\nCapacidade: 1200 L\nTipo: Frasco\nMaterial: Plástico\nCapacidade: 2 L\nTipo: Lata\nMaterial: Metálico\nCapacidade: 30 L\nTipo: Sachê com tampa\nMaterial: Fibra celulósica/Fibra celulósica revestida com plástico/Fibra celulósica revestida com plástico metalizado/Plástico/Plástico metalizado\nCapacidade: 0,1 L\nTipo: Tambor\nMaterial: Metálico/Plástico\nCapacidade: 220 L',
            activeIngredients: [
                {
                    name: 'Benzovindiflupyr',
                    concentration: 'pirazol carboxamida',
                },
                {
                    name: 'Protioconazol',
                    concentration: 'Triazolinthione',
                },
            ],
        },
        {
            id: 10964,
            tradeMark: 'Prisma Plus; Ehvero;',
            patentHolder: 'Helm do Brasil Mercantil - São Paulo/SP',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '47.176.755/0001-05',
            actionMethod: 'sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Balde\nMaterial: Plástico\nCapacidade: 20; 25; 50 L.\n\nTipo: Bombona\nMaterial: Plástico\nCapacidade: 5,0; 10; 15; 20 L.\n\nTipo: Frasco\nMaterial: Plástico\nCapacidade: 0,1; 0,2; 0,25; 0,4; 0,5; 1,0; 2,0 L.\n\nTipo: Tambor\nMaterial: Plástico/Metálico\nCapacidade: 50; 100; 200; 500 L.',
            activeIngredients: [
                {
                    name: 'difenoconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 14066,
            tradeMark: 'Propiconazole Nortox 500 EC',
            patentHolder: 'Nortox S.A. - Arapongas',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '75.263.400/0001-99',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging: '',
            activeIngredients: [
                {
                    name: 'propiconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 11293,
            tradeMark: 'Rivax',
            patentHolder:
                'Sumitomo Chemical Brasil Indústria Química S.A. - Maracanaú/CE',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '07.467.822/0001-26',
            actionMethod: 'Sistêmico.',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging: '',
            activeIngredients: [
                {
                    name: 'carbendazim',
                    concentration: 'benzimidazol',
                },
                {
                    name: 'tebuconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 5134,
            tradeMark: 'Score',
            patentHolder: 'Syngenta Proteção de Cultivos Ltda. – São Paulo ',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '60.744.463/0001-90',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: 'Não se conhecem casos de incompatibilidade.',
            packaging:
                'Frasco Plástico: 0,25; 0,4; 0,5 e 1 L; \nLata de fibra ou metal: 0,25; 0,4; 0,5 e 1 L; \nBombona de Plástico: 5, 10, 20 L, 100L, 180L, 200L e 220L; \nBalde metálico: 20 L; \nBandeja plástica de polipropileno ou poliestireno: 1 L; \nFarm pack de plástico: 420, 640 e 1000 L;\nTambor metálico: 100L, 180L, 200L, 220L;\nBag in Box: 5L, 10L, 20L, 100L, 180L, 200L, 220L e 1000L.',
            activeIngredients: [
                {
                    name: 'difenoconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 8263,
            tradeMark: 'Score Flexi®',
            patentHolder: 'Syngenta Proteção de Cultivos Ltda. – São Paulo ',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '60.744.463/0001-90',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Frasco plástico com 1 e 2 L;\nBombona plástica com 2,5 e 10 L;\nTambor plástico de 20, 50 e 100 L;\nFarm-pack plástico de 420, 500 e 1000L.',
            activeIngredients: [
                {
                    name: 'propiconazol',
                    concentration: 'triazol',
                },
                {
                    name: 'difenoconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 16599,
            tradeMark: 'Segonis®',
            patentHolder: 'Basf S.A. – São Paulo',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '48.539.407/0001-18',
            actionMethod: '',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Bag in box\nMaterial: Fibra celulósica com saco plástico interno\nCapacidade: 20 L\nTipo: Balde\nMaterial: Metálico/Plástico\nCapacidade: 30 L\nTipo: Bombona\nMaterial: Plástico\nCapacidade: 60 L\nTipo: Frasco\nMaterial: Plástico\nCapacidade: 2 L\nTipo: Sachê com tampa\nMaterial: Plástico/Plástico metalizado\nCapacidade: 0,1 L\nTipo: Tambor\nMaterial: Metálico/Plástico\nCapacidade: 220 L',
            activeIngredients: [
                {
                    name: 'mefentrifluconazol',
                    concentration: 'triazol',
                },
                {
                    name: 'piraclostrobina',
                    concentration: 'estrobilurina',
                },
            ],
        },
        {
            id: 15161,
            tradeMark: 'Sevare 250 EC',
            patentHolder: 'Cropchem Ltda - Porto Alegre',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '03.625.679/0001-00',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Frasco\nMaterial: Plástico\nCapacidade: 10 L\nTipo: Bombona\nMaterial: Plástico\nCapacidade: 50 L\nTipo: Tambor\nMaterial: Metálico, Plástico, Fibra celulósica\nCapacidade: 50 L\nTipo: Isotanque\nMaterial: Metálico,Plástico\nCapacidade: 1000 L\nTipo: Bulk\nMaterial: Metálico,Plástico\nCapacidade: 1000 L\nTipo: Tanque estacionário- Granel\nMaterial: Metálico,Plástico\nCapacidade: 60000 L',
            activeIngredients: [
                {
                    name: 'difenoconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 10769,
            tradeMark: 'Sonora',
            patentHolder: 'Iharabras S.A. Indústria Químicas - Sorocaba',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '61.142.550/0001-30',
            actionMethod: 'de contato e sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Bag in box; Material: fibra de papel com bolsa plástica interna; Capacidade: 5,0;6,0; 10; 15;20;40;50 e 100 L\nTipo: Balde; Material: Metálico/ Plástico; Capacidade 10; 15; 20; 30; 40; 50 e 100 L\nTipo: Bombona; Material: Plástico; Capacidade: 5,0; 6,0; 10; 15; 20; 30; 50 e 100 L\nTipo: Contentor intermediário (IBC); Material: Metálico/ Plástico; Capacidade: 50; 100; 200; 250; 500 e 1000 L\nTipo: Stand up pouch, com tampa: Material: Plástico; Capacidade: 0,1; 0,2; 0,25; 0,3; 0,5; 1,0; 1,5 e 2,0 L\nTipo: Frasco; Material: Plástico; Capacidade:  0,1; 0,2; 0,25; 0,3; 0,5; 1,0; 1,5 e 2,0 L\n',
            activeIngredients: [
                {
                    name: 'tebuconazol',
                    concentration: 'triazol',
                },
                {
                    name: 'metominostrobin',
                    concentration: 'estrobilurina',
                },
            ],
        },
        {
            id: 8372,
            tradeMark: 'Support WG',
            patentHolder: 'Sipcam Nichino Brasil S.A. - Uberaba/MG',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification: 'III - Produto Perigoso ao Meio Ambiente',
            registerNumber: 'III - Produto Perigoso ao Meio Ambiente',
            cnpj: '23.361.306/0001-79',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: 'Não há casos de incompatibilidade',
            packaging:
                '- 20; 40 e 50 g;\n- 0,1; 0,15; 0,2; 0,25; 0,3; 0,5; 0,6; 1; 1,2; 1,5; 2; 5; 9; 10; 11; 15; 20; 25; 30; 35; 36; 41; 43; 50; 60 e 70 kg.',
            activeIngredients: [
                {
                    name: 'tiofanato-metílico',
                    concentration: 'benzimidazol (precursor de)',
                },
            ],
        },
        {
            id: 15299,
            tradeMark: 'Tagzole 250 EC',
            patentHolder: 'Tagros Brasil Comércio de Produtos Químicos Ltda.',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '21.545.388/0001-86',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Frasco\nMaterial: Plástico\nCapacidade: 2 L\nTipo: Tambor\nMaterial: Metálico\nCapacidade: 220 L',
            activeIngredients: [
                {
                    name: 'difenoconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 9275,
            tradeMark: 'Tebufort',
            patentHolder:
                'UPL do Brasil Indústria e Comércio de Insumos Agropecuários S.A. - Matriz Ituverava/SP ',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '02.974.733/0001-52',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Terrestre',
            compatibility: '',
            packaging:
                'Balde PEAD/COEX - 5,0; 10; 20; 50 L\nBombona PEAD/COEX/Aço - 5,0; 10; 20; 50 L\nContainer de Aço Inox - 500; 1 000; 1 500 L\nContentor Intermediário (IBC) de Plástico - 1 000 L\nFrasco de PEAD/COEX/PET - 0,05; 0,07; 0,1; 0,25; 0,35; 0,5; 1,0; 1,2; 2,0; 4,0; 5,0 L\nGalão PEAD/COEX - 5,0 L\nSaco de Polietileno - 500; 1 000; 750 L\nTambor PEAD - 100; 200 L',
            activeIngredients: [
                {
                    name: 'tebuconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 9224,
            tradeMark: 'Tebuzim 250 SC',
            patentHolder:
                'Rotam do Brasil Agroquímica e Produtos Agrícolas Ltda.',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '05.772.606/0001-69',
            actionMethod: 'sistêmico e seletivo',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging: 'VIDE BULA.',
            activeIngredients: [
                {
                    name: 'carbendazim',
                    concentration: 'benzimidazol',
                },
                {
                    name: 'tebuconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 8375,
            tradeMark: 'Tiofanato 850 WG SNB',
            patentHolder: 'Sipcam Nichino Brasil S.A. - Uberaba/MG',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification: 'III - Produto Perigoso ao Meio Ambiente',
            registerNumber: 'III - Produto Perigoso ao Meio Ambiente',
            cnpj: '23.361.306/0001-79',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Caixa de papelão: 0,25; 0,3; 0,5; 0,6; 1 kg\nCaixa ou cartucho contendo sacos hidrossolúveis de papelão: 0,5; 1,0 e 1,2 kg\nSaco de polietileno/poliéster ou polietileno/poliéster aluminizado ou metalizado: 0,1; 0,25; 0,3; 0,5; 0,6; 1,0; 2,0; 5,0; 10 e 25 kg.\nSaco aluminizado ou metalizado: 0,1; 0,25; 0,3; 0,5; 0,6; 1,0; 2,0; 5,0; 10 e 25 kg\nSaco contendo sacos hidrossolúveis de polietileno/poliéster ou polietileno/poliéster aluminizado ou metalizado: 0,3; 0,5; 0,6; 1,0; 1,2 e 1,5 kg; 20; 40; 50; 100; 150; 200; 250; 300; 500 e 600g\nBalde metálico ou polietileno de 10 Kg\nTambor de fibra: 10 e 25 Kg.\nTamborete e saco de fibra e papel: 9; 11; 15; 20; 25; 30; 35; 36; 41; 43; 50; 60 e 70 kg.\n',
            activeIngredients: [
                {
                    name: 'tiofanato-metílico',
                    concentration: 'benzimidazol (precursor de)',
                },
            ],
        },
        {
            id: 11393,
            tradeMark: 'Topsin 875 WG',
            patentHolder: 'Iharabras S.A. Indústria Químicas - Sorocaba',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification: 'III - Produto Perigoso ao Meio Ambiente',
            registerNumber: 'III - Produto Perigoso ao Meio Ambiente',
            cnpj: '61.142.550/0001-30',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Frasco.\nMaterial: Plástico.\nCapacidade: 0,05; 0,1; 0,2; 0,25; 0,35; 0,45; 0,5; 0,9; 1,0 kg.\nTipo: Saco.\nMaterial: Hidrossolúvel.\nCapacidade: 0,01; 0,02; 0,03; 0,04; 0,05; 0,07; 0,09; 0,1; 0,2; 0,3; 0,5; 0,7; 0,9; 1,0 kg.\nTipo: Saco.\nMaterial: Plástico.\nCapacidade: 0,05; 0,1; 0,2; 0,25; 0,35; 0,45; 0,5; 0,9; 1,0; 4,5; 5,0; 10; 20; 25 kg.',
            activeIngredients: [
                {
                    name: 'tiofanato-metílico',
                    concentration: 'benzimidazol (precursor de)',
                },
            ],
        },
        {
            id: 9307,
            tradeMark: 'Virtuoso 250 SC',
            patentHolder:
                'Rotam do Brasil Agroquímica e Produtos Agrícolas Ltda.',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '05.772.606/0001-69',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging: '',
            activeIngredients: [
                {
                    name: 'carbendazim',
                    concentration: 'benzimidazol',
                },
                {
                    name: 'tebuconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 12894,
            tradeMark: 'Álibi',
            patentHolder: 'Syngenta Proteção de Cultivos Ltda. – São Paulo ',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '60.744.463/0001-90',
            actionMethod: '',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Bag in box\nMaterial: Fibra celulósica com bolsa plástica interna.\nCapacidade: 5; 10; 15; 20; 25; 40; 45; 50; 55; 60; 100; 180; 200; 220; 400; 450; 500; 550; 600; 680; 750; 937,5; 1.000 L.\nTipo: Balde.\nMaterial: Metálico.\nCapacidade: 5; 10; 15; 20; 25; 40; 45; 50; 55; 60 L.\nTipo: Bombona.\nMaterial: Plástico.\nCapacidade: 5; 10; 15; 20; 25; 40; 45; 50; 55; 60; 100; 180; 200; 220 L.\nTipo: Contêiner.\nMaterial: Plástico.\nCapacidade: 500; 550; 600; 680; 750; 937,5; 1.000 L.\nTipo: Frasco.\nMaterial: Plástico.\nCapacidade: 0,1; 0,25; 0,5; 1,0; 1,5; 2,0 L.\nTipo: Frasco.\nMaterial:Metálico.\nCapacidade: 0,25; 0,5; 1,0; 1,5; 2,0; 5,0 L.\nTipo: Saco(inserido em tambor de fibra celulósica.)\nMaterial: Plástico.\nCapacidade: 5; 10; 15; 20; 25; 40; 45; 50; 55; 60; 100; 180; 200; 220 L.',
            activeIngredients: [
                {
                    name: 'Azoxistrobina',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'difenoconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 13538,
            tradeMark: 'Azimut Supra',
            patentHolder: 'Adama Brasil S.A. - Londrina',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '02.290.510/0001-76',
            actionMethod: '',
            applicationMethod: '',
            compatibility: '',
            packaging:
                'Tipo: Big-Bag; Material: Ráfia; Capacidade: 100; 200; 300; 400; 500; 600; 700; 800; 900; 1.000 e 2000 Kg.\nTipo: Sachê; MAterial: Plástico Aluminizado/ Plástico; Capacidade: 0,1; 0,2; 0,25; 0,5; 1,0; 2,0; 2,5; 3,0; 3,5; 4,0; 4,5; 5,0 kg.\nTipo: Sachê com tampa; Material: Plástico Aluminizado; Capacidade: 1,0; 1,5; 2,0; 2,5; 3,0; 5,0; 10; 15; 20; 25; 30; 40 e 50 Kg.\nTipo: Saco; Material: Hidrossolúvel/ Plástico Aluminizado/ Plástico; Capacidade: 0,1; 0,2; 0,25; 0,5; 1,0; 1,5; 2,0; 2,5; 3,0; 5,0; 10;15; 20; 25; 30; 40 e 50 Kg.\nTipo: Tambor; Material: Metálico/ Plástico/ Fibra celulósica; Capacidade: 1,0; 2,0; 2,5; 3,0; 5,0; 10; 15; 20; 25; 30; 40; 50; 100; 200; 250; 300; 400 e 500 Kg',
            activeIngredients: [
                {
                    name: 'Azoxistrobina',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'tebuconazol',
                    concentration: 'triazol',
                },
                {
                    name: 'mancozebe',
                    concentration: 'alquilenobis(ditiocarbamato)',
                },
            ],
        },
        {
            id: 12905,
            tradeMark: 'Charrua 430 SC',
            patentHolder: 'Cropchem Ltda - Porto Alegre',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification: 'III - Produto Perigoso ao Meio Ambiente',
            registerNumber: 'III - Produto Perigoso ao Meio Ambiente',
            cnpj: '03.625.679/0001-00',
            actionMethod: 'Sistêmico ',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Bombona.\nMaterial: Plástico.\nCapacidade: 5 - 50 L.\nTipo: Frasco.\nMaterial: Plástico.\nCapacidade: 0,25 - 1,0 L.\nTipo: Balde.\nMaterial: Metálico.\nCapacidade: 20 - 50 L.\nTipo: Tambor.\nMaterial: Metálico/Plástico.\nCapacidade: 100 - 200 L.\nTipo: Contentor intermediário (IBC).\nMaterial: Plástico com estrutura metálica.\nCapacidade: 500 - 1.000 L.',
            activeIngredients: [
                {
                    name: 'tebuconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 5477,
            tradeMark: 'Comet',
            patentHolder: 'Basf S.A. – São Paulo',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '48.539.407/0001-18',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging: 'Frascos de polietileno(COEX): 1, 5, 10 e 20 L.',
            activeIngredients: [
                {
                    name: 'piraclostrobina',
                    concentration: 'estrobilurina',
                },
            ],
        },
        {
            id: 11138,
            tradeMark: 'Convicto',
            patentHolder: 'Adama Brasil S.A. - Londrina',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '02.290.510/0001-76',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Balde.\nMaterial: Metálico.\nCapacidade: 2,5; 3,0; 5,0; 10; 15; 20; 25; 30; 40; 50 L.\nTipo: Bombona.\nMaterial: Plástico.\nCapacidade: 2,5; 3,0; 5,0; 10; 15; 20; 25; 30; 40; 50 L.\nTipo: Container.\nMaterial: Metálico/Plástico.\nCapacidade: 500; 1.000; 2.000; 5.000; 10.000; 15.000; 20.000; 25.000; 30.000 L.\nTipo: Frasco.\nMaterial: Metálico/Plástico.\nCapacidade: 0,2; 0,25; 0,3; 0,4; 0,5; 0,6; 1,0; 1,5; 2,0; 2,2 L.\nTipo: Isocontainer.\nMaterial: Metálico/Plástico.\nCapacidade: 500; 1.000; 2.000; 5.000; 10.000; 15.000; 20.000; 25.000; 30.000 L.\nTipo: Tambor.\nMaterial: Metálico/Plástico.\nCapacidade: 50; 100; 150; 200; 250; 400; 500 L.\nTipo: Tanque.\nMaterial: Metálico/Fibra.\nCapacidade: 500; 1.000; 2.000; 5.000; 10.000; 15.000; 20.000; 25.000; 30.000 L.',
            activeIngredients: [
                {
                    name: 'Azoxistrobina',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'epoxiconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 11156,
            tradeMark: 'Convicto SC',
            patentHolder: 'Adama Brasil S.A. - Londrina',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '02.290.510/0001-76',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Balde.\nMaterial: Metálico.\nCapacidade: 2,5; 3,0; 5,0; 10; 15; 20; 25; 30; 40; 50 L.\nTipo: Bombona.\nMaterial: Plástico.\nCapacidade: 2,5; 3,0; 5,0; 10; 15; 20; 25; 30; 40; 50 L.\nTipo: Container.\nMaterial: Metálico/Plástico.\nCapacidade: 500; 1.000; 2.000; 5.000; 10.000; 15.000; 20.000; 25.000; 30.000 L.\nTipo: Frasco.\nMaterial: Metálico/Plástico.\nCapacidade: 0,2; 0,25; 0,3; 0,4; 0,5; 0,6; 1,0; 1,5; 2,0; 2,2 L.\nTipo: Isocontainer.\nMaterial: Metálico/Plástico.\nCapacidade: 500; 1.000; 2.000; 5.000; 10.000; 15.000; 20.000; 25.000; 30.000 L.\nTipo: Tambor.\nMaterial: Metálico/Plástico.\nCapacidade: 50; 100; 150; 200; 250; 400; 500 L.\nTipo: Tanque.\nMaterial: Metálico/Fibra.\nCapacidade: 500; 1.000; 2.000; 5.000; 10.000; 15.000; 20.000; 25.000; 30.000 L.',
            activeIngredients: [
                {
                    name: 'Azoxistrobina',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'epoxiconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 14916,
            tradeMark: 'Crevixar',
            patentHolder: 'Basf S.A. – São Paulo',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '48.539.407/0001-18',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Bag-in-box\nMaterial: Fibra celulósica com saco plástico interno\nCapacidade: 20 L\nTipo: Balde\nMaterial: Plástico/Metálico\nCapacidade: 30 L\nTipo: bombona\nMaterial: Plástico\nCapacidade: 60 L\nTipo: Frasco\nMaterial: Plástico\nCapacidade: 2 L\nTipo: Sachê com tampa\nMaterial: Fibra celulósica/Fibra celulósica revestida com plástico/Fibra celulósica revestida com plástico metalizado/Plástico/Plástico metalizado\nCapacidade: 0,1 L\nTipo: Tambor\nMaterial: Plástico/Metálico\nCapacidade: 220 L',
            activeIngredients: [
                {
                    name: 'mefentrifluconazol',
                    concentration: 'triazol',
                },
                {
                    name: 'piraclostrobina',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'fluxapiroxade',
                    concentration: 'carboxamida',
                },
            ],
        },
        {
            id: 14469,
            tradeMark: 'Cronnos ',
            patentHolder: 'Adama Brasil S.A. - Londrina',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '02.290.510/0001-76',
            actionMethod: 'Sistêmico/Contato',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Bag in box.\nMaterial:  Fibra celulósica com bolsa plástica interna.\nCapacidade: 1 - 50 L.\nTipo: Balde.\nMaterial:  Metálico/Plástico.\nCapacidade: 3 - 50 L.\nTipo: Bombona.\nMaterial:  Plástico.\nCapacidade: 3 - 50 L.\nTipo: Frasco.\nMaterial: Plástico.\nCapacidade: 0,2 - 2,5 L.\nTipo: Bulk.\nMaterial: Plástico.\nCapacidade: 100 - 1.000 L.\nTipo: Caixa.\nMaterial: Fibra celulósica.\nCapacidade: 1 - 50 L.\nTipo: Sachê com tampa.\nMaterial:  Alumínio/Plástico/Plástico aluminizado/Plástico metalizado.\nCapacidade: 1 - 50 L.\nTipo: Tambor.\nMaterial:  Metálico/Plástico.\nCapacidade: 60 - 500 L.',
            activeIngredients: [
                {
                    name: 'Picoxistrobina',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'tebuconazol',
                    concentration: 'triazol',
                },
                {
                    name: 'mancozebe',
                    concentration: 'alquilenobis(ditiocarbamato)',
                },
            ],
        },
        {
            id: 13215,
            tradeMark: 'Cuantiva',
            patentHolder: 'Basf S.A. – São Paulo',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '48.539.407/0001-18',
            actionMethod: '',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Bag in box.\nMaterial: Fibra de papel com bolsa plástico interno.\nCapacidade: 0,5; 1,0; 2,0; 3,0; 5,0; 10; 20 L.\nTipo: Balde.\nMaterial: Metálico/Plástico.\nCapacidade: 1; 5; 10; 20 L.\nTipo: Bombona.\nMaterial: Plástico.\nCapacidade: 10; 100; 2; 20; 3; 5; 50 L.\nTipo: Caminhão tanque.\nMaterial: Metálico.\nCapacidade:  300; 400; 500; 600; 700; 800; 850; 900; 925; 950; 960; 970; 980; 990; 1.000; 1.800; 2.000; 2.700; 3.000; 5.000; 10.000; 15.000; 16.000; 17.000; 18.000; 19.000; 20.000; 21.000; 22.000; 23.000; 24.000; 25.000; 29.000; 30.000 L.\nTipo:Contentor intermediário (IBC).\nMaterial: Metálico/Metal/Plástico com pallet de madeira/Plástico/Plástico com estrutura metálica.\nCapacidade: 300; 400; 500; 600; 700; 800; 850; 900; 925; 950; 960; 970; 980; 990; 1.000; 1.800; 2.000; 2.700; 3.000 L.\nTipo: Frasco.\nMaterial: Plástico.\nCapacidade: 0,1; 0,25; 0,5; 0,75; 1,0 L.\nTipo: Isocontainer.\nMaterial: Metálico.\nCapacidade: 300; 400; 500; 600; 700; 800; 850; 900; 925; 950; 960; 970; 980; 990; 1.000; 1.800; 2.000; 2.700; 3.000 L.\nTipo: Stand-up pouch, com tampa.\nMaterial: Plástico e plástico com estrutura metálica.\nCapacidade: 0,25; 0,5; 0,6; 1,0; 2,0; 3,0; 5,0; 10 L.\nTipo: Tambor.\nMaterial: Metálico e Plástico.\nCapacidade: 50; 100; 190; 200; 210 L.\nTipo: Tanque.\nMaterial: Metálico.\nCapacidade: 300; 400; 500; 600; 700; 800; 850; 900; 925; 950; 960; 970; 980; 990; 1.000; 1.800; 2.000; 2.700; 3.000 L.\n',
            activeIngredients: [
                {
                    name: 'fluxapiroxade',
                    concentration: 'carboxamida',
                },
                {
                    name: 'piraclostrobina',
                    concentration: 'estrobilurina',
                },
            ],
        },
        {
            id: 8490,
            tradeMark: 'Cypress 400 EC',
            patentHolder: 'Syngenta Proteção de Cultivos Ltda. – São Paulo ',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '60.744.463/0001-90',
            actionMethod: 'Sistêmico.',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: 'Não se conhecem casos de incompatibilidade',
            packaging:
                'Balde Metálico (Revestido ou não): 20 litros.\nBombona de plástico: 5, 10, 20 e 50 litros.\nBulks de plástico: 100, 200, 220, 225, 250, 300, 350, 400, 420, 450, 500, 530, 640 e 1000 litros.\nFrasco plástico: 0,25; 0,40; 0,50; 1; 1,5; 2; 2,5; 3; 4; 5; 6; 10; 20 e 25 litros.\nLata Metálica (Revestida ou não): 0,25; 0,4; 0,5; 1; 2; 2,5; 5; 10 e 20 litro.\nTambor Metálico (Revestido ou não): 10, 20, 25, 100, 125, 150, 160, 180, 200, 220, 250 e 400 litros.\nTambor plástico: 10, 20, 25, 100, 125, 150, 160, 180, 200, 220, 250 e 400 litros.\nTanque Metálico (Revestido ou não): 1000 litros.\nTanque de plástico: 1000 litros.',
            activeIngredients: [
                {
                    name: 'difenoconazol',
                    concentration: 'triazol',
                },
                {
                    name: 'ciproconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 11376,
            tradeMark: 'Desali',
            patentHolder: 'Syngenta Proteção de Cultivos Ltda. – São Paulo ',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '60.744.463/0001-90',
            actionMethod: 'Sistêmico',
            applicationMethod: '',
            compatibility: '',
            packaging: '',
            activeIngredients: [
                {
                    name: 'Azoxistrobina',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'Benzovindiflupyr',
                    concentration: 'pirazol carboxamida',
                },
            ],
        },
        {
            id: 9347,
            tradeMark: 'Domark Excell',
            patentHolder: 'Gowan Produtos Agrícolas Ltda. - Matriz Barueri-SP',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '67.148.692/0001-90',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging: '',
            activeIngredients: [
                {
                    name: 'tetraconazol',
                    concentration: 'triazol',
                },
                {
                    name: 'Azoxistrobina',
                    concentration: 'estrobilurina',
                },
            ],
        },
        {
            id: 11198,
            tradeMark: 'Elatus',
            patentHolder: 'Syngenta Proteção de Cultivos Ltda. – São Paulo ',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '60.744.463/0001-90',
            actionMethod: 'Sistêmico e de contato',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Balde - Metal - 3; 5 e 10kg\nBarrica - Aço - 5 10 20 25 40 100 150 200 250kg\nBarrica - Ferro - 5 10 20 25 40 100 150 200 250kg\nBarrica - Fibra - 5 10 20 25 40 100 150 200 250kg\nBarrica - Plástico - 5 10 20 25 40 100 150 200 250kg\nBig Bag - Ráfia - 350 400 450 500 550 600 620 680 750 800 900 937,5 e 1000kg\nBig Bag - Plástico  - 350 400 450 500 550 600 620 680 750 800 900 937,5 e 1000kg\nBombona - Plástico -  3; 5 e 10kg\nCaixa - Papelão - 3; 5; 10; 15; 20; 25; 40; 45; 50; 55; 57; 60; 100; 180; 200; 220; 400; 450; 500; 550; 600; 680; 750; 937,5 e 1000kg\nCartucho - Cartão - 1; 1,5; 2; 3 e 5kg\nContainers - Plástico - 500; 1000; 2000; 5000 e 10000kg\nContainers - Metálico - 500; 1000; 2000; 5000 e 10000kg\nFrasco - Plástico - 0,1; 0,25; 0,5; 1; 1,5; 2 e 3kg\nSaco - Plástico - 0,01; 0,02; 0,03; 0,04; 0,05; 0,067; 0,1; 0,25; 0,5; 1; 1,5; 2; 3; 5; 10; 15; 20; 25; 40; 45; 50; 55; 57 e 60kg\nSaco - Papel - 0,01; 0,02; 0,03; 0,04; 0,05; 0,067; 0,1; 0,25; 0,5; 1; 1,5; 2; 3; 5; 10; 15; 20; 25; 40; 45; 50; 55; 57 e 60kg\n Saco - Ráfia - 0,01; 0,02; 0,03; 0,04; 0,05; 0,067; 0,1; 0,25; 0,5; 1; 1,5; 2; 3; 5; 10; 15; 20; 25; 40; 45; 50; 55; 57 e 60kg\nTambor - Fibra celulósica - 5; 10; 15; 20; 25; 40; 45; 50; 55; 57; 60; 100; 180; 200; 220 e 400kg\nTambor - Metal -  5; 10; 15; 20; 25; 40; 45; 50; 55; 57; 60; 100; 180; 200; 220 e 400kg\nTambor - Plástico -  5; 10; 15; 20; 25; 40; 45; 50; 55; 57; 60; 100; 180; 200; 220 e 400kg',
            activeIngredients: [
                {
                    name: 'Azoxistrobina',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'Benzovindiflupyr',
                    concentration: 'pirazol carboxamida',
                },
            ],
        },
        {
            id: 11381,
            tradeMark: 'Eminent Excell',
            patentHolder: 'Gowan Produtos Agrícolas Ltda. - Matriz Barueri-SP',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '67.148.692/0001-90',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Terrestre',
            compatibility: '',
            packaging:
                'Frasco - metálico e plástico - 1,0; 1,5; 2,0; 2,5 e 3,0L\nBombona - metálico e plático - 5,0; 10,0; 20,0; 25,0 e 50,0L\nBalde - metálico e plástico - 5,0; 10,0; 20,0; 25,0 e 50,0L\nTambor - metálico e plástico - 100,0; 200,0; 250,0; 500,0; 1.000,0; 2.000,0; 2.500,0 e 5.000,0L\nTanque - aço-inox - 10.000,0; 15.000,0; 20.000,0; 23.000,0 e 25.000,0L',
            activeIngredients: [
                {
                    name: 'tetraconazol',
                    concentration: 'triazol',
                },
                {
                    name: 'Azoxistrobina',
                    concentration: 'estrobilurina',
                },
            ],
        },
        {
            id: 10173,
            tradeMark: 'Eminent Gold',
            patentHolder: 'Gowan Produtos Agrícolas Ltda. - Matriz Barueri-SP',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification: 'III - Produto Perigoso ao Meio Ambiente',
            registerNumber: 'III - Produto Perigoso ao Meio Ambiente',
            cnpj: '67.148.692/0001-90',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Frasco PEAD 1, 1,5, 2, 3 L\nFrasco metálico 1, 1,5, 2, 3 L\nBalde PEAD 5, 10, 20, 50 L\nBalde metálico 5, 10, 20, 50 L\nBombona PEAD 5, 10, 20, 50 L\nBombona metálico 5, 10, 20, 50 L\nTambor PEAD 100, 200, 250, 500, 1000, 2000, 2500, 5000 L\nTambor metálico 100, 200, 250, 500, 1000, 2000, 2500, 5000 L\nTanque container aço inox 10000, 15000, 20000, 23000, 25000',
            activeIngredients: [
                {
                    name: 'tetraconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 7923,
            tradeMark: 'Eminent 125 EW; Yaba 125 EW; ',
            patentHolder: 'Gowan Produtos Agrícolas Ltda. - Matriz Barueri-SP',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification: 'III - Produto Perigoso ao Meio Ambiente',
            registerNumber: 'III - Produto Perigoso ao Meio Ambiente',
            cnpj: '67.148.692/0001-90',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Frasco plástico ou metálico com volume líquido de 0,25; 0,3; 0,5; 1 ; 1,5; 2 ; 2,5; 3 L.\nBombona ou balde plástico ou metálico com volume líquido de 5, 10, 20, 50 L.\nTambor plástico ou metálico com volume líquido de 100, 200, 250, 500, 1.000, 2.000, 2.500,\n5.000 L.\nTanque container estruturado, em aço inox, com proteção anticorrosiva com volume líquido\nde 10.000, 15.000, 20.000, 23000, 25.000L L.\n',
            activeIngredients: [
                {
                    name: 'tetraconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 11038,
            tradeMark: 'Evos',
            patentHolder:
                'ALTA - America Latina Tecnologia Agrícola Ltda.- Curitiba',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '10.409.614/0001-85',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Bombona\nMaterial: Plástico\nCapacidade: 1,0; 5,0; 6,0; 10 e 20 Litros.\n\nTipo: Bombona\nMaterial: Polietileno\nCapacidade: 1,0; 3,0; 5,0; 10 e 20 Litros.\n\nTipo: Frasco\nMaterial: Plástico\nCapacidade: 0,25; 1,0; 1,5; 2,5; 3,0; 5,0; 6,0; 20 Litros.\n\nTipo: Frasco\nMaterial: Polietileno\nCapacidade: 0,5; 1,0; 1,5; 2,0; 5,0 Litros.\n\nTipo: Bulk\nMaterial: Plástico/Aço/Metálico\nCapacidade: 1.000; 5.000; 10.000; 20.000 Litros.\n\nTipo: Farm-Pack\nMaterial: Aço/Ferro/Plástico\nCapacidade: 420 e 1.000 Litros.\n\nTipo: Tambor\nMaterial: Aço/Ferro/Plástico\nCapacidade: 160; 180 e 200 Litros.\n\nTipo: Tanque\nMaterial: Aço/Ferro/Plástico\nCapacidade: 1.000; 1.100; 5.000; 10.000 e 20.000 Litros.',
            activeIngredients: [
                {
                    name: 'flutriafol',
                    concentration: 'triazol',
                },
                {
                    name: 'Azoxistrobina',
                    concentration: 'estrobilurina',
                },
            ],
        },
        {
            id: 9887,
            tradeMark: 'Galileo Excell',
            patentHolder: 'Gowan Produtos Agrícolas Ltda. - Matriz Barueri-SP',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '67.148.692/0001-90',
            actionMethod: 'sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging: '',
            activeIngredients: [
                {
                    name: 'tetraconazol',
                    concentration: 'triazol',
                },
                {
                    name: 'Azoxistrobina',
                    concentration: 'estrobilurina',
                },
            ],
        },
        {
            id: 13915,
            tradeMark: 'Kitter',
            patentHolder: 'Sinon do Brasil Ltda. - Porto Alegre /RS.',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '03.417.347/0001-22',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Balde\nMaterial: Metálico\nCapacidade: 20 L\nTipo: Bombona\nMaterial: Plástico\nCapacidade: 50 L\nTipo: Frasco\nMaterial: Plástico\nCapacidade: 1 L',
            activeIngredients: [
                {
                    name: 'tebuconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 8440,
            tradeMark: 'Odin 430 SC',
            patentHolder:
                'Rotam do Brasil Agroquímica e Produtos Agrícolas Ltda.',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '05.772.606/0001-69',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: 'Não se conhecem casos de incompatibilidade',
            packaging:
                'Tipo: Bombona\nMaterial: PEAD(polietileno de alta densidade)\nCapacidade: 5; 10; 20 L.\n\nTipo: Frasco\nMaterial: PEAD(polietileno de alta densidade)\nCapacidade: 0,25; 1,0 L.',
            activeIngredients: [
                {
                    name: 'tebuconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 14999,
            tradeMark: 'Ofek-Turbo; Ensis-turbo;',
            patentHolder:
                'Globachem Proteção de Cultivos do Brasil Ltda. - São Paulo/SP',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '43.741.357/0001-33',
            actionMethod: '',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Balde\nMaterial: Plástico/Metálico\nCapacidade: 30 L\nTipo: Bombona\nMaterial: Plástico\nCapacidade: 60 L\nTipo: Contentor intermediário (IBC)\nMaterial: Plástico com estrutura metálica externa/Metálico com estrutura metálica externa\nCapacidade: 1.200 L\nTipo: Frasco\nMaterial: Plástico\nCapacidade: 2 L\nTipo: Lata\nMaterial: Metálico\nCapacidade: 30 L\nTipo: Tambor\nMaterial: Plástico/Metálico\nCapacidade: 220 L',
            activeIngredients: [
                {
                    name: 'Azoxistrobina',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'tebuconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 5457,
            tradeMark: 'Opera',
            patentHolder: 'Basf S.A. – São Paulo',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '48.539.407/0001-18',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: 'Incompatível com produtos fortemente alcalinos.',
            packaging:
                'Frasco de polietileno: 0,5; 1,0; 1,5 e 2,0 L. Bombonas de polietileno: 3, 5, 10 e 20 L.',
            activeIngredients: [
                {
                    name: 'epoxiconazol',
                    concentration: 'triazol',
                },
                {
                    name: 'piraclostrobina',
                    concentration: 'estrobilurina',
                },
            ],
        },
        {
            id: 10578,
            tradeMark: 'Orkestra SC',
            patentHolder: 'Basf S.A. – São Paulo',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '48.539.407/0001-18',
            actionMethod: 'sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Frasco - Plástico - 0,1; 0,25; 0,5; 0,6; 1,0; 1,5 litros\nBombona - Plástico  - 2; 2,5; 3; 5; 10; 15; 20; 50; 100 litros\nBag in box - Papelão/Plástico - 0,1; 0,25; 0,5; 0,6; 1; 1,6; 2; 2,5; 5; 10; 20 litros\nStand-up pouch com tampa - Plástico/Plástico metalizado - 0,1; 0,25; 0,5; 0,6; 1; 1,6; 2; 2,5; 5; 10; 20 litros\nLata - Metálico/Plástico - 1; 5; 10 e 20 litros\nBalde - Metálico/Plástico - 1; 5; 10 e 20 litros\nTambor - Metálico/Plástico - 50; 100; 190; 200 e 210 litros\nTanque; contentor intermediário (IBC) - Metálico/Plástico/Fibra com papel bolsa plástica interna/\nmetal/plástico com papel pallet de madeira/plástico com papel pallet de plástico - 950; 960; 970; 980; 990; 1000; 1800; 2000; 2700; 3000 litros\nTanque; isocontainer/ caminhão tanque - metal - 5000; 10.000; 15.000; 16.000; 17.000; 18.000; 19.000; 20.000; 21.000; 22.000; 23.000; 24.000; 25.000; 29.000; 30.000 litros',
            activeIngredients: [
                {
                    name: 'piraclostrobina',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'fluxapiroxade',
                    concentration: 'carboxamida',
                },
            ],
        },
        {
            id: 14185,
            tradeMark: 'Ozean',
            patentHolder: 'Helm do Brasil Mercantil - São Paulo/SP',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '47.176.755/0001-05',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Frasco\nMaterial: Plástico\nCapacidade: 2 L\nTipo: Bombona\nMaterial: Plástico\nCapacidade: 50 L\nTipo: Balde\nMaterial: Plástico\nCapacidade: 30 L\nTipo: Tambor\nMaterial: Plástico/Metálico\nCapacidade: 200 L',
            activeIngredients: [
                {
                    name: 'Azoxistrobina',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'difenoconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 17593,
            tradeMark: 'Pladius',
            patentHolder:
                'Sumitomo Chemical Brasil Indústria Química S.A. - Maracanaú/CE',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '07.467.822/0001-26',
            actionMethod: '',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Bag in box\nMaterial: Fibra celulósica com saco plástico interno\nCapacidade: 20 L\nTipo: Bombona\nMaterial: Plástico\nCapacidade: 50 L\nTipo: Contentor intermediário- IBC\nMaterial: Plástico com estrutura metálica externa\nCapacidade: 1000 L\nTipo: Frasco\nMaterial: Plástico\nCapacidade: 1 L',
            activeIngredients: [
                {
                    name: 'impirfluxam',
                    concentration: 'carboxamida',
                },
                {
                    name: 'difenoconazol',
                    concentration: 'triazol',
                },
                {
                    name: 'Picoxistrobina',
                    concentration: 'estrobilurina',
                },
            ],
        },
        {
            id: 9782,
            tradeMark: 'Pladox',
            patentHolder: 'Basf S.A. – São Paulo',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '48.539.407/0001-18',
            actionMethod: 'sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging: '',
            activeIngredients: [
                {
                    name: 'piraclostrobina',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'epoxiconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 8962,
            tradeMark: 'Priori Top',
            patentHolder: 'Syngenta Proteção de Cultivos Ltda. – São Paulo ',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '60.744.463/0001-90',
            actionMethod: 'sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'BOMBONA DE PLÁSTICO - 10 E 20 L.\nBULK DE AÇO/FERRO/PLÁSTICO - 1.000; 5.000; 10.000; 20.000 L.\nFARM-PACK DE PLÁSTICO - 420 E 1.000 L.\nFRASCO PLÁSTICO - 0,25; 1,0; 1,5; 2,5; 3,0; 5,0; 6,0 E 20 L.\nTAMBOR DE AÇO/FERRO/PLÁSTICO - 160; 180 E 200 L.',
            activeIngredients: [
                {
                    name: 'Azoxistrobina',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'difenoconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 9783,
            tradeMark: 'Prospect',
            patentHolder: 'Basf S.A. – São Paulo',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '48.539.407/0001-18',
            actionMethod: 'sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging: '',
            activeIngredients: [
                {
                    name: 'piraclostrobina',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'epoxiconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 10283,
            tradeMark: 'Seven',
            patentHolder:
                'ALTA - America Latina Tecnologia Agrícola Ltda.- Curitiba',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification: 'III - Produto Perigoso ao Meio Ambiente',
            registerNumber: 'III - Produto Perigoso ao Meio Ambiente',
            cnpj: '10.409.614/0001-85',
            actionMethod: 'Contato',
            applicationMethod: 'Terrestre',
            compatibility: '',
            packaging:
                'Tipo: Balde.\nMaterial: Plástico.\nCapacidade: 2,5; 5,0; 10; 15; 20; 25 L.\nTipo: Bombona.\nMaterial: Plástico.\nCapacidade: 1; 5; 10; 20 L.\nTipo: Frasco.\nMaterial: Plástico.\nCapacidade: 0,1; 0,2; 0,25; 0,5; 1,0; 2,0; 5,0; 10; 20 L.',
            activeIngredients: [
                {
                    name: 'tebuconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 8492,
            tradeMark: 'Solist 430 SC',
            patentHolder:
                'Rotam do Brasil Agroquímica e Produtos Agrícolas Ltda.',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '05.772.606/0001-69',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: 'Não se conhecem casos de incompatibilidade',
            packaging:
                'Frasco PEAD:\n250 mL e 1,0 L.\n\nBombona PEAD:\n5, 10 e 20 L.',
            activeIngredients: [
                {
                    name: 'tebuconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 11772,
            tradeMark: 'Tamiz',
            patentHolder:
                'Sumitomo Chemical Brasil Indústria Química S.A. - Maracanaú/CE',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '07.467.822/0001-26',
            actionMethod: '',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Bag in box.\nMaterial: Fibra celulósica com bolsa plástica interna.\nCapacidade: 1 - 500 L.\nTipo: Balde.\nMaterial: Metálico/Plástico.\nCapacidade: 5 - 25 L.\nTipo: Bombona.\nMaterial: Plástico.\nCapacidade: 2,5 - 50 L.\nTipo: Bulk.\nMaterial: Metálico.\nCapacidade: 1.000 - 25.000 L.\nTipo: Contentor intermediário (IBC).\nMaterial: Plástico com estrutura metálica.\nCapacidade: 300 - 2.000 L.\nTipo: Frasco.\nMaterial: Metálico/Plástico.\nCapacidade: 0,1 - 5,0 L.\nTipo: Tambor.\nMaterial: Metálico/Plástico.\nCapacidade: 50 - 1.000 L.',
            activeIngredients: [
                {
                    name: 'Azoxistrobina',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'tebuconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 14324,
            tradeMark: 'Tebuco BRX',
            patentHolder: 'Nortox S.A. - Arapongas',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification: 'III - Produto Perigoso ao Meio Ambiente',
            registerNumber: 'III - Produto Perigoso ao Meio Ambiente',
            cnpj: '75.263.400/0001-99',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Bombona.\nMaterial: Plástico.\nCapacidade: 20 - 200 L.\nTipo: Frasco.\nMaterial: Plástico.\nCapacidade: 0,25 - 10 L.\nTipo: Tambor.\nMaterial: Metálico e Plástico.\nCapacidade: 50 - 1.000 L.\nTipo:\nMaterial:\nCapacidade:',
            activeIngredients: [
                {
                    name: 'tebuconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 12647,
            tradeMark: 'Tebuco 430 SC Nortox',
            patentHolder: 'Nortox S.A. - Arapongas',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification: 'III - Produto Perigoso ao Meio Ambiente',
            registerNumber: 'III - Produto Perigoso ao Meio Ambiente',
            cnpj: '75.263.400/0001-99',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Bombona.\nMaterial: Plástico.\nCapacidade: 20 - 200 L.\nTipo: Frasco.\nMaterial: Plástico.\nCapacidade: 0,25 - 10 L.\nTipo: Tambor.\nMaterial: Metálico/Plástico.\nCapacidade: 50 - 1.000 L.',
            activeIngredients: [
                {
                    name: 'tebuconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 12888,
            tradeMark: 'Teburaz',
            patentHolder: 'Ouro Fino Química S.A. - Uberaba',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '09.100.671/0001-07',
            actionMethod: '',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Bag in box\nMaterial: fibra celulósica com bolsa plástica interna\nCapacidade: 20 L\nTipo: Balde\nMaterial: Plástico, Metálico\nCapacidade: 20 L\nTipo: Bombona\nMaterial: Plástico, Metálico\nCapacidade: 20 L\nTipo: Contentor intermediário (IBC)\nMaterial: Plástico\nCapacidade: 1.000 L\nTipo: Frasco\nMaterial: Plástico, Metálico\nCapacidade: 1 L\nTipo: Tambor\nMaterial: Plástico, Metálico\nCapacidade: 200 L',
            activeIngredients: [
                {
                    name: 'Azoxistrobina',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'tebuconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 13627,
            tradeMark: 'Triziman',
            patentHolder:
                'UPL do Brasil Indústria e Comércio de Insumos Agropecuários S.A. - Matriz Ituverava/SP ',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '02.974.733/0001-52',
            actionMethod: 'Sistêmico',
            applicationMethod: '',
            compatibility: '',
            packaging:
                'Tipo: Balde\nMaterial: Metálico/Plástico/Fibra celulósica\nCapacidade: 1,0; 2,0; 5,0; 10; 12,5; 15; 20; 24; 25 kg.\n\nTipo: Big-bag\nMaterial: Plástico/Ráfia\nCapacidade: 100; 200; 300; 400; 500; 600; 700; 800; 900; 1.000 kg.\n\nTipo: Bombona\nMaterial: Metálico/Plástico\nCapacidade: 1,0; 3,0; 5,0; 10; 12,5; 14; 15; 20; 50 kg.\n\nTipo: Frasco\nMaterial: Metálico/Plástico/Fibra celulósica\nCapacidade: 1,0; 2,0; 5,0; 10; 12,5; 15; 20; 24; 25 kg.\n\nTipo: Saco\nMaterial: Plástico/Plástico metalizado/Plástico aluminizado\nCapacidade: 0,1; 0,25; 0,3; 0,5; 0,6; 1,0; 2,0; 5,0; 9,0; 10; 11; 12,5; 15; 20; 24; 25; 30; 35; 36; 40; 41; 43; 50; 60; 70 kg.\n\nTipo: Tambor\nMaterial: Metálico/Plástico/Fibra celulósica\nCapacidade: 9,0; 11; 12,5; 15; 20; 25; 30; 35; 36; 41; 43; 50; 60; 70 kg.',
            activeIngredients: [
                {
                    name: 'Azoxistrobina',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'mancozebe',
                    concentration: 'alquilenobis(ditiocarbamato)',
                },
                {
                    name: 'ciproconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 16940,
            tradeMark: 'Unidos',
            patentHolder: 'Ouro Fino Química S.A. - Uberaba',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '09.100.671/0001-07',
            actionMethod: '',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Bag in box\nMaterial: Fibra celulósica com bolsa plástica interna\nCapacidade: 20 L\nTipo: Balde\nMaterial: Plástico, Metálico\nCapacidade: 20 L\nTipo: Bombona\nMaterial: Plástico, Metálico\nCapacidade: 20 L\nTipo: Contentor intermediário (IBC)\nMaterial: Plástico\nCapacidade: 1.000 L\nTipo: Frasco\nMaterial: Plástico, Metálico\nCapacidade: 1 L\nTipo: Tambor\nMaterial: Plástico, Metálico\nCapacidade: 200 L',
            activeIngredients: [
                {
                    name: 'Azoxistrobina',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'tebuconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 12666,
            tradeMark: 'Unizeb Glory',
            patentHolder:
                'UPL do Brasil Indústria e Comércio de Insumos Agropecuários S.A. - Matriz Ituverava/SP ',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification: 'III - Produto Perigoso ao Meio Ambiente',
            registerNumber: 'III - Produto Perigoso ao Meio Ambiente',
            cnpj: '02.974.733/0001-52',
            actionMethod: 'Sistêmico e de contato.',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Balde de Fibra/Metálico/Plástico - 1,0; 2,0; 5,0 10; 12,5; 15; 20; 24; 25 kg\nBalde de Polietileno/Metálico - 10 kg\nBig-bag de Plástico - 100; 200; 300; 400;500; 600; 700; 800; 900; 1.000 kg\nBombona\tde Plástico - 1,0; 3,0; 5,0; 10; 12,5; 14; 15; 20; 50 kg\nCaixa de Papelão - 0,2; 0,3; 0,5; 0,6; 1,0; 1,2 kg\nContentor intermediário (IBC) de Papelão/Metálico/Fibra/Plástico - 100; 200; 300; 400; 500; 600; 700; 800; 900; 1.000 kg\nSaco de Papel/Plástico com um ou mais sacos hidrossolúveis - 0,02; 0,05; 0,1; 0,15; 0,2; 0,25; 0,5; 0,6; 1,0; 1,5; 2,0; 5,0; 10; 12,5; 15 kg\nSaco Metálico/Plástico/Papel/Papelão - 1,0; 5,0; 10: 12,5; 15; 20; 30; 35; 36; 40; 41; 43; 50; 60; 70 kg\nSaco Polietileno/ poliéster ou aluminizado - 0,1; 0,25; 0,3; 0,5; 0,6; 1,0; 2,0; 5,0; 10; 12,5; 15; 25 kg\nSaco Plástico/Metálico - 11, 15, 24, 25kg\nSaco de Alumínio Aluminizado/Saco de Plástico Metalizado - 0,1; 0,25; 0,3; 0,5; 0,6; 1,0; 2,0; 5,0; 10;\n12,5; 15; 25 kg\nSaco de Plástico/Metálico ou Hidrossolúvel - 0,1; 0,25; 0,5; 0,6; 1,0; 1,2; 1,5; 2,0; 3,0; 5,0; 9,0; 10; 11; 12,5; 15 kg\nSaco de Papel - 9,0; 11; 15; 20; 30; 35; 36; 41; 43; 50; 60; 70kg\nSaco de Papel revestido com polietileno - 1,0; 2,0; 5,0; 10; 12,5; 15; 20; 24; 25; 50 kg\nTambor Metálico/ Fibra/ Plástico - 10; 12,5; 15; 25 kg\nTambor de Fibra - 10; 25 kg\nTamborete de Fibra - 9,0; 11; 15; 20; 30; 35; 36; 41; 43; 50; 60; 70 kg',
            activeIngredients: [
                {
                    name: 'Azoxistrobina',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'mancozebe',
                    concentration: 'alquilenobis(ditiocarbamato)',
                },
            ],
        },
        {
            id: 13150,
            tradeMark: 'Veldara',
            patentHolder: 'Basf S.A. – São Paulo',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '48.539.407/0001-18',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Bag in Box.\nMaterial: Fibra de papel com bolsa plástica interna.\nCapacidade: 0,5; 1,0; 2,0; 3,0; 5,0; 10; 20 L.\nTipo:  Balde.\nMaterial: Metálico/Plástico.\nCapacidade: 1; 5; 10; 20 L.\nTipo:  Bombona.\nMaterial: Plástico.\nCapacidade: 10; 100; 2; 20; 3; 5; 50 L.\nTipo:  Caminhão tanque.\nMaterial: Metálico.\nCapacidade: 300; 400; 500; 600; 700; 800; 850; 900; 925; 950; 960; 970; 980; 990; 1.000; 1.800; 2.000; 2.700; 3.000; 5.000; 10.000; 15.000; 16.000; 17.000; 18.000; 19.000; 20.000; 21.000; 22.000; 23.000; 24.000; 25.000; 29.000; 30.000 L.\nTipo:  Contentor intermediário(IBC).\nMaterial: Metálico/Metal/Plástico com pallet de madeira/Plástico/Plástico com estrutura metálica.\nCapacidade: 300; 400; 500; 600; 700; 800; 850; 900; 925; 950; 960; 970; 980; 990; 1.000; 1.800; 2.000; 2.700; 3.000 L.\nTipo:  Frasco.\nMaterial: Plástico.\nCapacidade: 0,1; 0,25; 0,5; 0,75; 1,0 L.\nTipo: Isocontainer.\nMaterial: Metálico.\nCapacidade: 300; 400; 500; 600; 700; 800; 850; 900; 925; 950; 960; 970; 980; 990; 1.000; 1.800; 2.000; 2.700; 3.000; 5.000; 10.000; 15.000; 16.000; 17.000; 18.000; 19.000; 20.000; 21.000; 22.000; 23.000; 24.000; 25.000; 29.000; 30.000 L.\nTipo: Stand-up pouch, com tampa.\nMaterial: Plástico e Plástico com estrutura metálica.\nCapacidade: 0,25; 0,5; 0,6; 1,0; 2,0; 3,0; 5,0; 10 L.\nTipo:  Tambor.\nMaterial: Metálico e Plástico.\nCapacidade: 50; 100; 190; 200; 210 L.\nTipo:  Tanque.\nMaterial: Metálico.\nCapacidade:  300; 400; 500; 600; 700; 800; 850; 900; 925; 950; 960; 970; 980; 990; 1.000; 1.800; 2.000; 2.700; 3.000; 5.000; 10.000; 15.000; 16.000; 17.000; 18.000; 19.000; 20.000; 21.000; 22.000; 23.000; 24.000; 25.000; 29.000; 30.000 L.',
            activeIngredients: [
                {
                    name: 'fluxapiroxade',
                    concentration: 'carboxamida',
                },
                {
                    name: 'piraclostrobina',
                    concentration: 'estrobilurina',
                },
            ],
        },
        {
            id: 13331,
            tradeMark: 'Vessarya',
            patentHolder:
                'Corteva Agriscience do Brasil Ltda - Barueri (Alphaville)',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '61.064.929/0001-79',
            actionMethod: '',
            applicationMethod: '',
            compatibility: '',
            packaging: '',
            activeIngredients: [
                {
                    name: 'Picoxistrobina',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'Benzovindiflupyr',
                    concentration: 'pirazol carboxamida',
                },
            ],
        },
        {
            id: 13209,
            tradeMark: 'Vessarya BR',
            patentHolder:
                'Corteva Agriscience do Brasil Ltda - Barueri (Alphaville)',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '61.064.929/0001-79',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Bombona\nMaterial: Plástico\nCapacidade: 0,05; 0,1; 0,2; 0,25; 0,3; 0,5; 0,7; 1,0; 2,0; 3,0; 4,0; 5,0; 6,0; 7,0; 8,0; 9,0; 10; 12; 14; 16; 18; 20; 25; 30 L\nTipo: Frasco\nMaterial: Plástico\nCapacidade: 0,005; 0,008; 0,01; 0,015; 0,02; 0,025; 0,03; 0,035; 0,04; 0,045; 0,05; 0,06; 0,07; 0,075; 0,08; 0,09; 0,1; 0,12; 0,15; 0,18; 0,2; 0,24; 0,25; 0,3; 0,32; 0,35; 0,36; 0,4; 0,45; 0,48; 0,5; 0,55; 0,6; 0,65; 0,7; 0,75; 0,8; 0,85; 0,9; 0,95; 1,0; 1,2; 1,3; 1,4; 1,5; 2,0; 3,0; 4,0; 5,0; 6,0; 7,0; 8,0; 9,0; 10; 12; 14; 16; 18; 20; 25; 30 L',
            activeIngredients: [
                {
                    name: 'Picoxistrobina',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'Benzovindiflupyr',
                    concentration: 'pirazol carboxamida',
                },
            ],
        },
        {
            id: 14580,
            tradeMark: 'Vitene',
            patentHolder: 'Sipcam Nichino Brasil S.A. - Uberaba/MG',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '23.361.306/0001-79',
            actionMethod: 'Sistêmico/Contato',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Bombona\nMaterial: Plástico\nCapacidade: 50 L\nTipo: Frasco\nMaterial: Plástico\nCapacidade: 5 L\nTipo: Tambor\nMaterial: Metálico\nCapacidade: 50 L',
            activeIngredients: [
                {
                    name: 'Azoxistrobina',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'difenoconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 12723,
            tradeMark: 'Approve WG',
            patentHolder: 'Iharabras S.A. Indústria Químicas - Sorocaba',
            toxicologyClassification:
                'Não - Não Classificado - Produto Não Classificado',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '61.142.550/0001-30',
            actionMethod: '',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Frasco.\nMaterial: Plástico.\nCapacidade: 0,05; 0,1; 0,2; 0,25; 0,35; 0,45; 0,5; 0,9; 1,0 kg.\nTipo: Saco.\nMaterial: Hidrossolúvel.\nCapacidade: 0,01; 0,02; 0,03; 0,04; 0,05; 0,07; 0,09; 0,1; 0,2; 0,3; 0,5; 0,7; 0,9; 1,0 kg.\nTipo: Saco/Saco(contendo saco hidrossolúvel).\nMaterial: Plástico.\nCapacidade: 0,05; 0,1; 0,2; 0,25; 0,35; 0,45; 0,5; 0,9; 1,0; 4,5; 5,0; 10; 20; 25 kg.',
            activeIngredients: [
                {
                    name: 'tiofanato-metílico',
                    concentration: 'benzimidazol (precursor de)',
                },
                {
                    name: 'fluazinam',
                    concentration: 'fenilpiridinilamina',
                },
            ],
        },
        {
            id: 10065,
            tradeMark: 'Authority',
            patentHolder: 'FMC Química do Brasil Ltda. - Campinas',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '04.136.367/0001-98',
            actionMethod: 'SISTÊMICO',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'EMBALAGENS                                  MATERIAL                          CAPACIDADE\nBombona                                        Plástico\t                 5;10 ;20 e 50 L\n\nContainer\t                                       Plástico e Aço \t                 1.000 e 5.000 L\n\nFrasco\t                                       Plástico                  \t0.25; 0,5 e 1 L\n\nMini bulk\t                                       Plástico\t               420; 450; 640 e 1.000 L\n\nTambor\t                                       Aço\t                               50 e 100 L\n',
            activeIngredients: [
                {
                    name: 'Azoxistrobina',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'flutriafol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 11887,
            tradeMark: 'Azoxistrobin Nortox',
            patentHolder: 'Nortox S.A. - Arapongas',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification: 'III - Produto Perigoso ao Meio Ambiente',
            registerNumber: 'III - Produto Perigoso ao Meio Ambiente',
            cnpj: '75.263.400/0001-99',
            actionMethod: '',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Frasco\nMaterial: Plástico\nCapacidade: 2 L\nTipo: Bombona\nMaterial: Plástico\nCapacidade: 60 L\nTipo: Balde\nMaterial: Metálico\nCapacidade: 30 L\nTipo: Lata\nMaterial: Metálico\nCapacidade: 30 L\nTipo: Tambor\nMaterial: Metálico e Plástico\nCapacidade: 220 L\nTipo: Contentor intermediário (IBC)\nMaterial: Plástico com estrutura metálica\nCapacidade: 1.200 L\nTipo: Tanque estacionário (granel)\nMaterial: Metálico e Plástico\nCapacidade: 60.000 L',
            activeIngredients: [
                {
                    name: 'Azoxistrobina',
                    concentration: 'estrobilurina',
                },
            ],
        },
        {
            id: 18113,
            tradeMark: 'Bravengis',
            patentHolder: 'Oxon Brasil Defensivos Agrícolas Ltda.',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '07.224.503/0001-90',
            actionMethod: '',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Bombona\nMaterial: Plástico\nCapacidade: 60 L\nTipo: Contentor intermediário para granel- IBC\nMaterial: Plástico/Metálico\nCapacidade: 1200 L\nTipo: Frasco\nMaterial: Plástico\nCapacidade: 2 L\nTipo: Tambor\nMaterial: Plástico\nCapacidade: 220 L',
            activeIngredients: [
                {
                    name: 'tebuconazol',
                    concentration: 'triazol',
                },
                {
                    name: 'clorotalonil',
                    concentration: 'isoftalonitrila',
                },
            ],
        },
        {
            id: 14373,
            tradeMark: 'Calizi Top 500 SC',
            patentHolder: 'Sinon do Brasil Ltda. - Porto Alegre /RS.',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '03.417.347/0001-22',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Bombona\nMaterial: Plástico\nCapacidade: 3 - 250 L\nTipo: Frasco\nMaterial: Plástico\nCapacidade: 0,05 - 1 L\nTipo: Tambor\nMaterial: Metálico\nCapacidade: 20 - 200 L',
            activeIngredients: [
                {
                    name: 'Azoxistrobina',
                    concentration: 'estrobilurina',
                },
            ],
        },
        {
            id: 9099,
            tradeMark: 'Envoy',
            patentHolder: 'Basf S.A. – São Paulo',
            toxicologyClassification:
                '3 - Categoria 3 – Produto Moderadamente Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '48.539.407/0001-18',
            actionMethod: 'Sistemico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Frasco de polietileno: 0,5; 1,0; 1,5; e 2,0 litros.\nBombona de polietileno: 3,0; 5,0; 10 e 20 litros.',
            activeIngredients: [
                {
                    name: 'piraclostrobina',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'epoxiconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 11310,
            tradeMark: 'Fezan Gold; ',
            patentHolder: 'Oxon Brasil Defensivos Agrícolas Ltda.',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '07.224.503/0001-90',
            actionMethod: 'Sistêmico e contato.',
            applicationMethod: '',
            compatibility: '',
            packaging:
                'Frasco de polietileno de alta densidade de 1 L;\nBombona de polietileno de alta densidade de 5 e 10 L;\nBombona (exterior de folha de flanders e interior revestido com resina fenólica) de 20 e 22,5 L.',
            activeIngredients: [
                {
                    name: 'clorotalonil',
                    concentration: 'isoftalonitrila',
                },
                {
                    name: 'tebuconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 10311,
            tradeMark: 'Galixid',
            patentHolder: 'Syngenta Proteção de Cultivos Ltda. – São Paulo ',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '60.744.463/0001-90',
            actionMethod: 'Sitêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging: '',
            activeIngredients: [
                {
                    name: 'Azoxistrobina',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'ciproconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 10346,
            tradeMark: 'Galixid SC',
            patentHolder: 'Syngenta Proteção de Cultivos Ltda. – São Paulo ',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '60.744.463/0001-90',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Frasco.\nMaterial: Plástico.\nCapacidade: 0,1; 0,25; 0,5; 1,0; 1,5; 2,0 Litros.\nTipo: Lata.\nMaterial: Metálico.\nCapacidade: 0,25; 0,5; 1,0; 1,5; 2,0; 5,0 Litros.\nTipo: Bombona.\nMaterial: Plástico.\nCapacidade: 5; 10; 15; 20; 25; 100; 180; 200 Litros.\nTipo: Balde.\nMaterial: Metálico.\nCapacidade: 5; 10; 15; 20; 25 Litros.\nTipo: Tambor.\nMaterial: Plástico/Metálico.\nCapacidade: 100; 180; 200; 220 Litros.\nTipo: Tambor com sacos internos.\nMaterial: Fibra celulósica.\nCapacidade: 5; 10; 15; 20; 25; 100; 180; 200; 220 Litros.\nTipo: IBC.\nMaterial: Plástico.\nCapacidade: 500; 600; 750; 1.000 Litros.\nTipo: Tanque.\nMaterial: Plástico.\nCapacidade: 5.000; 20.000 Litros.\nTipo: Tanque.\nMaterial: Metálico.\nCapacidade: 5.000; 20.000; 24.000; 25.000; 26.000; 28.000 Litros.\nTipo: Bag-in-box.\nMaterial: Plástico/Papelão.\nCapacidade: 5; 10; 15; 20; 25; 100; 180; 200; 220; 500; 1.000 Litros.\n',
            activeIngredients: [
                {
                    name: 'Azoxistrobina',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'ciproconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 11088,
            tradeMark: 'Helmstar',
            patentHolder: 'Helm do Brasil Mercantil - São Paulo/SP',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification: 'III - Produto Perigoso ao Meio Ambiente',
            registerNumber: 'III - Produto Perigoso ao Meio Ambiente',
            cnpj: '47.176.755/0001-05',
            actionMethod: 'sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Frasco\nMaterial: Plástico\nCapacidade: 0,25; 0,5; 0,75; 1,0; 2,0; 3,0; 5,0 L\nTipo: bombona\nMaterial: Plástico\nCapacidade: 4; 5; 6; 10; 15; 20 L\nTipo: Balde\nMaterial: Plástico\nCapacidade: 20; 25; 50 L\nTipo: Tambor\nMaterial: Plástico ou Aço\nCapacidade: 50; 100; 200; 500 L',
            activeIngredients: [
                {
                    name: 'Azoxistrobina',
                    concentration: 'estrobilurina',
                },
            ],
        },
        {
            id: 15507,
            tradeMark: 'Kingstar Xtra; Aztrostar; Skystar Plus; ',
            patentHolder: 'Rainbow Defensivos Agrícolas Ltda.- Porto Alegre',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '10.486.463/0001-69',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Bombona\nMaterial: Plástico\nCapacidade: 50 kg\nTipo: Cartucho\nMaterial: Fibra celulósica\nCapacidade: 1 kg\nTipo: Frasco\nMaterial: Plástico\nCapacidade: 1 kg\nTipo: Saco\nMaterial: Plástico aluminizado e Plástico, Fibra celulósica e hidrossolúvel\nCapacidade: 1 kg',
            activeIngredients: [
                {
                    name: 'Azoxistrobina',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'ciproconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 18128,
            tradeMark: 'Lanfor Pro',
            patentHolder: 'Albaugh Agro Brasil Ltda.- São Paulo',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '01.789.121/0001-27',
            actionMethod: '',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Balde\nMaterial: Metálico/Plástico\nCapacidade: 30 L\nTipo: bombona\nMaterial: Plástico\nCapacidade: 60 L\nTipo: IBC\nMaterial: Metálico/Plástico\nCapacidade: 1200 L\nTipo: Frasco\nMaterial: Metálico/Plástico\nCapacidade: 2 L\nTipo: Lata\nMaterial: Metálico\nCapacidade: 30 L\nTipo: Tambor\nMaterial: Metálico/Plástico\nCapacidade: 220 L',
            activeIngredients: [
                {
                    name: 'Azoxistrobina',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'ciproconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 10333,
            tradeMark: 'Monaris',
            patentHolder: 'Syngenta Proteção de Cultivos Ltda. – São Paulo ',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '60.744.463/0001-90',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Frasco\tPlástico 0,1 0,25 0,5 1,5 2L\nLata\tMetálico 0,25 0,5 1 1,5 5L\nBombona\tPlástico 10 15 20 25 100 180 200L\nBalde\tMetálico 10 15 20 25L\nTambor\tPlástico 100 180 200 220L\nTambor\tMetálico 100 180 200 220L\nTambor Com sacos internos\tFibra Celulósica  10 15 20 25 100 180 200 220L\nIBC\tPlástico 500 600 750 1.000L\nTanque\tPlástico 5.000 20.000L\nTanque\tMetálico 5.000 20.000 24.000 25.000 26.000 28.000L\nBag-in-Box Plástico / Papelão 10 15 20 25\t100 180 200 220 500 1.000L ',
            activeIngredients: [
                {
                    name: 'Azoxistrobina',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'ciproconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 14924,
            tradeMark: 'Palivar',
            patentHolder: 'Basf S.A. – São Paulo',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '48.539.407/0001-18',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Bag-in-box\nMaterial: Fibra celulósica com saco plástico interno\nCapacidade: 20 L\nTipo: Balde\nMaterial: Plástico/Metálico\nCapacidade: 30 L\nTipo: Bombona\nMaterial: Plástico\nCapacidade: 60 L\nTipo: Frasco\nMaterial: Plástico\nCapacidade: 2 L\nTipo: Sachê com tampa\nMaterial: Fibra celulósica /Fibra celulósica revestida com plástico/Fibra celulósica revestida com plástico metalizado/Plástico/Plástico metalizado\nCapacidade: 0,1 L\nTipo: Tambor\nMaterial: Plástico/Metálico\nCapacidade: 220 L',
            activeIngredients: [
                {
                    name: 'mefentrifluconazol',
                    concentration: 'triazol',
                },
                {
                    name: 'piraclostrobina',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'fluxapiroxade',
                    concentration: 'carboxamida',
                },
            ],
        },
        {
            id: 13928,
            tradeMark: 'Poderus; Bonseges; ',
            patentHolder: 'Ouro Fino Química S.A. - Uberaba',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '09.100.671/0001-07',
            actionMethod: '',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Bag in box\nMaterial: Fibra celulósica com saco plástico interno\nCapacidade: 20 L\nTipo: Balde\nMaterial: Plástico/Metálico\nCapacidade: 30 L\nTipo: Bombona\nMaterial: Plástico/Metálico\nCapacidade: 60 L\nTipo: Contentor intermediário para granel- IBC\nMaterial: Plástico\nCapacidade: 1200 L\nTipo: Frasco\nMaterial: Plástico/Metálico\nCapacidade: 2 L\nTipo: Tambor\nMaterial: Plástico/Metálico\nCapacidade: 220 L',
            activeIngredients: [
                {
                    name: 'Azoxistrobina',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'ciproconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 7840,
            tradeMark: 'Priori Xtra',
            patentHolder: 'Syngenta Proteção de Cultivos Ltda. – São Paulo ',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '60.744.463/0001-90',
            actionMethod: 'Sistêmico.',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Frasco plástico com 250 ml; 1,0; 1,5; 2,5; 3, 5, 6 e 20 L.\nBombona plástica com 5, 6, 10 e 20 L. \nTambor em ferro, aço ou plástico com 160; 180 e 200 L. \nFarm Pack de ferro, aço ou plástico com 420 L e 1000 L. \nBulk em ferro, aço ou plástico com 1000, 5000, 10.000, 20.000 L. \nTanque em ferro, aço ou plástico com 1000L  e 1.100L (equivalente a 1.000 Kg).5000, 10000 e 20000L. \nIsotanque de aço: 24000; 25000;26000 e 28000 litros.',
            activeIngredients: [
                {
                    name: 'Azoxistrobina',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'ciproconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 10753,
            tradeMark: 'Shake',
            patentHolder: 'Basf S.A. – São Paulo',
            toxicologyClassification:
                '3 - Categoria 3 – Produto Moderadamente Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '48.539.407/0001-18',
            actionMethod: 'Sistêmico',
            applicationMethod: '',
            compatibility: '',
            packaging: '',
            activeIngredients: [
                {
                    name: 'epoxiconazol',
                    concentration: 'triazol',
                },
                {
                    name: 'piraclostrobina',
                    concentration: 'estrobilurina',
                },
            ],
        },
        {
            id: 14238,
            tradeMark: 'Sporane',
            patentHolder: 'Helm do Brasil Mercantil - São Paulo/SP',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '47.176.755/0001-05',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Balde\nMaterial: Plástico\nCapacidade: 30 L\nTipo: Bombona\nMaterial: Plástico\nCapacidade: 60 L\nTipo: Frasco\nMaterial: Plástico\nCapacidade: 2 L\nTipo: Tambor\nMaterial: Metálico e Plástico\nCapacidade: 220 L\nTipo: \nMaterial: \nCapacidade: \nTipo: \nMaterial: \nCapacidade: \n',
            activeIngredients: [
                {
                    name: 'Azoxistrobina',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'ciproconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 13180,
            tradeMark: 'Yeti Gold',
            patentHolder: 'Oxon Brasil Defensivos Agrícolas Ltda.',
            toxicologyClassification: '4 - Categoria 4 – Produto Pouco Tóxico',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '07.224.503/0001-90',
            actionMethod: 'Sistêmico',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Bombona\nMaterial: Plástico\nCapacidade: 60 L\nTipo: Frasco\nMaterial: Plástico/Metálico\nCapacidade: 2 L\nTipo: Contentor intermediário para granel- IBC\nMaterial: Plástico/Metálico\nCapacidade: 1000 L\nTipo: Tambor\nMaterial: Plástico/Metálico\nCapacidade: 220 L',
            activeIngredients: [
                {
                    name: 'Azoxistrobina',
                    concentration: 'estrobilurina',
                },
                {
                    name: 'tebuconazol',
                    concentration: 'triazol',
                },
            ],
        },
        {
            id: 5426,
            tradeMark: 'Fegatex',
            patentHolder:
                'BR3 Tecnologia e Indústria Química e Farmacêutica Ltda',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification: 'III - Produto Perigoso ao Meio Ambiente',
            registerNumber: 'III - Produto Perigoso ao Meio Ambiente',
            cnpj: '07.161.191/0001-12',
            actionMethod: 'Contato',
            applicationMethod: 'Terrestre',
            compatibility: '',
            packaging:
                'Frasco plástico de polietileno: 1 L. Bombonas plásticas de polietileno: 5, 20, 25, 50, 60, 100 e 200 L. ',
            activeIngredients: [
                {
                    name: 'cloreto de benzalcônio',
                    concentration: 'amônio quaternário',
                },
            ],
        },
        {
            id: 18452,
            tradeMark: 'Parachute; Corsica Max; ',
            patentHolder:
                'Globachem Proteção de Cultivos do Brasil Ltda. - São Paulo/SP',
            toxicologyClassification:
                '5 - Categoria 5 – Produto Improvável de Causar Dano Agudo',
            ambientalClassification:
                'II - Produto Muito Perigoso ao Meio Ambiente',
            registerNumber: 'II - Produto Muito Perigoso ao Meio Ambiente',
            cnpj: '43.741.357/0001-33',
            actionMethod: '',
            applicationMethod: 'Terrestre/Aérea',
            compatibility: '',
            packaging:
                'Tipo: Bag in box\nMaterial: Fibra celulósica com saco plástico interno\nCapacidade: 20 L\nTipo: Balde\nMaterial: Metálico/Plástico\nCapacidade: 30 L\nTipo: Bombona\nMaterial: Plástico\nCapacidade: 60 L\nTipo: Frasco\nMaterial: Plástico\nCapacidade: 2 L\nTipo: Sachê com tampa\nMaterial: Fibra celulósica revestida com plástico/Fibra celulósica revestida com plástico metalizado/Plástico/Plástico metalizado\nCapacidade: 0,1 L\nTipo: Tambor\nMaterial: Metálico/Plástico\nCapacidade: 220 L',
            activeIngredients: [
                {
                    name: 'clorotalonil',
                    concentration: 'isoftalonitrila',
                },
                {
                    name: 'difenoconazol',
                    concentration: 'triazol',
                },
                {
                    name: 'trifloxistrobina',
                    concentration: 'estrobilurina',
                },
            ],
        },
    ];

    const diseases = [
        {
            id: 4385,
            classification: 'Doença',
            culture: 'Milho',
            scientificName: 'Aspergillus spp.',
            commonNames: 'Tombamento',
            author: 'Hernández, A.G.; Mendes, M.A.S.',
            description:
                'Esta doença é causada por várias espécies de Aspergillus, sendo A. niger Tiegh. a espécie principal, mas A. alliaceous Thom et Church, A. amstelodami Thom et Church, A. caespitosus Raper et Thom, A. Link, A. carbonarius (Bainier) Thom, A. chevalieri Thom et Church, A. clavatus Desm., A. echinulatus Thom et Church, A. elegans Gasp., A. flavipes (Bainier et Sartory) Thom et Church, A. flavus Link, A. fumigatus Fresen., A. manginii Thom et Raper, A. nidulans (Eidam) G. Winter, A. ochraceus G. Wilh., A. parasiticus Speare, A. repens (Corda) Sacc., A. restrictus G. Sm., A. rubrobrunneus Samson et W. Gams, A. sulphureus (Fresn.) Thom et Church, A. sydowii (Bainier et Sartory) Thom et Church, A. tamarii Kita, A. terreus Thom, A. unguis (Émilie-Weil. et Gaudin) Thom et Raper, A. versicolor (Vuill.) Tirab. e A. wentii Wehmer também encontram-se com relativa freqüência nas plântulas mortas.\n\nA doença produz tombamento das plântulas recém-emergidas ou com até 30 dias após a semeadura, reduzindo o número de plantas por área e afetando, assim, os rendimentos.\n\nEsses fungos estão estabelecidos em todas as principais áreas produtoras de milho do mundo, existindo registros de incidência na África do Sul, Austrália, Brunei, Estados Unidos, Filipinas, Líbia, Papua-Nova Guiné, Tanzânia, Venezuela e Zimbábue. No Brasil, há registros nos estados de Mato Grosso do Sul, Pernambuco, São Paulo e Tocantins, embora deva estar presente em todo o país onde é cultivado o arroz.\n\nOs fungos são onívoros e podem ser encontrados atacando diversas espécies de plantas de distintas famílias.',
            symptoms:
                'O sintoma típico da doença é o tombamento das plântulas recém-emergidas ou com até 30 dias após a semeadura.\n\nCOTILÉDONE/COLEÓPTILO: Os fungos causam o apodrecimento do cotilédone, sobre estes produzem abundante crescimento micelial e formação de conidióforos e uma massa de conídios que pode variar de coloração segundo a espécie ou espécies envolvidas, de amarelo-esverdeado até negra. A infecção avança rapidamente para o coleóptilo, apodrecendo-o também e causando o tombamento da plântula dentro dos 30 dias posteriores à semeadura. Algumas plantas podem sobreviver, porém as lesões caracterizam-se pelos tecidos rasgados. Sob condições favoráveis para o desenvolvimento do patógeno, as plantas adultas também podem ser atacadas, manifestando murcha generalizada seguida de morte.',
            bioecology:
                'Aspergillus spp. são patógenos do solo distribuídos mundialmente e sobrevivem nos resíduos vegetais por longos períodos. Também sobrevivem nas sementes infectadas ou contaminadas.\n\nA principal via de disseminação do fungo a longa distância são as sementes infectadas ou contaminadas superficialmente. A dispersão do patógeno no campo se dá através dos conídios presentes no solo infectado.\n\nOs fatores de predisposição, como condições ambientais favoráveis ao desenvolvimento do patógeno, flutuações extremas de umidade no solo, sementes de má qualidade, danos mecânicos ou químicos nas plântulas e retardo na emergência, são condições que favorecem o desenvolvimento da doença.',
            control:
                'RESISTÊNCIA VARIETAL: Não há referências sobre a existência de cultivares com algum tipo de resistência ou tolerância a fungos do gênero Aspergillus causadores de tombamento.\n\nPRÁTICAS CULTURAIS: Destruir mediante o fogo ou enterramento profundo dos restos de cultura contaminados deixados no campo após a colheita. Evitar as flutuações extremas de umidade no solo.\n\nCONTROLE QUÍMICO: As sementes tratadas com fungicidas, protetores ou sistêmicos, promovem certo controle quando usadas sob condições que favorecem a rápida emergência das plântulas.',
            fungicides: [
                {
                    id: 10465,
                },
                {
                    id: 11798,
                },
                {
                    id: 4978,
                },
                {
                    id: 11925,
                },
                {
                    id: 5365,
                },
            ],
        },
        {
            id: 4402,
            classification: 'Doença',
            culture: 'Milho',
            scientificName: 'Acremonium strictum',
            commonNames: 'Murcha',
            author: 'Hernández, A.G.; Mendes, M.A.S.',
            description:
                'O fungo Acremonium strictum W. Gams tem como sinônimo Cephalosporium strictum Auct. non Corda.\n\nA murcha causada por A. strictum pode provocar a morte prematura das plantas e só faz-se evidente quando a cultura está próxima à época do florescimento. Apesar da sua ampla distribuição e danos evidentes, questiona-se se o fungo é um patógeno ativo e agressivo.\n\nÉ comum em regiões úmidas e quentes, está presente em Minas Gerais e São Paulo e provavelmente em outras regiões com características climáticas similares.\n\nOutras plantas hospedeiras são Sorghum vulgare e Sorghum spp.',
            symptoms:
                'A infecção faz-se evidente no estádio de grão pastoso. O sintoma mais característico é o enegrecimento dos feixes vasculares do colmo, estendendo-se desde a raiz através de vários nós; plantas estéreis no campo também são comuns.\n\nFOLHAS: Coloração púrpura ou avermelhada.\n\nESPIGAS: Podem ser observadas no campo, espigas defeituosas e múltiplas em um único nó.\n\nCOLMO: Coloração púrpura ou avermelhada e excesso de brotos nos nós.\n\nSEMENTES: Grãos enrugados e mal desenvolvidos.',
            bioecology:
                'O patógeno é integrante da micoflora do comum, onde pode sobreviver nos restos de culturais infectado por muito tempo.\n\nA doença é disseminada com facilidade através do solo e das sementes infectadas.\n\nSolos pesados em regiões quentes e úmidas são condições que favorecem o desenvolvimento da murcha causada por A. strictum.',
            control:
                'Não há relatos de variedades ou híbridos resistentes a esta doença.\n\nÉ essencial o uso de sementes sadias, assim como a rotação de culturas no caso de solos já infectados; deve-se evitar o excesso de umidade nos solos pesados, fator que propicia o estabelecimento do fungo e o desenvolvimento da doença.',
            fungicides: [
                {
                    id: 4978,
                },
                {
                    id: 5343,
                },
                {
                    id: 5365,
                },
            ],
        },
        {
            id: 4403,
            classification: 'Doença',
            culture: 'Milho',
            scientificName: 'Aspergillus flavus',
            commonNames:
                'Podridão-dos-grãos-armazenados, Fungo-de-pós-colheita',
            author: 'Hernández, A.G.; Mendes, M.A.S.',
            description:
                'Aspergillus flavus Link ex Fr. é um dos patógenos de grãos mais comum e perigoso devido à sua capacidade de produzir toxinas do tipo aflatoxina, causadoras de diversos sintomas em aves e mamíferos. Uma outra espécie, A. parasiticus, produtora também de aflatoxinas, encontra-se quase sempre misturada com A. flavus, criando confusão na hora da identificação. Na realidade, A. flavus é um complexo de formas, subespécies e variedades, encontram-se entre elas A. flavus f. flavus Link, A. flavus f. fulvus (Yamam.) Hehira, A. flavus f. globosus (Sakag. et K. Yamda) Nehira, A. flavus f. magnasporus (Sakag. et G. Yamada) Nehira, A. flavus f. maydis Cif., A. flavus f. microsporus (Sakag. et K. Yamada) Nehira, A. flavus subsp. parasiticus (Speare) Kurtzman, M.J. Smiley, Robnett et Wicklow, A. flavus var. asper Sasaki, A. flavus var. columnaris Raper et Fennel, A. flavus var. microviridocitrinus (Constantin et Lucet) Nehira, A. flavus var. oryzae (Ahlb.) Kurtzman, M.J. Smiley, Robnett et Wicklow, A. flavus var. parvisclerotigenus Mich,. Saito et Tsuruta, A. flavus var. proliferans Anguli, Rajam, Thirum., Ragiah et Ramamurthi, A. flavus var. rufus Blochwitz, A. flavus var. sojae (Sakag. et K. Yamada ex Murak.) Kurtzman e A. flavus var. wehmeri (Constantin et Lucet) Blochwitz, provavelmente o agente causador da podridão-dos-grãos-armazenados. Os trabalhos que tratam desse fungo nunca fizeram uma identificação até o nível infra-específico.\n\nA doença causa uma deterioração generalizada dos grãos, tornando-os impróprios para o consumo animal e/ou humano, assim como reduzindo quase a zero o seu poder de germinação.\n\nNo Brasil, existem registros de A. flavus em sementes de milho na Bahia, Paraíba, Pernambuco e Sergipe.',
            symptoms:
                'SEMENTES: Tanto os grãos quanto o sabugo aparecem cobertos por uma massa pulverulenta verde-amarelada de esporos.',
            bioecology:
                'A doença torna-se mais severa quando as espigas são armazenadas com um alto teor de umidade.',
            control:
                'A medida de controle mais eficaz para o controle dessa doença é a secagem dos grãos até atingirem um teor de umidade inferior a 13%, pois o crescimento de A. flavus é estimulado por umidade entre 13 e 20%.',
            fungicides: [
                {
                    id: 10465,
                },
                {
                    id: 17458,
                },
                {
                    id: 11798,
                },
                {
                    id: 12897,
                },
                {
                    id: 11915,
                },
                {
                    id: 11916,
                },
                {
                    id: 8459,
                },
                {
                    id: 5395,
                },
                {
                    id: 8930,
                },
                {
                    id: 18316,
                },
                {
                    id: 11925,
                },
                {
                    id: 10539,
                },
                {
                    id: 12300,
                },
                {
                    id: 16320,
                },
                {
                    id: 11899,
                },
                {
                    id: 9211,
                },
                {
                    id: 11527,
                },
                {
                    id: 5343,
                },
            ],
        },
        {
            id: 4441,
            classification: 'Doença',
            culture: 'Milho',
            scientificName: 'Fusarium moniliforme',
            commonNames: 'Podridão-de-Fusarium, Podridão-do-colmo',
            author: 'Santos, M.F.; Mendes, M.A.S.',
            description:
                'Fusarium moniliforme J. Sheld apresenta como sinonímias Fusarium moniliforme var. fici P. Caldis e Sporotrichum atropurpureum Peck.\n\nA doença é também conhecida como Podridão-rosada-da-espiga, Podridão-de-Fusarium e Podridão-dos-grãos. Esta doença causa podridão de colmo e pode ocasionar prejuízos quando a incidência do patógeno ocorrer próxima ao período do florescimento. \n\nEste fungo é relatado em todos os locais de cultivo do milho, principalmente nas regiões quentes e secas. Várias espécies cultivadas são hospedeiras deste fungo, como Phaseolus vulgaris (feijão), Oryza sativa (arroz), Hordeum vulgare (cevada), Triticum aestivum (trigo), Vigna unguiculata (feijão-macassar), Glycine max (soja), Sorghum bicolor (sorgo), Gossypium hirsutum (algodão), etc.',
            symptoms:
                'A podridão de Fusarium é uma doença que pode ocorrer no colmo (podridão do colmo) e na espiga (podridão rosada da espiga ou podridão dos grãos).\n\nCOLMO: Os tecidos internos do colmo apresentam colorações que variam de esbranquiçado a marrom-avermelhado. A doença inicia na base da planta e avança para a parte superior. Com o progresso da doença, pode ocorrer a quebra do colmo e até podridão da espiga.\n\nRAÍZES: Os tecidos internos das raízes apresentam coloração avermelhada.\n\nESPIGA: Dentre as doenças que ocorrem na espiga, esta é a mais freqüente. Os grãos, isolados ou em grupos, apresentam coloração avermelhada. Com o progresso da doença, há a formação de uma massa rosada cotonosa (micélio) sobre os grãos. O surgimento de estrias brancas em alguns grãos é comum, devido à ação do fungo sobre o pericarpo. Normalmente, a palha da espiga apresenta também a coloração avermelhada.',
            bioecology:
                'O patógeno sobrevive em hospedeiros alternativos e sementes. A sobrevivência no solo é de curta duração, pois raramente há formação de clamidósporo. Vento e sementes atuam disseminando o patógeno. \n\nA podridão de colmo geralmente está ligada ao ataque de nematóides ou pragas subterrâneas, estes debilitam a planta e causam ferimentos, favorecendo a penetração do fungo. Esta doença ocorre principalmente na época da polinização, quando períodos de seca vierem seguidos por períodos chuvosos. \n\nA podridão rosada é favorecida quando há ataque de insetos nas espigas e pelo excesso de chuva. A ação do fungo cessa quando a umidade dos grãos estiver em 18 a 19%.',
            control:
                'RESISTÊNCIA VARIETAL: Emprego de cultivares resistentes é o melhor método de controle.\n\nPRÁTICAS CULTURAIS: Utilização de adubação equilibrada, densidade de plantio adequada e não ultrapassar o período da colheita.',
            fungicides: [
                {
                    id: 10465,
                },
                {
                    id: 17458,
                },
                {
                    id: 11798,
                },
                {
                    id: 12897,
                },
                {
                    id: 4978,
                },
                {
                    id: 8459,
                },
                {
                    id: 11165,
                },
                {
                    id: 5185,
                },
                {
                    id: 8930,
                },
                {
                    id: 18316,
                },
                {
                    id: 10143,
                },
                {
                    id: 10138,
                },
                {
                    id: 5380,
                },
                {
                    id: 8302,
                },
                {
                    id: 11925,
                },
                {
                    id: 10539,
                },
                {
                    id: 12300,
                },
                {
                    id: 16320,
                },
                {
                    id: 8246,
                },
                {
                    id: 14031,
                },
                {
                    id: 5343,
                },
                {
                    id: 5365,
                },
                {
                    id: 11534,
                },
            ],
        },
        {
            id: 4442,
            classification: 'Doença',
            culture: 'Milho',
            scientificName: 'Fusarium subglutinans',
            commonNames: 'Podridão-por-Fusarium, Podridão-de-Fusarium',
            author: 'Santos, M.F.; Mendes, M.A.S.',
            description:
                'Fusarium subglutinans (Wollenweb. & Reinking) P.E. Nelson, T.A. Toussoun & Marasas apresenta como sinonímias Fusarium moniliforme var. subglutinans Wollenweb. & Reinking e Fusarium neoceras Wollenweb. & Reinking.  \n\nA doença é também conhecida como Podridão dos grãos e Podridão do colmo. Este fungo causa podridão de colmo e pode ocasionar prejuízos quando a incidência do patógeno ocorrer próxima ao período do florescimento.\n\nO patógeno é relatado em todos os locais de cultivo do milho, principalmente nas regiões quente e seca. As espécies Ananas comosus (abacaxi) e Saccharum officinarum (cana-de-açúcar) são hospedeiras deste fungo.',
            symptoms:
                'A podridão de Fusarium é uma doença que pode ocorrer no colmo (podridão do colmo) e na espiga (podridão rosada da espiga, podridão dos grãos).\n\nCOLMO: Os tecidos internos do colmo apresentam colorações que variam de esbranquiçada a marrom-avermelhado. A doença inicia na base da planta e avança para a parte superior. Com o progresso da doença, pode ocorrer a quebra do colmo e até podridão da espiga.\n\nRAÍZES: Os tecidos internos das raízes apresentam coloração avermelhada.\n\nESPIGA: Dentre as doenças que ocorrem na espiga, esta é a mais freqüente. Os grãos, isolados ou em grupos, apresentam coloração avermelhada. Com o progresso da doença, há o crescimento de uma massa rosada cotonosa (micélio) sobre os grãos. O surgimento de estrias brancas em alguns grãos é comum, devido à ação do fungo sobre o pericarpo. Normalmente, a palha da espiga contaminada apresenta também coloração avermelhada.',
            bioecology:
                'Este fungo é um habitante natural do solo e permanece nos restos de cultura na forma de estruturas de resistência e conídios. O patógeno sobrevive também parasitando hospedeiros alternativos e pode ser encontrado em sementes. Os implementos agrícolas, vento, animais e sementes atuam disseminando o patógeno. \n\nA podridão de colmo geralmente está ligada ao ataque de nematóides ou pragas subterrâneas, estes debilitam a planta e causam ferimentos, favorecendo a penetração do fungo. Esta doença ocorre principalmente na época da polinização, quando períodos de seca vierem seguidos por períodos chuvosos. \n\nA podridão rosada é favorecida quando há ataque de insetos nas espigas e pelo excesso de chuva. A ação do fungo cessa quando a umidade dos grãos estiver em 18 a 19%.',
            control:
                'RESISTÊNCIA VARIETAL: Emprego de cultivares resistentes é o melhor método de controle.\n\nPRÁTICAS CULTURAIS: Utilização de adubação equilibrada, densidade de plantio adequada e não ultrapassar o período da colheita.',
            fungicides: [],
        },
        {
            id: 4443,
            classification: 'Doença',
            culture: 'Milho',
            scientificName: 'Puccinia sorghi',
            commonNames: 'Ferrugem-comum, Ferrugem',
            author: 'Santos, C.E.N.; Mendes, M.A.S.',
            description:
                'A ferrugem-comum do milho (Zea mays L.) causada pelo fungo Puccinia sorghi Schwein. é considerada a ferrugem mais comum da cultura, ocorrendo em diversas regiões produtoras do Brasil, embora ocorra com maior incidência no Sul do país.',
            symptoms:
                'A ferrugem-comum manifesta-se em todas as fases de desenvolvimento das plantas de milho, porém causa maior redução da produção quando ocorre em plantas jovens.\n\nFOLHAS: A ferrugem-comum forma, nas plantas jovens, pústulas predominantemente alongadas, de coloração marrom-clara que escurecem à medida que as plantas se aproximam da fase de maturação. Clorose e morte de folhas podem ocorrer em ataques severos da doença.',
            bioecology:
                'O fungo Puccinia sorghi apresenta ciclo de vida completo, tendo como hospedeiro alternativo o trevo (Oxalis sp.). Os uredósporos são arredondados, bitunicados, de coloração ferruginosa. Os teliósporos são bicelulares, com leve constrição do septo e coloração marrom-escura. Temperaturas entre 16 e 23 °C e umidade relativa elevada favorecem a ocorrência da doença.',
            control:
                'Por se tratar de um hospedeiro obrigatório e apresentar ciclo de vida completo, as principais medidas de controle são a utilização de cultivares resistentes e a erradicação dos hospedeiros alternativos (trevos) próximos. A realização de rotação de cultura, evitando plantios sucessivos, também pode ser uma medida efetiva de controle.\n\nCONTROLE QUÍMICO: Em plantas jovens, o uso de fungicidas pode obter controle efetivo se administrado logo após o aparecimento das primeiras pústulas. Quando a ferrugem ocorre em plantas em final de ciclo não há redução significativa na produção, sendo o controle químico desnecessário.',
            fungicides: [
                {
                    id: 9313,
                },
                {
                    id: 13247,
                },
                {
                    id: 12657,
                },
                {
                    id: 8360,
                },
                {
                    id: 10085,
                },
                {
                    id: 11347,
                },
                {
                    id: 11200,
                },
                {
                    id: 5351,
                },
                {
                    id: 13156,
                },
                {
                    id: 5361,
                },
                {
                    id: 9844,
                },
                {
                    id: 15203,
                },
                {
                    id: 9750,
                },
                {
                    id: 5078,
                },
                {
                    id: 9960,
                },
                {
                    id: 15639,
                },
                {
                    id: 12212,
                },
                {
                    id: 8298,
                },
                {
                    id: 11204,
                },
                {
                    id: 10220,
                },
                {
                    id: 11438,
                },
                {
                    id: 14440,
                },
                {
                    id: 14205,
                },
                {
                    id: 7975,
                },
                {
                    id: 15705,
                },
                {
                    id: 16371,
                },
                {
                    id: 10751,
                },
                {
                    id: 10058,
                },
                {
                    id: 14021,
                },
                {
                    id: 9843,
                },
                {
                    id: 10463,
                },
                {
                    id: 8556,
                },
                {
                    id: 7847,
                },
                {
                    id: 12691,
                },
                {
                    id: 8885,
                },
                {
                    id: 14423,
                },
                {
                    id: 14424,
                },
                {
                    id: 5475,
                },
                {
                    id: 10086,
                },
                {
                    id: 13268,
                },
                {
                    id: 10962,
                },
                {
                    id: 9380,
                },
                {
                    id: 16546,
                },
                {
                    id: 8502,
                },
                {
                    id: 14204,
                },
            ],
        },
        {
            id: 4461,
            classification: 'Doença',
            culture: 'Milho',
            scientificName: 'Pythium aphanidermatum',
            commonNames: 'Tombamento, Podridão-do-colmo',
            author: 'Santos, C.E.N.; Mendes, M.A.S.',
            description:
                'A podridão-do-colmo causada pelo fungo Pythium aphanidermatum (Edson) Fitzp., não é tão comum quanto às podridões de Diplodia e Fusarium. Esse patógeno é considerado um parasita não especializado, possuindo um grande número de hospedeiras.',
            symptoms:
                'COLMO: A podridão causada por Pythium aphanidermatum limita-se ao primeiro entrenó acima do solo. O fungo causa uma podridão aquosa, lembrando uma bacteriose, pode ocorrer o estrangulamento do colmo na região atacada, geralmente acarretando o tombamento da planta. As plantas tombadas permanecem verdes, devido ao fato de os feixes vasculares permanecerem intactos.\n\nO fungo também pode causar podridões das sementes e das raízes.\n\nOutra característica da doença é a queda repentina da planta, mesmo antes do florescimento.',
            bioecology:
                'Pythium aphanidermatum é um fungo habitante do solo e apresenta um elevado número de espécies hospedeiras, este permanece como saprófita a maior parte do ciclo de vida podendo infectar plantas vivas tornando-se parasita. Excesso de água no solo e temperaturas elevadas favorecem a ocorrência da doença.\n\nEm condições de alta umidade no solo e baixas temperaturas, o apodrecimento fica restrito às raízes e sementes.',
            control:
                'As principais medidas de controle a serem tomada são a drenagem do solo e o manejo adequado da água de irrigação devido ao fato de se tratar de um patógeno de solo que possui um grande número de espécies hospedeiras e passar a maior parte do seu ciclo de vida como saprófita. A rotação de cultura é uma medida questionável.\n\nCONTROLE QUÍMICO: O tratamento das sementes é recomendado para plantios em regiões frias.',
            fungicides: [
                {
                    id: 5380,
                },
                {
                    id: 8302,
                },
            ],
        },
        {
            id: 4462,
            classification: 'Doença',
            culture: 'Milho',
            scientificName: 'Rhizopus spp.',
            commonNames: 'Mofo-preto',
            author: 'Santos, C.E.N.; Mendes, M.A.S.',
            description:
                'Rhizopus spp. é o agente causal do mofo-preto do milho. Ocorre em sementes e plântulas em pré-emergência e está presente em sementes armazenadas.',
            symptoms:
                'SEMENTES: Nas sementes, causa um rápido apodrecimento, recobrindo-as com micélio do fungo e numerosos esporângios de coloração preta.',
            bioecology:
                'Rhizopus spp. produz esporos de resistência (zigósporos ou clamidósporos) que viabilizam a sua sobrevivência por vários meses no solo, podendo também ocorrer saprofiticamente. A disseminação a longas distâncias é feita principalmente por meio de sementes infectadas. \n\nTemperaturas entre 32 e 35 ºC favorecem a infecção de sementes e plântulas, não sendo indispensável a condição de umidade elevada.',
            control:
                'CONTROLE QUÍMICO: O tratamento de sementes com fungicida é recomendado.',
            fungicides: [
                {
                    id: 11165,
                },
            ],
        },
        {
            id: 4476,
            classification: 'Doença',
            culture: 'Milho',
            scientificName: 'Helicotylenchus dihystera',
            commonNames: 'Nematóide, Nematóide-espiralado',
            author: 'Santos, M.F.; Mendes, M.A.S.',
            description:
                'Helicotylenchus dihystera (Cobb 1893) Sher 1961 tem como sinonímias Tylenchus olaae Cobb, 1906; Aphelenchus dubius var. peruensis Steiner, 1920; Tylenchus spiralis Cassidy, 1930; Helicotylenchus nannus Steiner, 1945 e Helicotylenchus crenatus Das, 1960.\n\nEste organismo é polífago, possuindo várias hospedeiras agronomicamente importantes, como banana, café, citros, cevada, ervilha, feijão, soja etc. e muitas plantas daninhas.',
            symptoms:
                'Está presente no sistema radicular, sendo classificado como ectoparasita.',
            bioecology:
                'Helicotylenchus dihystera pode sobreviver por vários meses no solo sem a presença da hospedeira. Nas inoculações experimentais realizadas em cana-de-açúcar verificou-se que o ciclo de vida varia de 35-37 dias à temperatura de 23-33 °C. A disseminação do nematóide ocorre principalmente por enxurradas, água de irrigação e implementos agrícolas.',
            control:
                'PRÁTICAS CULTURAIS: Recomenda-se a limpeza das ferramentas e máquinas agrícolas antes de executar trabalhos nas áreas ainda não infestadas.',
            fungicides: [
                {
                    id: 12764,
                },
                {
                    id: 13166,
                },
                {
                    id: 13128,
                },
            ],
        },
        {
            id: 4477,
            classification: 'Doença',
            culture: 'Milho',
            scientificName: 'Penicillium digitatum',
            commonNames: 'Bolor-verde',
            author: 'Santos, M.F.; Mendes, M.A.S.',
            description:
                'Penicillium digitatum (Pers.:fr.) Sacc. afeta os grãos em condições de campo e no armazenamento, reduzindo a qualidade do produto.  O patógeno pode provocar a redução da germinação, perda da matéria seca e alteração do valor nutricional da semente.',
            symptoms:
                'ESPIGAS / SEMENTES: O sintoma típico da doença é a presença de um bolor verde entre os grãos e sobre o sabugo, resultado da esporulação do fungo.',
            bioecology:
                'Penicillium spp. está presente principalmente nos restos de cultura, e  a contaminação ocorre durante o florescimento, colheita, transporte e armazenamento. \n\nA germinação dos esporos de Penicillium spp. ocorre na faixa de temperatura entre 15 - 32 °C, sendo que o ótimo está entre 21 a 25 °C. Sob condições de armazenagem, as espécies de Penicillium proliferam caso ocorram condições de 80 a 90% de umidade relativa do ar intergranular e 15 a 18% de teor de umidade dos grãos.',
            control:
                'PRÁTICAS CULTURAIS: Recomenda-se não deixar passar o prazo de colheita, e essa operação deve ser realizada assim que o teor de umidade dos grãos permitir.\n\nAs impurezas, grãos danificados e materiais estranhos devem ser removidos, e a temperatura da massa dos grãos e a aeração do ambiente devem ser monitoradas. Recomenda-se também a adoção de medidas para o controle de insetos e roedores, pois geralmente a proliferação dos fungos está associada ao ataque dessas pragas.',
            fungicides: [
                {
                    id: 8930,
                },
                {
                    id: 18316,
                },
            ],
        },
        {
            id: 4478,
            classification: 'Doença',
            culture: 'Milho',
            scientificName: 'Penicillium oxalicum',
            commonNames: 'Olho-azul, Bolor-azul',
            author: 'Santos, M.F.; Mendes, M.A.S.',
            description:
                'Penicillium oxalicum Currie & Thom afeta os grãos em condições de campo e no armazenamento, reduzindo a qualidade do produto.  \n\nNos últimos anos, a incidência do patógeno tem aumentado nas áreas de cultivo, principalmente em períodos chuvosos.',
            symptoms:
                'ESPIGAS/SEMENTES: O sintoma típico da doença é a presença de um bolor azul entre os grãos e sobre o sabugo, resultado da esporulação do fungo. Às vezes, ocorrem o escurecimento do grão na região do embrião, denominado de "olho azul" do milho, e a formação de estrias brancas sobre os grãos. O patógeno pode provocar a redução da germinação, perda da matéria seca e alteração do valor nutricional da semente.',
            bioecology:
                'Penicillium spp. está presente principalmente nos restos de cultura, e a contaminação ocorre durante o florescimento, colheita, transporte e armazenamento. \n\nA germinação dos esporos de Penicillium spp. ocorre na faixa de temperatura entre 15 - 32 °C, sendo que o ótimo está entre 21 a 25 °C. Sob condições de armazenagem, as espécies de Penicillium proliferam caso ocorram condições de 80 a 90% de umidade relativa do ar intergranular e 15 a 18% de teor de umidade dos grãos.',
            control:
                'PRÁTICAS CULTURAIS: Recomenda-se não deixar passar o prazo de colheita, e essa operação deve ser realizada assim que o teor de umidade dos grãos permitir. \n\nAs impurezas, grãos danificados e materiais estranhos devem ser removidos, e a temperatura da massa dos grãos e a aeração do ambiente devem ser monitoradas. Recomenda-se também a adoção de medidas para o controle de insetos e roedores, pois geralmente a proliferação dos fungos está associada ao ataque dessas pragas.',
            fungicides: [
                {
                    id: 10465,
                },
                {
                    id: 17458,
                },
                {
                    id: 11798,
                },
                {
                    id: 12897,
                },
                {
                    id: 11915,
                },
                {
                    id: 11916,
                },
                {
                    id: 4978,
                },
                {
                    id: 8459,
                },
                {
                    id: 10143,
                },
                {
                    id: 10138,
                },
                {
                    id: 11925,
                },
                {
                    id: 10539,
                },
                {
                    id: 12300,
                },
                {
                    id: 11899,
                },
                {
                    id: 9211,
                },
                {
                    id: 11527,
                },
                {
                    id: 14031,
                },
                {
                    id: 5343,
                },
                {
                    id: 5365,
                },
                {
                    id: 11534,
                },
            ],
        },
        {
            id: 4479,
            classification: 'Doença',
            culture: 'Milho',
            scientificName: 'Pythium spp.',
            commonNames: 'Podridão-de-raízes, Estiolamento',
            author: 'Santos, C.E.N.; Mendes, M.A.S.',
            description:
                'A podridão-de-raízes causada por Pythium spp., causa prejuízos diretamente relacionados com o desenvolvimento das plantas. Sua importância varia de acordo com o grau de severidade, podendo, em casos severos, causar tombamento.',
            symptoms:
                'Inicialmente podem ser observadas lesões de coloração variando de marrom-claro a escuro, com perda da consistência dos tecidos. Em estágios mais avançados, as raízes apresentam grandes áreas atacadas, podendo causar o tombamento das plantas.',
            bioecology:
                'Os fungos do gênero Pythium são habitantes do solo e apresentam um grande número de espécies hospedeiras, estes podem permanecer como saprófitas. ou infectar plantas vivas, tornando-se parasita. Excesso de água no solo e temperaturas elevadas favorecem a ocorrência da doença.',
            control:
                'As principais medidas de controle a serem tomadas são a drenagem do solo e o manejo adequado da água de irrigação. Devido ao fato de se tratar de um patógeno de solo que possui um grande número de espécies hospedeiras e poder ocorrer como saprófita. A rotação de cultura é uma medida questionável.\n\nCONTROLE QUÍMICO: O tratamento das sementes é recomendado para plantios em regiões frias.',
            fungicides: [
                {
                    id: 10465,
                },
                {
                    id: 17458,
                },
                {
                    id: 11798,
                },
                {
                    id: 11915,
                },
                {
                    id: 11916,
                },
                {
                    id: 5387,
                },
                {
                    id: 12859,
                },
                {
                    id: 8459,
                },
                {
                    id: 11165,
                },
                {
                    id: 10143,
                },
                {
                    id: 10138,
                },
                {
                    id: 11925,
                },
                {
                    id: 8246,
                },
                {
                    id: 11899,
                },
                {
                    id: 9211,
                },
                {
                    id: 11527,
                },
                {
                    id: 11534,
                },
            ],
        },
        {
            id: 4480,
            classification: 'Doença',
            culture: 'Milho',
            scientificName: 'Rhizoctonia solani',
            commonNames: 'Tombamento, Damping-off',
            author: 'Santos, C.E.N.; Mendes, M.A.S.',
            description:
                'O fungo Rhizoctonia solani J.G. Kühn ocorre na cultura do milho (Zea mays L.), juntamente com alguns outros patógenos presentes no solo, que causando podridões radiculares no início do desenvolvimento da plântula e provocando redução no vigor e na germinação da semente. A incidência e a severidade do ataque estão associados às condições do solo e a seqüência de culturas cultivadas na área.',
            symptoms:
                'RAÍZES: As infecções radiculares caracterizam-se por lesões nas raízes primárias e secundárias, que posteriormente tornam-se escuras e necrosadas. \n\nPARTE AÉREA: Na parte aérea ocorre murcha e subdesenvolvimento da planta, em casos severos, ocorre tombamento.\n\nSEMENTES: Causa redução na germinação e no vigor das sementes.',
            bioecology:
                'A incidência e a severidade estão associadas às condições do solo, principalmente umidade e temperatura elevadas e má drenagem. O desenvolvimento no solo se dá pela associação com a matéria orgânica morta. A sobrevivência em condições desfavoráveis é viabilizada pela formação de escleródios, estruturas de resistência de coloração escura e formato irregular.',
            control:
                'O tratamento fungicida das sementes de milho objetiva principalmente o controle de patógenos de solo, como é o caso de Rhizoctonia solani. Recomenda-se que o tratamento das sementes seja realizado no momento da embalagem para venda. As sementes tratadas devem ser coradas com alguma substância química para alertar sobre o perigo do consumo na alimentação humana e animal.',
            fungicides: [
                {
                    id: 10465,
                },
                {
                    id: 11798,
                },
                {
                    id: 4978,
                },
                {
                    id: 5387,
                },
                {
                    id: 12859,
                },
                {
                    id: 11165,
                },
                {
                    id: 11925,
                },
                {
                    id: 8246,
                },
                {
                    id: 13230,
                },
            ],
        },
        {
            id: 4515,
            classification: 'Doença',
            culture: 'Milho',
            scientificName: 'Peronosclerospora sorghi',
            commonNames: 'Míldio-do-sorgo, Míldio-do-sorgo-em-milho',
            author: 'Santos, M.F.; Mendes, M.A.S.',
            description:
                'Peronosclerospora sorghi (Weston & Uppal) C.G. Shaw tem como sinonímia Sclerospora sorghi W. Weston & Uppal. Este fungo afeta as folhas, causando clorose, e o colmo, reduzindo a produtividade da cultura.\n\nNo Brasil, os prejuízos econômicos ocasionados pela doença são pouco significativos, exceto na região sudoeste do Paraná, nos plantios após o mês de janeiro.\n\nAlém do milho, o fungo ataca a cultura do sorgo, capim-maçambará, Sorghum halepense e outras gramíneas. O patógeno está presente em todas as regiões produtoras de milho, principalmente nos estados do Paraná, São Paulo e Minas Gerais.',
            symptoms:
                'Plantas doentes apresentam pendões com proliferação de estruturas filóides e baixa produtividade.\n\nFOLHAS: O fungo, quando sistêmico, pode causar clorose e, às vezes, ocasionar a formação de estrias e faixas brancas na superfície das folhas, as quais são mais estreitas e eretas em relação às plantas sadias. As folhas posicionadas na parte inferior da planta apresentam sintomas de "meia folha doente". Quando as condições ambientais são favoráveis ao patógeno, ocorre o desenvolvimento das estruturas do fungo, resultando em uma eflorescência esbranquiçada em ambos os lados do limbo foliar das primeiras folhas da planta.\n\nCOLMOS / RAÍZES: As plantas infectadas apresentam colmos mais finos, resultando em acamamento das plantas e maior número de raízes adventícias.',
            bioecology:
                'Os oósporos do fungo sobrevivem no solo por vários anos e infectam sistemicamente as plântulas de milho, já os esporângios, produzidos em plantas hospedeiras, infectam as folhas desenvolvidas. \n\nAs hifas e esporângios são disseminados pela semente e vento, respectivamente. Para que  ocorra a germinação dos esporângios, a temperatura não pode ser superior a 20 °C.',
            control:
                'RESISTÊNCIA: Recomenda-se a utilização de cultivares resistentes.\n\nPRÁTICAS CULTURAIS: O produtor deve retirar e destruir as plantas doentes e os restos culturais. Recomenda-se também a rotação de culturas e a eliminação das plantas hospedeiras próximas à lavoura. \n\nCONTROLE QUÍMICO: Recomenda-se o tratamento das sementes com fungicidas sistêmicos.',
            fungicides: [],
        },
        {
            id: 4516,
            classification: 'Doença',
            culture: 'Milho',
            scientificName: 'Phaeosphaeria maydis',
            commonNames: 'Mancha-de-Phaeosphaeria, Mancha-foliar',
            author: 'Santos, M.F.; Mendes, M.A.S.',
            description:
                'Phaeosphaeria maydis (Henn.) Rane ataca as folhas, causando mancha foliar. O plantio de cultivares susceptíveis em locais onde as condições ambientais favorecem o fungo tem ocasionado perdas na produção em cerca de 60%.  \n\nA mancha-de-Phaeosphaeria, a partir de 1990, tem aumentado de importância e incidência, e atualmente está presente em todas as áreas cultivadas com milho no país.\n\nNão existem relatos de outras hospedeiras deste fungo.',
            symptoms:
                'Além dos sintomas abaixo descritos, pode também ocorrer a redução do ciclo da planta.\n\nFOLHAS: As lesões são inicialmente aquosas e de coloração verde-clara, depois tornam-se necróticas, apresentando, às vezes, halos amarelados. No centro da lesão é possível observar pontos escuros que são os picnídios, estruturas do fungo. No início, as lesões são pequenas e aparecem nas folhas inferiores. Posteriormente, a doença atinge toda a planta, as lesões aumentam de tamanho e podem coalescer, causando seca parcial ou total das folhas. Pode também ocorrer a queda das folhas.\n\nCOLMO: Quando a infecção é alta, a planta tem dificuldade em conduzir o nitrogênio para os grãos, ficando acumulado no colmo.\n\nSEMENTES: Em condições ideais ao patógeno, pode ocorrer redução do tamanho dos grãos.',
            bioecology:
                'O fungo sobrevive principalmente em restos de cultura O vento e o respingo de chuva atuam disseminando o patógeno. Umidade relativa acima de 60%, precipitações pluviométricas elevadas e temperaturas noturnas baixas favorecem o desenvolvimento da doença. A doença é considerada mais severa nos meses de dezembro a maio, não sendo comum nos meses de julho a outubro.',
            control:
                'RESISTÊNCIA VARIETAL: A utilização de cultivares resistentes é o melhor método de controle.\n\nPRÁTICAS CULTURAIS: Evitar o plantio da cultura nos períodos favoráveis à doença e incorporar os restos de cultura quando observar alta incidência do fungo.',
            fungicides: [
                {
                    id: 9313,
                },
                {
                    id: 14252,
                },
                {
                    id: 15314,
                },
                {
                    id: 15006,
                },
                {
                    id: 11129,
                },
                {
                    id: 17411,
                },
                {
                    id: 11450,
                },
                {
                    id: 13247,
                },
                {
                    id: 12657,
                },
                {
                    id: 8360,
                },
                {
                    id: 16468,
                },
                {
                    id: 11347,
                },
                {
                    id: 19467,
                },
                {
                    id: 10353,
                },
                {
                    id: 16553,
                },
                {
                    id: 12120,
                },
                {
                    id: 14026,
                },
                {
                    id: 12682,
                },
                {
                    id: 14607,
                },
                {
                    id: 16313,
                },
                {
                    id: 11874,
                },
                {
                    id: 5400,
                },
                {
                    id: 16382,
                },
                {
                    id: 14373,
                },
                {
                    id: 8374,
                },
                {
                    id: 12912,
                },
                {
                    id: 12251,
                },
                {
                    id: 10983,
                },
                {
                    id: 18344,
                },
                {
                    id: 16318,
                },
                {
                    id: 5477,
                },
                {
                    id: 12334,
                },
                {
                    id: 9899,
                },
                {
                    id: 14916,
                },
                {
                    id: 11278,
                },
                {
                    id: 8490,
                },
                {
                    id: 13156,
                },
                {
                    id: 16377,
                },
                {
                    id: 5092,
                },
                {
                    id: 12118,
                },
                {
                    id: 8392,
                },
                {
                    id: 14246,
                },
                {
                    id: 9231,
                },
                {
                    id: 16407,
                },
                {
                    id: 10173,
                },
                {
                    id: 7923,
                },
                {
                    id: 14162,
                },
                {
                    id: 8447,
                },
                {
                    id: 9099,
                },
                {
                    id: 11617,
                },
                {
                    id: 15203,
                },
                {
                    id: 11038,
                },
                {
                    id: 12154,
                },
                {
                    id: 12212,
                },
                {
                    id: 11338,
                },
                {
                    id: 5339,
                },
                {
                    id: 11924,
                },
                {
                    id: 12722,
                },
                {
                    id: 10311,
                },
                {
                    id: 10346,
                },
                {
                    id: 11384,
                },
                {
                    id: 11088,
                },
                {
                    id: 11155,
                },
                {
                    id: 8926,
                },
                {
                    id: 15327,
                },
                {
                    id: 14280,
                },
                {
                    id: 11618,
                },
                {
                    id: 14422,
                },
                {
                    id: 15507,
                },
                {
                    id: 20981,
                },
                {
                    id: 18128,
                },
                {
                    id: 15159,
                },
                {
                    id: 8855,
                },
                {
                    id: 14245,
                },
                {
                    id: 13623,
                },
                {
                    id: 11776,
                },
                {
                    id: 10914,
                },
                {
                    id: 9829,
                },
                {
                    id: 5348,
                },
                {
                    id: 5146,
                },
                {
                    id: 15297,
                },
                {
                    id: 15045,
                },
                {
                    id: 11746,
                },
                {
                    id: 14576,
                },
                {
                    id: 14578,
                },
                {
                    id: 14597,
                },
                {
                    id: 18715,
                },
                {
                    id: 10333,
                },
                {
                    id: 7975,
                },
                {
                    id: 14999,
                },
                {
                    id: 5457,
                },
                {
                    id: 10751,
                },
                {
                    id: 10578,
                },
                {
                    id: 14924,
                },
                {
                    id: 7877,
                },
                {
                    id: 12044,
                },
                {
                    id: 17593,
                },
                {
                    id: 9782,
                },
                {
                    id: 13928,
                },
                {
                    id: 10524,
                },
                {
                    id: 14021,
                },
                {
                    id: 7840,
                },
                {
                    id: 10964,
                },
                {
                    id: 9783,
                },
                {
                    id: 11876,
                },
                {
                    id: 21254,
                },
                {
                    id: 10909,
                },
                {
                    id: 12292,
                },
                {
                    id: 5134,
                },
                {
                    id: 8263,
                },
                {
                    id: 16599,
                },
                {
                    id: 12691,
                },
                {
                    id: 15161,
                },
                {
                    id: 10753,
                },
                {
                    id: 18196,
                },
                {
                    id: 10769,
                },
                {
                    id: 14238,
                },
                {
                    id: 5475,
                },
                {
                    id: 5289,
                },
                {
                    id: 8372,
                },
                {
                    id: 15299,
                },
                {
                    id: 13268,
                },
                {
                    id: 12888,
                },
                {
                    id: 13119,
                },
                {
                    id: 13988,
                },
                {
                    id: 13234,
                },
                {
                    id: 13187,
                },
                {
                    id: 8375,
                },
                {
                    id: 10193,
                },
                {
                    id: 11393,
                },
                {
                    id: 13629,
                },
                {
                    id: 13627,
                },
                {
                    id: 11613,
                },
                {
                    id: 16940,
                },
                {
                    id: 12666,
                },
                {
                    id: 8601,
                },
                {
                    id: 16546,
                },
                {
                    id: 12913,
                },
                {
                    id: 9114,
                },
            ],
        },
        {
            id: 4517,
            classification: 'Doença',
            culture: 'Milho',
            scientificName: 'Stenocarpella maydis',
            commonNames: 'Podridão-branca-das-espigas, Podridão-de-Diplodia',
            author: 'Hernández, A.G.; Mendes, M.A.S.',
            description:
                'Stenocarpella maydis (Berk.) B.C. Sutton tem como sinônimos Diplodia maydicola Speg., Diplodia maydis (Berk.) Sacc., Diplodia zeae (Schw.) Lev., Diplodia zeae-maydis Mechtijeva, Hendersonia zeae (Schw.) Haszl., Macrodiplodia zeae (Schw.) Petrak & H. Syd. apud Petrak, Phaeostagonosporopsis zeae (Schw.) Woronichin, Sphaeria maydis Berk. e Sphaeria zeae Schw.\n\nA podridão-branca-da-espiga é considerada a mais destrutiva dentre as que atacam as espigas do milho, e é causada por duas espécies de fungo: Stagonospora maydis e S. macrospora Earle.\n\nA doença está amplamente distribuída em nível mundial, sendo particularmente destrutiva em regiões com alto regime pluviométrico. Embora esteja distribuída em quase todo o território brasileiro, as maiores incidências ocorrem nos estados da região Sul.\n\nOBS: O fungo Diplodia maydis foi segregado para o gênero Stenocarpella por B.C. Sutton em 1980, razão pela qual o nome atual que deve ser utilizado é Stenocarpella maydis (Berk.) B.C. Sutton.',
            symptoms:
                'ESPIGAS: As folhas das espigas infectadas no começo da sua formação apresentam um aspecto alvejado ou cor de palha. Quando a infecção acontece durante as duas primeiras semanas após a floração, a espiga completa torna-se marrom-acinzentada e enrugada muito rápida e termina apodrecendo totalmente. A infecção geralmente começa na base da espiga, propagando-se progressivamente para o ápice. As espigas mais leves ficam em posição vertical, favorecendo assim a entrada da água da chuva e com isto criando condições propícias para o desenvolvimento do fungo, que ataca todas as folhas da espigas, as quais aparecem grudadas entre si, por causa do crescimento do micélio entre elas. Observa-se, também, o aparecimento de picnídios negros sobre as folhas da espiga, as brácteas florais, o tecido do sabugo e nas laterais dos grãos. Se a infecção é mais tardia, as espigas não mostram sintomas externos, mas o fungo pode encontrar-se crescendo entre os grãos, sendo que estes apresentam o ápice descolorido.\n\nSEMENTES: Os grãos apresentam uma coloração pálida e grande quantidade de picnídios pretos na sua superfície e no sabugo.',
            bioecology:
                'Os picnídios do fungo podem sobreviver nos restos de colheita no solo, e como esporos e micélio sobre as sementes.\n\nOs esporos são expelidos através do ostíolo quando há condições favoráveis de alta umidade, sendo então disseminados pelos respingos da chuva e levados pelas correntes do vento, ou provavelmente pelos insetos para as espigas em formação.\n\nO desenvolvimento da doença é favorecido por um ambiente de secura no começo da lavoura, seguido de um período chuvoso antes e depois da floração, permanecendo as espigas suscetíveis até umas três semanas mais tarde.\n\nO ataque de pássaros à lavoura, alimentando-se dos grãos do extremo apical da espiga, favorece também a entrada do fungo e o posterior desenvolvimento da doença. Os híbridos com pericarpo fino são bastante suscetíveis.',
            control:
                'Uso de variedades e híbridos resistentes. Uma adequada programação da época da semeadura, visando que a floração e colheita não coincidam com a época mais úmida, é também uma medida eficiente para evitar ataques mais severos dos fungos causadores da doença.\n\nDevido ao ataque do fungo, o desenvolvimento da doença pode continuar a progredir ainda após a colheita se as espigas ou grãos são armazenados com excesso de umidade, é de grande importância que tanto as espigas quanto os grãos sejam secados até atingirem menos de 15% de umidade.',
            fungicides: [
                {
                    id: 10465,
                },
                {
                    id: 11798,
                },
                {
                    id: 4978,
                },
                {
                    id: 10143,
                },
                {
                    id: 10138,
                },
                {
                    id: 15045,
                },
                {
                    id: 11925,
                },
                {
                    id: 8556,
                },
                {
                    id: 13230,
                },
                {
                    id: 13988,
                },
                {
                    id: 11534,
                },
            ],
        },
        {
            id: 4546,
            classification: 'Doença',
            culture: 'Milho',
            scientificName: 'Ustilago maydis',
            commonNames: 'Carvão-comum',
            author: 'Santos, C.E.N.; Mendes, M.A.S.',
            description:
                'O carvão-comum do milho (Zea mays L.), causado pelo fungo Ustilago maydis (DC) Cda., ocorre em todas as regiões produtoras de milho do país, contudo é uma doença de importância secundária, ocorrendo comumente em plantas estressadas.',
            symptoms:
                'ESPIGAS: O fungo Ustilago maydis causa galhas em todos os órgãos aéreos da planta, sendo mais comum nas espigas. Inicialmente, as galhas são recobertas por uma membrana branca e brilhante. Com a evolução da doença forma-se uma massa de esporos pretos (teliósporos), que são liberados com o rompimento da membrana.',
            bioecology:
                'O fungo Ustilago maydis é disseminado principalmente pelo vento e por respingos de água da chuva, podendo sobreviver no solo na forma de teliósporos. Baixa umidade e temperaturas entre 26 e 34 ° C favorecem na ocorrência da doença. O milho é o único hospedeiro desse patógeno.',
            control:
                'PRÁTICAS CULTURAIS: É recomendado evitar injúrias nos tratos culturais, controlar as lagartas que afetam as espigas, realizar rotação de cultura em áreas com elevada incidência da doença e evitar adubação com dose excessiva de nitrogênio.\n\nEm culturas bem conduzidas, praticamente não há ocorrência do carvão-comum.',
            fungicides: [],
        },
        {
            id: 4551,
            classification: 'Doença',
            culture: 'Milho',
            scientificName: 'Colletotrichum graminicola',
            commonNames: 'Antracnose-do-colmo, Podridão-de-Colletotrichum',
            author: 'Hernández, A.G.; Mendes, M.A.S.',
            description:
                'O fungo Colletotrichum graminicola (Ces.) G. W. Wils. é conhecido pelos sinônimos de Colletotrichum sublineola Henn. in Kab & Bubák e Vermicularia graminicola Westend.\n\nDesde a década de 70, tem se convertido na doença predominante nessa cultura no sudeste dos Estados Unidos e na metade sul do cinturão do milho.\n\nA doença manifesta-se com maior freqüência nas folhas e no colmo, mas o fungo pode infectar todas as partes da planta, incluindo os grãos e as raízes.\n\nEste patógeno encontra-se associado à cultura do milho em 14 países (África do Sul, Brasil, Gana, Índia, Estados Unidos, Malaui, Nepal, Nigéria, Nova Zelândia, Reino Unido, Sierra Leoa, Tanzânia, Zâmbia e Zimbábue).\n\nColletotrichum graminicola já foi constatado em 40 países, parasitando 88 gêneros de Gramineae, dois de Leguminosae, e um de Cyperaceae, Euphorbiaceae e Iridaceae, além do milho.',
            symptoms:
                'As infecções do colmo são evidentes em vários estádios do crescimento, dependendo da suscetibilidade do híbrido ou variedade. Os tecidos inferiores do colmo das plantas altamente suscetíveis podem ser tão severamente apodrecidos que as plantas morrem antes da polinização. No entanto, a maioria dos híbridos não são afetados até pouco antes da senescência normal. Com freqüência, as partes acima das espigas descolorem-se e morrem 4-6 semanas após a polinização, enquanto que as partes abaixo destas permanecem verdes.\n\nAs perdas de rendimento podem variar de uma estação ou de uma região para outra, alcançando valores entre 10-20% em híbridos suscetíveis.\n\nFOLHAS: As duas ou três folhas superiores amarelecem ou avermelham, dobram-se e morrem. A descoloração das folhas superiores ocorre com freqüência e quase ao mesmo tempo em que nas folhas inferiores. Em outros casos, as plantas completas podem morrer prematuramente e mais tarde dobrar-se. A morte e a dobra do colmo com freqüência são expressadas mais tarde do que a morte descendente do topo.\n\nCOLMO: Lesões aquosas estreitas, verticais ou ovais na casca, tornando-se douradas a marrom-avermelhadas e finalmente marrom-escuras no final do ciclo, e podem cobrir os internós ou o colmo completo. Com freqüência, são encontradas manchas negras (acérvulos) na casca do colmo, associadas com a produção de esporos pelo fungo. As lesões coalescem formando grandes manchas ou estrias marrom-escuras a negro-brilhante, que podem ser deprimidas. As lesões externas são acompanhadas por uma descoloração marrom ou negra do tecido da medula, começando nos nós. Em alguns genótipos, a medula pode amolecer, liquidificar e facilmente se desfazer.',
            bioecology:
                'O fungo sobrevive como conídios nos acérvulos sobre os restos de folhas e colmos, e como células miceliais de repouso dormentes nos restos do colmo. Os conídios são o inóculo primário para a fase da queima foliar, mas a origem do inóculo primário para a fase da podridão do colmo não está totalmente compreendida.\n\nA doença pode disseminar pelas sementes e pelo vento que carrega os conídios desde a superfície dos acérvulos até os campos vizinhos. O solo aderido ao maquinário e implementos agrícolas usados nas lavouras de milho infectadas por C. graminicola é também outra via de disseminação.\n\nO desenvolvimento da doença é favorecido por condições de alta umidade.',
            control:
                'O uso de variedades ou híbridos resistentes permite o cultivo em áreas infectadas.\n\nDeve evitar-se o cultivo direto em áreas onde ocorre a doença, pois essa prática ajudaria a aumentar a densidade de inóculo no solo. A rotação de culturas, a limpeza e o enterramento profundo dos restos de cultura levam a uma redução da fonte de inóculo.',
            fungicides: [
                {
                    id: 10465,
                },
                {
                    id: 11798,
                },
                {
                    id: 10143,
                },
                {
                    id: 10138,
                },
                {
                    id: 11925,
                },
                {
                    id: 11534,
                },
            ],
        },
        {
            id: 4552,
            classification: 'Doença',
            culture: 'Milho',
            scientificName: 'Physopella zeae',
            commonNames: 'Ferrugem-tropical',
            author: 'Santos, M.F.; Mendes, M.A.S.',
            description:
                'Physopella zeae é considerada uma doença de importância recente para a cultura do milho, principalmente nas regiões Centro-Oeste e Sudeste. A doença pode ocorrer em qualquer fase de desenvolvimento da planta, sendo que a utilização de híbridos susceptíveis tem favorecido a ação do patógeno.\n\nNão existem relatos de outras hospedeiras para este patógeno.',
            symptoms:
                'Os sintomas da doença são observados principalmente sobre as folhas na forma de pústulas. A queda de produção é maior quando a infecção ocorre em plantas jovens e, aliado a isto, tiver condições climáticas favoráveis ao desenvolvimento do patógeno. \n\nFOLHAS: As pústulas são de cor creme e estão distribuídas em grupo na face superior da folha. Posteriormente, as pústulas passam a ter cor púrpura, com o centro claro. Possuem o formato arredondado ou oval, e na fase mais avançada da doença, são circundadas por halos escuros. Quando o ataque é severo, as pústulas coalescem, levando à queda prematura das folhas.',
            bioecology:
                'Este fungo é um parasita obrigatório, e a disseminação ocorre principalmente pelo vento. As plantações localizadas em regiões de baixas altitudes, quentes e úmidas estão mais predispostas a esta doença. A ferrugem tropical ocorre nos plantios tardios, a partir de outubro. Até o momento, a literatura cita a existência de duas raças desse patógeno.',
            control:
                'RESISTÊNCIA VARIETAL: A utilização de cultivares resistentes é o melhor método de controle.\n\nPRÁTICAS CULTURAIS: Evitar os plantios da cultura nos períodos favoráveis à doença.',
            fungicides: [
                {
                    id: 11347,
                },
                {
                    id: 13156,
                },
                {
                    id: 11155,
                },
                {
                    id: 12691,
                },
                {
                    id: 10954,
                },
                {
                    id: 5260,
                },
                {
                    id: 9274,
                },
                {
                    id: 10193,
                },
            ],
        },
        {
            id: 4553,
            classification: 'Doença',
            culture: 'Milho',
            scientificName: 'Pratylenchus brachyurus',
            commonNames: 'Nematóide-das-lesões',
            author: 'Santos, C.E.N.; Mendes, M.A.S.',
            description:
                'O nematóide Pratylenchus brachyurus (Godfrey) Filipjev & Steckhoven é o agente causal da pratilencose na cultura do milho. É um patógeno de considerável importância econômica devido a sua ampla distribuição geográfica e ao grande número de plantas hospedeiras.\n\nNa cultura do milho as perdas causadas por nematóides já foram quantificadas em 39% da produção.',
            symptoms:
                'RAÍZES: Nas raízes ocorrem lesões, por onde penetram fungos e bactérias que causam necroses.\n\nPARTE AÉREA: As plantas infectadas apresentam tamanho reduzido, folhas cloróticas e murcha. \n\nNo campo, os sintomas ocorrem em reboleiras.',
            bioecology:
                'O gênero Pratylenchus tem uma grande gama de hospedeiros, incluindo ervas daninhas, ornamentais, hortaliças, culturas anuais e perenes, essências florestais, etc. \n\nSão nematóides endoparasitas migradores que se movem livremente dentro das raízes e entre as raízes e o solo. As fêmeas reproduzem por partenogênese mitótica, sendo de difícil determinação a quantidade de ovos produzidos pela fêmea, pois deposita os ovos um a um nos tecidos do hospedeiro ou no solo. Em solos de pousio, a longevidade desse nematóide pode ser de até 21 meses. \n\nA dinâmica da população de Pratylenchus brachyurus é determinada pelas características do solo, tais como temperatura, umidade, granulometria, teor de matéria orgânica e composição da população de microorganismos.',
            control: 'Rotação de cultura com espécies não hospedeiras.',
            fungicides: [
                {
                    id: 16685,
                },
                {
                    id: 8523,
                },
                {
                    id: 11744,
                },
                {
                    id: 14923,
                },
                {
                    id: 14621,
                },
            ],
        },
        {
            id: 4554,
            classification: 'Doença',
            culture: 'Milho',
            scientificName: 'Pratylenchus zeae',
            commonNames: 'Nematóide-das-lesões',
            author: 'Santos, C.E.N.; Mendes, M.A.S.',
            description:
                'O nematóide Pratylenchus zeae Graham é o agente causal da pratilencose na cultura do milho. É um patógeno de ampla distribuição geográfica e possui um grande número de plantas hospedeiras, principalmente gramíneas e hortaliças.\n\nNa cultura do milho, as perdas causadas por nematóides já foram quantificadas em 39% da produção.',
            symptoms:
                'RAÍZES: Nas raízes ocorrem lesões, por onde penetram fungos e bactérias que causam necroses.\n\nPARTE AÉREA: As plantas infectadas apresentam tamanho reduzido, folhas cloróticas e murcha. \n\nNo campo, os sintomas ocorrem em reboleiras.',
            bioecology:
                'O gênero Pratylenchus tem uma grande gama de hospedeiros, incluindo ervas daninhas, ornamentais, hortaliças, culturas anuais e perenes, essências florestais, etc. \n\nSão nematóides endoparasitas migradores, que se movem livremente dentro das raízes e entre as raízes e o solo. As fêmeas reproduzem por partenogênese mitótica, sendo de difícil determinação a quantidade de ovos produzidos pela fêmea, pois esta deposita os ovos um a um nos tecidos do hospedeiro ou no solo. Em solos de pousio, a longevidade desse nematóide pode ser de até 21 meses. \n\nA dinâmica da população de Pratylenchus zeae é determinada pelas características do solo, tais como temperatura, umidade, granulometria, teor de matéria orgânica e composição da população de microorganismos.',
            control:
                'As principais medidas de controle são o uso de mudas sadias e de boa qualidade e a realização de rotação de cultura com espécies não hospedeiras.',
            fungicides: [
                {
                    id: 16685,
                },
                {
                    id: 8523,
                },
                {
                    id: 11744,
                },
                {
                    id: 8459,
                },
                {
                    id: 14066,
                },
                {
                    id: 14554,
                },
            ],
        },
        {
            id: 4561,
            classification: 'Doença',
            culture: 'Milho',
            scientificName: 'Exserohilum turcicum',
            commonNames: 'Mancha-foliar, Helminthosporium',
            author: 'Santos, M.F.; Mendes, M.A.S.',
            description:
                'Exserohilum turcicum, fase assexuada (anaformo) do fungo, tem como sinônimos Bipolaris turcica (Pass.) Shoemaker,  Drechslera turcica (Pass.) Subramanian & P.C. Jain e Helminthosporium turcicum Pass. \n\nA fase sexuada (teleomorfo) correspondente é Setosphaeria turcica (Luttrell) K.J. Leonard & E.G. Suggs, o qual tem como sinônimos Trichometasphaeria turcica Luttrell,    Trichometasphaeria turcica f. sp. sorghi Bergquist & Masias e Trichometasphaeria turcica f. sp. zeae Bergquist & Masias.\n\nExserohilum turcicum é responsável por uma das doenças mais importante na cultura do milho. No Brasil, a maioria das cultivares de milho-pipoca são suscetíveis ao fungo.\n\nO fungo está presente na maioria das áreas de cultivo de milho no país, principalmente em regiões altas (chapadas), onde é observado o ano inteiro.  Sorghum spp. também é afetado por esta doença.',
            symptoms:
                'Os sintomas da doença ocorrem principalmente nas folhas, onde é mais facilmente identificada. O prejuízo na cultura é maior quando o patógeno infecta a planta no período anterior ao embonecamento.\n\nFOLHAS: As lesões necróticas de formato elíptico, variando de 2,5 a 15 cm comprimento, possuem coloração verde-cinza  ou marrom e iniciam nas folhas inferiores da planta. Alguns autores descrevem a lesão como tendo coloração palha e bordas bem definidas e que posteriormente escurecem devido à frutificação do fungo. As lesões podem coalescer se a infecção for severa.',
            bioecology:
                'O fungo sobrevive em restos culturais na forma de conídios, micélio e clamidósporo. O vento e a chuva são responsáveis pela disseminação dos esporos. \n\nA temperatura entre 18 e 27 °C favorecem o desenvolvimento da doença, principalmente se vier acompanhada de períodos de alta umidade relativa. \n\nOs plantios de agosto e setembro, assim como os plantios de safrinha realizados após dezembro, são períodos considerados favoráveis à ocorrência da doença. A fase crítica da cultura ao fungo corresponde o período anterior ao embonecamento, principalmente se as condições ambientais forem favoráveis à doença.',
            control:
                'RESISTÊNCIA VARIETAL: Emprego de cultivares resistentes é o melhor método de controle e estão disponíveis no mercado.\n\nPRÁTICAS CULTURAIS: Incorporação dos restos de cultura e utilização de adubação equilibrada, evitando o excesso de nitrogênio. O plantio em locais ou  períodos onde as condições climáticas são favoráveis ao desenvolvimento da doença deve ser evitado.\n\nCONTROLE QUÍMICO: Pulverizações foliares com produtos químicos é recomendado para materiais de alto valor econômico. O fungicida tebuconazole  é citado na literatura para o controle desta doença.',
            fungicides: [
                {
                    id: 15314,
                },
                {
                    id: 15006,
                },
                {
                    id: 11129,
                },
                {
                    id: 17411,
                },
                {
                    id: 16468,
                },
                {
                    id: 8374,
                },
                {
                    id: 12251,
                },
                {
                    id: 10983,
                },
                {
                    id: 5351,
                },
                {
                    id: 11278,
                },
                {
                    id: 16377,
                },
                {
                    id: 14246,
                },
                {
                    id: 5361,
                },
                {
                    id: 9844,
                },
                {
                    id: 10504,
                },
                {
                    id: 9750,
                },
                {
                    id: 12154,
                },
                {
                    id: 12212,
                },
                {
                    id: 12722,
                },
                {
                    id: 14422,
                },
                {
                    id: 10220,
                },
                {
                    id: 14440,
                },
                {
                    id: 15045,
                },
                {
                    id: 14576,
                },
                {
                    id: 14578,
                },
                {
                    id: 14597,
                },
                {
                    id: 18715,
                },
                {
                    id: 7975,
                },
                {
                    id: 10058,
                },
                {
                    id: 10964,
                },
                {
                    id: 9843,
                },
                {
                    id: 10463,
                },
                {
                    id: 8556,
                },
                {
                    id: 14066,
                },
                {
                    id: 7847,
                },
                {
                    id: 11293,
                },
                {
                    id: 5134,
                },
                {
                    id: 8263,
                },
                {
                    id: 16599,
                },
                {
                    id: 15161,
                },
                {
                    id: 10769,
                },
                {
                    id: 8372,
                },
                {
                    id: 15299,
                },
                {
                    id: 10086,
                },
                {
                    id: 10962,
                },
                {
                    id: 9380,
                },
                {
                    id: 9275,
                },
                {
                    id: 9224,
                },
                {
                    id: 10954,
                },
                {
                    id: 5260,
                },
                {
                    id: 8375,
                },
                {
                    id: 11393,
                },
                {
                    id: 9307,
                },
                {
                    id: 8502,
                },
            ],
        },
        {
            id: 4581,
            classification: 'Doença',
            culture: 'Milho',
            scientificName: 'Puccinia polysora',
            commonNames: 'Ferrugem-polisora, Ferrugem',
            author: 'Santos, C.E.N.; Mendes, M.A.S.',
            description:
                'A ferrugem-polisora do milho (Zea mays L.), causada pelo fungo Puccinia polysora Underw., é a mais severa e destrutiva doença na cultura do milho na região central do Brasil, ocorrendo durante todo o ano agrícola nas regiões Centro-Oeste e Sudeste, podendo causar grandes perdas em cultivares que não apresenta resistência e até perdas totais da plantação quando esta ocorre antes do florescimento.',
            symptoms:
                'FOLHAS: Puccinia polysora produz pústulas pequenas, circulares, de coloração laranja a avermelhada mais frequentemente na face superior da folhas. Dependendo da severidade do ataque, essas pústulas podem ocorrer também na bainha. Á medida que a planta se aproxima da fase de maturação, as pústulas apresentam-se densamente distribuídas em ambas as faces das folhas. Os uredósporos do fungo são amarelos, binucleados, elipsóides a obovóides, com paredes esparsamente equinuladas. Os teliósporos são bicelulares, com septo constricto, de coloração marrom-clara, apresentando extremidades arredondadas; os teliósporos são raros na natureza.\n\nEm cultivares susceptíveis é comum a ocorrência de morte prematura em decorrência da destruição foliar.',
            bioecology:
                'O fungo Puccinia polysora é disseminado pelos uredósporos que são carreados principalmente pelo vento. Após o aparecimento das primeiras pústulas ocorre uma rápida multiplicação do potencial de inóculo no campo enquanto as condições climáticas permanecem favoráveis. Temperaturas em torno de 27 °C e umidade relativa elevada favorecem a ocorrência da doença.',
            control:
                'O uso de cultivares resistentes é o método de controle mais eficiente em locais e épocas favoráveis à ocorrência da doença.\n\nCONTROLE QUÍMICO: Pulverizações com fungicidas são vantajosas apenas nas fases iniciais da doença, a partir do aparecimento dos primeiros sintomas, evitando o aumento do potencial de inóculo na áreas. \n\nPRÁTICAS CULTURAIS: A rotação de cultura, evitando plantios sucessivos,  também apresenta-se como uma medida de controle efetiva.',
            fungicides: [
                {
                    id: 9313,
                },
                {
                    id: 15314,
                },
                {
                    id: 15006,
                },
                {
                    id: 17411,
                },
                {
                    id: 12894,
                },
                {
                    id: 13247,
                },
                {
                    id: 12657,
                },
                {
                    id: 10085,
                },
                {
                    id: 11347,
                },
                {
                    id: 11200,
                },
                {
                    id: 10353,
                },
                {
                    id: 13538,
                },
                {
                    id: 14607,
                },
                {
                    id: 16313,
                },
                {
                    id: 12905,
                },
                {
                    id: 5477,
                },
                {
                    id: 5351,
                },
                {
                    id: 11138,
                },
                {
                    id: 11156,
                },
                {
                    id: 14916,
                },
                {
                    id: 14469,
                },
                {
                    id: 13215,
                },
                {
                    id: 8490,
                },
                {
                    id: 13156,
                },
                {
                    id: 11376,
                },
                {
                    id: 9347,
                },
                {
                    id: 11198,
                },
                {
                    id: 14246,
                },
                {
                    id: 5361,
                },
                {
                    id: 11381,
                },
                {
                    id: 10173,
                },
                {
                    id: 7923,
                },
                {
                    id: 9844,
                },
                {
                    id: 11038,
                },
                {
                    id: 9750,
                },
                {
                    id: 5078,
                },
                {
                    id: 12212,
                },
                {
                    id: 12722,
                },
                {
                    id: 9887,
                },
                {
                    id: 11204,
                },
                {
                    id: 13915,
                },
                {
                    id: 10220,
                },
                {
                    id: 11438,
                },
                {
                    id: 14440,
                },
                {
                    id: 15045,
                },
                {
                    id: 14578,
                },
                {
                    id: 14597,
                },
                {
                    id: 18715,
                },
                {
                    id: 7975,
                },
                {
                    id: 8440,
                },
                {
                    id: 14999,
                },
                {
                    id: 5457,
                },
                {
                    id: 10751,
                },
                {
                    id: 10058,
                },
                {
                    id: 10578,
                },
                {
                    id: 14185,
                },
                {
                    id: 17593,
                },
                {
                    id: 9782,
                },
                {
                    id: 8962,
                },
                {
                    id: 9843,
                },
                {
                    id: 10463,
                },
                {
                    id: 8556,
                },
                {
                    id: 9783,
                },
                {
                    id: 7847,
                },
                {
                    id: 16599,
                },
                {
                    id: 12691,
                },
                {
                    id: 10283,
                },
                {
                    id: 8492,
                },
                {
                    id: 10769,
                },
                {
                    id: 8885,
                },
                {
                    id: 5475,
                },
                {
                    id: 11772,
                },
                {
                    id: 10086,
                },
                {
                    id: 14324,
                },
                {
                    id: 12647,
                },
                {
                    id: 10962,
                },
                {
                    id: 9380,
                },
                {
                    id: 9275,
                },
                {
                    id: 12888,
                },
                {
                    id: 13627,
                },
                {
                    id: 16940,
                },
                {
                    id: 12666,
                },
                {
                    id: 13150,
                },
                {
                    id: 13331,
                },
                {
                    id: 13209,
                },
                {
                    id: 14580,
                },
                {
                    id: 8502,
                },
            ],
        },
        {
            id: 4858,
            classification: 'Doença',
            culture: 'Milho',
            scientificName: 'Cercospora zeae-maydis',
            commonNames: 'Cercosporiose',
            author: '',
            description: '',
            symptoms: '',
            bioecology: '',
            control: '',
            fungicides: [
                {
                    id: 15006,
                },
                {
                    id: 11129,
                },
                {
                    id: 17411,
                },
                {
                    id: 12894,
                },
                {
                    id: 11450,
                },
                {
                    id: 12723,
                },
                {
                    id: 13247,
                },
                {
                    id: 12657,
                },
                {
                    id: 8360,
                },
                {
                    id: 11347,
                },
                {
                    id: 11200,
                },
                {
                    id: 10065,
                },
                {
                    id: 19467,
                },
                {
                    id: 10353,
                },
                {
                    id: 13538,
                },
                {
                    id: 11887,
                },
                {
                    id: 16553,
                },
                {
                    id: 12120,
                },
                {
                    id: 14026,
                },
                {
                    id: 12682,
                },
                {
                    id: 14607,
                },
                {
                    id: 18113,
                },
                {
                    id: 14373,
                },
                {
                    id: 10983,
                },
                {
                    id: 5351,
                },
                {
                    id: 11138,
                },
                {
                    id: 11156,
                },
                {
                    id: 14916,
                },
                {
                    id: 14469,
                },
                {
                    id: 11278,
                },
                {
                    id: 13156,
                },
                {
                    id: 16377,
                },
                {
                    id: 9347,
                },
                {
                    id: 14246,
                },
                {
                    id: 11381,
                },
                {
                    id: 10173,
                },
                {
                    id: 7923,
                },
                {
                    id: 9099,
                },
                {
                    id: 15203,
                },
                {
                    id: 11038,
                },
                {
                    id: 11310,
                },
                {
                    id: 12154,
                },
                {
                    id: 5078,
                },
                {
                    id: 9960,
                },
                {
                    id: 15639,
                },
                {
                    id: 12212,
                },
                {
                    id: 12722,
                },
                {
                    id: 9887,
                },
                {
                    id: 10311,
                },
                {
                    id: 10346,
                },
                {
                    id: 11088,
                },
                {
                    id: 11155,
                },
                {
                    id: 14422,
                },
                {
                    id: 11204,
                },
                {
                    id: 15507,
                },
                {
                    id: 18128,
                },
                {
                    id: 11438,
                },
                {
                    id: 15045,
                },
                {
                    id: 14205,
                },
                {
                    id: 14576,
                },
                {
                    id: 14578,
                },
                {
                    id: 14597,
                },
                {
                    id: 18715,
                },
                {
                    id: 10333,
                },
                {
                    id: 7975,
                },
                {
                    id: 15705,
                },
                {
                    id: 16371,
                },
                {
                    id: 14999,
                },
                {
                    id: 5457,
                },
                {
                    id: 14185,
                },
                {
                    id: 14924,
                },
                {
                    id: 17593,
                },
                {
                    id: 13928,
                },
                {
                    id: 14021,
                },
                {
                    id: 8962,
                },
                {
                    id: 7840,
                },
                {
                    id: 10964,
                },
                {
                    id: 5134,
                },
                {
                    id: 16599,
                },
                {
                    id: 12691,
                },
                {
                    id: 15161,
                },
                {
                    id: 10753,
                },
                {
                    id: 10769,
                },
                {
                    id: 8885,
                },
                {
                    id: 14423,
                },
                {
                    id: 14424,
                },
                {
                    id: 14238,
                },
                {
                    id: 5475,
                },
                {
                    id: 15299,
                },
                {
                    id: 11772,
                },
                {
                    id: 13268,
                },
                {
                    id: 12888,
                },
                {
                    id: 10193,
                },
                {
                    id: 13627,
                },
                {
                    id: 16940,
                },
                {
                    id: 12666,
                },
                {
                    id: 16546,
                },
                {
                    id: 14580,
                },
                {
                    id: 8502,
                },
                {
                    id: 14204,
                },
                {
                    id: 13180,
                },
            ],
        },
        {
            id: 5063,
            classification: 'Doença',
            culture: 'Milho',
            scientificName: 'Didymella bryoniae',
            commonNames: 'Crestamento-gomoso-do-caule, Podridão-amarga',
            author: '',
            description: '',
            symptoms: '',
            bioecology: '',
            control: '',
            fungicides: [],
        },
        {
            id: 5065,
            classification: 'Doença',
            culture: 'Milho',
            scientificName: 'Helminthosporium maydis',
            commonNames: 'Helmintosporiose',
            author: '',
            description: '',
            symptoms: '',
            bioecology: '',
            control: '',
            fungicides: [],
        },
        {
            id: 5278,
            classification: 'Doença',
            culture: 'Milho',
            scientificName: 'Penicillium spp.',
            commonNames: 'Fungo-de-armazenamento',
            author: '',
            description: '',
            symptoms: '',
            bioecology: '',
            control: '',
            fungicides: [],
        },
        {
            id: 5284,
            classification: 'Doença',
            culture: 'Milho',
            scientificName: 'Phoma sorghina',
            commonNames: 'Complexo mancha branca',
            author: '',
            description: '',
            symptoms: '',
            bioecology: '',
            control: '',
            fungicides: [
                {
                    id: 5426,
                },
            ],
        },
        {
            id: 5285,
            classification: 'Doença',
            culture: 'Milho',
            scientificName: 'Phyllosticta maydis',
            commonNames: 'Complexo mancha branca',
            author: '',
            description: '',
            symptoms: '',
            bioecology: '',
            control: '',
            fungicides: [
                {
                    id: 5426,
                },
            ],
        },
        {
            id: 5286,
            classification: 'Doença',
            culture: 'Milho',
            scientificName: 'Pantoea ananatis',
            commonNames: 'Complexo mancha branca',
            author: '',
            description: '',
            symptoms: '',
            bioecology: '',
            control: '',
            fungicides: [
                {
                    id: 5426,
                },
                {
                    id: 18452,
                },
                {
                    id: 11498,
                },
            ],
        },
        {
            id: 5352,
            classification: 'Doença',
            culture: 'Milho',
            scientificName: 'Fusarium verticilioides',
            commonNames: 'Podridão-de-raízes',
            author: '',
            description: '',
            symptoms: '',
            bioecology: '',
            control: '',
            fungicides: [
                {
                    id: 17458,
                },
                {
                    id: 15006,
                },
                {
                    id: 11915,
                },
                {
                    id: 11916,
                },
                {
                    id: 14576,
                },
                {
                    id: 14578,
                },
                {
                    id: 14597,
                },
                {
                    id: 11899,
                },
                {
                    id: 9211,
                },
                {
                    id: 11527,
                },
            ],
        },
        {
            id: 5663,
            classification: 'Doença',
            culture: 'Milho',
            scientificName: 'Pectobacterium chrysanthemi',
            commonNames: 'Podridão-do-colmo',
            author: '',
            description: '',
            symptoms: '',
            bioecology: '',
            control: '',
            fungicides: [
                {
                    id: 5152,
                },
            ],
        },
        {
            id: 5701,
            classification: 'Doença',
            culture: 'Milho',
            scientificName: 'Fusarium graminearum',
            commonNames:
                'Podridão-rosada-da-pontada-da-espiga, Podridão-de-giberela',
            author: '',
            description: '',
            symptoms: '',
            bioecology: '',
            control: '',
            fungicides: [],
        },
        {
            id: 5756,
            classification: 'Doença',
            culture: 'Milho',
            scientificName: 'Alternaria alternata',
            commonNames: 'Mofo preto',
            author: '',
            description: '',
            symptoms: '',
            bioecology: '',
            control: '',
            fungicides: [],
        },
        {
            id: 5757,
            classification: 'Doença',
            culture: 'Milho',
            scientificName: 'Phoma spp.',
            commonNames: 'Tombamento',
            author: '',
            description: '',
            symptoms: '',
            bioecology: '',
            control: '',
            fungicides: [],
        },
        {
            id: 5920,
            classification: 'Doença',
            culture: 'Milho',
            scientificName: 'Drechslera tritici-repentis',
            commonNames: 'Mancha-amarela',
            author: '',
            description: '',
            symptoms: '',
            bioecology: '',
            control: '',
            fungicides: [],
        },
        {
            id: 5921,
            classification: 'Doença',
            culture: 'Milho',
            scientificName: 'Blumeria graminis f.sp. tritici',
            commonNames: 'Oídio',
            author: '',
            description: '',
            symptoms: '',
            bioecology: '',
            control: '',
            fungicides: [],
        },
        {
            id: 6787,
            classification: 'Doença',
            culture: 'Milho',
            scientificName: 'Meloidogyne incognita',
            commonNames: 'Nematoide das galhas.',
            author: '',
            description: '',
            symptoms: '',
            bioecology: '',
            control: '',
            fungicides: [
                {
                    id: 11744,
                },
                {
                    id: 8459,
                },
                {
                    id: 14923,
                },
                {
                    id: 14554,
                },
            ],
        },
        {
            id: 7618,
            classification: 'Doença',
            culture: 'Milho',
            scientificName: 'Stenocapella macrospora',
            commonNames: 'Podridão do milho',
            author: '',
            description: '',
            symptoms: '',
            bioecology: '',
            control: '',
            fungicides: [
                {
                    id: 15045,
                },
                {
                    id: 16599,
                },
            ],
        },
    ];

    const inProgress = await prisma.status.upsert({
        create: {
            id: 1,
            name: 'Em andamento',
        },
        update: {},
        where: { id: 1 },
    });
    const canceled = await prisma.status.upsert({
        create: {
            id: 2,
            name: 'Cancelado',
        },
        update: {},
        where: { id: 2 },
    });
    const finished = await prisma.status.upsert({
        create: {
            id: 3,
            name: 'Finalizado',
        },
        update: {},
        where: { id: 3 },
    });

    fungicides.forEach(async (fungicide) => {
        const insertFungicide = await prisma.defaultFungicide.upsert({
            create: {
                ...fungicide,
            },
            update: {},
            where: { id: fungicide.id },
        });

        console.log(insertFungicide);
    });

    // diseases.forEach(async (disease) => {
    //     const insertDisease = await prisma.defaultDisease.upsert({
    //         create: {
    //             ...disease,
    //             fungicides:
    //                 fungicides.length > 0
    //                     ? {
    //                           connect: disease.fungicides.map((fungicide) => ({
    //                               id: fungicide.id,
    //                           })),
    //                       }
    //                     : undefined,
    //         },
    //         update: {},
    //         where: { id: disease.id },
    //     });

    //     console.log(insertDisease);
    // });

    console.log({ inProgress, canceled, finished, fungicides });
}
main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
