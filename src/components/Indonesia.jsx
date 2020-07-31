import React, { Component } from 'react';

class Indonesia extends Component {
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
        fetch("https://api.kawalcorona.com/indonesia/")
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
        fetch("https://api.kawalcorona.com/indonesia/provinsi/")
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
                    <h2 className="mb-4">DATA COVID19 - Indonesia</h2>
                    { summaries.map(summary => (
                        <div key={summary.id} className="row">
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <div className="info-box">
                                    <span className="info-box-icon bg-yellow"><i class="fa fa-group"></i></span>

                                    <div className="info-box-content">
                                        <span className="info-box-text">POSITIF</span>
                                        <span className="info-box-number">{summary.positif}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <div className="info-box">
                                    <span className="info-box-icon bg-green"><i class="fa fa-smile-o"></i></span>
                                    <div className="info-box-content">
                                        <span className="info-box-text">SEMBUH</span>
                                        <span className="info-box-number">{summary.sembuh}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-6 col-xs-12">
                                <div className="info-box">
                                    <span className="info-box-icon bg-red"><i class="fa fa-ambulance"></i></span>
                                    <div className="info-box-content">
                                        <span className="info-box-text">MENINGGAL</span>
                                        <span className="info-box-number">{summary.meninggal}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <h4>Sistem Informasi Penyebaran Corona (Covid-19) - Indonesia</h4>
                    <table id="details" className="table table-bordered table-striped">
                        <thead className="thead-dark">
                          <tr>
                            <th scope="col">Propinsi</th>
                            <th scope="col">Positif</th>
                            <th scope="col">Sembuh</th>
                            <th scope="col">Meninggal</th>
                          </tr>
                        </thead>
                        <tbody>
                            { details.map(detail => (
                                <tr key={detail.id}>
                                    <th scope="row">{detail.attributes.Provinsi}</th>
                                    <td>{detail.attributes.Kasus_Posi}</td>
                                    <td>{detail.attributes.Kasus_Semb}</td>
                                    <td>{detail.attributes.Kasus_Meni}</td>
                                </tr>
                            ))}
                        </tbody>
                      </table>
                </div>
            );
        }
    }
}

export default Indonesia;
