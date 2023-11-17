import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));                                                                     
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
class college extends React.Component{
  render(){
    return <h1>Sri Devi college of Engineering</h1>
  }
}
const root1=ReactDOM.createRoot(document.getElementById=("demo"))
root1.render(<college/>)
function Department(){
  return (<div>
  <college/>
  <h2>Ece department</h2>
</div>)
}
const root2=ReactDOM.createRoot(document.getElementById=("demo"))
root2.render(<Department/>)
function section(props){
  return(
    <div>
      <college/>
      <department/>
      <p>section is{props.sec}</p>
      </div>
  )
      } 
      const root3=ReactDOM.createRoot(document.getElementById=("demo"))
      root3.render(<section sec="A"/>)
     function student (){
      const a={
        name:"Harshitha",
        roll:40
      }
      return(
        <div>
          <section sec={a}></section>
        </div>
      )
     }
     const root4=ReactDOM.createRoot(document.getElementById('root'))
     root4.render(<student/>)
     reportWebVitals();  
