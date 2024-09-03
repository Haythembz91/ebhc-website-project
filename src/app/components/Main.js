import Link from "next/link";


const Main = ()=>{
    return(
        <div>
            <section>
                <h1 className={"text-center py-4"}>PRÉSENTATION</h1>
                <div className={"container d-md-flex"}>
                    <div className={"col-6 py-3"}>
                        Image
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi delectus dignissimos ea esse et magni maxime perspiciatis recusandae sit ullam.
                        <div>
                            <Link href={"/about"}>Lire la suite</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section>

            </section>
        </div>
    )
}

export default Main