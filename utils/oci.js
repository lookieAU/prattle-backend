const oci = require('oci-sdk');
const config = require('../config');
const fs = require('fs');

class OCI{
    constructor(){
        const provider = new oci.common.ConfigFileAuthenticationDetailsProvider();
        this.client = new oci.objectstorage.ObjectStorageClient({
            authenticationDetailsProvider: provider
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
                name: `PAR_${filePath}_${Math.floor(10000 + Math.random() * 90000)}`,
                accessType: oci.objectstorage.models.CreatePreauthenticatedRequestDetails.AccessType.ObjectRead,
                timeExpires: new Date(Date.now() + 24 * 60 * 60 * 1000),
                objectName: filePath
            };
            const createPreauthenticatedRequest = {
                bucketName: config.ociBucketName,
                namespaceName: config.ociNamespace,
                createPreauthenticatedRequestDetails: request
            };
            const response = await this.client.createPreauthenticatedRequest(createPreauthenticatedRequest);
            return {
                success: true,
                uri: `https://${config.ociServiceName}.${config.ociRegion}.${config.ociSecondLevel}${response.preauthenticatedRequest.accessUri}`
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