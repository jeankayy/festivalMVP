
import React from 'react'

class DiscoverForm extends React.Component {

  render(){
  return (
    <form className = 'discover-form'>
          Discover Artists From
          <br/>
          <select name = "festival" value = {this.props.festival} onChange = {this.props.handleChange}>
            <option value = 'ACL 2022 Weekend 1'>ACL 2022 Weekend 1</option>
          </select>
          &nbsp; &nbsp;
          <button onClick = {this.props.handleFormClick}>
            Go!
          </button>
         </form>
  )
  }

}

export default DiscoverForm;