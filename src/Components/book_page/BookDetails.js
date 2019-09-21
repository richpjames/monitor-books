import React, {Component} from 'react'
import Photos from './Photos';
import Text from './Text';
import Title from './Title';
import BuyButton from './BuyButton';

class BookDetails extends Component {

    render (){
    return <>
        <Photos />
        <Title/>
        <Text />
        <BuyButton/>
    </>
    }
    componentDidMount(){
        this.props.setBookPage();
    }
    componentWillUnmount(){
        this.props.setBookPage();
    }
}

export default BookDetails
