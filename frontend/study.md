# hooks

hooks是一类函数，可以帮助我们管理组件的状态和生命周期特性
可以使函数组件拥有类组件的一些特性                    ？ 
<details>
<summary><font color="#FF0000">什么是类组件，什么是函数组件</font></summary>
在React中，网页可以看作由函数组件和类组件组成，用于创建可重用的UI。
<ol>
<li>函数组件</li>
故名思意，函数组件就是一种用函数定义的组件，是<font color="#FF0000">无状态的</font>。不包含内部状态或生命周期方法。所以经常使用Hooks来引入状态和副作用。副作用一般指的是与组件状态变化无关的操作，比如数据获取，订阅。可以使用useEffect来处理副作用。理由是副作用可能会影响UI组件的状态，因此需要在UI渲染render函数结束后再执行，有点类似于Android中的生命周期概念
<li>类组件</li>
类组件是更大的组件，利用了ES6中的Class关键字来定义，是<font color="#FF0000">有状态的</font>，并且包含生命周期函数。可以通过this.state来定义状态
</ol>
</details>  

## 有以下几种函数
### 1. useState：允许函数组件中使用状态，？
<details>
<summary><font color="#FF0000">`使用场景是什么？有什么用处，如果没有这个怎么实现`</font></summary>
主要作用是为了保存组件内部的数据
</details>

```js
import React,{useState} from 'react';
function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

### 2. useEffect:允许函数组件中执行副作用操作，例如数据获取，订阅，手动DOM操作等，可以接收一个函数，该函数中包含在组件渲染后执行的代码。

```js
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```
一般在这里面执行异步获取数据什么的


### 3. useContext:允许在函数组件中定于React上下文
使用场景  
1. 主题切换：需要切换主题的时候，多个组件中需要共享主题信息
2. 用户身份认证信息
3. 全局配置信息，比如后端API的地址，应用配置等
```js
import React, { useContext } from 'react';
import MyContext from './MyContext';

function Example() {
  const value = useContext(MyContext);

  return <p>Context value: {value}</p>;
}

```

### 4. useReducer:提供一个更复杂的状态管理
使用场景  
1. 复杂状态逻辑，比如多个**相关状态**变化时
2. 表单逻辑处理
3. 全局状态管理，比如应用的主题
4. 异步操作，根据异步操作的结果更新  
```js
import React, { useReducer } from 'react';

// 定义 reducer 函数
const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return { ...state, value: action.payload };
    case 'RESET':
      return { ...state, value: '' };
    default:
      return state;
  }
};

// 初始状态
const initialInputState = { value: '' };

// 使用 useReducer
function InputWithReducer() {
  const [inputState, dispatch] = useReducer(inputReducer, initialInputState);

  const handleChange = (e) => {
    dispatch({ type: 'CHANGE', payload: e.target.value });
  };

  const handleReset = () => {
    dispatch({ type: 'RESET' });
  };

  return (
    <div>
      <input type="text" value={inputState.value} onChange={handleChange} />
      <button onClick={handleReset}>Reset</button>
      <p>Current Value: {inputState.value}</p>
    </div>
  );
}
```
```js
import React, { useState } from 'react';

// 使用 useState
function InputWithState() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleReset = () => {
    setInputValue('');
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={handleReset}>Reset</button>
      <p>Current Value: {inputValue}</p>
    </div>
  );
}

```
在上面这个例子中分别使用useReducer和useState实现，但是使用useReducer可以根据一个数据（状态）执行多种操作，而使用useState只能绑定一种，需要实现多个函数来处理，因此使用useReducer是更好的方式  

### 5. useCallback:用于缓存回调函数
使用背景是当一个组件重新渲染的时候，函数组件内部定义的函数会被重新创建，会导致传递给子组件的回调函数产生变化，触发子组件不必要的渲染，因此创建了useCallback函数来缓存，确保依赖不变的情况下不会重新创建  
### 6. useMemo: 用于缓存计算结果
### 7. useRef: 用于在函数组件中创建可变对象
### 8. useImperativeHandle： 用于在父组件中自定义暴漏给子组件的实例值


# routes
实现导航和路由的库
用标签<Routes>定义顶级组件，包含所有的路由配置，并根据URL渲染对应的页面组件