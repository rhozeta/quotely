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
          <ion-col class="ion-align-self-end">
            <ion-card v-for="job in jobsList" :key="job" v-bind:value="{jobName: job.name, jobId: job.id, jobQuotes: job.quotes}">
              <ion-item>
                <ion-icon :icon="pin" slot="start"></ion-icon>
                <ion-label><span>{{ job.name }}</span></ion-label>
                <ion-button v-on:click="jobs(job.name, job.quotes)" fill="outline" slot="end">View</ion-button>
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

<script lang="ts">
  import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCol,
    IonGrid,
    IonRow
  } from '@ionic/vue';
  import {
    defineComponent
  } from 'vue';
  import Vue from 'vue'
  import VueRouter from 'vue-router'


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
      IonRow
    },

    methods: {
      jobs(job: string,quotes) {
        this.$router.push({
          name: 'Jobs',
          params: {
            jobName: job,
            quotes: quotes
          }
        })
      console.log(job)
      console.log(quotes)

      }
    },
    data() {
      return {
        jobsList: [
          {id:1, name:"Job 1", updated:"2020-10-24 12:10PM", quotes: [1,2,3,4]},
          {id:2, name:"Job 2", updated:"2020-10-24 12:10PM", quotes: [1,2,3]},
          {id:3, name:"Job 3", updated:"2020-10-24 12:10PM", quotes: [1,2]},
          {id:4, name:"Job 4", updated:"2020-10-24 12:10PM", quotes: [1,2,3,4]},
        
        ],
        jobName: "",
        jobQuotes: [],
        selectedJob: {}
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