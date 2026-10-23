<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  modelName: {
    type: String,
    default: 'MODELO V2'
  }
})

const emit = defineEmits(['close'])

const selectedColor = ref('vermelho')
const selectedWheel = ref('21')
const isOrderSubmitted = ref(false)
const buyerName = ref('')
const buyerPhone = ref('')

const colors = [
  { id: 'vermelho', name: 'Vermelho Vinci (Exclusivo)', hex: '#e50000', price: 0 },
  { id: 'preto', name: 'Preto Ônix Metálico', hex: '#161616', price: 4500 },
  { id: 'branco', name: 'Branco Pérola Glacier', hex: '#f0f0f0', price: 3500 },
  { id: 'cinza', name: 'Cinza Titânio Fosco', hex: '#63666a', price: 6000 }
]

const basePrices = {
  'MODELO V1': 329000,
  'MODELO V2': 389000,
  'MODELO V3': 489000,
  'MODELO V4': 359000,
  'MODELO V5': 420000,
  'MODELO V6': 550000
}

const currentBasePrice = computed(() => {
  return basePrices[props.modelName] || 389000
})

const selectedColorObj = computed(() => {
  return colors.find(c => c.id === selectedColor.value) || colors[0]
})

const totalPrice = computed(() => {
  const wheelExtra = selectedWheel.value === '21' ? 7000 : 0
  return currentBasePrice.value + selectedColorObj.value.price + wheelExtra
})

function formatCurrency(val) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(val)
}

function handleOrderSubmit() {
  if (!buyerName.value || !buyerPhone.value) {
    alert('Por favor, informe seu nome e telefone para reserva.')
    return
  }
  isOrderSubmitted.value = true
}

