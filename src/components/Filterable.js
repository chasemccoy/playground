import React from 'react'

class Filterable extends React.Component {

  render() { 
    const { options, onChange, children } = this.props

    const FilterComponent = () => (
      <ul>
        {options.map(option => (
          <li key={option}>
            <button onClick={() => onChange(option)}>{option}</button>
          </li>
        ))}
      </ul>
    )

    return children(FilterComponent)
  }
}

export default Filterable