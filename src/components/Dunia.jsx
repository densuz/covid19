import React, { Component } from 'react';
import  'bootstrap'
 class Dunia extends Component {
    constructor(props){
        super(props);
        this.state = {
            error : null,
            isLoaded : false,
            summaries : [],
            details : []
        };
    }

    componentDidMount() {
        this.getSummary()
        this.getDetails()
    }

    getSummary = () => {
        fetch("https://api.kawalcorona.com/")
        .then( response => response.json())
        .then(
            // handle the result
            (result) => {
                this.setState({
                    isLoaded : true,
                    summaries : result
                });
            },
            // Handle error
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
            },
        )
    }

    getDetails = () => {
        fetch("https://api.kawalcorona.com/")
        .then( response => response.json())
        .then(
            // handle the result
            (result) => {
                this.setState({
                    isLoaded : true,
                    details : result
                });
            },
            // Handle error
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
            },
        )
    }

    render() {
        const {error, isLoaded, summaries, details} = this.state;
        if(error){
            return <div>Error in loading</div>
        }else if (!isLoaded) {
            return <div>Loading ...</div>
        }else{
            return (
                <div id="content" className="p-4 p-md-5">
                    <h2 className="mb-4">DATA COVID19 - Global</h2>
                    { summaries.map(summary => (
                        <div key={summary.id} className="row">
                            
                            
                        </div>
                    ))}
                    <h4>Sistem Informasi Penyebaran Corona (Covid-19) - Global</h4>
                    <table id="details" className="table table-bordered table-striped">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Country</th>
                                <th scope="col">Last update</th>
                                <th scope="col">Latitude</th>
                                <th scope="col">Longitude</th>
                                <th scope="col ">Confirmed</th>
                                <th scope="col">Deaths</th>
                                <th scope="col">Recovered</th>
                                <th scope="col">Active</th>
                            </tr>
                        </thead>
                        <tbody>
                            { details.map(detail => (
                                <tr key={detail.id}>
                                    <th scope="row">{detail.attributes.Country_Region}</th>
                                    <td>{detail.attributes.Last_Update}</td>
                                    <td>{detail.attributes.Lat}</td>
                                    <td>{detail.attributes.Long_}</td>
                                    <td>{detail.attributes.Confirmed}</td>
                                    <td>{detail.attributes.Deaths}</td>
                                    <td>{detail.attributes.Recovered}</td>
                                    <td>{detail.attributes.Active}</td>
                                </tr>
                            ))}
                        </tbody>
                      </table>
                </div>
            );
        }
    }
}

export default Dunia;
