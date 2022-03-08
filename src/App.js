import List from './List';
import { useState, useEffect } from 'react';
import './App.css';
import Title from './Title';
function App() {
  const [items, setItem] = useState([])
  useEffect(()=>{
    fetch('https://fakerapi.it/api/v1/books?_quantity=10').then((resp)=>resp.json()).then((data)=>setItem(data.data)).catch((err)=>console.log(err))
  }, [])
  return (
    <main className="app">
      <section>
        <Title content={items}/>
        <List content={items}/>
        <button className="form-control" onClick={()=> setItem([])}>Clear All</button><br/>
      </section>
    </main>
  );
}

export default App;
