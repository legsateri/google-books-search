import React, {Component} from 'react';
import './SearchBar.css';

export default class SearchBar extends Component {
    state = {
        searchInput: ''
    }

    handleSearchInput = (searchEvent) => {
        this.setState({
            searchInput: searchEvent.target.value
        });
    }

    render() {
        const {handleSearchSubmit} = this.props;
        const {searchInput} = this.state;

        return (
            <>
                <div className="searchbar_container">
                    <form
                        className="searchbar_form"
                        onSubmit={submitEvent => handleSearchSubmit(submitEvent, searchInput)}>
                        <input
                            className="searchbar_input"
                            type="text"
                            placeholder="Search Books ..."
                            name="search"
                            onChange={this.handleSearchInput} />
                        <button type="submit"><i className="fa fa-search search_button" /></button>
                    </form>
                </div>
            </>
        );
    }
}