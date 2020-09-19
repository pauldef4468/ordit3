//import React from "react";
import Joi from "joi-browser";
// import Input from "./input";
import PadButton from "./PadButton";
import Form from "react-bootstrap/Form";
//import "react-toastify/dist/ReactToastify.css";

class form {
  constructor(
    data,
    schema,
    errors,
    serverError,
    doSubmit,
    setData,
    setErrors,
    setServerError
  ) {
    this.data = data;
    this.schema = schema;
    this.errors = errors;
    this.serverError = serverError;
    this.doSubmit = doSubmit;
    this.setData = setData; //Sets data state
    this.setErrors = setErrors; //Sets errors state
    this.setServerError = setServerError;
  }
  validate() {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.data, this.schema, options);

    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;

    return errors;
  }
  validateProperty({ name, value }) {
    const obj = { [name]: value };
    // console.log(obj);
    const schema2 = { [name]: this.schema[name] };
    // console.log(schema2);
    const { error } = Joi.validate(obj, schema2);
    return error ? error.details[0].message : null;
  }
  //   handleChange = ({ currentTarget: input }) => {
  handleChange = ({ target: input }) => {
    const errors = { ...this.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.data };
    data[input.name] = input.value;
    this.setData(data);
    this.setErrors(errors);
  };
  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setErrors({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  renderTextArea(name, label, placeholder) {
    return (
      <Form.Group controlId={name}>
        <Form.Label>{label}</Form.Label>
        <Form.Control
          as="textarea"
          value={this.data[name]}
          rows="3"
          name={name}
          placeholder={placeholder}
          onChange={this.handleChange}
        />
      </Form.Group>
    );
  }

  // formatFormGroup(controlIdName, hidden,asCol){
  //   if(!asCol) return <Form.Group controlId={name} hidden={hidden}>
  // }

  renderInput(name, label, type, mutedText, placeholder, hidden, asValue) {
    const error = this.errors[name];
    //const hidden = type === "hidden" ? "hidden" : null;
    return (
      <>
        <Form.Group as={asValue} controlId={name} hidden={hidden}>
          <Form.Label>{label}</Form.Label>
          <Form.Control
            value={this.data[name]}
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={this.handleChange}
          />
          {error && <div className="alert alert-danger">{error}</div>}
          <Form.Text className="text-muted">{mutedText}</Form.Text>
        </Form.Group>
      </>
    );
  }
  renderButton(label, waitingSpinner) {
    return (
      <PadButton
        label={label}
        validate={this.validate()}
        waiting={waitingSpinner}
      ></PadButton>
    );
  }
}

export default form;
