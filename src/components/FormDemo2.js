import alertify from 'alertifyjs'
import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

class FormDemo2 extends Component {

    state = {
        email: "",
        password: "",
        city: "",
        description: ""
    }

    handleChange = (event) => {
        let name = event.target.name
        let value = event.target.value
        this.setState({ [name]: value })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        alertify.success("Kaydınız başarılı olmuştur", 3)
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input
                            name="email"
                            type="email"
                            placeholder="Enter Email"
                            onChange={this.handleChange}></Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input
                            name="password"
                            type="password"
                            placeholder="Password"
                            onChange={this.handleChange}></Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input
                            name="description"
                            type="textarea"
                            placeholder="Your Message"
                            onChange={this.handleChange}></Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for="city">City</Label>
                        <Input 
                            type="select" 
                            name="city"
                            onChange={this.handleChange}>
                                <option>Ankara</option>
                                <option>İstanbul</option>
                                <option>İzmir</option>
                                <option>Bursa</option>
                                <option>Adana</option>
                            </Input>
                    </FormGroup>
                    <Button color="success" type="submit">Send</Button>
                </Form>
            </div>
        )
    }
}
export default FormDemo2