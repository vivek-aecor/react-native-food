import React, { Component } from 'react';
import {
    StyleSheet,
    TabBarIOS,
    Text,
    View,
} from 'react-native';
import colors  from './styles/colors';

// Containers
import Recipes from './containers/recipesNavigator';
import Search from './containers/searchNavigator';
import MyKitchen from './containers/myKitchenNavigator';
import Questions from './containers/questions';
import CheckList from './containers/checkList';

// Assets
import recipePNG from './assets/routes/recipes.png';
import myKitchenPNG from './assets/routes/myKitchen.png';
import checkListPNG from './assets/routes/checkList.png';
import searchPNG from './assets/routes/search.png';
import morePNG from './assets/routes/more.png';

export default class Routes extends Component {
    static description = 'Tab-based navigation.';

    constructor(props) {
        super(props);

        this.state = {
            selectedTab: 'Recipes'
        };
        this.styles = StyleSheet.create({
            tabContent: {
                flex: 1,
                alignItems: 'center'
            },
            tabBar: {
                opacity: 1
            },
            tabText: {
                color: 'black',
                margin: 50
            }
        });
        this.menusItems = [
            {
                name: 'Recipes',
                bgColor: '#333',
                icon: recipePNG,
                container: <Recipes />
            },
            {
                name: 'My Kitchen',
                bgColor: '#ccc',
                icon: myKitchenPNG,
                container: <MyKitchen />
            },
            {
                name: 'Check List',
                bgColor: '#eee',
                icon: checkListPNG,
                container: <CheckList />
            },
            {
                name: 'Search',
                bgColor: '#ddd',
                icon: searchPNG,
                container: <Search />
            },
            {
                name: 'More',
                bgColor: '#kkk',
                icon: morePNG
            }
        ];
    }

    renderContent = (color:string, pageText:string) => {
        return (
            <View style={[this.styles.tabContent, {backgroundColor: color}]}>
                <Text style={this.styles.tabText}>{pageText}</Text>
                <Text style={this.styles.tabText}>re-renders of the {pageText}</Text>
            </View>
        );
    };

    render() {
        return (
            <View style={{flex: 1}}>
                <TabBarIOS
                    translucent={true}
                    tintColor={colors.red}
                    style={this.styles.tabBar}>

                    {this.menusItems.map((menu, i) => {
                        return (
                            <TabBarIOS.Item
                                key={i}
                                icon={menu.icon}
                                title={menu.name}
                                selected={this.state.selectedTab ===  menu.name}
                                onPress={() => {
                                    this.setState({
                                      selectedTab: menu.name
                                    });
                                }}>
                                {menu.container ? menu.container : this.renderContent(menu.color, menu.name)}
                            </TabBarIOS.Item>
                        );
                    })}

                </TabBarIOS>
                <Questions />
            </View>
        );
    }
}
