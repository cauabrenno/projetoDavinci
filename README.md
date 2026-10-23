# VINCI - Alta Performance & Mobilidade Elétrica ⚡

Projeto acadêmico de clonagem e aprimoramento de interface concebida no **Figma Turbo**, desenvolvido com **Vue.js 3**, **Tailwind CSS**, **HTML5**, **CSS3** e **JavaScript (ES Modules)** utilizando o **Vite**.

Baseado no projeto de referência: [Klauspx - Projeto Vinci](https://klauspx.github.io/projeto-Vinci/#).

---

## 🚀 Diferenciais e Melhorias Implementadas ("Até Melhor")

1. **Tour Técnico Interativo (Hotspots A - H)**:
   - No modelo `VINCI MODEL V2`, os marcadores de A até H agora são interativos com efeito *pulse*, *tooltips* flutuantes com descrição detalhada de engenharia e sincronização bidirecional entre o diagrama e a lista lateral.
2. **Modal Completo de Agendamento de Test Drive**:
   - Seleção de modelo (V1, V2, V3), escolha de concessionária nas principais capitais, data e período preferencial, além de tela de confirmação com código de protocolo exclusivo.
3. **Configurador & Reserva de Veículo**:
   - Ao clicar em "Comprar" ou "Reservar", abre um modal interativo com personalizador de cores (Vermelho Vinci, Preto Ônix, Branco Pérola, Cinza Titânio), conjunto de rodas e estimativa de valor em tempo real.
4. **Mega Menu Elegante & Responsivo**:
   - Grade com os modelos da marca, links diretos de navegação e drawer menu otimizado para dispositivos móveis e tablets (com botão hamburger).
5. **Design Fiel & Tipografia**:
   - Tipografia oficial **Genos** (Google Fonts), paleta de cores fiel (*#e50000*, preto profundo e cinzas técnicos), transições suaves e microinterações modernas.

---

## 🛠️ Tecnologias Utilizadas

- **Vue.js 3** (Composition API com `<script setup>`)
- **Vite 6** (Build tool e Hot Module Replacement ultra-rápido)
- **Tailwind CSS 3** (Estilização utilitária e responsiva)
- **HTML5 & CSS3 Avançado** (CSS Variables, Flexbox, Grid, Animações e Backdrop Filter)
- **JavaScript Moderno (ES6+)**

---

## 📂 Estrutura do Projeto

```
projetoDavinci/
├── public/
│   ├── favicon.svg
│   ├── model-v1.jpg
│   └── model-v2.jpg
├── src/
│   ├── assets/
│   │   └── hero.png
│   ├── components/
│   │   ├── ConfiguratorModal.vue  # Modal de customização e compra
│   │   ├── Home.vue               # Tela inicial (Hero, Comparativo, Banners, Ações)
│   │   ├── ModelV2.vue            # Página dedicada ao Model V2 com Hotspots interativos
│   │   ├── SiteFooter.vue         # Rodapé institucional
│   │   ├── SiteHeader.vue         # Topbar com Mega Menu e menu mobile
│   │   └── TestDriveModal.vue     # Modal interativo de agendamento de Test Drive
│   ├── App.vue                    # Componente raiz com roteamento reativo e transições
│   ├── main.js                    # Ponto de entrada do Vue
│   └── style.css                  # Estilos globais e diretivas do Tailwind
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

---

## 💻 Como Executar o Projeto Localmente

### 1. Clonar ou Acessar a Pasta do Projeto
```bash
cd /home/cauabrenno/projetos/projetoDavinci
```

### 2. Instalar as Dependências
```bash
npm install
```

### 3. Rodar o Servidor de Desenvolvimento
```bash
npm run dev
```
O servidor estará acessível em: `http://localhost:3000` ou `http://localhost:5173`.

### 4. Gerar a Build de Produção
```bash
npm run build
```
Os arquivos otimizados para deploy serão gerados na pasta `dist/`.
