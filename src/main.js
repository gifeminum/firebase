// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

// Initialize Firebase
var config = {
  apiKey: "AIzaSyA_xKrcZ2nJ2knaOcGx9JOSWpTAIVt4lWc",
  authDomain: "egco427auth-7f186.firebaseapp.com",
  databaseURL: "https://egco427auth-7f186.firebaseio.com",
  projectId: "egco427auth-7f186",
  storageBucket: "egco427auth-7f186.appspot.com",
  messagingSenderId: "63822275031"
};
firebase.initializeApp(config);

window.firebase = firebase
let app

/* eslint-disable no-new */
firebase.auth().onAuthStateChanged((user)=>{
  if(!app){
    app = new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  }
})