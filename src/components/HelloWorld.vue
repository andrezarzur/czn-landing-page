<script setup lang="ts">
import { ref, computed } from 'vue'

// Dados reativos
const selectedCategory = ref<string>('todos')
const categories = ref<string[]>(['todos', 'civil', 'elétrica', 'mecânica'])
const projects = ref([
  {
    id: 1,
    title: 'Projeto de Ponte Metálica',
    category: 'civil',
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
</script>

<template>
  <!-- Header -->
  <header class="sticky top-0 bg-white shadow-sm z-50">
    <nav class="container mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <div class="text-2xl font-bold text-blue-800">
          CZN
        </div>
        <div class="hidden md:flex space-x-8">
          <a href="#servicos" class="hover:text-blue-600">Serviços</a>
          <a href="#portfolio" class="hover:text-blue-600">Portfólio</a>
          <a href="#contato" class="hover:text-blue-600">Contato</a>
        </div>
      </div>
    </nav>
  </header>

  <!-- Hero Section -->
  <section class="bg-gray-50 py-20">
    <div class="container mx-auto px-6 text-center">
      <h1 class="text-4xl md:text-6xl font-bold mb-6 text-gray-800">
        Engenharia de Excelência para Seus Projetos
      </h1>
      <p class="text-xl text-gray-600 mb-8">
        Soluções integradas em engenharia civil, elétrica e mecânica
      </p>
      <button class="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
        Solicitar Orçamento
      </button>
    </div>
  </section>

  <!-- Serviços -->
  <section id="servicos" class="py-16">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold text-center mb-12">Nossos Serviços</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div class="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
          <div class="text-blue-600 text-4xl mb-4">🏗️</div>
          <h3 class="text-xl font-semibold mb-3">Engenharia Civil</h3>
          <p class="text-gray-600">Projetos estruturais e gestão de obras</p>
        </div>
        <!-- Repita para outros serviços -->
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

  <!-- Contato -->
  <section id="contato" class="py-16">
    <div class="container mx-auto px-6 max-w-2xl">
      <h2 class="text-3xl font-bold text-center mb-8">Entre em Contato</h2>
      <form class="space-y-6">
        <div>
          <label class="block text-gray-700 mb-2">Nome</label>
          <input type="text" class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500">
        </div>
        <div>
          <label class="block text-gray-700 mb-2">Email</label>
          <input type="email" class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500">
        </div>
        <div>
          <label class="block text-gray-700 mb-2">Mensagem</label>
          <textarea rows="4" class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"></textarea>
        </div>
        <button type="submit" class="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
          Enviar Mensagem
        </button>
      </form>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-gray-800 text-white py-12">
    <div class="container mx-auto px-6">
      <div class="grid md:grid-cols-3 gap-8">
        <div>
          <h4 class="text-xl font-bold mb-4">EngSolutions</h4>
          <p class="text-gray-400">
            Rua da Engenharia, 123<br>
            São Paulo - SP<br>
            contato@engsolutions.com.br
          </p>
        </div>
        <!-- Adicione mais colunas -->
      </div>
      <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
        © 2024 EngSolutions. Todos os direitos reservados.
      </div>
    </div>
  </footer>
</template>

<style>
/* Estilos globais podem ser adicionados aqui */
body {
  @apply bg-white text-gray-800;
}

.container {
  @apply max-w-7xl mx-auto;
}
</style>