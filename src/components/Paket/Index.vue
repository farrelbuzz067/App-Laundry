<template>
  <div class="container-scroller">
    <div class="container-fluid page-body-wrapper">
      <sidebar-component></sidebar-component>
      <navbar-component></navbar-component>
      <div class="main-panel">
        <div class="content-wrapper">
          <br /><br />
          <div class="row purchace-popup">
            <div class="col-lg-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Our Paket</h4>
                  <table class="table table-hover text-center">
                    <thead>
                      <tr>
                        <th>ID Paket</th>
                        <th>Jenis</th>
                        <th>Harga</th>
                        <th>Kegiatan</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(p, index) in paket" :key="index">
                        <td>
                          {{ index + 1 }}
                        </td>
                        <td>
                          {{ p.jenis }}
                        </td>
                        <td>
                          {{ p.harga }}
                        </td>
                        <td>
                          <button
                            type="button"
                            class="btn btn-inverse-primary btn-rounded btn-icon"
                          >
                            <router-link
                              :to="{
                                name: 'editpaket',
                                params: {
                                  id: p.id_paket,
                                  params: { id: p.id_paket },
                                },
                              }"
                            >
                              <i class="icon-settings"></i>
                            </router-link>
                          </button>
                          &nbsp;
                          <button
                            type="button"
                            class="btn btn-inverse-success btn-rounded btn-icon"
                          >
                            <router-link
                              :to="{
                                name: 'detailpaket',
                                params: {
                                  id: p.id_paket,
                                  params: { id: p.id_paket },
                                },
                              }"
                            >
                              <i class="icon-info"></i>
                            </router-link>
                          </button>
                          &nbsp;
                          <button
                            type="button"
                            class="btn btn-inverse-danger btn-rounded btn-icon"
                            @click="deletePaket(p.id_paket)"
                          >
                            <i class="icon-ban"></i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <br />
                  <router-link
                    type="button"
                    class="btn btn-primary btn-rounded btn-fw"
                    :to="{ name: 'tambahpaket' }"
                  >
                    <i class="icon-cloud-upload btn-icon-prepend"></i>
                    Add Paket
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer-component></footer-component>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      paket: {},
    };
  },
  created() {
    var data = JSON.parse(this.$store.state.datauser);
    var role = data.role;
    if (role == "kasir" || role == "owner") {
      this.$swal("Failed", "Anda Tidak Dapat Mengakses Halaman Ini", "error");
      this.$router.push("/");
    }

    this.axios
      .get("http://localhost/laundry_baru_8/public/api/get_paket", {
        headers: { Authorization: "Bearer" + this.$store.state.token },
      })
      .then((res) => {
        this.paket = res.data;
      });
  },
  methods: {
    deletePaket(id_paket) {
      this.$swal({
        title: "Are you sure?",
        text: "You can't revert your action",
        type: "Warning",
        showCancelButton: true,
        confirmButtonText: "Yes Delete it!",
        cancelButtonText: "No, Keep it!",
        showCloseButton: true,
        showLoaderOnConfirm: true,
      }).then((result) => {
        if (result.value) {
          this.$swal(
            "Deleted",
            "You successfully deleted this file",
            "success",
            this.axios
              .delete(
                `http://localhost/laundry_baru_8/public/api/delete_paket/${id_paket}`,
                {
                  headers: {
                    Authorization: `Bearer ` + this.$store.state.token,
                  },
                }
              )
              .then((result) => {
                if (result.data.success) {
                  this.$swal("Success", result.data.message, "success");
                  let i = this.member
                    .map((item) => item.id_paket)
                    .indexOf(id_paket);
                  this.member.splice(i, 1);
                }
              })
              .catch(() => {
                this.$swal("Cancelled", "Your Data Is Still Intact", "info");
              })
          );
        } else {
          this.$swal({
            title: "Cancelled",
            text: "Your Data Is Still Intact",
            type: "Warning",
            confirmButtonText: "Yes Delete it!",
            cancelButtonText: "No, Keep it!",
          });
        }
      });
    },
  },
};
</script>