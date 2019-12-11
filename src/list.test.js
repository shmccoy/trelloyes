import renderer from 'react-test-renderer';
import STORE from './store'
// make React available
import React from 'react';

//make the ReactDOM available, necessary for rendering the component
import ReactDOM from 'react-dom';

//make the App component available
import List from './list';

const props = { 
    id: "1", 
    header: "List header", 
    cards: [ 
        { id: 'a', title: 'First card', content: 'lorem ipsum' }, 
        { id: 'b', title: 'Second card', content: 'lorem ipsum' }
     ]
     }

//this is the test casea
it('renders without crashing', () => {
    

  // first create a DOM element to render the component into
  const div = document.createElement('div');

  //render the component, this is the actual test, if something is wrong it will fail here
  ReactDOM.render(<List {...props} />, div);

  //clean up code
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
    const tree = renderer
              .create(<List {...props} />)
              .toJSON();
            expect(tree).toMatchSnapshot();  
});