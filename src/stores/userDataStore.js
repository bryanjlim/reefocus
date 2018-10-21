import { observable, decorate } from 'mobx';

class UserDataStore {
    bringWaterBottleCount = 0;
    refuseExtraPackagingCount = 0;
    bringOwnBagCount = 0;
    bringCompostableObjectCount = 0;

    carpoolCount = 0;
    publicTransitCount = 0;
    bikeCount = 0;
    walkCount = 0;

    events = [];
}

decorate(UserDataStore, {
    bringWaterBottleCount: observable,
    refuseExtraPackagingCount: observable,
    bringOwnBagCount: observable,
    bringCompostableObjectCount: observable,
    carpoolCount: observable,
    publicTransitCount: observable,
    bikeCount: observable,
    walkCount: observable,
    events: observable,
});

export default new UserDataStore();