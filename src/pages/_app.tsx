import {type AppType} from "next/app";

import {api} from "utils";
import {GlobalStyle, Header} from "components";


const MyApp: AppType = ({Component, pageProps}) => {
    return (
        <>
            <GlobalStyle/>
            <Header/>
            <Component {...pageProps} />
        </>
    )
};

export default api.withTRPC(MyApp);
