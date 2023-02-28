<script>
  import Header from "./Header.svelte";
  import About from "./About.svelte";
  import Contact from "./Contact.svelte";
  import Footer from "./Footer.svelte";
  import Home from "./Home.svelte";


</script>

<main>
  <Header />

  <body>
      <section class="w-screen bg-[#FFFDF8] min-h-screen md:h-screen flex flex-col justify-between md:items-start items-between 2xl:bg-red-200 lg:bg-red-200 md:bg-red-200 sm:bg-red-200" data-tails-scripts="//unpkg.com/alpinejs">
              
        <Home />

        <About />

        <Contact />

        <Footer />

      </section>
  
      <script src="//unpkg.com/alpinejs" defer></script>
  </body>
  
</main>

<style>
  @import '../styles/tailwind.css';
</style>