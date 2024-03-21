<template>
    <div>
      <MainPage/>
    </div>
  </template>
  
  <script>
  // @group 06_01_01
  import MainPage from '@/components/mainPage/main.vue'
  
    export default {
      name: 'index',
      directory:'operation_llm-msaez',
      props: {
          "Overview": {
              type: String
          },
          
      },
      components: {
          MainPage
      }
  }
  </script>
  
  <style>
  </style>