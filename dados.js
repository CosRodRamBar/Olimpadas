let dados = [
    // Ginastica Artistica
    {
        nome: 'Rebeca Andrade',
        esporte: 'Ginástica Artística',
        descricao: 'Principal nome da ginástica artística brasileira, campeã olímpica em Tóquio e referência mundial no esporte.',
        link: 'https://pt.wikipedia.org/wiki/Rebeca_Andrade'
    },
    {
        nome: 'Flávia Saraiva',
        esporte: 'Ginástica Artística',
        descricao: 'Ginasta artística brasileira conhecida por sua agilidade e performances brilhantes em solo e trave.',
        link: 'https://pt.wikipedia.org/wiki/Flávia_Saraiva'
    },
    {
        nome: 'Lorrane Oliveira',
        esporte: 'Ginástica Artística',
        descricao: 'Ginasta brasileira que representa o Brasil em competições internacionais, com forte atuação em barras assimétricas.',
        link: 'https://pt.wikipedia.org/wiki/Lorrane_Oliveira'
    },
    {
        nome: 'Jade Barbosa',
        esporte: 'Ginástica Artística',
        descricao: 'Veterana da equipe brasileira de ginástica artística, com participações em diversas competições olímpicas.',
        link: 'https://pt.wikipedia.org/wiki/Jade_Barbosa'
    },

    // Skate
    {
        nome: 'Rayssa Leal',
        esporte: 'Skate Street',
        descricao: 'Conhecida como "Fadinha", Rayssa é uma das maiores promessas do skate brasileiro, medalhista olímpica e destaque na modalidade street.',
        link: 'https://pt.wikipedia.org/wiki/Rayssa_Leal'
    },
    {
        nome: 'Pâmela Rosa',
        esporte: 'Skate Street',
        descricao: 'Skatista de destaque no cenário mundial, Pâmela é uma das principais concorrentes pelo Brasil na modalidade street.',
        link: 'https://pt.wikipedia.org/wiki/Pâmela_Rosa'
    },
    {
        nome: 'Letícia Bufoni',
        esporte: 'Skate Street',
        descricao: 'Uma das pioneiras do skate feminino, Letícia é reconhecida mundialmente e segue como referência no skate street.',
        link: 'https://pt.wikipedia.org/wiki/Letícia_Bufoni'
    },
    {
        nome: 'Kelvin Hoefler',
        esporte: 'Skate Street',
        descricao: 'Medalhista de prata nos Jogos de Tóquio, Kelvin é um dos principais nomes do skate street masculino no Brasil.',
        link: 'https://pt.wikipedia.org/wiki/Kelvin_Hoefler'
    },
    {
        nome: 'Pedro Barros',
        esporte: 'Skate Park',
        descricao: 'Especialista no skate park, Pedro Barros é um dos maiores skatistas da modalidade e representa o Brasil em Paris.',
        link: 'https://pt.wikipedia.org/wiki/Pedro_Barros'
    },
    {
        nome: 'Luiz Francisco',
        esporte: 'Skate Park',
        descricao: 'Skatista da modalidade park, Luiz Francisco é conhecido por suas manobras radicais e estilo fluido nas competições.',
        link: 'https://pt.wikipedia.org/wiki/Luiz_Francisco'
    },


    // Surfe
    {
        nome: 'Ítalo Ferreira',
        esporte: 'Surfe',
        descricao: 'Campeão olímpico em Tóquio 2020, Ítalo é uma das maiores esperanças do Brasil no surfe masculino, com um estilo agressivo e inovador nas ondas.',
        link: 'https://pt.wikipedia.org/wiki/Ítalo_Ferreira'
    },
    {
        nome: 'Gabriel Medina',
        esporte: 'Surfe',
        descricao: 'Tricampeão mundial de surfe, Medina é uma das principais referências do surfe competitivo e segue como um dos favoritos para medalha em Paris.',
        link: 'https://pt.wikipedia.org/wiki/Gabriel_Medina'
    },
    {
        nome: 'Tatiana Weston-Webb',
        descricao: 'Uma das maiores surfistas do Brasil, Tatiana representa o país na categoria feminina, conhecida por suas performances consistentes e determinação.',
        link: 'https://pt.wikipedia.org/wiki/Tatiana_Weston-Webb',
        esporte: 'Surfe'
    },
    {
        nome: 'Filipe Toledo',
        esporte: 'Surfe',
        descricao: 'Campeão mundial de surfe, Toledo é especialista em manobras aéreas e velocidade, sendo um dos favoritos no surfe masculino em Paris.',
        link: 'https://pt.wikipedia.org/wiki/Filipe_Toledo'
    },


    // Atletismo
    {
        nome: 'Alison dos Santos',
        esporte: 'Atletismo - 400m com barreiras',
        descricao: 'Especialista nos 400m com barreiras, Alison "Piu" é medalhista mundial e uma das grandes promessas do Brasil no atletismo.',
        link: 'https://pt.wikipedia.org/wiki/Alison_dos_Santos'
    },
    {
        nome: 'Rosângela Santos',
        esporte: 'Atletismo - 100m e Revezamento 4x100m',
        descricao: 'Velocista brasileira, Rosângela é conhecida por sua atuação nos 100m e no revezamento 4x100m.',
        link: 'https://pt.wikipedia.org/wiki/Rosângela_Santos'
    },
    {
        nome: 'Thiago Braz',
        esporte: 'Atletismo - Salto com Vara',
        descricao: 'Campeão olímpico no salto com vara em 2016, Thiago Braz continua sendo uma das maiores esperanças de medalha no atletismo brasileiro.',
        link: 'https://pt.wikipedia.org/wiki/Thiago_Braz'
    },
    {
        nome: 'Erica Sena',
        esporte: 'Atletismo - Marcha Atlética',
        descricao: 'Competidora brasileira da marcha atlética, Erica é uma das grandes representantes do Brasil em provas de resistência.',
        link: 'https://pt.wikipedia.org/wiki/Érica_Sena'
    },
    {
        nome: 'Vitória Rosa',
        esporte: 'Atletismo - 200m e Revezamento 4x100m',
        descricao: 'Especialista em provas de velocidade, Vitória é uma das principais atletas brasileiras nos 200m e revezamento 4x100m.',
        link: 'https://pt.wikipedia.org/wiki/Vitória_Rosa'
    },
    {
        nome: 'Darlan Romani',
        esporte: 'Atletismo - Arremesso de Peso',
        descricao: 'Competidor no arremesso de peso, Darlan é um dos grandes nomes do Brasil em eventos de campo.',
        link: 'https://pt.wikipedia.org/wiki/Darlan_Romani'
    },
    {
        nome: 'Gabriel Constantino',
        esporte: 'Atletismo - 110m com barreiras',
        descricao: 'Especialista nos 110m com barreiras, Gabriel Constantino é uma das esperanças do Brasil nas provas de velocidade com obstáculos.',
        link: 'https://pt.wikipedia.org/wiki/Gabriel_Constantino'
    },
    {
        nome: 'Núbia Soares',
        esporte: 'Atletismo - Salto Triplo',
        descricao: 'Competidora no salto triplo, Núbia é uma das principais representantes brasileiras em provas de campo.',
        link: 'https://pt.wikipedia.org/wiki/Núbia_Soares'
    }

];
