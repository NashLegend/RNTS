import BaseData from "./BaseData";
import People from "./People";
/**
 * Created by Pan on 2017/2/8.
 */
export default class Feed extends BaseData{

    id: string;

    verb: string;

    target: BaseData;

    actors: Array<BaseData>;

    actor: People;

    count: number;

    created_time: number;

    updated_time: number;

    card: any;

    ad: any;

    action_text: string;

    attached_info: string;
}