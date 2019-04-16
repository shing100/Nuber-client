import React from "react";
import { graphql } from "react-apollo";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../global-styles";
import theme from "../../theme";
import AppPresneter from "./AppPresenter";
import { IS_LOGGED_IN } from "./AppQueries";


// gql 에서 일어날 변화의 대한 데이터
const AppContainer = ({ data }) => (
    <ThemeProvider theme={theme}>
        <>
            <GlobalStyles />
            <AppPresneter isLoggedIn={data.auth.isLoggedIn} />
        </>
    </ThemeProvider>
);

export default graphql(IS_LOGGED_IN)(AppContainer);