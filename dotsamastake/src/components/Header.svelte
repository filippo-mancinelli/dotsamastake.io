<script>
import { ApiPromise, WsProvider } from '@polkadot/api';
import { isWeb3Injected, web3Enable  } from '@polkadot/extension-dapp';
import { onMount, onDestroy } from 'svelte';
import { writable, derived } from 'svelte/store';

//check if the variable is already in the local cache
export let isConnected = writable(localStorage.getItem('isConnected') === 'true'); 
isConnected.subscribe(value => console.log(value));

let buttonClass = ''

const buttonColor = derived(
    [isConnected],
    ([isConnected]) => {
      if (isConnected) {
        return 'text-white bg-zinc-900';
      } else {
        return 'text-black bg-[#FFFDF8]';
      }
    }
  );
  
  function updateButtonClass() {
    buttonClass = String(buttonColor);
  }

// Listen to the disconnect event
window.addEventListener('polkadotJsExtensionDisconnected', () => {
  isConnected.set(false);
  localStorage.setItem('isConnected', String(false));
  isConnected.subscribe(value => console.log(value));
});

onMount(() => {
    updateButtonClass();
  });
  

// Cleanup function
onDestroy(() => {
  window.removeEventListener('polkadotJsExtensionDisconnected', () => {
    isConnected.set(false);
    localStorage.setItem('isConnected', String(false));
  });
});

async function connectWallet() {
  if (await isWeb3Injected) {
    const allInjected = await web3Enable('Your App Name');
    if(allInjected.length > 0) {
      isConnected.set(true);
      localStorage.setItem('isConnected', String(true)); //this ensures that the state is persisted in the local cache between page refreshes
    }
    
  } else {
    console.log('Polkadot JS Wallet Extension is not installed');
  }
}

</script>

<header class="w-full h-20 border-b-[3px] border-gray-900 sticky top-0 z-50 bg-white shadow-md flex justify-between items-stretch md:divide-x-[3px] divide-gray-900 " >
    <a href="#_" class="flex flex-shrink-0 text-gray-900 items-center justify-center h-full p-5">
        <!-- svelte-ignore a11y-missing-attribute -->
        <img src="/logo.png" class="h-8" alt="Dotsamastake.io">
    </a>
    <div class="w-full md:flex hidden md:flex-row flex-col md:relative absolute h-screen md:pt-0 pt-20 md:h-full items-stretch justify-between">
        <nav class="w-full md:space-x-8 font-medium md:bg-transparent bg-[#FFFDF8] md:px-8 h-full flex md:flex-row flex-col z-20 items-center">
            <a href="#_" class="hover:underline md:border-b-0 text-center py-6 border-b-[3px] border-gray-900 md:w-auto w-full 2xl:font-mono 2xl:font-light 2xl:text-xl">Home</a>
            <a href="#_" class="hover:underline md:border-b-0 text-center py-6 border-b-[3px] border-gray-900 md:w-auto w-full 2xl:font-mono 2xl:font-light 2xl:text-xl">About</a>
            <a href="#_" class="hover:underline md:border-b-0 text-center py-6 border-b-[3px] border-gray-900 md:w-auto w-full 2xl:font-mono 2xl:font-light 2xl:text-xl">Contact</a>
        </nav>
        <div class="flex flex-shrink-0 md:flex-row flex-col md:bg-transparent bg-[#FFFDF8] font-medium border-l-0 md:border-l-[3px] border-gray-900 items-center">
          <button on:click={connectWallet} class=" ${buttonClass} px-8 h-full md:py-0 py-6 md:w-auto w-full flex items-center justify-center 2xl:flex 2xl:font-mono 2xl:font-light">
            {#if isConnected}
                Connected
              {:else}
                Connect your wallet
              {/if}
            </button>
        </div>
    </div>
   </header>