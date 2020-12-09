const queryBigquery = require('../shared/db/bigquery')
const { parse } = require('json2csv');


const getFixAction = async ({ start, end }) => {

    const query =
        `
    SELECT
        *
    FROM
        \`minka-ach-dw.ach_manual_adjustments.manual_reverse_today\`
    WHERE
        created BETWEEN '`+ start + `' AND '` + end + `' 
    `;

    let results = await queryBigquery(query);

    let inCSV = bigqueryToCsv(results);

    console.log(inCSV);

}


const bigqueryToCsv = bqResults => {
    if(bqResults.length>0) {
        const fields = Object.keys(bqResults[0]);
        const opts = { fields };

        return parse(bqResults, opts);
    }
    return "No se encontraron CUS para el periodo seleccionado";
}



module.exports = getFixAction
