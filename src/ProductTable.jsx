export default function ProductTable({ filteredData, searchedItem }) {
    console.log("in productTable...");

    return (
        <div className="product-table">
            <div className="labels">
                <b>Name</b>
                <b>Price</b>
            </div>
            <table>
                <thead>
                    <tr><th>Fruits</th></tr>
                </thead>
                <tbody>
                    {filteredData
                        .filter((cat) => cat.category === "Fruits").filter((prod) => (prod.name.toLowerCase()).includes(searchedItem.toLowerCase()))
                        .map((product, index) => {
                            return (<tr key={index}><td>{product.name}</td><td>{product.price}</td></tr>);
                        })}
                </tbody>
                <thead>
                    <tr><th>Vegetable</th></tr>
                </thead>
                <tbody>
                    {filteredData
                        .filter((cat) => cat.category === "Vegetables").filter((prod) => prod.name.includes(searchedItem))
                        .map((product, index) => {
                            return (<tr key={index}><td>{product.name}</td><td>{product.price}</td></tr>);
                        })}
                </tbody>
            </table>
        </div >
    );

}