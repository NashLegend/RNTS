///<reference path="node_modules/@types/react-native/index.d.ts"/>
import * as React from 'react'
import {
    StyleSheet,
    View,
    ListView,
    ListViewDataSource,
    Navigator,
    RecyclerViewBackedScrollView,
    DataSourceAssetCallback,
} from 'react-native';

import Item from './Item'
import ReactElement = React.ReactElement;

interface Props {
    navigator: Navigator
}

interface State {
    dataSource: ListViewDataSource
}

export default class ListPanel extends React.Component<Props,State> implements DataSourceAssetCallback {
    source: ListViewDataSource;
    callback: DataSourceAssetCallback;

    constructor(props: Props) {
        super(props);
        this.source = new ListView.DataSource(this);
        let ss: Array<any> = [];
        for (let i = 0; i < 3; i++) {
            ss.push({title: 'what you see before request done' + i});
        }
        this.state = {
            dataSource: this.source.cloneWithRows(ss)
        }
    }

    rowHasChanged(r1, r2) {
        return r1 !== r2;
    }

    componentDidMount(): void {
        this.startRequest();
    }

    async startRequest() {
        try {
            let response: Response = await fetch('http://facebook.github.io/react-native/movies.json');
            let responseJson: any = await response.json();
            let arr: Array<any> = responseJson.movies;
            arr = arr.concat(arr).concat(arr).concat(arr).concat(arr).concat(arr).concat(arr);
            this.setState({
                dataSource: this.source.cloneWithRows(arr)
            })
        } catch (err) {
            this.setState({
                dataSource: this.source.cloneWithRows([{title: 'error'}])
            })
        }
    }

    renderRow(rowData: any, sectionID: string | number, rowID: string | number, highlightRow?: boolean) {
        return <Item name={rowData.title} desc="dddd" navigator={this.props.navigator}
                     icon={require('./assets/img/ic_follow_more.png')}/>
    }

    render(): JSX.Element {
        return (
            <View
                style={{flex:1, justifyContent:'center', alignItems: 'stretch', flexDirection:'column'}}>
                <ListView style={{alignSelf:'stretch'}}
                          renderScrollComponent={()=><RecyclerViewBackedScrollView {...this.props} />}
                          initialListSize={1}
                          dataSource={this.state.dataSource}
                          renderRow={this.renderRow.bind(this)}/>
            </View>
        )
    }
}
