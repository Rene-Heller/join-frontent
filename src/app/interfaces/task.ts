export interface Task {
    title:string,
    description:string,
    assignees: string[],
    dueDate:number,
    priority:string,
    category:string,
    subtask:SubTask[]
}

export interface SubTask {
    description:string,
    done:boolean
}
