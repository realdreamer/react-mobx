import React from 'react';
import { inject, observer } from 'mobx-react';

@inject('PeopleStore')
@observer
class People extends React.Component {
  componentDidMount() {
    this.props.PeopleStore.loadPeople();
  }
  render() {
    const { PeopleStore } = this.props;
    if(PeopleStore.loading) {
      return (<div>Loading...!</div>)
    }
    return (
      <div>
        <p>Total people : { PeopleStore.peopleCount }</p>
      { PeopleStore.people.map( ppl => (
        <h4>{`${ppl.name.first} ${ppl.name.last}`}</h4>
      ) ) }
      </div>
    );
  }
}

export default People;
