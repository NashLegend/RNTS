/**
 * Created by Zhihu on 2017/2/8.
 */
import * as React from "react";
import {
    ListView,
    StyleSheet,
    RecyclerViewBackedScrollView,
    DataSourceAssetCallback,
    RefreshControl,
    View,
    ListViewDataSource
} from "react-native";
import BaseData from "../model/BaseData";
import createView from "../Factory";
import {profile, activities} from "../Mocks";
import People from "../model/People";
import SectionHead from "../model/SectionHead";
import Empty from "../model/Empty";
import Component = React.Component;

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
                all.push(new SectionHead());
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
            refreshing: false,
            dataSource: this.source.cloneWithRows(this.source)
        }
    }

    onRefresh() {
        this.setState({
            ...this.state,
            refreshing: true,
        });
    }

    render() {
        return (
            <ListView style={{flex:1}}
                      renderScrollComponent={()=><RecyclerViewBackedScrollView {...this.props} refreshControl={
                              <RefreshControl
                                refreshing={this.state.refreshing}
                                onRefresh={this.onRefresh.bind(this)}
                                tintColor="#ff0000"
                                title="Loading..."
                                titleColor="#00ff00"
                                colors={['#ff0000', '#00ff00', '#0000ff']}
                                progressBackgroundColor="#ffff00"
                              />
                            }/>}
                      initialListSize={1}
                      renderSeparator={(sectionID, rowID)=><View key={`${sectionID}-${rowID}`} style={{backgroundColor:'#dbdbdb',height:0.5}}/>}
                      dataSource={this.state.dataSource}
                      renderRow={this.renderRow.bind(this)}/>
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