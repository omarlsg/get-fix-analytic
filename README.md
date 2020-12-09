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

## Environment variables

    GCLOUD_PROJECT=
    GOOGLE_APPLICATION_CREDENTIALS= {path to json service account with access to bigquery in project}