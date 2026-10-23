<script setup>
import { ref } from 'vue'

const props = defineProps({
  currentPage: {
    type: String,
    default: 'home'
  }
})

const emit = defineEmits(['navigate', 'open-test-drive', 'open-configurator'])

const isVehiclesHovered = ref(false)
const isMobileMenuOpen = ref(false)

const models = [
  { id: 1, name: 'MODELO V1', page: 'home', image: '/images/model-v1.jpg', tag: 'Sedan' },
  { id: 2, name: 'MODELO V2', page: 'modelV2', image: '/images/model-v2.jpg', tag: 'SUV Premium' },
  { id: 3, name: 'MODELO V3', page: 'home', image: '/images/model-v3.jpg', tag: 'Gran Turismo' },
  { id: 4, name: 'MODELO V1', page: 'home', image: '/images/model-v1.jpg', tag: 'Performance' },
  { id: 5, name: 'MODELO V2', page: 'modelV2', image: '/images/model-v2.jpg', tag: 'Special Edition' },
  { id: 6, name: 'MODELO V1', page: 'home', image: '/images/model-v1.jpg', tag: 'Track' },
]

const navLinks = [
  { label: 'OFERTAS', active: false, action: 'ofertas' },
  { label: 'TEST DRIVE', active: true, action: 'test-drive' },
  { label: 'LOJAS', active: false, action: 'lojas' },
  { label: 'SERVIÇOS', active: false, action: 'servicos' },
  { label: 'SAC', active: false, action: 'sac' },
  { label: 'PRIVACIDADE', active: false, action: 'privacidade' },
]

function goHome() {
  isVehiclesHovered.value = false
  isMobileMenuOpen.value = false
  emit('navigate', 'home')
}

function goToModel(page) {
  isVehiclesHovered.value = false
  isMobileMenuOpen.value = false
  emit('navigate', page)
}

function handleSidebarLink(item) {
  isVehiclesHovered.value = false
  isMobileMenuOpen.value = false
  if (item.action === 'test-drive') {
    emit('open-test-drive')
  } else {
    alert(`Seção "${item.label}" - Em breve disponível na plataforma Vinci.`)
  }
}

function handleBuy(modelName) {
  isVehiclesHovered.value = false
  isMobileMenuOpen.value = false
  emit('open-configurator', modelName)
}
</script>

<template>
  <header class="site-header">
    <div class="container-vinci header-content">
      <!-- Logo -->
      <div class="logo cursor-pointer" @click="goHome">
        <div class="logo-icon">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 18L3 6l3-1.5L12 14l6-9.5 3 1.5-9 12z" fill="#e50000"/>
            <path d="M12 22l-6-8 1.5-1.5L12 18l4.5-5.5 1.5 1.5-6 8z" fill="#e50000"/>
          </svg>
        </div>
        <span class="logo-text">V I N C I</span>
      </div>

      <!-- Desktop Nav -->
      <nav class="main-nav hidden md:block">
        <ul>
          <li>
            <a
              href="#"
              @click.prevent="goHome"
              class="nav-link"
              :class="{ 'active-page': currentPage === 'home' && !isVehiclesHovered }"
            >
              HOME
            </a>
          </li>
          <li>
            <a
              href="#sobre"
              @click.prevent="goHome"
              class="nav-link"
            >
              SOBRE
            </a>
          </li>
          <li
            @mouseenter="isVehiclesHovered = true"
            @mouseleave="isVehiclesHovered = false"
            class="has-mega-menu"
          >
            <a
              href="#"
              :class="['nav-link', { 'active': isVehiclesHovered, 'active-page': currentPage === 'modelV2' }]"
              @click.prevent="isVehiclesHovered = !isVehiclesHovered"
            >
              VEÍCULOS
            </a>

            <!-- Mega Menu -->
            <transition name="fade">
              <div
                v-if="isVehiclesHovered"
                class="mega-menu"
                @mouseenter="isVehiclesHovered = true"
                @mouseleave="isVehiclesHovered = false"
              >
                <div class="mega-menu-inner">
                  <!-- Cars grid -->
                  <div class="cars-grid">
                    <div
                      v-for="model in models"
                      :key="model.id"
                      class="car-item group cursor-pointer"
                      @click="goToModel(model.page)"
                    >
                      <div class="overflow-hidden bg-gray-50 rounded-xs mb-3 border border-transparent group-hover:border-gray-300 transition-all">
                        <img
                          :src="model.image"
                          :alt="model.name"
                          class="transform transition-transform duration-300 group-hover:scale-105"
                        >
                      </div>
                      <div class="flex items-center justify-center gap-2 mb-1">
                        <h4>{{ model.name }}</h4>
                      </div>
                      <div class="car-links" @click.stop>
                        <a
                          href="#"
                          class="link-ver"
                          @click.prevent="goToModel(model.page)"
                        >
                          Ver mais
                        </a>
                        <span class="text-gray-300">•</span>
                        <a
                          href="#"
                          class="link-comprar"
                          @click.prevent="handleBuy(model.name)"
                        >
                          Comprar
                        </a>
                      </div>
                    </div>
                  </div>

                  <!-- Right sidebar -->
                  <div class="nav-sidebar">
                    <div class="sidebar-divider-top"></div>
                    <p class="sidebar-label">N A V E G U E</p>
                    <div class="sidebar-divider"></div>
                    <ul class="sidebar-links">
                      <li v-for="link in navLinks" :key="link.label">
                        <a
                          href="#"
                          @click.prevent="handleSidebarLink(link)"
                          :class="{ 'sidebar-active': link.active }"
                        >
                          {{ link.label }}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </transition>
          </li>
          <li>
            <a
              href="#"
              @click.prevent="goToModel('modelV2')"
              class="nav-link"
            >
              SERVIÇOS
            </a>
          </li>
          <li>
            <a
              href="#"
              @click.prevent="emit('open-test-drive')"
              class="nav-link"
            >
              TEST DRIVE
            </a>
          </li>
        </ul>
      </nav>

      <!-- Mobile Hamburger Button -->
      <div class="md:hidden flex items-center gap-3">
        <button
          @click="emit('open-test-drive')"
          class="btn btn-primary text-xs py-1.5 px-3"
        >
          TEST DRIVE
        </button>
        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="p-2 text-vinci-dark hover:text-vinci-red focus:outline-none"
          aria-label="Menu"
        >
          <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              v-if="!isMobileMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Drawer Menu -->
    <transition
      enter-active-class="transition duration-300 ease-out transform"
      enter-from-class="-translate-y-4 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in transform"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="-translate-y-4 opacity-0"
    >
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden bg-white border-b border-gray-200 shadow-xl px-6 py-6 space-y-5"
      >
        <div class="space-y-3 border-b border-gray-100 pb-4">
          <a
            href="#"
            @click.prevent="goHome"
            class="block text-xl tracking-widest text-vinci-dark hover:text-vinci-red uppercase font-medium"
          >
            Home
          </a>
          <a
            href="#"
            @click.prevent="goToModel('modelV2')"
            class="block text-xl tracking-widest text-vinci-dark hover:text-vinci-red uppercase font-medium"
          >
            Vinci Model V2
          </a>
          <a
            href="#"
            @click.prevent="emit('open-test-drive'); isMobileMenuOpen = false"
            class="block text-xl tracking-widest text-vinci-red uppercase font-semibold"
          >
            Agendar Test Drive
          </a>
        </div>

        <div>
          <div class="text-xs tracking-widest text-gray-400 uppercase mb-3 font-semibold">
            Nossos Modelos
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div
              v-for="model in models.slice(0, 4)"
              :key="'mob-' + model.id"
              class="border border-gray-200 p-2 text-center rounded-xs cursor-pointer hover:border-vinci-red"
              @click="goToModel(model.page)"
            >
              <img :src="model.image" :alt="model.name" class="w-full h-16 object-cover mb-1">
              <div class="text-xs font-semibold tracking-wider">{{ model.name }}</div>
              <div class="text-[10px] text-vinci-red mt-1">Conhecer ›</div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<style scoped>
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  z-index: 1000;
  padding: 16px 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  user-select: none;
}

