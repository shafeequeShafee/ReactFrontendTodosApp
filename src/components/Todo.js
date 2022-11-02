import React, { useEffect } from 'react'
import './Todo.css'

import { useState } from 'react'
import { Checkbox, TextField } from '@mui/material'
export default function Todo() {

    const [toDos, setTodos] = useState([])  /// eth ellam ulla list
    const [toDo, setTodo] = useState('')
    useEffect(() => {

    }, [])  ////  [] EMPTY ANNEKIL NTH CHANGE VENNALLUM VILIKKUM (Virtual domil)

    const saveDetails=()=>{
        console.log("hiiiiii", toDos)
    //     localStorage.setItem(JSON.stringify(toDos),"todos")
    //    console.log(localStorage.getItem("todos"),"react") 
    }

    return (
        <div className="todoapp">
            <div className="mainHeading">
                <h1>ToDo List</h1>
            </div>
            <div className="subHeading">
                <br />
                <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
            </div>
            <div className="input">
                <TextField className='TextField' value={toDo} onChange={(event) => setTodo(event.target.value)} id="outlined-basic" label="Outlined" variant="outlined" />
                <i onClick={() => setTodos([...toDos, { id: Date.now(), text: toDo, status: false }])} className="fas fa-plus icon-plus"></i>
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
                                                obj.status =  e.target.checked
                                                console.log("obj status", obj.status)
                                            }
                                            return obj

                                        }))
                                    }
                                    } name="" id={todoObject.id} />



                                    <p>{todoObject.text}</p>
                                </div>
                                <div className="right">
                                    <i onClick={()=>{
                                        setTodos(toDos.filter((obj) => {
                                            if (obj.id === todoObject.id) {
                                                obj =null
                                               
                                            }
                                            return obj

                                        }))

                                    }} className="fas fa-times"></i>
                                </div>
                            </div>
                        )

                    })

                }

            </div>



            <button onClick={()=>saveDetails()}>save Todos</button>

            <h1>Active Task</h1>
            <div>
                {
                    toDos.map((ob) => {
                        console.log("map",ob.status)
                        console.log("All todos",toDos)
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


        </div>
    )
}
