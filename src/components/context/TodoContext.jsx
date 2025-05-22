// វាស្ថិតនៅមេរៀន state manage សម្រាប់ចែកចាយទិន្ន័យឲ្យ component នីមួយៗ
import { createContext,useContext } from "react";
import useTodos from "../../hooks/useTodos";

const TodoContext = createContext() // ហៅមកពី custom hook ដែលមានទិន្ន័យទាំងអស់

export const TodosProvider = ({children})=>{ // សម្រាប់គ្រប់គ្រង់ components ទាំងអស់ ហើយវាដំណើរនៅក្នុង main.jsx
    const todosHook = useTodos()
    return(
        <TodoContext.Provider value={todosHook} >
            {children}
        </TodoContext.Provider>
    )
}

export const useTodosContext = ()=> useContext(TodoContext)