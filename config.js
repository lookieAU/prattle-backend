require('dotenv').config();

const config = {
    dbUrl: process.env.DB,
    port: process.env.PORT,
    secretToken: process.env.SECRET,
    nodemailerMail: process.env.MAIL_ADDRESS,
    nodemailerPwd: process.env.MAIL_PWD,
    ociTenancy: process.env.OCI_TENANCY,
    ociUser: process.env.OCI_USER,
    ociFingerprint: process.env.OCI_FINGERPRINT,
    ociRegion: process.env.OCI_REGION,
    ociNamespace: process.env.OCI_NAMESPACE,
    ociBucketName: process.env.OCI_BUCKET_NAME,
    ociServiceName: process.env.OCI_SERVICE_NAME,
    ociSecondLevel: process.env.OCI_SECOND_LEVEL
}

module.exports = config