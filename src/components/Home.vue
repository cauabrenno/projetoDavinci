<script setup>
const emit = defineEmits(['navigate', 'open-test-drive', 'open-configurator'])

function goToModelV2() {
  emit('navigate', 'modelV2')
}

function scrollToModels() {
  const el = document.getElementById('modelos-section')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <main class="w-full">
    <!-- Section 1: Hero -->
    <section class="hero">
      <div class="hero-bg">
        <img
          src="/images/hero-bg.jpg"
          alt="Vinci Charging"
          class="hero-img"
        >
        <div class="hero-overlay"></div>
      </div>
      
      <div class="container-vinci hero-content">
        <div class="hero-badge">
          <span class="w-2 h-2 rounded-full bg-vinci-red"></span>
          <span>NOVA GERAÇÃO TOTALMENTE ELÉTRICA</span>
        </div>
        <h1 class="hero-title">VINCI MODEL V3</h1>
        <p class="hero-desc">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br class="hidden sm:inline">
          Lorem Ipsum has been the industry's standard dummy text ever.
        </p>
        
        <div class="hero-buttons">
          <button class="btn btn-primary" @click="scrollToModels">
            MODELOS
          </button>
          <button class="btn btn-outline" @click="emit('open-test-drive', 'MODELO V3')">
            TEST DRIVE
          </button>
        </div>
      </div>
    </section>

    <!-- Section 2: Model Comparison -->
    <section id="modelos-section" class="model-comparison">
      <div class="container-vinci comparison-grid">
        <!-- V2 -->
        <div class="model-col group">
          <div class="model-header">
            <h2>VINCI<br>MODEL V2</h2>
            <div class="model-specs">
              <div class="spec-row">
                <span class="spec-label">Potência:</span>
                <span class="spec-val">300 cavalos</span>
              </div>
              <div class="spec-row">
                <span class="spec-label">Autonomia:</span>
                <span class="spec-val">500km por carga</span>
              </div>
              <div class="spec-row">
                <span class="spec-label">Peso:</span>
                <span class="spec-val">1.500 kg</span>
              </div>
              <div class="spec-row">
                <span class="spec-label">Tecnologia:</span>
                <span class="spec-val">GPS e Smartink</span>
              </div>
            </div>
          </div>
          <div class="model-img-wrapper" @click="goToModelV2" style="cursor: pointer;">
            <img
              src="/images/model-v2.jpg"
              alt="Vinci Model V2"
              class="transform transition-transform duration-500 group-hover:scale-105"
            >
          </div>
          <div class="model-footer">
            <span class="footer-desc">A SUV mais robusta da categoria</span>
            <a href="#" class="footer-link" @click.prevent="goToModelV2">
              <span>CONHEÇA</span>
              <span class="arrow-indicator">→</span>
            </a>
          </div>
        </div>
        
        <!-- V1 -->
        <div class="model-col group">
          <div class="model-header">
            <h2>VINCI<br>MODEL V1</h2>
            <div class="model-specs">
              <div class="spec-row">
                <span class="spec-label">Potência:</span>
                <span class="spec-val">300 cavalos</span>
              </div>
              <div class="spec-row">
                <span class="spec-label">Autonomia:</span>
                <span class="spec-val">500km por carga</span>
              </div>
              <div class="spec-row">
                <span class="spec-label">Peso:</span>
                <span class="spec-val">1.500 kg</span>
              </div>
              <div class="spec-row">
                <span class="spec-label">Tecnologia:</span>
                <span class="spec-val">GPS e Smartink</span>
              </div>
            </div>
          </div>
          <div class="model-img-wrapper" @click="emit('open-configurator', 'MODELO V1')" style="cursor: pointer;">
            <img
              src="/images/model-v3.jpg"
              alt="Vinci Model V1"
              class="transform transition-transform duration-500 group-hover:scale-105"
            >
          </div>
          <div class="model-footer">
            <span class="footer-desc">A SUV mais robusta da categoria</span>
            <a href="#" class="footer-link" @click.prevent="emit('open-configurator', 'MODELO V1')">
              <span>CONHEÇA</span>
              <span class="arrow-indicator">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 3: Banner 1 -->
    <section class="banner-section relative overflow-hidden group">
      <img
        src="/images/banner-road.jpg"
        alt="Vinci na estrada"
        class="banner-img transform transition-transform duration-1000 group-hover:scale-105"
      >
      <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-8 sm:p-16">
        <div class="container-vinci text-white w-full">
          <div class="text-xs uppercase tracking-widest text-vinci-red font-semibold mb-2">Performance & Autonomia</div>
          <div class="text-3xl sm:text-5xl font-light tracking-widest">NASCIDO PARA DOMINAR A ESTRADA</div>
        </div>
      </div>
    </section>

    <!-- Section 4: Action Links -->
    <section class="action-links">
      <div class="container-vinci actions-container">
        <a
          href="#"
          @click.prevent="emit('open-test-drive')"
          class="action-item group"
        >
          <span>AGENDE UM TEST DRIVE</span>
          <span class="arrow transform transition-transform duration-300 group-hover:translate-x-2">❯</span>
        </a>
        <a
          href="#"
          @click.prevent="emit('open-configurator', 'MODELO V2')"
          class="action-item group"
        >
          <span>VEJA OFERTAS</span>
          <span class="arrow transform transition-transform duration-300 group-hover:translate-x-2">❯</span>
        </a>
        <a
          href="#"
          @click.prevent="emit('open-test-drive')"
          class="action-item group"
        >
          <span>ENCONTRE UMA LOJA</span>
          <span class="arrow transform transition-transform duration-300 group-hover:translate-x-2">❯</span>
        </a>
      </div>
    </section>

    <!-- Section 5: Banner 2 -->
    <section class="banner-section relative overflow-hidden group">
      <img
        src="/images/banner-travel.jpg"
        alt="Vinci viajando"
        class="banner-img transform transition-transform duration-1000 group-hover:scale-105"
      >
      <div class="absolute inset-0 bg-black/30 flex items-center justify-center">
        <div class="text-center text-white px-4">
          <div class="text-4xl sm:text-6xl font-light tracking-widest uppercase mb-6">
            Zero Emissões. Pura Emoção.
          </div>
          <button class="btn btn-outline" @click="emit('open-test-drive')">
            VIVA A EXPERIÊNCIA
          </button>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* Hero Section */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: flex-end;
  padding-bottom: 15vh;
  padding-top: 140px;
  color: #ffffff;
  background-color: #0d0d0d;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.2) 100%);
  z-index: 2;
}

