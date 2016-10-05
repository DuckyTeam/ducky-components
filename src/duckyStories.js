/* eslint-disable */
import React from 'react';
import {storiesOf} from '@kadira/storybook';
import {withKnobs} from '@kadira/storybook-addon-knobs';

function issuesOf(issues) {
  return {
    label: `Issues: ${issues.map((url) => url.split('/').pop()).join(', ')}`,
    Issues() {
      return (
        <ul>
          {issues.map((issue, index) => (
            <li key={index}>
              <a href={issue}>
                {issue}
              </a>
            </li>
          ))}
        </ul>
      );
    }
  };
}

export function oneOf(...args) {
  return {
    type: 'oneOf',
    options: args
  };
}

export const className = {
  type: 'className'
};

export const icon = {
  type: 'icon'
};

export const func = {
  type: 'func'
};

export const bool = {
  type: 'bool'
};

export const number = {
  type: 'number'
};

export const string = {
  type: 'string'
};

export function json(data) {
  return {
    type: 'json',
    data: JSON.stringify(data || {}, null, 2)
  };
}

class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {props: this.extractProps(props.propsDescription) }
  }
  extractProps(props) {
    return Object.keys(props).reduce((allProps, key) => {
      const prop = props[key];

      if (prop.type === 'oneOf') {
        allProps[key] = prop.options[0]
      } else if (prop.type === 'className') {
        allProps[key] = 'some-class'
      } else if (prop.type === 'icon') {
        allProps[key] = 'icon-leaf';
      } else if (prop.type === 'func') {
        allProps[key] = console.log
      } else if (prop.type === 'bool') {
        allProps[key] = false
      } else if (prop.type === 'number') {
        allProps[key] = 123
      } else if (prop.type === 'string') {
        allProps[key] = 'hello'
      } else if (prop.type === 'json') {
        allProps[key] = prop.data;
      }

      return allProps;
    }, {});
  }
  func(propKey) {
    return (
      <div>
        <strong>{propKey}:</strong> () => {'{}'}
      </div>
    )
  }
  bool(propKey) {
    return (
      <div>
        <strong>{propKey}:</strong> <input type="checkbox" checked={this.state.props[propKey]} onChange={(event) => {
          this.setState({
            props: Object.assign(this.state.props, {
              [propKey]: event.target.checked
            })
          })
        }} />
      </div>
    )
  }
  number(propKey) {
    return (
      <div>
        <strong>{propKey}:</strong> <input type="text" value={this.state.props[propKey]} onChange={(event) => {
          this.setState({
            props: Object.assign(this.state.props, {
              [propKey]: event.target.value
            })
          })
        }} />
      </div>
    )
  }
  string(propKey) {
    return (
      <div>
        <strong>{propKey}:</strong> <input type="text" value={this.state.props[propKey]} onChange={(event) => {
          this.setState({
            props: Object.assign(this.state.props, {
              [propKey]: event.target.value
            })
          })
        }} />
      </div>
    )
  }
  json(propKey) {
    return (
      <div>
        <strong>{propKey}:</strong> <textarea value={this.state.props[propKey]} onChange={(event) => {
          this.setState({
            props: Object.assign(this.state.props, {
              [propKey]: event.target.value
            })
          })
        }} />
      </div>
    )
  }
  oneOf(key, description) {
    return (
      <div>
        <strong>{key}: </strong>
        <select value={this.state.props[key]} onChange={(event) => {
          this.setState({
            props: Object.assign(this.state.props, {
              [key]: event.target.value
            })
          })
        }}>
          {description.options.map((option) => (
            <option value={option}>{option}</option>
          ))}
        </select>
      </div>
    );
  }
  icon() {
    return (
      <div>
        <strong>icon: </strong>
        <select value={this.state.props.icon} onChange={(event) => {
          this.setState({
            props: Object.assign(this.state.props, {
              icon: event.target.value
            })
          })
        }}>
          <option value="icon-leaf">icon-leaf</option>
          <option value="icon-pig">icon-pig</option>
        </select>
      </div>
    );
  }
  className() {
    return (
      <div>
        <strong>className:</strong> some-class
      </div>
    );
  }
  ensureTypes(props) {
    return Object.keys(props).reduce((allProps, key) => {
      const prop = props[key];
      const description = this.props.propsDescription[key];

      if (description.type === 'bool') {
        allProps[key] = Boolean(props[key])
      } else if (description.type === 'number') {
        allProps[key] = Number(props[key])
      } else if (description.type === 'string') {
        allProps[key] = String(props[key])
      } else if (description.type === 'json') {
        try {
          allProps[key] = JSON.parse(props[key])
        } catch (e) {
          allProps[key] = this.state.props[key];
        }
      } else {
        allProps[key] = props[key]
      }

      return allProps;
    }, {});
  }
  render() {
    const Component = this.props.Component;
    const props = this.ensureTypes(this.state.props);
    const component = <Component {...props}/>;

    return (
      <div style={{display: 'flex'}}>
        <div style={{flex: '1'}}>
          {this.props.renderFunc ? this.props.renderFunc(component) : component}
        </div>
        <div style={{flex: '0 0 300px'}}>
          {Object.keys(this.props.propsDescription).map((key, index) => {
            return (
              <div key={index} style={{marginBottom: '10px'}}>
                {this[this.props.propsDescription[key].type](key, this.props.propsDescription[key])}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

function functionName(fun, nameSpace) {
  var ret = fun.toString();
  ret = ret.substr('function '.length);
  ret = ret.substr(0, ret.indexOf('('));
  return ret;
}

export function stories(module, Component, issues, propsDescription, name, renderFunc) {
  const {label, Issues} = issuesOf(issues || []);

  const stories = storiesOf(name || functionName(Component), module);
  stories.addDecorator(withKnobs);
  stories
    .add(label, () => (
      <Issues />
    ))
    .add('component', () => {
      return <Preview Component={Component} propsDescription={propsDescription} renderFunc={renderFunc}/>
    })


  return stories;
}
