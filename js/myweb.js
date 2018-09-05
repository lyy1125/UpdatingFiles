import React, { Component } from 'react';
import { WebView, View, Platform } from 'react-native';
import AndroidWebView from 'etw-react-native-webview-file-upload-android';

export default class myweb extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                {Platform.select({
                    android: () => <AndroidWebView
                        source={{ uri: 'https://mobilehtml5.org/ts/?id=23' }}
                    />,
                    ios: () => <WebView
                        source={{ uri: 'https://mobilehtml5.org/ts/?id=23' }}
                    />
                })()}
            </View>
        );
    }
}