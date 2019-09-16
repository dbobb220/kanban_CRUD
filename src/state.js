let state = {
    tickets: [{
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
        assignee: "John Doe",
        priority: 1,
        isArchived: false
    },
    {
        id: 3,
        title: "Select CSS Framework",
        description: "Research possible frameworks to use for styling the app",
        category:"Research",
        status: {
            isBacklog: false,
            isActive: false,
            isAssigned: true,
            isDone: true,
            isArchived: false
        },
        assignee: "Helen World",
        priority: 5,
        isArchived: false
    },
    {
        ID: 4,
        title: "User metrics",
        description: "Allow user to view graphs and tables of their metrics",
        category:"Feature",
        status: {
            isBacklog: false,
            isActive: false,
            isAssigned: true,
            isDone: true,
            isArchived: false
        },
        assigneeId: 1,
        priority: 1,
        isArchived: false
    }]
}

export default state;