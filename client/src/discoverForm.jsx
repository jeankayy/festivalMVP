
import React from 'react'

class DiscoverForm extends React.Component {

  render(){
  return (
    <form>
          Discover
          <select value = {this.props.number} name = "number" onChange = {this.props.handleChange}>
            <option value = {1}>1</option>
            <option value = {5}>5</option>
            <option value = {10}>10</option>
            <option value = {15}>15</option>
          </select> Artists From
          <select name = "festival" value = {this.props.festival} onChange = {this.props.handleChange}>
            <option value = 'ACL 2022 Weekend 1'>ACL 2022 Weekend 1</option>
          </select>
          <button onClick = {this.props.handleFormClick}>
            Go!
          </button>
         </form>
  )
  }

}

export default DiscoverForm;