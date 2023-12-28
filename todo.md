<!-- make single post page -->
<!-- make profile page -->
<!-- make like api and functionality -->

<!-- get db link -->
<!-- get domain (done hostinger)  -->
<!-- make ec2 server -->
<!-- add domain to server -->

npm run build
git add .
git commit -m "build update"
git push origin main

git pull origin main && pm2 restart all && pm2 logs
