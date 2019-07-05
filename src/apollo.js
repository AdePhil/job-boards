import ApolloClient from "apollo-boost";
import Vue from "vue";
import VueApollo from "vue-apollo";

const uri = "https://api.graphql.jobs/";
const apolloClient = new ApolloClient({
  uri
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

Vue.use(VueApollo);

export default apolloProvider;
