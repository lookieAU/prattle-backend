const oci = require('oci-sdk');
const config = require('../config');

class OCI{
    constructor(){
        this.ociConfig = {
            tenancy: config.ociTenancy,
            user: config.ociUser,
            fingerprint: config.ociFingerprint,
            privateKey: config.ociPrivatekey,
            region: config.ociRegion
        };
        this.client = new oci.objectstorage({
            authenticationDetailsProvider: new oci.SimpleAuthenticationDetailsProvider(ociConfig)
        });
    }

    async uploadToOracleCloud(id, objectName, fileContent){
        try{
            const filePath = `user/${id}/${objectName}`;
            const putObjectRequest = {
                namespaceName: config.ociNamespace,
                bucketName: config.ociBucketName,
                objectName: filePath,
                putObjectBody: fileContent,
                conetntLength: fileContent.length
            };
            await this.client.putObject(putObjectRequest);
            return {
                success: true,
                filePath: filePath
            }
        }
        catch(e){
            console.log(e);
            return {
                success: false
            }
        }
    }

    async getFileUrl(filePath){
        try{
            const request = {
                namespaceName: config.ociNamespace,
                bucketName: config.ociBucketName,
                objectName: filePath,
                expiryTime: new Date(Date.now() + 3600 * 1000)
            };
            const response = await this.client.createPreauthenticatedRequest(request);
            return {
                success: true,
                uri: response.preAuthenticatedRequestDetails.fullPath
            };
        }
        catch(e){
            console.log(e);
            return {
                success: false,
            };
        }
    }
}

module.exports = OCI;