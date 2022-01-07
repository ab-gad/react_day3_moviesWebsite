function SearchInput (props){

    const {setQuery} = props;

    const onChangeHandler = (e) => {
        setQuery(e.target.value)
    }

    return (
        <form className="d-flex">
            <input onChange={(e)=>{onChangeHandler(e)}} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
    )


}

export default SearchInput;