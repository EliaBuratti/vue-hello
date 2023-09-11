/* Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa inserendo il percoso in una propietá dell'oggetto restituito dalla funzione data. */


/************************************* 
                 VueJs 
*************************************/

const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Benvenuto nel fantastico mondo di Vue!! 😎',
      image: 'https://repository-images.githubusercontent.com/532068847/b16198ce-2a00-4656-90c5-9edc2b37579b',
    }
  }
}).mount('#app')