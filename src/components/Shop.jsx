const data = ["Iphone 12","Iphone 13","Iphone 14", "Iphone 15"]

function Shop () {
    return (
        <>

            <h1>Shop</h1>
            <ul>
                {
                    data.map( (phone) => {
                        return (
                            <>
                                <li> {phone} </li>
                            </>
                        )
                    }
                    )
                }
            </ul>
        </>
    )
}
export default Shop