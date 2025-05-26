import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import data from './data-mockup';
import { useState } from "react";

console.log(data);

export default function FilterableProductTable() {

    //const filteredData = data;

    const [stockedItems, setStockedItems] = useState(data);
    const [searchedItem, setSearchedItem] = useState('');

    function handleStockedItems(event) {
        //console.log("in handleStockedItems");
        //console.log(event.target.checked);
        if (event.target.checked) {
            let stockedItemsOnly = data.filter((item) => item.stocked === true).map((item) => {
                console.log(item);
                return item;
            });

            //console.log("veci na sklade:");
            //console.log(result);
            setStockedItems((stockedItems) => { return stockedItemsOnly });
        } else {
            setStockedItems((stockedItems) => { return data });
        }
    }

    function handleInputChange(event) {
        console.log("in function handleChange in Searchbar");
        console.log(event);
        setSearchedItem((previousItem) => { return event.target.value });
    }

    return (
        <div className="filterable-product-table">
            <SearchBar handleStockedItems={handleStockedItems} handleInputChange={handleInputChange} />
            <ProductTable filteredData={stockedItems} searchedItem={searchedItem} />
        </div>
    );
}