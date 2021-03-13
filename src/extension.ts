import * as vscode from 'vscode';

import { motivationData } from './messages';

function getRandomElement<T> (array: Array<T>): T {
	const randomKey = Math.floor(Math.random() * array.length);
	return array[randomKey];
}

export function activate (context: vscode.ExtensionContext) {

	const interval: number = Number(vscode.workspace.getConfiguration().get('coding-motivator.motivation-interval'));

	setInterval(() => {
		vscode.window.showInformationMessage(getRandomElement(motivationData.messages));
	}, interval * 1000);
}

export function deactivate () { }
