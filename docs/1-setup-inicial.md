# Estruturação e Especificação: Landing Page e Documentação de Instalação

## 1. Visão Geral e Propósito
Este projeto é uma solução de CRM em código aberto (Open Source). O objetivo desta iniciativa é o desenvolvimento de uma Landing Page (LP) de alta conversão, acompanhada de uma documentação técnica simplificada. A página deve ter uma identidade visual elegante, comercial e alinhada à paleta de cores do sistema, fugindo do estereótipo de "sites de projetos open-source básicos".

A principal missão da LP é atrair usuários provando o valor da solução frente aos concorrentes do mercado (pagos por usuário ou open-source pesados).

## 2. Proposta de Valor e Argumentos de Venda (Pitch)
A LP deve destacar de forma clara e atrativa os seguintes pilares comerciais e técnicos da nossa aplicação:

- **Diferencial vs. Soluções Pagas:** Elimine custos excessivos. Nossa solução é totalmente livre de cobrança por assento/usuário.
- **Diferencial vs. Soluções Open-Source:** Ao contrário de outras ferramentas que demandam infraestrutura robusta, pesada e de difícil manutenção técnica, entregamos um ecossistema incrivelmente leve.
- **Infraestrutura Enxuta e Barata:** O sistema foi projetado para consumir o mínimo possível, com banco de dados de baixíssimo custo e aplicação baseada em consumo sob demanda (Serverless).

## 3. Diretrizes de Design e UX/UI da Landing Page
Para atrair clientes premium e transmitir confiabilidade:
- **Estética Comercial e Elegante:** Utilizar a paleta de cores atual do sistema em uma linguagem de design moderna, com bom uso de espaços em branco (negative space), tipografia clara e componentes atrativos.
- **Apresentação de Funcionalidades:** É necessário realizar um mapeamento ("varredura geral") de todas as funcionalidades principais do CRM e transformá-las em seções de destaque na LP (ex: mockups de telas, ícones representativos, e textos de vendas persuasivos).

## 4. Arquitetura Frontend e Stack Tecnológica
- **Framework Astro (SSG):** A Landing Page deve ser obrigatoriamente desenvolvida utilizando a biblioteca/framework **Astro** em sua abordagem estática (Static Site Generation - SSG). Essa decisão arquitetural garante performance extrema, SEO otimizado, velocidade de carregamento instantânea na web e facilidade de hospedagem barata (ou gratuita) de arquivos estáticos.
- **Ecossistema Starlight (Astro):** Para a estruturação e exibição do portal de documentação detalhado abaixo (Docs Page), a stack técnica eleita é o **Starlight** (ferramenta oficial do ecossistema Astro). Essa escolha garante uma sinergia técnica imbatível com a Landing Page, estrutura de navegação robusta, busca de texto completa nativa e recursos de internacionalização (i18n), mantendo a máxima eficiência de entrega.

## 5. Estratégia de Hospedagem: O Poder do Google Cloud
A LP deve conter uma **seção exclusiva** dedicada a endossar nossa compatibilidade e sinergia com o Google Cloud Platform (GCP).
- **Abordagem Serverless (Cloud Run):** Destacar que a aplicação pode rodar sob demanda. O cliente só paga pelo tempo em que o sistema está sendo ativamente utilizado (requisições). Isso reflete em custos ínfimos.
- **Banco de Dados (MongoDB):** Enfatizar o uso otimizado do MongoDB, proporcionando agilidade, escalabilidade simples e operação com custos excepcionalmente baixos.

## 6. Estrutura da Documentação de Instalação (Docs Page)
A hospedagem do painel de documentação deve ser simples (anexa ou referenciada na LP). O foco técnico é guiar o usuário na configuração do ambiente de forma clara e livre de atritos.

A documentação deverá ser dividida nos seguintes métodos, com **passo a passo detalhado**:

### 6.1 Método 1: Máquina Virtual (VM) / VPS
Focado em usuários que preferem manter o controle total da infraestrutura em qualquer provedor de cloud, rodando em contêineres e um ambiente dedicado.
- **Pré-requisitos de Infra:** Listagem dos requisitos mínimos de hardware e distribuição Linux sugerida.
- **Instalador Automatizado:** Passo a passo utilizando o nosso script instalador oficial.
- **Orquestração via Docker Compose:** Instruções claras para o levantamento manual dos contêineres.
- **Comandos de Manutenção:** Instruções pós-instalação (logs, iniciar, parar serviços).

### 6.2 Método 2: Google Cloud Run + MongoDB Atlas (Recomendado)
Focado em usuários que buscam manutenção zero (NoOps) e custos estritamente atrelados ao uso da aplicação.
- **Passo 1: Provisionando o MongoDB Atlas:** Criação de conta, configuração de IP Whitelist / Network Access, criação do cluster e obtenção da string de conexão (URI).
- **Passo 2: Preparação de Imagem:** Referência para puxar nossa imagem Docker pública oficial.
- **Passo 3: Deploy no Google Cloud Run:**
  - Orientação no Console do GCP.
  - Inserção das Variáveis de Ambiente (ex: URL do Mongo, Secret do JWT, etc).
  - Definição do hardware virtual alocado.
- **Passo 4: Validação:** Acessando a URL HTTPS nativa gerada e atestando os logs da primeira execução.