<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  BoltIcon,
  BuildingOfficeIcon,
  Cog6ToothIcon,
  SpeakerWaveIcon,
  ComputerDesktopIcon
} from '@heroicons/vue/24/outline'

import bgHeader from '@/assets/twst.jpeg'

const areas = [
  {
    title: 'Elétrica',
    icon: BoltIcon,
    items: [
      'Subestações Transformadoras',
      'Sistemas de Geração de Energia',
      'Instalações em Média e Baixa Tensão',
      'Eficiência Energética',
      'Iluminação e SPDA'
    ]
  },
  {
    title: 'Hidráulica',
    icon: SpeakerWaveIcon,
    items: [
      'Redes de Água Potável',
      'Drenagem Pluvial',
      'Centrais de Água Gelada (CAG)',
      'Esgoto Sanitário',
      'Combate a Incêndio'
    ]
  },
]
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
  <header class="sticky top-0 bg-white shadow-sm z-50 h-24 flex items-center">
    <nav class="container mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <div class="text-3xl font-bold text-primary">
          CZN
        </div>
        <div class="hidden md:flex space-x-8">
          <a 
            href="#servicos" 
            @click.prevent="smoothScroll('servicos')"
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
      <button class="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-600 hover:border-primary-600 transition">
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
          Mais de 28 anos de qualidade, seriedade e profissionalismo
        </h2>
        <p class="text-gray-600 mb-4">
          A CZN Engenharia foi fundada em 1987 no tradicional bairro do Itaim Bibi, em São Paulo, e hoje acumula mais de 200 projetos e obras concluídas em todo território nacional.
        </p>
        <p class="text-gray-600 mb-4">
          Somos uma empresa multidisciplinar que atua nos segmentos de Engenharia Elétrica, Civil, Mecânica, Hidráulica e Sistemas Especiais, formada por profissionais com grande capacidade e experiência nas atividades de gerenciamento e execução de obras públicas e privadas.
        </p>
        <p class="text-gray-600">
          Temos como principal característica a excelência na entrega de nossas obras através de um rigoroso padrão de qualidade, sendo capazes de realizar projetos de alta complexidade técnica. Ao longo de mais de 38 anos de existência, a CZN Engenharia tornou‑se uma das mais admiradas empresas do Brasil.
        </p>
      </div>

      <!-- Coluna de Vídeo -->
      <div>
        <div class="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-lg shadow-md">
          <iframe
            class="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/SeuVideoID"
            title="Vídeo Institucional"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </section>
  <section id="areas" class="relative bg-gray-800 text-white py-20 overflow-hidden">
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
      <p class="mb-12 max-w-xl mx-auto">
        Empresa multidisciplinar que atua nos segmentos de Engenharia:
      </p>
  
      <!-- Dois cards lado a lado ou empilhados -->
      <div class="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-4xl mx-auto">
        <!-- Elétrica -->
        <div class="flex-1 p-6 bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition text-left">
          <h3 class="text-xl font-semibold mb-4">Elétrica</h3>
          <ul class="text-sm space-y-2 list-disc list-inside">
            <li>Subestações Transformadoras</li>
            <li>Sistemas de Geração de Energia</li>
            <li>Instalações em Média e Baixa Tensão</li>
            <li>Eficiência Energética</li>
            <li>Iluminação e SPDA</li>
          </ul>
        </div>
  
        <!-- Hidráulica -->
        <div class="flex-1 p-6 bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition text-left">
          <h3 class="text-xl font-semibold mb-4">Hidráulica</h3>
          <ul class="text-sm space-y-2 list-disc list-inside">
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
      <h2 class="text-3xl font-bold text-center mb-12">Nossos Projetos</h2>
      
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

  <section id="contato" class="py-16 bg-white text-gray-800">
    <div class="container mx-auto px-6 text-center">
      <p class="uppercase text-sm text-red-700 mb-2">Contato</p>
      <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-12">Fale Conosco</h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto h-64">

        <div class="bg-gray-100 p-12 rounded-lg shadow-md flex flex-col items-center text-center">
          <div class="p-3 bg-red-100 rounded-full mb-4">
            <svg class="w-6 h-6 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-800 mb-2">Endereço</h3>
          <p class="text-gray-600 text-sm">Rua da Engenharia, 123<br>Mooca, São Paulo - SP<br>CEP 01234-000</p>
        </div>

        <div class="bg-gray-100 p-12 rounded-lg shadow-md flex flex-col items-center text-center">
           <div class="p-3 bg-red-100 rounded-full mb-4">
             <svg class="w-6 h-6 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 4v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4m16 0l-7.89-5.26a2 2 0 00-2.22 0L3 12"></path></svg>
           </div>
           <h3 class="text-lg font-semibold text-gray-800 mb-2">Email</h3>
           <p class="text-gray-600 text-sm"><a href="mailto:contato@CZN.com.br" class="hover:underline">contato@CZN.com.br</a></p>
         </div>

        <div class="bg-gray-100 p-12 rounded-lg shadow-md flex flex-col items-center text-center">
          <div class="p-3 bg-red-100 rounded-full mb-4">
            <svg class="w-6 h-6 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-800 mb-2">Telefone</h3>
          <p class="text-gray-600 text-sm">55 11 1234 5678</p>
        </div>
      </div>
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
          <li><a href="#" class="hover:text-white">Compliance</a></li>
          <li><a href="#" class="hover:text-white">Notícias</a></li>
        </ul>
      </div>
  
      <!-- Contato -->
      <div>
        <h5 class="text-lg font-semibold mb-4">Contato</h5>
        <p class="text-gray-400 text-sm leading-relaxed">
          Rua da Engenharia, 123<br>
          São Paulo - SP<br>
          CEP 01234-000<br>
          <a href="mailto:contato@CZN.com.br" class="hover:text-white">contato@CZN.com.br</a><br>
          <span>Tel: (11) 1234-5678</span>
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
  scroll-margin-top: 6rem; /* Adjust based on your header height */
  transition: all 0.3s ease-in-out;
}

.hover\\:shadow-lg {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

#areas {
  /* ajusta o “scroll-margin” para que o header sticky não cubra o topo */
  scroll-margin-top: 6rem;
}
</style>