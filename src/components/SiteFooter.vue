<script setup>
const emit = defineEmits(['navigate'])

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <footer class="site-footer">
    <div class="container-vinci footer-content">
      <div class="footer-left">
        <div class="footer-logo cursor-pointer" @click="scrollToTop">
          <div class="logo-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 18L3 6l3-1.5L12 14l6-9.5 3 1.5-9 12z" fill="#e50000"/>
              <path d="M12 22l-6-8 1.5-1.5L12 18l4.5-5.5 1.5 1.5-6 8z" fill="#e50000"/>
            </svg>
          </div>
          <span class="logo-text">V I N C I</span>
        </div>
        <div class="footer-copyright">
          <p>© COPYRIGHT 2026.</p>
          <p>TODOS OS DIREITOS RESERVADOS.</p>
          <p class="text-xs text-gray-400 mt-2">Tecnologia Automotiva Sustentável de Alto Luxo</p>
        </div>
      </div>
      
      <div class="footer-links-container">
        <div class="footer-col">
          <h4>SOBRE</h4>
          <ul>
            <li><a href="#sobre">A Marca</a></li>
            <li><a href="#historia">História</a></li>
            <li><a href="#qualidade">Qualidade</a></li>
            <li><a href="#onde-estamos">Onde estamos</a></li>
            <li><a href="#investidores">Investidores</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>CONTATO</h4>
          <ul>
            <li><a href="#contato">Fale Conosco</a></li>
            <li><a href="#atendimento">Atendimento</a></li>
            <li><a href="#sac">SAC</a></li>
            <li><a href="#imprensa">Imprensa</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>SAC</h4>
          <ul>
            <li><a href="#canais">Canais Oficiais</a></li>
            <li><a href="#redes">Redes Sociais</a></li>
            <li><a href="#suporte">Suporte Técnico</a></li>
            <li><a href="#revisao">Agendar Revisão</a></li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Bottom sub-bar with back to top -->
    <div class="container-vinci mt-12 pt-6 border-t border-gray-200/60 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 tracking-widest gap-4">
      <div>VINCI AUTOMOTIVE CORP. BRASIL • CNPJ 00.000.000/0001-00</div>
      <button
        @click="scrollToTop"
        class="flex items-center gap-2 hover:text-vinci-red transition-colors cursor-pointer uppercase"
      >
        <span>Voltar ao Topo</span>
        <span>↑</span>
      </button>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background-color: var(--bg-light);
  border-top: 1px solid var(--border-color);
  padding: 80px 0 40px;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;
}

.footer-left {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 40px;
}

.footer-logo .logo-icon {
  width: 35px;
  height: 35px;
}

.footer-logo .logo-icon svg {
  width: 100%;
  height: 100%;
}

.footer-logo .logo-text {
  color: var(--text-dark);
  font-weight: 500;
  font-size: 28px;
  letter-spacing: 5px;
}

.footer-copyright {
  color: #999;
  font-size: 14px;
  letter-spacing: 3px;
  line-height: 1.8;
  font-weight: 400;
}

.footer-links-container {
  display: flex;
  gap: 80px;
  flex-wrap: wrap;
}

.footer-col h4 {
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 4px;
  margin-bottom: 24px;
  color: var(--text-dark);
}

.footer-col ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-col li {
  margin-bottom: 14px;
}

.footer-col a {
  color: #777;
  font-size: 18px;
  letter-spacing: 2px;
  font-weight: 400;
  transition: color 0.3s;
  text-decoration: none;
}

.footer-col a:hover {
  color: var(--primary-color);
}

@media (max-width: 768px) {
  .footer-links-container {
    gap: 40px;
  }
}
</style>
