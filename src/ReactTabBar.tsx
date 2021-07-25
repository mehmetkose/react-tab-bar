import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
:root {
  --primary-color: #185ee0;
  --secondary-color: #e6eef9;
}

.react-tab-bar {
  position: fixed;
  left: 0;
  bottom: 1.3rem;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  box-sizing: border-box;
}
.tabs {
  display: flex;
  position: relative;
  background-color: #fff;
  box-shadow: 0 0 1px 0 rgba(#185ee0, 0.15), 0 6px 12px 0 rgba(#185ee0, 0.15);
  padding: 0.75rem;
  border-radius: 99px; // just a high number to create pill effect
  * {
    z-index: 2;
  }
}

input[type="radio"] {
  display: none;
}

.tab {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 54px;
	width: 200px;
	font-size: 1.25rem;
	font-weight: 500;
	border-radius: 99px; // just a high number to create pill effect
	cursor: pointer;
	transition: color 0.15s ease-in;
}

.notification {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  margin-left: 0.75rem;
  border-radius: 50%;
  background-color: var(--secondary-color);
  transition: 0.15s ease-in;
}

input[type="radio"] {
  &:checked {
    & + label {
      color: var(--primary-color);
      & > .notification {
        background-color: var(--primary-color);
        color: #fff;
      }
    }
  }
}

@media (max-width: 700px) {
  .tabs {
    transform: scale(0.6);
  }
}
`;

interface GlitterStyleProps {
  readonly indicator: number;
};
const GlitterStyle = styled.div<GlitterStyleProps>`
  position: absolute;
  display: flex;
  height: 54px;
  width: 200px;
  background-color: var(--secondary-color);
  z-index: 1;
  border-radius: 99px;
  transition: 0.25s ease-out;
  transform: translateX(${props => `${(props.indicator) * 100}%`});
`;


const ReactTabBar = ({ data = {} }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div>
      <GlobalStyle />
      <div>
        {Object.keys(data).map((key, indicator) => {
          return (
            activeTab === indicator && <div key={`key-${key}`}>{data[`${key}`]}</div>
          )
        })}
      </div>

      <div className="react-tab-bar">
        <div className="tabs">
          {Object.keys(data).map((tabKey, tabIndicator) => {
            return (
              <div key={tabIndicator}>
                <input 
                  onClick={() => setActiveTab(tabIndicator)} 
                  type="radio" id={`radio-${tabIndicator + 1}`} 
                  name="tabs" />
                <label className="tab" htmlFor={`radio-${tabIndicator + 1}`}>{tabKey}</label>
              </div>
            )
          })}
          <GlitterStyle indicator={activeTab} />
        </div>
      </div>
    </div>

  );
}

ReactTabBar.propTypes = {
  data: PropTypes.object.isRequired
}

export default ReactTabBar;
