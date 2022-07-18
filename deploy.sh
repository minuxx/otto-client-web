rm -rf build
npm i
npm run build || exit 1;

cd cdk 

./deploy.sh || exit 1;
