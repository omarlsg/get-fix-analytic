# Fetch information of the transfers that need to be fixed

[![js-standard-style](https://cdn.rawgit.com/standard/standard/master/badge.svg)](http://standardjs.com)

## Run

    node src/main -s '{date/datetime}' -e '{date/datetime}'
    node src/main -start '{date/datetime}' -end '{date/datetime}'
    
    ex:
    node src/main -s '2020-11-01' -e '2020-11-30' >> outputs/output.csv

    Some valid date/datime formats are:
    * 'YYYY/MM/DD HH:mm:ss' --hours in 24 format
    * 'YYYY/MM/DD'

## Input csv format

    actionId,hash
    ff58bf85-537a-4fc3-beca-9151bdfaa108,15f1797cc457b4551472631c232e35c20fcb183e0d1a55d424a3c607d2ae50e21

## Environment variables

    GCLOUD_PROJECT=
    GOOGLE_APPLICATION_CREDENTIALS= {path to json service account with access to bigquery in project}