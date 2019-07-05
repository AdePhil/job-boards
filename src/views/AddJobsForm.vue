<template>
  <div class="layout">
    <div class=" container mx-auto py-10">
      <h2 class="py-2 text-4xl text-pink-500">Add Jobs</h2>
      <router-link to="/" class="text-pink-500">(Home)</router-link>
      <div v-if="$apollo.loading" class="text-white">
        Loading...
      </div>
      <div
        class="bg-red-100 border border-green-400 text-green-800 px-4 py-3 rounded relative w-full max-w-xl mx-auto my-3"
        role="alert"
        v-if="showSuccess"
      >
        <strong class="font-bold">Success!</strong>
        <span class="block sm:inline"
          >👋 I will publish it and email you over the next 24 hours.
          Redirecting...</span
        >
        <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
          <svg
            class="fill-current h-6 w-6 text-green-900"
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Close</title>
            <path
              d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
            />
          </svg>
        </span>
      </div>
      <div class="w-full max-w-xl mx-auto my-3" v-if="!showSuccess">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2 text-left"
              for="username"
            >
              Title
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              type="text"
              placeholder="Title"
              v-model="title"
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2 text-left"
              for="job-link"
            >
              Job link
            </label>
            <input
              class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="job-link"
              type="text"
              v-model="applyUrl"
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2 text-left"
              for="job-link"
            >
              Company Name
            </label>
            <input
              class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="job-link"
              type="text"
              v-model="companyName"
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2 text-left"
              for="job-link"
            >
              Your Email
            </label>
            <input
              class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="job-link"
              type="text"
              v-model="userEmail"
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2 text-left"
              for="job-link"
            >
              Your Location
            </label>
            <input
              class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="job-link"
              type="text"
              v-model="locationNames"
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2 text-left"
              for="description"
            >
              Description
            </label>
            <textarea
              class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              type="text"
              v-model="description"
            ></textarea>
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              @click.prevent="addAjob()"
            >
              Add
            </button>
            <router-link
              to="/"
              class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Home
            </router-link>
          </div>
        </form>
        <p class="text-center text-gray-500 text-xs">
          &copy;2019 Super jobs.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { postJob } from "../queries.js/index";
export default {
  data() {
    return {
      showSuccess: false,
      loading: false,
      id: "",
      title: "",
      description: "",
      applyUrl: "",
      commitmentId: "",
      companyName: "",
      locationNames: "",
      userEmail: ""
    };
  },
  apollo: {},
  methods: {
    addAjob() {
      this.loading = true;
      const {
        title,
        companyName,
        locationNames,
        userEmail,
        applyUrl,
        description
      } = this;
      this.$apollo
        .mutate({
          // Query
          mutation: postJob,
          variables: {
            title,
            commitmentId: "cjtu8esth000z0824x00wtp1i",
            companyName,
            locationNames,
            userEmail,
            applyUrl,
            description
          }
        })
        .then(response => {
          this.loading = false;
          this.showSuccess = true;
          console.log(response);
          setTimeout(() => {
            this.$router.push("/");
          }, 1500);
        })
        .catch(error => {
          console.log("An Error occured", error.message);
        });
    }
  }
};
</script>