.logo-icon {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
}

.logo-icon svg {
  width: 100%;
  height: 100%;
}

.logo-text {
  color: #111111;
  font-weight: 500;
  font-size: 26px;
  letter-spacing: 5px;
}

/* Nav */
.main-nav ul {
  display: flex;
  align-items: center;
  gap: 48px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.main-nav .nav-link {
  color: #111111 !important;
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: color 0.2s ease;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  display: inline-block;
  padding: 4px 0;
}

/* Red Hover Effect - Guaranteed #e50000 */
.main-nav .nav-link:hover,
.main-nav .nav-link.active {
  color: #e50000 !important;
}

.main-nav .nav-link.active-page {
  color: #e50000 !important;
}

/* Mega Menu trigger container */
.has-mega-menu {
  position: static;
}

/* Mega Menu */
.mega-menu {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
  border-top: 1px solid #e5e5e5;
  padding: 40px 0;
  cursor: default;
}

.mega-menu-inner {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  gap: 30px;
}

/* Cars grid: 3 cols × 2 rows */
.cars-grid {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px 28px;
}

.car-item {
  text-align: center;
}

.car-item img {
  width: 100%;
  height: 110px;
  object-fit: cover;
  object-position: center;
}

.car-item h4 {
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 3px;
  color: #111111;
  transition: color 0.2s;
}

.car-item:hover h4 {
  color: #e50000;
}

.car-links {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
}

.link-ver {
  font-size: 14px;
  color: #888888 !important;
  text-decoration: none;
  transition: color 0.2s;
}

.link-ver:hover {
  color: #111111 !important;
}

.link-comprar {
  font-size: 14px;
  color: #111111 !important;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s;
}

.link-comprar:hover {
  color: #e50000 !important;
}

/* Right Sidebar */
.nav-sidebar {
  width: 220px;
  padding-left: 40px;
  border-left: 1px solid #e5e5e5;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
}

.sidebar-divider-top {
  height: 1px;
  background-color: #e5e5e5;
  margin-bottom: 20px;
}

.sidebar-label {
  font-size: 13px;
  letter-spacing: 4px;
  color: #aaa;
  margin-bottom: 16px;
  font-weight: 400;
}

.sidebar-divider {
  height: 1px;
  background-color: #e5e5e5;
  margin-bottom: 24px;
}

.sidebar-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 0;
  margin: 0;
}

.sidebar-links a {
  font-size: 16px;
  letter-spacing: 2px;
  color: #111111 !important;
  font-weight: 400;
  text-decoration: none;
  text-transform: uppercase;
  transition: color 0.2s ease;
}

.sidebar-links a:hover {
  color: #e50000 !important;
}

.sidebar-links a.sidebar-active {
  color: #e50000 !important;
  font-weight: 600;
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
