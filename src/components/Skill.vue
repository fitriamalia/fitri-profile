<template>
  <div class="intro">
    <div>
      <div class="heading">Program Ability</div>
    </div>

    <div class="skills">
      <ul>
        <li>
          <div class="HTML">
            HTML
          </div>
          <div class="skill_prog">
            <span style="width: 80%; "></span>
          </div>
          <div class="skill_per">80%</div>
        </li>
        <li>
          <div class="CSS">
            CSS
          </div>
          <div class="skill_prog">
            <span style="width: 80%;"></span>
          </div>
          <div class="skill_per">80%</div>
        </li>
        <li>
          <div class="Java">
            Java
          </div>
          <div class="skill_prog">
            <span style="width: 75%;"></span>
          </div>
          <div class="skill_per">75%</div>
        </li>
        <li>
          <div class="JavaScript">
            JavaScript
          </div>
          <div class="skill_prog">
            <span style="width: 70%;"></span>
          </div>
          <div class="skill_per">70%</div>
        </li>
      </ul>
    </div>

    <hr>

    <div>
      <div class="heading">Kemampuan Bahasa</div>
    </div>

    <div class="skills1">
      <ul>
        <li>
          <div class="Bahasa Indonesia">
            Bahasa Indonesia
          </div>
          <div class="skill_prog1">
            <span style="width: 95%; "></span>
          </div>
          <div class="skill_per1">95%</div>
        </li>
        <li>
          <div class="Bahasa Inggris">
            Bahasa Inggris
          </div>
          <div class="skill_prog1">
            <span style="width: 70%;"></span>
          </div>
          <div class="skill_per1">70%</div>
        </li>
      </ul>
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
  padding-bottom: 30px;
}

.skills ul li {
  display: flex;
  margin-bottom: 10px;
  justify-content: space-between;
  align-items: center;
  padding-left: 200px;
  font-size: 20px;
}

.skills ul li .skill_prog {
  width: 60%;
  height: 10px;
  position: absolute;
  float: left;
  padding-left: 100px;
}

.skills ul li .skill_prog span {
  position: absolute;
  height: 100%;
  background: #d4afD9;
  padding-right: 50px;
}

.skill_per {
  padding-right: 200px;
}

.skills1 ul li {
  display: flex;
  margin-bottom: 10px;
  justify-content: space-between;
  align-items: center;
  padding-left: 120px;
  font-size: 20px;
}

.skills1 ul li .skill_prog1 {
  width: 60%;
  height: 10px;
  position: absolute;
  float: left;
  padding-left: 170px;
}

.skills1 ul li .skill_prog1 span {
  position: absolute;
  height: 100%;
  background: #d4afD9;
  padding-right: 50px;
}

.skill_per1 {
  padding-right: 120px;
}

.text-white {
  padding-top: 100px;
  padding-bottom: 20px;
  font-size: 15pt;
}


</style>
