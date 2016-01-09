import React, {Component, PropTypes} from 'react';
import strformat          from 'strformat';

import Footer from '../components/Footer/Footer.jsx';
import { footerLinks, companywallShareLink } from '../config';

import { sendEvent } from '../utils/googleAnalytics';

export default class FooterContainer extends Component {

    static contextTypes = {i18n: PropTypes.object};

    state = {
        showShareDialog: false
    };

    componentWillMount() {
        const { getLocale } = this.context.i18n;
        this.links = {};

        for (const linkType in footerLinks) {
            this.links[linkType] = strformat(footerLinks[linkType], {
                lang: getLocale()
            });
        }

        this.linkToShare = companywallShareLink;
    }

    handleLinkClick = (type) => {
        sendEvent('footer', 'click', type);
    };

    handleShare = () => {
        this.setState({showShareDialog: true});
        sendEvent('footer', 'share');
    };

    handleShareClose = () => {
        this.setState({showShareDialog: false});
    };

    render() {
        return (
            <Footer
                links={this.links}
                showShareDialog={this.state.showShareDialog}
                linkToShare={this.linkToShare}
                onLinkClick={this.handleLinkClick}
                onShareClick={this.handleShare}
                onShareClose={this.handleShareClose}
            />
        );
    }

    openLinkInPopup(URL) {
        window.open(URL, '', 'width=500, height=500');
    }

    openLinkInNewTab(URL) {
        window.open(URL, '_blank');
    }
}

