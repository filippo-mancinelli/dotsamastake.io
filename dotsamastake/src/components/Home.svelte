<script>
import { onMount } from "svelte";

const messages = ["Kusama", "Polkadot"];  //needed for the typing animation
let currentMessage = "";

</script>


<div class="2xl:contents lg:contents md:contents flex justify-center items-center h-screen tails-selected-element" contenteditable="true">
  <h1 spellcheck="false" class="w-auto text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter inline-block text-left md:text-center relative lg:grid 2xl:font-mono 2xl:font-medium xl:font-mono xl:font-medium lg:font-medium lg:font-mono md:font-medium md:font-mono sm:font-medium sm:font-mono xl:relative md:inline sm:container sm:items-start sm:w-full sm:text-center 2xl:py-60 xl:py-60 lg:py-60 md:py-60 sm:pt-60 mx-auto">
    Reliable validator nodes on 
        <div class="inline-block animate-typing md:text-center" >Kusama</div>
  </h1>
</div>