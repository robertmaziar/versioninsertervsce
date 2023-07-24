"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "versioninsertervsce" is now active!');
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('versioninsertervsce.insertMigrationVersion', () => {
        // The code you place here will be executed every time your command is executed
        insertVersion();
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
// This method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
const zeroPad = (num, places = 2) => String(num).padStart(places, '0');
function insertVersion() {
    const editor = vscode.window.activeTextEditor;
    if (editor) {
        editor.edit(editBuilder => {
            const now = new Date();
            let versionText = `${now.getFullYear()}${zeroPad(now.getMonth() + 1)}${zeroPad(now.getDate())}${zeroPad(now.getHours())}${zeroPad(now.getMinutes())}`;
            editBuilder.replace(editor.selection, versionText);
        });
    }
}
//# sourceMappingURL=extension.js.map