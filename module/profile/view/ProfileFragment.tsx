/**
 * Created by Zhihu on 2017/2/8.
 */
import * as React from "react";
import {
    ListView,
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
    rawData: Array<BaseData> = [];

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
        try {
            this.rawData = [];
            let people: People = JSON.parse(profile);
            this.rawData.push(people);
            let feeds: Array<BaseData> = JSON.parse(activities).data;
            if (feeds.length > 0) {
                this.rawData.push(new SectionHead());
                this.rawData = this.rawData.concat(feeds);
            } else {
                this.rawData.push(new Empty())
            }
            this.setState({
                refreshing: false,
                dataSource: this.source.cloneWithRows(this.rawData)
            })
        } catch (err) {
            this.setState({
                refreshing: false,
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
        setTimeout(this.request.bind(this), 1000);
    }

    render() {
        return (
            <ListView style={{flex:1}}
                      renderScrollComponent={()=><RecyclerViewBackedScrollView {...this.props}
                          refreshControl={
                                  <RefreshControl
                                    refreshing={this.state.refreshing}
                                    onRefresh={this.onRefresh.bind(this)}
                                    tintColor="#ff0000"
                                    title="Loading..."
                                    titleColor="#00ff00"
                                    colors={['#1E8AE8']}
                                    progressBackgroundColor="#ffffff"
                                  />
                                }/>}
                      initialListSize={1}
                      renderSeparator={(sectionID, rowID)=><View key={`${sectionID}-${rowID}`} style={{backgroundColor:'#dbdbdb',height:0.5}}/>}
                      dataSource={this.state.dataSource}
                      renderRow={this.renderRow.bind(this)}/>
        );
    }
}