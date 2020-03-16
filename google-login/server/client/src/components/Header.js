import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav>
        <div
          class="nav-wrapper  indigo darken-3"
          style={{ padding: '0px 20px 20px 20px' }}
        >
          <a href="#!" class="brand-logo">
            <i class="material-icons">Google</i>Login App
          </a>
          <ul class="right hide-on-med-and-down">
            <li>
              <a href="sass.html">
                <i class="material-icons">search</i>
              </a>
            </li>
            <li>
              <div class="btn red darken-4 col s10 m4">
                <a
                  href="/users/google-oauth/"
                  style={{
                    textTransform: 'none'
                  }}
                >
                  <div className="left">
                    <img
                      width="20px"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                    />
                  </div>
                  Login with Google
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