.hero-content {
  position: relative;
  z-index: 10;
  max-width: 1240px;
  width: 100%;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(6px);
  padding: 6px 16px;
  border-radius: 9999px;
  font-size: 13px;
  letter-spacing: 3px;
  margin-bottom: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.hero-title {
  font-size: clamp(48px, 8vw, 84px);
  font-weight: 400;
  letter-spacing: 5px;
  margin-bottom: 20px;
  line-height: 1.1;
  color: #ffffff;
}

.hero-desc {
  font-size: clamp(18px, 2.5vw, 24px);
  font-weight: 300;
  line-height: 1.4;
  color: #eeeeee;
  margin-bottom: 40px;
  max-width: 800px;
}

.hero-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

/* Model Comparison Section */
.model-comparison {
  background-color: #ffffff;
  padding: 100px 0;
}

.comparison-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
}

.model-col {
  display: flex;
  flex-direction: column;
}

.model-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  flex-wrap: wrap;
  gap: 20px;
}

.model-header h2 {
  font-size: 40px;
  font-weight: 400;
  letter-spacing: 5px;
  line-height: 1.2;
  color: #111111;
}

.model-specs {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.spec-row {
  display: flex;
  gap: 10px;
  font-size: 18px;
  letter-spacing: 1px;
}

.spec-label {
  font-weight: 500;
  min-width: 90px;
  color: #111111;
}

.spec-val {
  color: #888888;
  font-weight: 400;
}

.model-img-wrapper {
  margin-bottom: 30px;
  text-align: center;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 240px;
}

.model-img-wrapper img {
  max-width: 95%;
  height: auto;
  object-fit: contain;
}

.model-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #cccccc;
  padding-bottom: 15px;
}

.footer-desc {
  font-size: 20px;
  color: #777777;
  font-weight: 400;
  letter-spacing: 1px;
}

.footer-link {
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 2px;
  color: #111111;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: underline;
  text-underline-offset: 4px;
  transition: color 0.2s, transform 0.2s;
}

.footer-link:hover {
  color: #e50000;
}

.arrow-indicator {
  text-decoration: none;
  display: inline-block;
  transition: transform 0.2s;
}

.footer-link:hover .arrow-indicator {
  transform: translateX(4px);
}

/* Banner Sections */
.banner-section {
  width: 100%;
  height: clamp(380px, 50vw, 600px);
}

.banner-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Action Links */
.action-links {
  background-color: #ffffff;
  padding: 80px 0;
}

.actions-container {
  display: flex;
  flex-direction: column;
}

.action-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
  font-size: clamp(24px, 4vw, 48px);
  font-weight: 400;
  letter-spacing: 2px;
  color: #111111;
  border-bottom: 1px solid #dddddd;
  transition: color 0.3s, padding-left 0.3s;
  text-decoration: none;
}

.action-item:hover {
  color: #e50000;
  padding-left: 12px;
}

.arrow {
  font-weight: 600;
  font-size: clamp(24px, 3.5vw, 36px);
}

@media (max-width: 900px) {
  .comparison-grid {
    grid-template-columns: 1fr;
    gap: 80px;
  }
}
</style>