function handleClose() {
  isOrderSubmitted.value = false
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
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
        @click.self="handleClose"
      >
        <div
          class="relative w-full max-w-3xl bg-white border border-gray-200 shadow-2xl rounded-sm overflow-hidden"
        >
          <div class="h-1.5 bg-vinci-red w-full"></div>

          <!-- Modal Header -->
          <div class="px-8 pt-6 pb-4 flex justify-between items-center border-b border-gray-100">
            <div>
              <div class="text-xs uppercase tracking-widest text-vinci-red font-semibold mb-1">
                Configurador & Reserva
              </div>
              <h3 class="text-3xl font-normal tracking-widest text-vinci-dark">
                VINCI {{ modelName }}
              </h3>
            </div>
            <button
              @click="handleClose"
              class="text-gray-400 hover:text-vinci-dark transition-colors p-2 text-2xl font-light leading-none"
            >
              ✕
            </button>
          </div>

          <!-- Order Confirmed View -->
          <div v-if="isOrderSubmitted" class="p-8 text-center py-12">
            <div class="w-16 h-16 bg-red-50 text-vinci-red rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
              ✓
            </div>
            <h4 class="text-3xl tracking-widest text-vinci-dark mb-2">RESERVA INICIADA COM SUCESSO!</h4>
            <p class="text-gray-600 text-lg max-w-md mx-auto mb-4">
              Parabéns, <strong class="text-black">{{ buyerName }}</strong>. Uma vaga de produção para o seu 
              <strong class="text-vinci-red">VINCI {{ modelName }}</strong> ({{ selectedColorObj.name }}) foi pré-reservada.
            </p>
            <div class="p-4 bg-gray-50 border border-gray-200 max-w-sm mx-auto mb-6 text-sm tracking-widest text-gray-700">
              VALOR ESTIMADO: <strong class="text-black">{{ formatCurrency(totalPrice) }}</strong><br>
              RESERVA ID: <strong class="text-vinci-red">RSV-{{ Math.floor(200000 + Math.random() * 800000) }}</strong>
            </div>
            <button class="btn btn-primary" @click="handleClose">
              CONCLUIR
            </button>
          </div>

          <!-- Customizer Form -->
          <div v-else class="p-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-h-[80vh] overflow-y-auto">
            <!-- Left: Car Visualizer Preview -->
            <div class="flex flex-col justify-between border-b md:border-b-0 md:border-r border-gray-200 pb-6 md:pb-0 md:pr-6">
              <div class="text-center">
                <div class="relative overflow-hidden p-4 rounded-sm bg-gray-50 border border-gray-200 mb-4">
                  <img
                    :src="modelName === 'MODELO V1' ? '/images/model-v1.jpg' : '/images/model-v2.jpg'"
                    :alt="modelName"
                    class="w-full h-48 object-contain transition-transform duration-500 hover:scale-105"
                  />
                  <!-- Color Accent Badge -->
                  <div
                    class="absolute top-3 right-3 w-5 h-5 rounded-full border-2 border-white shadow-md"
                    :style="{ backgroundColor: selectedColorObj.hex }"
                  ></div>
                </div>
                <div class="text-xl tracking-widest font-normal text-vinci-dark">
                  VINCI {{ modelName }}
                </div>
                <div class="text-sm text-gray-500 tracking-wider">
                  {{ selectedColorObj.name }} • Rodas {{ selectedWheel }}"
                </div>
              </div>

              <!-- Price Box -->
              <div class="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-xs">
                <div class="text-xs uppercase tracking-widest text-gray-500">Valor de Configuração</div>
                <div class="text-3xl font-semibold tracking-wider text-vinci-dark">
                  {{ formatCurrency(totalPrice) }}
                </div>
                <div class="text-[11px] text-gray-500">
                  Em até 48x ou taxa especial de 0,99% a.m. Entrega estimada: 30 dias úteis.
                </div>
              </div>
            </div>

            <!-- Right: Options & Checkout -->
            <form @submit.prevent="handleOrderSubmit" class="space-y-5">
              <!-- Colors -->
              <div>
                <label class="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                  Cor da Carroceria
                </label>
                <div class="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    v-for="c in colors"
                    :key="c.id"
                    @click="selectedColor = c.id"
                    :class="[
                      'p-2.5 border text-left rounded-xs transition-all flex items-center gap-2.5',
                      selectedColor === c.id
                        ? 'border-vinci-red bg-red-50/30 ring-1 ring-vinci-red'
                        : 'border-gray-200 hover:border-gray-400 bg-white'
                    ]"
                  >
                    <span
                      class="w-5 h-5 rounded-full border border-gray-300 shrink-0"
                      :style="{ backgroundColor: c.hex }"
                    ></span>
                    <div class="overflow-hidden">
                      <div class="text-xs font-medium truncate text-gray-900">{{ c.name }}</div>
                      <div class="text-[10px] text-gray-500">{{ c.price === 0 ? 'Incluso' : '+' + formatCurrency(c.price) }}</div>
                    </div>
                  </button>
                </div>
              </div>

              <!-- Wheels -->
              <div>
                <label class="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                  Conjunto de Rodas
                </label>
                <div class="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    @click="selectedWheel = '20'"
                    :class="[
                      'p-2.5 border text-left rounded-xs transition-all',
                      selectedWheel === '20'
                        ? 'border-vinci-red bg-red-50/30 ring-1 ring-vinci-red'
                        : 'border-gray-200 hover:border-gray-400'
                    ]"
                  >
                    <div class="text-xs font-medium text-gray-900">20" Aero Efficiency</div>
                    <div class="text-[10px] text-gray-500">Incluso no pacote</div>
                  </button>

                  <button
                    type="button"
                    @click="selectedWheel = '21'"
                    :class="[
                      'p-2.5 border text-left rounded-xs transition-all',
                      selectedWheel === '21'
                        ? 'border-vinci-red bg-red-50/30 ring-1 ring-vinci-red'
                        : 'border-gray-200 hover:border-gray-400'
                    ]"
                  >
                    <div class="text-xs font-medium text-gray-900">21" Turbine Sport Forged</div>
                    <div class="text-[10px] text-vinci-red">+ R$ 7.000</div>
                  </button>
                </div>
              </div>

              <!-- Contact Inputs -->
              <div class="space-y-3 pt-2">
                <div>
                  <label class="block text-xs uppercase tracking-widest text-gray-500 mb-1">
                    Seu Nome *
                  </label>
                  <input
                    v-model="buyerName"
                    type="text"
                    required
                    placeholder="Nome completo"
                    class="w-full px-3 py-2 text-sm border border-gray-300 focus:border-vinci-red focus:outline-none focus:ring-1 focus:ring-vinci-red"
                  />
                </div>
                <div>
                  <label class="block text-xs uppercase tracking-widest text-gray-500 mb-1">
                    WhatsApp para Contato *
                  </label>
                  <input
                    v-model="buyerPhone"
                    type="tel"
                    required
                    placeholder="(11) 99999-9999"
                    class="w-full px-3 py-2 text-sm border border-gray-300 focus:border-vinci-red focus:outline-none focus:ring-1 focus:ring-vinci-red"
                  />
                </div>
              </div>

              <!-- Submit -->
              <div class="pt-2">
                <button type="submit" class="w-full btn btn-primary text-base py-3">
                  SOLICITAR RESERVA DO VEÍCULO
                </button>
                <div class="text-center text-[11px] text-gray-400 mt-2">
                  Sem taxa inicial de cancelamento. Um concierge entrará em contato em até 2 horas.
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>
