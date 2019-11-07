/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

class Index extends React.Component {
  render() {
    return (
      <div>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.location.href = "/library/welcome";`
          }}
        />
      </div>
    );
  }
}

module.exports = Index;
