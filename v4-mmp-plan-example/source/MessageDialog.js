import React, { Component } from 'react'
import propTypes from 'prop-types'

import { View, Modal, Text, Button } from 'react-native'

import { Styles } from './Styles'

export default class MessageDialog extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            visible: false,
            value: ''
        }
    }

    show = () => {
        this.setState({ visible: true })
    }

    close = () => {
        this.setState({
            visible: false,
            value: ''
        })
    }

    render() {
        return (
            <Modal
                visible={this.state.visible}
                transparent={true}>
                <View style={Styles.centeredView}>
                    <View style={Styles.modalView}>
                        <Text>{this.props.title}</Text>
                        <View style={{ margin: 4 }} />
                        <Text>{this.props.message}</Text>
                        <View style={{ margin: 4 }} />
                        <Button
                            title='ok'
                            titleColor='white'
                            onPress={() => this.close()} />
                    </View>
                </View>
            </Modal>
        )
    }
}

MessageDialog.propTypes = {
    title: propTypes.string.isRequired,
    message: propTypes.string.isRequired,
    accessibilityLabel: propTypes.string.isRequired
}
