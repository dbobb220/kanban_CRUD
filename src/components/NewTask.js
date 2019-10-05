import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Alert from 'react-bootstrap/Alert'

const schema = Yup.object({
    taskTitle: Yup.string()
        .min(4, 'Task title is too short')
        .max(20, 'Task title is too long')
        .required('Required'),
    taskCategory: Yup.string()
        .min(3, 'Task category is too short')
        .max(20, 'Task category is too long')
        .required('Required'),
    taskDescription: Yup.string()
        .required('Required'),
    taskType: Yup.string()
        .oneOf(['Bug', 'Feature', 'Tech Debt', 'Improvement', 'Research'], 'Required')
        .required('Select a task type')
});

let colorType = {
    Bug: "danger",
    Feature: "success",
    TechDebt: "warning",
    Improvement: "primary",
    Research: "info"
}

const NewTask = (props) => {
    return (
    <div>
        <h3 style={{textAlign:'center'}}>Create Task</h3>
        <Formik
            validationSchema={schema}
            onSubmit={async (values, actions) => {
                let bodySubmit = {
                    title: values.taskTitle,
                    description: values.taskDescription,
                    category: values.taskCategory,
                    status: "isBacklog",
                    type: values.taskType,
                    color: colorType[values.taskType],
                    assignee: null,
                    priority: 3,
                };
                fetch(`/tasks`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(bodySubmit)
                })
                .then(res => res.json())
                .then(data => {
                    let message = `'${data.title}' task added to board`;
                    actions.resetForm();
                    actions.setStatus({alert: <Alert variant="success">{message}</Alert>});
                    props.fetchLoading(true);
                    props.fetchCall('/tasks');
                    props.fetchLoading(false);
                })
                    .catch(err => {
                        let message = `'${values.taskTitle}' task was not added. ${err}`;
                        actions.resetForm();
                        actions.setStatus({alert: <Alert variant="danger">{message}</Alert>});
                    })
                
            }}
            initialValues={{
                taskTitle: '',
                taskCategory: '',
                taskDescription: '',
                taskType: '- Select One -',
                taskColor: '',
            }}
        >
            {({
                handleSubmit,
                handleChange,
                isSubmitting,
                values,
                touched,
                errors,
                status,
                isValid
            }) => (
                <div>
                {status ? status.alert : ''}
                <Form className="new_task" noValidate onSubmit={handleSubmit}>
                    <Form.Group controlId="taskTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control 
                            required
                            type="text" 
                            placeholder="Keep it short!"
                            name="taskTitle"
                            value={values.taskTitle} 
                            onChange={handleChange}
                            isValid={touched.taskTitle && !errors.taskTitle}
                        />
                        {errors.taskTitle && touched.taskTitle ? (
                            <div className="error">{errors.taskTitle}</div>
                        ) : null}
                    </Form.Group>
                    <Form.Group controlId="taskCategory">
                        <Form.Label>Category</Form.Label>
                        <Form.Control 
                            required
                            type="text" 
                            placeholder="Which project/component?" 
                            name="taskCategory"
                            value={values.taskCategory}
                            onChange={handleChange}
                            isValid={touched.taskCategory && !errors.taskCategory}
                        />
                        {errors.taskCategory && touched.taskCategory ? (
                            <div className="error">{errors.taskCategory}</div>
                        ) : null}
                    </Form.Group>
                    <Form.Group controlId="taskDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control 
                            required
                            as="textarea" 
                            rows="3" 
                            name="taskDescription"
                            placeholder="Describe task in one sentence."
                            value={values.taskDescription}
                            onChange={handleChange}
                            isValid={touched.taskDescription && !errors.taskDescription}
                        />
                        {errors.taskDescription && touched.taskDescription ? (
                            <div className="error">{errors.taskDescription}</div>
                        ) : null}
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Type</Form.Label>
                        <Form.Control 
                            required
                            as="select"
                            name="taskType"
                            value={values.taskType}
                            onChange={handleChange}
                            isValid={touched.taskType && !errors.taskType}
                        >
                            <option value="- Select One -" disabled>- Select One -</option>
                            <option id="danger" value="Bug">Bug</option>
                            <option id="success" value="Feature">Feature</option>
                            <option id="warning" value="TechDebt">Tech Debt</option>
                            <option id="primary" value="Improvement">Improvement</option>
                            <option id="info" value="Research">Research</option>
                        </Form.Control>
                        {errors.taskType && touched.taskType ? (
                            <div className="error">{errors.taskType}</div>
                        ) : null}
                    </Form.Group>
                    <Button variant="primary" type="submit" disabled={isSubmitting}>
                        Submit
                    </Button>
                </Form>
                </div>
            )}
        </Formik> 
    </div>
);
}

export default NewTask
