import {type AppType} from "next/app";

import {api} from "utils";
import {GlobalStyle} from "components";


const MyApp: AppType = ({Component, pageProps}) => {
    return (
        <>
            <GlobalStyle/>
            <Component {...pageProps} />
        </>
    )
};

export default api.withTRPC(MyApp);
