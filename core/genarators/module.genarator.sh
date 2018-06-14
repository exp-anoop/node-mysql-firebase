#!bash/sh

# Created by Anoop P R
# Created On Nov 2017

red=`tput setaf 1`
green=`tput setaf 2`
reset=`tput sgr0`
bold=$(tput bold)
normal=$(tput sgr0)


read -p "${green}${bold}Choose module name: ${normal}" name

case "$name" in  
	*\ * )
		echo "${red}${bold}Error: Unexpected string"; exit 1;
	break;;
	*)

		if [ -d "app/$name" ]; then
			echo "${red}${bold}Error: module already exists."; exit 1;
		else
			mkdir "app/$name";
		fi

		touch "app/$name/$name.doc.js";

		cat >  "app/$name/$name.validator.js" <<-EOF
			const { query } = require('express-validator/check');
		EOF

		cat >  "app/$name/$name.router.js" <<-EOF
			const router = require('express').Router();
			const {  } = require('./$name.service');

			const routes = () => {
				
			};
			
			module.exports = { routes, path: '$name' };
		EOF

		cat >  "app/$name/$name.service.js" <<-EOF
			const list = async (req, res) => {
			    return res.status(200).message('success').return([]);
			};

			module.exports = { list };
		EOF
		echo "\n";
		echo "${green}Created: app/$name/$name.doc.js";
		echo "${green}Created: app/$name/$name.service.js";
		echo "${green}Created: app/$name/$name.validation.js";
		echo "${green}Created: app/$name/$name.router.js\n";
		echo "${red}Note: Need to add this module as a dependency in app.module.js\n";

		echo "${green}${bold}----- Stop looking and start coding ;) ------\n";
	;;
esac