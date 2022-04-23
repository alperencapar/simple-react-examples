import React, { useState, useRef } from "react";

const SearchInput = ({ data, placeholder }) => {
	const [inputValue, setInputValue] = useState("");
	const [filteredData, setFilteredData] = useState([]);
	//useState can't register last letter (can't update)
	// that's why i used useRef hook and ref.current.value everywhere i need to use input's value

	const inputRef = useRef("");

	const handleInputChange = () => {
		setInputValue(inputRef.current.value);

		filterValue();
	};

	const filterValue = () => {
		if (inputRef.current.value !== "") {
			const newData = data.filter((value) => {
				return (
					value.first_name
						.toLowerCase()
						.includes(inputRef.current.value.toLowerCase()) ||
					value.last_name
						.toLowerCase()
						.includes(inputRef.current.value.toLowerCase())
				);
			});

			setFilteredData(newData);
		} else if (inputRef.current.value === "") {
			setFilteredData([]);
		}
	};

	return (
		<div className="search-container">
			<div className="input-container">
				<input
					type="text"
					name="search"
					placeholder={placeholder}
					onChange={handleInputChange}
					value={inputValue}
					ref={inputRef}
				></input>
			</div>
			<div className="search-result-container">
				{filteredData &&
					filteredData.slice(0, 10).map((data) => (
						<div key={data.id}>
							{data.first_name} {data.last_name}
						</div>
					))}
			</div>
		</div>
	);
};

export default SearchInput;
