
export default function taskReducer (tasks, action) {
    switch (action.type) {
        case 'edited': {
            return tasks.map(item => {
                if(action.task.id === item.id) {
                    return action.task;
                } else {
                    return item;
                }
            })
        }

        case 'deleted' : {
            return tasks.filter(item => {
                return item.id != id;
                
                
            })
        }
          
    
        default: {
           
          }
    }
}