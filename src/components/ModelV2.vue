<script setup>
import { ref } from 'vue'

const emit = defineEmits(['navigate', 'open-test-drive', 'open-configurator'])

const activeMarker = ref(null)

const techSpecs = [
  {
    id: 'A',
    title: 'RETROVISORES INTELIGENTES',
    desc: 'Câmeras digitais com telas OLED nos painéis laterais que eliminam pontos cegos e melhoram a aerodinâmica em até 8%.',
    class: 'm-a',
    pos: 'top: 43%; left: 38%;'
  },
  {
    id: 'B',
    title: 'RODAS DE LIGA LEVE',
    desc: 'Rodas forjadas de 21 polegadas com lâminas aerodinâmicas ativas para resfriamento regenerativo de freios cerâmicos.',
    class: 'm-b',
    pos: 'top: 62%; left: 22%;'
  },
  {
    id: 'C',
    title: 'RECONHECIMENTO DE DIGITAL',
    desc: 'Maçanetas embutidas retráteis com biometria ultra-rápida e integração direta com chave digital UWB no smartphone.',
    class: 'm-c',
    pos: 'top: 48%; left: 48%;'
  },
  {
    id: 'D',
    title: 'SENSOR DE PROXIMIDADE',
    desc: 'Conjunto de radar LiDAR e sensores ultrassônicos ocultos no para-choque para frenagem autônoma de emergência e tráfego cruzado.',
    class: 'm-d',
    pos: 'top: 60%; left: 10%;'
  },
  {
    id: 'E',
    title: 'ANTENA 5G',
    desc: 'Conexão gigabit de ultra-baixa latência integrada no teto de vidro para atualizações Over-the-Air e telemetria preditiva.',
    class: 'm-e',
    pos: 'top: 32%; left: 85%;'
  },
  {
    id: 'F',
    title: 'DESIGN SOFISTICADO',
    desc: 'Escultura corporal desenvolvida em túnel de vento com coeficiente aerodinâmico de apenas 0.22 Cx para máxima eficiência energética.',
    class: 'm-f',
    pos: 'top: 60%; left: 65%;'
  },
  {
    id: 'G',
    title: 'ABERTURA AUTOMÁTICA',
    desc: 'Porta-malas elétrico inteligente acionado por movimento dos pés ou proximidade da chave com capacidade de até 650 litros.',
    class: 'm-g',
    pos: 'top: 45%; left: 93%;'
  },
  {
    id: 'H',
    title: 'CÂMERA DE ESTACIONAMENTO',
    desc: 'Visão 360° em alta definição e realidade aumentada com sensores infravermelhos para estacionamento autônomo.',
    class: 'm-h',
    pos: 'top: 58%; left: 90%;'
  }
]

function setActiveMarker(markerId) {
  activeMarker.value = markerId
}

function clearActiveMarker() {
  activeMarker.value = null
}
</script>

