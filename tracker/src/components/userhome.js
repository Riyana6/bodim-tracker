import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

export default class UserHome extends Component {
    state = {
        files: []
      }
    
      fileSelectedHandler = (e) => {
        this.setState({ files: [...this.state.files, ...e.target.files] })
      }
    render() {
        return (
            <MDBContainer>
            <MDBRow>
                <MDBCol md="6">
                    <form>
                        <p className="h4 text-center mb-4">Enter your Boarding Details</p>
                        <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                            Boarding Name
                        </label>
                        <input type="text" id="defaultFormRegisterNameEx" className="form-control" />
                        <br />
                        <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                            Address
                        </label>
                        <input type="email" id="defaultFormRegisterEmailEx" className="form-control" />
                        <br />
                        <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
                            Contact No.
                        </label>
                        <input type="email" id="defaultFormRegisterConfirmEx" className="form-control" />
                        <br />
                        <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
                            Gender
                        </label>
                        <select id = "dropdown">
                            <option value="N/A">Select gender</option>
                            <option value="male">Only for males</option>
                            <option value="female">Only for females</option>
                        </select>
                        <br />
                        <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                            Add Images
                        </label>
                        <input type="file" multiple onChange={this.fileSelectedHandler} />
                        <br/>
                        <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
                            Additional Details
                        </label>
                        <input type="text" id="defaultFormRegisterPasswordEx" className="form-control" />
                        <div className="text-center mt-4">
                            
                            <MDBBtn color="primary" type="submit">
                                Add
                            </MDBBtn>
                        </div>
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
            
        );
    }
}
