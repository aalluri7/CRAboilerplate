import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import store from './redux/store';
import { Provider } from 'react-redux';
import AddTodo from './containers/AddTodo';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          title: 'col1',
          items: ['tiem1', 'item2'],
          headerColor: '#8E6E95'
        },
        {
          title: 'col2',
          items: ['item1', 'item2'],
          headerColor: '#39A59C'
        },
        {
          title: 'col3',
          items: ['tiem1', 'item2'],
          headerColor: '#344759'
        },
        {
          title: 'col4',
          items: ['item1', 'item2'],
          headerColor: '#E8741E'
        }
      ]
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    localStorage.MyColums = JSON.stringify(this.state);
  }

  componentDidMount() {
    console.log(localStorage.MyColums);

    if (localStorage.MyColums) {
      this.setState(JSON.parse(localStorage.MyColums));
    }
    // this.setState(
    //   JSON.parse(
    //     (document.getElementById('root').innerHTML = localStorage.getItem(
    //       'MyColums'
    //     ))
    //   )
    // );
  }

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            //width: '100vw',
            paddingLeft: '25px'
          }}
        >
          {this.state.columns.map((col, i) => {
            return (
              <div
                style={{
                  flexGrow: 1,
                  //  backgroundColor: 'grey',
                  marginRight: '25px'
                }}
              >
                <div
                  style={{ backgroundColor: col.headerColor, color: 'white' }}
                >
                  {col.title}
                </div>
                {col.items.map((x, j) => (
                  <div>
                    {' '}
                    {i !== 0 && (
                      <span
                        onClick={() => {
                          this.setState(s => {
                            const newState = { ...s };
                            newState.columns[i - 1].items.push(
                              newState.columns[i].items[j]
                            );
                            const newitems = [...newState.columns[i].items];
                            newitems.splice(j, 1);
                            newState.columns[i].items = newitems;
                            return { newState };
                          });
                        }}
                      >
                        {'<'}
                      </span>
                    )}{' '}
                    {x}{' '}
                    {i !== this.state.columns.length - 1 && (
                      <span
                        onClick={() => {
                          this.setState(s => {
                            const newState = { ...s };
                            newState.columns[i + 1].items.push(
                              newState.columns[i].items[j]
                            );
                            const newitems = [...newState.columns[i].items];
                            newitems.splice(j, 1);
                            newState.columns[i].items = newitems;
                            return { newState };
                          });
                        }}
                      >
                        {'>'}
                      </span>
                    )}
                  </div>
                ))}

                <div
                  onClick={() => {
                    const text = window.prompt();

                    this.setState(s => {
                      const newState = { ...s };
                      newState.columns[i].items.push(text);
                      return { ...s };
                    });
                  }}
                >
                  Add a card
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Content />
        </Provider>
      </div>
    );
  }
}

export default App;
