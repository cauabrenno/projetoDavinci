<script setup>
import { ref } from 'vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  initialModel: {
    type: String,
    default: 'MODELO V2'
  }
})

const emit = defineEmits(['close'])

const selectedModel = ref(props.initialModel || 'MODELO V2')
const fullName = ref('')
const email = ref('')
const phone = ref('')
const city = ref('São Paulo - Jardins')
const preferredDate = ref('')
const preferredTime = ref('Manhã (09:00 - 12:00)')
const isSubmitted = ref(false)

const modelsList = [
  { id: 'v1', name: 'MODELO V1', type: 'Sedan Esportivo 100% Elétrico', img: '/images/model-v1.jpg' },
  { id: 'v2', name: 'MODELO V2', type: 'SUV Elétrico Premium', img: '/images/model-v2.jpg' },
  { id: 'v3', name: 'MODELO V3', type: 'Gran Turismo Hyper-Electric', img: '/images/model-v3.jpg' }
]

const dealerships = [
  'São Paulo - Av. Europa (Jardins)',
  'São Paulo - Shopping Iguatemi',
  'Rio de Janeiro - Barra da Tijuca',
  'Belo Horizonte - Lourdes',
  'Curitiba - Batel',
  'Brasília - Lago Sul',
  'Porto Alegre - Moinhos de Vento'
]

function handleSubmit() {
  if (!fullName.value || !email.value || !phone.value) {
    alert('Por favor, preencha todos os campos obrigatórios.')
    return
  }
  isSubmitted.value = true
}

function handleClose() {
  isSubmitted.value = false
  emit('close')
}
</script>

