/*
  Dados editoriais locais usados pela capa e pela página de leitura.
  Cada história tem um id único, categoria, imagem e seções de texto.
  Os roteiros são ilustrativos: não dependem de API, login ou banco de dados.
  Para publicar outra história, acrescente um objeto seguindo este modelo.
 */
window.cityguideArticles = [
  {
    id: 'praga',
    city: 'Praga',
    category: 'Roteiros',
    minutes: 5,
    title: 'Praga em dois dias: entre pontes, torres e descobertas',
    description:
      'Um passeio sem pressa pelos cenários e pequenas ruas da capital tcheca.',
    image: 'assets/images/praga.jpg',
    alt: 'Telhados e torres da cidade de Praga',
    sections: [
      {
        title: 'Primeiro dia: deixe a cidade se apresentar',
        text: 'Comece pela Cidade Velha e caminhe sem transformar cada esquina em uma obrigação. Observe as fachadas, atravesse as pequenas praças e faça uma pausa antes de seguir em direção ao rio. O roteiro ganha outro ritmo quando você reserva tempo para simplesmente olhar.',
      },
      {
        title: 'Uma caminhada até o outro lado do rio',
        text: 'A Ponte Carlos pode ser o ponto de partida para explorar Malá Strana. Em vez de voltar pelo mesmo caminho, escolha ruas próximas ao rio e descubra novas perspectivas. Sapatos confortáveis fazem diferença nas calçadas de pedra e nas subidas.',
      },
      {
        title: 'Segundo dia: encontre seu próprio ponto de vista',
        text: 'Dedique parte do dia à região do castelo e deixe a tarde aberta para voltar a um lugar que chamou sua atenção. Se preferir entrar em atrações, consulte os canais oficiais para conferir os horários. Termine o passeio com uma pausa e a vista dos telhados.',
      },
    ],
  },
  {
    id: 'budapeste',
    city: 'Budapeste',
    category: 'Cidades',
    minutes: 4,
    title: 'Budapeste: dois lados, muitas maneiras de se encantar',
    description:
      'Uma caminhada à beira do Danúbio, com tempo para conhecer a cidade além da primeira impressão.',
    image: 'assets/images/budapeste.jpg',
    alt: 'Arquitetura de Budapeste junto ao rio Danúbio',
    sections: [
      {
        title: 'Comece pelo rio',
        text: 'O Danúbio ajuda a desenhar o passeio. Caminhe por suas margens e observe como a paisagem muda a cada trecho. Separe um período do dia para explorar uma região a pé, em vez de atravessar a cidade várias vezes para cumprir uma lista.',
      },
      {
        title: 'Reserve tempo para os bairros',
        text: 'Alterne os grandes cenários com ruas menores, cafés e praças. Um roteiro flexível deixa espaço para uma livraria, uma conversa ou uma parada que não estava planejada. Confira antecipadamente as opções de transporte para o seu trajeto.',
      },
    ],
  },
  {
    id: 'roma',
    city: 'Roma',
    category: 'Gastronomia',
    minutes: 4,
    title: 'Uma mesa em Roma e uma tarde inteira pela frente',
    description:
      'Entre uma caminhada e outra, descubra o prazer de fazer uma boa pausa.',
    image: 'assets/images/roma.jpg',
    alt: 'Vista urbana de Roma e sua arquitetura histórica',
    sections: [
      {
        title: 'O almoço também faz parte do roteiro',
        text: 'Escolha uma região para explorar e reserve tempo para comer com calma. Ler o cardápio antes de sentar ajuda a entender os pratos e os valores. Se houver restrições alimentares, confirme os ingredientes diretamente com o estabelecimento.',
      },
      {
        title: 'Deixe a sobremesa para o caminho',
        text: 'Depois da refeição, continue o passeio pelas ruas próximas. Uma praça pode ser o lugar para sentar, observar a cidade e decidir a próxima parada. A proposta é simples: combinar o interesse pela comida com a vontade de conhecer o bairro.',
      },
    ],
  },
  {
    id: 'paris',
    city: 'Paris',
    category: 'Cultura',
    minutes: 5,
    title: 'Paris a pé: um caderno de pequenas descobertas',
    description:
      'Fachadas, jardins e pausas para observar uma cidade que convida a caminhar.',
    image: 'assets/images/paris.jpg',
    alt: 'Vista de Paris com a Torre Eiffel ao fundo',
    sections: [
      {
        title: 'Escolha um bairro, não a cidade inteira',
        text: 'Concentrar o passeio em uma região permite prestar atenção aos detalhes. Combine um lugar que você deseja conhecer com tempo livre para caminhar nas proximidades. Evite preencher todo o dia com deslocamentos.',
      },
      {
        title: 'Um museu e espaço para respirar',
        text: 'Se quiser visitar um museu, consulte sua programação e as regras de entrada no site oficial. Depois, reserve uma pausa ao ar livre. Registre no caderno o que mais chamou sua atenção: a viagem também continua nessas lembranças.',
      },
    ],
  },
  {
    id: 'lisboa',
    city: 'Lisboa',
    category: 'Roteiros',
    minutes: 4,
    title: 'Lisboa, devagar: um roteiro entre ladeiras e miradouros',
    description:
      'Uma cidade para descobrir aos poucos, entre azulejos e vistas do rio.',
    image: 'assets/images/lisboa.jpg',
    alt: 'Paisagem urbana de Lisboa com telhados e fachadas coloridas',
    sections: [
      {
        title: 'As subidas pedem pequenas pausas',
        text: 'Organize a caminhada por regiões e conte com as ladeiras ao planejar o dia. Uma parada para descansar pode se tornar um dos momentos favoritos do passeio. Leve água e escolha um ritmo que funcione para você.',
      },
      {
        title: 'Olhe para os detalhes',
        text: 'Entre uma vista e outra, observe os azulejos e as diferentes fachadas. Ao fotografar, respeite as entradas das casas e a rotina de quem mora no bairro. O passeio fica melhor quando a curiosidade caminha junto com o cuidado.',
      },
    ],
  },
  {
    id: 'amsterda',
    city: 'Amsterdã',
    category: 'Cidades',
    minutes: 3,
    title: 'Amsterdã para além da próxima ponte',
    description: 'Canais, fachadas e um convite para sair do roteiro mais apressado.',
    image: 'assets/images/amsterda.jpg',
    alt: 'Casas tradicionais e canal em Amsterdã',
    sections: [
      {
        title: 'Siga o desenho dos canais',
        text: 'Escolha um trecho para caminhar e observe as pontes e fachadas pelo caminho. Reserve espaço para mudar de direção quando uma rua despertar sua curiosidade. Não é preciso conhecer tudo para aproveitar bem um lugar.',
      },
      {
        title: 'Compartilhe o espaço da cidade',
        text: 'Preste atenção às ciclovias durante as caminhadas e procure um local adequado antes de parar para fotografar. Intercale os passeios com pausas e consulte os canais oficiais das atrações que desejar visitar.',
      },
    ],
  },
];
