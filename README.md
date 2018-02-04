1. Setup your env using VVV - https://github.com/Varying-Vagrant-Vagrants/VVV
2. Add new project using the WordPress Meta Environment https://github.com/WordPress/meta-environment/blob/master/docs/install.md
3. Add new site eg. 2018.poznan.wordcamp.test (don't forget to update the vhost entry)
4. Go to ``/www/wordpress-meta-environment/meta-repository/wordcamp.org/public_html/wordpress/wp-content/themes/twentyseventeen`` within your VVV local struscture
5. Run these commands
```
git init # since it's not an empty directory
git remote add origin https://github.com/marcinkrzeminski/poznan2018.git
git pull
npm install
gulp
```
6. Start contributing

Note: If you have setup the URL for the new site differently than suggested please change the config in the gulpfile.js
