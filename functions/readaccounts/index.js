/**
 * Describe Readaccounts here.
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
        logger.info(`Invoking Readaccounts with payload ${JSON.stringify(event.data || {})}`);

        const accName = event.data.accName; 

        const results = await context.org.dataApi.query(`SELECT Id, Name FROM Account Where Name Like '%${accName}%' `);

        logger.info(JSON.stringify(results));

        return results;
    } catch (error) {

        const err = `Error occured -- '${error.message}'`; 
        logger.error('Error occured -- '+ err);

        throw new Error(err); 

    }
    
}
