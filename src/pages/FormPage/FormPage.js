import React, {Component} from 'react'
import {reduxForm, Field, FormSection, SubmissionError} from 'redux-form'
import {reduce, isEmpty} from 'lodash'
import styled from 'styled-components'

class FormPage extends Component {
  render() {
    const {handleSubmit} = this.props
    return (
      <form onSubmit={handleSubmit(validate)}>
        <p>Form page</p>
        <FormSection name="parent">
          <Field
            name="card"
            component={InputComponent}
            normalize={val => val.replace(/\D/g, '').slice(0, 16)}
            format={val => {
              return val == null
                ? ''
                : reduce(
                    val,
                    (acc, val, index) => {
                      if (index % 4 === 0) {
                        return acc + ' ' + val
                      } else {
                        return acc + val
                      }
                    },
                    ''
                  )
            }}
          />
          <button type="commit">Commit</button>
        </FormSection>

        <FormSection name="parent">
          <Field
            name="card"
            component={InputComponent}
            normalize={val => val.replace(/\D/g, '').slice(0, 16)}
            format={val => {
              return val == null
                ? ''
                : reduce(
                    val,
                    (acc, val, index) => {
                      if (index % 4 === 0) {
                        return acc + ' ' + val
                      } else {
                        return acc + val
                      }
                    },
                    ''
                  )
            }}
          />
          <button type="commit">Commit</button>
        </FormSection>
      </form>
    )
  }
}

const StyledInput = styled.input`
  border-radius: 4px;
  line-height: 2;
  border: 1px solid #eee;
  border-color: #ffffff;
  display: flex;
`

const Error = styled.p`color: red;`

class InputComponent extends Component {
  render() {
    const {input, meta} = this.props
    return (
      <div>
        <StyledInput {...input} />
        {meta.error != null ? <Error>{meta.error}</Error> : null}
      </div>
    )
  }
}

const validate = (formValues, props) => {
  const error = {}

  if (
    formValues.parent == null ||
    formValues.parent.card == null ||
    formValues.parent.card.length < 16
  ) {
    error.parent = {card: 'Not enough numbers!'}
  }

  if (!isEmpty(error)) {
    throw new SubmissionError(error)
  }
}

export default reduxForm({
  form: 'FormPage'
})(FormPage)
