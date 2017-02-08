import BaseData from "./BaseData";
import People from "./People";
/**
 * Created by Pan on 2017/2/8.
 */
export default class Feed {

    numberid: string;

    numberverb: string;

    numbertarget: BaseData;

    numberactors: Array<BaseData>;

    numberactor: People;

    numbercount: number;

    numbercreated_time: number;

    numberupdated_time: number;

    numbercard: any;

    numberad: any;

    numberaction_text: string;

    numberattached_info: string;
}