///<reference path="../../../typings/browser.d.ts"/>
import * as Reducers from '../reducers/index';
import * as ReactRedux from 'react-redux';
import {ITodoListPageProps, TodoListPage} from "./todoListPage";
import {ITodoListManagePageProps, TodoListManagePage} from "./todoMngPage";
import {ITodoGridPageProps, TodoGridPage} from "./todoGridPage";
import {ITodoAppProps, TodoApp} from "./todoApp";

import injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();

function selectTodoListPage(state: Reducers.ITodoAppState): ITodoListPageProps {
	'use strict';
	return {
		todoList: state.todos,
		msgs: state.msgs,
	};
}
export const reduxTodoListPage = ReactRedux.connect(selectTodoListPage)(TodoListPage);

function selectTodoListManagePage(state: Reducers.ITodoAppState): ITodoListManagePageProps {
	'use strict';
	return {
		todoList: state.todos,
		msgs: state.msgs,
	};
}
export const reduxTodoListManagePage = ReactRedux.connect(selectTodoListManagePage)(TodoListManagePage);

function selectTodoGridPage(state: Reducers.ITodoAppState): ITodoGridPageProps {
	'use strict';
	return {
		todoList: state.todos,
		msgs: state.msgs,
	};
}

export const reduxTodoGridPage = ReactRedux.connect(selectTodoGridPage)(TodoGridPage);

function selectTodoApp(state: Reducers.ITodoAppState): ITodoAppProps {
	'use strict';
	return {
		todoList: state.todos,
		msgs: state.msgs
	};
}

export const reduxTodoApp = ReactRedux.connect(selectTodoApp)(TodoApp);
