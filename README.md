## Prerequisites for Salesforce Functions

1. Docker desktop
2. Developer sandbox
3. VS Code
4. Salesforce CLI  (SF + SFDX)
5. Node.js , NPM 


## Steps for building simple function 

1. Create a new project in VS Code

2. Authorize org as dev hub 

3. Create a new scratch org for testing the function

4. Go to root of the project and create function with following cmd:
	  sf generate function --function-name myfunction --language javascript

5. New “functions” directory will by created inside project scaffold

6. Add function logic within index.js 


## Start docker 

1. Open docker desktop
2. Go to VS code 
3. Go to your function folder 
	  cd functions/functionname
4. Start function in container 
	  sf run function start container
5. New docker image will get created for your function
6. Run the image file in docker 


## Create payload

1. Create a new payload.json file under your function’s directory 
	  {"key" : ""}
2. Click on invoke button
3. JSON data is returned in output 


## Reference : 

1. https://github.com/trailheadapps/functions-recipes
2. https://developer.salesforce.com/docs/platform/functions/guide/NODE_README.html
3. https://developer.salesforce.com/docs/platform/functions/guide/set-up.html
4. https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_run_commands_unified.htm#cli_reference_run_function_start_container_unified
5. https://www.salesforceben.com/get-started-with-salesforce-functions/
6. https://developer.salesforce.com/docs/platform/functions/guide/create-function.html






