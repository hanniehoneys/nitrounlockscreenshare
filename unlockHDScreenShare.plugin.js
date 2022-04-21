/**
 * @name UnlockHDScreenShare
 * @version 0.0.2
 * @description unlock the ability to share your screen in 1080p
 * @author dlwlrma#0101
 * @source https://github.com/hannieboba/nitrounlockscreenshare/
 *   
 */


module.exports = class unlockHDScreenShare{
     
    constructor() {
        this.userPremiumType = BdApi.findModuleByProps("getCurrentUser").getCurrentUser().premiumType;
    }
     
    start() { 
        BdApi.findModuleByProps("getCurrentUser").getCurrentUser().premiumType = 2;
    }
    
    stop() {
        BdApi.findModuleByProps("getCurrentUser").getCurrentUser().premiumType = this.userPremiumType;
    }
}
