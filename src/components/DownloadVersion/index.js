import React, { Component } from 'react'
import './index.css'
import '../../screens/index.css'
import {
    Label
} from 'reactstrap'
import DButton from '../../components/DButton'
class DownloadVersion extends Component {
    render () {
        const { title, image, key } = this.props
        return (
            <div key={key} className="download-version-container">
                <h1  className="text-mid-title">{title}</h1>
                <DButton title="DOWNLOAD" image={image}/>        
            </div>
        )
    }
}

export default DownloadVersion