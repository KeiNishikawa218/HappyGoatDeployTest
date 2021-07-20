require('dotenv').config();
const fs = require('fs');
const AWS = require('aws-sdk');
var uuid = require('uuid');

const Canvas = require('canvas')
// Setting Image Constructor
global.Image = Canvas.Image;

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_ACCESS_KEY
});

const uploadFile = (image) => {
    // Read content from the file
    // const fileContent = fs.readFileSync(fileName);
    let fileName = uuid.v4();

    // Setting up S3 upload parameters
    const params = {
        Bucket: process.env.BUCKET_NAME,
        Key: fileName + '_letterImage', // File name you want to save as in S3
        Body: image,
        ContentType: "image/jpeg"
    };

    // Uploading files to the bucket
    s3.upload(params, function(err, data) {
        if (err) {
            // throw err;
            console.log(err);
        }
        console.log(`File uploaded successfully. ${data.Location}`);
    });
};

module.exports = {
    uploadFile: uploadFile
};