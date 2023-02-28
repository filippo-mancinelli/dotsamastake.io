<script>
import { ApiPromise, WsProvider } from '@polkadot/api';
import { isWeb3Injected, web3Accounts, web3AccountsSubscribe, web3Enable } from '@polkadot/extension-dapp';
import { onMount, onDestroy } from 'svelte';
import { writable, derived } from 'svelte/store';
import Dropdown from 'sv-bootstrap-dropdown';

//check if the variable is already in the local cache and put it inside the store
export let isConnected = writable(localStorage.getItem('isConnected') === 'true');
let showButton = writable(localStorage.getItem('isConnected') === 'true');
let buttonColors = writable('');
let unsubscribe;
let dropdownTrigger;

//reactive block that updates the colors of the button whenever 'isConnected' changes
$: {
  if($isConnected) {
    isConnected.set(true);
    console.log($isConnected)
    buttonColors.set('text-white bg-zinc-900');
    showButton.set(true);
  } else {
    isConnected.set(false);
    console.log($isConnected)
    buttonColors.set('text-black bg-[#FFFDF8]');
    showButton.set(false);
  }
}

async function connectWallet() {
  let extension = await web3Enable('dotsamastake.io');
  
  if (extension.length > 0) { //check if the extension is installed

    // we subscribe to any account change and log the new list. We also check if there is no account connected so we can update isConnected acccordingly
    unsubscribe = await web3AccountsSubscribe(( injectedAccounts ) => { 
        injectedAccounts.map(( accounts ) => {
            console.log(accounts.address); 
        });

        if(injectedAccounts.length === 0) {
          isConnected.set(false);
          console.log($isConnected)
        } else {
          isConnected.set(true);
          console.log($isConnected)
        }
    });

  } else {
    console.log('Polkadot JS Wallet Extension is not installed, or user rejected to connect');
  }
}

function disconnectWallet() {
  isConnected.set(false);
}

//when the component is mounted, it add an event listener waiting for the page to be refreshed/closed, 
//and before the unload it saves the connection status in the local cache
onMount(() => {
    window.addEventListener('beforeunload', () => {
      localStorage.setItem('isConnected', String($isConnected))
    });
  });

//when the component is destroyed we don't need anymore to listen to account changes
onDestroy(() => {
  unsubscribe && unsubscribe();
});


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
          {#if !$isConnected}
            <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" on:click={connectWallet} class="{$buttonColors} px-8 h-full md:py-0 py-6 md:w-auto w-full flex items-center justify-center 2xl:flex 2xl:font-mono 2xl:font-light">
                  Connect your wallet
            </button>
          {/if} 

            {#if $isConnected}
              <Dropdown triggerElement={dropdownTrigger}>
                <button type="button" class="{$buttonColors} px-8 h-full md:py-0 py-6 md:w-auto w-full flex items-center justify-center 2xl:flex 2xl:font-mono 2xl:font-light" bind:this={dropdownTrigger}>
                    Connected
                </button>
                <div slot="DropdownMenu">
                    <button on:click={disconnectWallet} class="dropdown-item" type="button">Disconnect</button>
                </div>
                </Dropdown>
            {/if}
        </div>

    </div>
    
   </header>


   <style>
    @import url("https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css");
  </style>