// const AWS = require("aws-sdk");
// AWS.config.update({region: "ap-south-1"});
// const s3= new AWS.S3();
// const S3_Bucket= "vishalbucket";

// module.exports = {s3, S3_Bucket};

const AWS = require("aws-sdk");

AWS.config.update({
  region: "ap-south-1",
  accessKeyId: "AKIAVHAAOLDIJD3HQN7Y",       // yaha apna AWS Access Key daalo
  secretAccessKey: "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" // yaha apna AWS Secret Key daalo
});

const s3 = new AWS.S3();
const S3_Bucket = "vshalbucket"; // tumhara bucket ka naam

module.exports = { s3, S3_Bucket };
