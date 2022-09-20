/**
 * Describe Deleteaccount here.
 *
 * The exported method is the entry point for your code when the function is invoked. 
 *
 * Following parameters are pre-configured and provided to your function on execution: 
 * @param event: represents the data associated with the occurrence of an event, and  
 *                 supporting metadata about the source of that occurrence.
 * @param context: represents the connection to Functions and your Salesforce org.
 * @param logger: logging handler used to capture application logs and trace specifically
 *                 to a given execution of a function.
 */
 
export default async function (event, context, logger) {

    try {

        logger.info(`Invoking Deleteaccount with payload ${JSON.stringify(event.data || {})}`);

        const accName = event.data.accName ;

        const response = await context.org.dataApi.query(`SELECT Id, Name FROM Account Where Name = '${accName}'`);

        logger.info('response --- '+ JSON.stringify(response) ); 

        const recId = response.records[0].fields.id; 

        logger.info('recId --- '+ JSON.stringify(recId) ); 

        const results = await context.org.dataApi.delete("Account", recId) ;

        logger.info(JSON.stringify(results));

        return results;
        
    } catch (error) {

        const errMsg = `Error occured : '${error.message}'`; 
        logger.error('error msg -- '+error.message);

        throw new Error(errMsg); 
        
    }
    
}
