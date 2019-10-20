import React, { Component } from 'react';

import ProjectTask from './ProjectTasks/ProjectTask';

class Backlog extends Component {
	render() {
		const { projectTasks } = this.props;

		const tasks = projectTasks.map(t => (
			<ProjectTask key={t.id} projectTask={t} />
		));

		let todoItems = [];
		let inProgressItems = [];
		let doneItems = [];

		for (let i = 0; i < tasks.length; i++) {
			// console.log(tasks[i]);

			if (tasks[i].props.projectTask.status === 'TODO') {
				todoItems.push(tasks[i]);
			}

			if (tasks[i].props.projectTask.status === 'IN_PROGRESS') {
				inProgressItems.push(tasks[i]);
			}

			if (tasks[i].props.projectTask.status === 'DONE') {
				doneItems.push(tasks[i]);
			}
		}

		return (
			<div className='container'>
				<div className='row'>
					<div className='col-md-4'>
						<div className='card text-center mb-2'>
							<div className='card-header bg-secondary text-white'>
								<h3>TODO</h3>
							</div>
						</div>
						{todoItems}
						{
							// insert tasks here
						}
					</div>
					<div className='col-md-4'>
						<div className='card text-center mb-2'>
							<div className='card-header bg-primary text-white'>
								<h3>In Progress</h3>
							</div>
						</div>
						{inProgressItems}
					</div>
					<div className='col-md-4'>
						<div className='card text-center mb-2'>
							<div className='card-header bg-success text-white'>
								<h3>Done</h3>
							</div>
						</div>
						{doneItems}
					</div>
				</div>
			</div>
		);
	}
}

export default Backlog;