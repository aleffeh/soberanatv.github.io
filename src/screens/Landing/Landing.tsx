import type {NextPage} from "next";
import {Suspense} from "react";

import {api} from "service";
import Image from "next/image";

export const Landing: NextPage = () => {
    const {data} = api.creators.getAll.useQuery()

    return (
        <Suspense fallback={<> Loading ... </>} >
            <main>
                <p>
                    landing page soberana - {data?.length}
                </p>
                <Image src={data?.at(0)?.image ?? ""} width={240} height={240} alt="Imagem de umx camarada"/>
            </main>
        </Suspense>
    );
};