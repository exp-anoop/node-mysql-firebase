#!/bin/sh

## DB Configuration
## DB Configuration
HOST=localhost
DB_NAME=node_mysql_template
USERNAME=root
PASSWORD=heyitsme
PORT=3306

OUT=./models
CONFIG=./core/genarators/model.genarator.json

## Installing sequelize-auto
if [! npm list -g | grep sequelize-auto]
then
	npm install -g sequelize-auto
fi

if [ ! -d $OUT ]; then
	mkdir -p $OUT;
fi

sequelize-auto -o $OUT -d $DB_NAME -h $HOST -u $USERNAME -p $PORT -x $PASSWORD -e mysql --config $CONFIG