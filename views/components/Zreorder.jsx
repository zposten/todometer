import React from 'react'
import ReactDOM from 'react-dom'
import Reorder from 'react-reorder'

class ListItem extends React.Component {
  render() {
    <div className='inner'
         style={{color: this.props.item.color}}>
      { this.props.sharedProps ? this.props.sharedProps.prefix : null }
      { this.props.item.name }
    </div>
  }
}

class Main extends React.Component {
  constructor(props) {
    super(props)

    var list = [];
    for (var i = 0; i < 10; i += 1) {
      list.push({
        name: ['Thing', i].join(' '),
        color: [
          'rgb(',(i + 1) * 25, ',',
          250 - ((i + 1) * 25),',0)'
        ].join('')
      });
    }

    this.state = {
      arr: list,
      prefix: 'Prefix'
    }
  }

  callback(event, item, index, newIndex, list) {
    this.setState({arr: list})
  }

  itemClicked(event, item) {
    this.setState({
      clickedItem: item === this.state.clickedItem ? undefined : item
    })
  }

  itemClicked2(event, item) {
    this.setState({clickedItem2: item})
  }

  disableToggled() {
    this.setState({disableReorder: !this.state.disableReorder})
  }

  prefixChanged(event) {
    var target = event.currentTarget
    this.setState({prefix: target.value})
  }

  render() {
    return (
      <div className='app'>
        <p><strong>Lock horizontal</strong></p>
        <small>This example has a hold time of 500 millis before dragging</small>
        <p>Selected item: {this.state.clickedItem ? this.state.clickedItem.name : undefined}</p>
        <p>Prefix (shared props):
          <input type='text' onChange={this.prefixChanged} value={this.state.prefix}/>
        </p>

        <Reorder
          itemKey='name'
          lock='horizontal'
          holdTime={500}
          list={this.state.arr}
          template={ListItem}
          callback={this.callback}
          listClass='my-list'
          itemClass='list-item'
          itemClicked={this.itemClicked}
          selected={this.state.clickedItem}
          selectedKey='name'
          reorderId='name'
          sharedProps={{
            prefix: [this.state.prefix, ': '].join('')
          }} />
      </div>
    )
  }
}


export default Main
