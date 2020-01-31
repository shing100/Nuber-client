import React from "react";
import { graphql } from "react-apollo";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../global-styles";
import theme from "../../theme";
import AppPresneter from "./AppPresenter";
import { IS_LOGGED_IN } from "./AppQueries.local";


// gql 에서 일어날 변화의 대한 데이터
const AppContainer = ({ data }) => (
    <ThemeProvider theme={theme}>
    <>
        <GlobalStyles />
        <AppPresneter isLoggedIn={data.auth.isLoggedIn} />
        <ToastContainer draggable={true} position={toast.POSITION.BOTTOM_CENTER} />
    </>
    </ThemeProvider>
);

export default graphql(IS_LOGGED_IN)(AppContainer);