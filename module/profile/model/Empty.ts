import BaseData from "./BaseData";
import Types from "./Types";
/**
 * Created by Zhihu on 2017/2/9.
 */
export default class Empty extends BaseData {
    constructor() {
        super();
        this.type = Types.TYPE_EMPTY;
    }
}