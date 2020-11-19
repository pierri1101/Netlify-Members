const faq = [
    {
        question: "Por quanto tempo tenho acesso ao Radar Tècnico?",
        answer: `A assinatura do Radar Técnico é válida por 1 ano a contar da data de confirmação da compra na Hotmart.
        Por se tratar de uma assinatura ela tem renovação automática que acontecerá 1 ano após da data de assinatura.
        <br>
        Mas fique tranquilo que a renovação não acontecerá de surpresa, com cerca de 15 dias antes da renovação você
        receberá um e-mail lembrando da renovação.`,
    },
    {
        question: "Sou iniciante na Bolsa de Valores. Vou conseguir seguir as recomendações?",
        answer: `Sim, as recomendações são passadas com todos pontos necessários para iniciar e terminar a operação,
        seguindo as orientações das aulas você conseguirá programar todas as ordens dos pontos passados nos alertas
        <br>
        do Radar Técnico no Homebroker ou em sua plataforma operacional.`
    },
    {
        question: "Qual corretora utilizo para realizar operações de Swing Trade?",
        answer: `Para realizar operações de Swing Trade você pode fazer pode fazer pela corretora de sua preferência.
        Mas caso queira uma sugestão, a minha é o BTG Pactual com a assessoria da <a href="https://dominvestimentos.com.br/" target="_blank">DOM Investimentos</a>`
    },
    {
      question: "Como recebo os calls e análises do Radar Técnico?",
      answer: `<strong>Todas recomendações e informações são compartilhadas no Canal Radar Técnico no Telegram.</strong><br/><br>`
    },
    {
      question: "Como acesso o Telegram? [INCOMPLETO]",
      answer: `Para acessar o canal do Radar Técnico no Telegram, basta <a href="http://t.me/Radar_DZ_bot" target="_blank">clicar neste link.</a>
      Para mais detalhes assista esta aula (<href>Aula 2 Primeiros Passos)`
    },
    {
      question: "Como acesso o Painel de Controle? [INCOMPLETO]",
      answer: `Para acessar o Painel de Controle do Radar Técnico, basta <a href="https://docs.google.com/spreadsheets/d/1RNDUqchmgw6V5dI3ZQfSoGmanUNz5RGoegHqF0N1R04/edit#gid=0" target="_blank">clicar neste link.</a>
      Para mais detalhes assista esta aula (<href>Aula 2 Primeiros Passos)`
    },
    {
      question: "Preciso de alguma plataforma específica?",
      answer: `Para realizar operações de Swing Trade não é necessário nenhuma plataforma de trade específica,
       você pode programar suas ordens e executar suas operações diretamente no Homebroker de sua corretora.`
    },
    {
      question: "Como programo as ordens?",
      answer: `Nesta aula tem todas as orientações na prática de como programar suas ordens (Aula 5 Primeiros Passos)`
    },
    {
      question: "Como configuro meu Stop?",
      answer: `Para configurar seu stop, você irá inserir uma ordem de seu stop, conforme indicado nesta aula (Aula 5 Primeiros Passos).`
    },
    {
      question: "Como ajusto meu Stop?",
      answer: `<strong>Para ajustar seu Stop, é possível fazer de duas maneiras: </strong>
      <br>
                  <ol>
                    <li>Editar a ordem de Stop Loss em seu Homebroker com os novos valores.</li>
                    <li>Cancelar seu Stop Loss e inserir uma nova ordem de Stop no novo valor.</li>
                 </ol>`
    },
    {
      question: "Não consigo inserir uma ordem, o que pode ter acontecido?",
      answer: `<strong>Os problemas mais comuns para não conseguir enviar ordem são:</strong>
      <br><br>
                  <ol>
                    <li>Instabilidade/ problema de conexão com a internet, para solucionar este problema, verifique se sua conexão está estável, se necessário reinicie seu modem/ roteador e persistindo o problema entre em contato com sua provedora de internet.</li>
                    <li>Não ter capital suficiente para operação na corretora, assista esta aula (Aula 2 Módulo 1) para entender qual o capital necessário para realizar operações de Swing Trade.</li>
                 </ol>
                 Caso mesmo assim continue com problemas em colocar suas ordens para Swing Trade é recomendado que entre em contato com sua corretora para que possa solucionar o problema.
                 `
    },
    {
      question: "Meus acessos foram bloqueados, o que fazer?",
      answer: `<strong>O acesso é bloqueado em duas situações, sendo:</strong>
      <br><br>
                  <ol>
                    <li>Cancelamento de sua assinatura</li>
                    <li>Atraso no pagamento da anuidade.</li>
                 </ol>
                 Caso seu acesso tenha sido bloqueado e queira regularizar sua situação, entre em contato com nosso time de relacionamento pelo email suporte@danilozanini.com .
                 `
    },
    {
      question: "Como atualizar as informações de pagamento do Radar Técnico?",
      answer: `Os dados de cobrança de sua mensalidade da assinatura pode ser atualizados diretamente em sua conta na Hotmart. <a href="http://bit.ly/AtualizarDadosPagamento" target="_blank"> Clique Aqui</a> para ver como atualizar a forma de pagamento.`
    },
    {
      question: "Troquei o número do meu celular (Telegram), perderei acesso ao canal do Radar Técnico?",
      answer: `Não. A validação do Radar acontece pelo email cadastrado, não pelo seu número de celular.
      Mas tem que se atentar, que somente um acesso ao canal do Telegram é permitido por e-mail.
      <br>
      Caso seja necessário acessar o canal do Radar Técnico no Telegram novamente, siga as orientações e acesso no em nossa Área de Membros,
      ou <a href="http://bit.ly/telegramradar" target="_blank"> Clique Aqui</a>
      <br><br>
      É importante manter seu telefone de contato atualizado em seu cadastro da Hotmart também.
      Para fazer isso siga as orientações <a href="http://bit.ly/AtualizarDadosPessoais" target="_blank"> Clicando Aqui</a>`
    },
    {
      question: "Quero cancelar a assinatura, o que devo saber antes de cancelar (prazos e reembolso)? Como realizar o cancelamento (Passo a passo na Hotmart)?",
      answer: `É importante antes de realizar o cancelamento de sua assinatura verificar se está dentro do prazo de garantia,
      se estiver poderá solicitar o cancelamento e o reembolso.<br> Se atente, pois são dois procedimentos diferentes.
      <br><br>
      O cancelamento de sua assinatura pode ser feito diretamente na Hotmart, <a href="http://bit.ly/CancelamentoAssinatura" target="_blank"> Clique Aqui </a> e veja como realizar cancelamento.
      <br><br>
      Caso sua assinatura esteja dentro do prazo de reembolso, você pode solicitar ele seguindo as orientações deste link: <a href="http://bit.ly/SolicitandoReembolso" target="_blank"> Solicitando o Reembolso</a>
      <br><br>
      Caso tenha dificuldade na realização do procedimento, entre em contato com o <a href="https://t.me/dz_atendimento_bot" target="_blank">nosso assistente virtual.</a>
      <br><br>
      <STRONG>P.S - </STRONG> Caso sua assinatura esteja fora do prazo de garantia, o cancelamento dela irá suspender seus acessos ao conteúdo da assinatura,
      <br>
      porém as cobranças das parcelas da anuidade continuarão acontecendo normalmente.
      `
    },
    {
      question: "Após cancelar o Radar Técnico, por quanto tempo terei acesso ao conteúdo?",
      answer: `Após realizar o cancelamento de sua assinatura, seu acesso à Área de Membros é suspenso imediatamente. A remoção do Canal do Telegram e o bloqueio do acesso a Painel de Controle será feito em até 48h.`
    },
]

export default faq
