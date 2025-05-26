export default function SearchBar({ handleStockedItems, handleInputChange }) {


    return (
        <div className="search-bar">
            <input placeholder="Search..." type="text" onChange={handleInputChange} />
            <br />
            <input type="checkbox" onChange={handleStockedItems} />Only show products in stock
        </div>
    );
}