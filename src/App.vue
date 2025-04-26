<script setup lang="ts">
import { ref, computed } from 'vue'


// Dados reativos
const selectedCategory = ref<string>('todos')
const categories = ref<string[]>(['todos', 'hidráulica', 'elétrica'])
const projects = ref([
  {
    id: 1,
    title: 'Projeto de Ponte Metálica',
    category: 'hidráulica',
    image: 'https://placehold.co/600x400?text=Ponte+Metálica'
  },
  {
    id: 2,
    title: 'Sistema de Energia Solar',
    category: 'elétrica',
    image: 'https://placehold.co/600x400?text=Energia+Solar'
  },
  // Adicione mais projetos...
])

// Filtragem de projetos
const filteredProjects = computed(() => {
  if (selectedCategory.value === 'todos') return projects.value
  return projects.value.filter(project => 
    project.category === selectedCategory.value
  )
})

const smoothScroll = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}
</script>

<template>
  <!-- Header -->
  <header class="sticky top-0 bg-white shadow-sm z-50 h-20 flex items-center">
    <nav class="container mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <!-- <div class="text-3xl font-bold text-primary">
          CZN
        </div> -->
        <img src="./assets/logotype-red.png" alt="Logo" class="h-20 w-20">
        <div class="hidden md:flex space-x-8">
          <a 
            href="#services" 
            @click.prevent="smoothScroll('services')"
            class="text-neutral-200 hover:text-neutral transition-colors duration-300"
          >
            Serviços
          </a>
          <a 
            href="#portfolio" 
            @click.prevent="smoothScroll('portfolio')"
            class="text-neutral-200 hover:text-neutral transition-colors duration-300"
          >
            Portfólio
          </a>
          <a 
            href="#contato" 
            @click.prevent="smoothScroll('contato')"
            class="text-neutral-200 hover:text-neutral transition-colors duration-300"
          >
            Contato
          </a>
        </div>
      </div>
    </nav>
  </header>

  <!-- Hero Section -->
  <section class="bg-[url('/src/assets/twst.jpeg')] bg-cover bg-center py-20">
    <div class="container mx-auto px-6 text-center">
      <h1 class="text-4xl md:text-6xl font-bold mb-6 text-white">
        Engenharia de Excelência para Seus Projetos
      </h1>
      <p class="text-xl text-gray-100 mb-8">
        Soluções integradas em engenharia elétrica e hidráulica
      </p>
      <button class="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-600 hover:border-primary-600 transition" >
        Solicitar Orçamento
      </button>
    </div>
  </section>
 
  <!-- Serviços -->
  <section
    id="sobre"
    class="py-20 bg-white"
  >
    <div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <!-- Coluna de Texto -->
      <div>
        <p class="text-sm text-primary uppercase mb-2">Sobre Nós</p>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Há 31 anos, entregando excelência, seriedade e inovação
        </h2>
        <p class="text-gray-600 mb-4">
          Na <strong>CZN Engenharia</strong>, somos especialistas em projetos e consultoria de sistemas hidráulicos, elétricos e de combate a incêndio — oferecendo soluções integradas que garantem segurança, eficiência e máximo retorno para o seu investimento.
        </p>
        <p class="text-gray-600 mb-4">
          Trabalhamos lado a lado com você, entendendo suas necessidades e expectativas para transformar ideias em obras concretas, dentro do prazo e do orçamento definidos.
        </p>
        <p class="text-gray-600">
          Desde 1994, a CZN Engenharia se orgulha de construir parcerias duradouras, entregando resultados que superam metas e consolidam a confiança dos nossos clientes em todo o Brasil.
        </p>
      </div>
      <!-- Coluna de Vídeo -->
      <div>
        <div class="relative bg-white py-16">
          <!-- World map dotted background -->
          <div
            class="absolute inset-0 bg-no-repeat bg-center bg-contain"
            :style="{ backgroundImage: 'url(src/assets/brazil-light-red-dots.png)' }"
            aria-hidden="true"
          ></div>
      
          <div class="relative flex flex-col items-center px-4">
     
            <div class="mt-8 text-center">
              <h2 class="text-5xl font-extrabold">
                <span class="text-red-600">+1,300</span>
                <span class="text-gray-800"> WW</span>
              </h2>
              <p class="mt-2 text-lg text-gray-700">Potencia Instaláda</p>
            </div>
      
            <div class="mt-12 flex justify-between w-full max-w-4xl">
              <div class="flex flex-col items-center">
                <span class="text-4xl font-bold text-red-600">+8</span>
                <span class="text-sm text-gray-700">Estados</span>
              </div>
              <div class="flex flex-col items-center">
                <span class="text-4xl font-bold text-red-600">+120</span>
                <span class="text-sm text-gray-700">Projetos</span>
              </div>
              <div class="flex flex-col items-center">
                <span class="text-4xl font-bold text-red-600">+200mil m²</span>
                <span class="text-sm text-gray-700">de área construída</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="services" class="relative bg-gray-800 text-white py-16">
    <!-- SVG de círculos concêntricos -->
    <svg
      class="absolute inset-0 w-full h-full opacity-10 text-gray-600"
      viewBox="0 0 800 800"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
    >
      <circle cx="400" cy="400" r="350" stroke="currentColor" stroke-width="2"/>
      <circle cx="400" cy="400" r="300" stroke="currentColor" stroke-width="2"/>
      <circle cx="400" cy="400" r="250" stroke="currentColor" stroke-width="2"/>
      <circle cx="400" cy="400" r="200" stroke="currentColor" stroke-width="2"/>
      <circle cx="400" cy="400" r="150" stroke="currentColor" stroke-width="2"/>
    </svg>
  
    <!-- Conteúdo principal -->
    <div class="relative z-10 container mx-auto px-6 text-center">
      <p class="uppercase text-sm mb-2">Conheça nossas</p>
      <h2 class="text-3xl md:text-4xl font-bold mb-4">Áreas de <span class="text-primary">Atuação</span></h2>
  
      <div class="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-4xl mx-auto py-8">
        <div class="flex-1 p-8 bg-gray-700 text-gray-200 rounded-2xl shadow-xl hover:shadow-2xl hover:translate-y-1 transition duration-300 ease-in-out text-left border border-gray-700 hover:border-blue-500">
            <h3 class="text-2xl font-bold mb-6 text-blue-400">Elétrica</h3>
            <ul class="text-base space-y-3 list-disc list-inside">
                <li>Subestações Transformadoras</li>
                <li>Sistemas de Geração de Energia</li>
                <li>Instalações em Média e Baixa Tensão</li>
                <li>Eficiência Energética</li>
                <li>Iluminação e SPDA</li>
            </ul>
        </div>
    
        <div class="flex-1 p-8 bg-gray-700 text-gray-200 rounded-2xl shadow-xl hover:shadow-2xl hover:translate-y-1 transition duration-300 ease-in-out text-left border border-gray-700 hover:border-blue-500">
            <h3 class="text-2xl font-bold mb-6 text-blue-400">Hidráulica</h3>
            <ul class="text-base space-y-3 list-disc list-inside">
                <li>Redes de Água Potável</li>
                <li>Drenagem Pluvial</li>
                <li>Centrais de Água Gelada (CAG)</li>
                <li>Esgoto Sanitário</li>
                <li>Combate a Incêndio</li>
            </ul>
        </div>
    </div>
    </div>
  </section>
  
  <!-- Portfólio -->
  <section id="portfolio" class="bg-gray-50 py-16">
    <div class="container mx-auto px-6">
      <h2 class="text-4xl font-bold text-center mb-12">Nossos Projetos</h2>
      
      <!-- Filtros -->
      <div class="flex justify-center gap-4 mb-8 flex-wrap">
        <button 
          v-for="category in categories" 
          :key="category"
          @click="selectedCategory = category"
          class="px-4 py-2 rounded-full capitalize"
          :class="{
            'bg-blue-600 text-white': selectedCategory === category,
            'bg-white text-gray-600 hover:bg-gray-100': selectedCategory !== category
          }"
        >
          {{ category }}
        </button>
      </div>

      <!-- Grid de Projetos -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="project in filteredProjects" 
          :key="project.id"
          class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
        >
          <img 
            :src="project.image" 
            :alt="project.title"
            class="w-full h-48 object-cover"
          >
          <div class="p-6">
            <h3 class="text-lg font-semibold mb-2">{{ project.title }}</h3>
            <span class="text-sm text-blue-600 capitalize">
              {{ project.category }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Clients Section -->
  <section class="py-8 bg-gray-50 overflow-hidden">
    <div class="relative">
      <h2 class="text-4xl font-bold text-center mb-12">Clientes e Parceiros</h2>
      

      <!-- Animated Logos Container -->
      <div class="flex overflow-hidden">
        <div class="animate-marquee flex items-center space-x-24 px-4">
          <!-- Original Set -->
          <template v-for="index in 2" :key="index">
            <img src="./assets/logo-three.png" alt="Three" class="h-16 w-auto opacity-80 hover:opacity-100 hover:scale-105 transition-all">
            <img src="./assets/logo-ecg.png" alt="ECG" class="h-16 w-auto opacity-80 hover:opacity-100 hover:scale-105 transition-all">
            <img src="./assets/logo-godoi.png" alt="Godoi" class="h-16 w-auto opacity-80 hover:opacity-100 hover:scale-105 transition-all">
            <img src="./assets/logo-precolandia.png" alt="Precolandia" class="h-16 w-auto opacity-80 hover:opacity-100 hover:scale-105 transition-all">
            <img src="./assets/logo-brasilit.png" alt="Brasilit" class="h-16 w-auto opacity-80 hover:opacity-100 hover:scale-105 transition-all">
            <img src="./assets/logo-fabrica.png" alt="Fabrica" class="h-16 w-auto opacity-80 hover:opacity-100 hover:scale-105 transition-all">
            <img src="./assets/logo-fatec.png" alt="Fatec" class="h-16 w-auto opacity-80 hover:opacity-100 hover:scale-105 transition-all">
            <img src="./assets/logo-liceu.png" alt="Liceu" class="h-16 w-auto opacity-80 hover:opacity-100 hover:scale-105 transition-all">
            <img src="./assets/logo-npc.png" alt="NPC" class="h-16 w-auto opacity-80 hover:opacity-100 hover:scale-105 transition-all">
            <img src="./assets/logo-usp.png" alt="USP" class="h-16 w-auto opacity-80 hover:opacity-100 hover:scale-105 transition-all">
            <img src="./assets/logo-unifesp.png" alt="Unifesp" class="h-16 w-auto opacity-80 hover:opacity-100 hover:scale-105 transition-all">
            <img src="./assets/logo-senai.png" alt="Senai" class="h-16 w-auto opacity-80 hover:opacity-100 hover:scale-105 transition-all">
            <img src="./assets/logo-sesi.png" alt="Sesi" class="h-16 w-auto opacity-80 hover:opacity-100 hover:scale-105 transition-all">
          </template>
        </div>
      </div>
  
      <!-- Gradient Fade Effect -->
      <div class="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
      <div class="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
    </div>
  </section>
  
  <section id="contato" class="py-16 bg-gray-50 text-gray-800">
    <div class="container mx-auto px-6">
      <p class="text-center uppercase text-sm text-red-600 font-semibold mb-2">Contato</p>
      <h2 class="text-4xl font-bold text-center mb-12">Vamos Conversar?</h2>
  
      <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-xl mx-auto">
        <!-- Endereço -->
        <li class="flex items-center border-l-4 border-red-600 bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition">
          <div class="flex-shrink-0 mr-6">
            <div class="p-4 bg-red-100 rounded-full">
              <svg class="w-6 h-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
          </div>
          <div class="flex-1 text-center">
            <h3 class="text-lg font-semibold mb-2">Endereço</h3>
            <address class="not-italic text-gray-600 text-sm leading-relaxed">
              Avenida Santa Inês 1139, sala 3<br>
              Parque Mandaqui – São Paulo / SP<br>
              CEP 02415-001
            </address>
          </div>
        </li>
  
        <!-- Email -->
        <li class="flex items-center border-l-4 border-red-600 bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition">
          <div class="flex-shrink-0 mr-6">
            <div class="p-4 bg-red-100 rounded-full">
              <svg class="w-6 h-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 4v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
              </svg>
            </div>
          </div>
          <div class="flex-1 text-center">
            <h3 class="text-lg font-semibold mb-2">Email</h3>
            <p class="text-gray-600 text-sm">
              <a href="mailto:czneng@uol.com.br" class="underline hover:text-red-600">
                czneng@uol.com.br
              </a>
            </p>
          </div>
        </li>
  
        <!-- Telefone -->
        <li class="flex items-center border-l-4 border-red-600 bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition">
          <div class="flex-shrink-0 mr-6">
            <div class="p-4 bg-red-100 rounded-full">
              <svg class="w-6 h-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
            </div>
          </div>
          <div class="flex-1 text-center">
            <h3 class="text-lg font-semibold mb-2">Telefone</h3>
            <p class="text-gray-600 text-sm">+55 (11) 2952-1317</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
  
  

  

  <!-- Footer -->
  <footer class="bg-gray-800 text-white py-12">
    <div class="container mx-auto px-6 grid lg:grid-cols-3 md:grid-cols-2 gap-12">
      <!-- Logo + About -->
      <div>
        <h4 class="text-2xl font-bold mb-4">CZN</h4>
        <p class="text-gray-400 text-sm">
          Somos uma empresa especializada em soluções de engenharia elétrica, civil e mecânica.
          Nossa equipe oferece excelência técnica em projetos públicos e privados.
        </p>
        <div class="flex space-x-4 mt-4">
          <a href="#" aria-label="Instagram" class="hover:text-gray-300">
            <i class="fab fa-instagram text-xl"></i>
          </a>
          <a href="#" aria-label="LinkedIn" class="hover:text-gray-300">
            <i class="fab fa-linkedin text-xl"></i>
          </a>
        </div>
      </div>
  
      <!-- Menu -->
      <div>
        <h5 class="text-lg font-semibold mb-4">Menu</h5>
        <ul class="text-gray-400 space-y-2 text-sm">
          <li><a href="#" class="hover:text-white">Institucional</a></li>
          <li><a href="#" class="hover:text-white">Áreas de atuação</a></li>
          <li><a href="#" class="hover:text-white">Projetos</a></li>
          <li><a href="#" class="hover:text-white">Clientes</a></li>
        </ul>
      </div>
  
      <!-- Contato -->
      <div>
        <h5 class="text-lg font-semibold mb-4">Contato</h5>
        <p class="text-gray-400 text-sm leading-relaxed">
          Avenida Santa Inês 1139, sala 3<br>
          Parque Mandaqui – São Paulo / SP<br>
          CEP 02415-001<br>
          <a href="mailto:czneng@uol.com.br" class="hover:text-white">czneng@uol.com.br</a><br>
          <span>Tel: (11) 2952-1317</span>
        </p>
      </div>
  
    </div>
  
    <!-- Bottom bar -->
    <div class="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400 text-sm">
      © 2024 CZN. Todos os direitos reservados. | 
      <a href="#" class="hover:text-white">Termos de uso</a> · 
      <a href="#" class="hover:text-white">Política de privacidade</a>
    </div>
  </footer>
  
</template>

<style>
@keyframes marquee {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
}

.animate-marquee {
  animation: marquee 30s linear infinite;
  display: inline-flex;
  flex-shrink: 0;
  min-width: 100%;
  height: 80px
}
body {
  @apply bg-white text-gray-800;
}

.container {
  @apply max-w-7xl mx-auto;
}

html {
  scroll-behavior: smooth;
}

section {
  scroll-margin-top: 5rem; 
  transition: all 0.3s ease-in-out;
}


.hover\\:shadow-lg {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

</style>