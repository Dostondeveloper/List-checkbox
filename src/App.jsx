import './App.css'
import { useState } from 'react';
import Card from './components/Card'
import { Button, message } from 'antd';

function App() {
  const [inputVal, setInputVal] = useState("");
  const [selectVal, setSelectVal] = useState("");
  const [list, setList] = useState([]);

  const checkItem = (aydi) => {
    let newList = list.map(item => {
      return item.id === aydi ? {...item, isDone: !item.isDone } : item;
    });

    setList(newList);
  };

  return (
    <div className='flex items-center w-full h-screen justify-center'>
      <div className='flex flex-col items-center gap-[10] shadow-xl w-[500px] rounded-lg bg-red-300 p-[20px]'>
        <h1 className='text-center text-[25px] font-semibold mb-[20px]'>
        Shopping List App
        </h1>

        <div className='flex gap-3 items-center'>
          <input value={inputVal} onChange={(e) => setInputVal(e.target.value)} className='rounded-lg px-3 py-2' type="text" placeholder='items title' />
          <select value={selectVal} onChange={(e) => setSelectVal(e.target.value)} className='rounded-lg px-3 py-2' name="" id="">
            <option value="high">High</option>
            <option value="normal">Normal</option>
            <option value="low">Low</option>
          </select>
          <Button type='primary' onClick={() => {if (inputVal.length > 0 && selectVal) {setList([...list, { id: Date.now(), title: inputVal, priority: selectVal, isDone: false},]);
          message.success("Item qoshildi!"); setInputVal("") }
          else message.warning("Inputlarni toldiring");
          }}>Add</Button>
        </div>
        <div className='mt-5 w-full flex flex-col gap-[10px]'>
        {list.map((item) => (
          <Card id={item.id} jumanazar={item.title} pri={item.priority} isDone={item.isDone} checkItem={checkItem} />
        ))}
        </div>
        </div>
    </div>
  );
}

export default App
