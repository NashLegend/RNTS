/**
 * Created by Zhihu on 2017/2/8.
 */
import * as React from "react";
import {
    ListView,
    StyleSheet,
    RecyclerViewBackedScrollView,
    DataSourceAssetCallback,
    View,
    BackAndroid,
    ListViewDataSource
} from "react-native";
import BaseData from "../model/BaseData";
import createView from "../Factory";
import {profile, activities} from "../Mocks";
import People from "../model/People";
import SectionHead from "../model/SectionHead";
import Empty from "../model/Empty";
import Component = React.Component;

let _navigator;
BackAndroid.addEventListener('hardwareBackPress', () => {
    if (_navigator && _navigator.getCurrentRoutes().length > 1) {
        _navigator.pop();
        return true;
    }
    return false;
});

export default class ProfileFragment extends Component<any,any> implements DataSourceAssetCallback {
    source: ListViewDataSource;

    renderRow(rowData: BaseData) {
        return createView(rowData)
    }

    rowHasChanged(r1: any, r2: any) {
        return r1 != r2;
    }

    componentDidMount() {
        this.request()
    }

    request() {
        console.log("request");
        try {
            let all: Array<BaseData> = [];
            let people: People = JSON.parse(profile);
            all.push(people);
            let feeds: Array<BaseData> = JSON.parse(activities).data;
            if (feeds.length > 0) {
                all.push(new SectionHead())
                all = all.concat(feeds);
            } else {
                all.push(new Empty())
            }
            this.setState({
                dataSource: this.source.cloneWithRows(all)
            })
        } catch (err) {
            this.setState({
                dataSource: this.source.cloneWithRows([{title: 'error'}])
            })
        }
    }

    constructor(props: any) {
        super(props);
        this.source = new ListView.DataSource(this);
        this.state = {
            dataSource: this.source
        }
    }

    render() {
        return (
            <View
                style={{flex:1, justifyContent:'center', alignItems: 'stretch', flexDirection:'column',backgroundColor:'#F2F4F7'}}>
                <ListView style={{alignSelf:'stretch'}}
                          renderScrollComponent={()=><RecyclerViewBackedScrollView {...this.props} />}
                          initialListSize={1}
                          renderSeparator={(sectionID, rowID)=><View key={`${sectionID}-${rowID}`} style={{backgroundColor:'#dbdbdb',height:0.5}}/>}
                          dataSource={this.state.dataSource}
                          renderRow={this.renderRow.bind(this)}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});