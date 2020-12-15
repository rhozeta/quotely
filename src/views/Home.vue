<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Blank</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>

          <ion-title size="large">Hello my assholes`</ion-title>

        </ion-toolbar>
      </ion-header>
<template>
  <!-- Default Searchbar -->
  <ion-searchbar></ion-searchbar>

  <!-- Searchbar with cancel button always shown -->
  <ion-searchbar show-cancel-button="always"></ion-searchbar>

  <!-- Searchbar with cancel button never shown -->
  <ion-searchbar show-cancel-button="never"></ion-searchbar>

  <!-- Searchbar with cancel button shown on focus -->
  <ion-searchbar show-cancel-button="focus"></ion-searchbar>

  <!-- Searchbar with danger color -->
  <ion-searchbar color="danger"></ion-searchbar>

  <!-- Searchbar with value -->
  <ion-searchbar value="Ionic"></ion-searchbar>

  <!-- Searchbar with telephone type -->
  <ion-searchbar type="tel"></ion-searchbar>

  <!-- Searchbar with numeric inputmode -->
  <ion-searchbar inputmode="numeric"></ion-searchbar>

  <!-- Searchbar disabled -->
  <ion-searchbar disabled="true"></ion-searchbar>

  <!-- Searchbar with a cancel button and custom cancel button text -->
  <ion-searchbar show-cancel-button="focus" cancel-button-text="Custom Cancel"></ion-searchbar>

  <!-- Searchbar with a custom debounce -->
  <ion-searchbar debounce="500"></ion-searchbar>

  <!-- Animated Searchbar -->
  <ion-searchbar animated></ion-searchbar>

  <!-- Searchbar with a placeholder -->
  <ion-searchbar placeholder="Filter Schedules"></ion-searchbar>

  <!-- Searchbar in a Toolbar -->
  <ion-toolbar>
    <ion-searchbar></ion-searchbar>
  </ion-toolbar>
</template>

      <ion-grid>
        <ion-row>
          <ion-col>
            Job 1
          </ion-col>
          <ion-col>
            Job 2
          </ion-col>
          <ion-col>
            Job 3
          </ion-col>
          <ion-col>
            Job 4
          </ion-col>
        </ion-row>
      </ion-grid>

      <div id="container">
        <strong>Ready to create an app?</strong>
        <p>Start with these tacos<a target="_blank" rel="noopener noreferrer"
            href="https://ionicframework.com/docs/components">UI Components</a></p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
  import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCol,
    IonGrid,
    IonRow,
    IonSearchBar,

  } from '@ionic/vue';
  import {
    defineComponent
  } from 'vue';

  export default defineComponent({
    name: 'Home',
    components: {
      IonContent,
      IonHeader,
      IonPage,
      IonTitle,
      IonToolbar,
      IonCol,
      IonGrid,
      IonRow,
      IonSearchBar
    }
  });
</script>

<style scoped>
  #container {
    text-align: center;

    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  #container strong {
    font-size: 20px;
    line-height: 26px;
  }

  #container p {
    font-size: 16px;
    line-height: 22px;

    color: #8c8c8c;

    margin: 0;
  }

  #container a {
    text-decoration: none;
  }
</style>