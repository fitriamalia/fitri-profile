<template>
  <!--Navigation Bar-->
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Fitri Amalia</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link active" aria-current="page"> <router-link to="/">Profil</router-link></a>
          <a class="nav-link"> <router-link to="Education">Education</router-link></a>
          <a class="nav-link"> <router-link to="Skill">Skill</router-link></a>
          <a class="nav-link"> <router-link to="Personal_Data">Personal Data</router-link></a>
          <a class="nav-link"> <router-link to="Contact_Me">Contact Me</router-link></a>
        </div>
      </div>
    </div>
  </nav>

  <!--Router View-->
  <RouterView/>

</template>

<style scoped>

</style>
