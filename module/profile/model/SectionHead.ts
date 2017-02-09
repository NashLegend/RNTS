import BaseData from "./BaseData";
import Types from "./Types";
/**
 * Created by Zhihu on 2017/2/9.
 */
export default class SectionHead extends BaseData {
    constructor() {
        super();
        this.type = Types.TYPE_SECTION_HEAD;
    }
}