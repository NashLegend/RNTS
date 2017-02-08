/**
 * Created by Zhihu on 2017/2/8.
 */

import * as React from 'react';
import {
    ListView,
    StyleSheet,
    RecyclerViewBackedScrollView,
    View,
    BackAndroid,
    ListViewDataSource
} from 'react-native';
import Component = React.Component;
import BaseData from "../model/BaseData";
import createView from "../Factory";

let _navigator;
BackAndroid.addEventListener('hardwareBackPress', () => {
    if (_navigator && _navigator.getCurrentRoutes().length > 1) {
        _navigator.pop();
        return true;
    }
    return false;
});

export default class Profile extends Component<any,any> {
    source: ListViewDataSource;

    renderRow(rowData: BaseData, sectionID: string | number, rowID: string | number, highlightRow?: boolean) {
        return createView(rowData)
    }

    constructor(props: any) {
        super(props);
        this.source = new ListView.DataSource(this);
        let ss: Array<BaseData> = [];
        this.source.cloneWithRows(ss);
    }

    render() {
        return (
            <View style={{flex:1, justifyContent:'center', alignItems: 'stretch', flexDirection:'column'}}>
                <ListView style={{alignSelf:'stretch'}}
                          renderScrollComponent={()=><RecyclerViewBackedScrollView {...this.props} />}
                          initialListSize={1}
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