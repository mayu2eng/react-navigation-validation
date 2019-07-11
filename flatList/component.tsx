import {
    FlatList,
    SectionListRenderItem,
    StyleSheet,
    View
} from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export interface Props<T> {
    onClicked?: (item: T, index: number) => void,
    data: Array<T>,
    onRef?: (ref: any) => void,
    renderItem: SectionListRenderItem<T>,
    horizontal?: boolean
}

abstract class FlatListContainer<T> extends React.PureComponent<Props<T>> {
    constructor(props: Props<T>) {
        super(props);
    }

    render() {
        const { data, onRef, renderItem, horizontal } = this.props;
        return(
            <View style={ styles.container }>
                <FlatList
                    ref={ ref => onRef && onRef(ref) }
                    data={ data }
                    renderItem={  renderItem }
                    keyExtractor={ (item, index) => index.toString() }
                    removeClippedSubviews={ true }
                    horizontal={ horizontal }
                />
            </View>
        );
    }
}

export default FlatListContainer;
