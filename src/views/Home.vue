<template>
  <div class="layout">
    <div class=" container mx-auto py-10">
      <h2 class="py-2 text-4xl text-pink-500">Job Boards</h2>
      <router-link to="/jobs/create" class="text-pink-500">(Add)</router-link>
      <div v-if="$apollo.queries.jobs.loading" class="text-white">
        Loading...
      </div>
      <div
        class="border m-6 rounded-lg  bg-white mx-auto max-w-2xl shadow-lg rounded-lg overflow-hidden"
        v-for="job in jobs"
        :key="job.id"
      >
        <div class="sm:flex sm:items-center px-6 py-4 my-4">
          <img
            class="block h-16 sm:h-24 mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0"
            src="/job.png"
            alt=""
          />
          <div class="text-center sm:text-left sm:flex-grow">
            <div class="mb-4">
              <p class="text-xl leading-tight">{{ job.title }}</p>
              <p class="text-sm leading-tight text-grey-dark py-2">
                Apply for
                <span class="bg-purple-500 text-white">
                  &nbsp; {{ job.commitment.title }} &nbsp;
                </span>
                &nbsp; @
                <router-link :to="job.applyUrl" class="text-purple-600">{{
                  job.applyUrl
                }}</router-link>
              </p>
            </div>
            <div class="flex flex-wrap">
              <button
                class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-5 mb-5"
                v-for="tag in job.tags"
                :key="tag.id"
              >
                {{ tag.name }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { jobs } from "../queries.js";

export default {
  apollo: {
    jobs
  }
};
</script>

<style>
.layout {
  background-color: #2d3748;
  min-height: 100vh;
}

img {
  object-fit: contain;
}
</style>
