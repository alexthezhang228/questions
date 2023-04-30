/*
 * @Author: alexthezhang228 110424337+alexthezhang228@users.noreply.github.com
 * @Date: 2023-04-19 15:27:14
 * @LastEditors: alexthezhang228 110424337+alexthezhang228@users.noreply.github.com
 * @LastEditTime: 2023-04-30 11:50:16
 * @FilePath: /questions/src/App.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import data from './data'
import { useState } from 'react';
import Questions from './questions';
const App = () => {
  const [questions,setQuestions]=useState(data)
  return (
    <main>
      <Questions questions={questions}></Questions>
    </main>
  )
};
export default App;
