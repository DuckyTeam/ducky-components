/* eslint-disable */
import React from 'react';
import classnames from 'classnames';
import {storiesOf} from '@kadira/storybook';
import {withKnobs} from '@kadira/storybook-addon-knobs';
import styles from './duckyStories.css';
import ReactTextArea from 'react-textarea-autosize';

function issuesOf(issues) {
  return {
    label: `issues: ${issues.map((url) => url.split('/').pop()).join(', ')}`,
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

export function className() {
  return {
    type: 'className'
  };
}

export function func(value) {
  return {
    type: 'func',
    value: value || 'Something happened!'
  };
}

export function bool(value) {
  return {
    type: 'bool',
    value: value === undefined ? true : value
  };
}

export function number(value) {
  return {
    type: 'number',
    value: value || 0
  }
}

export function string(value) {
  return {
    type: 'string',
    value: value || ''
  };
}

export function json(value) {
  return {
    type: 'json',
    value: JSON.stringify(value || {}, null, 2)
  };
}

class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      props: this.extractProps(props.propsDescription),
      useDarkBackground: false,
      jsonError: false
    }
  }
  extractProps(props) {
    return Object.keys(props).reduce((allProps, key) => {
      const prop = props[key];

      if (prop.type === 'oneOf') {
        allProps[key] = prop.options[0]
      } else if (prop.type === 'className') {
        allProps[key] = 'some-class'
      } else if (prop.type === 'func') {
        allProps[key] = () => {alert(prop.value)}
      } else if (prop.type === 'bool') {
        allProps[key] = prop.value
      } else if (prop.type === 'number') {
        allProps[key] = prop.value
      } else if (prop.type === 'string') {
        allProps[key] = prop.value
      } else if (prop.type === 'json') {
        allProps[key] = prop.value;
      }

      return allProps;
    }, {});
  }
  func(propKey) {
    return (
      <div className={styles.prop}>
        <strong>{propKey}</strong> (function)
      </div>
    )
  }
  bool(propKey) {
    return (
      <div className={styles.prop}>
        <strong>{propKey} </strong>
        <input type="checkbox" checked={this.state.props[propKey]} onChange={(event) => {
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
      <div className={styles.prop}>
        <strong>{propKey}</strong>
        <div>
          <input type="text" value={this.state.props[propKey]} onChange={(event) => {
            this.setState({
              props: Object.assign(this.state.props, {
                [propKey]: event.target.value
              })
            })
          }} />
        </div>
      </div>
    )
  }
  string(propKey) {
    return (
      <div className={styles.prop}>
        <strong>{propKey}</strong>
        <div>
          <input type="text" value={this.state.props[propKey]} onChange={(event) => {
            this.setState({
              props: Object.assign(this.state.props, {
                [propKey]: event.target.value
              })
            })
          }} />
        </div>
      </div>
    )
  }
  json(propKey) {
    return (
      <div className={styles.prop}>
        <strong>{propKey}</strong>
        <div>
          <ReactTextArea
            className={classnames(styles.textarea, {
              [styles.jsonError]: this.state.jsonError
            })}
            onChange={(event) => {
              let jsonError = false
              try {
                JSON.parse(event.target.value)
              } catch (e) {
                jsonError = true
              }
              this.setState({
                props: Object.assign(this.state.props, {
                  [propKey]: event.target.value
                }),
                jsonError
              })
            }}
            value={this.state.props[propKey]}
          />
        </div>
      </div>
    )
  }
  oneOf(key, description) {
    return (
      <div className={styles.prop}>
        <strong>{key}</strong>
        <div>
          <select value={this.state.props[key]} onChange={(event) => {
            this.setState({
              props: Object.assign(this.state.props, {
                [key]: event.target.value
              })
            })
          }}>
            {description.options.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>
    );
  }
  className() {
    return (
      <div className={styles.prop}>
        <strong>className</strong>
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
      <div className={classnames(styles.wrapper, {
        [styles.darkBackground]: this.state.useDarkBackground
      })}>
        <div
          className={classnames(styles.backgroundToggler, {
            [styles.darkBackground]: !this.state.useDarkBackground
          })}
          onClick={() => this.setState({useDarkBackground: !this.state.useDarkBackground})}
          />
        <div className={styles.component}>
          {this.props.renderFunc ? this.props.renderFunc(component) : component}
        </div>
        <div className={styles.props}>
          {Object.keys(this.props.propsDescription).map((key, index) => {
            return (
              <div key={index}>
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
    });
}
