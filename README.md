# Revit Bauteilgenerator
Applikation zum Anlegen von BIM Bauteilen. Es können vorgegebene Parameter gewählt werden, wobei eine Validierung auf eine unzulässige Kombinationen und weitere Kriterien durchgeführt wird. Aus den eingegebenen Daten wird eine JSON Datei erstellt, welche anschließen via Dynamo in Revit importiert wird.

## Installation
* `npm install`
* `npm start` => startet app => Strg + Klick auf Link im CLI
* `npm test` => startet app. Automatischer Neustart bei Änderung an main.js)
* `npm install-rel` => node node-windows install Revit-Tools
* `npm uninstall-rel` => node node-windows uninstall Revit-Tools
* `npm install-dev` => node node-windows install Revit-Tools-Dev
* `npm uninstall-dev` => node node-windows uninstall Revit-Tools-Dev