<template>
  <nav
    class="
      navbar
      default-layout-navbar
      col-lg-12 col-12
      p-0
      fixed-top
      d-flex
      flex-row
    "
  >
    <!-- LOGO APP -->
    <div class="navbar-brand-wrapper d-flex align-items-center">
      <!-- <a class="navbar-brand brand-logo" href="index.html">
        <img src="images/logo.svg" alt="logo" class="logo-dark" />
      </a> -->
      <!-- <a class="navbar-brand brand-logo-mini" href="index.html"
        ><img src="images/logo-mini.svg" alt="logo"
      /></a> -->
      <!-- <a class="navbar-brand"><img src="images/Laundry.png" alt=""></a> -->
    </div>
    <!-- END LOGO -->
    <div class="navbar-menu-wrapper d-flex align-items-center flex-grow-1">
      <h5 class="mb-0 font-weight-medium d-none d-lg-flex">
        Welcome {{ name }} Laundry {{ nama_outlet }}!
      </h5>
      <ul class="navbar-nav navbar-nav-right ml-auto">
        <form class="search-form d-none d-md-block" action="#">
          <i class="icon-magnifier"></i>
          <input
            type="search"
            class="form-control"
            placeholder="Search Here"
            title="Search here"
          />
        </form>
        <li class="nav-item">
          <a href="#" class="nav-link"><i class="icon-basket-loaded"></i></a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link"><i class="icon-chart"></i></a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link count-indicator message-dropdown"
            id="messageDropdown"
            href="#"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="icon-speech"></i>
            <span class="count">7</span>
          </a>
          <div
            class="
              dropdown-menu dropdown-menu-right
              navbar-dropdown
              preview-list
              pb-0
            "
            aria-labelledby="messageDropdown"
          >
            <a class="dropdown-item py-3">
              <p class="mb-0 font-weight-medium float-left">
                You have 7 unread mails
              </p>
              <span class="badge badge-pill badge-primary float-right"
                >View all</span
              >
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item preview-item">
              <div class="preview-thumbnail">
                <img
                  src="images/faces/face10.jpg"
                  alt="image"
                  class="img-sm profile-pic"
                />
              </div>
              <div class="preview-item-content flex-grow py-2">
                <p
                  class="preview-subject ellipsis font-weight-medium text-dark"
                >
                  Marian Garner
                </p>
                <p class="font-weight-light small-text">
                  The meeting is cancelled
                </p>
              </div>
            </a>
            <a class="dropdown-item preview-item">
              <div class="preview-thumbnail">
                <img
                  src="images/faces/face12.jpg"
                  alt="image"
                  class="img-sm profile-pic"
                />
              </div>
              <div class="preview-item-content flex-grow py-2">
                <p
                  class="preview-subject ellipsis font-weight-medium text-dark"
                >
                  David Grey
                </p>
                <p class="font-weight-light small-text">
                  The meeting is cancelled
                </p>
              </div>
            </a>
            <a class="dropdown-item preview-item">
              <div class="preview-thumbnail">
                <img
                  src="images/faces/face1.jpg"
                  alt="image"
                  class="img-sm profile-pic"
                />
              </div>
              <div class="preview-item-content flex-grow py-2">
                <p
                  class="preview-subject ellipsis font-weight-medium text-dark"
                >
                  Travis Jenkins
                </p>
                <p class="font-weight-light small-text">
                  The meeting is cancelled
                </p>
              </div>
            </a>
          </div>
        </li>
        <li
          class="
            nav-item
            dropdown
            language-dropdown
            d-none d-sm-flex
            align-items-center
          "
        >
          <a
            class="nav-link d-flex align-items-center dropdown-toggle"
            id="LanguageDropdown"
            href="#"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            <div class="d-inline-flex mr-3">
              <i class="flag-icon flag-icon-us"></i>
            </div>
            <span class="profile-text font-weight-normal">English</span>
          </a>
          <div
            class="dropdown-menu dropdown-menu-left navbar-dropdown py-2"
            aria-labelledby="LanguageDropdown"
          >
            <a class="dropdown-item">
              <i class="flag-icon flag-icon-us"></i> English
            </a>
            <a class="dropdown-item">
              <i class="flag-icon flag-icon-fr"></i> French
            </a>
            <a class="dropdown-item">
              <i class="flag-icon flag-icon-ae"></i> Arabic
            </a>
            <a class="dropdown-item">
              <i class="flag-icon flag-icon-ru"></i> Russian
            </a>
          </div>
        </li>
        <li class="nav-item dropdown d-none d-xl-inline-flex user-dropdown">
          <a
            class="nav-link dropdown-toggle"
            id="UserDropdown"
            href="#"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            <avataaars width="30" height="30"></avataaars>
            <span class="font-weight-normal"> {{ name }} </span></a
          >
          <div
            class="dropdown-menu dropdown-menu-right navbar-dropdown"
            aria-labelledby="UserDropdown"
          >
            <div class="dropdown-header text-center">
              <avataaars width="50" height="50"></avataaars>
              <p class="mb-1 mt-3">{{ nama_outlet }}</p>
              <!-- <p class="font-weight-light text-muted mb-0">
                {{ role }}
              </p> -->
            </div>
            <a class="dropdown-item"
              ><i class="dropdown-item-icon icon-user text-primary"></i> My
              Profile <span class="badge badge-pill badge-danger">1</span></a
            >
            <a class="dropdown-item"
              ><i class="dropdown-item-icon icon-speech text-primary"></i>
              Messages</a
            >
            <a class="dropdown-item"
              ><i class="dropdown-item-icon icon-energy text-primary"></i>
              Activity</a
            >
            <a class="dropdown-item"
              ><i class="dropdown-item-icon icon-question text-primary"></i>
              FAQ</a
            >
            <!-- <a class="dropdown-item"
              ><i class="dropdown-item-icon icon-power text-primary"></i>Sign
              Out</a
            > -->
            <!-- <button type="submit" class="dropdown-item" @click="logout"> -->
            <button @click="logout" type="submit" class="dropdown-item">
              <i class="dropdown-item-icon icon-power text-primary"></i>
              SIGN OUT
            </button>
          </div>
        </li>
      </ul>
      <button
        class="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
        type="button"
        data-toggle="offcanvas"
      >
        <span class="icon-menu"></span>
      </button>
    </div>
  </nav>
</template>

<script>
import Avataaars from "vuejs-avataaars";
export default {
  components: {
    Avataaars,
  },
  data() {
    return {
      name: "",
      nama_outlet: "",
    };
  },
  created() {
    var data = JSON.parse(this.$store.state.dataoutlet);
    var namaoutlet = data.nama;
    this.nama_outlet = namaoutlet;

    var user = JSON.parse(this.$store.state.datauser);
    this.name = user.name;
    this.axios
      .get("http://localhost/laundry_baru_8/public/api/login/check", {
        headers: { Authorization: "Bearer " + this.$store.state.token },
      })
      .then((res) => {
        if (!res.data.success) {
          this.$store.commit("clearToken");
          this.$store.commit("clearUser");
          this.$awal("Error", "Sesi Anda Sudah Habis", "error");
          this.$router.push("/login");
        }
      });
  },
  methods: {
    logout() {
      this.axios
        .post("http://localhost/laundry_baru_8/public/api/logout", {
          headers: { Authorization: "Bearer " + this.$store.state.token },
        })

        .then(() => {
          this.$store.commit("clearToken");
          this.$store.commit("clearUser");
          this.$router.push("/login");
        });
    },
  },
};
</script>

