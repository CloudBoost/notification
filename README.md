# Introduction

This is the React Component for user notifications.

## NPM Installation
```
npm install cloudboost-notification
```

### Usage

``` js

import NotificationModal from 'cloudboost-notification';

//For ES5 (requireJs)
var NotificationModal = require('cloudboost-notification');

```

### Sample Code

``` js

import React from 'react';
import NotificationModal from 'cloudboost-notification'

class YourComponent extends React.Component {

    constructor(props){
        super(props)

    }
let notifications=[]//notifications array
    render() {
        return (
          <NotificationModal notifications={notifications}  />
        );
    }

}




```

# LICENSE

Copyright 2016 HackerBay, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

<img align="right" height="150" src="https://cloud.githubusercontent.com/assets/5427704/7724257/b7f45d6c-ff0d-11e4-8f60-06024eaa1508.png">

#### Getting Started and Tutorials

Visit [Getting Started](https://tutorials.cloudboost.io) for tutorial and quickstart guide.


#### API Reference

Visit [CloudBoost Docs](http://docs.cloudboost.io) for API Reference.
