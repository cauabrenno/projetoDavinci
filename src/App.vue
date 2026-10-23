<script setup>
import { ref } from 'vue'
import SiteHeader from './components/SiteHeader.vue'
import Home from './components/Home.vue'
import ModelV2 from './components/ModelV2.vue'
import SiteFooter from './components/SiteFooter.vue'
import TestDriveModal from './components/TestDriveModal.vue'
import ConfiguratorModal from './components/ConfiguratorModal.vue'

const currentPage = ref('home')
const isTestDriveOpen = ref(false)
const testDriveModel = ref('MODELO V2')
const isConfiguratorOpen = ref(false)
const configuratorModel = ref('MODELO V2')

function navigateTo(page) {
  currentPage.value = page
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function openTestDrive(model = 'MODELO V2') {
  testDriveModel.value = model
  isTestDriveOpen.value = true
}

function openConfigurator(model = 'MODELO V2') {
  configuratorModel.value = model
  isConfiguratorOpen.value = true
}
</script>

<template>
  <div class="min-h-screen flex flex-col bg-white text-vinci-dark font-genos">
    <!-- Main Header -->
    <SiteHeader
      :current-page="currentPage"
      @navigate="navigateTo"
      @open-test-drive="openTestDrive"
      @open-configurator="openConfigurator"
    />
    
    <!-- Dynamic View with transition -->
    <div class="flex-grow">
      <transition
        name="page-fade"
        mode="out-in"
      >
        <component
          :is="currentPage === 'home' ? Home : ModelV2"
          :key="currentPage"
          @navigate="navigateTo"
          @open-test-drive="openTestDrive"
          @open-configurator="openConfigurator"
        />
      </transition>
    </div>
    
    <!-- Footer -->
    <SiteFooter @navigate="navigateTo" />

    <!-- Modals -->
    <TestDriveModal
      :is-open="isTestDriveOpen"
      :initial-model="testDriveModel"
      @close="isTestDriveOpen = false"
    />

    <ConfiguratorModal
      :is-open="isConfiguratorOpen"
      :model-name="configuratorModel"
      @close="isConfiguratorOpen = false"
    />
  </div>
</template>

<style>
/* Page transition */
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.page-fade-enter-from {
  opacity: 0;
  transform: translateY(6px);
}

.page-fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
