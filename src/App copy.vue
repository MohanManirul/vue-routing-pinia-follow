<script setup>
const users = [
  {
    id: 1,
    name: "Md. Manirul Islam",
    profilePhoto: "https://ui-avatars.com/api/?name=Md+Manirul+Islam&background=random",
    jobTitle: "Full Stack Developer"
  },
  {
    id: 2,
    name: "Ali Siddique",
    profilePhoto: "https://ui-avatars.com/api/?name=Ayesha+Siddiqua&background=random",
    jobTitle: "UI/UX Designer"
  },
  {
    id: 3,
    name: "Tanvir Hasan",
    profilePhoto: "https://ui-avatars.com/api/?name=Tanvir+Hasan&background=random",
    jobTitle: "DevOps Engineer"
  }
];

</script>


<template>

  <div
    class="d-flex justify-content-center align-items-center"
    style="height: 100vh; background-color: #dee2e6"
  >
    <div class="card shadow p-4" style="min-width: 300px">

      <div class="container py-5">
    <div class="row g-4">

      <div class="col-md-4">
        <div class="card h-100 text-center shadow-sm">
          <div class="card-body">
            <img src="https://ui-avatars.com/api/?name=Md+Manirul+Islam&background=random" alt="Md. Manirul Islam" class="rounded-circle mb-3" style="width: 100px; height: 100px; object-fit: cover;">
            <p>Id: 1</p>
            <p>Md. Manirul Islam</p>
            <p>Full Stack Developer</p>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card h-100 text-center shadow-sm border border-danger">
          <div class="card-body">
            <img src="https://ui-avatars.com/api/?name=Ayesha+Siddiqua&background=random" alt="Ali Siddique" class="rounded-circle mb-3" style="width: 100px; height: 100px; object-fit: cover;">
            <p>Id: 2</p>
            <p>Ali Siddique</p>
            <p>UI/UX Designer</p>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card h-100 text-center shadow-sm">
          <div class="card-body">
            <img src="https://ui-avatars.com/api/?name=Tanvir+Hasan&background=random" alt="Tanvir Hasan" class="rounded-circle mb-3" style="width: 100px; height: 100px; object-fit: cover;">
            <p>Id: 3</p>
            <p>Tanvir Hasan</p>
            <p>DevOps Engineer</p>
          </div>
        </div>
      </div>

    </div>
  </div>

    </div>
  </div>
</template>

<style scoped></style>
