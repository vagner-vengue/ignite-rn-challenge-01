import React, { useState } from 'react';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task if it's not empty

    if (!newTaskTitle)
      return;
    
    setTasks([...tasks, { id: new Date().getTime(), title: newTaskTitle, done: false } ]);
  }

  function handleMarkTaskAsDone(id: number) {
    //TODO - mark task as done if exists

    let item = tasks.find(item => item.id === id);

    if (item)
      item.done = ! item.done;
    
    setTasks([...tasks]);
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state

    setTasks(old => old.filter(item => item.id !== id));
  }

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </>
  )
}