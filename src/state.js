let state = {
    tasks: [{
        id: 1,
        title: "Add Redux",
        description: "Add redux to projects and pass state/dispatch to components",
        category:"Dev Tool",
        status: {
            isBacklog: true,
            isActive: false,
            isAssigned: false,
            isDone: false,
            isArchived: false
        },
        type: "TechDebt",
        color: "warning",
        assignee: null,
        priority: 3,
        isArchived: false,
    },
    {
        id: 2,
        title: "Create Login Page",
        description: "Add login page with auth and link to DB",
        category:"Sign In",
        status: {
            isBacklog: false,
            isActive: true,
            isAssigned: true,
            isDone: false,
            isArchived: false
        },
        type:"Improvement",
        color:"primary",
        assignee: "John Doe",
        priority: 1,
        isArchived: false
    },
    {
        id: 3,
        title: "Style Framework",
        description: "Research possible frameworks to use for styling the app",
        category:"UX/UI",
        status: {
            isBacklog: false,
            isActive: false,
            isAssigned: true,
            isDone: true,
            isArchived: false
        },
        type:"Research",
        color:"info",
        assignee: "Helen World",
        priority: 5,
        isArchived: false
    },
    {
        id: 5,
        title: "User metrics",
        description: "Allow user to view graphs and tables of their metrics",
        category:"Metrics",
        status: {
            isBacklog: false,
            isActive: false,
            isAssigned: true,
            isDone: true,
            isArchived: false
        },
        type:"Improvement",
        color:"primary",
        assigneeId: 1,
        priority: 1,
        isArchived: false
    },
    {
        id: 6,
        title: "Add Express",
        description: "Express server for functionality",
        category:"Backend",
        status: {
            isBacklog: true,
            isActive: false,
            isAssigned: false,
            isDone: false,
            isArchived: false
        },
        type:"Tech Debt",
        color:"warning",
        assigneeId: 1,
        priority: 1,
        isArchived: false
    },
    {
        id: 7,
        title: "Add MongoDB",
        description: "Integrated database using MongoDB and Mongoose",
        category:"Backend",
        status: {
            isBacklog: true,
            isActive: false,
            isAssigned: false,
            isDone: false,
            isArchived: false
        },
        type:"Tech Debt",
        color:"warning",
        assigneeId: 1,
        priority: 1,
        isArchived: false
    },
    {
        id: 8,
        title: "Add Item",
        description: "Create form to add item",
        category:"Task Creation",
        status: {
            isBacklog: true,
            isActive: false,
            isAssigned: false,
            isDone: false,
            isArchived: false
        },
        type:"Improvement",
        color:"primary",
        assigneeId: 1,
        priority: 1,
        isArchived: false
    }]
}

export default state;