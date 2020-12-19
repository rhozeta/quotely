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
          <ion-buttons slot="start"></ion-buttons>
          <ion-menu side="start" class="my-custom-menu" menu-id="first" content-id="main">
            <ion-header>
              <ion-toolbar color="primary">
                <ion-title size="large">Start Menu</ion-title>

              </ion-toolbar>
            </ion-header>
            <ion-content>
              <ion-list>

                <h2 size="large" color="primary">Main Menu</h2>
                <ion-menu-button class="custom-menu-button">Create New Quote</ion-menu-button>
                <ion-menu-button>Recent Quotes</ion-menu-button>
                <ion-menu-button>Awaiting Approval</ion-menu-button>
                <ion-menu-button>Awaiting Funds</ion-menu-button>
                <ion-menu-button>Users</ion-menu-button>
                <ion-menu-button>Contact Us</ion-menu-button>
              </ion-list>
            </ion-content>
          </ion-menu>
          <ion-router-outlet id="main"></ion-router-outlet>
          
          <ion-col class="ion-align-self-end">
          
            <ion-card v-for="job in jobsList" :key="job">
              <ion-item>
                <ion-icon :icon="pin" slot="start"></ion-icon>
                <ion-label><span>{{ job.name }}</span></ion-label>
                <ion-button v-on:click="jobs(job.name, job.id, job)" fill="outline" slot="end">View</ion-button>
              </ion-item>
              <ion-card-content>
                {{ job.vendors.length }} vendors, last updated {{job.updated}}
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

  .custom-menu-button {
    --border-block-start: 800px;
    --border-block-end: 800px;
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
  } from 'vue';




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
      jobs(name, id, jobObj) {
        this.$router.push({
          name: 'Jobs',
          params: {
            jobName: name,
            jobNum: id,
            job: jobObj as object,
            vendors: jobObj.vendors
  
            
          }
        })

        console.log(jobObj.vendors)
        console.log(jobObj)

      }
    },
    openCustom() {
      menuController.enable(true, 'custom');
      menuController.open('custom');
    },

    data() {
      return {
        jobsList: [{
            id: 0,
            name: "Downtown Arcade Refresh",
            updated: "2020-10-24 12:10PM",
            vendors: [{
                vendorName: "Sage Electric",
                quotes: [1, 2, 3]
              },
              {
                vendorName: "Dog Electric",
                quotes: [1, 2, 3]
              }
            ]
          },
          {
            id: 1,
            name: "Taunton Road Condo Complex",
            updated: "2020-10-24 12:10PM",
            vendors: [{
                vendorName: "Tag Electric",
                quotes: [1, 2, 3]
              },
              {
                vendorName: "Bag Electric",
                quotes: [1, 2, 3]
              },
              {
                vendorName: "Rag Electric",
                quotes: [1, 2, 3, 4]
              }
            ]
          }

        ]
 
      }
    },
    computed: {
      groupedJobs(){
        const jobs = this.jobsList
        return jobs.chunk(this.jobs, 3)
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