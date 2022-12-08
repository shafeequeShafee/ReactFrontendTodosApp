import React, { useEffect } from 'react'
import './Todo.css'

import { useState } from 'react'
import { Checkbox, TextField } from '@mui/material'
import Search from './Search'
import Properti from './Properti'
import Parent from './Parent'
import UseEffectComp from './UseEffectComp'
import UseEffectTwo from './UseEffectTwo'
export default function Todo(props) {
    const [user, setUser] = useState('')
    const [toDos, setTodos] = useState([])  /// eth ellam ulla list
    const [currenttoDo, setTodo] = useState('')
    useEffect(() => {

    }, [])  ////  [] EMPTY ANNEKIL NTH CHANGE VENNALLUM VILIKKUM (Virtual domil)

    const saveDetails = () => {
        console.log("hiiiiii", toDos)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            //body: JSON.stringify({ title: 'React POST Request Example' })
            body: JSON.stringify({
                User: user,
                Todos: toDos
            })
        };
        fetch('http://localhost:4000/todos/saveTodos', requestOptions)
            .then(res => res.json())
            .then(data => console.log(data))
        //     localStorage.setItem(JSON.stringify(toDos),"todos")
        //    console.log(localStorage.getItem("todos"),"react") 
    }

    const getByName = () => {
        // GET request using fetch inside useEffect React hook
        fetch(`http://localhost:4000/todos/getTodos/${user}`)
            .then(response => response.json())
            .then(data =>{
               console.log(data[0].Todos)
               setTodos(data[0].Todos)

            }) ;
    }

    return (
        <div className="todoapp">
            <div className="mainHeading">
                <h1>ToDo List</h1>
            </div>
            <div className="subHeading">
                <br />
                <h2>{props.welcomeNote} 🌝 ☕ </h2>
            </div>
            <TextField className='TextField' label="Enter your name" value={user} onChange={(event) => setUser(event.target.value)}></TextField>
            <div className="input">
                <TextField className='TextField' value={currenttoDo} onChange={(event) => setTodo(event.target.value)} id="outlined-basic" label="Outlined" variant="outlined" />
                <i onClick={() => setTodos([...toDos, { id: Date.now(), text: currenttoDo, status: false }])} className="fas fa-plus icon-plus"></i>
            </div>

            <div className="todos">
                {
                    toDos.map((todoObject) => {
                        return (
                            <div className="todo">
                                <div className="left">
                                    <Checkbox className='Checkbox' value={todoObject.status} onChange={(e) => {
                                        console.log("event value", e.target.checked)

                                        setTodos(toDos.filter((obj) => {
                                            if (obj.id === todoObject.id) {
                                                obj.status = e.target.checked
                                                console.log("obj status", obj.status)
                                            }
                                            return obj

                                        }))
                                    }
                                    } name="" id={todoObject.id} />



                                    <p>{todoObject.text}</p>
                                </div>
                                <div className="right">
                                    <i onClick={() => {
                                        setTodos(toDos.filter((obj) => {
                                            if (obj.id === todoObject.id) {
                                                obj = null

                                            }
                                            return obj

                                        }))

                                    }} className="fas fa-times"></i>
                                    
                                    <i onClick={() => {
                                        setTodos(toDos.filter((obj) => {
                                            if (obj.id === todoObject.id) {
                                                obj = null

                                            }
                                            return obj

                                        }))

                                    }} className="fas fa-edit"></i>
                                </div>
                            </div>
                        )

                    })

                }

            </div>



            <button onClick={() => saveDetails()}>save Todos</button>

            <button onClick={() => getByName()}> get by name</button>

            <h1>Active Task</h1>
            <div>
                {
                    toDos.map((ob) => {
                        console.log("map", ob.status)
                        console.log("All todos", toDos)
                        if (ob.status) {
                            return (
                                <div>
                                    <h2>{ob.text} </h2>

                                </div>
                            )
                        }
                        return null


                    })
                }
            </div>

          <Search/>
          <Properti name="Sfq" nickName="king khan"/>
          <Parent/>
          <UseEffectComp/>
          <UseEffectTwo/>
        </div>
    )
}
