<template>
    <div>
      <MainPage/>
    </div>
  </template>
  
  <script>
  // @group 07_01_01
  import MainPage from '@/components/mainPage/main.vue'
  
    export default {
      name: 'index',
      directory:'operation_course',
      props: {
          "교육과정 소개": {
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