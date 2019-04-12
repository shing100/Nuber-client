import React from "react";
import { graphql } from "react-apollo";
import AppPresneter from "./AppPresenter";
import { IS_LOGGED_IN } from "./AppQueries";

// gql 에서 일어날 변화의 대한 데이터
const AppContainer = ({ data }) => <AppPresneter isLoggedIn={data.auth.isLoggedIn} />

export default graphql(IS_LOGGED_IN)(AppContainer);