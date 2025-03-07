# Revit Bauteilgenerator
Applikation zum Anlegen von BIM Bauteilen. Es können vorgegebene Parameter gewählt werden, wobei eine Validierung auf eine unzulässige Kombinationen und weitere Kriterien durchgeführt wird. Aus den eingegebenen Daten wird eine JSON Datei erstellt, welche anschließen via Dynamo in Revit importiert wird.

## Installation manuell
* `npm install`
* `npm start` => startet app => Strg + Klick auf Link im CLI
* `npm install-app` => node node-windows.js install Revit-Tools => app wird als eigener Windows Prozess gestartet.
* `npm uninstall-dev` => node node-windows uninstall Revit-Tools => Windows Prozess wird deinstalliert.

In package.json muss `"Vorlageversion": "0.0"` und `"portNumber": "5223"` eingetragen werden.

## Update via Release Pipeline
* `"Vorlageversion": "0.0"` und `"portNumber": "5223"` müssen in package.json eingetragen sein. 
* Pipeline Main oder DEV starten
* Release: Create Release `update PROD on ATSRVBTK001` starten. 
    * `DEV`, `PROD` oder `TEST` bei Variable installationFolder wählen. 
    * Entsprechendes Artifact wählen.
* Deploy startet automatisch um 23:00 andernfalls manuell starten.