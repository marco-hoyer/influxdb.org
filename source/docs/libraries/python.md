## Python

The [InfluxDB Python library lives on GitHub](https://github.com/influxdb/influxdb-python) thanks to [smly](https://github.com/smly).

## Get and Install

### Manual Installation

    git clone https://github.com/influxdb/influxdb-python.git
    cd influxdb-python
    pip install -r requirements.txt 
    python setup.py install

### Initialization

First, create a new InfluxDB object by connecting to a running instance.

    from influxdb import client as influxdb
    db = influxdb.InfluxDBClient(host, port, username, password, database)

### Available Functions

#### create_database(_database_)

Create database. Requires cluster-admin privileges.

#### delete_database(_database_)

Delete database. Requires cluster-admin privileges.

#### switch_db(_databaseName_)

Switch to another database.

#### switch_user(_username_, _password_)

Change your user-context.

#### write_points(_data_)

Write to multiple time series names.

Example:

    data = [{"points":[[1.1,4.3,2.1],[1.2,2.0,2.0]],"name":"web_devweb01_load","columns":["min1", "min5", "min15"]}]
    db.write_points(data)

#### write_points_with_precision(_data_, _time-precision_='s')

Write to multiple time series names with defined precision.

#### query(_query_, _time-precision_='s', _chunked_=False)

Query for data

Example:

    result = db.query('select min5 from web_devweb01_load;')
    print result
    [{u'points': [[1386001532, 6, 2], [1386001532, 5, 4.3]], u'name': u'web_devweb01_load', u'columns': [u'time', u'sequence_number', u'min5']}]
