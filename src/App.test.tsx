import { describe } from 'vitest';
import App  from './App';
import * as ReactDOM from 'react-dom';
import React from 'react';

describe('App', () => { 

  let container: HTMLDivElement;

  beforeEach(()=>{
    container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(<App/>,container);
  })

  afterEach(()=>{
    document.body.removeChild(container);
    container.remove();
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should have title "Mi DUI es valido?"',()=>
  {
    const title = container.querySelectorAll('h1');
    expect(title[0].textContent).toBe('Mi DUI es valido?');

  });

  it('should have an input text',()=>{
    const input= container.querySelector('input');
    expect(input?.type).toBe('text');
  });


  it('should have a button with text "Verificar"',() => {
    const button = container.querySelectorAll('button');
    expect(button[0].textContent).toBe('Verificar');
  });
  
  /* Lo que demas que se les ocurra que puedan probar */
  it('should have a button',()=>{
    const button= container.querySelector('button');
    expect(button);
  });
  
  it('should have a form',()=>{
    const form= container.querySelector('form');
    expect(form);
  });

})