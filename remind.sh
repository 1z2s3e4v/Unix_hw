#!/bin/bash

#./remind.sh $minute $hour $day $month $passwd $username $ip $message
crontab -l > /tmp/cron.tmp 
cmd="sshpass -p \"$5\" ssh -o StrictHostKeyChecking=no $6@$7 \"export DISPLAY=:0.0;xcowsay $8\""
#sshpass -p "$5" ssh -o StrictHostKeyChecking=no $6@$7 "export DISPLAY=:0.0;xcowsay $8"
echo "$1 $2 $3 $4 * $cmd" >> /tmp/cron.tmp
crontab /tmp/cron.tmp
rm /tmp/cron.tmp
