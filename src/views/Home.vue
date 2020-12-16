<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>All Jobs</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>

          <ion-title size="large">Hello my assholes`</ion-title>

        </ion-toolbar>
      </ion-header>

      <!-- Search Bar -->
      <ion-searchbar animated></ion-searchbar>
      <ion-grid>
        <ion-row>
              <ion-menu side="start" class="my-custom-menu" menu-id="first" content-id="main">
            <ion-header>
              <ion-toolbar color="primary">
                <ion-title size="large">Start Menu</ion-title>
              </ion-toolbar>
            </ion-header>
            <ion-content>
              <ion-list>
                <h2 size = "large" color = "primary">Menu</h2>
                <ion-item>Recent Quotes</ion-item>
                <ion-item>Awaiting Approval</ion-item>
                <ion-item>Awaiting Funds</ion-item>
                <ion-item>Users</ion-item>
                <ion-item>Contact Us</ion-item>
              </ion-list>
            </ion-content>
          </ion-menu>
          <ion-router-outlet id="main"></ion-router-outlet>
          <ion-col class="ion-align-self-end">
            <ion-card v-for="job in jobsList" :key="job"
              v-bind:value="{jobName: job.name, jobId: job.id, jobQuotes: job.quotes, jobVendors: job.vendors.vendor}">
              <ion-item>
                <ion-icon :icon="pin" slot="start"></ion-icon>
                <ion-label><span>{{ job.name }}</span></ion-label>
                <ion-button v-on:click="jobs(job.name, job.vendors)" fill="outline" slot="end">View</ion-button>
              </ion-item>
              <ion-card-content>
                5 quotes, last updated {{job.updated}}
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>

    </ion-content>
  </ion-page>
</template>

<style>
  .my-custom-menu {
    --width: 300px;
  }
</style>

<script lang="ts">
  import {
    IonContent,
    IonHeader,
    IonPage,
    IonItem,
    IonTitle,
    IonMenu,
    IonList,
    IonToolbar,
    IonRouterOutlet,
    menuController,
    IonCol,
    IonGrid,
    IonRow
  } from '@ionic/vue';
  import {} from 'vue';
  import Vue from 'vue'
  import VueRouter from 'vue-router'
  import {
    defineComponent
  } from 'vue'



  export default defineComponent({
    name: 'Home',
    components: {
      IonContent,
      IonHeader,
      IonRouterOutlet,
      IonItem,
      IonMenu,
      IonPage,
      IonList,
      IonTitle,
      IonToolbar,
      IonCol,
      IonGrid,
      IonRow,
    },

    methods: {
      jobs(job, vendors) {
        this.$router.push({
          name: 'Jobs',
          params: {
            jobName: job,
            vendors: vendors

          }
        })
        console.log(job)
        console.log(vendors)

      }
    },
    openCustom() {
      menuController.enable(true, 'custom');
      menuController.open('custom');
    },

    data() {
      return {
        jobsList: [
        { 
          id:1, 
          name:"Job 1", 
          updated:"2020-10-24 12:10PM", 
          vendors: 
            [ {vendorName: "Sage Electric", quotes: [1,2,3]}, 
              {vendorName: "Dog Electric", quotes: [1,2,3]}
        ]},
        { 
          id:2, 
          name:"Job 2", 
          updated:"2020-10-24 12:10PM", 
          vendors: 
            [ {vendorName: "Tag Electric", quotes: [1,2,3]}, 
              {vendorName: "Bag Electric", quotes: [1,2,3]},
              {vendorName: "Rag Electric", quotes: [1,2,3,4]}
        ]}
       
        ]
      }
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