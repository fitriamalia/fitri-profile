<template>

  <div class="intro">
    <div>
      <div class="heading">Contact Me</div>
    </div>

    <div class="row justify-content-center">
      <div class="col-md-6">
        <form>
          <div class="mb-3">
            <label for="name" class="form-label">Nama</label>
            <input type="text" class="form-control" id="name" name="name" required>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" name="email" required>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Subjek</label>
            <input type="email" class="form-control" id="email" name="email" required>
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">Pesan</label>
            <textarea class="form-control" id="message" rows="3" name="message" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary btn-kirim">Kirim</button>
        </form>
      </div>
    </div>

    <br>
    <hr>

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

.btn {
  background-color: white;
  -webkit-text-fill-color: #181818;
  font-weight: bolder;
}

.text-white {
  padding-top: 100px;
  padding-bottom: 20px;
  font-size: 15pt;
}

</style>