import React from 'react'

const Form:  React.FunctionComponent<{
    onSubmit: (event: any) => void,
    onChange: (event: any) => void
}> = (props) => {
  return (
    <form onSubmit={props.onSubmit} className="d-flex mt-2">
        <input id="input-anjing" className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={props.onChange}/>
        <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  )
}

export default Form