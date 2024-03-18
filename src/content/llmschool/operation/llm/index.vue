<template>
    <div>
      <MainPage/>
    </div>
  </template>
  
  <script>
  // @group 05_01_01
  import MainPage from '@/components/mainPage/main.vue'
  
    export default {
      name: 'index',
      directory:'operation_llm',
      props: {
          "설치형 LLM": {
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