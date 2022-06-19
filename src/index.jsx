import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from './store/store';
import './index.css';
import App from './App';
import 'ionicons';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <DragDropContext>
        <App />
      </DragDropContext>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
