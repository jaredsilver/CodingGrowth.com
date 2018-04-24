import React from 'react'

class NotFoundPage extends React.Component {
  componentWillMount() {
    if(typeof window !== 'undefined') {
      window.location.pathname = '/'
    }
  }

  render() {
    return <div>404: Page Not Found</div>
  }
}

export default NotFoundPage