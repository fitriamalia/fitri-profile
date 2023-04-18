<template>

  <div class="intro">
    <div>
      <div class="heading">Fitri Amalia</div>
      <div class="prof">Software Engineer</div>
    </div>

    <div class="image">
      <img src="../assets/profile.jpg" alt = "Fitri Amalia"
           class="rounded-circle img-thumbnail"
           height="300" width="300" />
    </div>

    <hr>

    <div>
      <div class="summary">Saya Fresh graduate lulusan Teknik Informatika dengan pengalaman magang dan kerja sebagai freelance web developer. Memiliki spesialisasi dalam bidang manajemen database dan web developer. Pekerja keras dan mampu bekerja dibawah tekanan. Memiliki jiwa kepemimpinan, manajemen waktu dan komunikasi yang baik. Sedang mencari perusahaan teknologi startup untuk tumbuh bersama dan mengembangkan keahlian dalam bidang IT.</div>
    </div>

    <div class="container text-center">
      <div class="row">
        <div class="col">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
          </svg>
          Pekanbaru, Indonesia
        </div>
        <div class="col">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
          </svg>
          fitriamalia200222@gmail.com
        </div>
      </div>
    </div>

    <footer class="text-white text-center pb-5">
      <p>&copy; 2023 <a href="#" class="text-white fw-bold">FitriAmalia</a> &middot; Created by Fitri Amalia</p>
    </footer>

  </div>

</template>

<style scoped>
.intro {
  background-color: #222222;
  color: white;
  padding-top: 10px;
  padding-left: 20px;
  padding-bottom: 20px;
  padding-right: 20px;
}

.heading {
  font-size: 50px;
  font-weight: bolder;
  text-align: center;
  text-transform: uppercase;
}

.prof {
  font-size: 30px;
  font-weight: lighter;
  text-align: center;
  padding-bottom: 8px;
}

.image {
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
}

.summary {
  font-size: 20px;
  padding-bottom: 15px;
  padding-top: 5px;
  text-align: justify;
}

.container {
  padding-top: 20px;
  font-size: 20px;
}

.text-white {
  padding-top: 100px;
  padding-bottom: 20px;
  font-size: 15pt;
}

</style>