<template>
  <main class="model-page w-full">
    <!-- Breadcrumb -->
    <div class="container-vinci pt-8 pb-4">
      <div class="flex items-center gap-2 text-xs tracking-widest text-gray-400 uppercase">
        <a href="#" @click.prevent="emit('navigate', 'home')" class="hover:text-vinci-red transition-colors">Home</a>
        <span>/</span>
        <span class="text-gray-500">Veículos</span>
        <span>/</span>
        <span class="text-vinci-red font-semibold">Vinci Model V2</span>
      </div>
    </div>

    <!-- Header Hero -->
    <section class="v2-hero">
      <div class="container-vinci text-center">
        <div class="hero-car-wrapper">
          <img src="/images/model-v2.jpg" alt="Vinci Model V2" class="hero-car">
        </div>
        
        <h1 class="v2-title">VINCI MODEL V2</h1>
        <p class="subtitle">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been<br class="hidden sm:inline">
          the industry's standard dummy text ever.
        </p>
        
        <div class="hero-buttons">
          <button class="btn btn-primary" @click="emit('open-configurator', 'MODELO V2')">
            RESERVAR MODELO
          </button>
          <button class="btn btn-outline-dark" @click="emit('open-test-drive', 'MODELO V2')">
            TEST DRIVE
          </button>
        </div>
      </div>
    </section>

    <!-- Specs Section -->
    <section class="v2-specs">
      <div class="container-vinci">
        <p class="specs-title">TECNOLOGIA ALIADA AO FUTURO</p>
        <div class="specs-grid">
          <div class="spec-item">
            <h3>520 KM</h3>
            <p>COM 1 CARGA</p>
          </div>
          <div class="spec-divider"></div>
          <div class="spec-item">
            <h3>2.800 RPM</h3>
            <p>DE TORQUE</p>
          </div>
          <div class="spec-divider"></div>
          <div class="spec-item">
            <h3>10 ANOS</h3>
            <p>GARANTIA</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Banner (Image 3) -->
    <section class="v2-banner">
      <div class="container-vinci">
        <div class="relative overflow-hidden rounded-xs group">
          <img
            src="/images/banner-v2.jpg"
            alt="Estrada"
            class="banner-img transform transition-transform duration-1000 group-hover:scale-105"
          >
          <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-8">
            <div class="text-white">
              <span class="text-xs uppercase tracking-widest text-vinci-red font-semibold">Liberdade Total</span>
              <h3 class="text-3xl sm:text-4xl font-light tracking-widest mt-1">REDESENHE SEUS DESTINOS</h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features 4 columns -->
    <section class="v2-features">
      <div class="container-vinci">
        <div class="features-row">
          <div class="feature-col group">
            <h4>RECARGA RÁPIDA</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
            <div class="overflow-hidden">
              <img
                src="/images/feature-recarga.jpg"
                alt="Recarga"
                class="transform transition-transform duration-500 group-hover:scale-105"
              >
            </div>
          </div>
          <div class="feature-col group">
            <h4>PAINEL DE INSTRUMENTOS</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
            <div class="overflow-hidden">
              <img
                src="/images/feature-painel.jpg"
                alt="Painel"
                class="transform transition-transform duration-500 group-hover:scale-105"
              >
            </div>
          </div>
          <div class="feature-col group">
            <h4>PONTOS DE RECARGA</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
            <div class="overflow-hidden">
              <img
                src="/images/feature-pontos.jpg"
                alt="Pontos de Recarga"
                class="transform transition-transform duration-500 group-hover:scale-105"
              >
            </div>
          </div>
          <div class="feature-col group">
            <h4>DESIGN PREMIADO</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
            <div class="overflow-hidden">
              <img
                src="/images/feature-design.jpg"
                alt="Design"
                class="transform transition-transform duration-500 group-hover:scale-105"
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech Specs Detail (Interactive Car Diagram) -->
    <section class="v2-tech">
      <div class="container-vinci tech-container">
        <!-- Left: Car Diagram with Interactive Hotspots -->
        <div class="tech-left">
          <h2>VINCI MODEL V2</h2>
          <p class="tech-desc">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.
          </p>
          
          <div class="car-diagram">
            <img src="/images/model-v2.jpg" alt="Vinci Model V2 Diagrama">
            
            <!-- Interactive Markers A through H -->
            <button
              v-for="item in techSpecs"
              :key="item.id"
              type="button"
              :class="[
                'marker',
                item.class,
                activeMarker === item.id ? 'marker-active' : ''
              ]"
              :style="item.pos"
              @mouseenter="setActiveMarker(item.id)"
              @mouseleave="clearActiveMarker"
              @click="setActiveMarker(activeMarker === item.id ? null : item.id)"
              :aria-label="item.title"
            >
              <span>{{ item.id }}</span>

              <!-- Interactive Floating Tooltip -->
              <transition
                enter-active-class="transition-all duration-200 ease-out"
                enter-from-class="opacity-0 translate-y-1 scale-95"
                enter-to-class="opacity-100 translate-y-0 scale-100"
                leave-active-class="transition-all duration-150 ease-in"
                leave-from-class="opacity-100 translate-y-0 scale-100"
                leave-to-class="opacity-0 translate-y-1 scale-95"
              >
                <div
                  v-if="activeMarker === item.id"
                  class="marker-tooltip"
                >
                  <div class="text-[11px] font-bold text-vinci-red uppercase tracking-widest mb-0.5">
                    PONTO {{ item.id }}
                  </div>
                  <div class="text-sm font-semibold text-gray-900 leading-snug mb-1">
                    {{ item.title }}
                  </div>
                  <div class="text-[12px] text-gray-600 font-normal leading-normal">
                    {{ item.desc }}
                  </div>
                </div>
              </transition>
            </button>
          </div>

          <div class="mt-4 text-xs tracking-widest text-gray-400 uppercase">
            💡 Passe o mouse ou toque nos pontos (A-H) para ver detalhes de engenharia.
          </div>
        </div>
        
        <!-- Right: Technical List -->
        <div class="tech-right">
          <ul class="tech-list">
            <li
              v-for="item in techSpecs"
              :key="'item-' + item.id"
              :class="[
                'cursor-pointer transition-all duration-200 p-2.5 rounded-xs',
                activeMarker === item.id ? 'bg-red-50 text-vinci-red' : 'hover:bg-gray-50'
              ]"
              @mouseenter="setActiveMarker(item.id)"
              @mouseleave="clearActiveMarker"
            >
              <span
                :class="[
                  'icon transition-all duration-200',
                  activeMarker === item.id ? 'bg-vinci-red text-white scale-110 shadow-md' : 'bg-black text-white'
                ]"
              >
                {{ item.id }}
              </span>
              <span class="font-medium tracking-wider">{{ item.title }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

  </main>
</template>

<style scoped>
.model-page {
  padding-top: 100px;
  background-color: #ffffff;
}

/* Hero */
.hero-car-wrapper {
  max-width: 800px;
  margin: 0 auto 30px;
}

.hero-car {
  width: 100%;
  height: auto;
  object-fit: contain;
}

.v2-title {
  font-size: clamp(40px, 6vw, 64px);
  font-weight: 400;
  letter-spacing: 5px;
  margin-bottom: 20px;
  color: #111111;
}

.subtitle {
  font-size: clamp(16px, 2vw, 20px);
  color: #888888;
  line-height: 1.6;
  margin-bottom: 40px;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

.hero-buttons {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 80px;
}

/* Specs */
.v2-specs {
  padding: 80px 0;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  text-align: center;
}

.specs-title {
  color: #aaaaaa;
  letter-spacing: 2px;
  font-size: 16px;
  margin-bottom: 40px;
}

.specs-grid {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  flex-wrap: wrap;
}

.spec-item h3 {
  font-size: clamp(40px, 5vw, 60px);
  font-weight: 300;
  margin-bottom: 10px;
  letter-spacing: 2px;
  color: #111111;
}

.spec-item p {
  color: #888888;
  letter-spacing: 2px;
  font-size: 14px;
}

.spec-divider {
  width: 1px;
  height: 80px;
  background-color: #e5e5e5;
}

/* Banner */
.v2-banner {
  padding: 60px 0;
}
.banner-img {
  width: 100%;
  height: clamp(300px, 40vw, 500px);
  object-fit: cover;
  display: block;
}

/* Features */
.v2-features {
  padding: 60px 0;
}

.features-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  width: 100%;
}

.feature-col {
  display: flex;
  flex-direction: column;
}

.feature-col h4 {
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 2px;
  margin-bottom: 15px;
  color: #111111;
}

.feature-col p {
  color: #888888;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 30px;
  min-height: 70px;
}

.feature-col img {
  width: 100%;
  height: 280px;
  object-fit: cover;
  display: block;
}

/* Tech Specs */
.v2-tech {
  padding: 100px 0;
}

.tech-container {
  display: flex;
  gap: 60px;
  align-items: center;
  flex-wrap: wrap;
}

.tech-left {
  flex: 1.4;
  min-width: 320px;
  position: relative;
}

.tech-left h2 {
  font-size: clamp(32px, 4vw, 44px);
  font-weight: 400;
  letter-spacing: 5px;
  margin-bottom: 20px;
  color: #111111;
}

.tech-desc {
  color: #888888;
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 40px;
  max-width: 550px;
}

.car-diagram {
  position: relative;
  display: inline-block;
  width: 100%;
}

.car-diagram img {
  width: 100%;
  height: auto;
  display: block;
}

.marker {
  position: absolute;
  width: 28px;
  height: 28px;
  background-color: #e50000;
  color: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: bold;
  cursor: pointer;
  border: 2px solid #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s, background-color 0.2s, box-shadow 0.2s;
  z-index: 10;
}

.marker:hover,
.marker-active {
  background-color: #ff1a1a;
  transform: scale(1.25);
  box-shadow: 0 0 0 6px rgba(229, 0, 0, 0.35);
  z-index: 20;
}

/* Marker Tooltip */
.marker-tooltip {
  position: absolute;
  bottom: calc(100% + 12px);
  left: 50%;
  transform: translateX(-50%);
  width: 220px;
  background-color: #ffffff;
  color: #111111;
  padding: 12px 14px;
  border-radius: 4px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.25), 0 8px 10px -6px rgba(0, 0, 0, 0.2);
  border: 1px solid #e5e7eb;
  text-align: left;
  pointer-events: none;
  z-index: 30;
}

.marker-tooltip::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-width: 6px;
  border-style: solid;
  border-color: #ffffff transparent transparent transparent;
}

.tech-right {
  flex: 1;
  min-width: 300px;
}

.tech-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0;
  margin: 0;
}

.tech-list li {
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 15px;
  letter-spacing: 1px;
  color: #333333;
}

.icon {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: bold;
  flex-shrink: 0;
}

@media (max-width: 1024px) {
  .features-row {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .features-row {
    grid-template-columns: 1fr;
  }
  .spec-divider {
    display: none;
  }
  .specs-grid {
    flex-direction: column;
    gap: 30px;
  }
}
</style>
