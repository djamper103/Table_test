import './App.css';
import React, {Component} from "react";
import LoadingScreen from "./Components/Common/LoadingScreen";
import Table from "./Components/Table/Table";
import _ from 'lodash'
import DetailRow from "./Components/Table/DetailRow";
import ModeSelector from "./Components/ModeSelector/ModeSelector";
import ReactPaginate from "react-paginate";
import TableSearch from "./Components/TableSearch/TableSearch";


class App extends Component {


    state = {
        isModeSelected: false,
        isLoading: false,
        data: [],
        search: '',
        sort: 'asc',
        sortField: 'id',
        row: null,
        currentPage: 0,
    }

    fetchData = async (url) => {
        const response = await fetch(url)
        const data = await response.json()

        this.setState({
            isLoading: false,
            data: _.orderBy(data, this.state.sortField, this.state.sort)
        })
    }


    onSort = (sortField) => {
        let cloneData = this.state.data.concat();
        let sort = this.state.sort === 'asc' ? 'desc' : 'asc';
        let data = _.orderBy(cloneData, sortField, sort)
        this.setState({data, sort, sortField,})
    }

    onRowSelect = (row) => {
        this.setState({row})
    }

    onSelect = (url) => {
        this.setState({
            isModeSelected: true,
            isLoading: true
        })

        this.fetchData(url)
    }

    handleChange = ({selected}) => {
        this.setState({currentPage: selected})

    }
    onSearch = (search) => {
        this.setState({search, currentPage: 0})

    }

    getFilteredData() {
        const {data, search} = this.state

        if (!search) {
            return data
        }

        return data.filter(item => {
            return item['title'].toLowerCase().includes(search.toLowerCase())
        })
    }

    render() {

        const pageSize = 10
        if (!this.state.isModeSelected) {
            return (
                <div className="container">
                    <ModeSelector onSelect={this.onSelect}/>
                </div>
            )
        }

        const filteredData = this.getFilteredData()

        const displayData = _.chunk(filteredData, pageSize)[this.state.currentPage]

        return (
            <div className="container">

                {this.state.isLoading ? <LoadingScreen/> :
                    <>
                        <TableSearch onSearch={this.onSearch}/>
                        <Table
                            data={displayData}
                            onSort={this.onSort}
                            sort={this.state.sort}
                            sortField={this.state.sortField}
                            onRowSelect={this.onRowSelect}
                        />
                    </>
                }
                {
                    this.state.data.length > pageSize
                        ? <ReactPaginate
                            previousLabel={'previous'}
                            nextLabel={'next'}
                            breakLabel={'...'}
                            breakClassName={'break-me'}
                            pageCount={10}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={this.handleChange}
                            containerClassName={'pagination'}
                            activeClassName={'active'}
                            pageClassName='page-item'
                            pageLinkClassName='page-link'
                            previousClassName='page-item'
                            nextClassName='page-item'
                            previousLinkClassName='page-link'
                            nextLinkClassName='page-link'
                            forcePage={this.state.currentPage}
                        />

                        : null
                }
                {

                    this.state.row ? <DetailRow row={this.state.row}/> : null
                }

            </div>
        );
    }
}

export default App;
