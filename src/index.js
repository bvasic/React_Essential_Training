import React, {Component} from 'react'
import ReactDOM from 'react-dom'

let skiData = {
    total: 50,
    powder: 20,
    backcountry: 10,
    goal: 100
}

class SkiDayCounter extends Component{
    render() {
        return (
            <section>
                <div>
                    <p>Total days: {this.props.total}</p>
                </div>
                <div>
                    <p>Powder days: {this.props.powder}</p>
                </div>
                <div>
                    <p>Backcountry days: {this.props.backcountry}</p>
                </div>
                <div>
                    <p>Goal: {this.props.goal}</p>
                </div>
            </section>
        )
    }
}

ReactDOM.render(
    <SkiDayCounter 
        total={skiData.total}
        powder={skiData.powder}
        backcountry={skiData.backcountry}
        goal={skiData.goal}/>,
    document.getElementById('root')
)

