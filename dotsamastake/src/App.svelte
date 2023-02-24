<script>
  import svelteLogo from './assets/svelte.svg'
  import Counter from './lib/Counter.svelte'

  
</script>

<main>
  <head>
  </head>
  <body>
      <section class="w-screen bg-[#FFFDF8] min-h-screen md:h-screen block flex flex-col justify-between md:items-start items-between 2xl:bg-red-200 lg:bg-red-200 md:bg-red-200 sm:bg-red-200" data-tails-scripts="//unpkg.com/alpinejs">
      <header class="w-full h-20 z-30 border-b-[3px] border-gray-900 flex justify-between relative items-stretch md:divide-x-[3px] divide-gray-900">
      <a href="#_" class="flex flex-shrink-0 text-gray-900 items-center justify-center h-full p-5">
          <!-- svelte-ignore a11y-missing-attribute -->
          <img src="/public/logo.png" class="h-8" alt="Dotsamastake.io">
      </a>
      <div class="w-full md:flex hidden md:flex-row flex-col md:relative absolute h-screen md:pt-0 pt-20 md:h-full items-stretch justify-between">
          <nav class="w-full md:space-x-8 font-medium md:bg-transparent bg-[#FFFDF8] md:px-8 h-full flex md:flex-row flex-col z-20 items-center">
              <a href="#_" class="hover:underline md:border-b-0 text-center py-6 border-b-[3px] border-gray-900 md:w-auto w-full 2xl:font-mono 2xl:font-light 2xl:text-xl">Home</a>
              <a href="#_" class="hover:underline md:border-b-0 text-center py-6 border-b-[3px] border-gray-900 md:w-auto w-full 2xl:font-mono 2xl:font-light 2xl:text-xl">About</a>
              <a href="#_" class="hover:underline md:border-b-0 text-center py-6 border-b-[3px] border-gray-900 md:w-auto w-full 2xl:font-mono 2xl:font-light 2xl:text-xl">Contact</a>
          </nav>
          <div class="flex flex-shrink-0 md:flex-row flex-col md:bg-transparent bg-[#FFFDF8] font-medium border-l-0 md:border-l-[3px] border-gray-900 items-center">
              <a href="#_" class="px-8 h-full md:py-0 py-6 md:w-auto w-full text-white flex items-center justify-center bg-zinc-900 2xl:flex 2xl:font-mono 2xl:font-light">Connect your wallet</a>
          </div>
      </div>
     </header>
      <div class="2xl:contents lg:contents md:contents">
          <h1 class="text-4xl sm:text-5xl lg:pt-5 md:text-6xl lg:text-7xl font-bold tracking-tighter w-full inline-block text-left md:text-center relative 2xl:pt-5 lg:grid 2xl:font-mono 2xl:font-medium xl:font-mono xl:font-medium lg:font-medium lg:font-mono md:font-medium md:font-mono sm:font-medium sm:font-mono sm:pt-5 xl:relative xl:pt-5 md:inline sm:container sm:items-start sm:w-full sm:text-center">Reliable validator nodes<div class="">on Kusama.</div>
          </h1>
      </div>
      <footer class="sm:h-20 h-auto z-20 border-t-[3px] sm:pb-0 pb-3 w-full border-gray-900 sm:space-y-0 space-y-3 flex sm:flex-row flex-col items-center justify-center flex-shrink-0">
          <p class="text-sm opacity-70 sm:mt-0 mt-3">Find us on twitter -&gt;</p>
          <div class="flex items-center justify-center space-x-1 ml-4">
              <a href="#_" class="p-1">
                  <!-- svelte-ignore a11y-missing-attribute -->
                  <img src="https://cdn.devdojo.com/images/january2023/twitter.png" class="w-7 translate-y-px h-auto">
              </a>
          </div>
      </footer>
  </section>
  
      <script src="//unpkg.com/alpinejs" defer></script>
  </body>
  
</main>

<style>
  @import './styles/tailwind.css';
</style>