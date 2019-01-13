import { observable, action, runInAction, computed } from 'mobx';

// export default extendObservable(this, {
//   people: [],
//   loading: false,
//   loadPeople: action( async () => {
//     this.loading = true;
//     const response = await fetch('https://randomuser.me/api/?results=10');
//     const json = await response.json();
//     // this.people = json.results;
//     runInAction(() => {
//       this.people = json.results;
//       this.loading = false;
//     });
//   })
// })

class PeopleStore {
  @observable people = [];
  @observable loading = false;

  @action loadPeople = async () => {
    // this.loading = true;
    const response = await fetch('https://randomuser.me/api/?results=10');
    const json = await response.json();
    this.people = json.results;
    // runInAction(() => {
    //   this.people = json.results;
    //   this.loading = false;
    // });
  }

  @computed get peopleCount() {
    return this.people.length;
  }
}

export default new PeopleStore();