<template>
  <teleport to="body">
    <transition
      enter-active-class="transition-opacity duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
        @click.self="handleClose"
      >
        <div
          class="relative w-full max-w-2xl bg-white border border-gray-200 shadow-2xl rounded-sm overflow-hidden transform transition-all duration-300"
        >
          <!-- Top Accent Bar -->
          <div class="h-1.5 bg-vinci-red w-full"></div>

          <!-- Header -->
          <div class="px-8 pt-6 pb-4 flex justify-between items-center border-b border-gray-100">
            <div>
              <div class="flex items-center gap-2 mb-1">
                <span class="w-2 h-2 rounded-full bg-vinci-red"></span>
                <span class="text-xs uppercase tracking-widest text-gray-500 font-medium">Experiência Exclusiva</span>
              </div>
              <h3 class="text-3xl font-normal tracking-widest text-vinci-dark">
                AGENDE SEU TEST DRIVE
              </h3>
            </div>
            <button
              @click="handleClose"
              class="text-gray-400 hover:text-vinci-dark transition-colors p-2 text-2xl font-light leading-none"
              aria-label="Fechar"
            >
              ✕
            </button>
          </div>

          <!-- Content: Success View -->
          <div v-if="isSubmitted" class="p-8 text-center py-12">
            <div class="w-16 h-16 bg-red-50 text-vinci-red rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
              ✓
            </div>
            <h4 class="text-3xl tracking-widest text-vinci-dark mb-2">SOLICITAÇÃO CONFIRMADA!</h4>
            <p class="text-gray-600 text-lg max-w-md mx-auto mb-6">
              Obrigado, <strong class="text-black">{{ fullName }}</strong>. Nosso especialista da unidade 
              <strong class="text-black">{{ city }}</strong> entrará em contato via WhatsApp/Telefone para confirmar o horário do seu teste com o 
              <strong class="text-vinci-red">{{ selectedModel }}</strong>.
            </p>
            <div class="p-4 bg-gray-50 border border-gray-200 max-w-xs mx-auto mb-6 text-sm tracking-widest text-gray-700">
              CÓDIGO DE PROTOCOLO: <strong class="text-vinci-red">VNC-{{ Math.floor(100000 + Math.random() * 900000) }}</strong>
            </div>
            <button
              class="btn btn-primary"
              @click="handleClose"
            >
              CONCLUIR
            </button>
          </div>

          <!-- Content: Form View -->
          <form v-else @submit.prevent="handleSubmit" class="p-8 space-y-6 max-h-[80vh] overflow-y-auto">
            <!-- Model Selection -->
            <div>
              <label class="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                1. Selecione o Modelo Desejado
              </label>
              <div class="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  v-for="car in modelsList"
                  :key="car.id"
                  @click="selectedModel = car.name"
                  :class="[
                    'p-3 border text-left transition-all duration-200 rounded-sm flex flex-col justify-between',
                    selectedModel === car.name 
                      ? 'border-vinci-red bg-red-50/40 ring-1 ring-vinci-red' 
                      : 'border-gray-200 hover:border-gray-400 bg-white'
                  ]"
                >
                  <img :src="car.img" :alt="car.name" class="w-full h-16 object-cover mb-2 rounded-xs" />
                  <div>
                    <div class="font-medium tracking-wider text-sm" :class="selectedModel === car.name ? 'text-vinci-red' : 'text-gray-900'">
                      {{ car.name }}
                    </div>
                    <div class="text-[11px] text-gray-500 leading-tight">
                      {{ car.type }}
                    </div>
                  </div>
                </button>
              </div>
            </div>

            <!-- Personal Info -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs uppercase tracking-widest text-gray-500 mb-1">
                  Nome Completo *
                </label>
                <input
                  v-model="fullName"
                  type="text"
                  required
                  placeholder="Seu nome completo"
                  class="w-full px-3 py-2.5 text-base border border-gray-300 focus:border-vinci-red focus:outline-none focus:ring-1 focus:ring-vinci-red transition-all"
                />
              </div>

              <div>
                <label class="block text-xs uppercase tracking-widest text-gray-500 mb-1">
                  E-mail *
                </label>
                <input
                  v-model="email"
                  type="email"
                  required
                  placeholder="seu@email.com"
                  class="w-full px-3 py-2.5 text-base border border-gray-300 focus:border-vinci-red focus:outline-none focus:ring-1 focus:ring-vinci-red transition-all"
                />
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs uppercase tracking-widest text-gray-500 mb-1">
                  Telefone / WhatsApp *
                </label>
                <input
                  v-model="phone"
                  type="tel"
                  required
                  placeholder="(11) 99999-9999"
                  class="w-full px-3 py-2.5 text-base border border-gray-300 focus:border-vinci-red focus:outline-none focus:ring-1 focus:ring-vinci-red transition-all"
                />
              </div>

              <div>
                <label class="block text-xs uppercase tracking-widest text-gray-500 mb-1">
                  Concessionária Vinci Mais Próxima
                </label>
                <select
                  v-model="city"
                  class="w-full px-3 py-2.5 text-base border border-gray-300 bg-white focus:border-vinci-red focus:outline-none focus:ring-1 focus:ring-vinci-red transition-all"
                >
                  <option v-for="d in dealerships" :key="d" :value="d">
                    {{ d }}
                  </option>
                </select>
              </div>
            </div>

            <!-- Date and Period -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs uppercase tracking-widest text-gray-500 mb-1">
                  Data Preferencial
                </label>
                <input
                  v-model="preferredDate"
                  type="date"
                  class="w-full px-3 py-2.5 text-base border border-gray-300 bg-white focus:border-vinci-red focus:outline-none focus:ring-1 focus:ring-vinci-red transition-all"
                />
              </div>

              <div>
                <label class="block text-xs uppercase tracking-widest text-gray-500 mb-1">
                  Período Preferencial
                </label>
                <select
                  v-model="preferredTime"
                  class="w-full px-3 py-2.5 text-base border border-gray-300 bg-white focus:border-vinci-red focus:outline-none focus:ring-1 focus:ring-vinci-red transition-all"
                >
                  <option>Manhã (09:00 - 12:00)</option>
                  <option>Tarde (13:00 - 17:00)</option>
                  <option>Fim de Tarde (17:00 - 19:30)</option>
                </select>
              </div>
            </div>

            <div class="text-[12px] text-gray-400 leading-relaxed">
              Ao agendar, você concorda em receber o contato de um consultor exclusivo Vinci. Seus dados estão seguros e protegidos segundo nossa Política de Privacidade.
            </div>

            <!-- Submit -->
            <div class="flex justify-end gap-3 pt-2">
              <button
                type="button"
                @click="handleClose"
                class="px-6 py-2.5 text-base tracking-wider text-gray-600 hover:text-black uppercase transition-colors"
              >
                Cancelar
              </button>
              <button
                type="submit"
                class="btn btn-primary text-base"
              >
                CONFIRMAR AGENDAMENTO
              </button>
            </div>
          </form>
        </div>
      </div>
    </transition>
  </teleport>
</template>
